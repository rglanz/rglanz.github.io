import { Fragment, h } from "preact";
import InternalHero from "../../_eleventy/includes/containers/InternalHero/InternalHero";
import CTA from "../../_eleventy/includes/containers/CTA/CTA";
import image from "../../_eleventy/shortcodes/image";
import {
  H1,
  H2,
  P,
  Topper,
} from "../../_eleventy/includes/atoms/Typography/Typography";
import Button from "../../_eleventy/includes/atoms/Button/Button";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="Web Design" />
      {summary()}
      {content()}
      <CTA />
    </Fragment>
  );
};

const summary = () => {
  return (
    <section id="summary">
      <div className="container">
        <Topper>Web Design</Topper>
        <H1>Beautiful, Intuitive Designs</H1>
        <P>
          Cedar Studios designs websites for Cedar Rapids/Iowa businesses that
          are fast, beautiful, responsive, and modern. We meticulously
          hand-craft each website, focusing on delivering a seamless user
          experience and optimal performance. Our designs focus on search engine
          optimization, intuitive navigation, and flawlessly adaption to any
          device. Transform your business' vision into an exceptional online
          experience.
        </P>
      </div>
    </section>
  );
};

const content = () => {
  const sbsImage = image({
    src: "./src/_client/assets/images/responsive.jpeg",
    alt: "laptop and phone",
  });
  const sbsImage2 = image({
    src: "./src/_client/assets/images/logo-design.jpeg",
    alt: "graphic designer",
  });

  return (
    <section id="content">
      <div className="container">
        <div className="cs-container">
          <div className="cs-left">
            <H2>Logos and Graphic Design</H2>
            <P>
              Many businesses make their logo quickly in order to focus on
              perfecting their product or service. Their other graphics usually
              get a similar treatment.
            </P>
            <P>
              However you should feel proud, not embarassed, to stamp your
              branding on&nbsp;
              <em>everything</em>.
            </P>
            <P>
              Whether you want a new logo or design, or an existing one
              professionally remade at a higher resolution, Cedar Studios is
              here to help.
            </P>
            <P bold className="cs-price">
              Price: <em>Logo — $199, Graphic Design — $99/hour</em>
            </P>
            <Button href="/contact" ariaLabel="Go to Contact page">
              Get Started →
            </Button>
          </div>

          <div className="cs-right">{sbsImage}</div>
        </div>

        <div className="cs-container">
          <div className="cs-left">
            <H2>Responsive Website Design</H2>
            <P>
              A "responsive" website is one that looks great on any device.
              Nothing drives customers away like opening up your website on
              their iPhone and seeing a horribly zoomed out desktop site.
            </P>
            <P>
              Cedar Studios Web Design creates stunning websites that are
              intuitive to use on any device. We use timeless, robust design
              techniques to ensure that your website looks great across all
              devices.
            </P>
            <P bold className="cs-price">
              Price: <em>Included</em>
            </P>
            <Button href="/contact" ariaLabel="Go to Contact page">
              Get Started →
            </Button>
          </div>

          <div className="cs-right">{sbsImage2}</div>
        </div>
      </div>
    </section>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Website Design",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/web-design/",
    css: "/styles/service-page.css",
    // preloadImage: "",
    eleventyNavigation: {
      key: "Website Design",
      order: 10,
      parent: "Services",
    },
  }),
};
