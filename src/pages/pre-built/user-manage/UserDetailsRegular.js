import React, { useContext, useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Card, Modal, ModalBody } from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Col,
  Row,
  OverlineTitle,
  Sidebar,
  UserAvatar,
} from "../../../components/Component";
import { useHistory } from "react-router";
import { currentTime, findUpper, monthNames, todaysDate } from "../../../utils/Utils";
import { UserContext } from "./UserContext";
import { notes } from "./UserData";

const UserDetailsPage = ({ match }) => {
  const { contextData } = useContext(UserContext);
  const [data] = contextData;

  const [sideBar, setSidebar] = useState(false);
  const [user, setUser] = useState();
  const [noteData, setNoteData] = useState(notes);
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [addNoteText, setAddNoteText] = useState("");
  const history = useHistory();

  // grabs the id of the url and loads the corresponding data
  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);

  // function to toggle sidebar
  const toggle = () => {
    setSidebar(!sideBar);
  };

  // delete a note
  const deleteNote = (id) => {
    let defaultNote = noteData;
    defaultNote = defaultNote.filter((item) => item.id !== id);
    setNoteData(defaultNote);
  };

  const submitNote = () => {
    let submitData = {
      id: Math.random(),
      text: addNoteText,
      date: `${monthNames[todaysDate.getMonth()]} ${todaysDate.getDate()}, ${todaysDate.getFullYear()}`,
      time: `${currentTime()}`,
      company: "Softnio",
    };
    setNoteData([...noteData, submitData]);
    setAddNoteModal(false);
    setAddNoteText("");
  };

  return (
    <React.Fragment>
      <Head title="User Details - Regular"></Head>
      {user && (
        <Content>
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle tag="h3" page>
                  Users / <strong className="text-primary small">{user.name}</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      User ID: <span className="text-base">UD003054</span>
                    </li>
                    <li>
                      Last Login: <span className="text-base">{user.lastLogin} 01:02 PM</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Button
                  color="light"
                  outline
                  className="bg-white d-none d-sm-inline-flex"
                  onClick={() => history.goBack()}
                >
                  <Icon name="arrow-left"></Icon>
                  <span>Back</span>
                </Button>
                <a
                  href="#back"
                  onClick={(ev) => {
                    ev.preventDefault();
                    history.goBack();
                  }}
                  className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
                >
                  <Icon name="arrow-left"></Icon>
                </a>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <Card className="card-bordered">
              <div className="card-aside-wrap" id="user-detail-block">
                <div className="card-content">
                  <ul className="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#personal"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="user-circle"></Icon>
                        <span>Personal</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#transactions"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="repeat"></Icon>
                        <span>Transactions</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#documents"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="file-text"></Icon>
                        <span>Documents</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#notifications"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="bell"></Icon>
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#activities"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="activity"></Icon>
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="nav-item nav-item-trigger d-xxl-none">
                      <Button className={`toggle btn-icon btn-trigger ${sideBar && "active"}`} onClick={toggle}>
                        <Icon name="user-list-fill"></Icon>
                      </Button>
                    </li>
                  </ul>

                  <div className="card-inner">
                    <Block>
                      <BlockHead>
                        <BlockTitle tag="h5">Personal Information</BlockTitle>
                        <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                      </BlockHead>
                      <div className="profile-ud-list">
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Title</span>
                            <span className="profile-ud-value">Mr.</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Full Name</span>
                            <span className="profile-ud-value">{user.name}</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Date of Birth</span>
                            <span className="profile-ud-value">{user.dob}</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Surname</span>
                            <span className="profile-ud-value">{user.name.split(" ")[1]}</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Mobile Number</span>
                            <span className="profile-ud-value">{user.phone}</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Email Address</span>
                            <span className="profile-ud-value">{user.email}</span>
                          </div>
                        </div>
                      </div>
                    </Block>

                    <Block>
                      <BlockHead className="nk-block-head-line">
                        <BlockTitle tag="h6" className="overline-title text-base">
                          Additional Information
                        </BlockTitle>
                      </BlockHead>
                      <div className="profile-ud-list">
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Joining Date</span>
                            <span className="profile-ud-value">08-16-2018 09:04PM</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Reg Method</span>
                            <span className="profile-ud-value">Email</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Country</span>
                            <span className="profile-ud-value">{user.country}</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Nationality</span>
                            <span className="profile-ud-value">{user.country}</span>
                          </div>
                        </div>
                      </div>
                    </Block>

                    <div className="nk-divider divider md"></div>

                    <Block>
                      <BlockHead size="sm">
                        <BlockBetween>
                          <BlockTitle tag="h5">Admin Note</BlockTitle>
                          <a
                            href="#addnote"
                            onClick={(ev) => {
                              ev.preventDefault();
                              setAddNoteModal(true);
                            }}
                            className="link link-sm"
                          >
                            + Add Note
                          </a>
                        </BlockBetween>
                      </BlockHead>
                      <div className="bq-note">
                        {noteData.map((item) => (
                          <div className="bq-note-item" key={item.id}>
                            <div className="bq-note-text">
                              <p>{item.text}</p>
                            </div>
                            <div className="bq-note-meta">
                              <span className="bq-note-added">
                                Added on <span className="date">{item.date}</span> at{" "}
                                <span className="time">{item.time} PM</span>
                              </span>
                              <span className="bq-note-sep sep">|</span>
                              <span className="bq-note-by">
                                By <span>{item.company}</span>
                              </span>
                              <a
                                href="#deletenote"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  deleteNote(item.id);
                                }}
                                className="link link-sm link-danger"
                              >
                                Delete Note
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Block>
                  </div>
                </div>

                <Modal
                  isOpen={addNoteModal}
                  toggle={() => setAddNoteModal(false)}
                  className="modal-dialog-centered"
                  size="lg"
                >
                  <ModalBody>
                    <a
                      href="#cancel"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setAddNoteModal(false);
                        setAddNoteText("");
                      }}
                      className="close"
                    >
                      <Icon name="cross-sm"></Icon>
                    </a>
                    <div className="p-2">
                      <h5 className="title">Add Admin Note</h5>
                      <div className="mt-4 mb-4">
                        <textarea
                          defaultValue={addNoteText}
                          className="form-control no-resize"
                          onChange={(e) => setAddNoteText(e.target.value)}
                        />
                      </div>
                      <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                        <li>
                          <Button color="primary" size="md" type="submit" onClick={submitNote}>
                            Add Note
                          </Button>
                        </li>
                        <li>
                          <Button onClick={() => setAddNoteModal(false)} className="link link-light">
                            Cancel
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </ModalBody>
                </Modal>

                <Sidebar toggleState={sideBar}>
                  <div className="card-inner">
                    <div className="user-card user-card-s2 mt-5 mt-xxl-0">
                      <UserAvatar className="lg" theme="primary" text={findUpper(user.name)} />
                      <div className="user-info">
                        <div className="badge badge-outline-light badge-pill ucap">{user.role}</div>
                        <h5>{user.name}</h5>
                        <span className="sub-text">{user.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-inner card-inner-sm">
                    <ul className="btn-toolbar justify-center gx-1">
                      <li>
                        <Button
                          href="#tool"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="btn-trigger btn-icon"
                        >
                          <Icon name="shield-off"></Icon>
                        </Button>
                      </li>
                      <li>
                        <Button
                          href="#mail"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="btn-trigger btn-icon"
                        >
                          <Icon name="mail"></Icon>
                        </Button>
                      </li>
                      <li>
                        <Button
                          href="#download"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="btn-trigger btn-icon"
                        >
                          <Icon name="download-cloud"></Icon>
                        </Button>
                      </li>
                      <li>
                        <Button
                          href="#bookmark"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="btn-trigger btn-icon"
                        >
                          <Icon name="bookmark"></Icon>
                        </Button>
                      </li>
                      <li>
                        <Button
                          href="#cancel"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="btn-trigger btn-icon text-danger"
                        >
                          <Icon name="na"></Icon>
                        </Button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-inner">
                    <div className="overline-title-alt mb-2">In Account</div>
                    <div className="profile-balance">
                      <div className="profile-balance-group gx-4">
                        <div className="profile-balance-sub">
                          <div className="profile-balance-amount">
                            <div className="number">
                              2,500.00 <small className="currency currency-usd">USD</small>
                            </div>
                          </div>
                          <div className="profile-balance-subtitle">Invested Amount</div>
                        </div>
                        <div className="profile-balance-sub">
                          <span className="profile-balance-plus text-soft">
                            <Icon className="ni-plus"></Icon>
                          </span>
                          <div className="profile-balance-amount">
                            <div className="number">1,643.76</div>
                          </div>
                          <div className="profile-balance-subtitle">Profit Earned</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-inner">
                    <Row className="text-center">
                      <Col size="4">
                        <div className="profile-stats">
                          <span className="amount">{user.tasks}</span>
                          <span className="sub-text">Total Order</span>
                        </div>
                      </Col>
                      <Col size="4">
                        <div className="profile-stats">
                          <span className="amount">{user.projects}</span>
                          <span className="sub-text">Complete</span>
                        </div>
                      </Col>
                      <Col size="4">
                        <div className="profile-stats">
                          <span className="amount">{user.performed}</span>
                          <span className="sub-text">Progress</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-inner">
                    <h6 className="overline-title-alt mb-2">Additional</h6>
                    <Row className="g-3">
                      <Col size="6">
                        <span className="sub-text">User ID:</span>
                        <span>UD003054</span>
                      </Col>
                      <Col size="6">
                        <span className="sub-text">Last Login:</span>
                        <span>{user.lastLogin} 01:02 PM</span>
                      </Col>
                      <Col size="6">
                        <span className="sub-text">KYC Status:</span>
                        <span
                          className={`lead-text text-${
                            user.kycStatus === "success"
                              ? "success"
                              : user.kycStatus === "pending"
                              ? "info"
                              : user.kycStatus === "warning"
                              ? "warning"
                              : "secondary"
                          }`}
                        >
                          {user.kycStatus.toUpperCase()}
                        </span>
                      </Col>
                      <Col size="6">
                        <span className="sub-text">Register At:</span>
                        <span>Nov 24, 2019</span>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-inner">
                    <OverlineTitle tag="h6" className="mb-3">
                      Groups
                    </OverlineTitle>
                    <ul className="g-1">
                      <li className="btn-group">
                        <Button
                          color="light"
                          size="xs"
                          className="btn-dim"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          investor
                        </Button>
                        <Button
                          color="light"
                          size="xs"
                          className="btn-icon btn-dim"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          <Icon className="ni-cross"></Icon>
                        </Button>
                      </li>
                      <li className="btn-group">
                        <Button
                          color="light"
                          size="xs"
                          className="btn-dim"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          support
                        </Button>
                        <Button
                          color="light"
                          size="xs"
                          className="btn-icon btn-dim"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          <Icon className="ni-cross"></Icon>
                        </Button>
                      </li>
                      <li className="btn-group">
                        <Button
                          color="light"
                          size="xs"
                          className="btn-dim"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          another tag
                        </Button>
                        <Button
                          color="light"
                          size="xs"
                          className="btn-icon btn-dim"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          <Icon className="ni-cross"></Icon>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </Sidebar>
                {sideBar && <div className="toggle-overlay" onClick={() => toggle()}></div>}
              </div>
            </Card>
          </Block>
        </Content>
      )}
    </React.Fragment>
  );
};
export default UserDetailsPage;
