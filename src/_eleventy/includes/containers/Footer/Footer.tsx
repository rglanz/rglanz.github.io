import { h } from "preact";
import Logo from "../../atoms/Logo/Logo";
import { P } from "../../atoms/Typography/Typography";

interface IFooterProps {
  data: object;
}

const contact = (client: object) => {
  const email = client.email;

  return (
    <div className="cs-contact">
      <P bold>Contact</P>

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

const siteMap = () => {
  return (
    <div className="cs-sitemap">
      <P bold>Sitemap</P>

      <div className="cs-ul-container">
        <ul className="cs-ul">
          <li>
            <a href="/" className="cs-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cs-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="cs-link">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ({ data }: IFooterProps) => {
  const domain: string = data.client.domain;

  return (
    <footer id="footer">
      <div className="container">
        <div className="cs-top">
          {/* Logo */}
          <a href="/" className="cs-logo-link" aria-label="back to home">
            <Logo />
          </a>

          {/* Links */}
          <div className="cs-container">
            {contact(data.client)}
            {siteMap()}
          </div>
        </div>

        <div className="cs-bottom">
          <P size="small" className="cs-credit">
            &copy; 2023 Ryan Glanz. All Rights Reserved.
          </P>
          <div className="cs-social-container">
            <a
              href="https://github.com/rglanz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to Github page"
            >
              <img
                src="/assets/svgs/github-icon.svg"
                alt="google"
                className="cs-icon"
                width="32"
                height="32"
                loading="lazy"
                aria-hidden="true"
                decoding="async"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-glanz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to LinkedIn page"
            >
              <img
                src="/assets/svgs/linkedin-icon.svg"
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
