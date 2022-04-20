import React, { useEffect, useState } from "react";
import InboxBodyHead from "./InboxBodyHead";
import SimpleBar from "simplebar-react";
import InboxMessages from "./InboxMessages";
import InboxDraft, { InboxDraftList } from "./InboxDraft";
import { contacts } from "./InboxData";
import { Icon, UserAvatar, TooltipComponent } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from "reactstrap";

const InboxBody = ({
  data,
  aside,
  setAside,
  setData,
  tabData,
  setTabData,
  currentTab,
  messageView,
  setMessageView,
  mailId,
  setMailId,
  outerLabels,
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const [check, setChecked] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setChecked(false);
  }, [currentTab]);

  useEffect(() => {
    let defaultData = tabData;
    defaultData = defaultData.map((item) => {
      item.message.meta.checked = check;
      return item;
    });
    setTabData([...defaultData]);
  }, [check]); // eslint-disable-line react-hooks/exhaustive-deps

  const checkMessage = (id, val) => {
    let defaultData = data;
    let item = defaultData.findIndex((el) => el.id === id);
    defaultData[item].message.meta.checked = val;
    setData([...defaultData]);
  };

  const selectorDeleteInbox = () => {
    let defaultData = data;
    if (currentTab !== "Trash") {
      defaultData.forEach((item) => {
        if (item.message.meta.checked === true) {
          item.message.meta.trash = true;
          item.message.meta.archive = false;
          item.message.meta.checked = false;
          return item;
        }
      });
    } else {
      defaultData.forEach((item) => {
        if (item.message.meta.checked === true) {
          item.message.meta.trash = false;
          item.message.meta.checked = false;
          item.message.meta.draft = false;
          item.message.meta.inbox = false;
          item.message.meta.favourite = false;
          item.message.meta.sent = false;
          item.message.meta.archive = false;
          item.message.meta.spam = false;
          return item;
        }
      });
    }
    setData([...defaultData]);
  };

  const selectorArchive = () => {
    let defaultData = data;
    if (currentTab === "Archive") {
      defaultData.forEach((item) => {
        if (item.message.meta.checked === true) {
          item.message.meta.archive = false;
          item.message.meta.checked = false;
          return item;
        }
      });
      setData([...defaultData]);
    } else {
      defaultData.forEach((item) => {
        if (item.message.meta.checked === true) {
          item.message.meta.archive = true;
          item.message.meta.checked = false;
          return item;
        }
      });
      setData([...defaultData]);
    }
  };

  const unArchive = (id) => {
    let defaultData = data;
    let item = defaultData.findIndex((item) => item.id === id);
    defaultData[item].message.meta.archive = false;
  };

  const deleteInbox = (id) => {
    let defaultData = data;
    if (currentTab !== "Trash") {
      let item = defaultData.findIndex((item) => item.id === id);
      defaultData[item].message.meta.trash = true;
      defaultData[item].message.meta.archive = false;
    } else {
      let item = defaultData.findIndex((item) => item.id === id);
      defaultData[item].message.meta.trash = false;
      defaultData[item].message.meta.draft = false;
      defaultData[item].message.meta.inbox = false;
      defaultData[item].message.meta.favourite = false;
      defaultData[item].message.meta.sent = false;
      defaultData[item].message.meta.archive = false;
      defaultData[item].message.meta.spam = false;
    }
    setData([...defaultData]);
    setMessageView(false);
  };

  const onFavoriteClick = (id) => {
    let defaultData = data;
    let item = defaultData.findIndex((item) => item.id === id);
    defaultData[item].message.meta.favourite = !defaultData[item].message.meta.favourite;
    setData([...defaultData]);
  };

  const toggleUnread = (id) => {
    let defaultData = data;
    let item = defaultData.findIndex((item) => item.id === id);
    defaultData[item].message.meta.unread = true;
    setData([...defaultData]);
  };

  const onArchiveClick = (id) => {
    let defaultData = data;
    let item = defaultData.findIndex((item) => item.id === id);
    if (currentTab === "Archive") {
      defaultData[item].message.meta.archive = false;
    } else {
      defaultData[item].message.meta.archive = true;
    }
    setData([...defaultData]);
    setMessageView(false);
  };

  const onSpamClick = (id) => {
    let defaultData = data;
    let item = defaultData.findIndex((item) => item.id === id);
    defaultData[item].message.meta.spam = true;
    setData([...defaultData]);
    setMessageView(false);
  };

  const toggleMessageView = () => {
    setMessageView(!messageView);
  };

  const toggleRefresh = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 3000);
  };

  const getUser = (id) => {
    let user = contacts.find((el) => el.id === id);
    return user;
  };

  const onListClick = (ev, item) => {
    if (
      (currentTab === "Trash" && item.message.meta.draft === true) ||
      (currentTab === "Archive" && item.message.meta.draft === true)
    ) {
    } else {
      ev.preventDefault();
      toggleMessageView();
      setMailId(item.id);
      toggleUnread(item.id);
    }
  };

  return (
    <div className="nk-ibx-body bg-white">
      {messageView ? (
        <InboxMessages
          data={data}
          mailId={mailId}
          setMailId={setMailId}
          toggleMessageView={toggleMessageView}
          onFavoriteClick={onFavoriteClick}
          deleteInbox={deleteInbox}
          onArchiveClick={onArchiveClick}
          onSpamClick={onSpamClick}
          outerLabels={outerLabels}
        />
      ) : (
        <React.Fragment>
          <InboxBodyHead
            data={tabData}
            aside={aside}
            setAside={setAside}
            allData={data}
            setData={setTabData}
            currentTab={currentTab}
            check={check}
            setChecked={setChecked}
            selectorDeleteInbox={selectorDeleteInbox}
            selectorArchive={selectorArchive}
            toggleRefresh={toggleRefresh}
            itemPerPage={itemPerPage}
            totalItems={totalItems}
            paginate={paginate}
            currentPage={currentPage}
          />
          {currentTab === "Draft" ? (
            <InboxDraft
              data={data}
              setData={setData}
              tabData={tabData}
              checkMessage={checkMessage}
              refresh={refresh}
              deleteInbox={deleteInbox}
              onArchiveClick={onArchiveClick}
              onFavoriteClick={onFavoriteClick}
            />
          ) : (
            <React.Fragment>
              <SimpleBar className="nk-ibx-list">
                {refresh ? (
                  <div className="d-flex flex-row justify-content-center align-items-center mt-5">
                    <Spinner size="lg" type="grow" color="primary"></Spinner>
                  </div>
                ) : tabData.length > 0 ? (
                  tabData.map((item) => {
                    let user = getUser(item.userId);
                    if (
                      (currentTab === "Trash" && item.message.meta.draft === true) ||
                      (currentTab === "Archive" && item.message.meta.draft === true)
                    ) {
                      return (
                        <InboxDraftList
                          key={item.id}
                          item={item}
                          data={data}
                          setData={setData}
                          checkMessage={checkMessage}
                          setChecked={setChecked}
                          currentTab={currentTab}
                          deleteInbox={deleteInbox}
                          onArchiveClick={onArchiveClick}
                          unArchive={unArchive}
                          onFavoriteClick={onFavoriteClick}
                        />
                      );
                    } else
                      return (
                        <div className={`nk-ibx-item ${item.message.meta.unread ? "" : "is-unread"}`} key={item.id}>
                          <a
                            href="#item"
                            onClick={(ev) => {
                              onListClick(ev, item);
                            }}
                            className="nk-ibx-link current"
                          >
                            <span></span>
                          </a>
                          <div className="nk-ibx-item-elem nk-ibx-item-check">
                            <div className="custom-control custom-control-sm custom-checkbox">
                              <input
                                type="checkbox"
                                checked={item.message.meta.checked}
                                className="custom-control-input nk-dt-item-check"
                                id={`conversionItem${item.id}`}
                                key={Math.random()}
                                onChange={(e) => checkMessage(item.id, e.target.checked)}
                              />
                              <label className="custom-control-label" htmlFor={`conversionItem${item.id}`}></label>
                            </div>
                          </div>
                          <div className="nk-ibx-item-elem nk-ibx-item-star">
                            <div className="asterisk">
                              <a
                                href="#item"
                                className={item.message.meta.favourite ? "active" : ""}
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  onFavoriteClick(item.id);
                                }}
                              >
                                <Icon name={`${item.message.meta.favourite ? "star-fill" : "star"}`}></Icon>
                              </a>
                            </div>
                          </div>
                          <div className="nk-ibx-item-elem nk-ibx-item-user">
                            {currentTab === "Sent" ? (
                              <p>
                                To :{" "}
                                {getUser(item.message.reply[0].to.user)
                                  ? getUser(item.message.reply[0].to.user).name
                                  : item.message.reply[0].to.mail.split("@")[0]
                                  ? item.message.reply[0].to.mail.split("@")[0]
                                  : item.message.reply[0].to.mail}
                              </p>
                            ) : (
                              <div className="user-card">
                                <UserAvatar text={findUpper(user.name)} image={user.img} theme={user.theme} />
                                <div className="user-name">
                                  <div className="lead-text">{user.name}</div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="nk-ibx-item-elem nk-ibx-item-fluid">
                            <div className="nk-ibx-context-group">
                              {item.message.meta.tags.length > 0 && (
                                <div className="nk-ibx-context-badges">
                                  <Badge color={item.message.meta.tags[0].color}>
                                    {item.message.meta.tags[0].text}
                                  </Badge>
                                </div>
                              )}
                              <div className="nk-ibx-context">
                                <span className="nk-ibx-context-text">
                                  <span className="heading">
                                    {item.message.subject ? item.message.subject : "(no subject)"}
                                  </span>{" "}
                                  {item.message.reply[item.message.reply.length - 1].replyMessage[1]}
                                </span>
                              </div>
                            </div>
                          </div>
                          {item.message.reply[item.message.reply.length - 1].attachment && (
                            <div className="nk-ibx-item-elem nk-ibx-item-attach">
                              <a className="link link-light" href="#link" onClick={(ev) => ev.preventDefault()}>
                                <Icon name="clip-h"></Icon>
                              </a>
                            </div>
                          )}
                          <div className="nk-ibx-item-elem nk-ibx-item-time">
                            <div className="sub-text">{item.message.reply[item.message.reply.length - 1].time}</div>
                          </div>
                          <div className="nk-ibx-item-elem nk-ibx-item-tools">
                            <div className="ibx-actions">
                              <ul className="ibx-actions-hidden gx-1">
                                <li onClick={() => onArchiveClick(item.id)}>
                                  <TooltipComponent
                                    tag="a"
                                    containerClassName="btn btn-sm btn-icon btn-trigger"
                                    icon="archived"
                                    direction="top"
                                    id={`archive${item.id}Tooltip`}
                                    text={`${currentTab === "Archive" ? "Unarchive" : "Archive"}`}
                                  ></TooltipComponent>
                                </li>
                                <li onClick={() => deleteInbox(item.id)}>
                                  <TooltipComponent
                                    tag="a"
                                    containerClassName="btn btn-sm btn-icon btn-trigger"
                                    icon="trash"
                                    direction="top"
                                    id={`delete${item.id}Tooltip`}
                                    text="Delete"
                                  ></TooltipComponent>
                                </li>
                              </ul>
                              <ul className="ibx-actions-visible gx-2">
                                <li>
                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      tag={"a"}
                                      href="#item"
                                      onClick={(ev) => ev.preventDefault()}
                                      className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    >
                                      <Icon name="more-h"></Icon>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <DropdownItem
                                            tag="a"
                                            href="#item"
                                            onClick={(ev) => {
                                              ev.preventDefault();
                                              toggleMessageView();
                                              setMailId(item.id);
                                            }}
                                          >
                                            <Icon name="eye"></Icon>
                                            <span>View</span>
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            tag="a"
                                            href="#item"
                                            onClick={(ev) => {
                                              ev.preventDefault();
                                              deleteInbox(item.id);
                                            }}
                                          >
                                            <Icon name="trash"></Icon>
                                            <span>Delete</span>
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            tag="a"
                                            href="#item"
                                            onClick={(ev) => {
                                              ev.preventDefault();
                                              onArchiveClick(item.id);
                                            }}
                                          >
                                            <Icon name="archived"></Icon>
                                            <span>{`${currentTab === "Archive" ? "Unarchive" : "Archive"}`}</span>
                                          </DropdownItem>
                                        </li>
                                      </ul>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                  })
                ) : (
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <span className="text-mute">No mails available</span>
                  </div>
                )}
              </SimpleBar>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default InboxBody;
