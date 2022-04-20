import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";

import { Row, Col, Button } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";
import { OverlineTitle } from "../../components/text/Text";

const ButtonsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Buttons" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Buttons
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Documentation and examples of button styles for actions in forms, dialogs and more with support for
                multiple sizes, states, and more. To use it, import it such as{" "}
                <code>import {`{Button}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/buttons"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Example with Variations</BlockTitle>
              <p>
                Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few
                extras thrown in for more control.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Primary
                </OverlineTitle>
                <Button color="primary">Primary</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Secondary
                </OverlineTitle>
                <Button color="secondary">Secondary</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Success
                </OverlineTitle>
                <Button color="success">Success</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Danger
                </OverlineTitle>
                <Button color="danger">Danger</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Warning
                </OverlineTitle>
                <Button color="warning">Warning</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Info
                </OverlineTitle>
                <Button color="info">Info</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Light
                </OverlineTitle>
                <Button color="light">Light</Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Dark
                </OverlineTitle>
                <Button color="dark">Dark</Button>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">&lt;Button color=&quot;primary&quot;&gt;Primary&lt;/Button&gt;</CodeBlock>
          <PreviewCard>
            <Row className="g-4">
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Primary
                </OverlineTitle>
                <Button className="btn-dim" color="primary">
                  Primary
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Secondary
                </OverlineTitle>
                <Button className="btn-dim" color="secondary">
                  Secondary
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Success
                </OverlineTitle>
                <Button className="btn-dim" color="success">
                  Success
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Danger
                </OverlineTitle>
                <Button className="btn-dim" color="danger">
                  Danger
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Warning
                </OverlineTitle>
                <Button className="btn-dim" color="warning">
                  Warning
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Info
                </OverlineTitle>
                <Button className="btn-dim" color="info">
                  Info
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Light
                </OverlineTitle>
                <Button className="btn-dim" color="light">
                  Light
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Dark
                </OverlineTitle>
                <Button className="btn-dim" color="dark">
                  Dark
                </Button>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Button className="btn-dim" color="primary">Primary</Button>`}</CodeBlock>
          <PreviewCard>
            <Row className="g-4">
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Primary
                </OverlineTitle>
                <Button outline color="primary">
                  Primary
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Secondary
                </OverlineTitle>
                <Button outline color="secondary">
                  Secondary
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Success
                </OverlineTitle>
                <Button outline color="success">
                  Success
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Danger
                </OverlineTitle>
                <Button outline color="danger">
                  Danger
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Warning
                </OverlineTitle>
                <Button outline color="warning">
                  Warning
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Info
                </OverlineTitle>
                <Button outline color="info">
                  Info
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Light
                </OverlineTitle>
                <Button outline color="light">
                  Light
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Dark
                </OverlineTitle>
                <Button outline color="dark">
                  Dark
                </Button>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">&lt;Button outline color=&quot;primary&quot;&gt;Primary&lt;/Button&gt;</CodeBlock>
          <PreviewCard>
            <Row className="g-4">
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Primary
                </OverlineTitle>
                <Button className="btn-dim" outline color="primary">
                  Primary
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Secondary
                </OverlineTitle>
                <Button className="btn-dim" outline color="secondary">
                  Secondary
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Success
                </OverlineTitle>
                <Button className="btn-dim" outline color="success">
                  Success
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Danger
                </OverlineTitle>
                <Button className="btn-dim" outline color="danger">
                  Danger
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Warning
                </OverlineTitle>
                <Button className="btn-dim" outline color="warning">
                  Warning
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Info
                </OverlineTitle>
                <Button className="btn-dim" outline color="info">
                  Info
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Light
                </OverlineTitle>
                <Button className="btn-dim" outline color="light">
                  Light
                </Button>
              </Col>
              <Col xs="6" md="3">
                <OverlineTitle tag="span" className="preview-title">
                  Dark
                </OverlineTitle>
                <Button className="btn-dim" outline color="dark">
                  Dark
                </Button>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Button className="btn-dim" outline color="dark">Dark</Button>`}</CodeBlock>
          <PreviewCard>
            <ul className="preview-btn-list preview-btn-list-fw">
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Extra Large
                </OverlineTitle>
                <Button color="primary" size="xl">
                  Button Large
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Large
                </OverlineTitle>
                <Button color="primary" size="lg">
                  Button Large
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Regular
                </OverlineTitle>
                <Button color="primary">Button Regular</Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Small
                </OverlineTitle>
                <Button color="primary" size="sm">
                  Button Small
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            &lt;Button color=&quot;primary&quot; size=&quot;xl&quot;&gt;Primary&lt;/Button&gt;
          </CodeBlock>
          <PreviewCard>
            <ul className="preview-btn-list preview-btn-list-fw">
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Extra Large
                </OverlineTitle>
                <Button className="btn-round" color="primary" size="xl">
                  Button Large
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Large
                </OverlineTitle>
                <Button className="btn-round" color="primary" size="lg">
                  Button Large
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Regular
                </OverlineTitle>
                <Button className="btn-round" color="primary">
                  Button Regular
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Button Small
                </OverlineTitle>
                <Button className="btn-round" color="primary" size="sm">
                  Button Small
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            &lt;Button color=&quot;primary&quot; size=&quot;xl&quot;&gt;Primary&lt;/Button&gt;
          </CodeBlock>
          <PreviewCard>
            <ul className="preview-btn-list preview-btn-list-fw">
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Left Icon
                </OverlineTitle>
                <Button color="primary">
                  <Icon name="setting" />
                  <span>Button Left Icon</span>
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Right Icon
                </OverlineTitle>
                <Button color="primary">
                  <span>Button Right Icon</span>
                  <Icon name="setting" />
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Action Button
                </OverlineTitle>
                <Button color="primary">
                  <span>Action Button</span>
                  <Icon name="chevron-down" />
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Icon on Right
                </OverlineTitle>
                <Button className="btn-wider" color="primary">
                  <span>Action Button</span>
                  <Icon name="arul-right" />
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button color="primary">
  <Icon name="setting" />
  <span>Button Left Icon</span>
</Button>`}
          </CodeBlock>
          <PreviewCard>
            <ul className="preview-btn-list preview-btn-list-fw">
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Left Icon
                </OverlineTitle>
                <Button className="btn-round" color="primary">
                  <Icon name="setting" />
                  <span>Button Left Icon</span>
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Right Icon
                </OverlineTitle>
                <Button className="btn-round" color="primary">
                  <span>Button Right Icon</span>
                  <Icon name="setting" />
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Action Button
                </OverlineTitle>
                <Button className="btn-round" color="primary">
                  <span>Action Button</span>
                  <Icon name="chevron-down" />
                </Button>
              </li>
              <li className="preview-btn-item col-sm-6 col-lg-3">
                <OverlineTitle tag="span" className="preview-title">
                  Icon on Right
                </OverlineTitle>
                <Button className="btn-wider btn-round" color="primary">
                  <span>Action Button</span>
                  <Icon name="arrow-right" />
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button className="btn-round color="primary">
  <Icon name="setting" />
  <span>Button Left Icon</span>
