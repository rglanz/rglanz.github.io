import { h } from "preact";
import Logo from "../../atoms/Logo/Logo";
import { P } from "../../atoms/Typography/Typography";
import EmailList from "../../atoms/EmailList/EmailList";
import navigation from "../../../shortcodes/navigation";

interface IFooterProps {
  data: object;
}

const contact = (client: object) => {
  const phone = client.phoneFormatted;
  const email = client.email;

  return (
    <div className="cs-contact">
      <P bold>Contact</P>

      <span className="cs-line">
        <img
          src="/assets/svgs/phone.svg"
          alt="call button"
          className="cs-icon"
          width="14"
          height="14"
          loading="lazy"
          aria-hidden="true"
          decoding="async"
        />
        <a href={`tel:${phone}`} className="cs-link">
          {phone}
        </a>
      </span>

      <span className="cs-line">
        <img
          src="/assets/svgs/email.svg"
          alt="email button"
          className="cs-icon"
          width="14"
          height="14"
          loading="lazy"
          aria-hidden="true"
          decoding="async"
        />
        <a href={`mailto:${email}`} className="cs-link">
          {email}
        </a>
      </span>
    </div>
  );
};

const siteMap = (links) => {
  const nLinks = 4;
  const firstColumn = links.slice(0, nLinks);

  const firstColumnArray = firstColumn.map((link) => {
    // Link to first child if parent li
    let url = link.url;
    if (link?.children) {
      url = link.children[0].url;
    }

    return (
      <a href={url} className="cs-link">
        {link.name}
      </a>
    );
  });

  const secondColumn = links.slice(nLinks);
  const secondColumnArray = secondColumn.map((link) => {
    // Link to first child if parent li
    let url = link.url;
    if (link?.children) {
      url = link.children[0].url;
    }

    return (
      <a href={url} className="cs-link">
        {link.name}
      </a>
    );
  });

  return (
    <div className="cs-sitemap">
      <P bold>Sitemap</P>

      <div className="cs-ul-container">
        <ul className="cs-ul">
          <li>
            <div className="cs-left">{firstColumnArray}</div>
          </li>

          <li>
            <div className="cs-right">
              {secondColumnArray}

              <a href="/privacy" className="cs-link">
                Privacy
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ({ data }: IFooterProps) => {
  const domain: string = data.client.domain;
  const filteredData = navigation(data.collections.all, data.page.url);

  return (
    <footer id="footer">
      <div className="container">
        <div className="cs-top">
          {/* Logo */}
          <a href={domain} className="cs-logo-link" aria-label="back to home">
            <Logo />
          </a>

          {/* Links */}
          <div className="cs-container">
            {contact(data.client)}
            {siteMap(filteredData)}
            <div className="cs-email-list-container">
              <P bold>Subscribe</P>
              <P size="small" className="cs-subscribe-text">
                Sign up to receive the latest news and offers from Cedar Studios
                Web Design.
              </P>
              <EmailList />
            </div>
          </div>
        </div>

        <div className="cs-bottom">
          <P size="small" className="cs-credit">
            &copy; 2023 Cedar Studios Web Development. All Rights Reserved.
          </P>
          <div className="cs-social-container">
            <a href="#" aria-label="Go to Facebook page">
              <img
                src="/assets/svgs/facebook.svg"
                alt="facebook"
                className="cs-icon"
                width="32"
                height="32"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />
            </a>
            <a
              href="https://g.page/r/CRYFhR2iZHVFEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave a Google review"
            >
              <img
                src="/assets/svgs/google.svg"
                alt="google"
                className="cs-icon"
                width="32"
                height="32"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />
            </a>
            <a href="#" aria-label="Go to LinkedIn page">
              <img
                src="/assets/svgs/linkedin.svg"
                alt="linkedin"
                className="cs-icon"
                width="32"
                height="32"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
