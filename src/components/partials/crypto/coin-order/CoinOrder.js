import React, { useState } from "react";
import Icon from "../../../icon/Icon";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { HorizontalBarChart } from "../../charts/default/Charts";

const CoinOrder = () => {
  const [coinOrder, setOrder] = useState("");
  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-2">
        <CardTitle className="card-title">
          <h6 className="title">Top Coin in Orders</h6>
          <p>
            In last {coinOrder === "day" ? "30 days" : coinOrder === "month" ? "3 months" : "15 days"} buy and sells
            overview.
          </p>
        </CardTitle>
        <div className="card-tools mt-n1 mr-n1">
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
              <Icon name="more-h"></Icon>
            </DropdownToggle>
            <DropdownMenu right>
              <ul className="link-list-opt no-bdr">
                <li className={coinOrder === "" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setOrder("");
                    }}
                  >
                    <span>15 Days</span>
                  </DropdownItem>
                </li>
                <li className={coinOrder === "day" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setOrder("day");
                    }}
                  >
                    <span>30 Days</span>
                  </DropdownItem>
                </li>
                <li className={coinOrder === "month" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setOrder("month");
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
      <div className="nk-coin-ovwg">
        <div className="nk-coin-ovwg-ck">
          <HorizontalBarChart state={coinOrder} />
        </div>
        <ul className="nk-coin-ovwg-legends">
          <li>
            <span className="dot dot-lg sq" style={{ background: "#f98c45" }}></span>
            <span>Bitcoin</span>
          </li>
          <li>
            <span className="dot dot-lg sq" style={{ background: "#9cabff" }}></span>
            <span>Ethereum</span>
          </li>
          <li>
            <span className="dot dot-lg sq" style={{ background: "#8feac5" }}></span>
            <span>NioCoin</span>
          </li>
          <li>
            <span className="dot dot-lg sq" style={{ background: "#6b79c8" }}></span>
            <span>Litecoin</span>
          </li>
          <li>
            <span className="dot dot-lg sq" style={{ background: "#79f1dc" }}></span>
            <span>Bitcoin Cash</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default CoinOrder;
