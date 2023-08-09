import { Fragment, h } from "preact";
import image from "../_eleventy/shortcodes/image";
import InternalHero from "../_eleventy/includes/containers/InternalHero/InternalHero";
import CTA from "../_eleventy/includes/containers/CTA/CTA";
import SideBar from "../_eleventy/includes/containers/SideBar/SideBar";
import { H1, H3, P } from "../_eleventy/includes/atoms/Typography/Typography";
import Logo from "../_eleventy/includes/atoms/Logo/Logo";

interface IProps {
  data: object;
  collections: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <InternalHero title="Blog" />
      <section id="blog">
        <div className="container">
          <div className="cs-left">
            <H1 className="cs-title">Learn More</H1>
            <P className="cs-subtitle" size="large">
              Learn how to design your own website, build your web presence, and
              analyze your traffic—written specifically for small business
              owners without a technical background.
            </P>
            {cardArray(data.collections.post)}
          </div>
          <div className="cs-right">
            <SideBar featured={data.collections.featured} />
          </div>
        </div>
      </section>
      <CTA />
    </Fragment>
  );
};

const cardArray = (posts) => {
  const card = ({
    data: { title, author, description, imageSrc, imageAlt },
    url,
  }) => {
    return (
      <a href={url} className="cs-link">
        <div className="cs-card">
          <div className="cs-container">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="cs-image"
              width="120"
              height="90"
              decoding="async"
              loading="lazy"
            />

            <div className="cs-title-container">
              <P size="large" bold className="cs-title">
                {title}
              </P>

              <div className="cs-author-container">
                <Logo short />
                <P size="small" className="cs-author">
                  by {author}
                </P>
              </div>
            </div>
          </div>

          <P size="small" className="cs-description">
            {description}
          </P>
        </div>
      </a>
    );
  };

  return posts.map((post) => {
    return card(post);
  });
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Blog",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: "/blog/",
    css: "/styles/blog.css",
    // preloadImage: "",
    eleventyNavigation: { key: "Blog", order: 500 },
  }),
};
