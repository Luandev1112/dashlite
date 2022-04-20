import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Card } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
} from "../../../components/Component";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapPage = () => {
  return (
    <React.Fragment>
      <Head title="Google map"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Google Map
            </BlockTitle>
            <BlockDes>
              <p className="lead">Google map is using with Embed code and API Scripts</p>
              <p className="lead">
                For more info please visit{" "}
                <a href="https://mapsplatform.google.com/" target="_blank" rel="noreferrer">
                  Google Cloud
                </a>
                .
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Map with Embed</BlockTitle>
              <BlockDes>
                For using map with embed code you need to go on Google Map site. Set your location & take embed script
                for display your location.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Card className="card-bordered w-100 h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19218.666257142526!2d-0.038921204804245685!3d52.97840720396935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d7c2c53856f733%3A0x8406d541f1a0910c!2sBoston%2C%20UK!5e0!3m2!1sen!2sbd!4v1632376229328!5m2!1sen!2sbd"
                className="google-map border-0"
                height="400"
                allowFullScreen=""
                loading="lazy"
                title="google-map"
              ></iframe>
            </Card>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` <Card className="card-bordered w-100 h-100">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19218.666257142526!2d-0.038921204804245685!3d52.97840720396935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d7c2c53856f733%3A0x8406d541f1a0910c!2sBoston%2C%20UK!5e0!3m2!1sen!2sbd!4v1632376229328!5m2!1sen!2sbd"
    className="google-map border-0"
    height="400"
    aallowFullScreen=""
    loading="lazy"
  ></iframe>
</Card>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Map with API</BlockTitle>
              <BlockDes>
                For using map with JavaScript API script you need to go on Google Maps Platform. Set your API script &
                added Javascript code for display your location. In this case{" "}
                <a href="https://react-google-maps-api-docs.netlify.app/" target="_blank" rel="noreferrer">
                  React-Google-Maps
                </a>{" "}
                package is used. All that is needed is to add the api key provided.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Card className="card-bordered w-100 h-100">
              <LoadScript googleMapsApiKey="AIzaSyCtOtiFYyiZeSXwiL9RS7PR8cQQXMvZNXI">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                  {/* Child components, such as markers, info windows, etc. */}
                  <></>
                </GoogleMap>
              </LoadScript>
            </Card>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` <Card className="card-bordered w-100 h-100">
  <LoadScript googleMapsApiKey="YOUR_API_KEY">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  </LoadScript>
</Card>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default GoogleMapPage;
