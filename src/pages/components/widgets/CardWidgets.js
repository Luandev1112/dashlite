import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import ProductLGA from "../../../images/product/lg-a.jpg";
import StockA from "../../../images/stock/a.jpg";
import AvatarA from "../../../images/avatar/a-sm.jpg";
import ImageContainer from "../../../components/partials/gallery/GalleryImage";
import PlanS1 from "../../../images/icons/plan-s1.svg";
import InvestOverview from "../../../components/partials/invest/invest-overview/InvestOverview";
import NewsUsers from "../../../components/partials/default/new-users/User";
import RecentActivity from "../../../components/partials/default/recent-activity/Activity";
import Support from "../../../components/partials/default/support-request/Support";
import Notifications from "../../../components/partials/default/notification/Notification";
import PageViewer from "../../../components/partials/analytics/page-view/PageView";
import ActionCenter from "../../../components/partials/crypto/action-center/ActionCenter";
import { Link } from "react-router-dom";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BackTo,
  PreviewCard,
  PreviewAltCard,
  Icon,
  CodeBlock,
  UserAvatar,
  BlockDes,
  ProjectCard,
  Progress,
} from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { Card, Row, Col, Button, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

const CardWidgets = () => {
  const [heart, setHeart] = useState(false);
  const toggleHeart = () => {
    setHeart(!heart);
  };
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
              Card Widgets
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Product Card</BlockTitle>
              <p>
                Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
                control and customization.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="5" sm="7">
                <Card className="card-bordered product-card">
                  <div className="product-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/product-details/1`}>
                      <img className="card-img-top" src={ProductLGA} alt="" />
                    </Link>
                    <ul className="product-actions">
                      <li>
                        <a href="#cart" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="cart"></Icon>
                        </a>
                      </li>
                      <li>
                        <a href="#like" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="heart"></Icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-inner text-center">
                    <ul className="product-tags">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/product-details/1`}>Smart Watch</Link>
                      </li>
                    </ul>
                    <h5 className="product-title">
                      <Link to={`${process.env.PUBLIC_URL}/product-details/1`}>Classy Smart Watch</Link>
                    </h5>
                    <div className="product-price text-primary h5">
                      <small className="text-muted del fs-13px">$350</small> $324
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered product-card">
    <div className="product-thumb">
        <Link to={process.env.PUBLIC_URL}/product-details/1}>
            <img className="card-img-top" src={ProductLGA} alt="" />
        </Link>
        <ul className="product-actions">
            <li>
            <a href="#cart" onClick={(ev) => ev.preventDefault()}>
                <Icon name="cart"></Icon>
            </a>
            </li>
            <li>
            <a href="#like" onClick={(ev) => ev.preventDefault()}>
                <Icon name="heart"></Icon>
            </a>
            </li>
        </ul>
    </div>
    <div className="card-inner text-center">
        <ul className="product-tags">
            <li>
            <Link to={process.env.PUBLIC_URL}/product-details/1}>Smart Watch</Link>
            </li>
        </ul>
        <h5 className="product-title">
            <Link to={process.env.PUBLIC_URL}/product-details/1}>Classy Smart Watch</Link>
        </h5>
        <div className="product-price text-primary h5">
            <small className="text-muted del fs-13px">$350</small> $324
        </div>
    </div>
</Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Image Popup</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="5" sm="7">
                <Card className="card-bordered gallery">
                  <ImageContainer img={StockA} />
                  <div className="gallery-body card-inner align-center justify-between flex-wrap g-2">
                    <div className="user-card">
                      <UserAvatar image={AvatarA}></UserAvatar>
                      <div className="user-info">
                        <span className="lead-text">Dustin Mock</span>
                        <span className="sub-text">mock@softnio.com</span>
                      </div>
                    </div>
                    <div>
                      <Button color="transparent" className="btn-p-0 btn-nofocus" onClick={toggleHeart}>
                        <Icon name={`${heart ? "heart-fill" : "heart"}`}></Icon>
                        <span>{heart ? 34 : 33}</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered gallery">
    <ImageContainer img={StockA} />
    <div className="gallery-body card-inner align-center justify-between flex-wrap g-2">
        <div className="user-card">
            <UserAvatar image={AvatarA}></UserAvatar>
            <div className="user-info">
            <span className="lead-text">Dustin Mock</span>
            <span className="sub-text">mock@softnio.com</span>
            </div>
        </div>
        <div>
            <Button className="btn-p-0 btn-nofocus">
            <Icon name="heart"></Icon>
            <span>34</span>
            </Button>
        </div>
    </div>
</Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">User Card</BlockTitle>
              <BlockDes>
                <p>
                  Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
                  control and customization
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6" lg="4">
                <PreviewAltCard>
                  <div className="team">
                    <div className="team-status bg-danger text-white">
                      <Icon name="na" />
                    </div>
                    <div className="team-options">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                          <Icon name="more-h"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#edit"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="edit"></Icon>
                                <span>Edit</span>
                              </DropdownItem>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#suspend"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="na"></Icon>
                                <span>Suspend User</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="user-card user-card-s2">
                      <UserAvatar theme="purple" className="md" text={findUpper("Abu Bin")}>
                        <div className="status dot dot-lg dot-success"></div>
                      </UserAvatar>
                      <div className="user-info">
                        <h6>Abu Bin Ishtiak</h6>
                        <span className="sub-text">@ishtyak</span>
                      </div>
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
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`                <PreviewAltCard>
    <div className="team">
        <div className="team-status bg-danger text-white">
            <Icon name="na" />
        </div>
    <div className="team-options">
        <UncontrolledDropdown>
            <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                <Icon name="more-h"></Icon>
            </DropdownToggle>
            <DropdownMenu right>
                <ul className="link-list-opt no-bdr">
                    <li>
                        <DropdownItem
                        tag="a"
                        href="#edit"
                        onClick={(ev) => {
                            ev.preventDefault();
                        }}
                        >
                        <Icon name="edit"></Icon>
                        <span>Edit</span>
                        </DropdownItem>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <DropdownItem
                        tag="a"
                        href="#suspend"
                        onClick={(ev) => {
                            ev.preventDefault();
                        }}
                        >
                        <Icon name="na"></Icon>
                        <span>Suspend User</span>
                        </DropdownItem>
                    </li>
                </ul>
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>
    <div className="user-card user-card-s2">
        <UserAvatar theme="purple" className="md" text={findUpper("Abu Bin")}>
            <div className="status dot dot-lg dot-success"></div>
        </UserAvatar>
        <div className="user-info">
            <h6>Abu Bin Ishtiak</h6>
            <span className="sub-text">@ishtyak</span>
        </div>
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
        <Link to={process.env.PUBLIC_URL}/user-details-regular/1}>
            <Button outline color="light" className="btn-round">
                <span>View Profile</span>
            </Button>
        </Link>
    </div>
    </div>
</PreviewAltCard>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">User Alternate Card</BlockTitle>
              <BlockDes>
                <p>
                  Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
                  control and customization
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6" lg="4">
                <PreviewAltCard>
                  <div className="team">
                    <div className="team-options">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                          <Icon name="more-h"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#edit"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="edit"></Icon>
                                <span>Edit</span>
                              </DropdownItem>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <DropdownItem
                                href="#suspend"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="na"></Icon>
                                <span>Suspend User</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="user-card user-card-s2">
                      <UserAvatar theme="primary" className="lg" text={findUpper("Abu Bin")}>
                        <div className="status dot dot-lg dot-success"></div>
                      </UserAvatar>
                      <div className="user-info">
                        <h6>Abu Bin Ishtiak</h6>
                      </div>
                    </div>
                    <div className="team-details">
                      <p>UI/UX Designer</p>
                    </div>
                    <ul className="team-info">
                      <li>
                        <span>Join Date</span>
                        <span>24 Jun 2015</span>
                      </li>
                      <li>
                        <span>Contact</span>
                        <span>+88 01713-123656</span>
                      </li>
                      <li>
                        <span>Email</span>
                        <span>info@softnio.com</span>
                      </li>
                    </ul>
                    <div className="team-view">
                      <Link to={`${process.env.PUBLIC_URL}/user-details-regular/1`}>
                        <Button color="primary" className="btn-block btn-dim">
                          <span>View Profile</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` <PreviewAltCard>
  <div className="team">
    <div className="team-options">
      <UncontrolledDropdown>
        <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-opt no-bdr">
            <li>
              <DropdownItem
                tag="a"
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="edit"></Icon>
                <span>Edit</span>
              </DropdownItem>
            </li>
            <li className="divider"></li>
            <li>
              <DropdownItem
                href="#suspend"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="na"></Icon>
                <span>Suspend User</span>
              </DropdownItem>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
    <div className="user-card user-card-s2">
      <UserAvatar theme="primary" className="lg" text={findUpper("Abu Bin")}>
        <div className="status dot dot-lg dot-success"></div>
      </UserAvatar>
      <div className="user-info">
        <h6>Abu Bin Ishtiak</h6>
      </div>
    </div>
    <div className="team-details">
      <p>UI/UX Designer</p>
    </div>
    <ul className="team-info">
      <li>
        <span>Join Date</span>
        <span>24 Jun 2015</span>
      </li>
      <li>
        <span>Contact</span>
        <span>+88 01713-123656</span>
      </li>
      <li>
        <span>Email</span>
        <span>info@softnio.com</span>
      </li>
    </ul>
    <div className="team-view">
      <Link to={process.env.PUBLIC_URL/user-details-regular/1}>
        <Button color="primary" className="btn-block btn-dim">
          <span>View Profile</span>
        </Button>
      </Link>
    </div>
  </div>
</PreviewAltCard>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Card with tabs</BlockTitle>
              <BlockDes>
                <p>With this card design, you can use multiple tabs on a card.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <PreviewAltCard>
                  <InvestOverview />
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React, { useState } from "react";
import Icon from "../../../icon/Icon";

const InvestOverview = () => {
  const [tab, setTab] = useState("1");
  return (
    <React.Fragment>
      <div className="card-title-group mb-1">
        <div className="card-title">
          <h6 className="title">Investment Overview</h6>
          <p>
            The investment overview of your platform.{" "}
            <a
              href="#all"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              All Investment
            </a>
          </p>
        </div>
      </div>
      <ul className="nav nav-tabs nav-tabs-card nav-tabs-xs">
        <li className="nav-item" onClick={() => setTab("1")}>
          <a
            href="#overview"
            onClick={(ev) => {
              ev.preventDefault();
            }}
            className={nav-link {tab === "1" ? " active" : ""}}
          >
            Overview
          </a>
        </li>
        <li className="nav-item" onClick={() => setTab("2")}>
          <a
            onClick={(ev) => {
              ev.preventDefault();
            }}
            className={nav-link {tab === "2" ? " active" : ""}}
            href="#year"
          >
            This Year
          </a>
        </li>
        <li className="nav-item" onClick={() => setTab("3")}>
          <a
            className={nav-link {tab === "3" ? " active" : ""}}
            onClick={(ev) => {
              ev.preventDefault();
            }}
            href="#all"
          >
            All Time
          </a>
        </li>
      </ul>
      <div className="tab-content mt-0">
        {tab === "1" && (
          <div className={tab-pane {tab === "1" && " active"}}>
            <div className="invest-ov gy-2">
              <div className="subtitle">Currently Actived Investment</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    49,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">56</span>
                    <span className="change up text-danger">
                      <Icon name="arrow-long-up"></Icon>
                      1.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    49,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Paid Profit</div>
                </div>
              </div>
            </div>
            <div className="invest-ov gy-2">
              <div className="subtitle">Investment in this Month</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    49,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">23</span>
                    <span className="change down text-danger">
                      <Icon name="arrow-long-down"></Icon>
                      1.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "2" && (
          <div className={tab-pane {tab === "2" && " active"}}>
            <div className="invest-ov gy-2">
              <div className="subtitle">Currently Actived Investment</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    89,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">96</span>
                    <span className="change up text-danger">
                      <Icon name="arrow-long-up"></Icon>
                      2.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    99,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Paid Profit</div>
                </div>
              </div>
            </div>
            <div className="invest-ov gy-2">
              <div className="subtitle">Investment in this Month</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    149,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">83</span>
                    <span className="change down text-danger">
                      <Icon name="arrow-long-down"></Icon>
                      5.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "3" && (
          <div className={tab-pane {tab === "3" && " active"}}>
            <div className="invest-ov gy-2">
              <div className="subtitle">Currently Actived Investment</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    249,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">556</span>
                    <span className="change up text-danger">
                      <Icon name="arrow-long-up"></Icon>
                      3.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    149,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Paid Profit</div>
                </div>
              </div>
            </div>
            <div className="invest-ov gy-2">
              <div className="subtitle">Investment in this Month</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    249,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">223</span>
                    <span className="change down text-danger">
                      <Icon name="arrow-long-down"></Icon>
                      4.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Pricing table</BlockTitle>
              <BlockDes>
                <p>You can customize it in a ton of ways.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6" lg="4">
                <Card className={`card-bordered pricing`}>
                  <div className="pricing-head">
                    <div className="pricing-title">
                      <h4 className="card-title title">Starter</h4>
                      <p className="sub-text">Enjoy entry level of invest & earn.</p>
                    </div>
                    <div className="card-text">
                      <Row>
                        <Col size={6}>
                          <span className="h4 fw-500">1.67%</span>
                          <span className="sub-text">Daily Interest</span>
                        </Col>
                        <Col size={6}>
                          <span className="h4 fw-500">30</span>
                          <span className="sub-text">Term Days</span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="pricing-features">
                      <li>
                        <span className="w-50">Min Deposit</span> - <span className="ml-auto">$250</span>
                      </li>
                      <li>
                        <span className="w-50">Max Deposit</span> - <span className="ml-auto">$1,999</span>
                      </li>
                      <li>
                        <span className="w-50">Deposit Return</span> - <span className="ml-auto">Yes</span>
                      </li>
                      <li>
                        <span className="w-50">Total Return</span> - <span className="ml-auto">125%</span>
                      </li>
                    </ul>
                    <div className="pricing-action">
                      <Button color="light" outline>
                        Choose this plan
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered pricing">
  <div className="pricing-head">
    <div className="pricing-title">
      <h4 className="card-title title">Starter</h4>
      <p className="sub-text">Enjoy entry level of invest & earn.</p>
    </div>
    <div className="card-text">
      <Row>
        <Col size={6}>
          <span className="h4 fw-500">1.67%</span>
          <span className="sub-text">Daily Interest</span>
        </Col>
        <Col size={6}>
          <span className="h4 fw-500">30</span>
          <span className="sub-text">Term Days</span>
        </Col>
      </Row>
    </div>
  </div>
  <div className="pricing-body">
    <ul className="pricing-features">
      <li>
        <span className="w-50">Min Deposit</span> - <span className="ml-auto">$250</span>
      </li>
      <li>
        <span className="w-50">Max Deposit</span> - <span className="ml-auto">$1,999</span>
      </li>
      <li>
        <span className="w-50">Deposit Return</span> - <span className="ml-auto">Yes</span>
      </li>
      <li>
        <span className="w-50">Total Return</span> - <span className="ml-auto">125%</span>
      </li>
    </ul>
    <div className="pricing-action">
      <Button color="light" outline>
        Choose this plan
      </Button>
    </div>
  </div>
</Card> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Pricing table alt</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6" lg="4">
                <Card className="card-bordered pricing text-center">
                  <div className="pricing-body">
                    <div className="pricing-media">
                      <img src={PlanS1} alt="" />
                    </div>
                    <div className="pricing-title w-220px mx-auto">
                      <h5 className="title">Starter</h5>
                      <span className="sub-text">If you are a small business amn please select this plan</span>
                    </div>
                    <div className="pricing-amount">
                      <div className="amount">
                        $99 <span>/yr</span>
                      </div>
                      <span className="bill">1 User, Billed Yearly</span>
                    </div>
                    <div className="pricing-action">
                      <Button color="primary">Select Plan</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered pricing text-center">
  <div className="pricing-body">
    <div className="pricing-media">
      <img src={PlanS1} alt="" />
    </div>
    <div className="pricing-title w-220px mx-auto">
      <h5 className="title">Starter</h5>
      <span className="sub-text">If you are a small business amn please select this plan</span>
    </div>
    <div className="pricing-amount">
      <div className="amount">
        $99 <span>/yr</span>
      </div>
      <span className="bill">1 User, Billed Yearly</span>
    </div>
    <div className="pricing-action">
      <Button color="primary">Select Plan</Button>
    </div>
  </div>
</Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Project Card</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6" lg="5">
                <ProjectCard>
                  <div className="project-head">
                    <a
                      href="#title"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                      className="project-title"
                    >
                      <UserAvatar className="sq" theme="primary" text={findUpper("Dashlite Dev")} />
                      <div className="project-info">
                        <h6 className="title">Dashlite Development</h6>
                        <span className="sub-text">Softnio</span>
                      </div>
                    </a>
                    <UncontrolledDropdown>
                      <DropdownToggle tag="a" className="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 mr-n1">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem
                              tag="a"
                              href="#edit"
                              onClick={(ev) => {
                                ev.preventDefault();
                              }}
                            >
                              <Icon name="edit"></Icon>
                              <span>Edit Project</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem
                              tag="a"
                              href="#markasdone"
                              onClick={(ev) => {
                                ev.preventDefault();
                              }}
                            >
                              <Icon name="check-round-cut"></Icon>
                              <span>Mark As Done</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="project-details">
                    Design and develop the DashLite template for Envato Marketplace.
                  </div>
                  <div className="project-progress">
                    <div className="project-progress-details">
                      <div className="project-progress-task">
                        <Icon name="check-round-cut"></Icon>
                        <span>3 Tasks</span>
                      </div>
                      <div className="project-progress-percent">93%</div>
                    </div>
                    <Progress className="progress-pill progress-md bg-light" value={93}></Progress>
                  </div>
                  <div className="project-meta">
                    <ul className="project-users g-1">
                      <li>
                        <UserAvatar className="sm" text={findUpper("Abu")} theme="primary" />
                      </li>
                      <li>
                        <UserAvatar className="sm" text={findUpper("Desnis")} theme="blue" />
                      </li>
                      <li>
                        <UserAvatar theme="light" className="sm" text={`+12`} />
                      </li>
                    </ul>
                    <span className={`badge badge-dim badge-warning`}>
                      <Icon name="clock"></Icon>
                      <span>2 Days Left</span>
                    </span>
                  </div>
                </ProjectCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ProjectCard>
  <div className="project-head">
    <a
      href="#title"
      onClick={(ev) => {
        ev.preventDefault();
      }}
      className="project-title"
    >
      <UserAvatar className="sq" theme="primary" text={findUpper("Dashlite Dev")} />
      <div className="project-info">
        <h6 className="title">Dashlite Development</h6>
        <span className="sub-text">Softnio</span>
      </div>
    </a>
    <UncontrolledDropdown>
      <DropdownToggle tag="a" className="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 mr-n1">
        <Icon name="more-h"></Icon>
      </DropdownToggle>
      <DropdownMenu right>
        <ul className="link-list-opt no-bdr">
          <li>
            <DropdownItem
              tag="a"
              href="#edit"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              <Icon name="edit"></Icon>
              <span>Edit Project</span>
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              tag="a"
              href="#markasdone"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              <Icon name="check-round-cut"></Icon>
              <span>Mark As Done</span>
            </DropdownItem>
          </li>
        </ul>
      </DropdownMenu>
    </UncontrolledDropdown>
  </div>
  <div className="project-details">
    Design and develop the DashLite template for Envato Marketplace.
  </div>
  <div className="project-progress">
    <div className="project-progress-details">
      <div className="project-progress-task">
        <Icon name="check-round-cut"></Icon>
        <span>3 Tasks</span>
      </div>
      <div className="project-progress-percent">93%</div>
    </div>
    <Progress className="progress-pill progress-md bg-light" value={93}></Progress>
  </div>
  <div className="project-meta">
    <ul className="project-users g-1">
      <li>
        <UserAvatar className="sm" text={findUpper("Abu")} theme="primary" />
      </li>
      <li>
        <UserAvatar className="sm" text={findUpper("Desnis")} theme="blue" />
      </li>
      <li>
        <UserAvatar theme="light" className="sm" text="+12" />
      </li>
    </ul>
    <span className="badge badge-dim badge-warning">
      <Icon name="clock"></Icon>
      <span>2 Days Left</span>
    </span>
  </div>
</ProjectCard>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">User list card</BlockTitle>
              <BlockDes>
                <p>The following card can be use for User list, customer list related filed.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="6">
                <Card className="card-bordered card-full">
                  <NewsUsers />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React from "react";
import UserAvatar from "../../../user/UserAvatar";
import Icon from "../../../icon/Icon";
import { newUserData } from "./UserData";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, CardTitle, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";

const NewsUsers = () => {
  const DropdownTrans = () => {
    return (
      <UncontrolledDropdown>
        <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger mr-n1">
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-opt no-bdr">
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="setting"></Icon>
                <span>Action Settings</span>
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                href="#dropdownitem"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="notify"></Icon>
                <span>Use Notification</span>
              </DropdownItem>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  return (
    <div className="card-inner-group">
      <div className="card-inner">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">New Users</h6>
          </CardTitle>
          <div className="card-tools">
            <Link to={process.env.PUBLIC_URL}/user-list-regular} className="link">
              View All
            </Link>
          </div>
        </div>
      </div>
      {newUserData.map((item, idx) => {
        return (
          <div className="card-inner card-inner-md" key={idx}>
            <div className="user-card">
              <UserAvatar theme={item.theme} text={item.initial}></UserAvatar>
              <div className="user-info">
                <span className="lead-text">{item.name}</span>
                <span className="sub-text">{item.email}</span>
              </div>
              <div className="user-action">
                <DropdownTrans />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Activities card with tabs</BlockTitle>
              <BlockDes>
                <p>The following card can be use for Activities or related filed.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="6">
                <Card className="card-bordered card-full">
                  <RecentActivity />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React, { useState } from "react";
import UserAvatar from "../../../user/UserAvatar";
import { activityData } from "./ActivityData";
import { CardTitle } from "reactstrap";

const RecentActivity = () => {
  const [recentUser, setRecentUser] = useState("");
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Recent Activities</h6>
          </CardTitle>
          <div className="card-tools">
            <ul className="card-tools-nav">
              <li className={recentUser === "Cancel" ? "active" : ""} onClick={() => setRecentUser("Cancel")}>
                <a
                  href="#cancel"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Cancel</span>
                </a>
              </li>
              <li className={recentUser === "" ? "active" : ""} onClick={() => setRecentUser("")}>
                <a
                  href="#all"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>All</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="nk-activity">
        {recentUser === "Cancel"
          ? activityData.slice(0, 3).map((item) => {
              return (
                <li className="nk-activity-item" key={item.name}>
                  <UserAvatar
                    className="nk-activity-media"
                    theme={item.theme}
                    image={item.img}
                    text={item.initial}
                  ></UserAvatar>
                  <div className="nk-activity-data">
                    <div className="label">{item.name + " " + item.activity}</div>
                    <span className="time">{item.time}</span>
                  </div>
                </li>
              );
            })
          : activityData.map((item) => {
              return (
                <li className="nk-activity-item" key={item.name}>
                  <UserAvatar
                    className="nk-activity-media"
                    theme={item.theme}
                    image={item.img}
                    text={item.initial}
                  ></UserAvatar>
                  <div className="nk-activity-data">
                    <div className="label">{item.name + " " + item.activity}</div>
                    <span className="time">{item.time}</span>
                  </div>
                </li>
              );
            })}
      </ul>
    </React.Fragment>
  );
};`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Support Requests</BlockTitle>
              <BlockDes>
                <p>The following card can be use for Support Requests related filed.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="6">
                <Card className="card-bordered card-full">
                  <Support />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React from "react";
import UserAvatar from "../../../user/UserAvatar";
import { supportData } from "./SupportData";
import { CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Support Requests</h6>
          </CardTitle>
          <div className="card-tools">
            <Link to={{process.env.PUBLIC_URL}/app-messages} className="link">
              All Tickets
            </Link>
          </div>
        </div>
      </div>
      <ul className="nk-support">
        {supportData.map((item, idx) => {
          return (
            <li className="nk-support-item" key={idx}>
              <UserAvatar image={item.img} theme={item.theme} text={item.initial} />
              <div className="nk-support-content">
                <div className="title">
                  <span>{item.name}</span>
                  <span
                    className={badge badge-dot badge-dot-xs badge-{
                      item.status === "Solved" ? "success" : item.status === "Pending" ? "warning" : "info"
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p>{item.text}</p>
                <span className="time">{item.time}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Notification Card</BlockTitle>
              <BlockDes>
                <p>The following card can be use for Notifications related filed.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="6">
                <Card className="card-bordered card-full">
                  <Notifications />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React from "react";
import Icon from "../../../icon/Icon";
import { notificationData } from "./NotificationData";
import { CardTitle } from "reactstrap";

const Notifications = () => {
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Notifications</h6>
          </CardTitle>
          <div className="card-tools">
            <a
              href="#viewall"
              className="link"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="card-inner">
        <div className="timeline">
          <h6 className="timeline-head">November, 2019</h6>
          <ul className="timeline-list">
            {notificationData.map((item) => {
              return (
                <li className="timeline-item" key={item.id}>
                  <div className={timeline-status {item.fill} {item.outline ? "is-outline" : ""}}></div>
                  <div className="timeline-date">
                    {item.date} <Icon name="alarm-alt"></Icon>
                  </div>
                  <div className="timeline-data">
                    <h6 className="timeline-title">{item.text}</h6>
                    <div className="timeline-des">
                      <p>{item.subtitle}</p>
                      <span className="time">{item.time}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">User Count</BlockTitle>
              <BlockDes>
                <p>The following card can be use for User Count, View Count related filed.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="6">
                <Card className="card-bordered card-full">
                  <PageViewer />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React, { useEffect, useState } from "react";
import { pagePerUserData, pagePerUserDataSet2, pagePerUserDataSet3 } from "../../charts/analytics/AnalyticsData";
import { DataTableRow, DataTableHead, DataTableItem } from "../../../table/DataTable";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";

const PageViewer = () => {
  const [pageViewer, setPageViewer] = useState("30");
  const [data, setData] = useState(pagePerUserData);
  useEffect(() => {
    let newData;
    if (pageViewer === "7") {
      newData = pagePerUserDataSet2;
    } else if (pageViewer === "15") {
      newData = pagePerUserDataSet3;
    } else {
      newData = pagePerUserData;
    }
    setData(newData);
  }, [pageViewer]);
  return (
    <React.Fragment>
      <div className="card-inner mb-n2">
        <div className="card-title-group">
          <div className="card-title card-title-sm">
            <h6 className="title">Page View by Users</h6>
          </div>
          <UncontrolledDropdown className="drodown">
            <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
              {pageViewer} Days
            </DropdownToggle>
            <DropdownMenu right className=" dropdown-menu-xs">
              <ul className="link-list-opt no-bdr">
                <li className={pageViewer === "7" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageViewer("7");
                    }}
                  >
                    <span>7 Days</span>
                  </DropdownItem>
                </li>
                <li className={pageViewer === "15" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageViewer("15");
                    }}
                  >
                    <span>15 Days</span>
                  </DropdownItem>
                </li>
                <li className={pageViewer === "30" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageViewer("30");
                    }}
                  >
                    <span>30 Days</span>
                  </DropdownItem>
                </li>
              </ul>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className="nk-tb-list is-compact">
        <DataTableHead className="nk-tb-item nk-tb-head">
          <DataTableRow>
            <span>Page</span>
          </DataTableRow>
          <DataTableRow className="text-right">
            <span>Page Views</span>
          </DataTableRow>
        </DataTableHead>
        {data.map((item) => {
          return (
            <DataTableItem key={item.id}>
              <DataTableRow>
                <span className="tb-sub">
                  <span>{item.link}</span>
                </span>
              </DataTableRow>
              <DataTableRow className="text-right">
                <span className="tb-sub tb-amount">
                  <span>{item.views}</span>
                </span>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </React.Fragment>
  );
};

`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Action Center</BlockTitle>
              <BlockDes>
                <p>The following card can be use for Action Center, Settings related field.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="6">
                <Card className="card-bordered card-full">
                  <ActionCenter />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React from "react";
import Icon from "../../../icon/Icon";
import Button from "../../../button/Button";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

const ActionCenter = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="card-inner-group">
        <div className="card-inner card-inner-md">
          <div className="card-title-group">
            <CardTitle>
              <h6 className="title">Action Center</h6>
            </CardTitle>
            <div className="card-tools mr-n1">
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                  <Icon name="more-h"></Icon>
                </DropdownToggle>
                <DropdownMenu right>
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <DropdownItem
                        tag="a"
                        href="#dropdownitem"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="setting"></Icon>
                        <span>Action Settings</span>
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem
                        tag="a"
                        href="#dropdownitem"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="notify"></Icon>
                        <span>Push Notification</span>
                      </DropdownItem>
                    </li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="cc-alt-fill"></Icon>
              <div className="title">Pending Buy/Sell Orders</div>
              <p>
                We have still <strong>40 buy orders</strong> and <strong>12 sell orders</strong>, thats need to review
                &amp; take necessary action.
              </p>
            </div>
            <Button className="btn-icon btn-trigger mr-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="help-fill"></Icon>
              <div className="title">Support Messages</div>
              <p>
                Here is <strong>18 new</strong> support message.{" "}
              </p>
            </div>
            <Button className="btn-icon btn-trigger mr-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="wallet-fill"></Icon>
              <div className="title">Upcoming Deposit</div>
              <p>
                Here is <strong>7 upcoming</strong> deposit need to review.
              </p>
            </div>
            <Button className="btn-icon btn-trigger mr-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CardWidgets;
