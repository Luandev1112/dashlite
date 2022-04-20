import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";
import classnames from "classnames";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const ModalsPage = () => {
  const [modal, setModal] = useState(false);
  const [modalSm, setModalSm] = useState(false);
  const [modalLg, setModalLg] = useState(false);
  const [modalTop, setModalTop] = useState(false);
  const [modalBtm, setModalBtm] = useState(false);
  const [modalZoom, setModalZoom] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [modalTab, setModalTab] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = () => setModal(!modal);
  const toggleSm = () => setModalSm(!modalSm);
  const toggleLg = () => setModalLg(!modalLg);
  const toggleTop = () => setModalTop(!modalTop);
  const toggleBtm = () => setModalBtm(!modalBtm);
  const toggleZoom = () => setModalZoom(!modalZoom);
  const toggleForm = () => setModalForm(!modalForm);
  const toggleTab = () => setModalTab(!modalTab);
  const toggleSuccess = () => setModalSuccess(!modalSuccess);
  const toggleModalFail = () => setModalFail(!modalFail);

  //   const code = ;
  return (
    <React.Fragment>
      <Head title="Modals" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Modals
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications,
                or completely custom content. To use it, import it such as{" "}
                <code>import {`{Modal,ModalBody,ModalBody,ModalFooter}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/modals"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Base Examples</BlockTitle>
              <p>
                Following are basic example of modals, just toggle a working modal demo by clicking the buttons below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <Button color="primary" onClick={toggle}>
                  Modal Default
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader
                    toggle={toggle}
                    close={
                      <button className="close" onClick={toggle}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus
                      nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt
                      voluptatibus atque facere autem, omnis explicabo.
                    </p>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="primary" onClick={toggleSm}>
                  Modal Small
                </Button>
                <Modal size="sm" isOpen={modalSm} toggle={toggleSm}>
                  <ModalHeader
                    toggle={toggleSm}
                    close={
                      <button className="close" onClick={toggleSm}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus
                      nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt
                      voluptatibus atque facere autem, omnis explicabo.
                    </p>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="primary" onClick={toggleLg}>
                  Modal Large
                </Button>
                <Modal size="lg" isOpen={modalLg} toggle={toggleLg}>
                  <ModalHeader
                    toggle={toggleLg}
                    close={
                      <button className="close" onClick={toggleLg}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus
                      nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt
                      voluptatibus atque facere autem, omnis explicabo.
                    </p>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="primary" onClick={toggleTop}>
                  Modal Top
                </Button>
                <Modal isOpen={modalTop} toggle={toggleTop} className="modal-dialog-top">
                  <ModalHeader
                    toggle={toggleTop}
                    close={
                      <button className="close" onClick={toggleTop}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus
                      nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt
                      voluptatibus atque facere autem, omnis explicabo.
                    </p>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="primary" onClick={toggleBtm}>
                  Modal Bottom
                </Button>
                <Modal isOpen={modalBtm} toggle={toggleBtm} className="modal-dialog-bottom">
                  <ModalHeader
                    toggle={toggleBtm}
                    close={
                      <button className="close" onClick={toggleBtm}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus
                      nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt
                      voluptatibus atque facere autem, omnis explicabo.
                    </p>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="primary" onClick={toggleZoom}>
                  Modal Zoom
                </Button>
                <Modal isOpen={modalZoom} toggle={toggleZoom} modalClassName="zoom">
                  <ModalHeader
                    toggle={toggleZoom}
                    close={
                      <button className="close" onClick={toggleZoom}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus
                      nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt
                      voluptatibus atque facere autem, omnis explicabo.
                    </p>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const ModalExample = () => {
  const [isOpen , setIsOpen] = useState(false);

  const toggle = () => {setIsOpen(!isOpen)};
  
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader
        toggle={toggle}
        close={
          <button className="close" onClick={toggle}>
            <Icon name="cross" />
          </button>
        }
      >
        Modal title
      </ModalHeader>
      <ModalBody>
        <p>Some example text for modal body</p>
      </ModalBody>
      <ModalFooter className="bg-light">
        <span className="sub-text">Modal Footer Text</span>
      </ModalFooter>
    </Modal>
  )
}`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Use-case Modal</BlockTitle>
              <p>Some use-case example of modals that helps in develop your projects.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <Button color="primary" onClick={toggleForm}>
                  Modal With Form
                </Button>
                <Modal isOpen={modalForm} toggle={toggleForm}>
                  <ModalHeader
                    toggle={toggleForm}
                    close={
                      <button className="close" onClick={toggleForm}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Customer Info
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <FormGroup>
                        <label className="form-label" htmlFor="full-name">
                          Full Name
                        </label>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control" id="full-name" />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control" id="email" />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <label className="form-label" htmlFor="phone-no">
                          Phone No
                        </label>
                        <div className="form-control-wrap">
                          <input type="number" className="form-control" id="phone-no" defaultValue="0880" />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <label className="form-label">Communication</label>
                        <ul className="custom-control-group g-3 align-center">
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="form-control custom-control-input"
                                id="fv-com-email"
                                name="com"
                                value="email"
                              />
                              <label className="custom-control-label" htmlFor="fv-com-email">
                                Email
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="form-control custom-control-input"
                                id="fv-com-sms"
                                name="com"
                                value="sms"
                              />
                              <label className="custom-control-label" htmlFor="fv-com-sms">
                                SMS
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="fv-com-phone"
                                name="com"
                                value="phone"
                              />
                              <label className="custom-control-label" htmlFor="fv-com-phone">
                                {" "}
                                Phone{" "}
                              </label>
                            </div>
                          </li>
                        </ul>
                      </FormGroup>
                      <FormGroup>
                        <label className="form-label" htmlFor="amount">
                          Amount
                        </label>
                        <div className="form-control-wrap">
                          <input type="text" className="form-control" id="amount" />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Button color="primary" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                          Save Information
                        </Button>
                      </FormGroup>
                    </form>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="secondary" onClick={toggleTab}>
                  Modal With Tabs
                </Button>
                <Modal isOpen={modalTab} toggle={toggleTab}>
                  <ModalHeader
                    toggle={toggleTab}
                    close={
                      <button className="close" onClick={toggleTab}>
                        <Icon name="cross" />
                      </button>
                    }
                  >
                    Update Profile
                  </ModalHeader>
                  <ModalBody>
                    <Nav tabs className="mt-n3">
                      <NavItem>
                        <NavLink
                          tag="a"
                          href="#tab"
                          className={classnames({ active: activeTab === "1" })}
                          onClick={(ev) => {
                            ev.preventDefault();
                            setActiveTab("1");
                          }}
                        >
                          Tab Title
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag="a"
                          href="#tab"
                          className={classnames({ active: activeTab === "2" })}
                          onClick={(ev) => {
                            ev.preventDefault();
                            setActiveTab("2");
                          }}
                        >
                          Another title
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <h6 className="title">Tab Title</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam distinctio ab
                          cupiditate veniam a aperiam architecto perspiciatis quidem provident!
                        </p>
                        <p>
                          <strong>Debitis ullam impedit</strong>, dolore architecto porro doloremque eum magni dolorum.
                        </p>
                      </TabPane>
                      <TabPane tabId="2">
                        <h6 className="title">Another Tab</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro numquam distinctio ab
                          cupiditate veniam a aperiam architecto perspiciatis quidem provident!
                        </p>
                        <p>
                          <strong>Debitis ullam impedit</strong>, dolore architecto porro doloremque eum magni dolorum.
                        </p>
                      </TabPane>
                    </TabContent>
                  </ModalBody>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="success" onClick={toggleSuccess}>
                  Modal Success
                </Button>
                <Modal isOpen={modalSuccess} toggle={toggleSuccess}>
                  <ModalBody className="modal-body-lg text-center">
                    <div className="nk-modal">
                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-check bg-success"></Icon>
                      <h4 className="nk-modal-title">Congratulations!</h4>
                      <div className="nk-modal-text">
                        <div className="caption-text">
                          You’ve successfully bought <strong>0.5968</strong> BTC for <strong>200.00</strong> USD
                        </div>
                        <span className="sub-text-sm">
                          Learn when you reciveve bitcoin in your wallet.{" "}
                          <a href="#link" onClick={(ev) => ev.preventDefault()}>
                            {" "}
                            Click here
                          </a>
                        </span>
                      </div>
                      <div className="nk-modal-action">
                        <Button color="primary" size="lg" className="btn-mw" onClick={toggleSuccess}>
                          OK
                        </Button>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter className="bg-light">
                    <div className="text-center w-100">
                      <p>
                        Earn upto $25 for each friend your refer!{" "}
                        <a href="#invite" onClick={(ev) => ev.preventDefault()}>
                          Invite friends
                        </a>
                      </p>
                    </div>
                  </ModalFooter>
                </Modal>
              </li>
              <li className="preview-item">
                <Button color="danger" onClick={toggleModalFail}>
                  Modal Danger
                </Button>
                <Modal isOpen={modalFail} toggle={toggleModalFail}>
                  <ModalBody className="modal-body-lg text-center">
                    <div className="nk-modal">
                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-cross bg-danger"></Icon>
                      <h4 className="nk-modal-title">Unable to Process!</h4>
                      <div className="nk-modal-text">
                        <p className="lead">
                          We are sorry, we were unable to process your payment. Please try after sometimes.
                        </p>
                        <p className="text-soft">If you need help please contact us at (855) 485-7373.</p>
                      </div>
                      <div className="nk-modal-action mt-5">
                        <Button color="light" size="lg" className="btn-mw" onClick={toggleModalFail}>
                          Return
                        </Button>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </li>
            </ul>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ModalsPage;
