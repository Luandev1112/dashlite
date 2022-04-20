import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";
import { OverlineTitle } from "../../components/text/Text";

const ColorsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Colors Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Colors Utility
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Convey meaning through color with a handful of color utility classNames. This utilities to quickly style
                the text and background of any element.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Background Color</BlockTitle>
              <p>
                A set of solid background utilities classNames. Use <code className="code-class">.bg-[color]</code>{" "}
                className in element to set background color.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle>Theme Color</OverlineTitle>
            <div className="d-flex flex-wrap bg-white text-center fs-12px">
              <div className="w-80px flex-fill p-2 bg-primary text-white">primary</div>
              <div className="w-80px flex-fill p-2 bg-secondary text-white">secondary</div>
              <div className="w-80px flex-fill p-2 bg-dark text-white">dark</div>
              <div className="w-80px flex-fill p-2 bg-gray text-white">gray</div>
              <div className="w-80px flex-fill p-2 bg-success text-white">success</div>
              <div className="w-80px flex-fill p-2 bg-danger text-white">danger</div>
              <div className="w-80px flex-fill p-2 bg-warning text-dark">warning</div>
              <div className="w-80px flex-fill p-2 bg-info text-white">info</div>
            </div>
            <OverlineTitle className="mt-4">Theme Pale Color</OverlineTitle>
            <div className="d-flex flex-wrap bg-white text-center fs-12px">
              <div className="w-80px flex-fill p-2 bg-primary-dim text-primary">primary</div>
              <div className="w-80px flex-fill p-2 bg-secondary-dim text-secondary">secondary</div>
              <div className="w-80px flex-fill p-2 bg-dark-dim text-dark">dark</div>
              <div className="w-80px flex-fill p-2 bg-gray-dim text-gray">gray</div>
              <div className="w-80px flex-fill p-2 bg-success-dim text-success">success</div>
              <div className="w-80px flex-fill p-2 bg-danger-dim text-danger">danger</div>
              <div className="w-80px flex-fill p-2 bg-warning-dim text-warning">warning</div>
              <div className="w-80px flex-fill p-2 bg-info-dim text-info">info</div>
            </div>
            <OverlineTitle className="mt-4">Theme Lighten Color</OverlineTitle>
            <div className="d-flex bg-white text-center fs-12px">
              <div className="w-120px p-2 bg-light text-dark">light</div>
              <div className="w-120px p-2 bg-lighter text-dark">lighter</div>
              <div className="w-120px p-2 bg-white border border-light">white</div>
            </div>
          </PreviewCard>
          <PreviewCard>
            <OverlineTitle>Additional Color</OverlineTitle>
            <div className="d-flex flex-wrap bg-white text-center fs-12px">
              <div className="w-80px flex-fill p-2 bg-blue text-white">blue</div>
              <div className="w-80px flex-fill p-2 bg-azure text-white">azure</div>
              <div className="w-80px flex-fill p-2 bg-indigo text-white">indigo</div>
              <div className="w-80px flex-fill p-2 bg-purple text-white">purple</div>
              <div className="w-80px flex-fill p-2 bg-pink text-white">pink</div>
              <div className="w-80px flex-fill p-2 bg-orange text-white">orange</div>
              <div className="w-80px flex-fill p-2 bg-teal text-white">teal</div>
            </div>
            <OverlineTitle className="mt-4">Additional Pale Color</OverlineTitle>
            <div className="d-flex flex-wrap bg-white text-center fs-12px">
              <div className="w-80px flex-fill p-2 bg-blue-dim text-blue">blue</div>
              <div className="w-80px flex-fill p-2 bg-azure-dim text-azure">azure</div>
              <div className="w-80px flex-fill p-2 bg-indigo-dim text-indigo">indigo</div>
              <div className="w-80px flex-fill p-2 bg-purple-dim text-purple">purple</div>
              <div className="w-80px flex-fill p-2 bg-pink-dim text-pink">pink</div>
              <div className="w-80px flex-fill p-2 bg-orange-dim text-orange">orange</div>
              <div className="w-80px flex-fill p-2 bg-teal-dim text-teal">teal</div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">ClassName Reference</th>
                <th className="overline-title ">Theme/Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.bg-{"{theme}"}</code>
                  <br />
                </td>
                <td>primary | secondary | success | info | warning | danger | dark | gray</td>
              </tr>
              <tr>
                <td>
                  <code>.bg-{"{theme}"}-dim</code>
                </td>
                <td>
                  Use for pale/dim color and{" "}
                  <span className="text-soft">
                    <code>{"{theme}"}</code> same as above
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.bg-{"{color}"}</code>
                </td>
                <td>blue | azure | indigo | purple | pink | orange | teal</td>
              </tr>
              <tr>
                <td>
                  <code>.bg-{"{color}"}-dim</code>
                </td>
                <td>
                  Use for pale/dim color and{" "}
                  <span className="text-soft">
                    <code>{"{color}"}</code> same as above
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.bg-light</code>
                </td>
                <td>Use for light background</td>
              </tr>
              <tr>
                <td>
                  <code>.bg-lighter</code>
                </td>
                <td>Use for extra light background</td>
              </tr>
              <tr>
                <td>
                  <code>.bg-white</code>
                </td>
                <td>Use for white background</td>
              </tr>
              <tr>
                <td>
                  <code>.bg-transparent</code>
                </td>
                <td>Use for transparent background</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{` <div className="w-80px flex-fill p-2 bg-success text-white">success</div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Gray &amp; Dark Color</BlockTitle>
              <p>
                A set of shade color of gray and dark classNames. Use{" "}
                <code className="code-class">.bg-gray-[value]</code> className in element to set background color.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-wrap bg-white text-center fs-12px">
              <div className="w-80px flex-fill p-2 bg-gray-100 text-dark">100</div>
              <div className="w-80px flex-fill p-2 bg-gray-200 text-dark">200</div>
              <div className="w-80px flex-fill p-2 bg-gray-300 text-dark">300</div>
              <div className="w-80px flex-fill p-2 bg-gray-400 text-dark">400</div>
              <div className="w-80px flex-fill p-2 bg-gray-500 text-white">500</div>
              <div className="w-80px flex-fill p-2 bg-gray-600 text-white">600</div>
              <div className="w-80px flex-fill p-2 bg-gray-700 text-white">700</div>
              <div className="w-80px flex-fill p-2 bg-gray-800 text-white">800</div>
              <div className="w-80px flex-fill p-2 bg-gray-900 text-white">900</div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">ClassName Reference</th>
                <th className="overline-title ">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.bg-gray-{"{value}"}</code>
                </td>
                <td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="w-80px flex-fill p-2 bg-gray-900 text-white">900</div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Text Color</BlockTitle>
              <p>
                A set of text color utilities className. Use <code className="code-class">.text-{"{theme|color}"}</code>{" "}
                className in element to set text color.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">ClassName Reference</th>
                <th className="overline-title">Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.text-primary</code>
                </td>
                <td>
                  <span className="text-primary">Text in primary color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-secondary</code>
                </td>
                <td>
                  <span className="text-secondary">Text in secondary color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-success</code>
                </td>
                <td>
                  <span className="text-success">Text in success color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-danger</code>
                </td>
                <td>
                  <span className="text-danger">Text in danger color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-warning</code>
                </td>
                <td>
                  <span className="text-warning">Text in warning color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-info</code>
                </td>
                <td>
                  <span className="text-info">Text in info color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-body</code>
                </td>
                <td>
                  <span className="text-body">Text in body color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-dark</code>
                </td>
                <td>
                  <span className="text-dark">Text in dark color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-base</code>
                </td>
                <td>
                  <span className="text-base">Text in base color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-soft</code>
                </td>
                <td>
                  <span className="text-soft">Text in soft color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-black-50</code>
                </td>
                <td>
                  <span className="text-black-50">Text in black 50% color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-light</code>
                </td>
                <td>
                  <span className="text-light bg-dark">Text in light color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-lighter</code>
                </td>
                <td>
                  <span className="text-lighter bg-dark">Text in lighter color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-white</code>
                </td>
                <td>
                  <span className="text-white bg-dark">Text in white color</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-{"{theme}"}</code>
                  <br />
                  <code>.text-{"{theme}"}-dim</code>
                </td>
                <td>
                  Use for text color &amp; <code>-dim</code> user for pale color. <br />
                  <span className="text-soft">
                    <code>{"{theme}"}</code> use as{" "}
                    <code>primary, secondary, success, info, warning, danger, dark, gray</code>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-{"{color}"}</code>
                  <br />
                  <code>.text-{"{color}"}-dim</code>
                </td>
                <td>
                  Use for text color &amp; <code>-dim</code> user for pale color.
                  <br />
                  <span className="text-soft">
                    <code>{"{color}"}</code> use as <code>blue, azure, indigo, purple, pink, orange, teal</code>
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="w-80px flex-fill p-2 bg-gray-900 text-white">900</div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ColorsPage;
