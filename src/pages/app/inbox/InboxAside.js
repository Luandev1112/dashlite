import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import Select from "react-select";
import InboxForm from "./InboxForm";
import { useForm } from "react-hook-form";
import { Icon, UserAvatar, Button, LinkItem, LinkList } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { colourOptions } from "./InboxData";
import { ColorOptions } from "../../../components/partials/color-select-menu/ColorMenu";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  Col,
  FormGroup,
} from "reactstrap";

const InboxAside = ({
  navData,
  currentTab,
  aside,
  setAside,
  setCurrentTab,
  data,
  setData,
  contact,
  setContact,
  labels,
  setLabels,
  setFilterLabel,
  setMessageView,
}) => {
  const [composeModal, setComposeModal] = useState(false);
  const [composeMail, setComposeMail] = useState("");
  const [labelModal, setLabelModal] = useState(false);
  const [labelEditModal, setLabelEditModal] = useState({
    toggle: false,
    value: {
      editId: 0,
      label: "",
      theme: "",
    },
  });
  const [contactModal, setContactModal] = useState(false);
  const [theme, changeTheme] = useState(colourOptions[0].value);

  const getTabDataNum = (tab) => {
    if (tab !== "All Mails" && tab !== "Trash" && tab !== "Archive" && tab !== "Draft") {
      let defaultData = data.filter(
        (item) =>
          item.message.meta[tab.toLowerCase()] === true &&
          item.message.meta.trash !== true &&
          item.message.meta.archive !== true &&
          item.message.meta.unread !== true
      );
      return defaultData.length;
    } else if (tab === "Draft") {
      let defaultData = data.filter(
        (item) =>
          item.message.meta.draft === true && item.message.meta.trash !== true && item.message.meta.archive !== true
      );
      return defaultData.length;
    } else if (tab === "Archive") {
      let defaultData = data.filter((item) => item.message.meta.archive === true);
      return defaultData.length;
    } else if (tab === "Trash") {
      let defaultData = data.filter((item) => item.message.meta.trash === true);
      return defaultData.length;
    } else {
      return data.length;
    }
  };

  const onLabelFormSubmit = (data) => {
    let dataObject = {
      id: labels.length + 1,
      text: data.label,
      color: theme,
    };
    setLabels([dataObject, ...labels]);
    setLabelModal(false);
    changeTheme(colourOptions[0].value);
  };

  const onLabelEditFormSubmit = (data) => {
    let dataObject = {
      id: labels.length + 1,
      text: data.label,
      color: theme,
    };
    let defaultData = labels;
    let foundData = defaultData.findIndex((item) => item.id === labelEditModal.value.editId);
    defaultData[foundData] = dataObject;
    setLabels([...defaultData]);
    setLabelEditModal({ ...labelEditModal, toggle: false });
    changeTheme(colourOptions[0].value);
  };

  const onContactFormSubmit = (data) => {
    let dataObject = {
      id: contact.length + 1,
      name: data.name,
      theme: "primary",
      designation: data.designation,
      mail: data.mail,
    };
    setContact([dataObject, ...contact]);
    setContactModal(false);
  };

  const deleteLabel = (id) => {
    let defaultVal = labels.filter((item) => item.id !== id);
    setLabels(defaultVal);
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <div className={`nk-ibx-aside toggle-screen-lg ${aside ? "content-active" : ""}`}>
      <div className="nk-ibx-head">
        <h5 className="mb-0">NioMail</h5>
        <a
          href="#toggle"
          onClick={(ev) => {
            ev.preventDefault();
            setComposeMail("");
            setComposeModal(true);
          }}
          className="link link-primary"
        >
          <Icon name="plus"></Icon> <span>Compose</span>
        </a>
      </div>
      <SimpleBar className="nk-ibx-nav">
        <React.Fragment>
          <ul className="nk-ibx-menu">
            {navData.map((item) => (
              <li className={currentTab === item.name ? "active" : ""} key={item.name}>
                <a
                  className="nk-ibx-menu-item"
                  href="#menu-item"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setCurrentTab(item.name);
                    setAside(false);
                    setMessageView(false);
                  }}
                >
                  <Icon name={item.icon}></Icon>
                  <span className="nk-ibx-menu-text">{item.name}</span>
                  {item.badge && (
                    <span className={`badge badge-pill badge-${item.badge.theme}`}>{getTabDataNum(item.name)}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="nk-ibx-nav-head">
            <h6 className="title">Label</h6>
            <a
              className="link"
              href="#add"
              onClick={(ev) => {
                ev.preventDefault();
                setLabelModal(true);
              }}
            >
              <Icon name="plus-c"></Icon>
            </a>
          </div>
          <ul className="nk-ibx-label">
            {labels.map((item) => (
              <li key={item.id}>
                <a
                  href="#select"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setFilterLabel(item.text);
                  }}
                >
                  <span className={`nk-ibx-label-dot dot dot-xl dot-label bg-${item.color}`}></span>
                  <span className="nk-ibx-label-text">{item.text}</span>
                </a>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="a"
                    href="#item"
                    onClick={(ev) => ev.preventDefault()}
                    className="dropdown-toggle"
                  >
                    <Icon name="more-v"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-sm">
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setLabelEditModal({
                              toggle: true,
                              value: { label: item.text, theme: item.color, editId: item.id },
                            });
                          }}
                        >
                          <span>Edit Label</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          onClick={(ev) => {
                            ev.preventDefault();
                            deleteLabel(item.id);
                          }}
                        >
                          <span>Remove Label</span>
                        </DropdownItem>
                      </li>
                      <li className="divider"></li>
                    </ul>
                    <ul className="link-check">
                      <li>
                        <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                          Show if unread
                        </DropdownItem>
                      </li>
                      <li className="active">
                        <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                          Show
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                          Hide
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            ))}
          </ul>
          <div className="nk-ibx-nav-head">
            <h6 className="title">Contact</h6>
            <a
              className="link"
              href="#add"
              onClick={(ev) => {
                ev.preventDefault();
                setContactModal(true);
              }}
            >
              <Icon name="plus-c"></Icon>
            </a>
          </div>
          <ul className="nk-ibx-contact">
            {contact.slice(0, 4).map((item) => (
              <li key={item.id}>
                <a href="#item" onClick={(ev) => ev.preventDefault()}>
                  <div className="user-card">
                    <UserAvatar text={findUpper(item.name)} theme={item.theme} image={item.img}></UserAvatar>
                    <div className="user-info">
                      <span className="lead-text">{item.name}</span>
                      <span className="sub-text">{item.designation ? item.designation : item.mail}</span>
                    </div>
                  </div>
                </a>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="a"
                    href="#item"
                    onClick={(ev) => ev.preventDefault()}
                    className="dropdown-toggle"
                  >
                    <Icon name="more-v"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xs">
                    <LinkList opt className="link-list-opt no-bdr">
                      <LinkItem link={"/user-details-regular/1"}>View Profile</LinkItem>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setComposeMail(item.mail);
                            setComposeModal(true);
                          }}
                        >
                          <span>Send Email</span>
                        </DropdownItem>
                      </li>
                      <LinkItem link={"/app-chat"}>Start Chat</LinkItem>
                    </LinkList>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            ))}
          </ul>
          <div className="nk-ibx-status">
            <div className="nk-ibx-status-info">
              <Icon name="hard-drive"></Icon>
              <span>
                <strong>6 GB</strong> (5%) of 100GB used
              </span>
            </div>
            <div className="progress progress-md bg-light">
              <div className="progress-bar" style={{ width: "5%" }}></div>
            </div>
          </div>
        </React.Fragment>
      </SimpleBar>
      <InboxForm
        mailData={data}
        setMailData={setData}
        toggleModal={setComposeModal}
        composeMail={composeMail}
        composeState={composeModal}
        draftData={{ subject: "", message: "" }}
      />
      <Modal isOpen={labelModal} toggle={() => setLabelModal(false)}>
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              setLabelModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">Add Label</h5>
            <div className="mt-4">
              <form className="row gy-4" onSubmit={handleSubmit(onLabelFormSubmit)}>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Label Text</label>
                    <input
                      type="text"
                      name="label"
                      //defaultValue={formData.title}
                      // onChange={(e) => onInputChange(e)}
                      className="form-control"
                      ref={register({ required: "This field is required" })}
                    />
                    {errors.label && <span className="invalid">{errors.label.message}</span>}
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Select Color</label>
                    <div className="form-control-select">
                      <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        formatOptionLabel={ColorOptions}
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        onChange={(e) => changeTheme(e.value)}
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                        Add Label
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={(ev) => {
                          ev.preventDefault();
                          setLabelModal(false);
                        }}
                        className="link link-light"
                      >
                        Cancel
                      </Button>
                    </li>
                  </ul>
                </Col>
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={labelEditModal.toggle} toggle={() => setLabelEditModal({ ...labelEditModal, toggle: false })}>
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              setLabelEditModal({ ...labelEditModal, toggle: false });
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">Edit Label</h5>
            <div className="mt-4">
              <form className="row gy-4" onSubmit={handleSubmit(onLabelEditFormSubmit)}>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Label Text</label>
                    <input
                      type="text"
                      name="label"
                      value={labelEditModal.value.label}
                      //defaultValue={formData.title}
                      onChange={(e) =>
                        setLabelEditModal({
                          ...labelEditModal,
                          value: { ...labelEditModal.value, label: e.target.value },
                        })
                      }
                      className="form-control"
                      ref={register({ required: "This field is required" })}
                    />
                    {errors.label && <span className="invalid">{errors.label.message}</span>}
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Select Color</label>
                    <div className="form-control-select">
                      <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        formatOptionLabel={ColorOptions}
                        defaultValue={colourOptions.find((item) => item.value === labelEditModal.value.theme)}
                        options={colourOptions}
                        onChange={(e) => changeTheme(e.value)}
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                        Update Label
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={(ev) => {
                          ev.preventDefault();
                          setLabelEditModal(false);
                        }}
                        className="link link-light"
                      >
                        Cancel
                      </Button>
                    </li>
                  </ul>
                </Col>
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={contactModal} toggle={() => setContactModal(false)}>
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              setContactModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">Add Contact</h5>
            <div className="mt-4">
              <form className="row gy-4" onSubmit={handleSubmit(onContactFormSubmit)}>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      //defaultValue={formData.title}
                      // onChange={(e) => onInputChange(e)}
                      className="form-control"
                      ref={register({ required: "This field is required" })}
                    />
                    {errors.name && <span className="invalid">{errors.name.message}</span>}
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      //defaultValue={formData.title}
                      // onChange={(e) => onInputChange(e)}
                      className="form-control"
                      ref={register({ required: "This field is required" })}
                    />
                    {errors.designation && <span className="invalid">{errors.designation.message}</span>}
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <FormGroup>
                    <label className="form-label">Mail Address</label>
                    <input
                      type="email"
                      name="mail"
                      //defaultValue={formData.title}
                      // onChange={(e) => onInputChange(e)}
                      className="form-control"
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.mail && errors.mail.type === "required" && (
                      <span className="invalid">This is required</span>
                    )}
                    {errors.mail && errors.mail.type === "pattern" && (
                      <span className="invalid">{errors.mail.message}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col className="col-12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                        Add Contact
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={(ev) => {
                          ev.preventDefault();
                          setContactModal(false);
                        }}
                        className="link link-light"
                      >
                        Cancel
                      </Button>
                    </li>
                  </ul>
                </Col>
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default InboxAside;
