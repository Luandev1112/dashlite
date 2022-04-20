import React, { useEffect, useState } from "react";
import Icon from "../../../icon/Icon";
import UserAvatar from "../../../user/UserAvatar";
import { transactionData } from "./TransactionData";
import { CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow } from "../../../table/DataTable";
import { Link } from "react-router-dom";

const TransactionTable = () => {
  const [data, setData] = useState(transactionData);
  const [trans, setTrans] = useState("");
  useEffect(() => {
    let filteredData;
    if (trans === "Due") {
      filteredData = transactionData.filter((item) => item.status === "Due");
    } else if (trans === "Paid") {
      filteredData = transactionData.filter((item) => item.status === "Paid");
    } else {
      filteredData = transactionData;
    }
    setData(filteredData);
  }, [trans]);

  const DropdownTrans = () => {
    return (
      <UncontrolledDropdown>
        <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-icon btn-trigger">
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-plain">
            <li>
              <DropdownItem
                tag="a"
                href="#view"
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
                href="#invoice"
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
                href="#print"
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
    );
  };
  return (
    <React.Fragment>
      <div className="card-inner">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">
              <span className="mr-2">Transaction</span>{" "}
              <Link to={`${process.env.PUBLIC_URL}/transaction-basic`} className="link d-none d-sm-inline">
                See History
              </Link>
            </h6>
          </CardTitle>
          <div className="card-tools">
            <ul className="card-tools-nav">
              <li className={trans === "Paid" ? "active" : ""} onClick={() => setTrans("Paid")}>
                <a
                  href="#paid"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Paid</span>
                </a>
              </li>
              <li className={trans === "Due" ? "active" : ""} onClick={() => setTrans("Due")}>
                <a
                  href="#pending"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Pending</span>
                </a>
              </li>
              <li className={trans === "" ? "active" : ""} onClick={() => setTrans("")}>
                <a
                  href="#all"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>All</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DataTableBody className="border-top" bodyclass="nk-tb-orders">
        <DataTableHead>
          <DataTableRow>
            <span>Order No.</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Customer</span>
          </DataTableRow>
          <DataTableRow size="md">
            <span>Date</span>
          </DataTableRow>
          <DataTableRow size="lg">
            <span>Ref</span>
          </DataTableRow>
          <DataTableRow>
            <span>Amount</span>
          </DataTableRow>
          <DataTableRow>
            <span className="d-none d-sm-inline">Status</span>
          </DataTableRow>
          <DataTableRow>
            <span>&nbsp;</span>
          </DataTableRow>
        </DataTableHead>
        {data.map((item, idx) => {
          return (
            <DataTableItem key={idx}>
              <DataTableRow>
                <span className="tb-lead">
                  <a href="#order">{item.order}</a>
                </span>
              </DataTableRow>
              <DataTableRow size="sm">
                <div className="user-card">
                  <UserAvatar size="sm" theme={item.theme} text={item.initial} image={item.img}></UserAvatar>
                  <div className="user-name">
                    <span className="tb-lead">{item.name}</span>
                  </div>
                </div>
              </DataTableRow>
              <DataTableRow size="md">
                <span className="tb-sub">{item.date}</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="tb-sub text-primary">{item.ref}</span>
              </DataTableRow>
              <DataTableRow>
                <span className="tb-sub tb-amount">
                  {item.amount} <span>USD</span>
                </span>
              </DataTableRow>
              <DataTableRow>
                <span
                  className={`badge badge-dot badge-dot-xs badge-${
                    item.status === "Paid" ? "success" : item.status === "Due" ? "warning" : "danger"
                  }`}
                >
                  {item.status}
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-col-action">
                <DropdownTrans />
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </DataTableBody>
    </React.Fragment>
  );
};
export default TransactionTable;
