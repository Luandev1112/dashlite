import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  Row,
  Col,
  BlockHeadContent,
  BackTo,
  BlockTitle,
  BlockDes,
  Icon,
} from "../../components/Component";
import { Link } from "react-router-dom";

const ComponentsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Componets" />
      <Content page="component">
        <BlockHead size="lg" className="wide-sm">
          <BlockHeadContent>
            <BackTo link="/" icon="arrow-left">
              Dashboard
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Components
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                <strong>DashLite</strong> includes all the necessary components and elements with utility classes that
                helps you to create your web apps or application faster.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>
        <Block size="lg">
          <Row className="g-gs">
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/alerts`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Alerts</h6>
                      <p>A Handful and flexible alert messages examples.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/accordions`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Accordian</h6>
                      <p>Create your accordion style properly as example.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/badges`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Badges</h6>
                      <p>Examples for badges, use as small count &amp; labeling.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/buttons`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Buttons</h6>
                      <p>Button styles for actions in forms, dialogs, and more.</p>{" "}
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/button-group`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Button Group</h6>
                      <p>With the button group make a series of buttons together.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/cards`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Cards</h6>
                      <p>Cards provides flexible &amp; extensible content with variants.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/dropdowns`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Dropdowns</h6>
                      <p>Examples of types of dropdowns and styles</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>

            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/modals`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Modals</h6>
                      <p>Examples of modal or lightbox style for any content.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/pagination`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Pagination</h6>
                      <p>Examples of pagination to indicate a multiple pages.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/spinner`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Spinner</h6>
                      <p>Example of loading state of a component or pages.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/tabs`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Tabs</h6>
                      <p>Example of tabbed interface navigation components.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/toast`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Toast</h6>
                      <p>Examples of push notifications using bootstrap toast.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/table-basic`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Basic Tables</h6>
                      <p>Examples for opt-in styling of tables with variants.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/table-special`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Special Table</h6>
                      <p>Example of well optimized and custom design table.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/form-elements`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Form Element</h6>
                      <p>Basic example of form control with size variants.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/components/form-layouts`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Form Layout</h6>
                      <p>Example of layout for creating variety of forms.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link
                to={`${process.env.PUBLIC_URL}/components/form-validation`}
                className="card card-bordered text-soft"
              >
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Form Validation</h6>
                      <p>Example of form validation using validate plugin.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={6}>
              <Link to={`${process.env.PUBLIC_URL}/charts/chartjs`} className="card card-bordered text-soft">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Chart Js</h6>
                      <p>Visualize &amp; present your data using ChartJs plugin.</p>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </Col>
            <Col lg={12}>
              <div className="card card-bordered">
                <div className="card-inner">
                  <div className="align-center justify-between">
                    <div className="g">
                      <h6 className="title">Utilities</h6>
                      <ul className="gx-3 gy-1 align-center flex-wrap">
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-border`}>
                            Border
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-colors`}>
                            Colors
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-display`}>
                            Display
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-embeded`}>
                            Embeded
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-flex`}>
                            Flex
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-text`}>
                            Text
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-sizing`}>
                            Sizing
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-spacing`}>
                            Spacing
                          </Link>
                        </li>
                        <li>
                          <Link tag="a" to={`${process.env.PUBLIC_URL}/components/util-others`}>
                            Others
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="g">
                      <span className="btn btn-icon btn-trigger mr-n1">
                        <Icon name="chevron-right"></Icon>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ComponentsPage;
