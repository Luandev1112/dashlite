import React, { useEffect, useState } from "react";
import Icon from "../../../icon/Icon";
import Progress from "../../../progress/Progress";
import { browserUserData, browserUserDataSet2, browserUserDataSet3 } from "../../charts/analytics/AnalyticsData";
import { DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { DataTableRow, DataTableHead, DataTableItem } from "../../../table/DataTable";

const BrowserUser = () => {
  const [browser, setBrowser] = useState("30");
  const [data, setData] = useState(browserUserData);
  useEffect(() => {
    let newData;
    if (browser === "7") {
      newData = browserUserDataSet2;
    } else if (browser === "15") {
      newData = browserUserDataSet3;
    } else {
      newData = browserUserData;
    }
    setData(newData);
  }, [browser]);
  return (
    <React.Fragment>
      <div className="card-inner mb-n2">
        <div className="card-title-group">
          <div className="card-title card-title-sm">
            <h6 className="title">Browser Used by Users</h6>
          </div>
          <UncontrolledDropdown className="drodown">
            <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
              {browser} Days
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-xs">
              <ul className="link-list-opt no-bdr">
                <li className={browser === "7" ? "active" : ""}>
                  <DropdownItem
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setBrowser("7");
                    }}
                  >
                    <span>7 Days</span>
                  </DropdownItem>
                </li>
                <li className={browser === "15" ? "active" : ""}>
                  <DropdownItem
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setBrowser("15");
                    }}
                  >
                    <span>15 Days</span>
                  </DropdownItem>
                </li>
                <li className={browser === "30" ? "active" : ""}>
                  <DropdownItem
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setBrowser("30");
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

      <div className="nk-tb-list is-loose">
        <DataTableHead>
          <DataTableRow>
            <span>Browser</span>
          </DataTableRow>
          <DataTableRow className="text-right">
            <span>Users</span>
          </DataTableRow>
          <DataTableRow>
            <span>% Users</span>
          </DataTableRow>
          <DataTableRow className="tb-col-sm text-right">
            <span>Bounce Rate</span>
          </DataTableRow>
        </DataTableHead>
        {data.map((item) => {
          return (
            <DataTableItem key={item.id}>
              <DataTableRow>
                <div className="icon-text">
                  <Icon className={`text-${item.theme}`} name="globe"></Icon>
                  <span className="tb-lead">{item.browser}</span>
                </div>
              </DataTableRow>
              <DataTableRow className="text-right">
                <span className="tb-sub tb-amount">
                  <span>{item.users}</span>
                </span>
              </DataTableRow>
              <DataTableRow>
                <Progress value={item.userPercentage} size="md" className="progress-alt bg-transparent" />
              </DataTableRow>
              <DataTableRow className="tb-col-sm text-right">
                <span className="tb-sub">{item.bounceRate}%</span>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default BrowserUser;
