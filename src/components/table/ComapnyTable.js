import React from "react";
import classNames from "classnames";

const CompanyTable = ({data}) => {
  console.log(data);
  return (
    <div className="company-div">
      <table className="table">
        <thead className="head">
          <tr>
            <th>COMPANYLIST</th>
            <th>INVESTING</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.companies.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.name}</th>
                <td>{item.price}</td>
                <td>{data.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CompanyTable;
