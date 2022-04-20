import React, { useEffect, useState, useContext, useRef } from "react";
import classNames from "classnames";
import ChatSideBar from "./ChatSideBar";
import SimpleBar from "simplebar-react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { UserAvatar, Icon, Button } from "../../../components/Component";
import { currentTime, findUpper, truncate } from "../../../utils/Utils";
import { ChatContext } from "./ChatContext";

import { MeChat, YouChat, MetaChat } from "./ChatPartials";

const ChatBody = ({ id, mobileView, setMobileView, setSelectedId }) => {
  const { deleteConvo, propAction, chatState } = useContext(ChatContext);
  const [chat, setChat] = chatState;
  const [Uchat, setUchat] = useState({});
  const [sidebar, setsidebar] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chatOptions, setChatOptions] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const scrollHeight = messagesEndRef.current.scrollHeight;
      const height = messagesEndRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [Uchat]);

  const resizeFunc = () => {
    if (window.innerWidth > 1550) {
      setsidebar(true);
    } else {
      setsidebar(false);
    }
  };

  useEffect(() => {
    chat.forEach((item) => {
      if (item.id === id) {
        setUchat(item);
      }
    });
  }, [id, chat]);

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);
    resizeFunc();
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  const onChatOptions = () => {
    setChatOptions(!chatOptions);
  };

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleMenu = () => {
    setsidebar(!sidebar);
  };

  const onTextSubmit = (e) => {
    e.preventDefault();
    let allChat = chat;
    let index = allChat.find((item) => item.id === id);
    let defaultChat = Uchat;
    let text = truncate(inputText, 74);
    let newChatItem;
    if (inputText !== "") {
      if (defaultChat.convo.length === 0) {
        newChatItem = {
          id: `chat_${defaultChat.convo.length + 2}`,
          me: true,
          chat: [text],
          date: `${currentTime()}`,
        };
        defaultChat.convo = [...defaultChat.convo, newChatItem];
      } else {
        if (defaultChat.convo[defaultChat.convo.length - 1].me === true) {
          newChatItem = {
            id: `chat_${defaultChat.convo.length + 2}`,
            me: true,
            chat: [...defaultChat.convo[defaultChat.convo.length - 1].chat, text],
            date: `${currentTime()}`,
          };
          defaultChat.convo[defaultChat.convo.length - 1] = newChatItem;
        } else {
          let newChatItem = {
            id: `chat_${defaultChat.convo.length + 2}`,
            me: true,
            chat: [text],
            date: `${currentTime()}`,
          };
          defaultChat.convo = [...defaultChat.convo, newChatItem];
        }
      }
    }
    allChat[index] = defaultChat;
    setChat([...allChat]);
    setUchat({ ...defaultChat });
    setInputText("");
  };

  const onRemoveMessage = (idx, id) => {
    let allChat = chat;
    let cindex = allChat.find((item) => item.id === id);
    let defaultChat = Uchat;
    let newConvo = defaultChat.convo;
    let index = newConvo.findIndex((item) => item.id === id);
    newConvo[index].chat[idx] = "deleted";
    allChat[cindex] = defaultChat;
    setChat([...allChat]);
  };

  const chatBodyClass = classNames({
    "nk-chat-body": true,
    "show-chat": mobileView,
    "profile-shown": sidebar && window.innerWidth > 1550,
  });

  return (
    <React.Fragment>
      {Object.keys(Uchat).length > 0 && (
        <div className={chatBodyClass}>
          <div className="nk-chat-head">
            <ul className="nk-chat-head-info">
              <li className="nk-chat-body-close" onClick={() => setMobileView(false)}>
                <a
                  href="#hide-chat"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  className="btn btn-icon btn-trigger nk-chat-hide ml-n1"
                >
                  <Icon name="arrow-left"></Icon>
                </a>
              </li>
              <li className="nk-chat-head-user">
                <div className="user-card">
                  {Uchat.group ? (
                    <div className="chat-media user-avatar user-avatar-multiple">
                      {Uchat.user.map((user,index) => {
                        return (
                          <UserAvatar
                            theme={user.theme}
                            text={findUpper(user.name)}
                            image={user.image}
                            className="chat-media"
                            key={index}
                          ></UserAvatar>
                        );
                      })}
                      <span className={"status dot dot-lg dot-success"}></span>
                    </div>
                  ) : (
                    <UserAvatar image={Uchat.image} theme={Uchat.theme} text={findUpper(Uchat.name)}>
                      {Uchat.active === true ? (
                        <span className="status dot dot-lg dot-success"></span>
                      ) : (
                        <span className="status dot dot-lg dot-gray"></span>
                      )}
                    </UserAvatar>
                  )}
                  <div className="user-info">
                    <div className="lead-text">{Uchat.nickname ? Uchat.nickname : Uchat.name}</div>
                    <div className="sub-text">
                      <span className="d-none d-sm-inline mr-1">Active </span>{" "}
                      {Uchat.active === true ? "Now" : `${Uchat.active} ago `}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nk-chat-head-tools">
              <li>
                <a
                  href="#call"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  className="btn btn-icon btn-trigger text-primary"
                >
                  <Icon name="call-fill"></Icon>
                </a>
              </li>
              <li>
                <a
                  href="#video"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  className="btn btn-icon btn-trigger text-primary"
                >
                  <Icon name="video-fill"></Icon>
                </a>
              </li>
              <li className="d-none d-sm-block">
                <UncontrolledDropdown>
                  <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger text-primary">
                    <Icon name="setting-fill"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu">
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          className="dropdown-item"
                          disabled={Uchat.archive}
                          href="#dropdown"
                          onClick={(ev) => {
                            ev.preventDefault();
                            propAction(id, "archive");
                          }}
                        >
                          <Icon name="archive"></Icon>
                          <span>Make as Archive</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          className="dropdown-item"
                          href="#dropdown"
                          onClick={(ev) => {
                            ev.preventDefault();
                            deleteConvo(id);
                            setSelectedId(null);
                          }}
                        >
                          <Icon name="cross-c"></Icon>
                          <span>Remove Conversion</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="mr-n1 mr-md-n2">
                <a
                  href="#alert"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                  }}
                  className="btn btn-icon btn-trigger text-primary chat-profile-toggle"
                >
                  <Icon name="alert-circle-fill"></Icon>
                </a>
              </li>
            </ul>
          </div>
          <SimpleBar className="nk-chat-panel" scrollableNodeProps={{ ref: messagesEndRef }}>
            {Uchat.convo.map((item, idx) => {
              if (item.me) {
                return <MeChat key={idx} item={item} chat={Uchat} onRemoveMessage={onRemoveMessage}></MeChat>;
              } else if (item.meta) {
                return <MetaChat key={idx} item={item.meta.metaText}></MetaChat>;
              } else {
                return <YouChat key={idx} item={item} chat={Uchat}></YouChat>;
              }
            })}
          </SimpleBar>
          <div className="nk-chat-editor">
            <div className="nk-chat-editor-upload  ml-n1">
              <Button
                size="sm"
                className={`btn-icon btn-trigger text-primary toggle-opt ${chatOptions ? "active" : ""}`}
                onClick={() => onChatOptions()}
              >
                <Icon name="plus-circle-fill"></Icon>
              </Button>
              <div className={`chat-upload-option ${chatOptions ? "expanded" : ""}`}>
                <ul className="">
                  <li>
                    <a
                      href="#img"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon name="img-fill"></Icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camera"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon name="camera-fill"></Icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mic"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon name="mic"></Icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#grid"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon name="grid-sq"></Icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nk-chat-editor-form">
              <div className="form-control-wrap">
                <textarea
                  className="form-control form-control-simple no-resize"
                  rows="1"
                  id="default-textarea"
                  onChange={(e) => onInputChange(e)}
                  value={inputText}
                  placeholder="Type your message..."
                  onKeyDown={(e) => {
                    e.code === "Enter" && onTextSubmit(e);
                  }}
                ></textarea>
              </div>
            </div>
            <ul className="nk-chat-editor-tools g-2">
              <li>
                <Button size="sm" className="btn-icon btn-trigger text-primary">
                  <Icon name="happyf-fill"></Icon>
                </Button>
              </li>
              <li>
                <Button color="primary" onClick={(e) => onTextSubmit(e)} className="btn-round btn-icon">
                  <Icon name="send-alt"></Icon>
                </Button>
              </li>
            </ul>
          </div>

          <ChatSideBar sidebar={sidebar} chat={Uchat} />

          {window.innerWidth < 1550 && sidebar && (
            <div onClick={() => toggleMenu()} className="nk-chat-profile-overlay"></div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ChatBody;
