import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import ActiveUser from "../../../components/partials/analytics/active-user/ActiveUser";
import OrderOverview from "../../../components/partials/crypto/order-overview/OrderOverview";
import UserActivity from "../../../components/partials/crypto/user-activity/UserActivity";
import SalesOverview from "../../../components/partials/default/sales-overview/SalesOverview";
import AudienceOverview from "../../../components/partials/analytics/audience-overview/AudienceOverview";
import TrafficChannel from "../../../components/partials/analytics/traffic-channel/Traffic";
import TrafficDougnut from "../../../components/partials/analytics/traffic-dougnut/TrafficDoughnut";
import SessionDevice from "../../../components/partials/analytics/session-devices/SessionDevice";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BackTo,
  PreviewCard,
  CodeBlock,
  PreviewAltCard,
} from "../../../components/Component";
import { Card, Col, Row } from "reactstrap";

const ChartWidgets = () => {
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
              Chart Widgets
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Single Bar Chart</BlockTitle>
              <p>A bar chart provides a way of showing data values represented as vertical bars.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <PreviewAltCard>
                  <ActiveUser />
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React from "react";
import { Icon, TooltipComponent } from "../../../Component";
import { ActiveUserBarChart } from "../../charts/analytics/AnalyticsCharts";

const ActiveUser = () => {
  return (
    <React.Fragment>
      <div className="card-title-group align-start pb-3 g-2">
        <div className="card-title card-title-sm">
          <h6 className="title">Active Users</h6>
          <p>How do your users visited in the time.</p>
        </div>
        <div className="card-tools">
          <TooltipComponent
            iconClass="card-hint"
            icon="help"
            direction="left"
            id="Tooltip-users"
            text="Users of this month"
          ></TooltipComponent>
        </div>
      </div>
      <div className="analytic-au">
        <div className="analytic-data-group analytic-au-group g-3">
          <div className="analytic-data analytic-au-data">
            <div className="title">Monthly</div>
            <div className="amount">9.28K</div>
            <div className="change up">
              <Icon name="arrow-long-up"></Icon>4.63%
            </div>
          </div>
          <div className="analytic-data analytic-au-data">
            <div className="title">Weekly</div>
            <div className="amount">2.69K</div>
            <div className="change down">
              <Icon name="arrow-long-down"></Icon>1.92%
            </div>
          </div>
          <div className="analytic-data analytic-au-data">
            <div className="title">Daily (Avg)</div>
            <div className="amount">0.94K</div>
            <div className="change up">
              <Icon name="arrow-long-up"></Icon>3.45%
            </div>
          </div>
        </div>
        <div className="analytic-au-ck">
          <ActiveUserBarChart />
        </div>
        <div className="chart-label-group">
          <div className="chart-label">01 Jan, 2020</div>
          <div className="chart-label">30 Jan, 2020</div>
        </div>
      </div>
    </React.Fragment>
  );
}
`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Multiple Bar Chart</BlockTitle>
              <p>A bar chart provides a way of comparison of multiple data sets side by side.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="12">
                <PreviewAltCard>
                  <OrderOverview />
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React, { useState } from "react";
import Icon from "../../../icon/Icon";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { DoubleBar } from "../../charts/default/Charts";
import { Row, Col } from "../../../grid/Grid";
import { Link } from "react-router-dom";

const OrderOverview = () => {
  const [orderOverview, setOverview] = useState("");
  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-3">
        <CardTitle className="card-title">
          <h6 className="title">Orders Overview</h6>
          <p>
            In last {orderOverview === "set2" ? "30" : "15"} days buy and sells overview.{" "}
            <Link to={{process.env.PUBLIC_URL}/invoice-list} className="link link-sm">
              Detailed Stats
            </Link>
          </p>
        </CardTitle>
        <div className="card-tools mt-n1 mr-n1">
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
              <Icon name="more-h"></Icon>
            </DropdownToggle>
            <DropdownMenu right>
              <ul className="link-list-opt no-bdr">
                <li className={orderOverview === "" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setOverview("");
                    }}
                  >
                    <span>15 Days</span>
                  </DropdownItem>
                </li>
                <li className={orderOverview === "set2" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setOverview("set2");
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
      <div className="nk-order-ovwg">
        <Row className="g-4 align-end">
          <Col xxl="8">
            <div className="nk-order-ovwg-ck">
              <DoubleBar state={orderOverview} />
            </div>
          </Col>
          <Col xxl="4">
            <Row className="g-4">
              <Col xxl="12" sm="6">
                <div className="nk-order-ovwg-data buy">
                  <div className="amount">
                    {orderOverview === "set2" ? "12,495" : "8,051"} <small className="currenct currency-usd">USD</small>
                  </div>
                  <div className="info">
                    Last {orderOverview === "set2" ? "30" : "15"} days{" "}
                    <strong>
                      {orderOverview === "set2" ? "39,000" : "14,050"}{" "}
                      <span className="currenct currency-usd">USD</span>
                    </strong>
                  </div>
                  <div className="title">
                    <Icon name="arrow-down-left"></Icon> Buy Orders
                  </div>
                </div>
              </Col>
              <Col xxl="12" sm="6">
                <div className="nk-order-ovwg-data sell">
                  <div className="amount">
                    {orderOverview === "set2" ? "18,920" : "10,820"}{" "}
                    <small className="currenct currency-usd">USD</small>
                  </div>
                  <div className="info">
                    Last {orderOverview === "set2" ? "30" : "15"} days{" "}
                    <strong>
                      {orderOverview === "set2" ? "39,258" : "18,365"}{" "}
                      <span className="currenct currency-usd">USD</span>
                    </strong>
                  </div>
                  <div className="title">
                    <Icon name="arrow-up-left"></Icon> Sell Orders
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default OrderOverview;
`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Stacked Bar Chart</BlockTitle>
              <p>A bar chart provides a way of comparison of multiple data with stacked view.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <Card className="card-bordered">
                  <UserActivity />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React, { useState } from "react";
import Icon from "../../../icon/Icon";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { StackedBarChart } from "../../charts/default/Charts";

const UserActivity = () => {
  const [userActivity, setUserActivity] = useState("");
  return (
    <React.Fragment>
      <div className="card-inner">
        <div className="card-title-group align-start mb-3">
          <CardTitle className="card-title">
            <h6 className="title">User Activities</h6>
            <p>
              In last In last {userActivity === "day" ? "30 days" : userActivity === "month" ? "3 months" : "15 days"}{" "}
              <Icon name="info"></Icon>
            </p>
          </CardTitle>
          <div className="card-tools mt-n1 mr-n1">
            <UncontrolledDropdown>
              <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                <Icon name="more-h"></Icon>
              </DropdownToggle>
              <DropdownMenu right>
                <ul className="link-list-opt no-bdr">
                  <li className={userActivity === "" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setUserActivity("");
                      }}
                    >
                      <span>15 Days</span>
                    </DropdownItem>
                  </li>
                  <li className={userActivity === "day" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setUserActivity("day");
                      }}
                    >
                      <span>30 Days</span>
                    </DropdownItem>
                  </li>
                  <li className={userActivity === "month" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setUserActivity("month");
                      }}
                    >
                      <span>3 Months</span>
                    </DropdownItem>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="user-activity-group g-4">
          <div className="user-activity">
            <Icon name="users"></Icon>
            <div className="info">
              <span className="amount">
                {" "}
                {userActivity === "day" ? "345" : userActivity === "month" ? "850" : "50"}
              </span>
              <span className="title">Direct Join</span>
            </div>
            <div className="gfx">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 17.5">
                <path
                  fill="#9cabff"
                  d="M1.2 17.4H.9c-.5-.1-.8-.7-.7-1.2C2.2 9 5.2 4 9 1.5 10.5.5 12 0 13.5.1c4.9.3 7.2 4.9 9 8.5.3.4.5.8.7 1.2 1 1.8 2.7 3.9 4.5 4.3.9.2 1.7-.1 2.6-.8 1.8-1.4 3-3.7 4.1-5.9.5-1 1-1.9 1.5-2.9C36.9 3 38.7 1 40.8.7c1.1-.1 2.2.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1.4 1 .7 1.9 1.2 2.6.3.4.2 1.1-.2 1.4s-1.1.2-1.4-.2c-.7-.9-1.1-2-1.5-3-.5-1.3-1-2.5-1.9-3.3-.5-.4-1-.6-1.5-.5-1.3.2-2.7 1.6-3.5 2.8-.5.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-.6-5.1-3.9-5.9-5.3-.2-.4-.4-.8-.6-1.3C19.1 6 17.3 2.2 13.5 2c-1.1-.1-2.1.3-3.3 1-3.5 2.4-6.2 7-8 13.7-.2.4-.6.7-1 .7z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="user-activity">
            <Icon name="users"></Icon>
            <div className="info">
              <span className="amount"> {userActivity === "day" ? "49" : userActivity === "month" ? "250" : "10"}</span>
              <span className="title">Referral Join</span>
            </div>
            <div className="gfx">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 17.5">
                <path
                  fill="rgba(156, 171, 255, 0.7)"
                  d="M1.2 17.4H.9c-.5-.1-.8-.7-.7-1.2C2.2 9 5.2 4 9 1.5 10.5.5 12 0 13.5.1c4.9.3 7.2 4.9 9 8.5.3.4.5.8.7 1.2 1 1.8 2.7 3.9 4.5 4.3.9.2 1.7-.1 2.6-.8 1.8-1.4 3-3.7 4.1-5.9.5-1 1-1.9 1.5-2.9C36.9 3 38.7 1 40.8.7c1.1-.1 2.2.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1.4 1 .7 1.9 1.2 2.6.3.4.2 1.1-.2 1.4s-1.1.2-1.4-.2c-.7-.9-1.1-2-1.5-3-.5-1.3-1-2.5-1.9-3.3-.5-.4-1-.6-1.5-.5-1.3.2-2.7 1.6-3.5 2.8-.5.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-.6-5.1-3.9-5.9-5.3-.2-.4-.4-.8-.6-1.3C19.1 6 17.3 2.2 13.5 2c-1.1-.1-2.1.3-3.3 1-3.5 2.4-6.2 7-8 13.7-.2.4-.6.7-1 .7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="user-activity-ck">
        <StackedBarChart state={userActivity} />
      </div>
    </React.Fragment>
  );
};
export default UserActivity;
`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Solid Line Chart</BlockTitle>
              <p>A line chart is a way of plotting data points on a line.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="12">
                <PreviewAltCard>
                  <SalesOverview />
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React from "react";
import { DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import { Icon } from "../../../Component";
import { LineChart } from "../../charts/default/Charts";

const SalesOverview = () => {
  return (
    <React.Fragment>
      <div className="card-title-group align-start gx-3 mb-3">
        <div className="card-title">
          <h6 className="title">Sales Overview</h6>
          <p>
            In 30 days sales of product subscription.{" "}
            <a
              href="#details"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              See Details
            </a>
          </p>
        </div>
        <div className="card-tools">
          <UncontrolledDropdown>
            <DropdownToggle tag="div" color="transparent">
              <a
                href="#toggle"
                onClick={(ev) => ev.preventDefault()}
                className="btn btn-primary btn-dim d-none d-sm-inline-flex"
              >
                <Icon className="d-none d-sm-inline" name="download-cloud" />
                <span>
                  <span className="d-none d-md-inline">Download</span> Report
                </span>
              </a>
              <a
                href="#toggle"
                onClick={(ev) => ev.preventDefault()}
                className="btn btn-primary btn-icon btn-dim d-sm-none"
              >
                <Icon name="download-cloud" />
              </a>
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
                    <span>Download Mini Version</span>
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
                    <span>Download Full Version</span>
                  </DropdownItem>
                </li>
                <li className="divider"></li>
                <li>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <Icon name="opt-alt" />
                    <span>Options</span>
                  </DropdownItem>
                </li>
              </ul>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className="nk-sale-data-group align-center justify-between gy-3 gx-5">
        <div className="nk-sale-data">
          <span className="amount">$82,944.60</span>
        </div>
        <div className="nk-sale-data">
          <span className="amount sm">
            1,937 <small>Subscribers</small>
          </span>
        </div>
      </div>
      <div className="nk-sales-ck large pt-4">
        <LineChart />
      </div>
    </React.Fragment>
  );
};
export default SalesOverview;
`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Solid and Dotted Line Chart</BlockTitle>
              <p>
                A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the
                comparison of two data sets.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="12">
                <AudienceOverview />
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React, { useState } from "react";
import { AudienceLineChart } from "../../charts/analytics/AnalyticsCharts";
import { Icon } from "../../../Component";

