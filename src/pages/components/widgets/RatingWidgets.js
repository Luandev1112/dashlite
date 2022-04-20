import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { Link } from "react-router-dom";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BackTo,
  PreviewCard,
  Icon,
  BlockDes,
  PreviewAltCard,
  UserAvatar,
  CodeBlock,
  Rating,
} from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { Row, Col, Progress, Card, Collapse, Button } from "reactstrap";

const RatingWidgets = () => {
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(true);
  const [collapse3, setCollapse3] = useState(false);

  return (
    <React.Fragment>
      <Head title="Card Widgets"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Card Style for Ratings
            </BlockTitle>
            <BlockDes>
              <p>Use ratings card with variant for an invaluable source of feedback.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Rating Card</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col md="5">
                <PreviewAltCard className="h-100">
                  <div className="team">
                    <div className="user-card user-card-s2">
                      <UserAvatar theme="purple" className="md" text={findUpper("Abu Bin")}>
                        <div className="status dot dot-lg dot-success"></div>
                      </UserAvatar>
                      <div className="user-info">
                        <h6>Abu Bin Ishtiak</h6>
                        <span className="sub-text">@ishtyak</span>
                      </div>
                      <ul className="rating mt-1">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                    </div>
                    <div className="team-details">
                      <p>I am UI/UX Designer and love to be creative.</p>
                    </div>
                    <ul className="team-statistics">
                      <li>
                        <span>213</span>
                        <span>Projects</span>
                      </li>
                      <li>
                        <span>87.5%</span>
                        <span>Performed</span>
                      </li>
                      <li>
                        <span>587</span>
                        <span>Tasks</span>
                      </li>
                    </ul>
                    <div className="team-view">
                      <Link
                        to={`${process.env.PUBLIC_URL}/user-details-regular/1`}
                        className="btn btn-round btn-outline-light"
                      >
                        <span>View Profile</span>
                      </Link>
                    </div>
                  </div>
                </PreviewAltCard>
              </Col>
              <Col md="5">
                <PreviewAltCard className="h-100">
                  <div className="rating-card d-flex align-center flex-column">
                    <div className="user-info mb-2">
                      <h6>Design Quality</h6>
                    </div>
                    <UserAvatar theme="teal" className="md m-2" text="4.5">
                      <div className="status dot dot-lg dot-success"></div>
                    </UserAvatar>
                    <ul className="rating mt-1">
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-half-fill"></Icon>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center mt-1">
                    <p>108 Ratings</p>
                  </div>
                  <div className="gy-3 pt-4">
                    <div className="progress-rating">
                      <div className="progress-rating-title">5 star</div>
                      <Progress value={72} color="teal" className="progress-md"></Progress>
                      <div className="progress-rating-percent">72%</div>
                    </div>
                    <div className="progress-rating">
                      <div className="progress-rating-title">4 star</div>
                      <Progress value={58} color="success" className="progress-md"></Progress>
                      <div className="progress-rating-percent">58%</div>
                    </div>
                    <div className="progress-rating">
                      <div className="progress-rating-title">3 star</div>
                      <Progress value={34} color="info" className="progress-md"></Progress>
                      <div className="progress-rating-percent">34%</div>
                    </div>
                    <div className="progress-rating">
                      <div className="progress-rating-title">2 star</div>
                      <Progress value={18} color="warning" className="progress-md"></Progress>
                      <div className="progress-rating-percent">18%</div>
                    </div>
                    <div className="progress-rating">
                      <div className="progress-rating-title">1 star</div>
                      <Progress value={55} color="danger" className="progress-md"></Progress>
                      <div className="progress-rating-percent">55%</div>
                    </div>
                  </div>
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<PreviewAltCard className="h-100">
  <div className="rating-card d-flex align-center flex-column">
    <div className="user-info mb-2">
      <h6>Design Quality</h6>
    </div>
    <UserAvatar theme="teal" className="md m-2" text="4.5">
      <div className="status dot dot-lg dot-success"></div>
    </UserAvatar>
    <ul className="rating mt-1">
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-half-fill"></Icon>
      </li>
    </ul>
  </div>
  <div className="text-center mt-1">
    <p>108 Ratings</p>
  </div>
  <div className="gy-3 pt-4">
    <div className="progress-rating">
      <div className="progress-rating-title">5 star</div>
      <Progress value={72} color="teal" className="progress-md"></Progress>
      <div className="progress-rating-percent">72%</div>
    </div>
    <div className="progress-rating">
      <div className="progress-rating-title">4 star</div>
      <Progress value={58} color="success" className="progress-md"></Progress>
      <div className="progress-rating-percent">58%</div>
    </div>
    <div className="progress-rating">
      <div className="progress-rating-title">3 star</div>
      <Progress value={34} color="info" className="progress-md"></Progress>
      <div className="progress-rating-percent">34%</div>
    </div>
    <div className="progress-rating">
      <div className="progress-rating-title">2 star</div>
      <Progress value={18} color="warning" className="progress-md"></Progress>
      <div className="progress-rating-percent">18%</div>
    </div>
    <div className="progress-rating">
      <div className="progress-rating-title">1 star</div>
      <Progress value={55} color="danger" className="progress-md"></Progress>
      <div className="progress-rating-percent">55%</div>
    </div>
  </div>
</PreviewAltCard>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Customer Review</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col md="6" lg="4">
                <PreviewAltCard>
                  <div className="rating-card text-center mb-1">
                    <h6 className="title">Customer Review</h6>
                    <div className="rating-wrap bg-light rating-pill my-1">
                      <ul className="rating">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                      <span className="amount">3.5 out of 5</span>
                    </div>
                    <span className="sub-text mt-1">40 customers ratings</span>
                    <div className="gy-3 pt-4">
                      <div className="progress-rating">
                        <div className="progress-rating-title">5 star</div>
                        <Progress value={72} color="primary" className="progress-md"></Progress>
                        <div className="progress-rating-percent">72%</div>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating-title">4 star</div>
                        <Progress value={58} color="primary" className="progress-md"></Progress>
                        <div className="progress-rating-percent">58%</div>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating-title">3 star</div>
                        <Progress value={34} color="primary" className="progress-md"></Progress>
                        <div className="progress-rating-percent">34%</div>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating-title">2 star</div>
                        <Progress value={18} color="primary" className="progress-md"></Progress>
                        <div className="progress-rating-percent">18%</div>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating-title">1 star</div>
                        <Progress value={55} color="primary" className="progress-md"></Progress>
                        <div className="progress-rating-percent">55%</div>
                      </div>
                    </div>
                  </div>
                </PreviewAltCard>
              </Col>
              <Col md="6">
                <PreviewAltCard>
                  <div className="d-flex align-center gy-3">
                    <div className="progress-amount mr-4">
                      <h1 className="title">4.4</h1>
                      <ul className="rating">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                      <span className="sub-text mt-1">
                        <Icon name="users-fill"></Icon> 47,860 Total
                      </span>
                    </div>
                    <div className="rating-progress-bar gy-1 w-100">
                      <div className="progress-rating">
                        <div className="progress-rating mr-2">5</div>
                        <Progress value={72} color="teal" className="progress-lg"></Progress>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating mr-2">4</div>
                        <Progress value={58} color="success" className="progress-lg"></Progress>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating mr-2">3</div>
                        <Progress value={34} color="info" className="progress-lg"></Progress>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating mr-2">2</div>
                        <Progress value={18} color="warning" className="progress-lg"></Progress>
                      </div>
                      <div className="progress-rating">
                        <div className="progress-rating mr-2">1</div>
                        <Progress value={55} color="danger" className="progress-lg"></Progress>
                      </div>
                    </div>
                  </div>
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<PreviewAltCard>
  <div className="d-flex align-center gy-3">
    <div className="progress-amount mr-4">
      <h1 className="title">4.4</h1>
      <ul className="rating">
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-half-fill"></Icon>
        </li>
        <li>
          <Icon name="star"></Icon>
        </li>
      </ul>
      <span className="sub-text mt-1">
        <Icon name="users-fill"></Icon> 47,860 Total
      </span>
    </div>
    <div className="rating-progress-bar gy-1 w-100">
      <div className="progress-rating">
        <div className="progress-rating mr-2">5</div>
        <Progress value={72} color="teal" className="progress-lg"></Progress>
      </div>
      <div className="progress-rating">
        <div className="progress-rating mr-2">4</div>
        <Progress value={58} color="success" className="progress-lg"></Progress>
      </div>
      <div className="progress-rating">
        <div className="progress-rating mr-2">3</div>
        <Progress value={34} color="info" className="progress-lg"></Progress>
      </div>
      <div className="progress-rating">
        <div className="progress-rating mr-2">2</div>
        <Progress value={18} color="warning" className="progress-lg"></Progress>
      </div>
      <div className="progress-rating">
        <div className="progress-rating mr-2">1</div>
        <Progress value={55} color="danger" className="progress-lg"></Progress>
      </div>
    </div>
  </div>
</PreviewAltCard>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">User Profile</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col md="6">
                <Card className="card-bordered">
                  <div className="card-inner">
                    <h4 className="card-title mb-1">UI/UX Designer at Google</h4>
                    <ul className="rating">
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-half-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star"></Icon>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-end">
                      <ul className="pt-2 gy-1">
                        <li>
                          <Icon name="map-pin"></Icon>
                          <span>60311 Frankfurt am Main, Italy</span>
                        </li>
                        <li>
                          <Icon name="calender-date"></Icon>
                          <span>28th Sept, 2021</span>
                        </li>
                        <li>
                          <Icon name="briefcase"></Icon>
                          <span>Fulltime</span>
                        </li>
                      </ul>
                      <span className="badge badge-dim badge-sm badge-pill badge-outline-info">$1550.00</span>
                    </div>
                    <Collapse isOpen={collapse}>
                      <div className="divider"></div>
                      <div className="rating-card-description">
                        <h5 className="card-title">Description</h5>
                        <p className="text-muted">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                          Some quick example text to build on the card title bulk.
                        </p>
                        <ul className="pt-2 gy-1">
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>30 days off</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Free drinks</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Paid leave</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Healthcare</span>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                  <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
                    <a
                      className="switch-text collapsed"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setCollapse(!collapse);
                      }}
                      href="#collapseDes1"
                    >
                      {collapse ? (
                        <div className="link link-gray switch-text-normal">
                          <span>Less Info</span>
                          <Icon name="upword-ios"></Icon>
                        </div>
                      ) : (
                        <div className="link link-gray switch-text-collapsed">
                          <span>More Info</span>
                          <Icon name="downward-ios"></Icon>
                        </div>
                      )}
                    </a>
                    <Button color="primary">Apply</Button>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-bordered">
                  <div className="card-inner">
                    <h4 className="card-title mb-1">Developer At Softnio</h4>
                    <ul className="rating">
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-half-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star"></Icon>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-end">
                      <ul className="pt-2 gy-1">
                        <li>
                          <Icon name="map-pin"></Icon>
                          <span>60311 Frankfurt am Main, Italy</span>
                        </li>
                        <li>
                          <Icon name="calender-date"></Icon>
                          <span>28th Sept, 2021</span>
                        </li>
                        <li>
                          <Icon name="briefcase"></Icon>
                          <span>Fulltime</span>
                        </li>
                      </ul>
                      <span className="badge badge-dim badge-sm badge-pill badge-outline-info">$1550.00</span>
                    </div>
                    <Collapse isOpen={collapse2}>
                      <div className="divider"></div>
                      <div className="rating-card-description">
                        <h5 className="card-title">Description</h5>
                        <p className="text-muted">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                          Some quick example text to build on the card title bulk.
                        </p>
                        <ul className="pt-2 gy-1">
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>30 days off</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Free drinks</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Paid leave</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Healthcare</span>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                  <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
                    <a
                      className="switch-text collapsed"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setCollapse2(!collapse2);
                      }}
                      href="#collapseDes1"
                    >
                      {collapse2 ? (
                        <div className="link link-gray switch-text-normal">
                          <span>Less Info</span>
                          <Icon name="upword-ios"></Icon>
                        </div>
                      ) : (
                        <div className="link link-gray switch-text-collapsed">
                          <span>More Info</span>
                          <Icon name="downward-ios"></Icon>
                        </div>
                      )}
                    </a>
                    <Button color="primary">Apply</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered">
  <div className="card-inner">
    <h4 className="card-title mb-1">Developer At Softnio</h4>
    <ul className="rating">
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-half-fill"></Icon>
      </li>
      <li>
        <Icon name="star"></Icon>
      </li>
    </ul>
    <div className="d-flex justify-content-between align-items-end">
      <ul className="pt-2 gy-1">
        <li>
          <Icon name="map-pin"></Icon>
          <span>60311 Frankfurt am Main, Italy</span>
        </li>
        <li>
          <Icon name="calender-date"></Icon>
          <span>28th Sept, 2021</span>
        </li>
        <li>
          <Icon name="briefcase"></Icon>
          <span>Fulltime</span>
        </li>
      </ul>
      <span className="badge badge-dim badge-sm badge-pill badge-outline-info">$1550.00</span>
    </div>
    <Collapse isOpen={collapse2}>
      <div className="divider"></div>
      <div className="rating-card-description">
        <h5 className="card-title">Description</h5>
        <p className="text-muted">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title bulk.
        </p>
        <ul className="pt-2 gy-1">
          <li>
            <Icon name="check-circle"></Icon>
            <span>30 days off</span>
          </li>
          <li>
            <Icon name="check-circle"></Icon>
            <span>Free drinks</span>
          </li>
          <li>
            <Icon name="check-circle"></Icon>
            <span>Paid leave</span>
          </li>
          <li>
            <Icon name="check-circle"></Icon>
            <span>Healthcare</span>
          </li>
        </ul>
      </div>
    </Collapse>
  </div>
  <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
    <a
      className="switch-text collapsed"
      onClick={(ev) => {
        ev.preventDefault();
        setCollapse2(!collapse2);
      }}
      href="#collapseDes1"
    >
      {collapse2 ? (
        <div className="link link-gray switch-text-normal">
          <span>Less Info</span>
          <Icon name="upword-ios"></Icon>
        </div>
      ) : (
        <div className="link link-gray switch-text-collapsed">
          <span>More Info</span>
          <Icon name="downward-ios"></Icon>
        </div>
      )}
    </a>
    <Button color="primary">Apply</Button>
  </div>
</Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Institute Profile</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <Card className="card-bordered">
                  <div className="card-inner">
                    <h4 className="card-title mb-1">Softnio</h4>
                    <div className="rating-wrap my-1">
                      <ul className="rating">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                      <span className="amount ml-2">4.4 (78)</span>
                    </div>
                    <h5 className="card-title mt-4">Criteria on Softnio</h5>
                    <div className="rating-card">
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Productivity</span>
                        <ul className="rating">
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Competitive Position</span>
                        <ul className="rating">
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star"></Icon>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Brand Value</span>
                        <ul className="rating">
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Environment</span>
                        <ul className="rating">
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star"></Icon>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Collapse isOpen={collapse3}>
                      <div className="divider"></div>
                      <div className="rating-card-description">
                        <h5 className="card-title">Description</h5>
                        <p className="text-muted">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                          Some quick example text to build on the card title bulk.
                        </p>
                        <ul className="pt-2 gy-1">
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>30 days off</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Free drinks</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Paid leave</span>
                          </li>
                          <li>
                            <Icon name="check-circle"></Icon>
                            <span>Healthcare</span>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                  <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
                    <a
                      className="switch-text collapsed"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setCollapse3(!collapse3);
                      }}
                      href="#collapseDes1"
                    >
                      {collapse3 ? (
                        <div className="link link-gray switch-text-normal">
                          <span>Less Info</span>
                          <Icon name="upword-ios"></Icon>
                        </div>
                      ) : (
                        <div className="link link-gray switch-text-collapsed">
                          <span>More Info</span>
                          <Icon name="downward-ios"></Icon>
                        </div>
                      )}
                    </a>
                    <Button color="primary">Apply</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered">
  <div className="card-inner">
    <h4 className="card-title mb-1">Softnio</h4>
    <div className="rating-wrap my-1">
      <ul className="rating">
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-half-fill"></Icon>
        </li>
        <li>
          <Icon name="star"></Icon>
        </li>
      </ul>
      <span className="amount ml-2">4.4 (78)</span>
    </div>
    <h5 className="card-title mt-4">Criteria on Softnio</h5>
    <div className="rating-card">
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Productivity</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Competitive Position</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Brand Value</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Environment</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
        </ul>
      </div>
    </div>
    <Collapse isOpen={collapse3}>
      <div className="divider"></div>
      <div className="rating-card-description">
        <h5 className="card-title">Description</h5>
        <p className="text-muted">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title bulk.
        </p>
        <ul className="pt-2 gy-1">
          <li>
            <Icon name="check-circle"></Icon>
            <span>30 days off</span>
          </li>
          <li>
            <Icon name="check-circle"></Icon>
            <span>Free drinks</span>
          </li>
          <li>
            <Icon name="check-circle"></Icon>
            <span>Paid leave</span>
          </li>
          <li>
            <Icon name="check-circle"></Icon>
            <span>Healthcare</span>
          </li>
        </ul>
      </div>
    </Collapse>
  </div>
  <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
    <a
      className="switch-text collapsed"
      onClick={(ev) => {
        ev.preventDefault();
        setCollapse3(!collapse3);
      }}
      href="#collapseDes1"
    >
      {collapse3 ? (
        <div className="link link-gray switch-text-normal">
          <span>Less Info</span>
          <Icon name="upword-ios"></Icon>
        </div>
      ) : (
        <div className="link link-gray switch-text-collapsed">
          <span>More Info</span>
          <Icon name="downward-ios"></Icon>
        </div>
      )}
    </a>
    <Button color="primary">Apply</Button>
  </div>
  </Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Review Form</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <Card className="card-bordered">
                  <div className="card-inner">
                    <h4 className="card-title mb-1">Softnio</h4>
                    <div className="rating-wrap my-1">
                      <ul className="rating">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                      <span className="amount ml-2">4.4 (78)</span>
                    </div>
                    <form action="#" className="mt-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="title">
                          Title
                        </label>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            defaultValue="You only miss it when it gone!"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="job-title">
                          Job Title
                        </label>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            className="form-control"
                            id="job-title"
                            defaultValue="Sr. Frontend Developer"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="review">
                          How was your experience?
                        </label>
                        <div className="form-control-wrap">
                          <textarea
                            className="form-control no-resize"
                            id="review"
                            defaultValue="I've been using Dashlite for months now and with every update, it's just becoming better.
                            Thank you for such a great design touch. Really love it"
                          ></textarea>
                        </div>
                      </div>
                    </form>
                    <h5 className="card-title mt-5">Criteria on Softnio</h5>
                    <div className="rating-card">
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Productivity</span>
                        <Rating type="star" initVal={5}></Rating>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Competitive Position</span>
                        <Rating type="star" initVal={4}></Rating>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Brand Value</span>
                        <Rating type="star" initVal={5}></Rating>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Environment</span>
                        <Rating type="star" initVal={3}></Rating>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-light border-top d-flex align-center justify-content-end py-3">
                    <Button color="primary">Published Review</Button>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-bordered">
                  <div className="card-inner">
                    <h4 className="card-title mb-1">Softnio</h4>
                    <div className="rating-wrap my-1">
                      <ul className="rating">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                      <span className="amount ml-2">4.4 (78)</span>
                    </div>
                    <form action="#" className="mt-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="title">
                          Title
                        </label>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control" id="title" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="job-title">
                          Job Title
                        </label>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control" id="job-title" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="review">
                          How was your experience?
                        </label>
                        <div className="form-control-wrap">
                          <textarea className="form-control no-resize" id="review"></textarea>
                        </div>
                      </div>
                    </form>
                    <h5 className="card-title mt-5">Criteria on Softnio</h5>
                    <div className="rating-card">
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Productivity</span>
                        <Rating type="star" initVal={5}></Rating>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Competitive Position</span>
                        <Rating type="star" initVal={4}></Rating>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Brand Value</span>
                        <Rating type="star" initVal={5}></Rating>
                      </div>
                      <div className="d-flex align-center justify-content-between py-1">
                        <span className="text-muted">Environment</span>
                        <Rating type="star" initVal={0}></Rating>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-light border-top d-flex align-center justify-content-end py-3">
                    <Button color="primary">Published Review</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered">
  <div className="card-inner">
    <h4 className="card-title mb-1">Softnio</h4>
    <div className="rating-wrap my-1">
      <ul className="rating">
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-fill"></Icon>
        </li>
        <li>
          <Icon name="star-half-fill"></Icon>
        </li>
        <li>
          <Icon name="star"></Icon>
        </li>
      </ul>
      <span className="amount ml-2">4.4 (78)</span>
    </div>
    <form action="#" className="mt-2">
      <div className="form-group">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <div className="form-control-wrap">
          <input type="text" className="form-control" id="title" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="job-title">
          Job Title
        </label>
        <div className="form-control-wrap">
          <input type="text" className="form-control" id="job-title" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="review">
          How was your experience?
        </label>
        <div className="form-control-wrap">
          <textarea className="form-control no-resize" id="review"></textarea>
        </div>
      </div>
    </form>
    <h5 className="card-title mt-5">Criteria on Softnio</h5>
    <div className="rating-card">
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Productivity</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Competitive Position</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Brand Value</span>
        <ul className="rating">
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
          <li>
            <Icon name="star-fill"></Icon>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center justify-content-between py-1">
        <span className="text-muted">Environment</span>
        <ul className="rating">
          <li>
            <Icon name="star"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
          <li>
            <Icon name="star"></Icon>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="card-footer bg-light border-top d-flex align-center justify-content-end py-3">
    <Button color="primary">Published Review</Button>
  </div>
</Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Customer Rating</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="9">
                <PreviewAltCard bodyClass="py-3">
                  <div className="d-sm-flex align-items-sm-center justify-content-sm-between">
                    <div className="pb-1 pb-sm-0">
                      <h5 className="title">Design Quality</h5>
                      <div className="d-flex">
                        <p className="m-0 pr-2">
                          by{" "}
                          <a href="#softnio" onClick={(ev) => ev.preventDefault()}>
                            softnio
                          </a>
                        </p>
                        <span>13 days ago</span>
                      </div>
                    </div>
                    <ul className="rating">
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star-half-fill"></Icon>
                      </li>
                      <li>
                        <Icon name="star"></Icon>
                      </li>
                    </ul>
                  </div>
                </PreviewAltCard>
                <Card className="card-bordered mt-4">
                  <div className="card-inner border-bottom bg-lighter py-3">
                    <div className="d-sm-flex align-items-sm-center justify-content-sm-between">
                      <div className="pb-1 pb-sm-0">
                        <h5 className="title">Feature Quality</h5>
                        <div className="d-sm-flex">
                          <span className="m-0 pr-2">
                            by{" "}
                            <a href="#softnio" onClick={(ev) => ev.preventDefault()}>
                              softnio
                            </a>
                          </span>
                          <span>6 days ago</span>
                        </div>
                      </div>
                      <ul className="rating">
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star-half-fill"></Icon>
                        </li>
                        <li>
                          <Icon name="star"></Icon>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-inner">
                    <p className="text-soft">
                      I've been using Dashlite for months now and with every update, update it's just becoming more and
                      more better it's just becoming better. Thank you for such a great design touch. Further I
                      definitely cooperate with your product . Highly appriciate it. Really love it
                    </p>
                  </div>
                  <div className="card-inner border-top">
                    <div className="d-flex">
                      <div className="user-avatar bg-purple mr-3">
                        <span>AB</span>
                      </div>
                      <div className="fake-class">
                        <h6 className="mt-0 d-flex align-center">
                          <span>Abu Bin Ishiyak</span>
                          <span className="badge badge-dim badge-outline-info ml-2">Author</span>
                        </h6>
                        <p className="text-soft">
                          Time zone depend on your server time as we use that by default. So you need to change that
                          from your server. For data display issues, you may send your website url so we can check what
                          actually wrong.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-inner border-top">
                    <div className="d-flex">
                      <div className="user-avatar bg-info mr-3">
                        <span>IB</span>
                      </div>
                      <div className="fake-class">
                        <h6 className="mt-0 d-flex align-center">
                          <span>Ifrat Binte</span>
                        </h6>
                        <p className="text-soft">Thanks for the help. Really great support.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<PreviewAltCard bodyClass="py-3">
  <div className="d-sm-flex align-items-sm-center justify-content-sm-between">
    <div className="pb-1 pb-sm-0">
      <h5 className="title">Design Quality</h5>
      <div className="d-flex">
        <p className="m-0 pr-2">
          by{" "}
          <a href="#softnio" onClick={(ev) => ev.preventDefault()}>
            softnio
          </a>
        </p>
        <span>13 days ago</span>
      </div>
    </div>
    <ul className="rating">
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-fill"></Icon>
      </li>
      <li>
        <Icon name="star-half-fill"></Icon>
      </li>
      <li>
        <Icon name="star"></Icon>
      </li>
    </ul>
  </div>
</PreviewAltCard>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Customization</BlockTitle>
              <BlockDes>
                <p>
                  You can use customize <code>Rating</code> component used in react dashlite.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <PreviewAltCard>
              <Rating type="heart" className="text-danger" initVal={5}></Rating>
            </PreviewAltCard>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Rating type="heart" className="text-danger" initVal={5}></Rating>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default RatingWidgets;
