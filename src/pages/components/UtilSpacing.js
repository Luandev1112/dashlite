import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";

const SpacingPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Spacing Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Spacing Utility
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                A wide range of shorthand responsive margin and padding utility classNames to modify an element’s
                appearance. Mostly use for cards, buttons, or any other element.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Size Reference</BlockTitle>
              <p>
                This will guide you how much space used in <code>{"{size}"}</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">Reference</th>
                <th className="overline-title">Value</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>{"{size}"}</code>
                </td>
                <td>
                  0<br />
                  1<br />
                  2<br />
                  3<br />
                  4<br />
                  5<br />
                  gs
                </td>
                <td className="text-soft">
                  <code>0rem</code> as <code className="code-tag">0px</code>
                  <br />
                  <code>0.375rem</code> as <code className="code-tag">6px</code>
                  <br />
                  <code>0.75rem</code> as <code className="code-tag">12px</code>
                  <br />
                  <code>1.0rem</code> as <code className="code-tag">16px</code>
                  <br />
                  <code>1.5rem</code> as <code className="code-tag">24px</code>
                  <br />
                  <code>2.75rem</code> as <code className="code-tag">44px</code>
                  <br />
                  <code>28px</code> as <code className="code-tag">gutter</code> size
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <em className="fs-13px">Note: Base font size is 16px and 1rem equal to 16px</em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Set Margin</BlockTitle>
              <p>These utility classNames allow to set margin to an element.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-wrap example-spacing example-spacing-mg">
              <div className="mr-gs">mr-gs</div>
              <div className="mr-5">mr-5</div>
              <div className="mr-4">mr-4</div>
              <div className="mr-3">mr-3</div>
              <div className="mr-2">mr-2</div>
              <div className="mr-1">mr-1</div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">ClassName Reference</th>
                <th className="overline-title">Size</th>
                <th className="overline-title">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.m-{"{size}"}</code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">Apply margin around to the element</td>
              </tr>
              <tr>
                <td>
                  <code>.ml-{"{size}"}</code>
                  <br />
                  <code>.mr-{"{size}"}</code>
                  <br />
                  <code>.mt-{"{size}"}</code>
                  <br />
                  <code>.mb-{"{size}"}</code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">Apply margin on specific side of the element</td>
              </tr>
              <tr>
                <td>
                  <code>
                    .m-{"{screen}"}-{"{size}"}
                  </code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">
                  Use <code>{"{screen}"}</code> as <code>sm | md | lg | xl</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>
                    .ml-{"{screen}"}-{"{size}"}
                  </code>
                  <br />
                  <code>
                    .mr-{"{screen}"}-{"{size}"}
                  </code>
                  <br />
                  <code>
                    .mt-{"{screen}"}-{"{size}"}
                  </code>
                  <br />
                  <code>
                    .mb-{"{screen}"}-{"{size}"}
                  </code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">Same as above</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <em className="fs-13px">
                    <code>{"{screen}"}</code> related with breakpoint and apply from the <code>{"{screen}"}</code> you
                    have use. For example, <code>.m-sm-2</code> sets margin on <code>sm</code> screen and continue to
                    above screens.
                  </em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">
            {`<div className="m-2"> ... </div>
<div className="m-lg-2"> ... </div>
<div className="ml-lg-3 ml-sm-2"> ... </div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Set Padding</BlockTitle>
              <p>These utility classNames allow to set inside padding to an element.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex align-items-start flex-wrap example-spacing example-spacing-pd">
              <div className="p-1">
                <span>p-1</span>
              </div>
              <div className="p-2">
                <span>p-2</span>
              </div>
              <div className="p-3">
                <span>p-3</span>
              </div>
              <div className="p-4">
                <span>p-4</span>
              </div>
              <div className="p-5">
                <span>p-5</span>
              </div>
              <div className="p-gs">
                <span>p-gs</span>
              </div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">ClassName Reference</th>
                <th className="overline-title">Size</th>
                <th className="overline-title">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.p-{"{size}"}</code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">Apply padding around to the element</td>
              </tr>
              <tr>
                <td>
                  <code>.pl-{"{size}"}</code>
                  <br />
                  <code>.pr-{"{size}"}</code>
                  <br />
                  <code>.pt-{"{size}"}</code>
                  <br />
                  <code>.pb-{"{size}"}</code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">Apply padding on specific side of the element</td>
              </tr>
              <tr>
                <td>
                  <code>
                    .p-{"{screen}"}-{"{size}"}
                  </code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">
                  Use <code>{"{screen}"}</code> as <code>sm, md, lg, xl</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>
                    .pl-{"{screen}"}-{"{size}"}
                  </code>
                  <br />
                  <code>
                    .pr-{"{screen}"}-{"{size}"}
                  </code>
                  <br />
                  <code>
                    .pt-{"{screen}"}-{"{size}"}
                  </code>
                  <br />
                  <code>
                    .pb-{"{screen}"}-{"{size}"}
                  </code>
                </td>
                <td>0 | 1 | 2 | 3 | 4 | 5 | gs | auto</td>
                <td className="text-soft">Same as above</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <em className="fs-13px">
                    <code>{"{screen}"}</code> related with breakpoint and will apply from the <code>{"{screen}"}</code>{" "}
                    to above. For example, <code>.m-sm-2</code> sets padding on <code>sm</code> screen and continue to
                    above screens.
                  </em>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">
            {`<div class="p-2"> ... </div>
<div class="p-lg-2"> ... </div>
<div class="p-lg-3 p-sm-2"> ... </div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Gaps classNames</BlockTitle>
              <p>The gap classNames allow to set specific gap between to section or block.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">className Reference</th>
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
          <CodeBlock language="jsx">
            {`<div className="gap"></div>
<div className="gap gap-sm"></div>
<div className="gap gap-20px"></div>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default SpacingPage;
