import React, { useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import InvestOverview from "../components/partials/invest/invest-overview/InvestOverview";
import InvestPlan from "../components/partials/invest/invest-plan/InvestPlan";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import RecentActivity from "../components/partials/default/recent-activity/Activity";
import Notifications from "../components/partials/default/notification/Notification";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
  TooltipComponent,
} from "../components/Component";
import { BalanceBarChart, DepositBarChart, WithdrawBarChart } from "../components/partials/charts/invest/InvestChart";

const InvestHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Invest Dashboard" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Investment Dashboard</BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to Crypto Invest Dashboard</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <Button color="primary" outline className="btn-dim btn-white">
                        <Icon name="download-cloud"></Icon>
                        <span>Export</span>
                      </Button>
                    </li>
                    <li>
                      <Button color="primary" outline className="btn-dim btn-white">
                        <Icon name="reports"></Icon>
                        <span>Reports</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <UncontrolledDropdown>
                        <DropdownToggle color="transparent" className="dropdown-toggle btn btn-icon btn-primary">
                          <Icon name="plus"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                href="#adduser"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="user-add-fill"></Icon>
                                <span>Add User</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#addorder"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="coin-alt-fill"></Icon>
                                <span>Add Order</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#addpage"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="note-add-fill-c"></Icon>
                                <span>Add Page</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col md="4">
              <PreviewAltCard className="card-full">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Total Deposit</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-deposit"
                      text="Total Deposited"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    49,595.34 <span className="currency currency-usd">USD</span>
                  </span>
                  <span className="change up text-success">
                    <Icon name="arrow-long-up"></Icon>1.93%
                  </span>
                </div>
                <div className="invest-data">
                  <div className="invest-data-amount g-2">
                    <div className="invest-data-history">
                      <div className="title">This Month</div>
                      <span className="amount">
                        2,940.59 <span className="currency currency-usd"> USD</span>
                      </span>
                    </div>
                    <div className="invest-data-history">
                      <div className="title">This Week</div>
                      <span className="amount">
                        1,259.28 <span className="currency currency-usd"> USD</span>
                      </span>
                    </div>
                  </div>
                  <div className="invest-data-ck">
                    <DepositBarChart />
                  </div>
                </div>
              </PreviewAltCard>
            </Col>

            <Col md="4">
              <PreviewAltCard className="card-full">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Total Withdraw</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-withdraw"
                      text="Total Withdrawn"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    49,595.34 <span className="currency currency-usd">USD</span>
                  </span>
                  <span className="change down text-danger">
                    <Icon name="arrow-long-down"></Icon>1.93%
                  </span>
                </div>
                <div className="invest-data">
                  <div className="invest-data-amount g-2">
                    <div className="invest-data-history">
                      <div className="title">This Month</div>
                      <div className="amount">
                        2,940.59 <span className="currency currency-usd">USD</span>
                      </div>
                    </div>
                    <div className="invest-data-history">
                      <div className="title">This Week</div>
                      <div className="amount">
                        1,259.28 <span className="currency currency-usd">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="invest-data-ck">
                    <WithdrawBarChart />
                  </div>
                </div>
              </PreviewAltCard>
            </Col>

            <Col md="4">
              <PreviewAltCard className="card-full">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Balance in Account</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-balance"
                      text="Total Balance"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    79,358.50 <span className="currency currency-usd">USD</span>
                  </span>
                </div>
                <div className="invest-data">
                  <div className="invest-data-amount g-2">
                    <div className="invest-data-history">
                      <div className="title">This Month</div>
                      <div className="amount">
                        2,940.59 <span className="currency currency-usd">USD</span>
                      </div>
                    </div>
                    <div className="invest-data-history">
                      <div className="title">This Week</div>
                      <div className="amount">
                        1,259.28 <span className="currency currency-usd">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="invest-data-ck">
                    <BalanceBarChart />
                  </div>
                </div>
              </PreviewAltCard>
            </Col>

            <Col md="6" xxl="4">
              <PreviewAltCard className="card-full">
                <InvestOverview />
              </PreviewAltCard>
            </Col>

            <Col md="6" xxl="4">
              <InvestPlan />
            </Col>

            <Col md="6" xxl="4">
              <Card className="card-bordered card-full">
                <RecentActivity />
              </Card>
            </Col>
            <Col md="6" xxl="4">
              <Card className="card-bordered h-100">
                <Notifications />
              </Card>
            </Col>
            <Col xl="12" xxl="8">
              <Card className="card-bordered card-full">
                <RecentInvest />
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default InvestHomePage;
