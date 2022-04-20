import React from "react";
import classNames from "classnames";

export const OverlineTitle = ({ className, alt, ...props }) => {
  const classes = classNames({
    "overline-title": true,
    [`${className}`]: className,
    "overline-title-alt": alt,
  });
  return (
    <React.Fragment>
      {!props.tag ? (
        <h6 className={classes}>{props.children}</h6>
      ) : (
        <props.tag className={classes}>{props.children}</props.tag>
      )}
    </React.Fragment>
  );
};
