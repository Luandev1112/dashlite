import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewTable, CodeBlock } from "../../components/preview/Preview";

const OthersPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Other Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Other Utility Classes
            </BlockTitle>
            <BlockDes>
              <p className="lead">Here is some other utility classes that use to quickly style an element.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Gaps ClassNames</BlockTitle>
              <p>
                The <code>.gap</code> utility classNames allow to set specific gap between to section or block.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">ClassName Reference</th>
                <th className="overline-title">Value</th>
                <th className="overline-title"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.gap</code>
                </td>
                <td>
                  <code>28px</code> as <code className="code-tag">gutter</code> size
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>.gap-sm</code>
                </td>
                <td>
                  <code>0.75rem</code> as <code className="code-tag">12px</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>.gap-md</code>
                </td>
                <td>
                  <code>1.25rem</code> as <code className="code-tag">20px</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>.gap-lg</code>
                </td>
                <td>
                  <code>2rem</code> as <code className="code-tag">32px</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>.gap-xl</code>
                </td>
                <td>
                  <code>2.5rem</code> as <code className="code-tag">40px</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>.gap-{"{num}"}px</code>
                </td>
                <td>
                  <code>[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]</code> use as <code>{"{num}"}</code> value
                </td>
                <td>
                  <span className="fs-11px text-soft">Fixed in pixel</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.gap-{"{size}"}</code>
                </td>
                <td>
                  <code>[0, 1, 2, 3, 4, 5] </code> as <code>{"{size}"}</code> value
                </td>
                <td>
                  <span className="fs-11px text-soft">
                    <code>{"{size}"}</code> is related to Size reference.
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="gap-sm"></div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default OthersPage;
