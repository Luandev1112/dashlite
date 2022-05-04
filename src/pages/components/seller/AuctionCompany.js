import React from "react";
import { Icon, PreviewCard, Rating } from "../../../components/Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress, Row, Col } from "reactstrap";

const AuctionCompany = ({ seller, setAuctionDetail }) => {
  const detailEnable = () => {
    setAuctionDetail(true);
  }
  return (
    <React.Fragment>
      <PreviewCard className="auction-company-card" >
        <div className="auction" onClick={detailEnable}>
          <div className="auction-company-head">
            <div
              onClick={(ev) => {
                ev.preventDefault();
              }}
              className="auction-company-title"
            >
              <img className="logo" src={seller.logo} />
              <div className="auction-company-info">
                <h6 className="title">{seller.name}, <small>LTD</small></h6>
              </div>
            </div>
            <div className="auction-company-group">
              <div className="favorite">
                {seller.favorite ? (
                  <Icon name="heart-fill" />
                ) : (
                  <Icon name="heart" />
                )}
                </div>
              <div className="message">
                <Icon name="chat" />
              </div>
            </div>
          </div>
          <div className="auction-company-progress">
            <Row className="auction-company-progress-details">
              <Col lg="4">
                <img src={seller.avatar} />
                <div className="score">
                  <Rating type="star" className="text-success" initVal={parseInt(seller.score)}></Rating>
                </div>
              </Col>
              <Col lg="4" className="detail">
                <div className="location-group">
                  <span className="title">LOCATION</span>
                  <h4>{seller.location}</h4>
                </div>
                <div className="verification-group">
                  <span className="title">VERIFICATION</span>
                  <h4>{seller.verification ? ("Verified") : ("Unverified")}</h4>
                </div>
                <div className="deal-group">
                  <span className="title">TOTAL DEAL</span>
                  <h4>
                    <small className="unit">$</small><span className="total_price">{seller.total_price}</span>
                    <span className="deals">{seller.totalDeals} DEALS</span>
                  </h4>
                </div>
              </Col>
              <Col lg="4" className="detail">
                <div className="industry-group">
                  <span className="title">INDUSTRY</span>
                  <h4>{seller.industry}</h4>
                </div>
                <div className="sector-group">
                  <span className="title">SECTOR</span>
                  <h4>{seller.sector}</h4>
                </div>
                <div className="deal-group">
                  <span className="title">RESPONSE TIME</span>
                  <Rating type="clock" className="text-success" initVal={parseInt(seller.response_score)}></Rating>
                </div>
              </Col>
            </Row>
            <span className="progress-title">SCORE</span>
            <Progress striped value={parseInt(seller.score * 100 / 5)} color="success"></Progress>
          </div>
        </div>
      </PreviewCard>
    </React.Fragment>
  );
};

export default AuctionCompany;