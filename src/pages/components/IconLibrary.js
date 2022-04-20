import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { BlockHead, BlockHeadContent } from "../../components/Component";

const IconLibrary = () => {
  return (
    <React.Fragment>
      <Head title="Icon Library"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Icon Library
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples for opt-in styling of tables with Bootstrap. Just add the base class{" "}
                <code className="code-class">.table</code> to any <code className="code-tag">&lt;table&gt;</code> tag,
                then extend with custom styles or our various included modifier classes.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>
      </Content>
    </React.Fragment>
  );
};
export default IconLibrary;
