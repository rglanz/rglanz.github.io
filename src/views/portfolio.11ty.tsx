import { Fragment, h } from "preact";
import InternalHero from "../_eleventy/includes/containers/InternalHero/InternalHero";
import CTA from "../_eleventy/includes/containers/CTA/CTA";
import image from "../_eleventy/shortcodes/image";
import { H2, P } from "../_eleventy/includes/atoms/Typography/Typography";
import Button from "../_eleventy/includes/atoms/Button/Button";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="Portfolio" />
      <section id="portfolio">
        <div className="container">{csCardArray()}</div>
      </section>
      <CTA />
    </Fragment>
  );
};

const csCardArray = () => {
  const csCardData = [
    {
      name: "Cedar Studios",
      href: "https://cedarstudioswebdesign.com/",
      image: "./src/_client/assets/images/portfolio/cs-thumbnail.webp",
      description:
        "This website was designed and hand-coded in-house. It's a classic 5-page design with an additional blog for SEO purposes. The website has a responsive, modern feel and dark mode built in. The website is optimized for speed, scoring a 100/100 Google Page Speed Score on both mobile and desktop.",
    },
    {
      name: "CR Facepainting",
      href: "https://crfacepainting.com/",
      image: "./src/_client/assets/images/portfolio/cr-thumbnail.webp",
      description:
        "CR Face Painting was started 15 years ago by a Cedar Rapids native. They perform face painting and temporary tattoos for parties and events in the Cedar Rapids area. The website features a responsive portfolio and a clean, colorful design to match their beautiful artwork. Parallax scrolling images at the top of each page to give the website a responsive, modern feel.",
    },
    {
      name: "LandScapes",
      href: "https://landscapes-template.netlify.app/",
      image: "./src/_client/assets/images/portfolio/ls-thumbnail.webp",
      description:
        "LandScapes is a fictional landscaping company in Cedar Rapids, IA. This website is for demonstration purposes only. Contact us if you would like to purchase this website for your business.",
    },
  ];

  const csCards = csCardData.map((card) => {
    const thumbnail = image({ src: card.image, alt: card.name });
    return (
      <div className="cs-card">
        <div className="cs-left">
          <a href={card.href} rel="noopener noreferrer" target="blank">
            {thumbnail}
          </a>
        </div>
        <div className="cs-right">
          <H2>{card.name}</H2>
          <P>{card.description}</P>
          <Button href={card.href} secondary external>
            <span>
              See It Live{" "}
              <img
                src="/assets/svgs/external-link-2.svg"
                alt="link button"
                className="cs-icon"
                width="16"
                height="16"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />
            </span>
          </Button>
        </div>
      </div>
    );
  });

  return csCards;
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Portfolio",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/portfolio/",
    css: "/styles/portfolio.css",
    // preloadImage: "",
    eleventyNavigation: { key: "Portfolio", order: 400 },
  }),
};
