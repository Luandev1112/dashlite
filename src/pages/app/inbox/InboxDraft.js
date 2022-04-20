import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import InboxForm from "./InboxForm";
import { Icon, TooltipComponent } from "../../../components/Component";
import { Badge, Spinner, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const InboxDraftList = ({ item, deleteInbox, onArchiveClick, onFavoriteClick, checkMessage, data, setData }) => {
  const [compose, setCompose] = useState(false);
  const [draftData, setDraftData] = useState({ id: "", mail: "", subject: "", message: "" });
  const toggleModal = () => {
    setCompose(!compose);
  };
  return (
    <React.Fragment>
      <div className={`nk-ibx-item is-unread`} key={item.id}>
        <a
          href="#item"
          onClick={(ev) => {
            ev.preventDefault();
            setDraftData({
              mail: item.message.reply[item.message.reply.length - 1].to.mail,
              subject: item.message.subject,
              message: item.message.reply[item.message.reply.length - 1].replyMessage[0],
            });
            toggleModal();
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
          <p className="text-danger">Draft</p>
        </div>
        <div className="nk-ibx-item-elem nk-ibx-item-fluid">
          <div className="nk-ibx-context-group">
            {item.message.meta.tags.length > 0 && (
              <div className="nk-ibx-context-badges">
                <Badge color={item.message.meta.tags[0].color}>{item.message.meta.tags[0].text}</Badge>
              </div>
            )}
            <div className="nk-ibx-context">
              <span className="nk-ibx-context-text">
                <span className="heading">{item.message.subject ? item.message.subject : "(no subject)"}</span>{" "}
                {item.message.reply[item.message.reply.length - 1].replyMessage[0]}
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
                  text="Archive"
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
                          <span>Archive</span>
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
      <InboxForm
        mailData={data}
        setMailData={setData}
        toggleModal={toggleModal}
        composeState={compose}
        composeMail={draftData.mail}
        draftData={draftData}
        currentItem={item}
        deleteInbox={deleteInbox}
        editOnOpen
      />
    </React.Fragment>
  );
};

const InboxDraft = ({
  data,
  setData,
  tabData,
  checkMessage,
  refresh,
  deleteInbox,
  onArchiveClick,
  onFavoriteClick,
}) => {
  return (
    <SimpleBar className="nk-ibx-list">
      {refresh ? (
        <div className="d-flex flex-row justify-content-center align-items-center mt-5">
          <Spinner size="lg" type="grow" color="primary"></Spinner>
        </div>
      ) : tabData.length > 0 ? (
        tabData.map((item) => {
          return (
            <InboxDraftList
              key={item.id}
              item={item}
              onArchiveClick={onArchiveClick}
              onFavoriteClick={onFavoriteClick}
              deleteInbox={deleteInbox}
              checkMessage={checkMessage}
              data={data}
              setData={setData}
            />
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <span className="text-mute">No mails available</span>
        </div>
      )}
    </SimpleBar>
  );
};

export default InboxDraft;
