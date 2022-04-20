import React from "react";
import PageContainer from "../../layout/page-container/PageContainer";
import { Link } from "react-router-dom";
import { Block, BlockContent, Button } from "../../components/Component";

const Error504Classic = () => {
  return (
    <PageContainer>
      <Block className="nk-block-middle wide-xs mx-auto">
        <BlockContent className="nk-error-ld text-center">
          <h1 className="nk-error-head">504</h1>
          <h3 className="nk-error-title">Oops! Why you’re here?</h3>
          <p className="nk-error-text">
            We are very sorry for inconvenience. It looks like you’re try to access a page that either has been deleted
            or never existed.
          </p>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Button color="primary" size="lg" className="mt-2">
              Back To Home
            </Button>
          </Link>
        </BlockContent>
      </Block>
    </PageContainer>
  );
};
export default Error504Classic;
