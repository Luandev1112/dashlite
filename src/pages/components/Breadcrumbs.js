import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const BreadcrumbsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Breadcrumb" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Breadcrumb
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Indicate the current page’s location within a navigational hierarchy that automatically adds separators
                via CSS. To use the components, import it such as{" "}
                <code>import {`{Breadcrumb, BreadcrumbItem}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/breadcrumbs"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Default Style</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#Home">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#Home">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#Library">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Breadcrumb>
  <BreadcrumbItem>
    <a href="#Home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="#Library">Library</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Arrow Style</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Breadcrumb className="breadcrumb-arrow">
              <BreadcrumbItem>
                <a href="#Home">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#Library">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Breadcrumb className="breadcrumb-arrow">
  <BreadcrumbItem>
    <a href="#Home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="#Library">Library</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Pipe Style</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Breadcrumb className="breadcrumb-pipe">
              <BreadcrumbItem>
                <a href="#Home">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#Library">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Breadcrumb className="breadcrumb-pipe">
  <BreadcrumbItem>
    <a href="#Home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="#Library">Library</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default BreadcrumbsPage;
