import React, { useState } from "react";
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
};
export default SessionDevice;
