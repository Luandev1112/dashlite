import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

import Accordion from "../../components/partials/accordian/Preview";

const AccordionsPage = () => {
  return (
    <React.Fragment>
      <Head title="Accordions" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Accordions
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Toggle the visibility of content across your project with a few classes and Bootstrap collapse
                JavaScript plugins. The collapse plugin is used to show &amp; hide content.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Default Style</BlockTitle>
              <p>
                Using default collapse behavior to create an accordion. To properly achieve the accordion style, be sure
                to use <code>.accordion</code> as a wrapper className.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Accordion />
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const Accordian = () => {
    const [open, setIsOpen] = useState("1");
    return (
      <div className="accordion">
        <div className="accordion-item">
          <div
            className= "accordion-head"
            onClick={() => setIsOpen("1")}
          >
            <h6 className="title">What is Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "1" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("2")}
          >
            <h6 className="title">
              What are some of the benefits of receiving my bill electronically?
            </h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "2" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("3")}
          >
            <h6 className="title">
              What is the relationship between Dashlite and payment?
            </h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "3" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("4")}
          >
            <h6 className="title">What are the benefits of using Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "4" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    )
  }
`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Accordion Style2</BlockTitle>
              <p>
                Add the className <code>.accordion-s2</code> with <code>.accordion</code> to get this accordion style.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Accordion variation="2" />
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const Accordian = () => {
    const [open, setIsOpen] = useState("1");
    return (  
      <div className="accordion accordian-s2">
        <div className="accordion-item ">
          <div
            className= "accordion-head"
            onClick={() => setIsOpen("1")}
          >
            <h6 className="title">What is Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "1" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("2")}
          >
            <h6 className="title">
              What are some of the benefits of receiving my bill electronically?
            </h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "2" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("3")}
          >
            <h6 className="title">
              What is the relationship between Dashlite and payment?
            </h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "3" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("4")}
          >
            <h6 className="title">What are the benefits of using Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "4" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    )}`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Accordion Style3</BlockTitle>
              <p>
                Add the className <code>.accordion-s3</code> with <code>.accordion</code> to get this accordion style.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Accordion variation="3" />
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const Accordian = () => {
    const [open, setIsOpen] = useState("1");
    return (
      <div className="accordion accordian-s3">
        <div className="accordion-item">
          <div
            className= "accordion-head"
            onClick={() => setIsOpen("1")}
          >
            <h6 className="title">What is Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "1" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("2")}
          >
            <h6 className="title">
              What are some of the benefits of receiving my bill electronically?
            </h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "2" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("3")}
          >
            <h6 className="title">
              What is the relationship between Dashlite and payment?
            </h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "3" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
        <div className="accordion-item">
          <div
            className="accordion-head collapsed"
            onClick={() => setIsOpen("4")}
          >
            <h6 className="title">What are the benefits of using Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={isOpen === "4" ? true : false}
          >
            <div className="accordion-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    )}`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default AccordionsPage;
