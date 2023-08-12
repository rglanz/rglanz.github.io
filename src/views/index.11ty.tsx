import { Fragment, h } from "preact";
import Hero from "../_eleventy/includes/containers/Hero/Hero";
import CTA from "../_eleventy/includes/containers/CTA/CTA";
import { H2, H3, P } from "../_eleventy/includes/atoms/Typography/Typography";
import Button from "../_eleventy/includes/atoms/Button/Button";

interface IProps {
  data: object;
}

const Page = (data: IProps) => {
  return (
    <Fragment>
      <Hero />
      {skills()}
      {about()}
      {projects()}
      <CTA />
    </Fragment>
  );
};

const skills = () => {
  const SkillIcon = ({ img, skill }) => {
    return (
      <div className="cs-skill">
        <img
          src={img}
          alt={`${skill} icon`}
          className="cs-icon"
          width="40"
          height="40"
          aria-hidden="true"
          decoding="async"
        />
        <P className="cs-skill-title">{skill}</P>
      </div>
    );
  };

  return (
    <section id="skills">
      <div className="container">
        {/* Top Row */}
        <SkillIcon img="/assets/svgs/react.svg" skill="React" />
        <SkillIcon img="/assets/svgs/typescript.svg" skill="TypeScript" />
        <SkillIcon img="/assets/svgs/html.svg" skill="HTML" />
        <SkillIcon img="/assets/svgs/css.svg" skill="CSS" />
        <SkillIcon img="/assets/svgs/javascript.svg" skill="JavaScript" />

        {/* Bottom Row */}
        <SkillIcon img="/assets/svgs/python.svg" skill="Python" />
        <SkillIcon img="/assets/svgs/git.svg" skill="Git" />
        <SkillIcon img="/assets/svgs/sql.svg" skill="SQL" />
        <SkillIcon img="/assets/svgs/data-analysis.svg" skill="Data Analysis" />
        <SkillIcon img="/assets/svgs/ui-ux.svg" skill="UI/UX Design" />
      </div>
    </section>
  );
};

const about = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="cs-left">
          <picture className="cs-picture">
            <img
              src="/assets/images/computer.webp"
              alt="computer at night"
              className="cs-img-1"
              width="365"
              height="387"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-img-container">
              <img
                src="/assets/images/brain-art.webp"
                alt="brain art"
                className="cs-img-2"
                width="400"
                height="370"
                loading="lazy"
                decoding="async"
              />
            </div>
          </picture>
        </div>

        <div className="cs-right">
          <div className="cs-top">
            <H2>About Me</H2>
            <P>
              I am a highly skilled Software Engineer with a multidisciplinary
              approach—I hold a Ph.D. in Psychology, complementing my expertise
              in software development. I am proficient in a diverse tech stack
              including React/TypeScript, Python, and more. I enjoy leveraging
              psychological insights to create intuitive and user-centric
              software solutions, bringing a unique perspective to the
              intersection of technology and human behavior.
            </P>
          </div>

          <div className="cs-container">
            <Button
              href="https://github.com/rglanz"
              external
              ariaLabel="Go to Github"
              secondary
            >
              <span>
                Github
                <img
                  src="/assets/svgs/github.svg"
                  alt={`github icon`}
                  className="cs-icon"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  decoding="async"
                />
              </span>
            </Button>

            <Button
              href="https://www.linkedin.com/in/ryan-glanz/"
              external
              ariaLabel="Go to LinkedIn"
              secondary
            >
              <span>
                LinkedIn
                <img
                  src="/assets/svgs/linkedin.svg"
                  alt={`linkedin icon`}
                  className="cs-icon"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  decoding="async"
                />
              </span>
            </Button>

            <Button
              href="/assets/pdfs/Resume_Glanz.pdf"
              external
              ariaLabel="download resume"
            >
              <span>
                Résumé
                <img
                  src="/assets/svgs/download.svg"
                  alt={`download icon`}
                  className="cs-icon-white"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  decoding="async"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <H2>Projects</H2>
        <div className="cs-card-container">
          {/* Portfolio Site */}
          <div className="cs-card">
            <img
              src="/assets/images/portfolio.webp"
              alt="portfolio website"
              className="cs-thumbnail"
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-hidden">
              <P size="large" bold>
                Portfolio Site
              </P>
              <P>TypeScript / 11ty / Netlify</P>
              <a
                href="https://github.com/rglanz/rglanz.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/svgs/external-link.svg"
                  alt="link button"
                  className="cs-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          {/* Event Validation Site */}
          <div className="cs-card">
            <img
              src="/assets/images/ev.webp"
              alt="event validation thumbnail"
              className="cs-thumbnail"
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
            />
            <div className="cs-hidden">
              <P size="large" bold>
                Event Validation
              </P>
              <P>Python / Qt5</P>
              <a
                href="https://github.com/rglanz/EventValidation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/svgs/external-link.svg"
                  alt="link button"
                  className="cs-icon"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    title: "Home",
    tagTitle: "Portfolio",
    metaTitle: "Ryan Glanz | Software Engineer",
    metaDescription:
      "I take a multidisciplinary approach to software development by combining my engineering skill with my academic background in Psychology to create intuitive and user-centric technology.",
    layout: "base.11ty.tsx",
    permalink: "/",
    css: "/styles/index.css",
    preloadImage: "/assets/images/responsive/hero-800w.webp",
    eleventyNavigation: { key: "Home", order: 100 },
  }),
};
