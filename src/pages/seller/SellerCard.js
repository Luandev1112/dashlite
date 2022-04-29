import React from "react";
import { UserAvatar, Icon, PreviewCard } from "../../components/Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress } from "reactstrap";
import { setDeadlineDays } from "../../utils/Utils";

export const SellerCard = ({ ...props }) => {
  return (
    <React.Fragment>
      <PreviewCard className="h-100">
        <div className="project">{props.children}</div>
      </PreviewCard>
    </React.Fragment>
  );
};

export const SellerHead = ({ color, initial, title, subtitle }) => {
  return (
    <div className="seller-head">
      <a
        href="#title"
        onClick={(ev) => {
          ev.preventDefault();
        }}
        className="seller-title"
      >
        <UserAvatar className="sq" theme={color} text={initial} />
        <div className="seller-info">
          <h6 className="title">{title}</h6>
          <span className="sub-text">{subtitle}</span>
        </div>
      </a>
      <UncontrolledDropdown>
        <DropdownToggle tag="a" className="btn btn-icon btn-trigger">
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-opt no-bdr">
            <li>
              <a
                href="#view"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="eye"></Icon>
                <span>View Project</span>
              </a>
            </li>
            <li>
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="edit"></Icon>
                <span>Edit Project</span>
              </a>
            </li>
            <li>
              <a
                href="#markasdone"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="check-round-cut"></Icon>
                <span>Mark As Done</span>
              </a>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
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
