import React from "react";
import { UserAvatar, Icon, PreviewCard, Rating } from "../../components/Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress } from "reactstrap";
import { setDeadlineDays } from "../../utils/Utils";

export const SellerCard = ({ ...props }) => {
  return (
    <React.Fragment>
      <PreviewCard className="h-100 seller-card">
        <div className="seller">{props.children}</div>
      </PreviewCard>
    </React.Fragment>
  );
};

export const SellerHead = ({ name, score, favorite, logo }) => {
  return (
    <div className="seller-head">
      <div
        onClick={(ev) => {
          ev.preventDefault();
        }}
        className="seller-title"
      >
        <img className="logo" src={logo} />
        <div className="seller-info">
          <h6 className="title">{name}, <small>LTD</small></h6>
        </div>
        <div className="score">
          <Rating type="star" className="text-success" initVal={parseInt(score)}></Rating>
        </div>
      </div>
      <div className="seller-group">
        <div className="favorite">
          {favorite ? (
            <Icon name="heart-fill" />
          ) : (
            <Icon name="heart" />
          )}
          </div>
        <div className="message">
          <Icon name="chat" />
        </div>
      </div>
    </div>
  );
};

export const SellerBody = ({ desc, task, percentage, team, date }) => {
  var days = setDeadlineDays(date);
  return (
    <React.Fragment>
      <div className="seller-details">{desc}</div>
      <div className="seller-progress">
        <div className="seller-progress-details">
          <div className="seller-progress-task">
            <Icon name="check-round-cut"></Icon>
            <span>{task} Tasks</span>
          </div>
          <div className="seller-progress-percent">{percentage}%</div>
        </div>
        <Progress value={percentage}></Progress>
      </div>
      <div className="seller-meta">
        <ul className="seller-users g-1">
          {team.slice(0, 2).map((item) => {
            return (
              <li>
                <UserAvatar size="sm" text={item.text} theme={item.theme} image={item.image} />
              </li>
            );
          })}
          {team.length > 2 && (
            <li>
              <UserAvatar theme="light" size="sm" text={`+${team.length - 2}`} />
            </li>
          )}
        </ul>
        <span
          className={`badge badge-dim badge-${
            days > 10 ? "light" : days <= 10 && days >= 2 ? "warning" : days === 1 ? "danger" : days === 0 && "success"
          }`}
        >
          <Icon name="clock"></Icon>
          <span>{days === 0 ? "Done" : days === 1 ? "Due Tomorrow" : days + " Days Left"}</span>
        </span>
      </div>
    </React.Fragment>
  );
};
