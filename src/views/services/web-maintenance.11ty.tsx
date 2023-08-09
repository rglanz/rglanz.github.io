import { Fragment, h } from "preact";
import CTA from "../../_eleventy/includes/containers/CTA/CTA";
import InternalHero from "../../_eleventy/includes/containers/InternalHero/InternalHero";
import Button from "../../_eleventy/includes/atoms/Button/Button";
import {
  Topper,
  H1,
  H2,
  P,
} from "../../_eleventy/includes/atoms/Typography/Typography";
import image from "../../_eleventy/shortcodes/image";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="Web Maintenance" />
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
        <Topper>WEBSITE MAINTENANCE</Topper>
        <H1>Professional Upkeep at No Additional Cost</H1>
        <P>
          At Cedar Studios, we understand that maintaining a website is a
          headache. That's why we handle any updates or technical issues so you
          can focus on what you do best—running your business. As a Cedar
          Studios customer, you will be given the direct contact information of
          one of our developers to call day or night if something goes wrong.
          Let us keep your website running smoothly as you grow your business
          and serve your customers.
        </P>
      </div>
    </section>
  );
};

const content = () => {
  const sbsImage = image({
    src: "./src/_client/assets/images/maintenance.webp",
    alt: "laptop and phone",
  });

  return (
    <section id="content">
      <div className="container">
        <div className="cs-container">
          <div className="cs-left">
            <H2>Free Hosting</H2>
            <P>
              Your monthly fee includes free hosting. Your website will be
              online and accessible to your customers without you needing to
              worry about renewals or reconfigurations.
            </P>

            <H2>Unlimited Edits</H2>
            <P>
              Need to swap out an image or change some text on the website?
              Simply reach out to our lead developer and he will take care of it
              for you. Free of charge.
            </P>

            <H2>Regular Health Checks</H2>
            <P>
              Sometimes, websites fail silently. An image or a link breaks and
              it simply looks unprofessional. Cedar Studios monitors your
              website's health on Google Search Console and visits your website
              periodically to identify and fix anything that may be broken.
            </P>

            <H2>Personalized Customer Service</H2>
            <P>
              Your time is valuable. Don't get ghosted by a web agency. As a
              Cedar Studios customer, you will be given the personal cell phone
              number of one of our developers. Call or text anytime if you need
              something fixed or altered on your website.
            </P>

            <P bold className="cs-price">
              Price: <em>Included</em>
            </P>
            <Button href="/contact" ariaLabel="Go to Contact page">
              Get Started →
            </Button>
          </div>

          <div className="cs-right">{sbsImage}</div>
        </div>
      </div>
    </section>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Website Maintenance",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/web-maintenance/",
    css: "/styles/service-page.css",
    // preloadImage: "",
    eleventyNavigation: {
      key: "Website Maintenance",
      order: 40,
      parent: "Services",
    },
  }),
};
