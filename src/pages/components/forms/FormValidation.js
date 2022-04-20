import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import FormValidationComponent from "../../../components/partials/form/FormValidation";
import {
  Block,
  BlockDes,
  PreviewCard,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BackTo,
} from "../../../components/Component";

const FormValidation = () => {
  return (
    <React.Fragment>
      <Head title="Form Validation"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Form Validation
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                With validation using the react-hook-form package, you can simply add validation on clientside before
                submit form. Look up the{" "}
                <a target="_blank" rel="noreferrer" href="https://react-hook-form.com/">
                  documentation
                </a>{" "}
                for further details
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Validation - Regular Style</BlockTitle>
              <BlockDes>
                <p>Below example helps you to build your own form nice way.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <FormValidationComponent id="form-1" />
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Validation - Alternate Style</BlockTitle>
              <BlockDes>
                <p>Below example helps you to build your own form nice way.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <FormValidationComponent id="form-2" alter />
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default FormValidation;
