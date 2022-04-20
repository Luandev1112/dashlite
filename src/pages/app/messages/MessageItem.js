import React, { useEffect, useState, useRef } from "react";
import SimpleBar from "simplebar-react";
import classNames from "classnames";
import MessageProfileSidebar from "./MessageProfile";
import { Modal, ModalBody, DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Button, Icon, TooltipComponent, UserAvatar } from "../../../components/Component";
import { ReplyItem, MetaItem } from "./MessagePartials";
import { currentTime, findUpper, todaysDate, monthNames } from "../../../utils/Utils";
import { assignMembers } from "./MessageData";

const MessageItem = ({ id, onClosed, mobileView, setMobileView, data }) => {
  const [itemData] = useState(data);
  const [sidebar, setSideBar] = useState(false);
  const [item, setItem] = useState({});
  const [formTab, setFormTab] = useState("1");
  const [assignModal, setAssignModal] = useState(false);
  const [textInput, setTextInput] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const scrollHeight = messagesEndRef.current.scrollHeight;
    const height = messagesEndRef.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  const resizeFunc = () => {
    if (window.innerWidth > 1540) {
      setSideBar(true);
    } else {
      setSideBar(false);
    }
  };

  useEffect(() => {
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  useEffect(() => {
    const checkId = (id) => {
      itemData.forEach((items) => {
        if (items.id === id) {
          setTimeout(setItem(items), 1000);
        }
      });
    };
    checkId(id);
  }, [id, item, itemData, data]);

  const toggleSidebar = () => {
    setSideBar(!sidebar);
  };
  const toggleAssignModal = () => {
    setAssignModal(!assignModal);
  };

  const onTextChange = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };

  const onFormSubmit = (e, note) => {
    let defaultObject = item;
    var htmlMarkup = [];
    if (textInput.trim() !== "") {
      var text = textInput.replace(/\r/g, "").split(/\n/);
      text.forEach((item) => {
        htmlMarkup.push(item);
      });
      const replyObject = {
        replyId: `rep_${item.reply.length + 1}`,
        name: "Illias Hossain",
        note: note,
        theme: "purple",
        date: `${monthNames[todaysDate.getMonth()]} ${todaysDate.getDate()}, ${todaysDate.getFullYear()}`,
        time: `${currentTime()}`,
        replyMarkup: htmlMarkup,
      };
      defaultObject.reply.push(replyObject);
      setItem({ ...defaultObject });
      setTextInput("");
    }
    setTimeout(() => scrollToBottom());
  };

  const chatBodyClass = classNames({
    "nk-msg-body": true,
    "bg-white": true,
    "show-message": mobileView,
    "profile-shown": sidebar,
  });

  return (
    <React.Fragment>
      {Object.keys(item).length > 0 && (
        <div className={chatBodyClass}>
          <div className="nk-msg-head">
            <h4 className="title d-none d-lg-block">{item.messageTitle}</h4>
            <div className="nk-msg-head-meta">
              <div className="d-none d-lg-block">
                <ul className="nk-msg-tags">
                  <li>
                    <span className="label-tag">
                      <Icon name="flag-fill"></Icon> <span>Technical Problem</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="d-lg-none">
                <Button className="btn-icon btn-trigger nk-msg-hide ml-n1" onClick={() => setMobileView(false)}>
                  <Icon name="arrow-left"></Icon>
                </Button>
              </div>
              <ul className="nk-msg-actions">
                {item.closed ? (
                  <li>
                    <span className="badge badge-dim badge-success badge-sm">
                      <Icon name="check"></Icon>
                      <span>Closed</span>
                    </span>
                  </li>
                ) : (
                  <li>
                    <Button outline size="sm" color="light" className="btn-dim" onClick={() => onClosed(id)}>
                      <Icon name="check"></Icon>
                      <span>Mark as Closed</span>
                    </Button>
                  </li>
                )}

                <li className="d-lg-none">
                  <Button
                    size="sm"
                    color="white"
                    className="btn btn-icon btn-light profile-toggle"
                    onClick={() => toggleSidebar()}
                  >
                    <Icon name="info-i"></Icon>
                  </Button>
                </li>
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="a" className="btn btn-icon btn-sm btn-white btn-light dropdown-toggle">
                      <Icon name="more-h"></Icon>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleAssignModal();
                            }}
                          >
                            <Icon name="user-add"></Icon>
                            <span>Assign To Member</span>
                          </DropdownItem>
                        </li>
                        {!item.closed && (
                          <li>
                            <DropdownItem
                              tag="a"
                              href="#dropdown"
                              onClick={(ev) => {
                                ev.preventDefault();
                                onClosed(id);
                              }}
                            >
                              <Icon name="done"></Icon>
                              <span>Mark as Close</span>
                            </DropdownItem>
                          </li>
                        )}
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </div>
            <a
              href="#toggle"
              onClick={(ev) => {
                ev.preventDefault();
                toggleSidebar();
              }}
              className={`nk-msg-profile-toggle profile-toggle ${sidebar ? "active" : ""}`}
            >
              <Icon name="arrow-left"></Icon>
            </a>
          </div>
          {/*nk-msg-head*/}
          <SimpleBar className="nk-msg-reply nk-reply" scrollableNodeProps={{ ref: messagesEndRef }}>
            <div className="nk-msg-head py-4 d-lg-none">
              <h4 className="title">{item.messageTitle}</h4>
              <ul className="nk-msg-tags">
                <li>
                  <span className="label-tag">
                    <Icon name="flag-fill"></Icon> <span>Technical Problem</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="nk-reply-item">
              <div className="nk-reply-header">
                <div className="user-card">
                  <UserAvatar size="sm" theme={item.theme} text={findUpper(item.name)} image={item.image} />
                  <div className="user-name">{item.name}</div>
                </div>
                <div className="date-time">{item.date}</div>
              </div>
              <div className="nk-reply-body">
                <div className="nk-reply-entry entry">
                  {item.messageMarkup.map((messageItem, idx) => {
                    return <p key={idx}>{messageItem}</p>;
                  })}
                </div>
              </div>
            </div>
            {item.reply &&
              item.reply.map((replyItem) => {
                if (!replyItem.meta === true) {
                  return <ReplyItem item={replyItem} key={replyItem.replyId}></ReplyItem>;
                } else {
                  return <MetaItem item={replyItem.meta.metaMarkup} key={replyItem.meta.metaId}></MetaItem>;
                }
              })}
            <div className="nk-reply-form">
              <div className="nk-reply-form-header">
                <ul className="nav nav-tabs-s2 nav-tabs nav-tabs-sm">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${formTab === "1" ? "active" : ""}`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setFormTab("1");
                      }}
                      href="#tab"
                    >
                      Reply
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${formTab === "2" ? "active" : ""}`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setFormTab("2");
                      }}
                      href="#tab"
                    >
                      Private Note
                    </a>
                  </li>
                </ul>
                <div className="nk-reply-form-title">
                  <div className="title">Reply as:</div>
                  <div className="user-avatar xs bg-purple">
                    <span>IH</span>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div className={`tab-pane ${formTab === "1" ? "active" : ""}`}>
                  <div className="nk-reply-form-editor">
                    <div className="nk-reply-form-field">
                      <textarea
                        className="form-control form-control-simple no-resize"
                        placeholder="Hello"
                        value={textInput}
                        onChange={(e) => onTextChange(e)}
                      />
                    </div>
                    <div className="nk-reply-form-tools">
                      <ul className="nk-reply-form-actions g-1">
                        <li className="mr-2">
                          <Button color="primary" type="submit" onClick={(e) => onFormSubmit(e)}>
                            Reply
                          </Button>
                        </li>
                        <li>
                          <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="btn btn-icon btn-sm btn-tooltip">
                              <Icon name="hash"></Icon>
                            </DropdownToggle>
                            <DropdownMenu right className="dropdown-menu">
                              <ul className="link-list-opt no-bdr link-list-template">
                                <li className="opt-head">
                                  <span>Quick Insert</span>
                                </li>
                                <li>
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdown"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <span>Thank you message</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdown"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <span>Your issues solved</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem
                                    href="#dropdown"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <span>Thank you message</span>
                                  </DropdownItem>
                                </li>
                                <li className="divider" />
                                <li>
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdown"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <Icon name="file-plus"></Icon>
                                    <span>Save as Template</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdown"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <Icon name="notes-alt"></Icon>
                                    <span>Manage Template</span>
                                  </DropdownItem>
                                </li>
                              </ul>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <li>
                          <TooltipComponent
                            icon="clip-v"
                            direction="top"
                            text="Upload Attachment"
                            id="upload-tooltip"
                          ></TooltipComponent>
                        </li>
                        <li>
                          <TooltipComponent
                            icon="happy"
                            direction="top"
                            text="Insert Emoji"
                            id="emoji-tooltip"
                          ></TooltipComponent>
                        </li>
                        <li>
                          <TooltipComponent icon="img" direction="top" text="Upload Images" id="img-tooltip">
                            <Icon name="img"></Icon>
                          </TooltipComponent>
                        </li>
                      </ul>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn-trigger btn btn-icon mr-n2">
                          <Icon name="more-v"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdown"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Another Option</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdown"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>More Option</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    {/* .nk-reply-form-tools */}
                  </div>
                  {/* .nk-reply-form-editor */}
                </div>
                <div className={`tab-pane ${formTab === "2" ? "active" : ""}`}>
                  <div className="nk-reply-form-editor">
                    <div className="nk-reply-form-field">
                      <textarea
                        className="form-control form-control-simple no-resize"
                        placeholder="Hello"
                        value={textInput}
                        onChange={(e) => onTextChange(e)}
                      />
                    </div>
                    <div className="nk-reply-form-tools">
                      <ul className="nk-reply-form-actions g-1">
                        <li className="mr-2">
                          <Button color="primary" onClick={(e) => onFormSubmit(e, "note")} type="submit">
                            Add Note
                          </Button>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-sm"
                            title="Upload Attachment"
                            href="#copy"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="clip-v"></Icon>
                          </a>
                        </li>
                      </ul>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn-trigger btn btn-icon mr-n2">
                          <Icon name="more-v"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdown"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Another Option</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdown"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>More Option</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    {/* .nk-reply-form-tools */}
                  </div>
                  {/* .nk-reply-form-editor */}
                </div>
              </div>
            </div>
          </SimpleBar>

          <MessageProfileSidebar sidebar={sidebar} profile={item} />

          {sidebar && (
            <div className={window.innerWidth < 1550 ? "nk-msg-profile-overlay" : ""} onClick={() => toggleSidebar()} />
          )}
        </div>
      )}

      {/*Assign Members Modal*/}
      <Modal isOpen={assignModal} toggle={toggleAssignModal} className="modal-dialog-centered" size="xs">
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              toggleAssignModal();
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="nk-modal-head">
            <h4 className="nk-modal-title title">Assign users to this message</h4>
            <div className="m-2">
              <ul className="link-list-plain">
                {assignMembers.map((user, index) => {
                  return (
                    <li
                      className="d-flex flex-row mb-1 pt-2"
                      style={{ cursor: "pointer" }}
                      onClick={toggleAssignModal}
                      key={index}
                    >
                      <UserAvatar text={findUpper(user.name)} theme={user.theme} className="sm" image={null} />
                      <div className="m-1 ml-2 fs-15px">{user.name}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default MessageItem;