</Button>`}
          </CodeBlock>
          <PreviewCard>
            <ul className="preview-btn-list preview-btn-list-3x text-center">
              <li className="preview-btn-item">
                <OverlineTitle className="preview-title">lg</OverlineTitle>
                <Button className="btn-icon" color="primary" size="lg">
                  <Icon name="play" />
                </Button>
              </li>
              <li className="preview-btn-item">
                <OverlineTitle className="preview-title">rg</OverlineTitle>
                <Button className="btn-icon" color="primary">
                  <Icon name="play" />
                </Button>
              </li>
              <li className="preview-btn-item">
                <OverlineTitle className="preview-title">sm</OverlineTitle>
                <Button className="btn-icon" color="primary" size="sm">
                  <Icon name="play" />
                </Button>
              </li>
              <li className="preview-btn-item">
                <OverlineTitle className="preview-title">lg</OverlineTitle>
                <Button className="btn-round btn-icon" color="primary" size="lg">
                  <Icon name="play" />
                </Button>
              </li>
              <li className="preview-btn-item">
                <OverlineTitle className="preview-title">rg</OverlineTitle>
                <Button className="btn-round btn-icon" color="primary">
                  <Icon name="play" />
                </Button>
              </li>
              <li className="preview-btn-item">
                <OverlineTitle className="preview-title">sm</OverlineTitle>
                <Button className="btn-round btn-icon" color="primary" size="sm">
                  <Icon name="play" />
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Button className="btn-round btn-icon" color="primary" size="lg">
  <Icon name="play" />
</Button>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ButtonsPage;
