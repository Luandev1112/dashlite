import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  Icon,
  PreviewCard,
  CodeBlock,
} from "../../../components/Component";
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const CloseButton = () => {
  return (
    <span className="btn-trigger toast-close-button" role="button">
      <Icon name="cross"></Icon>
    </span>
  );
};

const CustomToast = () => {
  return (
    <div className="toastr-text">
      <h5>Update Successfully</h5>
      <p>Your profile has been successfully updated.</p>
    </div>
  );
};

const ReactToastify = () => {
  const execToast = (placement) => {
    toast.info(`This is a note for ${placement} toast`, {
      position: placement,
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };

  const successToast = () => {
    toast.success("This is a note for success toast", {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };

  const warningToast = () => {
    toast.warning("This is a note for warning toast", {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };

  const infoToast = () => {
    toast.info("This is a note for info toast", {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };

  const errorToast = () => {
    toast.error("This is a note for error toast", {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };

  const messageToast = () => {
    toast.success(<CustomToast />, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };

  const noIcon = () => {
    toast.success(<CustomToast />, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      icon: false,
      closeButton: <CloseButton />,
    });
  };

  const darkVersion = () => {
    toast.dark("This note is for the dark version toast", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      icon: false,
      closeButton: <CloseButton />,
    });
  };

  return (
    <React.Fragment>
      <Head title="React Toastify"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              React Toastify
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Every project required to display notification nice way. So in DashLite, we integrated{" "}
                <a href="https://fkhadra.github.io/react-toastify/" target="_blank" rel="noreferrer">
                  React Toastify
                </a>{" "}
                which is beautiful and simple javascript for toast notifications. Visit the{" "}
                <a href="https://fkhadra.github.io/react-toastify/" target="_blank" rel="noreferrer">
                  React Toastify
                </a>{" "}
                plugin for further details.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Toast Center</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="align-center flex-wrap g-2">
              <li>
                <Button color="primary" className="eg-toastr-default" onClick={() => execToast("bottom-right")}>
                  Default
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-toastr-bottom-center" onClick={() => execToast("bottom-center")}>
                  Bottom Center
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-toastr-bottom-left" onClick={() => execToast("bottom-left")}>
                  Bottom left
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-toastr-bottom-right" onClick={() => execToast("bottom-right")}>
                  Bottom Right
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-toastr-top-center" onClick={() => execToast("top-center")}>
                  Top Center
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-toastr-top-left" onClick={() => execToast("top-left")}>
                  Top left
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-toastr-top-right" onClick={() => execToast("top-right")}>
                  Top Right
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const infoToast = () => {
    toast.info("This is a note for info toast", {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };
              
<Button color="primary" onClick={() => info()}>
    Default
</Button>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Toast States</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="align-center flex-wrap g-2">
              <li>
                <Button color="success" className="eg-swal-success" onClick={() => successToast()}>
                  Success
                </Button>
              </li>
              <li>
                <Button color="info" className="eg-swal-info" onClick={() => infoToast()}>
                  Info
                </Button>
              </li>
              <li>
                <Button color="warning" className="eg-swal-warning" onClick={() => warningToast()}>
                  Warning
                </Button>
              </li>
              <li>
                <Button color="danger" className="eg-swal-error" onClick={() => errorToast()}>
                  Error
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const infoToast = () => {
    toast.success("This is a note for info toast", {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      closeButton: <CloseButton />,
    });
  };
              
<Button color="success" onClick={() => info()}>
    Default
</Button>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Toast Styles</BlockTitle>
              <BlockDes>
                You can pass in a custom component in <code>toast</code> function for custom markup
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="align-center flex-wrap g-2">
              <li>
                <Button color="success" className="eg-swal-success" onClick={() => messageToast()}>
                  Message With Title
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-info" onClick={() => noIcon()}>
                  No Icon Version
                </Button>
              </li>
              <li>
                <Button color="dark" className="eg-swal-warning" onClick={() => darkVersion()}>
                  Dark Version
                </Button>
              </li>
            </ul>
          </PreviewCard>
        </Block>
      </Content>
      <ToastContainer />
    </React.Fragment>
  );
};

export default ReactToastify;
