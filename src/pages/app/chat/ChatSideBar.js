import React, { useState, useContext } from "react";
import SlideA from "../../../images/slides/slide-a.jpg";
import SlideB from "../../../images/slides/slide-b.jpg";
import SlideC from "../../../images/slides/slide-c.jpg";
import { UserAvatar, Icon, LinkList, LinkItem } from "../../../components/Component";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import SimpleBar from "simplebar-react";
import { findUpper } from "../../../utils/Utils";
import { ChatContext } from "./ChatContext";

const ChatSideBar = ({ sidebar, chat }) => {
  const { changeNickname, changeTheme, userData, addUserToChat, deleteUser, makeAdmin } = useContext(ChatContext);

  const [memberState, setMemberState] = useState(false);
  const [optionState, setOptionState] = useState(false);
  const [settingState, setSettingState] = useState(false);
  const [photoState, setPhotoState] = useState(false);

  return (
    <SimpleBar className={`nk-chat-profile ${sidebar ? "visible" : ""}`}>
      <div className="user-card user-card-s2 my-4">
        {chat.group ? (
          <div className="user-avatar-group">
            {chat.user.slice(0, 3).map((user,index) => {
              return (
                <UserAvatar
                  theme={user.theme}
                  text={findUpper(user.name)}
                  image={user.image}
                  size="md"
                  className="chat-media"
                  key={index}
                ></UserAvatar>
              );
            })}
            {chat.user.length > 3 && (
              <UserAvatar theme="bg-light" text={chat.user.length - 3} size="md" className="chat-media"></UserAvatar>
            )}
          </div>
        ) : (
          <UserAvatar theme={chat.theme} image={chat.image} size="md" text={findUpper(chat.name)}></UserAvatar>
        )}
        <div className="user-info">
          <h5>{chat.nickname ? chat.nickname : chat.name}</h5>
          <span className="sub-text">Active {chat.active === true ? "now" : `${chat.active}`} ago</span>
        </div>
        <UncontrolledDropdown className="user-card-menu">
          <DropdownToggle tag="a" className="btn btn-icon btn-sm btn-trigger dropdown-toggle">
            <Icon name="more-h"></Icon>
          </DropdownToggle>
          <DropdownMenu right>
            <LinkList opt className="no-bdr">
              <LinkItem link={"/user-details-regular/1"} icon="eye">
                View Profile
              </LinkItem>
              <LinkItem link={""} tag="a" icon="na">
                Block From System
              </LinkItem>
            </LinkList>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="chat-profile">
        <div className="chat-profile-group">
          <a
            href="#options"
            onClick={(ev) => {
              ev.preventDefault();
              setOptionState(!optionState);
            }}
            className={`chat-profile-head`}
            id="chat-options"
          >
            <h6 className="title overline-title">Options</h6>
            <span className="indicator-icon">
              <Icon name={`chevron-${optionState ? "up" : "down"}`}></Icon>
            </span>
          </a>
          <div className={`chat-profile-body collapse ${optionState ? "" : "show"}`} id="chat-options">
            <div className="chat-profile-body-inner">
              <ul className="chat-profile-options">
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      tag="a"
                      href="#"
                      color="transparent"
                      className="chat-option-link"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon className="icon icon-circle bg-light ni ni-edit-alt"></Icon>
                      <span className="lead-text">{chat.group || chat.chatGroup ? "Group Name" : "Nickname"}</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <ul className="link-tidy no-bdr p-3">
                        <input
                          className="form-control mb-2"
                          type="text"
                          placeholder={chat.group || chat.chatGroup ? "Group Name" : "Nickname"}
                          onChange={(e) => changeNickname(chat.id, e.target.value)}
                        />
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      tag="a"
                      color="transparent"
                      className="chat-option-link"
                      href="#dropdown"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon name="circle-fill" className={`icon-circle bg-light text-${chat.chatTheme}`}></Icon>
                      <span className="lead-text">Change Theme</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <ul className="link-list-plain li-col3x text-center">
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            className="bg-blue"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "blue");
                            }}
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "purple");
                            }}
                            className="bg-purple"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "warning");
                            }}
                            className="bg-warning"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "success");
                            }}
                            className="bg-success"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "danger");
                            }}
                            className="bg-danger"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "info");
                            }}
                            className="bg-info"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "pink");
                            }}
                            className="bg-pink"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "orange");
                            }}
                            className="bg-orange"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#dropdown"
                            onClick={(ev) => {
                              ev.preventDefault();
                              changeTheme(chat.id, "secondary");
                            }}
                            className="bg-secondary"
                            style={{ height: "25px" }}
                          ></DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .chat-profile-group */}
        {chat.group && (
          <div className="chat-profile-group">
            <a
              href="#member"
              onClick={(ev) => {
                ev.preventDefault();
                setMemberState(!memberState);
              }}
              className="chat-profile-head"
            >
              <h6 className="title overline-title">Members</h6>
              <span className="indicator-icon">
                <Icon name={`chevron-${memberState ? "up" : "down"}`}></Icon>
              </span>
            </a>
            <div className={`chat-profile-body collapse ${memberState ? "" : "show"}`} id="chat-photos">
              <div className="chat-profile-body-inner">
                <ul className="chat-members">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="a"
                        color="transparent"
                        className="chat-members-link add-opt"
                        href="#dropdown"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="plus" className="icon-circle bg-light"></Icon>
                        <span className="sub-text">Add Member</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain">
                          {userData.map((user, key) => {
                            return (
                              <li key={key}>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdown"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    addUserToChat(chat.id, user);
                                  }}
                                >
                                  <UserAvatar
                                    text={findUpper(user.name)}
                                    theme={user.theme}
                                    className="xs"
                                    image={null}
                                  />
                                  <div className="user-name">{user.name}</div>
                                </DropdownItem>
                              </li>
                            );
                          })}
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>

                  <li>
                    {chat.user.map((user, idx) => {
                      return (
                        <div className="user-card" key={idx}>
                          <a href="#card" onClick={(ev) => ev.preventDefault()}>
                            <UserAvatar
                              size="sm"
                              theme={user.theme}
                              image={user.image}
                              text={findUpper(user.name)}
                            ></UserAvatar>
                            <div className="user-name">{user.name}</div>
                            <div className="user-role">{user.role && user.role}</div>
                          </a>
                          <div className="user-actions">
                            <UncontrolledDropdown>
                              <DropdownToggle tag="a" className="btn btn-icon btn-sm btn-trigger dropdown-toggle">
                                <Icon name="more-h"></Icon>
                              </DropdownToggle>
                              <DropdownMenu right>
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <DropdownItem
                                      tag="a"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        deleteUser(chat.id, user.id);
                                      }}
                                      href="#delete"
                                    >
                                      Remove
                                    </DropdownItem>
                                  </li>
                                  <li>
                                    <DropdownItem
                                      tag="a"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        makeAdmin(chat.id, user.id);
                                      }}
                                      href="#make-admin"
                                    >
                                      Make Admin
                                    </DropdownItem>
                                  </li>
                                </ul>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="chat-profile-group">
          <a
            href="#settings"
            onClick={(ev) => {
              ev.preventDefault();
              setSettingState(!settingState);
            }}
            className="chat-profile-head"
          >
            <h6 className="title overline-title">Settings</h6>
            <span className="indicator-icon">
              <Icon name={`chevron-${settingState ? "up" : "down"}`}></Icon>
            </span>
          </a>
          <div className={`chat-profile-body collapse ${settingState ? "" : "show"}`} id="chat-settings">
            <div className="chat-profile-body-inner">
              <ul className="chat-profile-settings">
                <li>
                  <div className="custom-control custom-control-sm custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                    <label className="custom-control-label" htmlFor="customSwitch2">
                      Notifications
                    </label>
                  </div>
                </li>
                <li>
                  <a
                    className="chat-option-link"
                    href="#ignore"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <Icon className="icon icon-circle bg-light ni ni-bell-off-fill"></Icon>
                    <div>
                      <span className="lead-text">Ignore Messages</span>
                      <span className="sub-text">You won’t be notified when message you.</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="chat-option-link"
                    href="#feedback"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <Icon className="icon icon-circle bg-light ni ni-alert-fill"></Icon>
                    <div>
                      <span className="lead-text">Something Wrong</span>
                      <span className="sub-text">Give feedback and report conversion.</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .chat-profile-group */}
        <div className="chat-profile-group">
          <a
            href="#shared"
            onClick={(ev) => {
              ev.preventDefault();
              setPhotoState(!photoState);
            }}
            className="chat-profile-head"
          >
            <h6 className="title overline-title">Shared Photos</h6>
            <span className="indicator-icon">
              <Icon name={`chevron-${photoState ? "up" : "down"}`}></Icon>
            </span>
          </a>
          <div className={`chat-profile-body collapse ${photoState ? "" : "show"}`} id="chat-photos">
            <div className="chat-profile-body-inner">
              <ul className="chat-profile-media">
                <li>
                  <a
                    href="#images"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <img src={SlideA} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="#images"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <img src={SlideB} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="#images"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <img src={SlideC} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .chat-profile-group */}
      </div>
    </SimpleBar>
  );
};
export default ChatSideBar;
