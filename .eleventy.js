const { buildLess } = require("./src/_eleventy/shortcodes/less");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addWatchTarget("./src/_eleventy/includes/**/*.less");
  eleventyConfig.addWatchTarget("./src/styles/*.less");
  eleventyConfig.addPassthroughCopy({
    "src/_client/assets": "assets",
    "src/_eleventy/includes/**/*.svg": "/assets/svgs/",
  });

  // Add JSX/TSX as custom template languages
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
  });

  // Enable live reload
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    open: true,
    files: ["src/"],
  });

  // Compile LESS
  eleventyConfig.on("eleventy.after", () => {
    buildLess();
  });

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_eleventy/layouts",
      data: "_client/data",
    },
    htmlTemplateEngine: "njk",
  };
};
