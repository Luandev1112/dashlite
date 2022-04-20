import classNames from "classnames";
import React from "react";
import { Card } from "reactstrap";

export const DataTable = ({ className, bodyClassName, title, ...props }) => {
  return (
    <Card className={`card-bordered ${className ? className : ""}`}>
      <div className="card-inner-group">{props.children}</div>
    </Card>
  );
};

export const DataTableTitle = ({ ...props }) => {
  return (
    <div className="card-inner position-relative card-tools-toggle">
      <div className="card-title-group">{props.children}</div>
    </div>
  );
};

export const DataTableBody = ({ compact, className, bodyclass, ...props }) => {
  return (
    <div className={`card-inner p-0 ${className ? className : ""}`}>
      <div className={`nk-tb-list nk-tb-ulist ${bodyclass ? bodyclass : ""} ${compact ? "is-compact" : ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export const DataTableHead = ({ ...props }) => {
  return <div className="nk-tb-item nk-tb-head">{props.children}</div>;
};

export const DataTableRow = ({ className, size, ...props }) => {
  const rowClass = classNames({
    "nk-tb-col": true,
    [`${className}`]: className,
    [`tb-col-${size}`]: size,
  });
  return <div className={rowClass}>{props.children}</div>;
};

export const DataTableItem = ({ className, ...props }) => {
  return <div className={`nk-tb-item ${className ? className : ""}`}>{props.children}</div>;
};
