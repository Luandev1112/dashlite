import React, { useEffect, useState } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Icon, UserAvatar, TooltipComponent } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { contacts } from "./InboxData";

const InboxReplyItem = ({ reply, replyTo, forwardTo, deleteMessage }) => {
  const [user, setUser] = useState();
  //const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    let defaultUser = contacts.find((item) => item.id === reply.userId);
    setUser(defaultUser);
  }, [reply]);

  // const toggleCollapse = () => {
  //   //setCollapse(!collapse);
  // };

  const downloadAttachments = (attachments) => {
    attachments.forEach((at) => {
      var link = document.createElement("a");
      link.download = at.fileName;
      link.href = "";
      link.click();
    });
  };

  return (
    <div className="nk-ibx-reply-item nk-reply-item">
      {user && (
        <React.Fragment>
          <div className={`nk-reply-header nk-ibx-reply-header`}>
            <div className="nk-reply-desc">
              <UserAvatar className="nk-reply-avatar" text={findUpper(user.name)} theme={user.theme} image={user.img} />
              <div className="nk-reply-info">
                <div className="nk-reply-author lead-text">
                  {user.name} <span className="date d-sm-none">{reply.date}</span>
                </div>
                <UncontrolledDropdown className="nk-reply-msg-info">
                  <DropdownToggle
                    tag="a"
                    className="dropdown-toggle sub-text dropdown-indicator"
                    href="#toggle"
                    onClick={(ev) => ev.preventDefault()}
                  >
                    to {reply.to.user ? contacts.find((item) => item.id === reply.to.user).name : reply.to.mail}
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-md">
                    <ul className="nk-reply-msg-meta">
                      <li>
                        <span className="label">from:</span>{" "}
                        <span className="info">
                          <a href="#item" onClick={(ev) => ev.preventDefault()}>
                            {user.mail}
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="label">to:</span>{" "}
                        <span className="info">
                          <a href="#item" onClick={(ev) => ev.preventDefault()}>
                            {reply.to.user ? contacts.find((item) => item.id === reply.to.user).mail : reply.to.mail}
                          </a>
                        </span>
                      </li>
                      {reply.to.bcc && (
                        <li>
                          <span className="label">bcc:</span>{" "}
                          <span className="info">
                            <a href="#item" onClick={(ev) => ev.preventDefault()}>
                              {reply.to.bcc}
                            </a>
                          </span>
                        </li>
                      )}
                      {reply.to.cc && (
                        <li>
                          <span className="label">cc:</span>{" "}
                          <span className="info">
                            <a href="#item" onClick={(ev) => ev.preventDefault()}>
                              {reply.to.cc}
                            </a>
                          </span>
                        </li>
                      )}
                      <li>
                        <span className="label">mailed-by:</span>{" "}
                        <span className="info">
                          <a href="#item" onClick={(ev) => ev.preventDefault()}>
                            {user.mail}
                          </a>
                        </span>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <div className="nk-reply-msg-excerpt">
                  I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am
                  doing doing wrong? Please check attached files.
                </div>
              </div>
            </div>
            <ul className="nk-reply-tools g-1">
              {reply.attachment && (
                <li className="attach-msg">
                  <Icon name="clip-h"></Icon>
                </li>
              )}
              <li className="date-msg">
                <span className="date">{reply.date}</span>
              </li>
              <li className="replyto-msg" onClick={() => replyTo(user.mail)}>
                <TooltipComponent
                  tag="a"
                  containerClassName="btn btn-icon btn-trigger btn-tooltip"
                  icon="curve-up-left"
                  id="ibx-msg-reply"
                  direction="top"
                  text="Reply"
                />
              </li>
              <li className="more-actions">
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="a"
                    href="#toggle"
                    onClick={(ev) => ev.preventDefault()}
                    className="dropdown-toggle btn btn-trigger btn-icon"
                  >
                    <Icon name="more-v"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          onClick={(ev) => {
                            ev.preventDefault();
                            replyTo(user.mail);
                          }}
                        >
                          <Icon name="reply-fill"></Icon>
                          <span>Reply to</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          onClick={(ev) => {
                            ev.preventDefault();
                            forwardTo();
                          }}
                        >
                          <Icon name="forward-arrow-fill"></Icon>
                          <span>Forward</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          onClick={(ev) => {
                            ev.preventDefault();
                            deleteMessage(reply.replyId);
                          }}
                        >
                          <Icon name="trash-fill"></Icon>
                          <span>Delete this</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          </div>
          <div className={`nk-reply-body nk-ibx-reply-body is-shown`}>
            <div className="nk-reply-entry entry">
              {reply.replyMessage.map((msgItem, index) => (
                <p key={index}>{msgItem}</p>
              ))}
            </div>
            {reply.attachment && (
              <div className="attach-files">
                <ul className="attach-list">
                  {reply.attachment.map((att, index) => (
                    <li className="attach-item" key={index} onClick={() => downloadAttachments([att])}>
                      <a className="download" href="#item" onClick={(ev) => ev.preventDefault()}>
                        <Icon name="img"></Icon>
                        <span>{att.fileName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="attach-foot">
                  <span className="attach-info">{reply.attachment.length} files attached</span>
                  <a
                    className="attach-download link"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      downloadAttachments(reply.attachment);
                    }}
                  >
                    <Icon name="download"></Icon>
                    <span>Download All</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default InboxReplyItem;
