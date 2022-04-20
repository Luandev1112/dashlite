import React from "react";
import Icon from "../../../icon/Icon";
import Button from "../../../button/Button";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

const ActionCenter = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="card-inner-group">
        <div className="card-inner card-inner-md">
          <div className="card-title-group">
            <CardTitle>
              <h6 className="title">Action Center</h6>
            </CardTitle>
            <div className="card-tools mr-n1">
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                  <Icon name="more-h"></Icon>
                </DropdownToggle>
                <DropdownMenu right>
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <DropdownItem
                        tag="a"
                        href="#dropdownitem"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="setting"></Icon>
                        <span>Action Settings</span>
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
                        <Icon name="notify"></Icon>
                        <span>Push Notification</span>
                      </DropdownItem>
                    </li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="cc-alt-fill"></Icon>
              <div className="title">Pending Buy/Sell Orders</div>
              <p>
                We have still <strong>40 buy orders</strong> and <strong>12 sell orders</strong>, thats need to review
                &amp; take necessary action.
              </p>
            </div>
            <Button className="btn-icon btn-trigger mr-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="help-fill"></Icon>
              <div className="title">Support Messages</div>
              <p>
                Here is <strong>18 new</strong> support message.{" "}
              </p>
            </div>
            <Button className="btn-icon btn-trigger mr-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="wallet-fill"></Icon>
              <div className="title">Upcoming Deposit</div>
              <p>
                Here is <strong>7 upcoming</strong> deposit need to review.
              </p>
            </div>
            <Button className="btn-icon btn-trigger mr-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ActionCenter;
