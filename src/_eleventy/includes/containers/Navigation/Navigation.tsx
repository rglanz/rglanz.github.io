import { h, Fragment } from "preact";
import Logo from "../../atoms/Logo/Logo";

interface IProps {
  data: object;
}

export default ({ data }: IProps) => {
  const domain: string = data.client.domain;
  const email = data.client.email;

  return (
    <header id="navigation">
      <div className="cs-container">
        {/* Logo */}
        <a href="/" className="cs-logo-link" aria-label="Go to Home.">
          <Logo />
        </a>

        {/* Navigation Links */}
        <nav className="cs-nav" role="navigation">
          <div className="cs-ul-wrapper">
            <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
              <li className="cs-li">
                <a href="/" className="cs-li-link">
                  Home
                </a>
              </li>
              <li className="cs-li">
                <a href="#about" className="cs-li-link">
                  About
                </a>
              </li>
              <li className="cs-li">
                <a href="#projects" className="cs-li-link">
                  Projects
                </a>
              </li>
              <li className="cs-li">
                <a href={`mailto:${email}`} className="cs-li-link cs-contact">
                  Contact Me
                </a>
              </li>
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
              decoding="async"
            />
            <img
              src="/assets/svgs/sun.svg"
              alt="sun"
              className="sun"
              aria-hidden="true"
              width="24"
              height="24"
              decoding="async"
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
