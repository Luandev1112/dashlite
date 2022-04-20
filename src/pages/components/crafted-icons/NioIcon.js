import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { BlockHead, BlockHeadContent, BlockDes, NioIconCard, BackTo, BlockTitle } from "../../../components/Component";
import { iconData } from "./NioIconData";

const NioIconPage = () => {
  return (
    <React.Fragment>
      <Head title="NioIcon Page"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              NioIcon Font
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                <strong>Nioicon</strong> is hand-crafted and beautiful icon set which is designed by{" "}
                <strong>Softnio</strong> Team. We took inspiration from google icons and carefully designed it for{" "}
                <strong>DashLite</strong> dashboard. It has over than 900 icons that helps much in your project.
              </p>
              <p>
                An in-built component can be used to show the icons. Use the Icon component. Import it to your file from
                the Component.js file of the component directory. Such as{" "}
                <code>import {`{Icon}`} from "./components/Component"</code> use the name props of the Icon to show the
                specific icon.
                <br />
                Example of uses - <code className="code-tag">{`<Icon name="icon-name"/>`}</code>
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <ul className="preview-icon-list">
          {iconData.map((item) => {
            return (
              <NioIconCard
                key={item["icon-name"]}
                tag={`<Icon name="${item["icon-name"]}">`}
                iconName={item["icon-name"]}
              ></NioIconCard>
            );
          })}
        </ul>
      </Content>
    </React.Fragment>
  );
};
export default NioIconPage;
