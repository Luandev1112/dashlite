import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Spinner, Button } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const SpinnerPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Spinner" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Spinner
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Indicate the loading state of a component or page with Bootstrap spinners. To use it, import it such as{" "}
                <code>import {`{Spinner}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/spinners"} target="_blank" rel="noreferrer">
                  Reactstrap
                </a>{" "}
                library for detailed instructions.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Border spinner</BlockTitle>
              <p>Use the border spinners for a lightweight loading indicator.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Spinner color="dark" />
          </PreviewCard>
          <CodeBlock language="jsx">{`<Spinner color="dark" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Colors</BlockTitle>
              <p>
                The border spinner uses <code className="highlighter-rouge">color</code> props for its{" "}
                <code className="highlighter-rouge">border-color</code>, meaning you can customize the color with text
                color utilities. You can use any of our text color utilities on the standard spinner.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list g-2">
              <li className="preview-item">
                <Spinner color="primary" />
              </li>
              <li className="preview-item">
                <Spinner color="secondary" />
              </li>
              <li className="preview-item">
                <Spinner color="success" />
              </li>
              <li className="preview-item">
                <Spinner color="danger" />
              </li>
              <li className="preview-item">
                <Spinner color="warning" />
              </li>
              <li className="preview-item">
                <Spinner color="info" />
              </li>
              <li className="preview-item">
                <Spinner color="light" />
              </li>
              <li className="preview-item">
                <Spinner color="dark" />
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Spinner color="primary" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Growing spinner</BlockTitle>
              <p>
                If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it
                does repeatedly grow!
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Spinner type="grow" color="dark" />
          </PreviewCard>
          <CodeBlock language="jsx">{`<Spinner type="grow" color="dark" />`}</CodeBlock>
          <PreviewCard>
            <ul className="preview-list g-2">
              <li className="preview-item">
                <Spinner type="grow" color="primary" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="secondary" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="success" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="danger" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="warning" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="info" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="light" />
              </li>
              <li className="preview-item">
                <Spinner type="grow" color="dark" />
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Spinner type="grow" color="dark" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Size</BlockTitle>
              <p>
                Add <code className="highlighter-rouge">size</code> props and{" "}
                <code className="highlighter-rouge">type="grow"</code> to make a smaller spinner that can quickly be
                used within other components.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list g-2">
              <li className="preview-item">
                <Spinner size="sm" />
              </li>
              <li className="preview-item">
                <Spinner size="sm" type="grow" />
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Spinner size="sm" type="grow" />`}</CodeBlock>
          <PreviewCard>
            <ul className="preview-list g-2">
              <li className="preview-item">
                <Spinner style={{ width: "3rem", height: "3rem" }} />
              </li>
              <li className="preview-item">
                <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Spinner style={{ width: "3rem", height: "3rem" }} type="grow"/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Buttons</BlockTitle>
              <p>
                Use spinners within buttons to indicate an action is currently processing or taking place. You may also
                swap the text out of the spinner element and utilize button text as needed.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list g-2">
              <li className="preview-item">
                <Button disabled color="primary">
                  <Spinner size="sm" />
                </Button>
              </li>
              <li className="preview-item">
                <Button disabled color="primary">
                  <Spinner size="sm" />
                  <span> Loading... </span>
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button disabled color="primary">
  <Spinner size="sm" />
  <span> Loading... </span>
</Button>`}
          </CodeBlock>
          <PreviewCard>
            <ul className="preview-list g-2">
              <li className="preview-item">
                <Button disabled color="primary">
                  <Spinner size="sm" type="grow" />
                </Button>
              </li>
              <li className="preview-item">
                <Button disabled color="primary">
                  <Spinner size="sm" type="grow" />
                  <span> Loading... </span>
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button disabled color="primary">
  <Spinner size="sm" type="grow" />
  <span> Loading... </span>
</Button>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default SpinnerPage;
