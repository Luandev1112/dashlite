import React from "react";
import UserAvatar from "../../../user/UserAvatar";
import Icon from "../../../icon/Icon";
import { DropdownItem, DropdownMenu, DropdownToggle, Progress, UncontrolledDropdown } from "reactstrap";
import { DataTableHead, DataTableItem, DataTableRow } from "../../../table/DataTable";
import { findUpper } from "../../../../utils/Utils";
import { investData } from "./InvestData";

const RecentInvest = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <div className="card-title">
            <h6 className="title">Recent Investment</h6>
          </div>
          <div className="card-tools">
            <a
              href="#all"
              onClick={(ev) => {
                ev.preventDefault();
              }}
              className="link"
            >
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="nk-tb-list">
        <DataTableHead>
          <DataTableRow>
            <span>Plan</span>{" "}
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Who</span>
          </DataTableRow>
          <DataTableRow size="lg">
            <span>Date</span>
          </DataTableRow>
          <DataTableRow>
            <span>Amount</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>&nbsp;</span>
          </DataTableRow>
          <DataTableRow>
            <span>&nbsp;</span>
          </DataTableRow>
        </DataTableHead>
        {investData.map((item) => {
          return (
            <DataTableItem key={item.id}>
              <DataTableRow>
                <div className="align-center">
                  <UserAvatar size="sm" theme="light" text={item.plan}></UserAvatar>
                  <span className="tb-sub ml-2">
                    {item.title} <span className="d-none d-md-inline">- {item.desc}</span>
                  </span>
                </div>
              </DataTableRow>
              <DataTableRow size="sm">
                <div className="user-card">
                  <UserAvatar size="sm" theme={item.theme} text={findUpper(item.who)} />
                  <div className="user-name">
                    <span className="tb-lead">{item.who}</span>
                  </div>
                </div>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="tb-sub">{item.date}</span>
              </DataTableRow>
              <DataTableRow>
                <span className="tb-sub tb-amount">
                  {item.amount} <span>BTC</span>
                </span>
              </DataTableRow>
              <DataTableRow size="sm">
                {item.status === "Completed" ? (
                  <span className="tb-sub text-success">Completed</span>
                ) : (
                  <Progress className="progress-sm w-80px" value={item.status}></Progress>
                )}
              </DataTableRow>
              <DataTableRow className="nk-tb-col-action">
                <UncontrolledDropdown>
                  <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger">
                    <Icon name="chevron-right"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xs">
                    <ul className="link-list-plain">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          View
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          Invoice
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          Print
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default RecentInvest;
