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
  NSComponent,
  PreviewCard,
  CodeBlock,
  PreviewTable,
} from "../../../components/Component";
import { Row, Col } from "reactstrap";

const NumberSpinner = () => {
  return (
    <React.Fragment>
      <Head title="Number Spinner"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Number Spinner
            </BlockTitle>
            <BlockDes>
              <p className="lead">Examples and usage guidelines for number spinner with basic number type input.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Number Spinner</BlockTitle>
              <p>With number spinner component you can use min, max, step and many other props.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Number Spinner Basic</label>
                  <NSComponent defaultVal={5} color="light" outline />
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Number Spinner Step (10)</label>
                  <NSComponent defaultVal={50} color="light" outline step={10} />
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Number Spinner Min Max (15-80)</label>
                  <NSComponent defaultVal={20} color="light" outline max={80} min={15} />
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Number Spinner with Primary Button</label>
                  <NSComponent defaultVal={20} color="primary" />
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import NSComponent from "../../components/Component";

<NSComponent defaultVal={5} color="light" outline />`}
          </CodeBlock>

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
                  <code>max={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>max</code> props to specify the max limit for the input.
                </td>
              </tr>
              <tr>
                <td>
                  <code>min={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>min</code> props to specify the min limit for the input.
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
                  <code>outline={`{boolean}`}</code>
                </td>
                <td>
                  Use <code>{`{boolean}`}</code> with <code>outline</code> props to specify if outline on button is
                  needed.
                </td>
              </tr>
              <tr>
                <td>
                  <code>color={`{color}`}</code>
                </td>
                <td>
                  Use <code>{`{color}`}</code> with <code>color</code> props to specify the color of the button.
                </td>
              </tr>
              <tr>
                <td>
                  <code>defaultVal={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>defaultVal</code> props to specify any default value of the
                  input.
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default NumberSpinner;
