import React, { useState } from "react";
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
            <Link to={`${process.env.PUBLIC_URL}/invoice-list`} className="link link-sm">
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
