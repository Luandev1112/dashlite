import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Button, Popover, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const PopoversPage = ({ ...props }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <React.Fragment>
      <Head title="Popovers" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Popovers
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.To use it,
                import it such as <code>import {`{Popover}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/popovers"} target="_blank" rel="noreferrer">
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
              <p>Click the following button to see the basic example of popover.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Button size="lg" color="primary" id="Popover1" type="button">
              Click to toggle popover
            </Button>
            <Popover isOpen={popoverOpen} target="Popover1" toggle={toggle}>
              <PopoverHeader>Popover Title</PopoverHeader>
              <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
            </Popover>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button size="lg" color="primary" id="Popover1" type="button">
  Click to toggle popover
</Button>
<Popover isOpen={popoverOpen} target="Popover1" toggle={toggle}>
  <PopoverHeader>Popover Title</PopoverHeader>
  <PopoverBody>
    And here"s some amazing content. It"s very engaging. Right?
  </PopoverBody>
</Popover>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Four Directions</BlockTitle>
              <p>
                Use <code>{`placement={top|right|bottom|left}`}</code> props in <code>Popover</code> for direction.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <Button color="primary" id="PopoverTop" type="button">
                  Popover on Top
                </Button>
                <UncontrolledPopover placement="top" target="PopoverTop">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here"s some amazing content. It"s very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
              </li>
              <li className="preview-item">
                <Button color="primary" id="PopoverRight" type="button">
                  Popover on Right
                </Button>
                <UncontrolledPopover placement="right" target="PopoverRight">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here"s some amazing content. It"s very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
              </li>
              <li className="preview-item">
                <Button color="primary" id="PopoverBottom" type="button">
                  Popover on Bottom
                </Button>
                <UncontrolledPopover placement="bottom" target="PopoverBottom">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here"s some amazing content. It"s very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
              </li>
              <li className="preview-item">
                <Button color="primary" id="PopoverLeft" type="button">
                  Popover on Left
                </Button>
                <UncontrolledPopover placement="left" target="PopoverLeft">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here"s some amazing content. It"s very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button color="primary" id="PopoverTop" type="button">
  Popover on Top
</Button>
<UncontrolledPopover placement="top" target="PopoverTop">
  <PopoverHeader>Popover Title</PopoverHeader>
  <PopoverBody>
    And here"s some amazing content. It"s very engaging. Right?
  </PopoverBody>
</UncontrolledPopover>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Dismissible Popover</BlockTitle>
              <p>
                Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element
                than the toggle element.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Button color="danger" id="PopoverDismisable" className="btn-dim">
              Dismissible popover
            </Button>
            <UncontrolledPopover target="PopoverDismisable" trigger="focus">
              <PopoverHeader>Popover Title</PopoverHeader>
              <PopoverBody>And here"s some amazing content. It"s very engaging. Right?</PopoverBody>
            </UncontrolledPopover>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button color="danger" id="PopoverDismisable" className="btn-dim">
  Dismissible popover
</Button>
<UncontrolledPopover target="PopoverDismisable" trigger="focus">
  <PopoverHeader>Popover Title</PopoverHeader>
  <PopoverBody>
    And here"s some amazing content. It"s very engaging. Right?
  </PopoverBody>
</UncontrolledPopover>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PopoversPage;
