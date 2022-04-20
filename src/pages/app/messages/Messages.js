import React, { useEffect, useState } from "react";
import Head from "../../../layout/head/Head";
import MessageItem from "./MessageItem";
import ContentAlt from "../../../layout/content/ContentAlt";
import Simplebar from "simplebar-react";
import { Button, Icon, UserAvatar } from "../../../components/Component";
import { messageData } from "./MessageData";
import { findUpper } from "../../../utils/Utils";

const AppMessages = () => {
  const [data, setData] = useState(messageData);
  const [filteredTabData, setFilteredTabData] = useState(messageData);
  const [filterTab, setFilterTab] = useState("1");
  const [search, setOnSearch] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [selectedId, setSelectedIt] = useState(1);
  const [mobileView, setMobileView] = useState(false);

  const onInputChange = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    if (filterText !== "") {
      const filteredData = messageData.filter((item) => {
        return (
          item.name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.messageTitle.toLowerCase().includes(filterText.toLowerCase())
        );
      });
      setData([...filteredData]);
    } else {
      setData(filteredTabData);
    }
  }, [filterText, filterTab, filteredTabData]);

  useEffect(() => {
    let filteredData;
    if (filterTab === "1") {
      filteredData = messageData.filter((item) => {
        return item.closed === false;
      });
      setData(filteredData);
      setFilteredTabData(filteredData);
    } else if (filterTab === "2") {
      filteredData = messageData.filter((item) => {
        return item.closed === true;
      });
      setData(filteredData);
      setFilteredTabData(filteredData);
    } else if (filterTab === "3") {
      filteredData = messageData.filter((item) => {
        return item.marked === true;
      });
      setData(filteredData);
      setFilteredTabData(filteredData);
    } else {
      filteredData = messageData;
      setData(filteredData);
      setFilteredTabData(filteredData);
    }
  }, [filterTab]);

  const onSearchBack = () => {
    setOnSearch(false);
    setFilterText("");
  };

  const onClosed = (id) => {
    let newData = data;
    const index = newData.findIndex((item) => item.id === id);
    newData[index].closed = true;
    setData([...newData]);
  };

  const onMessageClick = (id) => {
    setSelectedIt(id);
    if (window.innerWidth <= 990) {
      setMobileView(true);
    }
  };

  return (
    <React.Fragment>
      <Head title="App Messages"></Head>
      <ContentAlt>
        <div className="nk-msg">
          <div className="nk-msg-aside hide-aside">
            <div className="nk-msg-nav">
              <ul className="nk-msg-menu">
                <li className={`nk-msg-menu-item ${filterTab === "1" && " active"}`} onClick={() => setFilterTab("1")}>
                  <a
                    href="#active"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    Active
                  </a>
                </li>
                <li className={`nk-msg-menu-item ${filterTab === "2" && " active"}`} onClick={() => setFilterTab("2")}>
                  <a
                    href="#closed"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    Closed
                  </a>
                </li>
                <li className={`nk-msg-menu-item ${filterTab === "3" && " active"}`} onClick={() => setFilterTab("3")}>
                  <a
                    href="#stared"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    Stared
                  </a>
                </li>
                <li className={`nk-msg-menu-item ${filterTab === "4" && " active"}`} onClick={() => setFilterTab("4")}>
                  <a
                    href="#all"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    All
                  </a>
                </li>
                <li className="nk-msg-menu-item ml-auto" onClick={() => setOnSearch(true)}>
                  <a
                    href="#search"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="search-toggle toggle-search"
                  >
                    <Icon name="search"></Icon>
                  </a>
                </li>
              </ul>
              <div className={`search-wrap ${search && " active"}`}>
                <div className="search-content">
                  <a
                    href="#search"
                    className="search-back btn btn-icon toggle-search"
                    onClick={(ev) => {
                      ev.preventDefault();
                      onSearchBack();
                    }}
                  >
                    <Icon name="arrow-left"></Icon>
                  </a>
                  <input
                    type="text"
                    className="border-transparent form-focus-none form-control"
                    placeholder="Search by user or message"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Button className="search-submit btn-icon">
                    <Icon name="search"></Icon>
                  </Button>
                </div>
              </div>
            </div>

            <Simplebar className="nk-msg-list">
              {data.map((item) => {
                return (
                  <div
                    className={`nk-msg-item ${selectedId === item.id ? "current" : ""}`}
                    key={item.id}
                    onClick={() => onMessageClick(item.id)}
                  >
                    <UserAvatar
                      className="nk-nk-msg-media"
                      theme={item.theme}
                      image={item.image}
                      text={findUpper(item.name)}
                    ></UserAvatar>

                    <div className="nk-msg-info">
                      <div className="nk-msg-from">
                        <div className="nk-msg-sender">
                          <div className="name">{item.name}</div>
                          {item.closed && <div className={`lable-tag dot bg-danger`}></div>}
                        </div>
                        <div className="nk-msg-meta">
                          <div className="attchment">{item.attactchment && <Icon name="clip-h"></Icon>}</div>
                          <div className="date">{item.date}</div>
                        </div>
                      </div>
                      <div className="nk-msg-context">
                        <div className="nk-msg-text">
                          <h6 className="title">{item.messageTitle}</h6>
                          <p>{item.message}</p>
                        </div>
                        <div className="nk-msg-lables">
                          <div className="asterisk">
                            <a
                              href="#starred"
                              onClick={(ev) => {
                                ev.preventDefault();
                              }}
                            >
                              {item.marked ? (
                                <Icon className="asterisk-off" name="star-fill"></Icon>
                              ) : (
                                <Icon className="asterisk-off" name="star"></Icon>
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Simplebar>
          </div>
          {/*nk-aside*/}
          <MessageItem
            id={selectedId}
            setMobileView={setMobileView}
            mobileView={mobileView}
            onClosed={onClosed}
            data={data}
          />
        </div>
      </ContentAlt>
    </React.Fragment>
  );
};
export default AppMessages;
