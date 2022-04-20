import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { UserAvatar, Icon } from "../../../../components/Component";
import { findUpper } from "../../../../utils/Utils";
import { contacts } from "./ContactData";
import { chatData } from "../ChatData";
import { ContactItem } from "../ChatPartials";

const AppContact = ({ setTab, setSelectedId }) => {
  const [contactData] = useState(contacts);
  const [filterData, setFilterData] = useState([]);
  const [filterText, setFilter] = useState("");

  useEffect(() => {
    if (filterText !== "") {
      const filteredObject = chatData.filter((item) => {
        return item.name.toLowerCase().includes(filterText.toLowerCase());
      });
      setFilterData([...filteredObject]);
    } else {
      setFilterData([]);
    }
  }, [filterText]);

  const onInputChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <React.Fragment>
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
                return <ContactItem key={idx} item={item} setTab={setTab} setSelectedId={setSelectedId}></ContactItem>;
              })
            )
          ) : (
            <ul className="contacts-list">
              {filterData.map((contact, idx) => {
                return (
                  <React.Fragment>
                    <li
                      key={idx}
                      onClick={() => {
                        setTab("Chats");
                        setSelectedId(contact.id);
                      }}
                    >
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
                          <Link to={`${process.env.PUBLIC_URL}/app-chat`}>Start Chat</Link>
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
    </React.Fragment>
  );
};
export default AppContact;
