import React, { useState } from "react";
import { Map } from "../../charts/analytics/AnalyticsCharts";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const UserMap = () => {
  const [mapState, setMapState] = useState("30");
  return (
    <React.Fragment>
      <div className="card-title-group">
        <div className="card-title card-title-sm">
          <h6 className="title">Users by country</h6>
        </div>
        <UncontrolledDropdown>
          <DropdownToggle className="dropdown-indicator btn btn-sm btn-outline-light btn-white">
            {mapState} Days
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xs">
            <ul className="link-list-opt no-bdr">
              <li className={mapState === "7" ? "active" : ""}>
                <DropdownItem
                  tag="a"
                  href="#dropdownitem"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setMapState("7");
                  }}
                >
                  <span>7 Days</span>
                </DropdownItem>
              </li>
              <li className={mapState === "15" ? "active" : ""}>
                <DropdownItem
                  tag="a"
                  href="#dropdownitem"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setMapState("15");
                  }}
                >
                  <span>15 Days</span>
                </DropdownItem>
              </li>
              <li className={mapState === "30" ? "active" : ""}>
                <DropdownItem
                  tag="a"
                  href="#dropdownitem"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setMapState("30");
                  }}
                >
                  <span>30 Days</span>
                </DropdownItem>
              </li>
            </ul>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="analytics-map">
        <Map set={mapState} />
        <table className="analytics-map-data-list">
          <tbody>
            <tr className="analytics-map-data">
              <td className="country">United States</td>
              <td className="amount">{mapState === "7" ? "8,005" : mapState === "15" ? "10,025" : "12,094"}</td>
              <td className="percent"> {mapState === "7" ? "5.96" : mapState === "15" ? "15.96" : "23.54"}%</td>
            </tr>
            <tr className="analytics-map-data">
              <td className="country">India</td>
              <td className="amount"> {mapState === "7" ? "2,505" : mapState === "15" ? "5,058" : "7,852"}</td>
              <td className="percent"> {mapState === "7" ? "2.96" : mapState === "15" ? "4.18" : "7.19"}%</td>
            </tr>
            <tr className="analytics-map-data">
              <td className="country">Turkey</td>
              <td className="amount"> {mapState === "7" ? "1,502" : mapState === "15" ? "4,252" : "6,383"}</td>
              <td className="percent"> {mapState === "7" ? "2.16" : mapState === "15" ? "3.96" : "6.54"}%</td>
            </tr>
            <tr className="analytics-map-data">
              <td className="country">Bangladesh</td>
              <td className="amount"> {mapState === "7" ? "1,839" : mapState === "15" ? "2,590" : "4,749"}</td>
              <td className="percent"> {mapState === "7" ? "2.75" : mapState === "15" ? "3.35" : "5.29"}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default UserMap;
