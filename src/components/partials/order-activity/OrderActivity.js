import React, { useEffect, useState } from "react";
import Icon from "../../icon/Icon";
import { orderActivityData } from "./OrderData";
import { CardTitle } from "reactstrap";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow } from "../../table/DataTable";
import { Link } from "react-router-dom";

const OrderActivity = () => {
  const [orderData, setOrderData] = useState(orderActivityData);
  const [orderActivity, setActivity] = useState("");
  useEffect(() => {
    let data;
    if (orderActivity === "Buy") {
      data = orderActivityData.filter((item) => item.desc.split(" ")[0] === "Buy");
    } else if (orderActivity === "Sell") {
      data = orderActivityData.filter((item) => item.desc.split(" ")[0] === "Sell");
    } else {
      data = orderActivityData;
    }
    setOrderData(data);
  }, [orderActivity]);
  return (
    <React.Fragment>
      <div className="card-inner">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">
              <span className="mr-2">Orders Activities</span>{" "}
              <Link to={`${process.env.PUBLIC_URL}/transaction-crypto`} className="link d-none d-sm-inline">
                See History
              </Link>
            </h6>
          </CardTitle>
          <div className="card-tools">
            <ul className="card-tools-nav">
              <li className={orderActivity === "Buy" ? "active" : ""} onClick={() => setActivity("Buy")}>
                <a
                  href="#buy"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Buy</span>
                </a>
              </li>
              <li className={orderActivity === "Sell" ? "active" : ""} onClick={() => setActivity("Sell")}>
                <a
                  href="#sell"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Sell</span>
                </a>
              </li>
              <li className={orderActivity === "" ? "active" : ""} onClick={() => setActivity("")}>
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
          <DataTableRow className="nk-tb-orders-type">
            <span>Type</span>
          </DataTableRow>
          <DataTableRow>
            <span>Desc</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Date</span>
          </DataTableRow>
          <DataTableRow size="xl">
            <span>Time</span>
          </DataTableRow>
          <DataTableRow size="xxl">
            <span>Ref</span>
          </DataTableRow>
          <DataTableRow size="sm" className="text-right">
            <span>USD Amount</span>
          </DataTableRow>
          <DataTableRow className="text-right">
            <span>Amount</span>
          </DataTableRow>
        </DataTableHead>
        {orderData.map((item) => {
          return (
            <DataTableItem key={item.id}>
              <DataTableRow className="nk-tb-orders-type">
                <ul className="icon-overlap">
                  <li>
                    <Icon name={item.icon1}></Icon>
                  </li>
                  <li>
                    <Icon name={item.icon2}></Icon>
                  </li>
                </ul>
              </DataTableRow>
              <DataTableRow>
                <span className="tb-lead">{item.desc}</span>
              </DataTableRow>
              <DataTableRow size="sm">
                <span className="tb-sub">{item.date}</span>
              </DataTableRow>
              <DataTableRow size="xl">
                <span className="tb-sub">{item.time}</span>
              </DataTableRow>
              <DataTableRow size="xxl">
                <span className="tb-sub text-primary">{item.ref}</span>
              </DataTableRow>
              <DataTableRow size="sm" className="text-right">
                <span className="tb-sub tb-amount">
                  {item.usd} <span>USD</span>
                </span>
              </DataTableRow>
              <DataTableRow className="text-right">
                <span className="tb-sub tb-amount ">
                  {item.amount} <span>BTC</span>
                </span>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </DataTableBody>
    </React.Fragment>
  );
};
export default OrderActivity;
