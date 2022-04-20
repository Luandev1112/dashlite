import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const PaginationPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Pagination" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Pagination
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples for showing pagination to indicate a series of related content exists across multiple pages.To
                use it, import it such as{" "}
                <code>import {`{Pagination, PaginationItem, PaginationLink}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/pagination"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Basic Examples</BlockTitle>
              <p>The following example of basic pagination. Use pagination component from reactstrap</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink
                  className="page-link-prev"
                  href="#prev"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <Icon name="chevrons-left" />
                  <span>Prev</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="span">
                  <Icon name="more-h" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  6{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  7{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="page-link-next"
                  href="#next"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Next</span>
                  <Icon name="chevrons-right" />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Pagination aria-label="Page navigation example">
  <PaginationItem>
    <PaginationLink className="page-link-prev" href="#prev" onClick={(ev) => ev.preventDefault()}>
      <Icon name="chevrons-left" />
      <span>Prev</span>
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()> 1 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 2 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink tag="span">
      <Icon name="more-h" />
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 6 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 7 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink className="page-link-next" href="#next" onClick={(ev) => ev.preventDefault()}>
      <span>Next</span>
      <Icon name="chevrons-right" />
    </PaginationLink>
  </PaginationItem>
</Pagination>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Working with Icons</BlockTitle>
              <p>
                Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper
                screen reader support with aria attributes..
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink
                  href="#prev"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Prev"
                >
                  <span aria-hidden="true">&laquo;</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Pagination aria-label="Page navigation example">
  <PaginationItem>
    <PaginationLink href="#prev" onClick={(ev) => ev.preventDefault()} aria-label="Prev">
      <span aria-hidden="true">&laquo;</span>
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 1 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 2 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 3 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#next" onClick={(ev) => ev.preventDefault()} aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </PaginationLink>
  </PaginationItem>
</Pagination>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Disabled and Active States</BlockTitle>
              <p>
                Use <code>disabled</code> props in <code>PaginationItem</code> for links that appear un-clickable and{" "}
                <code>active</code> props in <code>PaginationItem</code> to indicate the current page..
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink
                  href="#prev"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Prev"
                >
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#next"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Next"
                >
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Pagination aria-label="Page navigation example">
  <PaginationItem disabled>
    <PaginationLink href="#prev" onClick={(ev) => ev.preventDefault()} aria-label="Prev">
      Prev
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 1 </PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 2 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 3 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#next" onClick={(ev) => ev.preventDefault()} aria-label="Next">
      Next
    </PaginationLink>
  </PaginationItem>
</Pagination>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Sizing</BlockTitle>
              <p>
                Add <code>size="sm|md|lg"</code> props with <code>Pagination</code> component for additional sizes.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Pagination size="sm" aria-label="Page navigation example">
              <PaginationItem active>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="span">
                  <Icon name="more-h" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="gap"></div>
            <Pagination aria-label="Page navigation example">
              <PaginationItem active>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="span">
                  <Icon name="more-h" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="gap"></div>
            <Pagination size="lg" aria-label="Page navigation example">
              <PaginationItem active>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="span">
                  <Icon name="more-h" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="gap"></div>
            <Pagination size="xl" aria-label="Page navigation example">
              <PaginationItem active>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="span">
                  <Icon name="more-h" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Pagination size="xl" aria-label="Page navigation example">
  <PaginationItem active>
    <PaginationLink href="#item"> 1 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink tag="span">
      <Icon name="more-h" />
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item"> 2 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item"> 3 </PaginationLink>
  </PaginationItem>
</Pagination>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Alignment</BlockTitle>
              <p>
                Change the alignment of pagination components with flexbox utilities as use
                .justify-content-[start|center|end] to set alignment.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Pagination listClassName="justify-content-start" aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink
                  href="#prev"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Prev"
                >
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="next"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Next"
                >
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="gap"></div>
            <Pagination listClassName="justify-content-center" aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink
                  href="#prev"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Prev"
                >
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#next"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Next"
                >
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="gap"></div>
            <Pagination listClassName="justify-content-end" aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink
                  href="#prev"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Prev"
                >
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  1{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  2{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  {" "}
                  3{" "}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#next"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  aria-label="Next"
                >
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Pagination listClassName="justify-content-center" aria-label="Page navigation example>
  <PaginationItem disabled>
    <PaginationLink href="#prev" onClick={(ev) => ev.preventDefault()} aria-label="Prev">
      Prev
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 1 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 2 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 3 </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#next" onClick={(ev) => ev.preventDefault()} aria-label="Next">
      Next
    </PaginationLink>
  </PaginationItem>
</Pagination>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PaginationPage;
