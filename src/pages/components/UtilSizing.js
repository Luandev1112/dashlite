import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";

const SizingPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Sizing" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Sizing
            </BlockTitle>
            <BlockDes>
              <p className="lead">Easily make an element as wide or as tall with our width and height utilities.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Set a Width</BlockTitle>
              <p>These utility classNames allow to set width of an element instantly.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="example-width">
              <div className="w-25">25%</div>
              <div className="w-50">50%</div>
              <div className="w-75">75%</div>
              <div className="w-100">100%</div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Percent Width</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.w-{"{value}"}</code>
                </td>
                <td>15 | 20 | 25 | 30 | ... | 85 | 90 | 95 | 100 (step of 5)</td>
              </tr>
            </tbody>
          </PreviewTable>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Use-case Width</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.wide-{"{value}"}</code>
                </td>
                <td>xs | sm | md | lg | xl</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <em className="fs-13px">
                    These classNames mostly used with <code>.container</code> to specific width on any larger screens.
                  </em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Specific Width</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.w-{"{value}"}</code>
                </td>
                <td>
                  80px | 90px | 100px | 110px | 120px | 125px | 130px | 140px | 150px | 175px | 200px | 220px | 225px |
                  250px | 300px | 350px | 400px | 550px
                </td>
              </tr>
              <tr>
                <td>
                  <code>.w-max-{"{value}"}</code>
                </td>
                <td>
                  <span className="text-soft">Same as above</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.w-min-{"{value}"}</code>
                </td>
                <td>
                  <span className="text-soft">Same as above</span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Full Width</th>
                <th className="overline-title">Value</th>
                <th className="overline-title"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.w-{"{value}"}</code>
                </td>
                <td>auto | 100</td>
                <td>
                  <em className="text-soft">
                    <code>auto</code> use for reset
                  </em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.w-max-{"{value}"}</code>
                </td>
                <td>auto | 100</td>
                <td>
                  <em className="text-soft">
                    <code>auto</code> use for reset
                  </em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.w-min-{"{value}"}</code>
                </td>
                <td>auto | 100</td>
                <td>
                  <em className="text-soft">
                    <code>auto</code> use for reset
                  </em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.mw-100</code>
                </td>
                <td> </td>
                <td>
                  <em className="text-soft">
                    Same as <code>.w-max-100</code>
                  </em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="w-25"></div>`}</CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Set a Height</BlockTitle>
              <p>These utility classNames allow to set width of an element instantly.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex example-height">
              <div className="h-25">25%</div>
              <div className="h-50">50%</div>
              <div className="h-75">75%</div>
              <div className="h-100">100%</div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Percent Height</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.h-{"{value}"}</code>
                </td>
                <td>25 | 50 | 75 | 100 | auto</td>
              </tr>
              <tr>
                <td>
                  <code>.mh-100</code>
                </td>
                <td>
                  <em className="text-soft">Set max height 100%</em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Specific Height</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.h-{"{value}"}</code>
                </td>
                <td>
                  100px | 150px | 175px | 200px | 225px | 250px | 275px | 300px | 325px | 350px | 375px | 400px | 425px
                  | 450px | 475px | 500px
                </td>
              </tr>
              <tr>
                <td>
                  <code>.h-max-{"{value}"}</code>
                </td>
                <td>
                  <span className="text-soft">Same as above</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.h-min-{"{value}"}</code>
                </td>
                <td>
                  <span className="text-soft">Same as above</span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="h-25"></div>`}</CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Relative to the viewport</BlockTitle>
              <p>You can also use utilities to set the width and height relative to the viewport.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">ClassName Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.vh-100</code>
                </td>
                <td>Height set 100vh</td>
              </tr>
              <tr>
                <td>
                  <code>.vw-100</code>
                </td>
                <td>Width set 100vw</td>
              </tr>
              <tr>
                <td>
                  <code>.min-vh-100</code>
                </td>
                <td>Height set min 100vh</td>
              </tr>
              <tr>
                <td>
                  <code>.min-vw-100</code>
                </td>
                <td>Width set min 100vw</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="min-vw-25"></div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default SizingPage;
