// Adds import from atoms/containers to _root/_critical, respectively
import glob from "glob";
import fs from "fs";
import path from "path";

const importStart = "// Imports [Do Not Edit!]";
const importEnd = "// End Imports";

export const importAtoms = () => {
  const atoms = glob.sync("./src/_eleventy/includes/atoms/**/*.less");
  const imports = atoms.map((atom) => {
    return `@import "${atom.replace("./src/", "../")}";`;
  });

  let root = fs.readFileSync("./src/styles/_root.less", { encoding: "utf8" });

  if (root.includes(importStart)) {
    const headerEndIndex = root.indexOf(importEnd) + importEnd.length + 1;
    root = root.slice(headerEndIndex);
  }

  const newRoot = [importStart, ...imports, importEnd, root].join("\n");
  fs.writeFileSync("./src/styles/_root.less", newRoot, { encoding: "utf8" });
};

export const importContainers = () => {
  const containers = glob.sync("./src/_eleventy/includes/containers/**/*.less");
  const imports = containers.map((container) => {
    return `@import "${container.replace("./src/", "../")}";`;
  });

  const critical = [importStart, ...imports, importEnd].join("\n");

  fs.writeFileSync("./src/styles/_critical.less", critical, {
    encoding: "utf8",
  });
};
