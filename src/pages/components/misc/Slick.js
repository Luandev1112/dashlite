import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Slider from "react-slick";
import { pricingTableDataV1, cardPreview } from "./Data";
import { SlickArrowLeft, SlickArrowRight } from "../../../components/partials/slick/SlickComponents";
import { Row, Col, Card } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  Button,
} from "../../../components/Component";

const settings = {
  className: "slider-init",
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    { breakpoint: 1539, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  arrows: false,
  dots: true,
};

const settings2 = {
  className: "slider-init plan-list",
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    { breakpoint: 1539, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  slide: "li",
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

const SlickPage = () => {
  return (
    <React.Fragment>
      <Head title="Slick Slider"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Slick Slider
            </BlockTitle>
            <BlockDes>
              <p className="lead">Here is some awesome carousel and slider made with love and Slick slider. </p>
              <p>
                You can see more details from{" "}
                <a href="https://react-slick.neostack.com/" rel="noreferrer" target="_blank">
                  here
                </a>
                .
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Card Preview Slider</BlockTitle>
              <BlockDes>A card slider made with slick slider.</BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Slider {...settings}>
              {cardPreview.map((item) => (
                <Col key={item.id}>
                  <Card className="card-bordered">
                    <img src={item.img} className="card-img-top" alt="" />
                    <div className="card-inner">
                      <h5 className="card-title">{item.heading}</h5>
                      <p className="card-text">{item.desc}</p>
                      <Button color="primary">Go somewhere</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Slider>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const settings = {
  className: "slider-init",
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    { breakpoint: 1539, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  arrows: false,
  dots: true,
};
            
<Slider {...settings}>
    {cardPreview.map((item) => (
    <Col key={item.id}>
        <Card className="card-bordered">
            <img src={item.img} className="card-img-top" alt="" />
            <div className="card-inner">
                <h5 className="card-title">{item.heading}</h5>
                <p className="card-text">{item.desc}</p>
                <Button color="primary">Go somewhere</Button>
            </div>
        </Card>
    </Col>
    ))}
</Slider>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Pricing Table Carousel</BlockTitle>
              <BlockDes>A Responsive pricing table Carousel with slick.</BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Slider {...settings2}>
              {pricingTableDataV1.map((item) => (
                <Col key={item.id}>
                  <Card className="card-bordered pricing">
                    <div className="pricing-head">
                      <div className="pricing-title">
                        <h4 className="card-title title">{item.title}</h4>
                        <p className="sub-text">{item.caption}</p>
                      </div>
                      <div className="card-text">
                        <Row>
                          <Col className="col-6">
                            <span className="lead-text">{item.interest}%</span>
                            <span className="sub-text">Daily Interest</span>
                          </Col>
                          <Col className="col-6">
                            <span className="lead-text">{item.term}</span>
                            <span className="sub-text">Term Days</span>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="pricing-features">
                        <li>
                          <span className="w-50">Min Deposit</span> -{" "}
                          <span className="ml-auto">${item.minDeposit.usd}</span>
                        </li>
                        <li>
                          <span className="w-50">Max Deposit</span> -{" "}
                          <span className="ml-auto">${item.maxDeposit.usd}</span>
                        </li>
                        <li>
                          <span className="w-50">Deposit Return</span> - <span className="ml-auto">Yes</span>
                        </li>
                        <li>
                          <span className="w-50">Total Return</span> -{" "}
                          <span className="ml-auto">{item.totalReturn}%</span>
                        </li>
                      </ul>
                      <div className="pricing-action">
                        <button className="btn btn-outline-light">Choose this plan</button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Slider>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const settings2 = {
  className: "slider-init plan-list",
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    { breakpoint: 1539, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  slide: "li",
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};
            
            
<Slider {...settings}>
{pricingTableDataV1.map((item) => (
    <Col>
        <Card className="card-bordered pricing">
            <div className="pricing-head">
                <div className="pricing-title">
                <h4 className="card-title title">{item.title}</h4>
                <p className="sub-text">{item.caption}</p>
                </div>
                <div className="card-text">
                <Row>
                    <Col className="col-6">
                    <span className="lead-text">{item.interest}%</span>
                    <span className="sub-text">Daily Interest</span>
                    </Col>
                    <Col className="col-6">
                    <span className="lead-text">{item.term}</span>
                    <span className="sub-text">Term Days</span>
                    </Col>
                </Row>
                </div>
            </div>
        <div className="pricing-body">
            <ul className="pricing-features">
                <li>
                    <span className="w-50">Min Deposit</span> -{" "}
                    <span className="ml-auto">{item.minDeposit.usd}</span>
                </li>
                <li>
                    <span className="w-50">Max Deposit</span> -{" "}
                    <span className="ml-auto">{item.maxDeposit.usd}</span>
                </li>
                <li>
                    <span className="w-50">Deposit Return</span> - <span className="ml-auto">Yes</span>
                </li>
                <li>
                    <span className="w-50">Total Return</span> -{" "}
                    <span className="ml-auto">{item.totalReturn}%</span>
                </li>
            </ul>
            <div className="pricing-action">
                <button className="btn btn-outline-light">Choose this plan</button>
            </div>
        </div>
        </Card>
    </Col>
    ))}
</Slider>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default SlickPage;
