import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewTable, CodeBlock } from "../../components/preview/Preview";

const TextPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Text Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Text Utility
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Dashlite includes several predefined button styles, each serving its own semantic purpose, with a few
                extras thrown in for more control.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Text alignment</BlockTitle>
              <p>Easily realign text to components with text alignment classNames.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">ClassName Reference</th>
                <th className="overline-title">Value</th>
                <th className="overline-title">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.text-{"{value}"}</code>
                  <br />
                  <code>
                    .text-{"{screen}"}-{"{value}"}
                  </code>
                </td>
                <td>left | right | justify | center</td>
                <td className="text-soft">
                  Alignment the text
                  <br />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <em className="fs-13px">
                    Use <code>{"{screen}"}</code> as <code>sm, md, lg, xl, xxl</code>. Please note,{" "}
                    <code>{"{screen}"}</code> related with breakpoint and will apply from the <code>{"{screen}"}</code>{" "}
                    to above. For example, <code>.m-sm-2</code> sets padding on <code>sm</code> screen and continue to
                    above screens.
                  </em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<span className="text-xl-right">`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Text transform</BlockTitle>
              <p>Transform text in components with text capitalization classNames.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">ClassName Reference</th>
                <th className="overline-title">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.lcap, .text-lowercase</code>
                </td>
                <td>lowercased text.</td>
              </tr>
              <tr>
                <td>
                  <code>.ucap, .text-uppercase</code>
                </td>
                <td>UPPERCASED TEXT.</td>
              </tr>
              <tr>
                <td>
                  <code>.ccap, .text-capitalize</code>
                </td>
                <td>Capitalized Text.</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<span className="text-lowercase">`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Fixed Font Size</BlockTitle>
              <p>Quickly set the fixed size of text.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">ClassName Reference</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.fs-{"{value}"}px</code>
                </td>
                <td>9 | 10 | 11 | 12 | 13 | 14 | 15 | 16</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<span className="fs-{10}px">`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Font Family &amp; Style</BlockTitle>
              <p>Quickly change the weight (boldness) of text or italicize text or font family.</p>
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
                  <code>.ff-base</code>
                </td>
                <td>
                  <p className="ff-base">Base Font Family</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.ff-alt</code>
                </td>
                <td>
                  <p className="ff-alt">Alter Font Family</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.ff-mono</code>
                </td>
                <td>
                  <p className="ff-mono">Mono Font Family</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.ff-italic</code>
                </td>
                <td>
                  <p className="ff-italic">Italic text line.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.fw-bold</code>
                </td>
                <td>
                  <p className="fw-bold">Bold text.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.fw-medium</code>
                </td>
                <td>
                  <p className="fw-medium">Medium weight text.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.fw-normal</code>
                </td>
                <td>
                  <p className="fw-normal">Normal weight text.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.fw-light</code>
                </td>
                <td>
                  <p className="fw-light">Light weight text.</p>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<span className="fw-light">`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Additional classNames</BlockTitle>
              <p>Here is few more classNames that will helps you style the text.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">ClassName Reference</th>
                <th className="overline-title">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.text-reset</code>
                </td>
                <td>
                  <p className="text-reset">Reset a text color</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-muted</code>
                </td>
                <td>
                  <p className="text-muted">
                    Muted text with a{" "}
                    <a
                      href="#link"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                      className="text-reset"
                    >
                      reset link
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-decoration-none</code>
                </td>
                <td>
                  <p className="text-decoration-none">Remove a text decoration</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-ellipsis</code>
                </td>
                <td>
                  <p className="text-ellipsis w-150px">Ellipsis text &amp; auto dot end</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-wrap</code>
                </td>
                <td>
                  <p className="text-wrap">Wrapping any text</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code>.text-nowrap</code>
                  </p>
                </td>
                <td>
                  <p className="text-nowrap">Prevent text from wrapping.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.text-break</code>
                </td>
                <td>
                  <p className="text-break">To break long string</p>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<span className="text-break">`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default TextPage;
