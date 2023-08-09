import { Fragment, h } from "preact";
import Hero from "../_eleventy/includes/containers/Hero/Hero";
import CTA from "../_eleventy/includes/containers/CTA/CTA";
import { H2, H3, P } from "../_eleventy/includes/atoms/Typography/Typography";
import Button from "../_eleventy/includes/atoms/Button/Button";
import EmailList from "../_eleventy/includes/atoms/EmailList/EmailList";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <Hero />
      {services()}
      {about()}
      {portfolio()}
      {blog()}
      {faq()}
      {reviews()}
      <CTA />
    </Fragment>
  );
};

const services = () => {
  return (
    <section id="services">
      <img
        src="/assets/svgs/green-arrows.svg"
        alt="background colors"
        className="cs-arrows"
        width="2000"
        height="100"
        aria-hidden="true"
        decoding="async"
      />
      <div className="container">
        {/* Top Row */}
        <div className="cs-row">
          {/* Web Development */}
          <div className="cs-card">
            <img
              src="/assets/svgs/html.svg"
              alt="html bracket"
              className="cs-icon"
              width="67"
              height="67"
              aria-hidden="true"
              decoding="async"
            />
            <div className="cs-text-container">
              <P bold className="cs-title">
                Web Development
              </P>
              <P>
                Stand out with a beautiful website that is optimized for speed.
                We hand-code your website—no page builders!
              </P>
            </div>
          </div>

          {/* SEO Built in */}
          <div className="cs-card">
            <img
              src="/assets/svgs/graph.svg"
              alt="bar graph"
              className="cs-icon"
              width="67"
              height="67"
              aria-hidden="true"
              decoding="async"
            />
            <div className="cs-text-container">
              <P bold className="cs-title">
                SEO Built-In
              </P>
              <P>
                Fill your website with clear, unique, keyword-researched
                writing. Google Analytics are included out-of-the-box.
              </P>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="cs-row">
          {/* Email list */}
          <div className="cs-card">
            <img
              src="/assets/svgs/mail.svg"
              alt="mail icon"
              className="cs-icon"
              width="67"
              height="67"
              aria-hidden="true"
              decoding="async"
            />
            <div className="cs-text-container">
              <P bold className="cs-title">
                Blog with Email List
              </P>
              <P>
                Stay in touch with your customers and build more revenue streams
                through email marketing.
              </P>
            </div>
          </div>

          {/* Updates */}
          <div className="cs-card">
            <img
              src="/assets/svgs/chat.svg"
              alt="chat bubbles"
              className="cs-icon"
              width="67"
              height="67"
              aria-hidden="true"
              decoding="async"
            />
            <div className="cs-text-container">
              <P bold className="cs-title">
                Unlimited Updates, 24/7 Support
              </P>
              <P>
                We host, maintain, and update your website so you can focus on
                running your business.
              </P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const about = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="cs-left">
          <picture className="cs-picture">
            <img
              src="/assets/images/desk.webp"
              alt="desk with computer"
              className="cs-img-1"
              width="365"
              height="387"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-img-container">
              <img
                src="/assets/images/analytics.webp"
                alt="Google Analytics screenshot"
                className="cs-img-2"
                width="280"
                height="370"
                loading="lazy"
                decoding="async"
              />
            </div>
          </picture>
        </div>

        <div className="cs-right">
          <div className="cs-top">
            <H2>About Us</H2>
            <P>
              We design, develop, and maintain websites for small businesses in
              the Cedar Rapids and surrounding areas. We offer a unique
              subscription model — $0 down, $150 per month — for a standard
              5-page website. Additional pages are available for an hourly rate.
            </P>
          </div>
          <div className="cs-container">
            {/* Row 1 */}
            <div className="cs-row">
              <div className="cs-card">
                <div className="cs-card-title">
                  <img
                    src="/assets/svgs/check.svg"
                    alt="check mark"
                    className="cs-icon"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <P size="large" bold>
                    Hosting Fees Included
                  </P>
                </div>
                <P>Included with your monthly payment</P>
              </div>

              <div className="cs-card">
                <div className="cs-card-title">
                  <img
                    src="/assets/svgs/check.svg"
                    alt="check mark"
                    className="cs-icon"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <P size="large" bold>
                    Unlimited Edits
                  </P>
                </div>
                <P>Same day updates of any text or images</P>
              </div>
            </div>

            {/* Row 2 */}
            <div className="cs-row">
              <div className="cs-card">
                <div className="cs-card-title">
                  <img
                    src="/assets/svgs/check.svg"
                    alt="check mark"
                    className="cs-icon"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <P size="large" bold>
                    24/7 Customer Service
                  </P>
                </div>
                <P>Call your developer directly—no phone trees</P>
              </div>

              <div className="cs-card">
                <div className="cs-card-title">
                  <img
                    src="/assets/svgs/check.svg"
                    alt="check mark"
                    className="cs-icon"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <P size="large" bold>
                    Web Design &amp; Development
                  </P>
                </div>
                <P>40+ hours of design, development, and testing</P>
              </div>
            </div>

            {/* Row 3 */}
            <div className="cs-row">
              <div className="cs-card">
                <div className="cs-card-title">
                  <img
                    src="/assets/svgs/check.svg"
                    alt="check mark"
                    className="cs-icon"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <P size="large" bold>
                    100 Google Page Speed Score
                  </P>
                </div>
                <P>Boost your search ranking with a perfect page speed score</P>
              </div>

              <div className="cs-card">
                <div className="cs-card-title">
                  <img
                    src="/assets/svgs/check.svg"
                    alt="check mark"
                    className="cs-icon"
                    width="25"
                    height="25"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <P size="large" bold>
                    Google Analytics
                  </P>
                </div>
                <P>
                  Free installation of Analytics to monitor traffic and user
                  behavior
                </P>
              </div>
            </div>
          </div>

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

const portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <H2>Recent Projects</H2>
        <div className="cs-card-container">
          {/* Cedar Studios */}
          <div className="cs-card">
            <img
              src="/assets/images/portfolio/cs-thumbnail.webp"
              alt="cedar studios thumbnail"
              className="cs-thumbnail"
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-hidden">
              <P size="large" bold>
                Cedar Studios
              </P>
              <P size="small">
                This website was designed and hand-coded in-house. It includes a
                blog, and email list, and dark mode. It is built for speed and
                scored a 100/100 Page Speed Score (before Google Analytics).
              </P>
              <a
                href="https://cedarstudioswebdesign.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/svgs/external-link.svg"
                  alt="link button"
                  className="cs-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          {/* CR Facepainting */}
          <div className="cs-card">
            <img
              src="/assets/images/portfolio/cr-thumbnail.webp"
              alt="cedar studios thumbnail"
              className="cs-thumbnail"
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-hidden">
              <P size="large" bold>
                CR Facepainting
              </P>
              <P size="small">
                CR Facepainting performs face painting and temporary tattoos for
                parties and events in the Cedar Rapids area. This website
                features a responsive portfolio and a clean, colorful design to
                match their beautiful artwork.
              </P>
              <a
                href="https://crfacepainting.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/svgs/external-link.svg"
                  alt="link button"
                  className="cs-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          {/* LandScapes */}
          <div className="cs-card">
            <img
              src="/assets/images/portfolio/ls-thumbnail.webp"
              alt="cedar studios thumbnail"
              className="cs-thumbnail"
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-hidden">
              <P size="large" bold>
                LandScapes
              </P>
              <P size="small">
                LandScapes is a fictional landscaping company in Cedar Rapids,
                IA. This website is for demonstration purposes only. If you
                would like to purchase this website for your business,&nbsp;
                <a
                  href="/contact"
                  className="cs-link"
                  arai-label="go to contact page"
                  z
                >
                  let us know.
                </a>
              </P>
              <a
                href="https://landscapes-template.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/svgs/external-link.svg"
                  alt="link button"
                  className="cs-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
        <Button href="/portfolio" ariaLabel="Go to portfolio page" secondary>
          All Projects →
        </Button>
      </div>
    </section>
  );
};

