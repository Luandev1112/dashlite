import React from "react";

const ContentAlt = ({ ...props }) => {
  return (
    <div className="nk-content p-0">
      <div className="nk-content-inner">
        <div className="nk-content-body">
          {!props.page ? props.children : null}
          {props.page === "component" ? (
            <div className="components-preview wide-md mx-auto">{props.children}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ContentAlt;
