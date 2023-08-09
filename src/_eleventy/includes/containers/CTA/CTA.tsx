import { h } from "preact";
import image from "../../../shortcodes/image";
import Button from "../../atoms/Button/Button";
import { H2 } from "../../atoms/Typography/Typography";

const background = image({
  src: `${__dirname}/cta.webp`,
  alt: "lake at sunset",
});

export default () => {
  return (
    <section id="cta">
      <div className="container">
        {background}
        <div className="cs-container">
          <H2>
            Get a beautiful,
            <br />
            performance-driven
            <br />
            website.
          </H2>
          <Button secondary href="/contact">
            Drop Us A Line
          </Button>
        </div>
      </div>
    </section>
  );
};
