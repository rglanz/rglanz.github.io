import { h } from "preact";
import image from "../../../shortcodes/image";
import { H2 } from "../../atoms/Typography/Typography";

interface IInternalHeroProps {
  title: string;
}

const background = image({
  src: `${__dirname}/internal-hero.webp`,
  alt: "lake at sunset",
});

export default ({ title }: IInternalHeroProps) => {
  return (
    <section id="int-hero">
      <div className="container">
        {background}
        <div className="cs-container">
          <H2>{title}</H2>
        </div>
      </div>
    </section>
  );
};
