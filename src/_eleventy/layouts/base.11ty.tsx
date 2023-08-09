import { h, Fragment } from "preact";
import { render } from "preact-render-to-string";
import Navigation from "../includes/containers/Navigation/Navigation";
import Footer from "../includes/containers/Footer/Footer";

interface IProps {
  data: object;
  content: object;
}

const Page = (data: IProps) => {
  return render(
    <Fragment>
      <Navigation data={data} />
      <main>{data.content}</main>
      <Footer data={data} />
    </Fragment>
  );
};

module.exports = {
  render: Page,
  data: () => ({
    layout: "base.html",
  }),
};
