import { h, Fragment } from "preact";
import { render } from "preact-render-to-string";
import Navigation from "../includes/containers/Navigation/Navigation";
import Footer from "../includes/containers/Footer/Footer";
import InternalHero from "../includes/containers/InternalHero/InternalHero";
import CTA from "../includes/containers/CTA/CTA";
import SideBar from "../includes/containers/SideBar/SideBar";
import { H2, P } from "../includes/atoms/Typography/Typography";
import Logo from "../includes/atoms/Logo/Logo";

interface IProps {
  data: object;
  content: object;
}

const Page = (data: IProps) => {
  return render(
    <Fragment>
      <Navigation data={data} />
      <main>
        <InternalHero title={data.title} />
        <section id="blog-post">
          <div className="container">
            <div className="cs-left">
              <img
                src={data.imageSrc}
                alt={data.imageAlt}
                className="cs-image"
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
              />
              <H2 className="cs-title">{data.title}</H2>
              <div className="cs-author-container">
                <Logo short />
                <P>{data.author}</P>
              </div>

              <article
                className="cs-article"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>

            <div className="cs-right">
              <SideBar featured={data.collections.featured} />
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer data={data} />
    </Fragment>
  );
};

// module.exports = {
//   render: Page,
//   data: () => ({
//     layout: "base.html",
//     css: "/styles/blog.css",
//   }),
// };

module.exports = {
  render: Page,
  data: () => ({
    layout: "base.html",
    css: "/styles/blog.css",
  }),
};
