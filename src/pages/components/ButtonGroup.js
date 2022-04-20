import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Row, Col, Button, ButtonGroup, ButtonToolbar } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";
import { OverlineTitle } from "../../components/text/Text";

const ButtonGroupPage = () => {
  return (
    <React.Fragment>
      <Head title="Button Group" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Button Group
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Group a series of buttons together on a single line with the button group, and super-power them with
                JavaScript. To use it, import it such as <code>import {`{ButtonGroup}`} from "reactstrap"</code>. Visit
                the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/button-group"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Basic Example</BlockTitle>
              <p>
                Combine sets of button to wrap a series of <code>Button</code> in <code>ButtonGroup</code> component.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col sm="6">
                <OverlineTitle tag="span" className="preview-title">
                  Default Buttons
                </OverlineTitle>
                <ButtonGroup>
                  <Button color="primary">Left</Button>
                  <Button color="primary">Middle</Button>
                  <Button color="primary">Right</Button>
                </ButtonGroup>
              </Col>
              <Col sm="6">
                <OverlineTitle tag="span" className="preview-title">
                  Default Buttons
                </OverlineTitle>
                <ButtonGroup>
                  <Button className="btn-dim" color="primary">
                    Left
                  </Button>
                  <Button className="btn-dim" color="primary">
                    Middle
                  </Button>
                  <Button className="btn-dim" color="primary">
                    Right
                  </Button>
                </ButtonGroup>
              </Col>
              <Col sm="6">
                <OverlineTitle tag="span" className="preview-title">
                  Outlined Buttons
                </OverlineTitle>
                <ButtonGroup>
                  <Button outline color="primary">
                    Left
                  </Button>
                  <Button outline color="primary">
                    Middle
                  </Button>
                  <Button outline color="primary">
                    Right
                  </Button>
                </ButtonGroup>
              </Col>
              <Col sm="6">
                <OverlineTitle tag="span" className="preview-title">
                  Outlined Buttons
                </OverlineTitle>
                <ButtonGroup>
                  <Button className="btn-dim" outline color="primary">
                    Left
                  </Button>
                  <Button className="btn-dim" outline color="primary">
                    Middle
                  </Button>
                  <Button className="btn-dim" outline color="primary">
                    Right
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ButtonGroup>
  <Button color="primary">Left</Button>
  <Button color="primary">Middle</Button>
  <Button color="primary">Right</Button>
</ButtonGroup>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Button Toolbar</BlockTitle>
              <p>Combine sets of button groups into button toolbars for more complex components.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ButtonToolbar className="g-2">
              <ButtonGroup>
                <Button color="primary">1</Button>
                <Button color="primary">2</Button>
                <Button color="primary">3</Button>
                <Button color="primary">4</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button color="primary">5</Button>
                <Button color="primary">6</Button>
                <Button color="primary">7</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button color="primary">8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ButtonToolbar className="g-2">
  <ButtonGroup>
    <Button color="primary">1</Button>
    <Button color="primary">2</Button>
    <Button color="primary">3</Button>
    <Button color="primary">4</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button color="primary">5</Button>
    <Button color="primary">6</Button>
    <Button color="primary">7</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button color="primary">8</Button>
  </ButtonGroup>
</ButtonToolbar>`}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Button Sizing</BlockTitle>
              <p>
                Just add <code>size</code> to each <code>ButtonGroup</code> component to control applying button sizing
                globaly.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="g-3">
              <li>
                <ButtonGroup size="lg">
                  <Button color="primary">Left</Button>
                  <Button color="primary">Middle</Button>
                  <Button color="primary">Right</Button>
                </ButtonGroup>
              </li>
              <li>
                <ButtonGroup>
                  <Button color="primary">Left</Button>
                  <Button color="primary">Middle</Button>
                  <Button color="primary">Right</Button>
                </ButtonGroup>
              </li>
              <li>
                <ButtonGroup size="sm">
                  <Button color="primary">Left</Button>
                  <Button color="primary">Middle</Button>
                  <Button color="primary">Right</Button>
                </ButtonGroup>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ButtonGroup size="sm">
  <Button color="primary">Left</Button>
  <Button color="primary">Middle</Button>
  <Button color="primary">Right</Button>
</ButtonGroup>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ButtonGroupPage;
