import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import StockA from "../../../images/stock/a.jpg";
import StockB from "../../../images/stock/b.jpg";
import StockC from "../../../images/stock/c.jpg";
import StockD from "../../../images/stock/d.jpg";
import StockE from "../../../images/stock/e.jpg";
import StockF from "../../../images/stock/f.jpg";
import StockG from "../../../images/stock/g.jpg";
import StockH from "../../../images/stock/h.jpg";
import AvatarA from "../../../images/avatar/a-sm.jpg";
import AvatarB from "../../../images/avatar/b-sm.jpg";
import AvatarC from "../../../images/avatar/c-sm.jpg";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  OverlineTitle,
  Icon,
  UserAvatar,
} from "../../../components/Component";
import { Row, Col, Card } from "reactstrap";

const AdvancedControls = () => {
  const [radio, setRadio] = useState("imageRadio2");

  return (
    <React.Fragment>
      <Head title="Advanced Control" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Advanced Controls
            </BlockTitle>
            <BlockDes>
              <p className="lead">Examples and usage guidelines for custom styled Checkbox and Radio.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Image Checkbox & Radio</BlockTitle>
              <p>
                To create custom control, wrapped with <code className="code-tag">&lt;div&gt;</code> each checkbox{" "}
                <code className="code-tag">&lt;input&gt;</code> &amp; <code className="code-tag">&lt;label&gt;</code>{" "}
                using <code>.custom-control</code>, <code>.custom-checkbox</code> classes.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <h6 className="title mb-3">With Checkbox</h6>
            <Row className="g-3">
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Default</OverlineTitle>
                  <div className="custom-control custom-checkbox image-control">
                    <input type="checkbox" className="custom-control-input" id="imageCheck1" />
                    <label className="custom-control-label" htmlFor="imageCheck1">
                      <img src={StockA} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Checked</OverlineTitle>
                  <div className="custom-control custom-checkbox image-control">
                    <input type="checkbox" className="custom-control-input" id="imageCheck2" defaultChecked={true} />
                    <label className="custom-control-label" htmlFor="imageCheck2">
                      <img src={StockB} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Disabled</OverlineTitle>
                  <div className="custom-control custom-checkbox image-control">
                    <input type="checkbox" className="custom-control-input" id="imageCheck3" disabled />
                    <label className="custom-control-label" htmlFor="imageCheck3">
                      <img src={StockC} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Checked Disabled</OverlineTitle>
                  <div className="custom-control custom-checkbox image-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="imageCheck4"
                      defaultChecked={true}
                      disabled
                    />
                    <label className="custom-control-label" htmlFor="imageCheck4">
                      <img src={StockD} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
            <h6 className="title mb-3 mt-4">With Radio</h6>
            <Row className="g-3">
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Default</OverlineTitle>
                  <div className="custom-control custom-radio image-control">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="imageRadio1"
                      checked={radio === "imageRadio1" ? true : false}
                      onChange={(ev) => setRadio("imageRadio1")}
                    />
                    <label className="custom-control-label" htmlFor="imageRadio1">
                      <img src={StockE} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Checked</OverlineTitle>
                  <div className="custom-control custom-radio image-control">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="imageRadio2"
                      checked={radio === "imageRadio2" ? true : false}
                      onChange={(ev) => setRadio("imageRadio2")}
                    />
                    <label className="custom-control-label" htmlFor="imageRadio2">
                      <img src={StockF} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Disabled</OverlineTitle>
                  <div className="custom-control custom-radio image-control">
                    <input type="radio" className="custom-control-input" id="imageRadio3" disabled />
                    <label className="custom-control-label" htmlFor="imageRadio3">
                      <img src={StockG} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" className="col-6">
                <div className="preview-block">
                  <OverlineTitle className="preview-title">Checked Disabled</OverlineTitle>
                  <div className="custom-control custom-radio image-control">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="imageRadio4"
                      defaultChecked={true}
                      disabled
                    />
                    <label className="custom-control-label" htmlFor="imageCheck4">
                      <img src={StockH} alt="" />
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {` <div className="custom-control custom-checkbox image-control">
    <input type="checkbox" className="custom-control-input" id="imageCheck1" />
    <label className="custom-control-label" htmlFor="imageCheck1">
        <img src={StockA} alt="" />
    </label>
</div>`}
          </CodeBlock>
          <CodeBlock language="jsx">
            {`  <div className="custom-control custom-radio image-control">
    <input type="radio" className="custom-control-input" id="imageRadio3" disabled />
    <label className="custom-control-label" htmlFor="imageRadio3">
        <img src={StockC} alt="" />
    </label>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Grouped Checkbox</BlockTitle>
              <BlockDes>
                <p>
                  For Grouped checkbox, use <code>custom-control-pro</code> class with <code>custom-control</code> also
                  if you want to hide control then use <code>no-control</code> class with it. <br /> For group use{" "}
                  <code>ul.custom-control-group &gt; li &gt; .custom-control</code> if you want vertical them use{" "}
                  <code>.custom-control-vertical</code> on <code>ul</code>.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <h6 className="title mb-3">Default Mode</h6>
            <ul className="custom-control-group">
              <li>
                <div className="custom-control custom-control-sm custom-checkbox custom-control-pro checked">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="btnCheckControl"
                    id="btnCheckControl1"
                  />
                  <label className="custom-control-label" htmlFor="btnCheckControl1">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox custom-control-pro checked">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="btnCheckControl"
                    id="btnCheckControl2"
                  />
                  <label className="custom-control-label" htmlFor="btnCheckControl2">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox custom-control-pro checked">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="btnCheckControl"
                    id="btnCheckControl3"
                  />
                  <label className="custom-control-label" htmlFor="btnCheckControl3">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox custom-control-pro">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="btnCheckControl"
                    id="btnCheckControl5"
                    defaultChecked={true}
                  />
                  <label className="custom-control-label" htmlFor="btnCheckControl5">
                    Option Checked
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox custom-control-pro">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="btnCheckControl"
                    id="btnCheckControl6"
                    disabled
                  />
                  <label className="custom-control-label" htmlFor="btnCheckControl6">
                    Option Disabled
                  </label>
                </div>
              </li>
            </ul>
            <h6 className="title mb-3 mt-4">NoControl Mode</h6>
            <ul className="custom-control-group">
              <li>
                <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                  <input type="checkbox" className="custom-control-input" name="btnCheck" id="btnCheck1" />
                  <label className="custom-control-label" htmlFor="btnCheck1">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                  <input type="checkbox" className="custom-control-input" name="btnCheck" id="btnCheck2" />
                  <label className="custom-control-label" htmlFor="btnCheck2">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                  <input type="checkbox" className="custom-control-input" name="btnCheck" id="btnCheck3" />
                  <label className="custom-control-label" htmlFor="btnCheck3">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox custom-control-pro no-control">
                  <input type="checkbox" className="custom-control-input" name="btnCheck" id="btnCheck4" />
                  <label className="custom-control-label" htmlFor="btnCheck4">
                    Option Label
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox custom-control-pro no-control">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="btnCheck"
                    id="btnCheck5"
                    defaultChecked={true}
                  />
                  <label className="custom-control-label" htmlFor="btnCheck5" defaultChecked={true}>
                    Option Checked
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox custom-control-pro no-control">
                  <input type="checkbox" className="custom-control-input" name="btnCheck" id="btnCheck6" disabled />
                  <label className="custom-control-label" htmlFor="btnCheck6">
                    Option Disabled
                  </label>
                </div>
              </li>
            </ul>
            <div className="row pt-4 g-gs">
              <div className="col-lg-7">
                <h6 className="title mb-3">With Icon</h6>
                <ul className="custom-control-group">
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnIconCheckNc1" />
                      <label className="custom-control-label" htmlFor="btnIconCheckNc1">
                        <Icon name="user"></Icon>
                        <span>User</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnIconCheckNc2" />
                      <label className="custom-control-label" htmlFor="btnIconCheckNc2">
                        <Icon name="loader"></Icon>
                        <span>Loading</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnIconCheckNc3" />
                      <label className="custom-control-label" htmlFor="btnIconCheckNc3">
                        <Icon name="signal"></Icon>
                        <span>Network</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnIconCheckNc4" />
                      <label className="custom-control-label" htmlFor="btnIconCheckNc4">
                        <Icon name="wifi-off"></Icon>
                        <span>No Wifi</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <h6 className="title mb-3">Only Icon</h6>
                <ul className="custom-control-group">
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck1" />
                      <label className="custom-control-label" htmlFor="btnOnlyIconCheck1">
                        <Icon name="user"></Icon>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck2" />
                      <label className="custom-control-label" htmlFor="btnOnlyIconCheck2">
                        <Icon name="loader"></Icon>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control checked">
                      <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck3" />
                      <label className="custom-control-label" htmlFor="btnOnlyIconCheck3">
                        <Icon name="signal"></Icon>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control">
                      <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck4" />
                      <label className="custom-control-label" htmlFor="btnOnlyIconCheck4">
                        <Icon name="wifi-off"></Icon>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<ul className="custom-control-group">
    <li>
        <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control checked">
            <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck1" />
            <label className="custom-control-label" htmlFor="btnOnlyIconCheck1">
            <Icon name="user"></Icon>
            </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control checked">
            <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck2" />
            <label className="custom-control-label" htmlFor="btnOnlyIconCheck2">
            <Icon name="loader"></Icon>
            </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control checked">
            <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck3" />
            <label className="custom-control-label" htmlFor="btnOnlyIconCheck3">
            <Icon name="signal"></Icon>
            </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-checkbox custom-control-pro custom-control-pro-icon no-control">
            <input type="checkbox" className="custom-control-input" id="btnOnlyIconCheck4" />
            <label className="custom-control-label" htmlFor="btnOnlyIconCheck4">
            <Icon name="wifi-off"></Icon>
            </label>
        </div>
    </li>
</ul> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Grouped Radio</BlockTitle>
              <BlockDes>
                <p>
                  For Grouped radio, use <code>custom-control-pro</code> class with <code>custom-control</code> also if
                  you want to hide control then use <code>no-control</code> class with it. <br /> For group use{" "}
                  <code>ul.custom-control-group &gt; li &gt; .custom-control</code> if you want vertical them use{" "}
                  <code>.custom-control-vertical</code> on <code>ul</code>.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Card className="card-preview">
            <div className="card-inner">
              <h6 className="title mb-3">Default Mode</h6>
              <ul className="custom-control-group">
                <li>
                  <div className="custom-control custom-control-sm custom-radio custom-control-pro checked">
                    <input type="radio" className="custom-control-input" name="btnRadioControl" id="btnRadioControl1" />
                    <label className="custom-control-label" htmlFor="btnRadioControl1">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-control-sm custom-radio custom-control-pro checked">
                    <input type="radio" className="custom-control-input" name="btnRadioControl" id="btnRadioControl2" />
                    <label className="custom-control-label" htmlFor="btnRadioControl2">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-control-sm custom-radio custom-control-pro checked">
                    <input type="radio" className="custom-control-input" name="btnRadioControl" id="btnRadioControl3" />
                    <label className="custom-control-label" htmlFor="btnRadioControl3">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="btnRadioControl"
                      id="btnRadioControl5"
                      defaultChecked={true}
                    />
                    <label className="custom-control-label" htmlFor="btnRadioControl5">
                      Option Checked
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="btnRadioControl"
                      id="btnRadioControl6"
                      disabled
                    />
                    <label className="custom-control-label" htmlFor="btnCheckControl6">
                      Option Disabled
                    </label>
                  </div>
                </li>
              </ul>
              <h6 className="title mb-3 mt-4">NoControl Mode</h6>
              <ul className="custom-control-group">
                <li>
                  <div className="custom-control custom-radio custom-control-pro no-control checked">
                    <input type="radio" className="custom-control-input" name="btnRadio" id="btnRadio1" />
                    <label className="custom-control-label" htmlFor="btnRadio1">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-radio custom-control-pro no-control checked">
                    <input type="radio" className="custom-control-input" name="btnRadio" id="btnRadio2" />
                    <label className="custom-control-label" htmlFor="btnRadio2">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-radio custom-control-pro no-control checked">
                    <input type="radio" className="custom-control-input" name="btnRadio" id="btnRadio3" />
                    <label className="custom-control-label" htmlFor="btnRadio3">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-radio custom-control-pro no-control">
                    <input type="radio" className="custom-control-input" name="btnRadio" id="btnRadio4" />
                    <label className="custom-control-label" htmlFor="btnRadio4">
                      Option Label
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-radio custom-control-pro no-control">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="btnRadio"
                      id="btnRadio5"
                      defaultChecked={true}
                    />
                    <label className="custom-control-label" htmlFor="btnRadio5">
                      Option Checked
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-radio custom-control-pro no-control">
                    <input type="radio" className="custom-control-input" name="btnRadio" id="btnRadio6" disabled />
                    <label className="custom-control-label" htmlFor="btnRadio6">
                      Option Disabled
                    </label>
                  </div>
                </li>
              </ul>
              <div className="row pt-4 g-gs">
                <div className="col-lg-7">
                  <h6 className="title mb-3">With Icon</h6>
                  <ul className="custom-control-group">
                    <li>
                      <div className="custom-control custom-radio custom-control-pro no-control checked">
                        <input type="radio" className="custom-control-input" id="btnIconRadioNc1" />
                        <label className="custom-control-label" htmlFor="btnIconRadioNc1">
                          <Icon name="user"></Icon>
                          <span>User</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio custom-control-pro no-control checked">
                        <input type="radio" className="custom-control-input" id="btnIconRadioNc2" />
                        <label className="custom-control-label" htmlFor="btnIconRadioNc2">
                          <Icon name="loader"></Icon>
                          <span>Loading</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio custom-control-pro no-control checked">
                        <input type="radio" className="custom-control-input" id="btnIconRadioNc3" />
                        <label className="custom-control-label" htmlFor="btnIconRadioNc3">
                          <Icon name="signal"></Icon>
                          <span>Network</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio custom-control-pro no-control checked">
                        <input type="radio" className="custom-control-input" id="btnIconRadioNc4" />
                        <label className="custom-control-label" htmlFor="btnIconRadioNc4">
                          <Icon name="wifi-off"></Icon>
                          <span>No Wifi</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h6 className="title mb-3">Only Icon</h6>
                  <ul className="custom-control-group">
                    <li>
                      <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control checked">
                        <input type="radio" className="custom-control-input" id="btnOnlyIconRadio1" />
                        <label className="custom-control-label" htmlFor="btnOnlyIconRadio1">
                          <Icon name="user"></Icon>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control checked">
                        <input type="radio" className="custom-control-input" id="btnOnlyIconRadio2" />
                        <label className="custom-control-label" htmlFor="btnOnlyIconRadio2">
                          <Icon name="loader"></Icon>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="btnOnlyIconRadio3"
                          defaultChecked={true}
                        />
                        <label className="custom-control-label" htmlFor="btnOnlyIconRadio3">
                          <Icon name="signal"></Icon>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control checked">
                        <input type="radio" className="custom-control-input" id="btnOnlyIconRadio4" />
                        <label className="custom-control-label" htmlFor="btnOnlyIconRadio4">
                          <Icon name="wifi-off"></Icon>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-inner border-top">
              <ul className="custom-control-group g-1">
                <li>
                  <div className="custom-control color-control">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="productColor1"
                      name="productColor"
                      defaultChecked={true}
                    />
                    <label
                      className="custom-control-label dot dot-xl"
                      htmlFor="productColor1"
                      style={{ background: "rgb(117, 76, 36)" }}
                    ></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor2" name="productColor" />
                    <label
                      className="custom-control-label dot dot-xl"
                      htmlFor="productColor2"
                      style={{ background: "rgb(99, 99, 99)" }}
                    ></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control checked">
                    <input type="radio" className="custom-control-input" id="productColor3" name="productColor" />
                    <label
                      className="custom-control-label dot dot-xl"
                      htmlFor="productColor3"
                      style={{ background: "rgb(186, 110, 212)" }}
                    ></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor4" name="productColor" />
                    <label
                      className="custom-control-label dot dot-xl"
                      htmlFor="productColor4"
                      style={{ background: "rgb(255, 135, 163)" }}
                    ></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor5" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-danger" htmlFor="productColor5"></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor6" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-indigo" htmlFor="productColor6"></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor7" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-info" htmlFor="productColor7"></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor8" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-warning" htmlFor="productColor8"></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor9" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-teal" htmlFor="productColor9"></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor10" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-purple" htmlFor="productColor10"></label>
                  </div>
                </li>
                <li>
                  <div className="custom-control color-control">
                    <input type="radio" className="custom-control-input" id="productColor11" name="productColor" />
                    <label className="custom-control-label dot dot-xl bg-pink" htmlFor="productColor11"></label>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          <CodeBlock language="jsx">
            {`<ul className="custom-control-group">
    <li>
        <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control checked">
            <input type="radio" className="custom-control-input" id="btnOnlyIconRadio1" />
            <label className="custom-control-label" htmlFor="btnOnlyIconRadio1">
            <Icon name="user"></Icon>
            </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control checked">
            <input type="radio" className="custom-control-input" id="btnOnlyIconRadio2" />
            <label className="custom-control-label" htmlFor="btnOnlyIconRadio2">
            <Icon name="loader"></Icon>
            </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control checked">
            <input type="radio" className="custom-control-input" id="btnOnlyIconRadio3" />
            <label className="custom-control-label" htmlFor="btnOnlyIconRadio3">
            <Icon name="signal"></Icon>
            </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-radio custom-control-pro custom-control-pro-icon no-control">
            <input type="radio" className="custom-control-input" id="btnOnlyIconRadio4" />
            <label className="custom-control-label" htmlFor="btnOnlyIconRadio4">
            <Icon name="wifi-off"></Icon>
            </label>
        </div>
    </li>
</ul> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Custom Content</BlockTitle>
              <BlockDes>
                <p>
                  You can create checkbox or radio with any styled element, just like displayed below. just add{" "}
                  <code>.custom-control-pro</code> class with <code>.custom-control</code> then put that styled element
                  in <code className="code-tag">&lt;label&gt;</code> tag. An example with user card shown for display
                  purpose. <br />{" "}
                  <small className="text-muted">
                    Note : you should not use any block-level elements inside <span className="code-tag">label</span>{" "}
                    tag.
                  </small>
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6" lg="4">
                <OverlineTitle className="preview-title">User Selection</OverlineTitle>
                <ul className="custom-control-group custom-control-vertical w-100">
                  <li>
                    <div className="custom-control custom-control-sm custom-checkbox custom-control-pro">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="user-selection-s1"
                        name="user-selection"
                      />
                      <label className="custom-control-label" htmlFor="user-selection-s1">
                        <span className="user-card">
                          <UserAvatar image={AvatarA} className="sq"></UserAvatar>
                          <span className="user-info">
                            <span className="lead-text">Keith Jensen</span>
                            <span className="sub-text">Senior Developer</span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-checkbox custom-control-pro">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="user-selection-s2"
                        name="user-selection"
                      />
                      <label className="custom-control-label" htmlFor="user-selection-s2">
                        <span className="user-card">
                          <UserAvatar theme="pink" text="AB" className="sm"></UserAvatar>
                          <span className="user-info">
                            <span className="lead-text">Abu Bin Ishtiyak</span>
                            <span className="sub-text">Senior Developer</span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-checkbox custom-control-pro">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="user-selection-s4"
                        name="user-selection"
                      />
                      <label className="custom-control-label" htmlFor="user-selection-s4">
                        <span className="user-card">
                          <UserAvatar image={AvatarB} className="sm"></UserAvatar>
                          <span className="user-info">
                            <span className="lead-text">Daisy Morgan</span>
                            <span className="sub-text">UI/UX Designer</span>
                          </span>
                        </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md="6" lg="4">
                <OverlineTitle className="preview-title">User Choose</OverlineTitle>
                <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" id="user-choose-s1" name="user-choose" />
                      <label className="custom-control-label" htmlFor="user-choose-s1">
                        <span className="user-card">
                          <UserAvatar image={AvatarA} className="sm"></UserAvatar>
                          <span className="user-name">Keith Jensen</span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" id="user-choose-s2" name="user-choose" />
                      <label className="custom-control-label" htmlFor="user-choose-s2">
                        <span className="user-card">
                          <UserAvatar theme="pink" text="AB" className="sm"></UserAvatar>
                          <span className="user-name">Abu Bin Ishtiyak</span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" id="user-choose-s3" name="user-choose" />
                      <label className="custom-control-label" htmlFor="user-choose-s3">
                        <span className="user-card">
                          <UserAvatar image={AvatarB} className="sm"></UserAvatar>
                          <span className="user-name">Daisy Morgan</span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" id="user-choose-s4" name="user-choose" />
                      <label className="custom-control-label" htmlFor="user-choose-s4">
                        <span className="user-card">
                          <UserAvatar image={AvatarC} className="sm"></UserAvatar>
                          <span className="user-name">Kyle Henderson</span>
                        </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md="6" lg="4">
                <OverlineTitle className="preview-title">Payment Method</OverlineTitle>
                <ul className="custom-control-group custom-control-vertical w-100">
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck1" />
                      <label className="custom-control-label" htmlFor="paymentCheck1">
                        <Icon className="icon-lg" name="cc-paypal"></Icon>
                        <span>Paypal</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck2" />
                      <label className="custom-control-label" htmlFor="paymentCheck2">
                        <Icon className="icon-lg" name="cc-mc"></Icon>
                        <span>Master Card</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck3" />
                      <label className="custom-control-label" htmlFor="paymentCheck3">
                        <Icon className="icon-lg" name="cc-visa"></Icon>
                        <span>Visa Card</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                      <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck4" />
                      <label className="custom-control-label" htmlFor="paymentCheck4">
                        <Icon className="icon-lg" name="cc-stripe"></Icon>
                        <span>Stripe</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<ul className="custom-control-group custom-control-vertical w-100">
    <li>
        <div className="custom-control custom-control-sm custom-radio custom-control-pro">
        <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck1" />
        <label className="custom-control-label" htmlFor="paymentCheck1">
            <Icon className="icon-lg" name="cc-paypal"></Icon>
            <span>Paypal</span>
        </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-control-sm custom-radio custom-control-pro">
        <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck2" />
        <label className="custom-control-label" htmlFor="paymentCheck2">
            <Icon className="icon-lg" name="cc-mc"></Icon>
            <span>Master Card</span>
        </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-control-sm custom-radio custom-control-pro">
        <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck3" />
        <label className="custom-control-label" htmlFor="paymentCheck3">
            <Icon className="icon-lg" name="cc-visa"></Icon>
            <span>Visa Card</span>
        </label>
        </div>
    </li>
    <li>
        <div className="custom-control custom-control-sm custom-radio custom-control-pro">
        <input type="radio" className="custom-control-input" name="paymentCheck" id="paymentCheck4" />
        <label className="custom-control-label" htmlFor="paymentCheck4">
            <Icon className="icon-lg" name="cc-stripe"></Icon>
            <span>Stripe</span>
        </label>
        </div>
    </li>
</ul>
            `}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default AdvancedControls;