const AudienceOverview = () => {
  const [auOverview, setAuOverview] = useState("month-1");
  return (
    <React.Fragment>
      <div className="card-title-group pb-3 g-2">
        <div className="card-title card-title-sm">
          <h6 className="title">Audience Overview</h6>
          <p>How have your users, sessions, bounce rate metrics trended.</p>
        </div>
        <div className="card-tools shrink-0 d-none d-sm-block">
          <ul className="nav nav-switch-s2 nav-tabs bg-white">
            <li className="nav-item">
              <a
                href="#navitem"
                className={auOverview === "day-7" ? "nav-link active" : "nav-link"}
                onClick={(e) => {
                  e.preventDefault();
                  setAuOverview("day-7");
                }}
              >
                7 D
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#navitem"
                className={auOverview === "month-1" ? "nav-link active" : "nav-link"}
                onClick={(e) => {
                  e.preventDefault();
                  setAuOverview("month-1");
                }}
              >
                1 M
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="analytic-ov">
        <div className="analytic-data-group analytic-ov-group g-3">
          <div className="analytic-data analytic-ov-data">
            <div className="title">Users</div>
            <div className="amount">{auOverview === "month-1" ? "2.57" : "1.21"}K</div>
            <div className="change up">
              <Icon name="arrow-long-up"></Icon> {auOverview === "month-1" ? "12.31" : "5.21"}%
            </div>
          </div>
          <div className="analytic-data analytic-ov-data">
            <div className="title">Sessions</div>
            <div className="amount">{auOverview === "month-1" ? "3.98" : "1.6"}K</div>
            <div className="change up">
              <Icon name="arrow-long-up"></Icon> {auOverview === "month-1" ? "47.5" : "80.6"}%
            </div>
          </div>
          <div className="analytic-data analytic-ov-data">
            <div className="title">Users</div>
            <div className="amount">{auOverview === "month-1" ? "28.25" : "10.25"}%</div>
            <div className="change down">
              <Icon name="arrow-long-down"></Icon> {auOverview === "month-1" ? "12.57" : "18.21"}%
            </div>
          </div>
          <div className="analytic-data analytic-ov-data">
            <div className="title">Users</div>
            <div className="amount">{auOverview === "month-1" ? "7m 28" : "2m 36"}s</div>
            <div className="change down">
              <Icon name="arrow-long-down"></Icon> {auOverview === "month-1" ? "0.35" : "1.21"}%
            </div>
          </div>
        </div>
        <div className="analytic-ov-ck">
          <AudienceLineChart state={auOverview} />
        </div>
        <div className="chart-label-group ml-5">
          <div className="chart-label">01 Jan, 2020</div>
          <div className="chart-label d-none d-sm-block">{auOverview === "month-1" ? "15" : "4"} Jan, 2020</div>
          <div className="chart-label"> {auOverview === "month-1" ? "30" : "7"} Jan, 2020</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AudienceOverview;
`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Multiple Line Chart</BlockTitle>
              <p>A line chart is a way of plotting data points on a line.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="12">
                <Card className="card-bordered">
                  <TrafficChannel />
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React, { useEffect, useState } from "react";
import {
  trafficChannelData,
  trafficChannelDataSet2,
  trafficChannelDataSet3,
  trafficChannelDataSet4,
} from "../../charts/analytics/AnalyticsData";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Icon, DataTableHead, DataTableRow, DataTableItem } from "../../../Component";
import { WPCharts } from "../../charts/analytics/AnalyticsCharts";

const TrafficChannel = () => {
  const [dd, setdd] = useState("30");
  const [trafficData, setTrafficData] = useState(trafficChannelData);

  useEffect(() => {
    if (dd === "30") {
      setTrafficData(trafficChannelDataSet3);
    } else if (dd === "15") {
      setTrafficData(trafficChannelDataSet4);
    } else {
      setTrafficData(trafficChannelDataSet2);
    }
  }, [dd]);

  return (
    <React.Fragment>
      <div className="card-inner mb-n2">
        <div className="card-title-group">
          <div className="card-title card-title-sm">
            <h6 className="title">Traffic Channel</h6>
            <p>Top traffic channels metrics.</p>
          </div>
          <div className="card-tools">
            <UncontrolledDropdown>
              <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
                {dd} Days
              </DropdownToggle>
              <DropdownMenu right className="dropdown-menu-xs">
                <ul className="link-list-opt no-bdr">
                  <li className={dd === "7" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(e) => {
                        e.preventDefault();
                        setdd("7");
                      }}
                    >
                      <span>7 Days</span>
                    </DropdownItem>
                  </li>
                  <li className={dd === "15" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(e) => {
                        e.preventDefault();
                        setdd("15");
                      }}
                    >
                      <span>15 Days</span>
                    </DropdownItem>
                  </li>
                  <li className={dd === "30" ? "active" : ""}>
                    <DropdownItem
                      href="#dropdownitem"
                      onClick={(e) => {
                        e.preventDefault();
                        setdd("30");
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
      </div>
      <div className="nk-tb-list is-loose traffic-channel-table">
        <DataTableHead>
          <DataTableRow className="nk-tb-channel">
            <span>Channel</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-sessions">
            <span>Sessions</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-prev-sessions">
            <span>Prev Sessions</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-change">
            <span>Change</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-trend tb-col-sm text-right">
            <span>Trend</span>
          </DataTableRow>
        </DataTableHead>
        {trafficData.map((item) => {
          return (
            <DataTableItem className="nk-tb-item" key={item.id}>
              <DataTableRow className="nk-tb-channel">
                <span className="tb-lead">{item.channel}</span>
              </DataTableRow>
              <DataTableRow className="nk-tb-sessions">
                <span className="tb-sub tb-amount">
                  <span>{item.sessions}</span>
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-prev-sessions">
                <span className="tb-sub tb-amount">
                  <span>{item.prev}</span>
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-change">
                <span className="tb-sub">
                  <span>{item.change}%</span>{" "}
                  <span className={change {item.changeDifference}}>
                    <Icon name={arrow-long-{item.changeDifference}}></Icon>
                  </span>
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-trend text-right">
                <div className="traffic-channel-ck ml-auto">
                  <WPCharts data={item.chart}></WPCharts>
                </div>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </React.Fragment>
  );
};`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Doughnut Charts</BlockTitle>
              <p>
                Doughnut charts are probably the most commonly used charts. It use to show relational proportions
                between data.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <PreviewAltCard>
                  <TrafficDougnut />
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React, { useState } from "react";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { TCDoughnut } from "../../charts/analytics/AnalyticsCharts";

const TrafficDougnut = () => {
  const [traffic, setTraffic] = useState("30");
  return (
    <React.Fragment>
      {" "}
      <div className="card-title-group">
        <div className="card-title card-title-sm">
          <h6 className="title">Traffic Channel</h6>
        </div>
        <UncontrolledDropdown>
          <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
            {traffic} Days
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xs">
            <ul className="link-list-opt no-bdr">
              <li className={traffic === "7" ? "active" : ""}>
                <DropdownItem
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setTraffic("7");
                  }}
                >
                  <span>7 Days</span>
                </DropdownItem>
              </li>
              <li className={traffic === "15" ? "active" : ""}>
                <DropdownItem
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setTraffic("15");
                  }}
                >
                  <span>15 Days</span>
                </DropdownItem>
              </li>
              <li className={traffic === "30" ? "active" : ""}>
                <DropdownItem
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setTraffic("30");
                  }}
                >
                  <span>30 Days</span>
                </DropdownItem>
              </li>
            </ul>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="traffic-channel">
        <div className="traffic-channel-doughnut-ck">
          <TCDoughnut state={traffic} className="analytics-doughnut"></TCDoughnut>
        </div>
        <div className="traffic-channel-group g-2">
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#798bff" }}></span>
              <span>Organic Search</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "3,055" : traffic === "15" ? "4,505" : "4,705"} <small>58.63%</small>
            </div>
          </div>
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#b8acff" }}></span>
              <span>Social Media</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "259" : traffic === "15" ? "1,059" : "1509"} <small>23.94%</small>
            </div>
          </div>
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#ffa9ce" }}></span>
              <span>Referrals</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "438" : traffic === "15" ? "282" : "482"} <small>12.94%</small>
            </div>
          </div>
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#f9db7b" }}></span>
              <span>Others</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "438" : traffic === "15" ? "800" : "1000"} <small>4.49%</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Doughnut Charts with icons</BlockTitle>
              <p>
                Doughnut charts are probably the most commonly used charts. It use to show relational proportions
                between data.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col md="6">
                <PreviewAltCard>
                  <SessionDevice />
                </PreviewAltCard>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import React, { useState } from "react";
