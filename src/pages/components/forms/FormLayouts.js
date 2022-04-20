import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Row, Col, FormGroup } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  Button,
} from "../../../components/Component";

const FormLayoutsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Form Layouts" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Form Layouts
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Form is most esential part of your project. We styled out nicely so you can build your form so quickly.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Form Style S-1</BlockTitle>
              <p>Below example helps you to build your own form nice way.</p>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col lg="6">
              <PreviewCard className="h-100">
                <div className="card-head">
                  <h5 className="card-title">Customer Info</h5>
                </div>
                <form>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="full-name">
                      Full Name
                    </label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="text" id="full-name" />
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="email-address">
                      Email address
                    </label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="text" id="email-address" />
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="phone-no">
                      Phone No
                    </label>
                    <div className="form-control-wrap">
                      <input className="form-control" type="number" id="phone-no" />
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label">Communication</label>
                    <ul className="custom-control-group g-3 align-center">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="com-email" />
                          <label className="custom-control-label" htmlFor="com-email">
                            Email
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="com-sms" />
                          <label className="custom-control-label" htmlFor="com-sms">
                            SMS
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="com-phone" />
                          <label className="custom-control-label" htmlFor="com-phone">
                            Phone
                          </label>
                        </div>
                      </li>
                    </ul>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="pay-amount">
                      Amount
                    </label>
                    <div className="form-control-wrap">
                      <input type="number" id="pay-amount" className="form-control" />
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label">Payment Methods</label>
                    <ul className="custom-control-group g-3 align-center">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="pay-card" />
                          <label className="custom-control-label" htmlFor="pay-card">
                            Card
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="pay-bitcoin" />
                          <label className="custom-control-label " htmlFor="pay-bitcoin">
                            Bitcoin
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="pay-cash" />
                          <label className="custom-control-label" htmlFor="pay-cash">
                            Cash
                          </label>
                        </div>
                      </li>
                    </ul>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Button color="primary" size="lg">
                      Save Informations
                    </Button>
                  </FormGroup>
                </form>
              </PreviewCard>
            </Col>
            <Col lg="6">
              <PreviewCard className="h-100">
                <div className="card-head">
                  <h5 className="card-title">Contact Form</h5>
                </div>
                <form>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-full-name">
                      Full Name
                    </label>
                    <input type="text" id="cf-full-name" className="form-control" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-email-address">
                      Email address
                    </label>
                    <input type="text" id="cf-email-address" className="form-control" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-phone-no">
                      Phone No
                    </label>
                    <input type="number" id="cf-phone-no" className="form-control" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-subject">
                      Subject
                    </label>
                    <input type="text" id="cf-subject" className="form-control" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-default-textarea">
                      Message
                    </label>
                    <div className="form-control-wrap">
                      <textarea
                        className="form-control form-control-sm"
                        id="cf-default-textarea"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Button color="primary" size="lg">
                      Save Information
                    </Button>
                  </FormGroup>
                </form>
              </PreviewCard>
            </Col>
          </Row>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Form Style S-2</BlockTitle>
              <p>You can alow display form in column as example below.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="card-head">
              <h5 className="card-title">Customer Info S2</h5>
            </div>
            <form>
              <Row className="g-4">
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="full-name-1">
                      Full Name
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="full-name-1" className="form-control" />
                    </div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="email-address-1">
                      Email address
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="email-address-1" className="form-control" />
                    </div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="phone-no-1">
                      Phone No
                    </label>
                    <div className="form-control-wrap">
                      <input type="number" id="phone-no-1" className="form-control" />
                    </div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="pay-amount-1">
                      Amount
                    </label>
                    <div className="form-control-wrap">
                      <input type="number" id="pay-amount-1" className="form-control" />
                    </div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label">Communication</label>
                    <ul className="custom-control-group g-3 align-center">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="com-email-1" />
                          <label className="custom-control-label" htmlFor="com-email-1">
                            Email
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="com-sms-1" />
                          <label className="custom-control-label" htmlFor="com-sms-1">
                            SMS
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="com-phone-1" />
                          <label className="custom-control-label" htmlFor="com-phone-1">
                            Phone
                          </label>
                        </div>
                      </li>
                    </ul>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-label">Payment Methods</label>
                    <ul className="custom-control-group g-3 align-center">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="pay-card-1" />
                          <label className="custom-control-label" htmlFor="pay-card-1">
                            Card
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="pay-bitcoin-1" />
                          <label className="custom-control-label" htmlFor="pay-bitcoin-1">
                            Bitcoin
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input form-control" id="pay-cash-1" />
                          <label className="custom-control-label" htmlFor="pay-cash-1">
                            Cash
                          </label>
                        </div>
                      </li>
                    </ul>
                  </FormGroup>
                </Col>
                <Col xl="12">
                  <Button color="primary" size="lg">
                    Save Information
                  </Button>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Setting Form Style</BlockTitle>
              <p>You can make style out your setting related form as per below example.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="card-head">
              <h5 className="card-title">Website Setting</h5>
            </div>
            <form className="gy-3">
              <Row className="g-3 align-center">
                <Col lg="5">
                  <FormGroup>
                    <label className="form-label" htmlFor="site-name">
                      Site Name
                    </label>
                    <span className="form-note">Specify the name of your website.</span>
                  </FormGroup>
                </Col>
                <Col lg="7">
                  <FormGroup>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="site-name"
                        className="form-control"
                        defaultValue="DashLite Admin Template"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="g-3 align-center">
                <Col lg="5">
                  <FormGroup>
                    <label className="form-label">Site Email</label>
                    <span className="form-note">Specify the email address of your website.</span>
                  </FormGroup>
                </Col>
                <Col lg="7">
                  <FormGroup>
                    <div className="form-control-wrap">
                      <input type="text" id="site-email" className="form-control" defaultValue="info@softnio.com" />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="g-3 align-center">
                <Col lg="5">
                  <FormGroup>
                    <label className="form-label">Site Copyright</label>
                    <span className="form-note">Copyright information of your website.</span>
                  </FormGroup>
                </Col>
                <Col lg="7">
                  <FormGroup>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="site-copyright"
                        className="form-control"
                        defaultValue="&copy; 2019, DashLite. All Rights Reserved."
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="g-3 align-center">
                <Col lg="5">
                  <FormGroup>
                    <label className="form-label">Allow Registration</label>
                    <span className="form-note">Enable or disable registration from site.</span>
                  </FormGroup>
                </Col>
                <Col lg="7">
                  <FormGroup>
                    <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="reg-public"
                            id="reg-enable"
                          />
                          <label className="custom-control-label" htmlFor="reg-enable">
                            Enable
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="reg-public"
                            id="reg-disable"
                          />
                          <label className="custom-control-label" htmlFor="reg-disable">
                            Disable
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="reg-public"
                            id="reg-request"
                          />
                          <label className="custom-control-label" htmlFor="reg-request">
                            On Request
                          </label>
                        </div>
                      </li>
                    </ul>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="g-3 align-center">
                <Col lg="5">
                  <FormGroup>
                    <label className="form-label">Main Website</label>
                    <span className="form-note">Specify the URL if your main website is external.</span>
                  </FormGroup>
                </Col>
                <Col lg="7">
                  <FormGroup>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        name="site-url"
                        className="form-control"
                        defaultValue="https://www.softnio.com"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="g-3 align-center">
                <Col lg="5">
                  <FormGroup>
                    <label className="form-label" htmlFor="site-off">
                      Maintanance Mode
                    </label>
                    <span className="form-note">Enable to make website make offline.</span>
                  </FormGroup>
                </Col>
                <Col lg="7">
                  <FormGroup>
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input form-control"
                        name="reg-public"
                        id="site-off"
                      />
                      <label className="custom-control-label" htmlFor="site-off">
                        Offline
                      </label>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="g-3">
                <Col lg="7" className="offset-lg-5">
                  <FormGroup className="mt-2">
                    <Button color="primary" size="lg" onClick={(e) => e.preventDefault()}>
                      Update
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormLayoutsPage;
