import { Fragment, h } from "preact";
import { H1, P, Topper } from "../../atoms/Typography/Typography";
import Button from "../../atoms/Button/Button";
import image from "../../../shortcodes/image";

const heroImage = image({
  src: `${__dirname}/assets/hero.png`,
  alt: "tree of life",
  className: "cs-picture light",
  loading: "eager",
  sizes: "(max-width: 768px) 400px, 700px",
});

const heroImageDark = image({
  src: `${__dirname}/assets/hero-dark.png`,
  alt: "tree of life",
  className: "cs-picture dark",
  loading: "eager",
  sizes: "(max-width: 768px) 400px, 700px",
});

export default () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="cs-left">
          <Fragment>
            {heroImage}
            {heroImageDark}
          </Fragment>
        </div>

        <div className="cs-right">
          <Topper>Cedar Studios Web Design</Topper>
          <H1>
            Small Business
            <br />
            Web Design
          </H1>
          <P size="large">
            Gain more customers with a beautiful, performance-driven website.
            Starting at $150/mo.
          </P>
          <div className="cs-button-container">
            <Button secondary href="#about">
              Learn More
            </Button>
            <Button href="/contact">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
