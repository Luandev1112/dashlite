import React from "react";
import classNames from "classnames";
import Icon from "../../components/icon/Icon";

const CompanyTable = ({data, setSellerIndex}) => {
  let iconName = '';
  let iconColor = '';
  switch(data.status)
  {
    case 'bidding':
      iconName = "info";
      iconColor = "#fd7c2f";
      break;
    case 'tosign':
      iconName = "info";
      iconColor = "#fd7c2f";
      break;
    case 'topay':
      iconName = "check";
      iconColor = "#54d3c2";
      break;
    case 'toreturn':
      iconName = "coin";
      iconColor = "#40407a";
      break;
  }
  const companyInfo = (param) => {
    setSellerIndex(param);
  }
  return (
    <div className="company-div">
      <table className="table">
        <thead className="head">
          <tr>
            <th className="th text-left">COMPANYLIST</th>
            <th className="th text-right">INVESTING</th>
            <th className="th text-center">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.companies.map((item) => {
          
            return (
              <tr className="tr" key={item.id} onClick={() => companyInfo(item.id) }>
                <td className="text-left td-name"><img className="company-logo" src={item.logo}></img>{item.name}<small> ,LTD</small></td>
                <td className="text-right td-price"><small className="unit">$</small><span className="price">{item.price.toLocaleString()}</span></td>
                <td className="text-center td-status">
                  <Icon name={ iconName } style={{ color: `${iconColor}` }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CompanyTable;
