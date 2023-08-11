// Imports
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const less = require("less");
const autoPrefix = require("less-plugin-autoprefix");
const autoPrefixPlugin = new autoPrefix({
  browsers: "> 5%, last 5 versions, Firefox ESR, not dead",
});

// Entry point
const buildLess = () => {
  if (!fs.existsSync("./public/styles/"))
    fs.mkdirSync("./public/styles/", { recursive: true });

  // Compile _critical
  const containers = generateImports("./src/_eleventy/includes/containers");
  compileLess("_critical.less", containers);

  // Compile remaining
  const files = fs.readdirSync("./src/styles");
  files.forEach((file) => {
    if (file === "_root.less") {
      const atoms = generateImports("./src/_eleventy/includes/atoms");
      compileLess(`./src/styles/${file}`, atoms);
    } else {
      compileLess(`./src/styles/${file}`);
    }
  });
};

// Helpers
const generateImports = (parent) => {
  const files = glob.sync(`${parent}/**/*.less`);
  const imports = files.map((file) => `@import "${file}";`);

  return imports;
};

const compileLess = (filePath, imports = []) => {
  let lessContent = "";

  // Generate output
  if (fs.existsSync(filePath)) {
    lessContent = [
      ...imports,
      fs.readFileSync(filePath, { encoding: "utf8" }),
    ].join("\n");
  } else if (imports.length > 0) {
    lessContent = imports.join("\n");
  } else {
    return;
  }

  // Compile
  const file = path.basename(filePath);
  less.render(
    lessContent,
    { plugins: [autoPrefixPlugin], filename: file },
    (e, output) => {
      const outputPath = `./public/styles/${file.slice(
        0,
        file.length - 5
      )}.css`;

      fs.writeFileSync(outputPath, output.css, {
        encoding: "utf8",
        flag: "w",
      });
    }
  );
};

// Export
module.exports = {
  buildLess,
};
