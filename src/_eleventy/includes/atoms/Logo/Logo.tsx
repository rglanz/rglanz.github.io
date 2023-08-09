import { h } from "preact";

interface ILogoProps {
  short?: boolean;
}

export default ({ short = false }: ILogoProps) => {
  let fileName = "logo";
  if (short) fileName = "logo-short";

  return (
    <img
      src={`/assets/svgs/${fileName}.svg`}
      alt="logo"
      className="cs-logo"
      width="200px"
      height="65px"
      aria-hidden="true"
      decoding="async"
    />
  );
};