import { SessionDoughnut } from "../../charts/analytics/AnalyticsCharts";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Icon } from "../../../Component";

const SessionDevice = () => {
  const [sessionDevice, setSessionDevices] = useState("30");
  return (
    <React.Fragment>
      <div className="card-title-group">
        <div className="card-title card-title-sm">
          <h6 className="title">Sessions by devices</h6>
        </div>
        <UncontrolledDropdown>
          <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
            {sessionDevice} Days
          </DropdownToggle>
          <DropdownMenu right className=" dropdown-menu-xs">
            <ul className="link-list-opt no-bdr">
              <li className={sessionDevice === "7" ? "active" : ""}>
                <DropdownItem
                  tag="a"
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setSessionDevices("7");
                  }}
                >
                  <span>7 Days</span>
                </DropdownItem>
              </li>
              <li className={sessionDevice === "15" ? "active" : ""}>
                <DropdownItem
                  tag="a"
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setSessionDevices("15");
                  }}
                >
                  <span>15 Days</span>
                </DropdownItem>
              </li>
              <li className={sessionDevice === "30" ? "active" : ""}>
                <DropdownItem
                  tag="a"
                  href="#dropdownitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setSessionDevices("30");
                  }}
                >
                  <span>30 Days</span>
                </DropdownItem>
              </li>
            </ul>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="device-status my-auto">
        <div className="device-status-ck">
          <SessionDoughnut className="analytics-doughnut" state={sessionDevice} />
        </div>
        <div className="device-status-group">
          <div className="device-status-data">
            <Icon style={{ color: "#798bff" }} name="monitor"></Icon>
            <div className="title">Desktop</div>
            <div className="amount"> {sessionDevice === "7" ? "50.5" : sessionDevice === "15" ? "70.5" : "84.5"}%</div>
            <div className="change up text-danger">
              <Icon name="arrow-long-up"></Icon>
              {sessionDevice === "7" ? "2.5" : sessionDevice === "15" ? "4.5" : "10.5"}%
            </div>
          </div>
          <div className="device-status-data">
            <Icon style={{ color: "#baaeff" }} name="mobile"></Icon>
            <div className="title">Mobile</div>
            <div className="amount"> {sessionDevice === "7" ? "32.2" : sessionDevice === "15" ? "25.2" : "14.2"}%</div>
            <div className="change up text-danger">
              <Icon name="arrow-long-up"></Icon>
              {sessionDevice === "7" ? "12.5" : sessionDevice === "15" ? "114.5" : "110.5"}%
            </div>
          </div>
          <div className="device-status-data">
            <Icon style={{ color: "#7de1f8" }} name="tablet"></Icon>
            <div className="title">Tablet</div>
            <div className="amount"> {sessionDevice === "7" ? "10.3" : sessionDevice === "15" ? "4.3" : "1.3"}%</div>
            <div className="change up text-danger">
              <Icon name="arrow-long-up"></Icon>
              {sessionDevice === "7" ? "25.5" : sessionDevice === "15" ? "14.5" : "15.5"}%
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ChartWidgets;
