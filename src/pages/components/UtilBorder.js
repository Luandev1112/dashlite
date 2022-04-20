import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";

const BorderPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Border Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Border Utility
            </BlockTitle>
            <BlockDes>
              <p className="lead">Use border utilities to quickly style the border and border-radius of an element.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Additive Border</BlockTitle>
              <p>You can add border to any side of an element with border utilities classes.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-wrap example-border">
              <div className="border"></div>
              <div className="border-top"></div>
              <div className="border-right"></div>
              <div className="border-bottom"></div>
              <div className="border-left"></div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-35">ClassName Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.border</code>
                </td>
                <td>Add border in all sides of an element </td>
              </tr>
              <tr>
                <td>
                  <code>.border-{"{top|bottom|left|right}"}</code>
                </td>
                <td>Add border in relavent side</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="border-top"></div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Subtractive Border</BlockTitle>
              <p>You can remove border to a single side of an element with below border utilities classes.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-wrap example-border example-border-all">
              <div className="border-0"></div>
              <div className="border-top-0"></div>
              <div className="border-right-0"></div>
              <div className="border-bottom-0"></div>
              <div className="border-left-0"></div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-35">ClassName Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.border-0</code>
                </td>
                <td>Remove border from all sides of an element</td>
              </tr>
              <tr>
                <td>
                  <code>.border-{"{top|bottom|left|right}"}-0</code>
                </td>
                <td>Remove border from specific side of an element</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="border-bottom-0"></div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Border Color</BlockTitle>
              <p>Change the border color using utilities built on our theme colors.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-wrap example-border">
              <div className="border border-primary"></div>
              <div className="border border-secondary"></div>
              <div className="border border-success"></div>
              <div className="border border-danger"></div>
              <div className="border border-warning"></div>
              <div className="border border-info"></div>
              <div className="border border-dark"></div>
              <div className="border border-gray"></div>
              <div className="border border-light"></div>
              <div className="border border-white"></div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-35">ClassName Reference</th>
                <th className="overline-title ">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.border-{"{value}"}</code>
                </td>
                <td>primary | secondary | success | warning | danger | info | dark | gray | light | white </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="border border-primary"></div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Border Radius</BlockTitle>
              <p>Use these utility classes to set radius to the element.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-wrap example-border example-border-all">
              <div className="rounded"></div>
              <div className="rounded-top"></div>
              <div className="rounded-right"></div>
              <div className="rounded-bottom"></div>
              <div className="rounded-left"></div>
              <div className="rounded-circle"></div>
              <div className="rounded-pill"></div>
              <div className="rounded-0"></div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-35">ClassName Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.rounded</code>
                </td>
                <td>Apply rounded corner of an element</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-{"{top|bottom|left|right}"}</code>
                </td>
                <td>Apply rounded on specific corner of an element</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-circle</code>
                </td>
                <td>Apply full circle box of an element</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-pill</code>
                </td>
                <td>Apply pill rounded corner of an element</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-0</code>
                </td>
                <td>Remove rounded egde from an element</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-{"{sm|lg}"}</code>
                </td>
                <td>Apply small and large rounded corner of an element</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="rounded-left"></div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default BorderPage;
