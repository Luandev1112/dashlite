import React, { useContext } from "react";
import { Card, Button, Badge } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
} from "../../../../components/Component";
import { pricingTableDataV2 } from "../Data";
import { FileManagerContext } from "../FileManagerContext";

const Pricing = ({ toggleScreenLg }) => {
  const { planData } = useContext(FileManagerContext);
  const [plan, setPlan] = planData;

  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockBetween className="position-relative">
          <BlockHeadContent>
            <BlockTitle page>Plan Pricing</BlockTitle>
          </BlockHeadContent>
          <BlockHeadContent>
            <ul className="nk-block-tools g-1">
              <li className="d-lg-none mr-n1">
                <a
                  href="#folder"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleScreenLg();
                  }}
                  className="btn btn-trigger btn-icon toggle"
                >
                  <Icon name="menu-alt-r"></Icon>
                </a>
              </li>
            </ul>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <Block>
        <Row className="g-gs">
          {pricingTableDataV2.map((item) => {
            return (
              <Col md={6} xxl={3} key={item.id}>
                <Card
                  className={`card-bordered pricing text-center ${item.tags ? "recommend" : ""} ${
                    plan === item.title ? "border-primary" : ""
                  }`}
                >
                  {plan === item.title && (
                    <Badge color="primary" className="pricing-badge">
                      Current Plan
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
                      {plan === item.title ? (
                        <Button color="primary">Plan Selected</Button>
                      ) : (
                        <Button color="light" onClick={() => setPlan(item.title)}>
                          Choose Plan
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Block>
    </React.Fragment>
  );
};

export default Pricing;
