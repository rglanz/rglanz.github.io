import { Fragment, h } from "preact";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return <Fragment></Fragment>;
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Services",
    tagTitle: "Small Business Websites",
    metaTitle: "Cedar Studios Web Design",
    metaDescription:
      "Land more customers with a beautiful, performance-driven website. Starting at $150/mo.",
    layout: "base.11ty.tsx",
    permalink: false,
    // css: "/styles/about.css",
    // preloadImage: "",
    eleventyNavigation: { key: "Services", order: 300 },
  }),
};
