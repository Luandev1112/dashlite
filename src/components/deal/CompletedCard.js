import React from "react";
import { UserAvatar, Icon, PreviewCard, Rating } from "../../components/Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress, Row, Col } from "reactstrap";
import { setDeadlineDays } from "../../utils/Utils";

export const CompletedCard = ({ deal }) => {
  return (
    <React.Fragment>
      <PreviewCard className="h-100 deal-card">
        <div className="deal">
            <div className="deal-head">
                <h6 className="title">{deal.deal_name}</h6>
                <div className="score">
                    <Rating type="star" className="text-success" initVal={parseInt(deal.score)}></Rating>
                </div>
            </div>
            <div className="deal-period">
                <span>JUN 2019 - JUN 2020</span>
            </div>
            <div className="deal-body">
                <p>{deal.descripiton}</p>
            </div>
        </div>
      </PreviewCard>
    </React.Fragment>
  );
};