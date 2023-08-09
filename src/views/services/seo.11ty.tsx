import { Fragment, h } from "preact";
import InternalHero from "../../_eleventy/includes/containers/InternalHero/InternalHero";
import CTA from "../../_eleventy/includes/containers/CTA/CTA";
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
      <InternalHero title="SEO" />
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
        <Topper>SEARCH ENGINE OPTIMIZATION</Topper>
        <H1>Help Your Business Get Discovered</H1>
        <P>
          Cedar Studios weaves search engine optimization (SEO) fundamentals
          into your website from day one. We maximize Google's Core Vitals
          performance scores and use relevant keywords that your customers are
          searching for. This combination of performance and targeted content
          helps your business get off to the right start, attracting more
          customers and keeping you visible online.
        </P>
      </div>
    </section>
  );
};

const content = () => {
  const sbsImage = image({
    src: "./src/_client/assets/images/copywriting.webp",
    alt: "laptop and phone",
  });
  const sbsImage2 = image({
    src: "./src/_client/assets/images/page-audit.jpeg",
    alt: "graphic designer",
  });

  return (
    <section id="content">
      <div className="container">
        <div className="cs-container">
          <div className="cs-left">
            <H2>Copywriting</H2>
            <P>
              With the advent of ChatGPT and other AI tools, engaging writing is
              more valuable than ever. AI-generated writing is predictable and
              stale. What's more, Google and other search engines have signaled
              that they will detect and punish websites that use AI-generated
              writing.
            </P>
            <P>
              All of the content on Cedar Studios websites is written by a
              professional (human) copywriter. We perform keyword research to
              ensure that the writing includes words that your customers are
              searching for.
            </P>
            <P>
              Your website must also be compelling. Page views are meaningless
              if those visitors don't become customers! All of our websites are
              specifically designed in a "funnel" format with a clear
              "call-to-action" at the bottom to persuade visitors to reach out
              to your business.
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

        <div className="cs-container">
          <div className="cs-left">
            <H2>Page Audit</H2>
            <P>
              Not ready to sign a contract? We will take a detailed look at your
              current website and give you an actionable improvement plan.
            </P>
            <P>
              Get personalized feedback regarding your website's design,
              development, copywriting, and SEO presence.
            </P>
            <P bold className="cs-price">
              Price: <em>$99</em>
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
    title: "SEO",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/seo/",
    css: "/styles/service-page.css",
    // preloadImage: "",
    eleventyNavigation: {
      key: "SEO",
      order: 30,
      parent: "Services",
    },
  }),
};
