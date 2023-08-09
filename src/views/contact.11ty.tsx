import { Fragment, h } from "preact";
import InternalHero from "../_eleventy/includes/containers/InternalHero/InternalHero";
import {
  H2,
  P,
  Topper,
} from "../_eleventy/includes/atoms/Typography/Typography";

interface IProps {
  data: object;
}

const contactForm = () => {
  return (
    <section id="contact">
      <div className="container">
        {/* Top */}
        <div className="cs-top">
          <Topper>Contact</Topper>
          <H2>Get in Touch</H2>
          <P>
            To get started, tell us a bit about your business. We will be in
            touch shortly.
          </P>
        </div>

        {/* Form */}
        <form
          id="cs-form"
          name="Contact Form"
          method="post"
          data-netlify="true"
        >
          <div className="cs-form-fields">
            <div className="cs-container">
              <label className="cs-label">Name</label>
              <input
                className="cs-input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className="cs-container">
              <label className="cs-label">
                Email <P size="small">(required)</P>
              </label>
              <input
                required
                className="cs-input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="cs-container">
              <label className="cs-label">Phone</label>
              <input
                className="cs-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </div>

            <div className="cs-container">
              <label className="cs-label">How Did You Hear About Us?</label>
              <input
                className="cs-input"
                type="text"
                id="find"
                name="find-us"
                placeholder="How Did You Hear About Us?"
              />
            </div>

            <div className="cs-container message">
              <label className="cs-label">
                Message <P size="small">(required)</P>
              </label>
              <textarea
                required
                className="cs-input message"
                name="Message"
                id="message"
                placeholder="Write message..."
              ></textarea>
            </div>
          </div>

          <button
            className="cs-button"
            type="submit"
            aria-expanded="false"
            aria-controls="submit"
            aria-label="submit"
          >
            Submit Message
          </button>
        </form>

        <img
          src="/assets/svgs/airplane.svg"
          alt="paper airplane"
          className="cs-icon"
          width="220"
          height="100"
          loading="lazy"
          aria-hidden="true"
          decoding="async"
        />
      </div>
    </section>
  );
};

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="Contact Us" />
      {contactForm()}
    </Fragment>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Contact",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/contact/",
    css: "/styles/contact.css",
    // preloadImage: "",
    eleventyNavigation: { key: "Contact", order: 600 },
  }),
};
