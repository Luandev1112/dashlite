import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  PreviewTable,
} from "../../../components/Component";
import Nouislider from "nouislider-react";
import { Row, Col } from "reactstrap";

const NouiSlider = () => {
  return (
    <React.Fragment>
      <Head title="noUiSlider" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              noUislider - React
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples and usage guidelines for range sliders with{" "}
                <a href="https://www.npmjs.com/package/nouislider-react/" target="_blank" rel="noreferrer">
                  noUislider
                </a>{" "}
                package. All the props referrence are in that page.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Configuration</BlockTitle>
              <p>
                For slider use <code>{`<Nouislider/>`}</code> component from <code>{`nouislider-react`}</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Default Range Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      connect={[true, false]}
                      start={10}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Range Connect Upper</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      connect={[false, true]}
                      start={10}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Range Slider Step (10)</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      connect={[true, false]}
                      start={10}
                      step={10}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Range Multiple Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      connect={true}
                      start={[10, 50]}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock>
            {`import NouiSlider from "nouislider-react"

     <Nouislider
        className="form-range-slider"
        accessibility
        connect={[true, false]}
        start={10}
        step={10}
        range={{
        min: 0,
        max: 100,
     }}
   />`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Vertical Slider</BlockTitle>
              <p>
                For vertical slider, just add <code>orientation</code> props to <code>"vertical"</code>
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="3" className="col-6">
                <div className="form-group">
                  <label className="form-label">Default Range Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      orientation="vertical"
                      accessibility
                      connect={[true, false]}
                      start={10}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="3" className="col-6">
                <div className="form-group">
                  <label className="form-label">Range Connect Upper</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      orientation="vertical"
                      accessibility
                      connect={[false, true]}
                      start={10}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="3" className="col-6">
                <div className="form-group">
                  <label className="form-label">Range Slider Step (10)</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      orientation="vertical"
                      accessibility
                      connect={[true, false]}
                      start={10}
                      step={10}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="3" className="col-6">
                <div className="form-group">
                  <label className="form-label">Range Multiple Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      orientation="vertical"
                      accessibility
                      connect={true}
                      start={[10, 50]}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock>
            {`import NouiSlider from "nouislider-react"

     <Nouislider
        className="form-range-slider"
        orientation="vertical"
        accessibility
        connect={[true, false]}
        start={10}
        step={10}
        range={{
        min: 0,
        max: 100,
     }}
   />`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Advanced Configuration</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Tooltip Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      tooltips={true}
                      connect={[true, false]}
                      start={[10]}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Maximum Distance Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      tooltips={true}
                      connect={true}
                      limit={40}
                      start={[10, 50]}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Minimum Distance Slider</label>
                  <div className="form-control-wrap">
                    <Nouislider
                      className="form-range-slider"
                      accessibility
                      tooltips={true}
                      connect={true}
                      margin={30}
                      start={[10, 50]}
                      range={{
                        min: 0,
                        max: 100,
                      }}
                    ></Nouislider>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Props Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>limit={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>limit</code> props to specify the minimum limit in between
                  the sliders.
                </td>
              </tr>
              <tr>
                <td>
                  <code>margin={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>margin</code> props to specify the maximum limit in between
                  the sliders.
                </td>
              </tr>
              <tr>
                <td>
                  <code>step={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>step</code> props to specify the number with which to
                  increament or decreament.
                </td>
              </tr>
              <tr>
                <td>
                  <code>tooltip={`{boolean}`}</code>
                </td>
                <td>
                  Use <code>{`{boolean}`}</code> with <code>tooltip</code> props to specify if tooltip is required.
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default NouiSlider;
