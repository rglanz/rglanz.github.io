import { Fragment, h } from "preact";
import InternalHero from "../_eleventy/includes/containers/InternalHero/InternalHero";
import CTA from "../_eleventy/includes/containers/CTA/CTA";
import {
  H1,
  H2,
  Li,
  P,
  Topper,
} from "../_eleventy/includes/atoms/Typography/Typography";
import image from "../_eleventy/shortcodes/image";
import Button from "../_eleventy/includes/atoms/Button/Button";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="About Us" />
      {about()}
      {content()}
      <CTA />
    </Fragment>
  );
};

const about = () => {
  const aboutImage = image({
    src: "./src/_client/assets/images/cr-night.jpg",
    alt: "Cedar Rapids at night",
  });

  return (
    <section id="about">
      <div className="container">
        <div className="cs-left">{aboutImage}</div>

        <div className="cs-right">
          <Topper>Who We Are</Topper>
          <H1>About Us</H1>
          <P>
            Cedar Studios Web Design is locally owned and operated in Cedar
            Rapids, Iowa. Our owner and lead developer is a former University of
            Iowa neuroscientist turned web developer.
          </P>
          <P>
            We employ professional designers, copywriters, and engineers to
            build the best possible websites for Iowa businesses.
          </P>
          <P>
            Unlike large agencies, each Cedar Studios website is coded by hand,
            line-by-line. No page builders.
          </P>
          <Button
            href="/web-development"
            ariaLabel="Go to services page"
            secondary
          >
            Our Services →
          </Button>
        </div>
      </div>
    </section>
  );
};

const content = () => {
  return (
    <section id="content">
      <div className="container">
        <div className="cs-container">
          <H2>Get an Optimized Website</H2>
          <P>Your business will only make more money by:</P>
          <ol>
            <Li>Landing new customers</Li>
            <Li>Raising prices</Li>
            <Li>Convincing customers to buy more frequently</Li>
          </ol>
          <P>Our hand-coded websites will help you do all three.</P>
          <P>
            <strong>Land new customers</strong>: Our websites are optimized for
            performance and are keyword-researched to push your website higher
            in the search rankings. But strengthening your web presence takes
            months—so get there faster with a website that checks all the boxes
            from Day 1.
          </P>
          <P>
            <strong>Raise prices</strong>: Competing on price is a great way to
            slowly erase your profit margin. Instead, establish yourself as a
            price leader in your market—build a web presence that allows you to
            charge premium prices. Our clean designs and professional
            copywriting will help you get started.
          </P>
          <P>
            <strong>Charge customers more frequently</strong>: In an online
            world, there are infinite options to add revenue streams to your
            business. For example, a lawnscaping company does not just have to
            do lawns. It can sell video courses on lawn care and consulting
            services—with practically zero overhead cost. Ask about our
            Blog/Email List extension to grow your audience and offer your
            customers more products they'll love.
          </P>
        </div>

        <div className="cs-container">
          <H2>Don't just buy a website, buy a relationship</H2>
          <P>
            At Cedar Studios, we don't just send you home with a chunk of
            computer code. Our subscription pricing model includes unlimited
            website maintenance and customer support.
          </P>
          <P>
            <strong>Onboarding</strong>: Building a new website is a stressful
            and confusing process. That's why we offer a personal, one-on-one
            onboarding process to learn about your business needs. Once you fill
            us in, we will get your website professionally designed and
            copywritten for your approval before we build. Don't get stuck with
            a website you hate.
          </P>
          <P>
            <strong>Maintenance</strong>: At Cedar Studios, you don't have to
            worry about maintaining, updating, or hosting your own website. We
            handle it all for you. If you ever have a problem, just reach out to
            our lead developer directly.
          </P>
          <P>
            <strong>Building an online presence</strong>: Although Cedar Studios
            websites are designed to get you off to the best possible start,
            building your online presence requires a lot of "off-site" work.
            This includes social media, Google Business reviews, and more. We
            help guide your business by providing concrete steps you can take to
            build at your own pace.
          </P>
        </div>
      </div>
    </section>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    title: "About Us",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/about/",
    css: "/styles/about.css",
    // preloadImage: "",
    eleventyNavigation: { key: "About", order: 200 },
  }),
};
