import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { fileManagerIconData, svgData } from "./NioIconData";
import { Row, Col } from "reactstrap";
import { BlockHead, BlockHeadContent, BlockDes, BackTo, BlockTitle, Block } from "../../../components/Component";

const SVGIconPage = () => {
  return (
    <React.Fragment>
      <Head title="SVG icons"></Head>
      <Content page="component">
        <Block>
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BackTo link="/components" icon="arrow-left">
                Components
              </BackTo>
              <BlockTitle tag="h2" className="fw-normal">
                Custom SVG Icons
              </BlockTitle>
              <BlockDes>
                <p className="lead">
                  <strong>Softnio</strong> team design some beautiful and eyecatching custom icons that helps much in
                  your dashboard. All the icons are in SVG format so it never blury in retina device and you can update
                  color easily be edit SVG code.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>

          <Row className="row g-gs preview-icon-svg">
            {svgData.map((item, idx) => {
              return (
                <Col lg="3" sm="4" md="6" key={idx}>
                  <div className="preview-icon-box card card-bordered">
                    <div className="preview-icon-wrap">{item.svg}</div>
                    <span className="preview-icon-name">{item.name}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Block>
        <Block>
          <BlockHead size="lg" wide="sm">
            <BlockHeadContent>
              <BlockTitle tag="h4">File Manager Icons</BlockTitle>
              <BlockDes>
                <p>All the icons used in file manager app</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="row g-gs preview-icon-svg">
            {fileManagerIconData.map((item, idx) => {
              return (
                <Col lg="3" sm="4" md="6" key={idx}>
                  <div className="preview-icon-box card card-bordered">
                    <div className="preview-icon-wrap">{item.svg}</div>
                    <span className="preview-icon-name">{item.name}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default SVGIconPage;
