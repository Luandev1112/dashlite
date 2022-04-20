import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Tooltip, Button } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const TooltipItem = (props) => {
  const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <li className="preview-item">
      <Button color="primary" id={"Tooltip-" + id}>
        Tooltip on {item.text}
      </Button>
      <Tooltip placement={item.placement} isOpen={tooltipOpen} target={"Tooltip-" + id} toggle={toggle}>
        Tooltip Content!
      </Tooltip>
    </li>
  );
};

function TooltipsPage({ ...props }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <React.Fragment>
      <Head title="Tooltips" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Tooltips
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples for adding custom reactStrap tooltips with CSS and JavaScript using CSS3 for animations. To use
                it, import it such as <code>import {`{Tooltip}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/tooltips"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Examples</BlockTitle>
              <p>Hover over the button below to see tooltips.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              {[
                {
                  placement: "top",
                  text: "Top",
                },
                {
                  placement: "bottom",
                  text: "Bottom",
                },
                {
                  placement: "left",
                  text: "Left",
                },
                {
                  placement: "right",
                  text: "Right",
                },
              ].map((tooltip, i) => {
                return <TooltipItem key={i} item={tooltip} id={i} />;
              })}
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const ToolTipExample = () => {
    const [tooltipOpen , setOpen] = useState(false);

    const toggle = () => {setOpen(!tooltipOpen)};
    return (
      <React.Fragment>
        <Button color="primary" id="id">Tooltip on text </Button>
        <Tooltip placement=right isOpen={tooltipOpen} target="id" toggle={toggle}>
          Tooltip Content!
        </Tooltip>
      <React.Fragment>
    )
  }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Disabled elements</BlockTitle>
              <p>
                Elements with the <code>disabled</code> props aren’t interactive, meaning users cannot focus, hover, or
                click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a
                wrapper <code>div</code> or <code>span</code>, and override the <code>pointer-events</code> on the
                disabled element.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div id="TooltipExample" className="d-inline-block">
              <Button color="primary" disabled style={{ pointerEvents: "none" }}>
                {" "}
                Disabled button{" "}
              </Button>
            </div>
            <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
              Disabled Tooltip
            </Tooltip>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const ToolTipExample = () => {
    const [tooltipOpen , setOpen] = useState(false);

    const toggle = () => {setOpen(!tooltipOpen)};
    return (
      <Button color="primary" disabled  style={{ pointerEvents: "none" }}> Disabled button </Button>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        Disabled Tooltip
      </Tooltip>
    )
  }`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
}

export default TooltipsPage;
