import React, { useState, useEffect, useRef, useContext } from "react";
import ProductVideo from "../../../images/product/video-a.jpg";
import ModalVideo from "react-modal-video";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import Slider from "react-slick";
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  Col,
  Row,
  Icon,
  Block,
} from "../../../components/Component";
import { Badge, Card } from "reactstrap";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import { SlickArrowLeft, SlickArrowRight } from "../../../components/partials/slick/SlickComponents";

const sliderSettings = {
  className: "slider-init row",
  slidesToShow: 2,
  centerMode: false,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    { breakpoint: 3000, settings: { slidesToShow: 4 } },
    { breakpoint: 1540, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

const sliderSettingsDefault = {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  slide: null,
  responsive: [
    { breakpoint: 1539, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 420, settings: { slidesToShow: 1 } },
  ],
  arrows: false,
  swipeToSlide: true,
  focusOnSelect: true,
  className: "slider-init slider-nav",
};

const ProductDetails = ({ match }) => {
  const { contextData } = useContext(ProductContext);

  const [data] = contextData;

  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState({});
  const [colorSector, setColorSelector] = useState(1);
  const [sizeSelector, setSizeSelector] = useState(1);
  const [counter, setCounter] = useState(1);
  const [videoOpen, setVideoOpen] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  // increases quantity number
  const increaseCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  // decreases quantity number
  const decreaseCounter = () => {
    if (counter !== 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  // changes slides
  const slideChange = (index) => {
    var product = sliderData.slider.find((item) => item.id === index);
    setCurrentSlide(product);
  };

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  // grabs the id of the url and loads the corresponding data
  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let product = data.find((item) => item.id === Number(id));
      if (product) {
        setSliderData(product);
        setCurrentSlide(product.slider[0]);
      }
    } else {
      setSliderData(data[0]);
      setCurrentSlide(data[0].slider[0]);
    }
  }, [match.params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <Head title="Product Detail"></Head>
      {sliderData && sliderData.slider && (
        <Content>
          <BlockHead size="sm">
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>Product Details</BlockTitle>
                <BlockDes className="text-soft">
                  <p>An example page for product details</p>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/product-card`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/product-card`}>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <Card className="card-bordered">
              <div className="card-inner">
                <Row className="pb-5">
                  <Col lg={6}>
                    <div className="product-gallery mr-xl-1 mr-xxl-5">
                      <Slider
                        asNavFor={nav2}
                        ref={slider1}
                        arrows={false}
                        fade={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        initialSlide={currentSlide.id}
                        className="slider-init"
                        prevArrow
                      >
                        <div className="slider-item rounded" key={currentSlide.id}>
                          <img src={currentSlide.img} className="w-100" alt="" />
                        </div>
                      </Slider>
                      <Slider
                        asNavFor={nav1}
                        ref={slider2}
                        afterChange={(newIndex) => slideChange(newIndex)}
                        initialSlide={currentSlide.id}
                        {...sliderSettingsDefault}
                      >
                        {sliderData.slider.map((item) => {
                          return (
                            <div
                              className={`slider-item ${currentSlide.id === item.id ? "slick-current" : ""}`}
                              key={item.id}
                            >
                              <div className="thumb">
                                <img src={item.img} alt="" />
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="product-info mt-5 mr-xxl-5">
                      <h4 className="product-price text-primary">
                        ${sliderData.newPrice}{" "}
                        <small className="text-muted fs-14px">
                          ${sliderData.prevPrice === null ? "0.00" : sliderData.prevPrice}
                        </small>
                      </h4>
                      <h2 className="product-title">{sliderData.title}</h2>
                      <div className="product-rating">
                        <ul className="rating">
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-fill"></Icon>
                          </li>
                          <li>
                            <Icon name="star-half"></Icon>
                          </li>
                        </ul>
                        <div className="amount">(2 Reviews)</div>
                      </div>
                      <div className="product-excrept text-soft">
                        <p className="lead">
                          I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and
                          I will give you a complete account of the system, and expound the actual teaching.
                        </p>
                      </div>
                      <div className="product-meta">
                        <ul className="d-flex g-3 gx-5">
                          <li>
                            <div className="fs-14px text-muted">Type</div>
                            <div className="fs-16px fw-bold text-secondary">{sliderData.type}</div>
                          </li>
                          <li>
                            <div className="fs-14px text-muted">Model Number</div>
                            <div className="fs-16px fw-bold text-secondary">Forerunner 290XT</div>
                          </li>
                        </ul>
                      </div>
                      <div className="product-meta">
                        <h6 className="title">Color</h6>
                        <ul className="custom-control-group">
                          <li>
                            <div className="custom-control color-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="productColor1"
                                name="productColor"
                                onChange={() => setColorSelector(1)}
                                checked={colorSector === 1 ? true : false}
                              />
                              <label
                                className="custom-control-label dot dot-xl"
                                style={{ background: "#754c24" }}
                                htmlFor="productColor1"
                              ></label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control color-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="productColor2"
                                name="productColor"
                                onChange={() => setColorSelector(2)}
                                checked={colorSector === 2 ? true : false}
                              />
                              <label
                                className="custom-control-label dot dot-xl"
                                style={{ background: "#636363" }}
                                htmlFor="productColor2"
                              ></label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control color-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="productColor3"
                                name="productColor"
                                onChange={() => setColorSelector(3)}
                                checked={colorSector === 3 ? true : false}
                              />
                              <label
                                className="custom-control-label dot dot-xl"
                                style={{ background: "#ba6ed4" }}
                                htmlFor="productColor3"
                              ></label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control color-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="productColor4"
                                name="productColor"
                                onChange={() => setColorSelector(4)}
                                checked={colorSector === 4 ? true : false}
                              />
                              <label
                                className="custom-control-label dot dot-xl"
                                style={{ background: "#ff87a3" }}
                                htmlFor="productColor4"
                              ></label>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="product-meta">
                        <h6 className="title">Size</h6>
                        <ul className="custom-control-group">
                          <li>
                            <div className="custom-control custom-radio custom-control-pro no-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="sizeCheck"
                                id="sizeCheck1"
                                onChange={() => setSizeSelector(1)}
                                checked={sizeSelector === 1 ? true : false}
                              />
                              <label className="custom-control-label" htmlFor="sizeCheck1">
                                XS
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio custom-control-pro no-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="sizeCheck"
                                id="sizeCheck2"
                                onChange={() => setSizeSelector(2)}
                                checked={sizeSelector === 2 ? true : false}
                              />
                              <label className="custom-control-label" htmlFor="sizeCheck2">
                                SM
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio custom-control-pro no-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="sizeCheck"
                                id="sizeCheck3"
                                onChange={() => setSizeSelector(3)}
                                checked={sizeSelector === 3 ? true : false}
                              />
                              <label className="custom-control-label" htmlFor="sizeCheck3">
                                L
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio custom-control-pro no-control">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="sizeCheck"
                                id="sizeCheck4"
                                onChange={() => setSizeSelector(4)}
                                checked={sizeSelector === 4 ? true : false}
                              />
                              <label className="custom-control-label" htmlFor="sizeCheck4">
                                XL
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="product-meta">
                        <ul className="d-flex flex-wrap ailgn-center g-2 pt-1">
                          <li className="w-140px">
                            <div className="form-control-wrap number-spinner-wrap">
                              <Button
                                color="light"
                                outline
                                className="btn-icon number-spinner-btn number-minus"
                                onClick={() => decreaseCounter()}
                              >
                                <Icon name="minus"></Icon>
                              </Button>
                              <input
                                type="number"
                                className="form-control number-spinner"
                                value={counter}
                                onChange={(e) => setCounter(Number(e.target.value))}
                              />
                              <Button
                                color="light"
                                outline
                                className="btn-icon number-spinner-btn number-plus"
                                onClick={() => increaseCounter()}
                              >
                                <Icon name="plus"></Icon>
                              </Button>
                            </div>
                          </li>
                          <li>
                            <Button color="primary">Add to Cart</Button>
                          </li>
                          <li className="ml-n1">
                            <Button className="btn-icon btn-trigger text-primary">
                              <Icon name="heart"></Icon>
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>

                <hr className="hr border-light" />

                <Row className="g-gs flex-lg-row-reverse pt-5">
                  <Col lg={5}>
                    <div className="video">
                      <img className="video-poster w-100" src={ProductVideo} alt="" />
                      <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={videoOpen}
                        videoId="SSo_EIwHSd4"
                        onClose={() => setVideoOpen(false)}
                      />
                      <a
                        className="video-play popup-video"
                        href="#video"
                        onClick={(ev) => {
                          ev.preventDefault();
                          setVideoOpen(true);
                        }}
                      >
                        <Icon name="play"></Icon>
                        <span>Watch Video</span>
                      </a>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="product-details entry mr-xxl-3">
                      <h3>Product details of Comfy cushions</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem consectetur, adipisci
                        velit.Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                      </p>
                      <ul className="list list-sm list-checked">
                        <li>Meets and/or exceeds performance standards.</li>
                        <li>Liumbar support.</li>
                        <li>Made of bonded teather and poiyurethane.</li>
                        <li>Metal frame.</li>
                        <li>Anatomically shaped cork-latex</li>
                        <li>As attractively priced as you look attractive in one</li>
                      </ul>
                      <p>
                        Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                      </p>
                      <h3>The best seats in the house</h3>
                      <p>
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you a complete account of the system, and expound the actual teachings.
                        Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Block>

          <Block size="lg">
            <BlockHead>
              <BlockBetween>
                <BlockHeadContent>
                  <BlockTitle>Related Product</BlockTitle>
                </BlockHeadContent>
              </BlockBetween>
            </BlockHead>
            <Slider {...sliderSettings}>
              {data.map((item) => {
                return (
                  <Col key={item.id}>
                    <Card className="card-bordered product-card mr-3 ml-3">
                      <div className="product-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>
                          <img className="card-img-top" src={item.img} alt="" />
                        </Link>
                        <ul className="product-badges">
                          {item.new && (
                            <li>
                              <Badge color="success">New</Badge>
                            </li>
                          )}
                          {item.hot && (
                            <li>
                              <Badge color="danger">Hot</Badge>
                            </li>
                          )}
                        </ul>
                        <ul className="product-actions">
                          <li>
                            <a href="#cart" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="cart"></Icon>
                            </a>
                          </li>
                          <li>
                            <a href="#heart" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="heart"></Icon>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-inner text-center">
                        <ul className="product-tags">
                          <li>
                            <a href="#product" onClick={(ev) => ev.preventDefault()}>
                              {item.name}
                            </a>
                          </li>
                        </ul>
                        <h5 className="product-title">
                          <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>{item.title}</Link>
                        </h5>
                        <div className="product-price text-primary h5">
                          <small className="text-muted del fs-13px">${item.prevPrice}</small> ${item.newPrice}
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Slider>
          </Block>
        </Content>
      )}
    </React.Fragment>
  );
};

export default ProductDetails;
