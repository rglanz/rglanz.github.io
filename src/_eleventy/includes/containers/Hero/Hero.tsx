import { Fragment, h } from "preact";
import { H1, P, Topper } from "../../atoms/Typography/Typography";
import Button from "../../atoms/Button/Button";
import image from "../../../shortcodes/image";

const heroImage = image({
  src: `${__dirname}/assets/hero.png`,
  alt: "portfolio image",
  className: "cs-picture",
  loading: "eager",
  sizes: "(max-width: 768px) 400px, 700px",
});

export default () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="cs-left">{heroImage}</div>

        <div className="cs-right">
          <Topper>Software Engineer</Topper>
          <H1>Ryan Glanz</H1>
          <div className="cs-button-container">
            <Button href="mailto:glanzrm@gmail.com">Get In Touch</Button>
            <Button secondary href="#about">
              More About Me ↓
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
