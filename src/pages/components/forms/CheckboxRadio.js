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
} from "../../../components/Component";
import { Input, Row, Col } from "reactstrap";

const CheckboxRadio = () => {
  return (
    <React.Fragment>
      <Head title="Checkbox Radio" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Checkbox & Radio
            </BlockTitle>
            <BlockDes>
              <p className="lead">Examples and usage guidelines for checkboxes and radio.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Checkbox Styles</BlockTitle>
              <p>
                To create custom control, wrapped with <code className="code-tag">&lt;div&gt;</code> each checkbox{" "}
                <code className="code-tag">&lt;input&gt;</code> &amp; <code className="code-tag">&lt;label&gt;</code>{" "}
                using <code>.custom-control</code>, <code>.custom-checkbox</code> classes.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6" md="3">
                <div className="preview-block">
                  <span className="preview-title overline-title">Default</span>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input form-control" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col sm="6" md="3">
                <span className="preview-title overline-title">Checked</span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input form-control"
                    defaultChecked
                    id="customCheck2"
                  />
                  <label className="custom-control-label" htmlFor="customCheck2">
                    Option Label
                  </label>
                </div>
              </Col>
              <Col sm="6" md="3">
                <div className="preview-block">
                  <span className="preview-title overline-title">Disabled</span>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input form-control" disabled id="customCheck3" />
                    <label className="custom-control-label" htmlFor="customCheck3">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col sm="6" md="3">
                <div className="preview-block">
                  <span className="preview-title overline-title">Check Disabled</span>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      defaultChecked
                      disabled
                      id="customCheck4"
                    />
                    <label className="custom-control-label" htmlFor="customCheck4">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <div className="preview-block">
                  <span className="preview-title overline-title">Size</span>
                  <div className="g-3 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck7" />
                        <label className="custom-control-label" htmlFor="customCheck7">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck6" />
                        <label className="custom-control-label" htmlFor="customCheck6">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-control-lg custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck5" />
                        <label className="custom-control-label" htmlFor="customCheck5">
                          Option Label
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <p className="text-soft">
                  For large or small size of <code>.custom-checkbox</code>, use <code>.custom-control-{`lg|sm`}</code>{" "}
                  with <code>.custom-control</code> className.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`<input type="checkbox" className="custom-control-input custom-control-lg"/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Radio Style</BlockTitle>
              <p>
                To create custom control, wrapped with <code className="code-tag">&lt;div&gt;</code> each radio{" "}
                <code className="code-tag">&lt;input&gt;</code> &amp; <code className="code-tag">&lt;label&gt;</code>{" "}
                using <code>.custom-control</code>, <code>.custom-radio</code> classNames.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Default</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio1">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Checked</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio2"
                      name="customRadio"
                      defaultChecked
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio2">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Disabled</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio3"
                      name="customRadio"
                      disabled
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio3">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Check Disabled</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio4"
                      name="customRadio1"
                      defaultChecked
                      disabled
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio4">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <div className="preview-block">
                  <span className="preview-title overline-title">Size</span>
                  <div className="g-4 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input form-control"
                          name="radioSize"
                          id="customRadio7"
                        />
                        <label className="custom-control-label" htmlFor="customRadio7">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input form-control"
                          name="radioSize"
                          id="customRadio6"
                        />
                        <label className="custom-control-label" htmlFor="customRadio6">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-control-lg custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input form-control"
                          name="radioSize"
                          id="customRadio5"
                        />
                        <label className="custom-control-label" htmlFor="customRadio5">
                          Option Label
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <p className="text-soft">
                  For large or small size of <code>.custom-radio</code>, use <code>.custom-control-{`lg|sm`}</code> with{" "}
                  <code>.custom-control</code> className.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`<input type="radio" className="custom-control custom-radio custom-control-lg"/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Switch Style</BlockTitle>
              <p>
                The switch markup of a <code>.custom-control</code> <code className="code-fnc">checkbox</code> but uses
                the <code>.custom-switch</code> className to render a toggle switch.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Default</span>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input form-control" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Checked</span>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      defaultChecked
                      id="customSwitch2"
                    />
                    <label className="custom-control-label" htmlFor="customSwitch2">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Disabled</span>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input form-control" disabled id="customSwitch3" />
                    <label className="custom-control-label" htmlFor="customSwitch3">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Check Disabled</span>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      defaultChecked
                      disabled
                      id="customSwitch4"
                    />
                    <label className="custom-control-label" htmlFor="customSwitch4">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <div className="preview-block">
                  <span className="preview-title overline-title">Size</span>
                  <div className="g-3 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch7" />
                        <label className="custom-control-label" htmlFor="customSwitch7">
                          Switch Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-switch">
                        <Input type="checkbox" className="custom-control-input form-control" id="customSwitch6" />
                        <label className="custom-control-label" htmlFor="customSwitch6">
                          Switch Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-control-lg custom-switch">
                        <input type="checkbox" className="custom-control-input form-control" id="customSwitch5" />
                        <label className="custom-control-label" htmlFor="customSwitch5">
                          Switch Label
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <p className="text-soft">
                  For large or small size of <code>.custom-switch</code>, use <code>.custom-control-{`lg|sm`}</code>{" "}
                  with <code>.custom-control</code> className.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`<div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input form-control" defaultChecked id="customSwitch2"/>
  <label className="custom-control-label" htmlFor="customSwitch2"> Switch </label>
</div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CheckboxRadio;
