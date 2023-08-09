import { h } from "preact";

interface ITypographyProps {
  children: string;
  size?: string;
  bold?: boolean;
  className: string;
  href?: string;
  external?: boolean;
}

export const H1 = ({ children, className }: ITypographyProps) => {
  const fullClassName = `cs-h1 ${className}`;
  return <h1 className={fullClassName}>{children}</h1>;
};

export const H2 = ({ children, className }: ITypographyProps) => {
  const fullClassName = `cs-h2 ${className}`;
  return <h2 className={fullClassName}>{children}</h2>;
};

export const H3 = ({ children, className }: ITypographyProps) => {
  const fullClassName = `cs-h3 ${className}`;
  return <h3 className={fullClassName}>{children}</h3>;
};

export const P = ({
  children,
  size = "",
  bold = false,
  className = "",
}: ITypographyProps) => {
  const fullClassName = `cs-p ${size} ${bold ? "bold" : ""} ${className}`;
  return <p className={fullClassName}>{children}</p>;
};

export const Li = ({
  children,
  size = "",
  bold = false,
  className = "",
}: ITypographyProps) => {
  const fullClassName = `cs-li ${size} ${bold ? "bold" : ""} ${className}`;
  return <li className={fullClassName}>{children}</li>;
};

export const A = ({
  children,
  href = "/",
  external = false,
}: ITypographyProps) => {
  return (
    <a
      href={href}
      className="cs-a"
      rel={`${external ? "noopener noreferrer" : ""}`}
    >
      {children}
    </a>
  );
};

export const Topper = ({ children }: ITypographyProps) => {
  return <p className={`cs-topper`}>{children}</p>;
};
