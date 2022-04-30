import React, { useEffect, useState } from "react";
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
import PortfolioImage from "../../images/items/portfolio.svg";
import { SellerCard, SellerHead, SellerBody } from "../seller/SellerCard";
import { sellerData } from "../seller/sellerData";
import { setDeadline } from "../../utils/Utils";
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
  const [sellerIndex, setSellerIndex] = useState(-1);
  const [seller, setSeller] = useState({});
  const team = [
    {
      value: "Abu Bin",
      label: "Abu Bin",
      image: null,
      theme: "purple",
    },
    { value: "Milagros Betts", label: "Milagros Betts", theme: "pink" },
    { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
  ];
  useEffect(()=>{
    if(sellerIndex > 0) {
      sellerData.forEach((item) => {
        if (item.id == sellerIndex) {
          setSeller(item);
        }
      });
    }
  }, [sellerIndex, sellerData]);
  return (
    <React.Fragment>
      <Head title="Portfolio"></Head>
      <Content>
        <Block>
          <Row className="g-gs">
            <Col xxl="5" md="5" >
              <Row className="g-gs">
                <Col lg="12" xxl="12">
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
                        <span className="total-price">{totalPrice.toLocaleString()}</span>
                      </BlockTitle>
                    </Col>
                  </Row>

                  <Row className="g-gs company-block">
                    {
                      companiesData.map((data, i)=>{
                        return (
                          <Col sm="12" xxl="12">
                            <CompanyCard key={i} data={data} setSellerIndex={setSellerIndex} />
                          </Col>
                        );             
                      })
                    }
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xxl="7" md="7" >
              <Row className="g-gs">
                {sellerIndex == -1 ? (
                  <React.Fragment>
                    <Col lg="5" xxl="5" className="text-center portfolio-block">
                      <img className="portfolio-img" src={PortfolioImage} alt="Portfolio" />
                    </Col>
                    <Col lg="7" xxl="7">
                    </Col>
                  </React.Fragment>
                ) : (
                  <Col lg="12" xxl="12">
                    <Row className="g-gs">
                      <Col sm="12" lg="12">
                        <SellerCard>
                          <SellerHead 
                            name={seller.name} 
                            logo={seller.logo} 
                            score={seller.score}
                            favorite={seller.favorite}
                          />
                          <SellerBody
                            seller={seller}
                          ></SellerBody>
                        </SellerCard>
                      </Col>
                      <Col sm="12" lg="12" className="desc-block">
                        <div className="desc-head">
                          <h6>{ seller.long_name }</h6>
                          <span className="start-date">SINCE {seller.start_date}</span>
                        </div>
                        <div className="desc-body">
                          <p>{seller.description}</p>
                        </div>
                      </Col>
                      <Col lg="12" xxl="12" className="history-block">
                        <div className="history-head">
                           <h6>Deal History</h6>
                           <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="btn btn-icon btn-trigger">
                              <Icon name="more-h"></Icon>
                            </DropdownToggle>
                            <DropdownMenu right>
                              <ul className="link-list-opt no-bdr">
                                <li>
                                  <a
                                    href="#view"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <Icon name="eye"></Icon>
                                    <span>View Project</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#edit"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <Icon name="edit"></Icon>
                                    <span>Edit Project</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#markasdone"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <Icon name="check-round-cut"></Icon>
                                    <span>Mark As Done</span>
                                  </a>
                                </li>
                              </ul>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Portfolio;
