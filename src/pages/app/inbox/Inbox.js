import React, { useState, useEffect } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import InboxAside from "./InboxAside";
import InboxBody from "./InboxBody";
import { navData, inboxLabels, contacts, inboxList } from "./InboxData";

const Inbox = () => {
  const [currentTab, setCurrentTab] = useState("Inbox");
  const [aside, setAside] = useState(false);
  const [mailId, setMailId] = useState(1);
  const [messageView, setMessageView] = useState(false);
  const [data, setData] = useState(inboxList);
  const [tabData, setTabData] = useState([]);
  const [labels, setLabels] = useState(inboxLabels);
  const [filterLabel, setFilterLabel] = useState("");
  const [contact, setContact] = useState(contacts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  // Filters mail list according to tabs
  useEffect(() => {
    if (currentTab !== "All Mails" && currentTab !== "Trash" && currentTab !== "Archive") {
      let defaultData = data.filter(
        (item) =>
          item.message.meta[currentTab.toLowerCase()] === true &&
          item.message.meta.trash !== true &&
          item.message.meta.archive !== true
      );
      setTimeout(() => setTabData([...defaultData]), 1);
    } else if (currentTab === "Archive") {
      let defaultData = data.filter((item) => item.message.meta.archive === true);
      setTabData([...defaultData]);
    } else if (currentTab === "Trash") {
      let defaultData = data.filter((item) => item.message.meta.trash === true);
      setTabData([...defaultData]);
    } else if (currentTab === "All Mails") {
      let defaultData = data.filter(
        (item) =>
          item.message.meta.trash !== true &&
          item.message.meta.archive !== true &&
          item.message.meta.sent !== true &&
          item.message.meta.draft !== true
      );
      setTabData([...defaultData]);
    } else {
      setTabData(inboxList);
    }
    setFilterLabel("");
    setCurrentPage(1);
  }, [currentTab, data, inboxList]); // eslint-disable-line react-hooks/exhaustive-deps

  // Filters data according to labels
  useEffect(() => {
    let defaultData;
    if (currentTab === "All Mails") {
      defaultData = data.filter(
        (item) =>
          item.message.meta.tags !== undefined &&
          item.message.meta.tags.length > 0 &&
          item.message.meta.tags[0].text === filterLabel
      );
    } else {
      defaultData = data.filter(
        (item) =>
          item.message.meta.tags !== undefined &&
          item.message.meta.tags.length > 0 &&
          item.message.meta[currentTab.toLowerCase()] === true &&
          item.message.meta.tags[0].text === filterLabel
      );
    }
    setTabData([...defaultData]);
    setCurrentPage(1);
  }, [filterLabel]); // eslint-disable-line react-hooks/exhaustive-deps

  // Resizes
  useEffect(() => {
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  const resizeFunc = () => {
    setAside(false);
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = tabData.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <Head title="Inbox"></Head>
      <Content>
        <div className="nk-ibx">
          <InboxAside
            navData={navData}
            aside={aside}
            setAside={setAside}
            data={data}
            setData={setData}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            contact={contact}
            setContact={setContact}
            labels={labels}
            setLabels={setLabels}
            setFilterLabel={setFilterLabel}
            setMessageView={setMessageView}
          />
          {aside && <div className="toggle-overlay" onClick={() => setAside(!aside)}></div>}
          <InboxBody
            data={data}
            setData={setData}
            aside={aside}
            setAside={setAside}
            currentTab={currentTab}
            tabData={currentItems}
            setTabData={setTabData}
            messageView={messageView}
            setMessageView={setMessageView}
            mailId={mailId}
            setMailId={setMailId}
            outerLabels={labels}
            itemPerPage={itemPerPage}
            totalItems={tabData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Inbox;