const blog = () => {
  return (
    <section id="blog">
      <img
        src="/assets/svgs/light-arrows.svg"
        alt="background colors"
        className="cs-arrows"
        width="1920"
        height="100"
        aria-hidden="true"
        decoding="async"
      />
      <div className="container">
        <div className="cs-left">
          <H2>Learn More</H2>
          <P>
            Learn how to design your own website, build your web presence, and
            analyze your traffic—written specifically for small business owners
            without a technical background.
          </P>
          <P>
            Sign up for our newsletter to receive these articles directly in
            your inbox.
          </P>

          <EmailList />
          <Button href="/blog" ariaLabel="Read the rest of the blog" secondary>
            All Posts →
          </Button>
        </div>

        <div className="cs-right">
          {/* GBP */}
          <div className="cs-card">
            <img
              src="/assets/images/blog/website.webp"
              alt="computer"
              className="cs-thumbnail"
              width="300"
              height="200"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-text-container">
              <a
                href="/blog/google-business-profile"
                className="cs-link"
                aria-label="go to article"
              >
                <H3>How to Setup a Google Business Profile</H3>
              </a>
              <P>
                If you want your business's website to show up on Google's first
                page (you do), there is no better way to get...
              </P>
            </div>

            <Button
              href="/blog/google-business-profile"
              ariaLabel="Read this article"
            >
              Continue Reading →
            </Button>
          </div>

          {/* SEO */}
          <div className="cs-card">
            <img
              src="/assets/images/blog/night.webp"
              alt="man at desk"
              className="cs-thumbnail"
              width="300"
              height="200"
              loading="lazy"
              decoding="async"
            />
            <a
              href="/blog/google-business-profile"
              className="cs-link"
              aria-label="go to article"
            >
              <H3>SEO Made Simple</H3>
            </a>
            <P>
              A good website plays two games — The first game is for the
              customers—real people who click on your website and are convinced
              to buy based on the...
            </P>
            <Button href="/blog/seo-made-simple" ariaLabel="Read this article">
              Continue Reading →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const faq = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="cs-left">
          <H2>
            Frequently Asked
            <br />
            Questions
          </H2>
        </div>

        <div className="cs-right">
          <ul className="cs-ul">
            {/* {# Q5 #} */}
            <li className="cs-li active">
              <button className="cs-question">
                <span className="cs-question-text">
                  Is Cedar Studios a web agency?
                </span>
              </button>
              <P className="cs-answer">
                No, we are not a web agency. We don't make false promises to get
                you ranking in a month. Nor do we pretend that we will take care
                of your social media, ad campaigns, email lists, and dog
                grooming for you.
              </P>
              <P className="cs-answer">
                If you want to dominate your market's online presence, you need
                to work hard at it. Cedar Studios will give a website that
                checks all the SEO boxes and all the knowledge you need to get
                started.
              </P>
            </li>

            {/* {# Q1 #} */}
            <li className="cs-li">
              <button className="cs-question">
                <span className="cs-question-text">
                  How long does it take to get a website?
                </span>
              </button>
              <P className="cs-answer">
                Our development time ranges from a few days to a month,
                depending on how busy we are. We have streamlined our onboarding
                and design process to be as fast as possible. You can reduce the
                timeline by promptly responding to questions and design reviews.
              </P>
            </li>

            {/* {# Q2 #} */}
            <li className="cs-li">
              <button className="cs-question">
                <span className="cs-question-text">
                  Why is there a monthly fee? Can I pay upfront?
                </span>
              </button>
              <P className="cs-answer">
                Our subscription pricing model is designed to help small
                businesses get a website even if they cannot afford a $5,000+
                price tag upfront. Included in your monthly fee is website
                hosting, maintenance, and personal customer service.
              </P>
              <P className="cs-answer">
                Upfront pricing is available upon request.
              </P>
            </li>

            {/* {# Q3 #} */}
            <li className="cs-li">
              <button className="cs-question">
                <span className="cs-question-text">
                  {" "}
                  What happens if I cancel?{" "}
                </span>
              </button>
              <P className="cs-answer">
                When you cancel your subscription, we will return your domain
                name to you. You will have to leave your website with us and
                start over with another company. It can take 6–12 months for a
                website to properly rank in Google, so we only work with
                businesses that consider their website to be a long-term asset
                of their business.
              </P>
            </li>

            {/* {# Q4 #} */}
            <li className="cs-li">
              <button className="cs-question">
                <span className="cs-question-text">
                  Is my DIY website good enough?
                </span>
              </button>
              <P className="cs-answer">
                Maybe! Some markets are not strongly affected by website design,
                and some even have customers who do not reach out online at all.
              </P>
              <P className="cs-answer">
                However, <em>all</em> websites are subject to search engines'
                ranking factors, which determine how high your website appears
                in the search results. DIY page builders will jumble your code
                and make your website slower and harder for web crawlers to
                read. This causes an unneeded limitation on your website's
                search performance.
              </P>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const reviews = () => {
  return (
    <section id="reviews">
      <img
        src="/assets/svgs/light-arrows.svg"
        alt="background colors"
        className="cs-arrows"
        width="1920"
        height="100"
        aria-hidden="true"
        decoding="async"
      />
      <div className="container">
        <div className="cs-left">
          <H2>What People Are Saying</H2>
          <a
            href="https://goo.gl/maps/3ETtbJaSEDK8gqch6"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-button secondary"
            aria-label="read more reviews"
          >
            <span>
              Read More Reviews
              <img
                src="/assets/svgs/external-link-2.svg"
                alt="link button"
                className="cs-icon"
                width="16"
                height="16"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />{" "}
            </span>
          </a>
        </div>

        <div className="cs-right">
          {/* {# Lizzy #} */}
          <div className="cs-card">
            {/* {# Title bar #} */}
            <div className="cs-title-container">
              <a
                href="https://crfacepainting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-link"
                aria-label="go to website"
              >
                <img
                  src="/assets/images/reviews/lizzy.png"
                  alt="reviewer"
                  className="cs-img"
                  width="80"
                  height="80"
                  loading="lazy"
                  aria-hidden="true"
                  decoding="async"
                />
                <div className="cs-author">
                  <P className="cs-name" size="large">
                    Lizzy Dvorsky
                  </P>
                  <P className="cs-business" size="small">
                    CR Facepainting
                  </P>
                </div>
              </a>

              <img
                src="/assets/svgs/stars.svg"
                alt="five stars"
                className="cs-icon"
                width="110"
                height="20"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />
            </div>

            {/* {# Review #} */}
            <P>
              Incredible results, speedy, and my website is already performing
              well on Google. I love the detail that they put into the website
              design and that Ryan took the time to make sure everything I
              wanted was on there, and added in some awesome ideas that I
              wouldn't have even come up with. The website is easy to navigate
              and both functional and attractive. 10/10 would absolutely
              recommend!!
            </P>

            <a
              href="https://goo.gl/maps/AEhJKHcGZHupf6cX8"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-external-link"
              aria-label="go to review"
            >
              <img
                src="/assets/svgs/external-link.svg"
                alt="link button"
                className="cs-external-link"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Home",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/",
    css: "/styles/index.css",
    preloadImage: "/assets/images/hero-800w.webp",
    eleventyNavigation: { key: "Home", order: 100 },
  }),
};
