const {
  importAtoms,
  importContainers,
} = require("./src/_eleventy/shortcodes/less.jsx");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy({
    "src/_client/assets": "assets",
    "src/_client/blog/**/*.webp": "assets/images",
    "src/_client/blog/**/*.jpeg": "assets/images",
    "src/_client/blog/**/*.jpg": "assets/images",
    "src/_client/blog/**/*.png": "assets/images",
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

  // Generate LESS imports
  eleventyConfig.on("eleventy.after", () => {
    importAtoms();
    importContainers();
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
