import React, { useState } from "react";
import Icon from "../../../icon/Icon";

const InvestOverview = () => {
  const [tab, setTab] = useState("1");
  return (
    <React.Fragment>
      <div className="card-title-group mb-1">
        <div className="card-title">
          <h6 className="title">Investment Overview</h6>
          <p>
            The investment overview of your platform.{" "}
            <a
              href="#all"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              All Investment
            </a>
          </p>
        </div>
      </div>
      <ul className="nav nav-tabs nav-tabs-card nav-tabs-xs">
        <li className="nav-item" onClick={() => setTab("1")}>
          <a
            href="#overview"
            onClick={(ev) => {
              ev.preventDefault();
            }}
            className={`nav-link${tab === "1" ? " active" : ""}`}
          >
            Overview
          </a>
        </li>
        <li className="nav-item" onClick={() => setTab("2")}>
          <a
            onClick={(ev) => {
              ev.preventDefault();
            }}
            className={`nav-link${tab === "2" ? " active" : ""}`}
            href="#year"
          >
            This Year
          </a>
        </li>
        <li className="nav-item" onClick={() => setTab("3")}>
          <a
            className={`nav-link${tab === "3" ? " active" : ""}`}
            onClick={(ev) => {
              ev.preventDefault();
            }}
            href="#all"
          >
            All Time
          </a>
        </li>
      </ul>
      <div className="tab-content mt-0">
        {tab === "1" && (
          <div className={`tab-pane${tab === "1" && " active"}`}>
            <div className="invest-ov gy-2">
              <div className="subtitle">Currently Actived Investment</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    49,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">56</span>
                    <span className="change up text-danger">
                      <Icon name="arrow-long-up"></Icon>
                      1.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    49,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Paid Profit</div>
                </div>
              </div>
            </div>
            <div className="invest-ov gy-2">
              <div className="subtitle">Investment in this Month</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    49,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">23</span>
                    <span className="change down text-danger">
                      <Icon name="arrow-long-down"></Icon>
                      1.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "2" && (
          <div className={`tab-pane${tab === "2" && " active"}`}>
            <div className="invest-ov gy-2">
              <div className="subtitle">Currently Actived Investment</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    89,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">96</span>
                    <span className="change up text-danger">
                      <Icon name="arrow-long-up"></Icon>
                      2.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    99,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Paid Profit</div>
                </div>
              </div>
            </div>
            <div className="invest-ov gy-2">
              <div className="subtitle">Investment in this Month</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    149,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">83</span>
                    <span className="change down text-danger">
                      <Icon name="arrow-long-down"></Icon>
                      5.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "3" && (
          <div className={`tab-pane${tab === "3" && " active"}`}>
            <div className="invest-ov gy-2">
              <div className="subtitle">Currently Actived Investment</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    249,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">556</span>
                    <span className="change up text-danger">
                      <Icon name="arrow-long-up"></Icon>
                      3.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    149,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Paid Profit</div>
                </div>
              </div>
            </div>
            <div className="invest-ov gy-2">
              <div className="subtitle">Investment in this Month</div>
              <div className="invest-ov-details">
                <div className="invest-ov-info">
                  <div className="amount">
                    249,395.395 <span className="currency currency-usd">USD</span>
                  </div>
                  <div className="title">Amount</div>
                </div>
                <div className="invest-ov-stats">
                  <div>
                    <span className="amount">223</span>
                    <span className="change down text-danger">
                      <Icon name="arrow-long-down"></Icon>
                      4.93%
                    </span>
                  </div>
                  <div className="title">Plans</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default InvestOverview;
