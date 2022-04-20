import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Badge, Button } from "reactstrap";
import {
  BlockBetween,
  BlockDes,
  Block,
  BlockContent,
  BlockHead,
  BlockTitle,
  Col,
  Row,
} from "../../../components/Component";
import { Card } from "reactstrap";
import { pricingTableDataV1, pricingTableDataV2 } from "./PricingTableData";

const PricingTable = () => {
  return (
    <React.Fragment>
      <Head title="Pricing Table"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween className="g-3">
            <BlockContent>
              <BlockTitle>Pricing Table</BlockTitle>
              <BlockDes className="text-soft">
                <p>Choose your pricing plan and start enjoying our service.</p>
              </BlockDes>
            </BlockContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            {pricingTableDataV1.map((item) => {
              return (
                <Col md={6} xxl={3} key={item.id}>
                  <Card className={`card-bordered pricing ${item.tags ? "recommend" : ""}`}>
                    {item.tags && (
                      <Badge color="primary" className="pricing-badge">
                        Recommend
                      </Badge>
                    )}
                    <div className="pricing-head">
                      <div className="pricing-title">
                        <h4 className="card-title title">{item.title}</h4>
                        <p className="sub-text">{item.caption}</p>
                      </div>
                      <div className="card-text">
                        <Row>
                          <Col size={6}>
                            <span className="h4 fw-500">{item.interest}%</span>
                            <span className="sub-text">Daily Interest</span>
                          </Col>
                          <Col size={6}>
                            <span className="h4 fw-500">{item.return}</span>
                            <span className="sub-text">Term Days</span>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="pricing-features">
                        <li>
                          <span className="w-50">Min Deposit</span> -{" "}
                          <span className="ml-auto">${item.minDeposit}</span>
                        </li>
                        <li>
                          <span className="w-50">Max Deposit</span> -{" "}
                          <span className="ml-auto">${item.maxDeposit}</span>
                        </li>
                        <li>
                          <span className="w-50">Deposit Return</span> - <span className="ml-auto">{item.return}</span>
                        </li>
                        <li>
                          <span className="w-50">Total Return</span> -{" "}
                          <span className="ml-auto">{item.totalReturn}%</span>
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
              );
            })}
          </Row>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockContent>
                <BlockTitle>Pricing Table V2</BlockTitle>
                <BlockDes className="text-soft">
                  <p>Choose your pricing plan and start enjoying our service.</p>
                </BlockDes>
              </BlockContent>
            </BlockBetween>
          </BlockHead>
          <Row className="g-gs">
            {pricingTableDataV2.map((item) => {
              return (
                <Col md={6} xxl={3} key={item.id}>
                  <Card className={`card-bordered pricing text-center ${item.tags ? "recommend" : ""}`}>
                    {item.tags && (
                      <Badge color="primary" className="pricing-badge">
                        Recommend
                      </Badge>
                    )}
                    <div className="pricing-body">
                      <div className="pricing-media">
                        <img src={item.logo} alt="" />
                      </div>
                      <div className="pricing-title w-220px mx-auto">
                        <h5 className="title">{item.title}</h5>
                        <span className="sub-text">{item.desc}</span>
                      </div>
                      <div className="pricing-amount">
                        <div className="amount">
                          ${item.amount} <span>/yr</span>
                        </div>
                        <span className="bill">{item.userNumber} User, Billed Yearly</span>
                      </div>
                      <div className="pricing-action">
                        <Button color="primary">Select Plan</Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default PricingTable;
