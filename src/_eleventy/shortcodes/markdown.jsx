import { h } from "preact";
import md from "markdown-it";

export default ({ children }) => {
  const html = md({ html: true, breaks: true, linkify: true }).render(children);
  return (
    <div className="cs-article" dangerouslySetInnerHTML={{ __html: html }} />
  );
};
