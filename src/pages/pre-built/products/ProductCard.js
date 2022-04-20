import React, { useContext, useState, useEffect } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
import ProductH from "../../../images/product/h.png";
import ProductLGB from "../../../images/product/lg-b.jpg";
import ProductLGC from "../../../images/product/lg-c.jpg";
import ProductLGD from "../../../images/product/lg-d.jpg";
import ProductLGE from "../../../images/product/lg-e.jpg";
import ProductLGF from "../../../images/product/lg-f.jpg";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import {
  BlockHead,
  BlockDes,
  BlockTitle,
  BlockBetween,
  BlockHeadContent,
  Icon,
  Button,
  Block,
  Row,
  Col,
  PaginationComponent,
} from "../../../components/Component";
import { useForm } from "react-hook-form";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Badge } from "reactstrap";
import { ProductContext } from "./ProductContext";
import { productCardData } from "./ProductData";

const ProductCard = () => {
  const { contextData } = useContext(ProductContext);

  const [data, setData] = contextData;

  const [smOption, setSmOption] = useState(false);
  const [formData] = useState({
    name: "",
    img: null,
    title: "",
    prevPrice: 0,
    newPrice: 0,
    type: "",
    new: false,
    hot: false,
    like: false,
    cart: false,
  });
  const [view, setView] = useState(false);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);
  const [files, setFiles] = useState([]);

  // Changing state value when searching name
  useEffect(() => {
    if (filter !== "") {
      const filteredObject = productCardData.filter((item) => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
      setData([...filteredObject]);
    } else {
      setData([...productCardData]);
    }
  }, [filter, setData]);

  const toggle = () => {
    setView(!view);
  };

  const onFormSubmit = (form) => {
    const { name, title, prevPrice, newPrice, type } = form;
    let submittedData = {
      id: data.length,
      name: name,
      title: title,
      img: files.length > 0 ? files[0].preview : ProductH,
      prevPrice: prevPrice,
      newPrice: newPrice,
      type: type,
      new: true,
      hot: false,
      like: false,
      cart: false,
      slider: [
        { id: 0, img: files.length > 0 ? files[0].preview : ProductH },
        { id: 1, img: ProductLGB },
        { id: 2, img: ProductLGC },
        { id: 3, img: ProductLGD },
        { id: 4, img: ProductLGE },
        { id: 5, img: ProductLGF },
      ],
    };
    setData([submittedData, ...data]);
    setView(false);
    setFiles([]);
  };

  // filter text
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Product List"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle>Products</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <a
                  href="#more"
                  className="btn btn-icon btn-trigger toggle-expand mr-n1"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setSmOption(!smOption);
                  }}
                >
                  <Icon name="more-v"></Icon>
                </a>
                <div className="toggle-expand-content" style={{ display: smOption ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <div className="form-control-wrap">
                        <div className="form-icon form-icon-right">
                          <Icon name="search"></Icon>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="default-04"
                          onChange={onFilterChange}
                          placeholder="Quick search by name"
                        />
                      </div>
                    </li>
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color="transparent"
                          className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                        >
                          Status
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>New Items</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>Featured</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>Out of Stock</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button className="toggle btn-icon d-md-none" color="primary" onClick={toggle}>
                        <Icon name="plus"></Icon>
                      </Button>
                      <Button className="toggle d-none d-md-inline-flex" color="primary" onClick={toggle}>
                        <Icon name="plus"></Icon>
                        <span>Add Product</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            {currentItems.length > 0 ? (
              currentItems.map((item) => {
                return (
                  <Col xxl={3} lg={4} sm={6} key={item.id}>
                    <Card className="card-bordered product-card">
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
                              <Badge color="danger">New</Badge>
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
                            <a href="#like" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="heart"></Icon>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-inner text-center">
                        <ul className="product-tags">
                          <li>
                            <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>{item.name}</Link>
                          </li>
                        </ul>
                        <h5 className="product-title">
                          <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>{item.title}</Link>
                        </h5>
                        <div className="product-price text-primary h5">
                          {item.prevPrice && <small className="text-muted del fs-13px">${item.prevPrice}</small>} $
                          {item.newPrice}
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div className="ml-2">No product found</div>
            )}
          </Row>
          {currentItems.length > 0 && (
            <div className="mt-3">
              <PaginationComponent
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          )}
        </Block>

        <SimpleBar
          className={`nk-add-product toggle-slide toggle-slide-right toggle-screen-any ${view ? "content-active" : ""}`}
        >
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Add Product</BlockTitle>
              <BlockDes>
                <p>Add new information for a product.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Block>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <Row className="g-3">
                <Col size="12">
                  <div className="form-group">
                    <label className="form-label" htmlFor="product-title">
                      Product Name
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        defaultValue={formData.name}
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="regular-price">
                      Product Title
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        name="title"
                        defaultValue={formData.title}
                        ref={register({ required: "This field is required" })}
                        className="form-control"
                      />
                      {errors.title && <span className="invalid">{errors.title.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="sale-price">
                      Previous Value
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="number"
                        name="prevPrice"
                        defaultValue={formData.prevPrice}
                        ref={register({ required: "This field is required" })}
                        className="form-control"
                      />
                      {errors.prevPrice && <span className="invalid">{errors.prevPrice.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="stock">
                      New Price
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="number"
                        name="newPrice"
                        defaultValue={formData.newPrice}
                        ref={register({ required: "This field is required" })}
                        className="form-control"
                      />
                      {errors.newPrice && <span className="invalid">{errors.newPrice.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="SKU">
                      Type
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="type"
                        defaultValue={formData.type}
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.type && <span className="invalid">{errors.type.message}</span>}
                    </div>
                  </div>
                </Col>
                <Col size="12">
                  <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()} className="dropzone upload-zone small bg-lighter my-2 dz-clickable">
                          <input {...getInputProps()} />
                          {files.length === 0 && <p>Drag 'n' drop some files here, or click to select files</p>}
                          {files.map((file) => (
                            <div
                              key={file.name}
                              className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                            >
                              <div className="dz-image">
                                <img src={file.preview} alt="preview" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </Col>
                <Col size="12">
                  <Button color="primary">
                    <Icon className="plus"></Icon>
                    <span>Add Product</span>
                  </Button>
                </Col>
              </Row>
            </form>
          </Block>
        </SimpleBar>
        {view && <div className="toggle-overlay" onClick={toggle}></div>}
      </Content>
    </React.Fragment>
  );
};
export default ProductCard;
