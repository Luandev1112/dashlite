import React, { useState } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import SaleRevenue from "../../components/partials/default/sale-revenue/SaleRevenue";
import { FormGroup, Label, Input, Badge } from "reactstrap";
import ActiveSubscription from "../../components/partials/default/active-subscription/ActiveSubscription";
import AvgSubscription from "../../components/partials/default/avg-subscription/AvgSubscription";
import SalesOverview from "../../components/partials/default/sales-overview/SalesOverview";
import TransactionTable from "../../components/partials/default/transaction/Transaction";
import RecentActivity from "../../components/partials/default/recent-activity/Activity";
import NewsUsers from "../../components/partials/default/new-users/User";
import Support from "../../components/partials/default/support-request/Support";
import Notifications from "../../components/partials/default/notification/Notification";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { companiesData } from "../components/investments/InvestmentsData";
import CompanyCard from "../components/investments/CompanyCard";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PieChartExample,
  Icon,
  Button,
  Row,
  Col,
  PreviewCard,
  PreviewAltCard,
  BlockBetween,
} from "../../components/Component";
import {
  doughnutChartData,
} from "../components/charts/ChartData";

const Portfolio = () => {
  const [sm, updateSm] = useState(false);
  const [currencyUnit, setCurrencyUnit] = useState('$');
  const [totalPrice, setTotalPrice] = useState(100000);
  return (
    <React.Fragment>
      <Head title="Portfolio"></Head>
      <Content>
        <Block>
          <Row className="g-gs">
            <Col xxl="8" md="8" >
              <Row className="g-gs">
                <Col lg="7" xxl="12">

                  <Row className="g-gs" >
                    <Col sm="12" lg="12" xxl="12">
                      <FormGroup className="search-bar">
                        <div className="form-control-wrap">
                          <div className="form-icon form-icon-left">
                            <Icon name="search" />
                          </div>
                          <input className="form-control" type="text" id="default-2" placeholder="Search" />
                        </div>
                        <Button color="primary" className="refresh-button">
                          <Icon name="redo" />
                          <span>Refresh</span>
                        </Button>
                        <Icon name="bell" className="notification" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="g-gs chart-block" >
                    <Col sm="12" lg="12" xxl="12">
                      <BlockTitle className="portfolio-title">PORTFOLIO</BlockTitle>
                      <PreviewCard className="pie-chart">
                        <PieChartExample className="pie-chart" data={doughnutChartData} />
                      </PreviewCard>
                    </Col>
                  </Row>

                  <Row className="g-gs investment-block" >
                    <Col sm="12" lg="12" xxl="12">
                      <h6 className="investment-title">TOTAL INVESTMENT</h6>
                      <BlockTitle className="investment-price">
                        <span className="currency-unit">{currencyUnit}</span>
                        <span className="total-price">{totalPrice}</span>
                      </BlockTitle>
                    </Col>
                  </Row>

                  <Row className="g-gs company-block">
                    {
                      companiesData.map((data, i)=>{
                        return (
                          <Col sm="12" xxl="12">
                            <CompanyCard key={i} data={data} />
                          </Col>
                        );             
                      })
                    }
                    <Col sm="12" lg="12">

                    </Col>
                  </Row>
                </Col>
                <Col lg="5" xxl="12">
                  <Row className="g-gs">
                    <Col sm="6" lg="12" xxl="6">
                      <PreviewAltCard>
                        <ActiveSubscription />
                      </PreviewAltCard>
                    </Col>
                    <Col sm="6" lg="12" xxl="6">
                      <PreviewAltCard>
                        <AvgSubscription />
                      </PreviewAltCard>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xxl="4" md="4" >
              <PreviewAltCard className="h-100">
                <SalesOverview />
              </PreviewAltCard>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Portfolio;
