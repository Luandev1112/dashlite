import React, {useState} from "react";
import { UserAvatar, Icon, PreviewCard, Rating } from "../Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress, Row, Col } from "reactstrap";
import { setDeadlineDays } from "../../utils/Utils";
import DealAvatar from "../../images/items/deal.svg";

export const DealCard = ({ deal }) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	}
  return (
    <React.Fragment>
      <PreviewCard className="deal-card">
		<div className="badge-message">
			<span className="badge-message-count">1</span>
		</div>
		<div className="badge-bid">
			<span className="badge-bid-count">2</span>
		</div>
        <div className="auction-deal">
            <div className="auction-deal-head">
                <h6 className="title">
                  <Icon name="clip-v" className="text-success" />
                  {deal.deal_name}
                </h6>
            </div>
            <div className="auction-deal-posting-body">
              <div className="deal-detail">
                <p>
				{isReadMore ? deal.description.slice(0, 90) + "..." : deal.description}
				<span onClick={toggleReadMore} className="read-or-hide">
				{
					isReadMore ? "read more" : "show less"
				}
				</span>
				</p>
                <span>{deal.posted}</span>
              </div>
			  <div className="additional">
				<div className="price-block">
					<span>BUY NOW</span>
					<div className="price-group">
					  <small className="unit">$</small><span className="price">{deal.bid_price.toLocaleString()}</span>
					</div>
				</div>
				<div className="attachment-group">
					<h5>Purchase Order.pdf</h5>
					<p>
						purchase order.pdf details.
						good....
					</p>
				</div>
			  </div>
            </div>
        </div>
      </PreviewCard>
    </React.Fragment>
  );
};