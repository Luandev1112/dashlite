import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import pattern1 from "../../../images/patterns/pattern1.png";
import pattern2 from "../../../images/patterns/pattern2.png";
import pattern3 from "../../../images/patterns/pattern3.png"
import {
  Block,
  BackTo,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  Table,
} from "../../../components/Component";
import CompanyTable from "../../../components/table/ComapnyTable";

const CompanyCard = ({data}) => {
  let bg_img = null;
  let cardTitle = '';
  switch(data.status)
  {
    case 'bidding':
      bg_img = pattern1;
      cardTitle = 'BIDDING NOW';
    break;
    case 'tosign':
      bg_img = pattern1;
      cardTitle = 'NEED TO SIGN';
    break;
    case 'topay':
      bg_img = pattern2;
      cardTitle = 'NEED TO PAY';
    break;
    case 'toreturn':
      bg_img = pattern3;
      cardTitle = 'WAIT FOR RETURN';
    break;

  }
  return (
    <React.Fragment>
        <Block className="company-card-block">
          <BlockTitle className={"title_"+data.status} tag="h4">{cardTitle}</BlockTitle>
          <PreviewCard className="company-card">
            <div className={data.status + " card-prev"} style={{ backgroundImage: `url(${bg_img})` }} />
            <div className="card-body">
              <CompanyTable data={data} />
            </div>
          </PreviewCard>
        </Block>
    </React.Fragment>
  );
};
export default CompanyCard;
