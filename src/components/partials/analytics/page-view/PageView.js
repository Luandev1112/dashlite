import React, { useEffect, useState } from "react";
import { pagePerUserData, pagePerUserDataSet2, pagePerUserDataSet3 } from "../../charts/analytics/AnalyticsData";
import { DataTableRow, DataTableHead, DataTableItem } from "../../../table/DataTable";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";

const PageViewer = () => {
  const [pageViewer, setPageViewer] = useState("30");
  const [data, setData] = useState(pagePerUserData);
  useEffect(() => {
    let newData;
    if (pageViewer === "7") {
      newData = pagePerUserDataSet2;
    } else if (pageViewer === "15") {
      newData = pagePerUserDataSet3;
    } else {
      newData = pagePerUserData;
    }
    setData(newData);
  }, [pageViewer]);
  return (
    <React.Fragment>
      <div className="card-inner mb-n2">
        <div className="card-title-group">
          <div className="card-title card-title-sm">
            <h6 className="title">Page View by Users</h6>
          </div>
          <UncontrolledDropdown className="drodown">
            <DropdownToggle className="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white">
              {pageViewer} Days
            </DropdownToggle>
            <DropdownMenu right className=" dropdown-menu-xs">
              <ul className="link-list-opt no-bdr">
                <li className={pageViewer === "7" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageViewer("7");
                    }}
                  >
                    <span>7 Days</span>
                  </DropdownItem>
                </li>
                <li className={pageViewer === "15" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageViewer("15");
                    }}
                  >
                    <span>15 Days</span>
                  </DropdownItem>
                </li>
                <li className={pageViewer === "30" ? "active" : ""}>
                  <DropdownItem
                    tag="a"
                    href="#dropdownitem"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageViewer("30");
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
      <div className="nk-tb-list is-compact">
        <DataTableHead className="nk-tb-item nk-tb-head">
          <DataTableRow>
            <span>Page</span>
          </DataTableRow>
          <DataTableRow className="text-right">
            <span>Page Views</span>
          </DataTableRow>
        </DataTableHead>
        {data.map((item) => {
          return (
            <DataTableItem key={item.id}>
              <DataTableRow>
                <span className="tb-sub">
                  <span>{item.link}</span>
                </span>
              </DataTableRow>
              <DataTableRow className="text-right">
                <span className="tb-sub tb-amount">
                  <span>{item.views}</span>
                </span>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default PageViewer;
