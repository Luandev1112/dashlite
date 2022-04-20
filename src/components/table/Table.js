import React from "react";
import classNames from "classnames";
import { basicData } from "./TableData";

const Table = ({ headColor, striped, border, hover, responsive }) => {
  const tableClass = classNames({
    table: true,
    "table-bordered": border,
    "table-borderless": !border,
    "table-striped": striped,
    "table-hover": hover,
  });
  return (
    <div className={responsive ? "table-responsive" : ""}>
      <table className={tableClass}>
        <thead className={`${headColor ? `thead-${headColor}` : ""}`}>
          <tr>
            {basicData.header.map((item, idx) => {
              return <th key={idx}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {basicData.data.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.handle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
