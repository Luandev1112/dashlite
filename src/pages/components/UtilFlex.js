import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const FlexPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Flex Utility" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Flex Utility
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with
                a full suite of responsive flexbox utilities.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Enable flex behaviors</BlockTitle>
              <p>
                Apply <code className="language-plaintext highlighter-rouge">display</code> utilities to create a
                flexbox container and transform <strong>direct children elements</strong> into flex items. Flex
                containers and items are able to be modified further with additional flex properties.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex p-2 bg-lighter">I"m a flexbox container!</div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<div className="d-flex">I"m a flexbox container!</div>`}</CodeBlock>
          <PreviewCard>
            <div className="d-inline-flex p-2 bg-lighter">I"m an inline flexbox container!</div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<div className="d-inline-flex">I"m an inline flexbox container!</div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Direction</BlockTitle>
              <p>
                Default horizontal direction of flex item is <code className="highlighter-rouge">row</code>. If you want
                to change direction then use <code className="highlighter-rouge">flex-row</code> for horizontal
                direction, <code className="highlighter-rouge">flex-row-reverse</code> for opposite horizontal
                direction. Default Vertical direction is <code className="highlighter-rouge">column</code>,for it use{" "}
                <code className="highlighter-rouge">flex-column</code> or{" "}
                <code className="highlighter-rouge">flex-column-reverse</code> for opposit vertical direction
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-row bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item 1</div>
              <div className="p-2 bg-light">Flex item 2</div>
              <div className="p-2 bg-light">Flex item 3</div>
            </div>
            <div className="d-flex flex-row-reverse bg-lighter">
              <div className="p-2 bg-light">Flex item 1</div>
              <div className="p-2 bg-light">Flex item 2</div>
              <div className="p-2 bg-light">Flex item 3</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex flex-row">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>`}
          </CodeBlock>
          <PreviewCard>
            <div className="d-flex flex-column bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item 1</div>
              <div className="p-2 bg-light">Flex item 2</div>
              <div className="p-2 bg-light">Flex item 3</div>
            </div>
            <div className="d-flex flex-column-reverse bg-lighter">
              <div className="p-2 bg-light">Flex item 1</div>
              <div className="p-2 bg-light">Flex item 2</div>
              <div className="p-2 bg-light">Flex item 3</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` <div className="d-flex flex-column">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Justify content</BlockTitle>
              <p>
                On flexbox container use <code className="highlighter-rouge">justify-content</code> utilities for change
                the alignment of flex items. There are many classNames. just add{" "}
                <code className="highlighter-rouge">(start, end, center, between, around)</code> with{" "}
                <code className="highlighter-rouge">justify-content</code>
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex justify-content-start bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex justify-content-end bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex justify-content-center bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex justify-content-between bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex justify-content-around bg-lighter">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex">
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Align Items</BlockTitle>
              <p>
                On flexbox container use <code className="highlighter-rouge">align-items</code> utilities for change the
                alignment of flex items on the cross axis. There are many classNames. just add{" "}
                <code className="highlighter-rouge">(start, end, center, baseline, stretch)</code> with{" "}
                <code className="highlighter-rouge">align-items</code>
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex align-items-start bg-lighter mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex align-items-end bg-lighter mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex align-items-center bg-lighter mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex align-items-baseline bg-lighter mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex align-items-stretch bg-lighter" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex" style={{ height: 100 }}>
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Align Self</BlockTitle>
              <p>
                On flexbox items use <code className="highlighter-rouge">align-self</code> utilities for change the
                alignment. There are many classNames. just add{" "}
                <code className="highlighter-rouge">(start, end, center, baseline, stretch)</code> with{" "}
                <code className="highlighter-rouge">align-self</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="align-self-start p-2 bg-light">Aligned flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="align-self-end p-2 bg-light">Aligned flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="align-self-center p-2 bg-light">Aligned flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex mb-3" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="align-self-baseline p-2 bg-light">Aligned flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
            <div className="d-flex" style={{ height: 100 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="align-self-stretch p-2 bg-light">Aligned flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex" style={{ height: 100 }}>
  <div>Flex item</div>
  <div className="align-self-end">
    Aligned flex item
  </div>
  <div>Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Fill</BlockTitle>
              <p>
                Use <code className="highlighter-rouge">flex-fill</code> class on flex-items
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex bg-light">
              <div className="p-2 flex-fill bg-light">Flex item with a lot of content</div>
              <div className="p-2 flex-fill bg-light">Flex item</div>
              <div className="p-2 flex-fill bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex">
  <div className="flex-fill">
    Flex item with a lot of content
  </div>
  <div className="flex-fill">Flex item</div>
  <div className="flex-fill">Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Grow and shrins</BlockTitle>
              <p>
                Use <code className="highlighter-rouge">.flex-grow-*</code> utilities to toggle a flex item’s ability to
                grow to fill available space. In the example below, the{" "}
                <code className="highlighter-rouge">.flex-grow-1</code> elements uses all available space it can, while
                allowing the remaining two flex items their necessary space.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex bg-light">
              <div className="p-2 flex-grow-1 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Third flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex">
  <div className="flex-grow-1">Flex item</div>
  <div>Flex item</div>
  <div>Third flex item</div>
</div>`}
          </CodeBlock>
          <PreviewCard>
            <div className="d-flex bg-light">
              <div className="p-2 w-100 bg-light">Flex item</div>
              <div className="p-2 flex-shrink-1 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex">
  <div className="p-2 w-100">Flex item</div>
  <div className="p-2 flex-shrink-1">Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Auto margins</BlockTitle>
              <p>
                For margin left right auto just use <code className="highlighter-rouge">.ml-auto</code>,{" "}
                <code className="highlighter-rouge">mr-auto</code> class on flex items.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>

            <div className="d-flex bg-lighter mb-3">
              <div className="mr-auto p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>

            <div className="d-flex bg-lighter mb-3">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="ml-auto p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex mb-3">
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With align-items</BlockTitle>
              <p>
                For margin top bottom auto just use <code className="highlighter-rouge">.mt-auto</code>,{" "}
                <code className="highlighter-rouge">mb-auto</code> className on flex items.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex align-items-start flex-column bg-lighter mb-3" style={{ height: 200 }}>
              <div className="mb-auto p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>

            <div className="d-flex align-items-end flex-column bg-lighter mb-3" style={{ height: 200 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="mt-auto p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex align-items-start flex-column mb-3" style={{ height: 200 }}>
  <div className="mb-auto p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Wrap</BlockTitle>
              <p>
                Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default)
                with <code className="highlighter-rouge">.flex-nowrap</code>, wrapping with{" "}
                <code className="highlighter-rouge">.flex-wrap</code>, or reverse wrapping with{" "}
                <code className="highlighter-rouge">.flex-wrap-reverse.</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-nowrap bg-lighter" style={{ width: 8 + "rem" }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex flex-nowrap">
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
</div>`}
          </CodeBlock>
          <PreviewCard>
            <div className="d-flex flex-wrap bg-lighter">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex flex-wrap">
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
</div>`}
          </CodeBlock>
          <PreviewCard>
            <div className="d-flex flex-wrap-reverse bg-lighter">
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex flex-wrap-reverse">
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
  <div className="p-2">Flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Order</BlockTitle>
              <p>
                Change the visual order of specific flex items with a handful of{" "}
                <code className="highlighter-rouge">order</code> utilities. We only provide options for making an item
                first or last, as well as a reset to use the DOM order.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex flex-nowrap bg-lighter">
              <div className="order-3 p-2 bg-light">First flex item</div>
              <div className="order-2 p-2 bg-light">Second flex item</div>
              <div className="order-1 p-2 bg-light">Third flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex flex-nowrap">
  <div className="order-3 p-2">First flex item</div>
  <div className="order-2 p-2">Second flex item</div>
  <div className="order-1 p-2">Third flex item</div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Align content</BlockTitle>
              <p>
                Use align-content utilities on flexbox containers to align flex items together on the cross axis. Choose
                from start (browser default), end, center, between, around, or stretch. To demonstrate these utilities,
                we’ve enforced <code>flex-wrap: wrap</code> and increased the number of flex items.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="d-flex align-content-start flex-wrap bg-lighter mb-3" style={{ height: 200 }}>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
              <div className="p-2 bg-light">Flex item</div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="d-flex align-content-start flex-wrap mb-3">
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
  <div className="p-2>Flex item</div>
</div>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FlexPage;
