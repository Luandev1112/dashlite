import React from "react";
import { UserAvatar, Icon, PreviewCard, Rating } from "../Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress, Row, Col } from "reactstrap";
import { setDeadlineDays } from "../../utils/Utils";
import DealAvatar from "../../images/items/deal.svg";

export const PostingCard = ({ deal }) => {
  return (
    <React.Fragment>
      <PreviewCard className="h-100 deal-card">
        <div className="deal">
            <div className="deal-head">
                <h6 className="title">
                  <Icon name="clip-v" className="text-success" />
                  {deal.deal_name}
                  </h6>
                <div className="price-group">
                  <small className="unit">$</small><span className="price">{deal.price.toLocaleString()}</span>
                </div>
            </div>
            <div className="deal-posting-body">
              <div className="deal_detail">
                <p>{deal.description}</p>
                <span>9 DAYS AGO</span>
              </div>
              <img src={DealAvatar} />

            </div>
        </div>
      </PreviewCard>
    </React.Fragment>
  );
};