import { h } from "preact";
const Image = require("@11ty/eleventy-img");
const path = require("path");

export default function (input) {
  const { src, alt, className, loading, sizes } = {
    ...input,
    className: input.className ?? "cs-picture",
    loading: input.loading ?? "lazy",
    sizes:
      input.sizes ??
      "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 2000px",
  };

  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let options = {
    widths: [400, 600, 800, 1200, 1920, 2000],
    formats: ["webp", "jpeg"],
    urlPath: "/assets/images/responsive/",
    outputDir: "./public/assets/images/responsive",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  };

  // Run sync
  Image(src, options);
  let metadata = Image.statsSync(src, options);
  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  // Generate source elements
  const imageArray = Object.values(metadata).map((imageFormat) => {
    return (
      <source
        type={imageFormat[0].sourceType}
        srcset={imageFormat.map((entry) => entry.srcset).join(", ")}
        sizes={sizes}
      />
    );
  });

  return (
    <picture className={className}>
      {imageArray}
      <img
        src={lowsrc.url}
        width={highsrc.width}
        height={highsrc.height}
        alt={alt}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
