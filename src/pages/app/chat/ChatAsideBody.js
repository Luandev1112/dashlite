import React, { useContext } from "react";
import { Icon, UserAvatar } from "../../../components/Component";
import SimpleBar from "simplebar-react";
import { Input, Button } from "reactstrap";
import { ChatItem, ContactItem } from "./ChatPartials";
import { findUpper } from "../../../utils/Utils";
import { chatData } from "./ChatData";
import { ChatContext } from "./ChatContext";

export const ChatAsideBody = ({
  onInputChange,
  favState,
  favFilter,
  setFavState,
  setSelectedId,
  selectedId,
  favInputSearchChange,
  favFilterText,
  filterTab,
  chatItemClick,
  filteredChatList,
}) => {
  const { fav, favAction } = useContext(ChatContext);
  const [favData] = fav;
  const defaultChat = filteredChatList.filter((item) => item.group !== true);

  return (
    <SimpleBar className="nk-chat-aside-body">
      <div className="nk-chat-aside-search">
        <div className="form-group">
          <div className="form-control-wrap">
            <div className="form-icon form-icon-left">
              <Icon name="search"></Icon>
            </div>
            <Input
              type="text"
              className="form-round"
              id="default-03"
              placeholder="Search by name"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="nk-chat-aside-panel nk-chat-fav">
        <h6 className="title overline-title-alt">Favorites</h6>
        <ul className="fav-list">
          <li>
            <Button
              color="light"
              outline
              size="lg"
              className="btn-icon btn-white btn-round"
              onClick={() => setFavState(!favState)}
            >
              <Icon name={favState ? "cross" : "plus"}></Icon>
            </Button>
          </li>
          {favData.map((user, idx) => {
            return (
              user.fav === true && (
                <li key={idx} onClick={() => setSelectedId(user.id)}>
                  <a href="#dropdown" onClick={(ev) => ev.preventDefault()}>
                    <UserAvatar image={user.image} theme={user.theme} text={findUpper(user.name)}>
                      <span className={`status dot dot-lg dot-${user.active === true ? "success" : "gray"}`}></span>
                    </UserAvatar>
                  </a>
                </li>
              )
            );
          })}
        </ul>
      </div>
      {favState && (
        <SimpleBar className="nk-chat-aside-body">
          <div className="nk-chat-aside-search">
            <div className="form-group">
              <div className="form-control-wrap">
                <div className="form-icon form-icon-left">
                  <Icon name="search"></Icon>
                </div>
                <Input
                  type="text"
                  className="form-round"
                  id="default-03"
                  placeholder="Search by name"
                  onChange={(e) => favInputSearchChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="nk-chat-aside-panel nk-chat-contact">
            <ul className="contacts-list">
              {favFilter.length === 0 ? (
                favFilterText ? (
                  <div className="ml-3">No user found</div>
                ) : (
                  favData.slice(0, 3).map((contact, idx) => {
                    return (
                      contact.fav === false && (
                        <li key={idx} onClick={() => favAction(contact.id)}>
                          <div className="user-card">
                            <a href="#card" onClick={(ev) => ev.preventDefault()}>
                              <UserAvatar
                                text={findUpper(contact.name)}
                                theme={contact.theme}
                                image={contact.image}
                              ></UserAvatar>
                              <div className="user-name">{contact.name}</div>
                            </a>
                            <div className="user-actions">
                              <a href="#add-fav" onClick={(ev) => ev.preventDefault()}>
                                Add to favourite
                              </a>
                            </div>
                          </div>
                        </li>
                      )
                    );
                  })
                )
              ) : (
                favFilter.map((contact, idx) => {
                  return (
                    contact.fav === false && (
                      <li key={idx} onClick={() => favAction(contact.id)}>
                        <div className="user-card">
                          <a href="#card" onClick={(ev) => ev.preventDefault()}>
                            <UserAvatar
                              text={findUpper(contact.name)}
                              theme={contact.theme}
                              image={contact.image}
                            ></UserAvatar>
                            <div className="user-name">{contact.name}</div>
                          </a>
                          <div className="user-actions">
                            <a href="#start-chat" onClick={(ev) => ev.preventDefault()}>
                              Start Chat
                            </a>
                          </div>
                        </div>
                      </li>
                    )
                  );
                })
              )}
            </ul>
          </div>
        </SimpleBar>
      )}
      <div className="nk-chat-list">
        <h6 className="title overline-title-alt">{filterTab}</h6>
        <ul className="chat-list">
          {defaultChat.length !== 0 ? (
            filteredChatList.map((item, idx) => {
              if (filterTab === "messages") {
                return (
                  item.convo.length > 0 &&
                  !item.group &&
                  !item.archive && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              } else if (filterTab === "archive") {
                return (
                  item.convo.length > 0 &&
                  item.archive &&
                  !item.group && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              } else if (filterTab === "unread") {
                return (
                  item.convo.length > 0 &&
                  item.unread &&
                  !item.group && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              } else {
                return (
                  item.convo.length > 0 &&
                  !item.channel &&
                  item.group && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              }
            })
          ) : (
            <p className="m-3">No user found</p>
          )}
        </ul>
      </div>
    </SimpleBar>
  );
};

export const ChannelAsideBody = ({
  filteredChatList,
  onInputChange,
  setSelectedId,
  setMobileView,
  selectedId,
  filterTab,
  chatItemClick,
}) => {
  const defaultChat = filteredChatList.filter((item) => item.group === true);
  return (
    <SimpleBar className="nk-chat-aside-body">
      <div className="nk-chat-aside-search">
        <div className="form-group">
          <div className="form-control-wrap">
            <div className="form-icon form-icon-left">
              <Icon name="search"></Icon>
            </div>
            <Input
              type="text"
              className="form-round"
              id="default-03"
              placeholder="Search by name"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="nk-chat-aside-panel nk-chat-channel">
        <h6 className="title overline-title-alt">All Channels</h6>
        <ul className="channel-list">
          {chatData.map((item, idx) => {
            return (
              item.channel && (
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedId(item.id);
                    if (window.innerWidth < 860) setMobileView(true);
                  }}
                >
                  <a
                    href="#name"
                    onClick={(ev) => ev.preventDefault()}
                    className={selectedId === item.id ? "active" : ""}
                  >
                    # {item.name}
                  </a>
                </li>
              )
            );
          })}
        </ul>
      </div>
      <div className="nk-chat-list">
        <h6 className="title overline-title-alt">Teams / Groups</h6>
        <ul className="chat-list">
          {defaultChat.length !== 0 ? (
            filteredChatList.map((item, idx) => {
              if (filterTab === "messages") {
                return (
                  item.convo.length > 0 &&
                  item.group &&
                  !item.archive &&
                  !item.channel && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              } else if (filterTab === "archive") {
                return (
                  item.convo.length > 0 &&
                  !item.channel &&
                  item.archive &&
                  item.group && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              } else if (filterTab === "unread") {
                return (
                  item.convo.length > 0 &&
                  !item.channel &&
                  item.unread &&
                  item.group && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              } else {
                return (
                  item.convo.length > 0 &&
                  !item.channel &&
                  item.group && (
                    <ChatItem
                      key={idx}
                      item={item}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                      chatItemClick={chatItemClick}
                    ></ChatItem>
                  )
                );
              }
            })
          ) : (
            <p className="m-3">No group found</p>
          )}
        </ul>
      </div>
    </SimpleBar>
  );
};

export const ContactAsideBody = (onInputChange, filterData, filterText, contactData, setSelectedId) => {
  return (
    <SimpleBar className="nk-chat-aside-body">
      <div className="nk-chat-aside-search">
        <div className="form-group">
          <div className="form-control-wrap">
            <div className="form-icon form-icon-left">
              <Icon name="search"></Icon>
            </div>
            <input
              type="text"
              className="form-round form-control"
              id="default-03"
              placeholder="Search by name"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="nk-chat-aside-panel nk-chat-contact">
        {filterData.length === 0 ? (
          filterText ? (
            <div className="ml-5">No user</div>
          ) : (
            contactData.map((item, idx) => {
              return <ContactItem key={idx} item={item}></ContactItem>;
            })
          )
        ) : (
          <ul className="contacts-list">
            {filterData.map((contact, idx) => {
              return (
                <React.Fragment>
                  <li key={idx} setSelectedId={setSelectedId(contact.id)}>
                    <div className="user-card">
                      <a href="#name" onClick={(ev) => ev.preventDefault()}>
                        <UserAvatar
                          text={findUpper(contact.name)}
                          theme={contact.theme}
                          image={contact.image}
                        ></UserAvatar>
                        <div className="user-name">{contact.name}</div>
                      </a>
                      <div className="user-actions">
                        <a href="#start-chat" onClick={(ev) => ev.preventDefault()}>
                          Start Chat
                        </a>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        )}
      </div>
    </SimpleBar>
  );
};
