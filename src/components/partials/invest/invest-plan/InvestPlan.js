import React, { useEffect, useState } from "react";
import Icon from "../../../icon/Icon";
import { Progress, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap";
import { PreviewAltCard } from "../../../preview/Preview";
import { PurchasePlanChart } from "../../charts/invest/InvestChart";
import { investData, investDataSet2, investDataSet3, investDataSet4 } from "./InvestData";

const InvestPlan = () => {
  const [planSet, setPlanSet] = useState("30");
  const [data, setData] = useState(investData);

  useEffect(() => {
    let newData;
    if (planSet === "7") {
      newData = investDataSet2;
    } else if (planSet === "15") {
      newData = investDataSet3;
    } else {
      newData = investDataSet4;
    }
    setData(newData);
  }, [planSet]);

  return (
    <PreviewAltCard className="card-full" bodyClass="d-flex flex-column h-100">
      <div className="card-title-group mb-3">
        <div className="card-title">
          <h6 className="title">Top Invested Plan</h6>
          <p>In last {planSet === "7" ? "7" : planSet === "15" ? "15" : "30"} days top invested schemes.</p>
        </div>
        <div className="card-tools mt-n4 mr-n1">
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
              <Icon name="more-h"></Icon>
            </DropdownToggle>
            <DropdownMenu right>
              <ul className="link-list-opt no-bdr">
                <li className={planSet === "7" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPlanSet("7");
                    }}
                  >
                    <span>7 Days</span>
                  </DropdownItem>
                </li>
                <li className={planSet === "15" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPlanSet("15");
                    }}
                  >
                    <span>15 Days</span>
                  </DropdownItem>
                </li>
                <li className={planSet === "30" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPlanSet("30");
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
      <div className="progress-list gy-3">
        {data.map((item, idx) => {
          return (
            <div className="progress-wrap" key={idx}>
              <div className="progress-text">
                <div className="progress-label">{item.pack}</div>
                <div className="progress-amount">{item.amount}%</div>
              </div>
              <Progress className="progress-md" value={item.amount} color={item.color}></Progress>
            </div>
          );
        })}
      </div>
      <div className="invest-top-ck mt-auto">
        <PurchasePlanChart set={planSet} />
      </div>
    </PreviewAltCard>
  );
};
export default InvestPlan;
