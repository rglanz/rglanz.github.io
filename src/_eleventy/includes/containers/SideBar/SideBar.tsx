import { h } from "preact";
import { H2, P } from "../../atoms/Typography/Typography";
import EmailList from "../../atoms/EmailList/EmailList";

const article = ({ data: { title, imageSrc, imageAlt }, url }) => {
  return (
    <div className="cs-post-container">
      <a href={url} className="cs-post">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="cs-thumbnail"
          width="80"
          height="40"
          aria-hidden="true"
          decoding="async"
          loading="lazy"
        />
        <P bold size="small">
          {title}
        </P>
      </a>
    </div>
  );
};

export default ({ featured }) => {
  const articles = featured.map((post) => article(post));

  return (
    <div id="sidebar">
      <div className="cs-featured">
        <H2>Featured Posts</H2>
        {articles}
      </div>

      <div className="cs-subscribe">
        <H2>Subscribe</H2>
        <P size="small" className="cs-subscribe-text">
          Sign up to receive the latest news and offers from Cedar Studios Web
          Design.
        </P>
        <EmailList />
      </div>
    </div>
  );
};
