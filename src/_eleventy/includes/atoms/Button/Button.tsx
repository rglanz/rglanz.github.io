import { h } from "preact";
import { A } from "../Typography/Typography";
import Link from "../Link/Link";

interface IProps {
  children: string;
  href?: string;
  external: boolean;
  secondary?: boolean;
  ariaLabel?: string;
}

export default ({
  children,
  href = "/",
  external = false,
  secondary = false,
  ariaLabel = "Navigate to page",
}: IProps) => {
  return (
    <a
      href={href}
      rel={external ? "noopener noreferrer" : null}
      target={external ? "_blank" : null}
      className={`cs-button ${secondary ? "secondary" : ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
