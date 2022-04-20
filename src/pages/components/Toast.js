import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";

import { Toast, ToastHeader, ToastBody } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const ToastPage = ({ ...props }) => {
  const [show, setShow] = useState(true);
  const toggle = () => setShow(!show);

  return (
    <React.Fragment>
      <Head title="Toast" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Toast
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
                It's built with flexbox, so they’re easy to align and position. To use it, import it such as{" "}
                <code>import {`{Toast,ToastHeader,ToastBody}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/toasts"} target="_blank" rel="noreferrer">
                  Reactstrap
                </a>{" "}
                library for detailed instructions.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Examples</BlockTitle>
              <p>Toasts are lightweight notifications designed to mimic the push notifications.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Toast isOpen={show}>
              <ToastHeader
                toggle={toggle}
                close={
                  <>
                    <small>11 mins ago</small>
                    <button className="close" onClick={toggle}>
                      <Icon name="cross-sm" />
                    </button>
                  </>
                }
              >
                <span className="text-primary">Reactstrap</span>
              </ToastHeader>
              <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const ToastExample = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {setisOpen(!isOpen)};
    return (
      <Toast isOpen={show}>
        <ToastHeader
          toggle={toggle}
          close={
            <>
              <small>11 mins ago</small>
              <button className="close" onClick={toggle}>
                <Icon name="cross-sm" />
              </button>
            </>
          }
        >
          <span className="text-primary">Reactstrap</span>
        </ToastHeader>
        <ToastBody>Hello, world! This is a toast message.</ToastBody>
      </Toast>
    )
  }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Stacking</BlockTitle>
              <p>You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="toast-container">
              <Toast>
                <ToastHeader
                  close={
                    <>
                      <small>just now</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-primary">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>See? Just like this.</ToastBody>
              </Toast>
              <Toast>
                <ToastHeader
                  close={
                    <>
                      <small>2 seconds ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-primary">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Heads up, toasts will stack automatically</ToastBody>
              </Toast>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const ToastExample = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {setisOpen(!isOpen)};
    return (
    <div className="toast-container">
      <Toast>
        <ToastHeader
          close={
            <>
              <small>just now</small>
              <button className="close" onClick={toggle}>
                <Icon name="cross-sm" />
              </button>
            </>
          }
        >
          <strong className="text-primary">Reactstrap</strong>
        </ToastHeader>
        <ToastBody>See? Just like this.</ToastBody>
      </Toast>
      <Toast>
        <ToastHeader
          close={
            <>
              <small>2 seconds ago</small>
              <button className="close" onClick={toggle}>
                <Icon name="cross-sm" />
              </button>
            </>
          }
        >
          <strong className="text-primary">Reactstrap</strong>
        </ToastHeader>
        <ToastBody>Heads up, toasts will stack automatically</ToastBody>
      </Toast>
    </div>
    )
  }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Placement</BlockTitle>
              <p>
                Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the
                top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on
                the Toast.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div style={{ position: "relative", minHeight: "200px" }}>
              <Toast style={{ position: "absolute", top: 0, right: 0 }}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-primary">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const ToastExample = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {setisOpen(!isOpen)};
    return (
      <div style={{ position: "relative", minHeight: "200px" }}>
        <Toast style={{ position: "absolute", top: 0, right: 0 }}>
          <ToastHeader
            close={
              <>
                <small>11 mins ago</small>
                <button className="close" onClick={toggle}>
                  <Icon name="cross-sm" />
                </button>
              </>
            }
          >
            <strong className="text-primary">Reactstrap</strong>
          </ToastHeader>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </div>
    )
  }`}
          </CodeBlock>
          <PreviewCard>
            <div style={{ position: "relative", minHeight: "200px" }}>
              <div className="toast-container" style={{ position: "absolute", top: 0, right: 0 }}>
                <Toast>
                  <ToastHeader
                    close={
                      <>
                        <small>just now</small>
                        <button className="close">
                          <Icon name="cross-sm" />
                        </button>
                      </>
                    }
                  >
                    <strong className="text-primary">Reactstrap</strong>
                  </ToastHeader>
                  <ToastBody>See? Just like this.</ToastBody>
                </Toast>
                <Toast>
                  <ToastHeader
                    close={
                      <>
                        <small>2 seconds ago</small>
                        <button className="close">
                          <Icon name="cross-sm" />
                        </button>
                      </>
                    }
                  >
                    <strong className="text-primary">Reactstrap</strong>
                  </ToastHeader>
                  <ToastBody>Heads up, toasts will stack automatically</ToastBody>
                </Toast>
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const ToastExample = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {setisOpen(!isOpen)};
    return (
      <div style={{ position: "relative", minHeight: "200px" }}>
        <div className="toast-container" style={{ position: "absolute", top: 0, right: 0 }}>
          <Toast>
            <ToastHeader
              close={
                <>
                  <small>just now</small>
                  <button className="close" onClick={toggle}>
                    <Icon name="cross-sm" />
                  </button>
                </>
              }
            >
              <strong className="text-primary">Reactstrap</strong>
            </ToastHeader>
            <ToastBody>See? Just like this.</ToastBody>
          </Toast>
          <Toast>
            <ToastHeader
              close={
                <>
                  <small>2 seconds ago</small>
                  <button className="close" onClick={toggle}>
                    <Icon name="cross-sm" />
                  </button>
                </>
              }
            >
              <strong className="text-primary">Reactstrap</strong>
            </ToastHeader>
            <ToastBody>
              Heads up, toasts will stack automatically
            </ToastBody>
          </Toast>
        </div>
      </div>
    )
  }
`}
          </CodeBlock>
          <PreviewCard>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
              <Toast>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-primary">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const ToastExample = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {setisOpen(!isOpen)};
    return (
      <div style={{ position: "relative", minHeight: "200px" }}>
        <Toast style={{ position: "absolute", top: 0, right: 0 }}>
          <ToastHeader
            close={
              <>
                <small>11 mins ago</small>
                <button className="close" onClick={toggle}>
                  <Icon name="cross-sm" />
                </button>
              </>
            }
          >
            <strong className="text-primary">Reactstrap</strong>
          </ToastHeader>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </div>
    )
  }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Translucent</BlockTitle>
              <p>
                Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers
                that support the backdrop-filter CSS property, we’ll also attempt to blur the elements under a toast.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="p-3 my-2 bg-primary rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-primary">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div className="p-3 my-2 bg-secondary rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-secondary">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div className="p-3 my-2 bg-success rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-success">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div className="p-3 my-2 bg-danger rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-danger">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div className="p-3 my-2 bg-warning rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-warning">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div className="p-3 my-2 bg-info rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-info">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
            <div className="p-3 my-2 bg-dark rounded">
              <Toast isOpen={show}>
                <ToastHeader
                  close={
                    <>
                      <small>11 mins ago</small>
                      <button className="close">
                        <Icon name="cross-sm" />
                      </button>
                    </>
                  }
                >
                  <strong className="text-dark">Reactstrap</strong>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
              </Toast>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const ToastExample = () => {
    const [isOpen , setisOpen] = useState(false);

    const toggle = () => {setisOpen(!isOpen)};
    return (
      <div className="p-3 my-2 bg-primary rounded">
        <Toast isOpen={show}>
          <ToastHeader>
            <strong className="text-primary">Reactstrap</strong>
          </ToastHeader>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </div>
    )
  }`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ToastPage;
