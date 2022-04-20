import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewTable, CodeBlock } from "../../components/preview/Preview";

const DisplayPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Display Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Display Utility
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Quickly and responsively toggle the display value of components and more with our display utilities.
                ClassNames can be combined for various effects as you need.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Uses</BlockTitle>
              <p>These utilities classNames allow to set display property of an element.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">ClassName Reference</th>
                <th className="overline-title ">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.d-{"{name}"}</code>
                </td>
                <td>none | inline | inline-block | block | table | table-cell | table-row | flex | inline-flex</td>
              </tr>
              <tr>
                <td>
                  <code>
                    .d-{"{breakpoint}"}-{"{name}"}
                  </code>
                </td>
                <td>
                  Use <code>{"{breakpoint}"}</code> as <code>sm, md, lg, and xl</code> to effect on screen width.
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <em className="fs-13px">
                    The media queries effect screen widths with the given breakpoint or larger. For example,{" "}
                    <code>.d-lg-none</code> sets <code className="code-fnc">display: none;</code> on both{" "}
                    <code>lg</code> and <code>xl</code> screens.
                  </em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="inline-block"></div>`}</CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Hiding elements</BlockTitle>
              <p>
                For faster mobile-friendly development, use responsive display classNames for showing and hiding
                elements by device.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-35">ClassName Reference</th>
                <th className="overline-title ">Screen Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.d-none</code>
                </td>
                <td>Hidden on all</td>
              </tr>
              <tr>
                <td>
                  <code>.d-none .d-sm-block</code>
                </td>
                <td>Hidden only on xs</td>
              </tr>
              <tr>
                <td>
                  <code>.d-sm-none .d-md-block</code>
                </td>
                <td>Hidden only on sm</td>
              </tr>
              <tr>
                <td>
                  <code>.d-md-none .d-lg-block</code>
                </td>
                <td>Hidden only on md</td>
              </tr>
              <tr>
                <td>
                  <code>.d-lg-none .d-xl-block</code>
                </td>
                <td>Hidden only on lg</td>
              </tr>
              <tr>
                <td>
                  <code>.d-xl-none</code>
                </td>
                <td>Hidden only on xl</td>
              </tr>
              <tr>
                <td>
                  <code>.d-block</code>
                </td>
                <td>Visible on all</td>
              </tr>
              <tr>
                <td>
                  <code>.d-block .d-sm-none</code>
                </td>
                <td>Visible only on xs</td>
              </tr>
              <tr>
                <td>
                  <code>.d-none .d-sm-block .d-md-none</code>
                </td>
                <td>Visible only on sm</td>
              </tr>
              <tr>
                <td>
                  <code>.d-none .d-md-block .d-lg-none</code>
                </td>
                <td>Visible only on md</td>
              </tr>
              <tr>
                <td>
                  <code>.d-none .d-lg-block .d-xl-none</code>
                </td>
                <td>Visible only on lg</td>
              </tr>
              <tr>
                <td>
                  <code>.d-none .d-xl-block</code>
                </td>
                <td>Visible only on xl</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="d-xl-none"></div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default DisplayPage;
