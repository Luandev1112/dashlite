import React from "react";
import UserAvatar from "../../../user/UserAvatar";
import { supportData } from "./SupportData";
import { CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Support Requests</h6>
          </CardTitle>
          <div className="card-tools">
            <Link to={`${process.env.PUBLIC_URL}/app-messages`} className="link">
              All Tickets
            </Link>
          </div>
        </div>
      </div>
      <ul className="nk-support">
        {supportData.map((item, idx) => {
          return (
            <li className="nk-support-item" key={idx}>
              <UserAvatar image={item.img} theme={item.theme} text={item.initial} />
              <div className="nk-support-content">
                <div className="title">
                  <span>{item.name}</span>
                  <span
                    className={`badge badge-dot badge-dot-xs badge-${
                      item.status === "Solved" ? "success" : item.status === "Pending" ? "warning" : "info"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p>{item.text}</p>
                <span className="time">{item.time}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};
export default Support;
