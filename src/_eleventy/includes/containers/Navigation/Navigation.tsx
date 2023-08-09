import { h, Fragment } from "preact";
import navigation from "../../../shortcodes/navigation";
import Logo from "../../atoms/Logo/Logo";

interface IProps {
  data: object;
  link: object;
  name: string;
  url: string;
  order: string;
  children: object[];
  isActive: boolean;
  hasActiveChild: boolean;
}

const buildRoot = (link: IProps) => {
  let className = "cs-li-link";
  if (link.isActive) {
    className = `${className} cs-active`;
  }

  if (link.name === "Contact") {
    className = `${className} cs-contact`;
  }

  return (
    <li className="cs-li">
      <a href={link.url} className={className}>
        {link.name}
      </a>
    </li>
  );
};

const buildParent = (link: IProps) => {
  return (
    <li className="cs-li cs-dropdown" tabIndex={0}>
      <span className={`cs-li-link ${link.hasActiveChild ? "cs-active" : ""}`}>
        {link.name}
        <img
          src="/assets/svgs/drop-icon.svg"
          alt="dropdown icon"
          className="cs-drop-icon"
          width="15"
          height="15"
          aria-hidden="true"
          decoding="async"
        />
      </span>

      <ul className="cs-drop-ul">
        {link.children.map((child) => {
          return (
            <li className="cs-drop-li">
              <a
                href={child.url}
                className={`cs-li-link cs-drop-link ${
                  child.isActive ? "cs-active" : ""
                }`}
              >
                {child.name}
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const links = (data: IProps) => {
  const linkComponents = data.map((link) => {
    if (link.type === "root") {
      return buildRoot(link);
    } else {
      return buildParent(link);
    }
  });

  return linkComponents;
};

export default ({ data }: IProps) => {
  const domain: string = data.client.domain;
  const filteredData = navigation(data.collections.all, data.page.url);

  return (
    <header id="navigation">
      <div className="cs-container">
        {/* Logo */}
        <a
          href={`https://${domain}`}
          className="cs-logo-link"
          aria-label="Go to Home."
        >
          <Logo />
        </a>

        {/* Navigation Links */}
        <nav className="cs-nav" role="navigation">
          <div className="cs-ul-wrapper">
            <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
              {links(filteredData)}
            </ul>
          </div>
        </nav>

        {/* Switches */}
        <div className="cs-switches">
          <label id="dark-switch">
            <input
              type="checkbox"
              id="dark-checkbox"
              aria-hidden="true"
              checked={false}
            />
            <span className="cs-slider"></span>
            <img
              src="/assets/svgs/moon.svg"
              alt="moon"
              className="moon"
              aria-hidden="true"
              width="24"
              height="24"
              decode="async"
            />
            <img
              src="/assets/svgs/sun.svg"
              alt="sun"
              className="sun"
              aria-hidden="true"
              width="24"
              height="24"
              decode="async"
            />
          </label>

          <button className="cs-toggle" aria-label="mobile menu toggle">
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
