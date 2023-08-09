import { Fragment, h } from "preact";
import InternalHero from "../../_eleventy/includes/containers/InternalHero/InternalHero";
import CTA from "../../_eleventy/includes/containers/CTA/CTA";
import Markdown from "../../_eleventy/shortcodes/markdown";
import {
  H1,
  H2,
  H3,
  P,
  Topper,
} from "../../_eleventy/includes/atoms/Typography/Typography";
import image from "../../_eleventy/shortcodes/image";
import Button from "../../_eleventy/includes/atoms/Button/Button";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="Web Development" />
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
        <Topper>WEB DEVELOPMENT</Topper>
        <H1>Websites Tailored to Your Business</H1>
        <P>
          At Cedar Studios, our professional web developers hand-code each
          website for optimal performance. Our focus is on making sure your
          business can be easily found by search engines, helping you reach more
          customers. Let Cedar Studios help you highlight your business's unique
          offerings, establish a strong online presence, and stand out in
          today's competitive digital world.
        </P>
      </div>
    </section>
  );
};

const content = () => {
  const sbsImage = image({
    src: "./src/_client/assets/images/hand-coded.webp",
    alt: "laptop and phone",
  });
  const sbsImage2 = image({
    src: "./src/_client/assets/images/blog.jpeg",
    alt: "graphic designer",
  });

  return (
    <section id="content">
      <div className="container">
        <div className="cs-container">
          <div className="cs-left">
            <H2>Classic 5-Page Website</H2>
            <P>
              All of our websites are hand-coded. No page-builders—ever. This
              allows for <a href="/web-design">better design</a> as well as
              optimal performance.
            </P>
            <H3>Rank higher</H3>
            <P>
              Site builders create messy, tangled code that web crawlers
              struggle to read. This causes your website to show up lower in
              search engine results and your customers will struggle to find
              you.
            </P>
            <P>
              Site builders also create slow websites. Our hand-coded websites
              are <em>blazing fast</em>, scoring 98–100 on Google's Core Vitals
              metrics. Since 2018, website loading speed (particularly on mobile
              devices) is one of Google's main ranking factors.
            </P>

            <H3>Earn more revenue</H3>
            <P>
              60% of a website's traffic comes from mobile users. As your
              loading time increases from 1–5 seconds, your bounce rate (users
              leaving your site) increases by 90%.
            </P>
            <P>
              By hand-coding our websites, we have control over every variable,
              such as serving smaller, faster images to mobile users and larger
              images to desktop users.This keeps your loading time fast and
              keeps customers on your website and away from your competition.
            </P>

            <P bold className="cs-price">
              Price: <em>$0 down, $150/mo</em>
            </P>
            <Button href="/contact" ariaLabel="Go to Contact page">
              Get Started →
            </Button>
          </div>

          <div className="cs-right">{sbsImage}</div>
        </div>

        <div className="cs-container">
          <div className="cs-left">
            <H2>Blog/Email List Plugin</H2>
            <P>
              Three powerful{" "}
              <a href="/seo-made-simple">Search Engine Optimization</a>{" "}
              techniques are frequent publishing (shows your website is active),
              "backlinks" from other websites to your website (shows your
              website is trusted), and good use of keywords (shows you know what
              users are looking for).
            </P>
            <P>
              A perfect way to combine all three is by publishing a blog to your
              website. Whereas it's recommended to hire an SEO specialist to
              write your content (we will find one for you), even a monthly post
              on a topic you know well will establish your website's authority
              and help you climb Google's rankings.
            </P>
            <P bold className="cs-price">
              Price: <em>$500 down, $150/mo</em>
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
    title: "Website Development",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/web-development/",
    css: "/styles/service-page.css",
    // preloadImage: "",
    eleventyNavigation: {
      key: "Website Deveopment",
      order: 20,
      parent: "Services",
    },
  }),
};
