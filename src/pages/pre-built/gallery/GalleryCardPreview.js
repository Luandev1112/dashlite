import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import GalleryCard from "../../../components/partials/gallery/GalleryCard";
import {
  BlockBetween,
  BlockDes,
  Block,
  BlockHeadContent,
  BlockHead,
  BlockTitle,
  Col,
  Row,
  Icon,
  Button,
} from "../../../components/Component";
import { galleryData } from "./GalleryData";

const GalleryCardPreview = () => {
  const [data] = useState(galleryData);
  return (
    <React.Fragment>
      <Head title="Gallery"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween className="g-3">
            <BlockHeadContent>
              <BlockTitle page>Image Gallery</BlockTitle>
              <BlockDes className="text-soft">
                <p>
                  You have total <span className="text-base">1,257</span> Media.
                </p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                <Icon name="download-cloud"></Icon>
                <span>Download All</span>
              </Button>
              <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                <Icon name="download-cloud"></Icon>
              </Button>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            {data.map((item) => {
              return (
                <Col sm={6} lg={4} xxl={3} key={item.id}>
                  <GalleryCard
                    img={item.img}
                    userName={item.userName}
                    userEmail={item.userEmail}
                    theme={item.theme}
                    userImg={item.userImg}
                    heartCount={item.heart}
                  />
                </Col>
              );
            })}
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default GalleryCardPreview;
