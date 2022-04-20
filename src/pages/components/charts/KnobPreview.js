import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  Block,
  BackTo,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  Row,
  Col,
  Knob,
  CodeBlock,
} from "../../../components/Component";
import { overviewKnob } from "./ChartData";

const KnobPreview = () => {
  return (
    <React.Fragment>
      <Head title="Knobs" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Knobs
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                <a href="https://www.chartjs.org/">ChartJs</a> is a very simple and flexible JavaScript charting for
                designers & developers. Knobs are made from <code>Doughnut</code> component provided by chartjs2.
              </p>
              <p>
                Also can fine more details from <a href="https://www.chartjs.org/">here</a>.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Knob Full</BlockTitle>
              <BlockDes>
                <p>
                  Full Knobs can be made using the built in react dashlite component of <code>Knob</code>.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col md={6}>
              <PreviewCard>
                <div className="p-2">
                  <Knob data={overviewKnob} type="full" centerText="68%" />
                </div>
              </PreviewCard>
            </Col>
            <Col md={6}></Col>
          </Row>
          <div className="mt-2">
            <CodeBlock language="jsx">
              {`import Knob from "../../components/Component"
<Knob data={overviewKnob} type="full" centerText="68%" />`}
            </CodeBlock>
          </div>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Knob half</BlockTitle>
              <BlockDes>
                <p>
                  Half Knobs can be made using the built in react dashlite component of <code>Knob</code>. Just pass{" "}
                  <code>type="half"</code> to the component.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col md={6}>
              <PreviewCard>
                <div className="p-2">
                  <Knob data={overviewKnob} type="half" centerText="68%" />
                </div>
              </PreviewCard>
            </Col>
            <Col md={6}></Col>
          </Row>
          <div className="mt-2">
            <CodeBlock language="jsx">
              {`import Knob from "../../components/Component"
<Knob data={overviewKnob} type="half" centerText="68%" />`}
            </CodeBlock>
          </div>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default KnobPreview;
