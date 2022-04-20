import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";

const EmbededPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Embeds" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Media Embeds
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic
                ratio that scales on any device.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example</BlockTitle>
              <p>
                Wrap any embed like an <code>&lt;iframe&gt;</code> in a parent element with{" "}
                <code>.embed-responsive</code> and an aspect ratio. <br />
                The <code>.embed-responsive-item</code> isn’t strictly required, but we encourage it.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Embeded Responsive Item"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowFullScreen
              ></iframe>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="embed-responsive embed-responsive-16by9">
  <iframe
    className="embed-responsive-item"
    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
    allowFullscreen
  ></iframe>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Aspect Ratios</BlockTitle>
              <p>
                Aspect ratios can be customized with modifier classNames. By default the following ratio classNames are
                available.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">className Reference</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.embed-responsive-{"{value}"}</code>
                </td>
                <td>21by9 | 16by9 | 4by3 | 1by1</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="embed-responsive embed-responsive-16by9"></div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default EmbededPage;
