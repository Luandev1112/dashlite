import React from "react";

export const EmailWrapper = ({ ...props }) => {
  return (
    <table className="email-wraper">
      <tbody>
        <tr>
          <td className="py-5">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailHeader = ({ ...props }) => {
  return (
    <table className="email-header">
      <tbody>
        <tr>
          <td className="text-center pb-4">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailBody = ({ centered, ...props }) => {
  return (
    <table className={`email-body ${centered ? "text-center" : ""}`}>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export const EmailBodyContent = ({ className, ...props }) => {
  return (
    <tr>
      <td className={`${className ? className : ""}`}>{props.children}</td>
    </tr>
  );
};

export const EmailFooter = ({ ...props }) => {
  return (
    <table className="email-footer">
      <tbody>
        <tr>
          <td className="text-center pt-4">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
};
