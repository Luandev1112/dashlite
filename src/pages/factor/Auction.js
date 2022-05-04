import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { FormGroup, Label, Input, Badge } from "reactstrap";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import DoorImage from "../../images/items/door.svg";
import AuctionImage from "../../images/items/auction.svg";
import { auctionData } from "../components/auction/auctionData";
import { sellerData } from "../components/seller/sellerData";
import { dealsData } from "../components/seller/dealsData";
import AuctionCompany from "../components/seller/AuctionCompany";
import { DealCard } from "../../components/deal/DealCard";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PieChartExample,
  Icon,
  Button,
  Row,
  Col,
  PreviewCard,
  PreviewAltCard,
  BlockBetween,
} from "../../components/Component";

const Auction = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeArray, setTimeArray] = useState([]);
  const [auctionStatus, setAuctionStatus] = useState('');
  const [subTitle, setSubTitle] = useState('STATUS');
  const [middleImg, setMiddleImg] = useState(DoorImage);
  const [auctionTitle, setAuctionTitle] = useState('AUCTION STARTS SOON');
  const [auctionDescription, setActionDescription] = useState('The next auction starts in');
  const [auctionDetail, setAuctionDetail] = useState(false);

  const pad = (d) => {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  const reverseTimecount = (time) => {
    let endtime = new Date(time);
    let endtimeSecond = parseInt(endtime.getTime() / 1000);
    let remainSeconds = endtimeSecond - parseInt(currentTime.getTime() / 1000);
    let hh = pad(parseInt(remainSeconds / 3600));
    let mm = pad(parseInt((remainSeconds % 3600) / 60));
    let ss = pad((remainSeconds % 3600) % 60);
    return hh + mm + ss;
  };

  const compareAuctionTime = () => {
    let auctionStarttime = new Date(auctionData.start_time).getTime();
    let auctionEndtime = new Date(auctionData.end_time).getTime();
    setCurrentTime(new Date());
    if(currentTime.getTime() < auctionStarttime)
    {
      setAuctionStatus('upcomming');
      
    }else if(auctionStarttime < currentTime && currentTime < auctionEndtime){
      setAuctionStatus('inprogress');
      
    }else{
      setAuctionStatus('finished');
    }
  };

  useEffect(()=>{
    let myInterval = setInterval(() => {
      compareAuctionTime();
      let timestring = '';
      if(auctionStatus == 'upcomming'){
        timestring = reverseTimecount(auctionData.start_time);
        setTimeArray(timestring.split(''));
        setMiddleImg(DoorImage);
        setSubTitle("STATUS");
        setAuctionTitle("AUCTION STARTS SOON");
        setActionDescription('The next auction starts in');
      }else if(auctionStatus == 'inprogress'){
        timestring = reverseTimecount(auctionData.end_time);
        setTimeArray(timestring.split(''));
        setMiddleImg(AuctionImage);
        setSubTitle("COMPANIES");
        setAuctionTitle("AUCTION IN PROGRESS");
        setActionDescription('This auction will close in');
      }
    }, 1000);
    return ()=>{
      clearInterval(myInterval);
    }
  });

  return (
    <React.Fragment>
      <Head title="Auction"></Head>
      <Content>
        <Block className="auction">
          <Row className="g-gs">
            <Col xxl="4" md="4" className="auction-first">
              <Row className="g-gs">
                <Col lg="12" xxl="12">
                  <Row className="g-gs" >
                    <Col sm="12" lg="12" xxl="12">
                      <FormGroup className="search-bar">
                        <div className="form-control-wrap">
                          <div className="form-icon form-icon-left">
                            <Icon name="search" />
                          </div>
                          <input className="form-control" type="text" id="default-2" placeholder="Search" />
                        </div>
                        <Button color="primary" className="refresh-button">
                          <Icon name="redo" />
                        </Button>
                        <Icon name="bell" className="notification" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="g-gs title-block" >
                    <Col sm="12" lg="12" xxl="12">
                      <BlockTitle className="auction-title">AUCTION > { subTitle }</BlockTitle>
                    </Col>
                  </Row>

                  <Row className="g-gs auction-first-block">
                    <Col sm="12" xxl="12" className="col-img">
                      <img src={ middleImg } />
                    </Col>
                    <Col sm="12" xxl="12" className="col-title">
                      <h5 className={auctionStatus}>{auctionTitle}</h5>
                    </Col>
                    <Col sm="12" xxl="12" className="col-time">
                      <h6>{auctionDescription}</h6>
                      <div className="time-block">
                        <span className="number">{timeArray[0]}</span>
                        <span className="number">{timeArray[1]}</span>
                        <span className="semi">:</span>
                        <span className="number">{timeArray[2]}</span>
                        <span className="number">{timeArray[3]}</span>
                        <span className="semi">:</span>
                        <span className="number">{timeArray[4]}</span>
                        <span className="number">{timeArray[5]}</span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xxl="8" md="8" className="auction-second">
              {auctionDetail ? (
                <Row className="g-gs">
                  <Col lg="12" xxl="12" className="companies-block">
                    <Row className="companies-block-head g-gs">
                      <Col md="3" className="">
                        <h5 className="title-companies">Companies</h5>
                      </Col>
                      <Col md="3" className="">
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="btn">
                            <Icon className="more" name="sort-v"></Icon> SORT 
                            <h6>NONE</h6>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <ul className="link-list-opt no-bdr">
                              <li>
                                <a
                                  href="#view"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <span>ALPHABETIC</span>
                                  <span>
                                    <Icon name="arrow-long-up"></Icon>
                                    <Icon name="arrow-long-down"></Icon>
                                  </span>
                                  
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#edit"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <span>SCORE</span>
                                  <span>
                                    <Icon name="arrow-long-up"></Icon>
                                    <Icon name="arrow-long-down"></Icon>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                    <Row className="g-gs">
                        <Col sm="12" className="companies-scroll">
                          {
                            sellerData.map((data, i)=>{
                              return (
                                <Row className="g-gs">
                                  <Col sm="6">
                                    <AuctionCompany seller={data} setAuctionDetail={setAuctionDetail} />
                                  </Col>
                                  <Col sm="6" className="auction-scroll">
                                  {
                                    dealsData.posting.map((data, i)=>{
                                      return (
                                      <DealCard deal={data} />
                                      );             
                                    })
                                  }
                                  </Col>
                                </Row>
                              );             
                            })
                          }
                        </Col>
                    </Row>
                  </Col>
                </Row>
              ) : (
                <Row className="g-gs">
                  <Col lg="6" xxl="6" className="companies-block">
                    <Row className="companies-block-head g-gs">
                      <Col md="6" className="">
                        <h5 className="title-companies">Companies</h5>
                      </Col>
                      <Col md="6" className="">
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="btn">
                            <Icon className="more" name="sort-v"></Icon> SORT 
                            <h6>NONE</h6>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <ul className="link-list-opt no-bdr">
                              <li>
                                <a
                                  href="#view"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <span>ALPHABETIC</span>
                                  <span>
                                    <Icon name="arrow-long-up"></Icon>
                                    <Icon name="arrow-long-down"></Icon>
                                  </span>
                                  
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#edit"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <span>SCORE</span>
                                  <span>
                                    <Icon name="arrow-long-up"></Icon>
                                    <Icon name="arrow-long-down"></Icon>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                    <Row className="g-gs">
                        <Col sm="12" className="companies-scroll">
                          {
                            sellerData.map((data, i)=>{
                              return (
                                <AuctionCompany seller={data} setAuctionDetail={setAuctionDetail} />
                              );             
                            })
                          }
                        </Col>
                    </Row>
                  </Col>
                  <Col lg="6" xxl="6" className="">
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Auction;
