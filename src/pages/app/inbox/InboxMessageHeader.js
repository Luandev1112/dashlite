import React, { useState } from "react";
import { Icon, TooltipComponent } from "../../../components/Component";
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledTooltip } from "reactstrap";

const InboxMessageHeader = ({
  msgId,
  setMailId,
  onSpamClick,
  toggleMessageView,
  deleteInbox,
  onArchiveClick,
  localLabel,
  outerLabels,
  mailData,
  setMailData,
}) => {
  //const [searchText, setSearchText] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  // const onSearchChange = (e) => {
  //   let value = e.target.value;
  //   setSearchText(value);
  // };

  const toggleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const nextMessage = () => {
    if (msgId === 12) {
      setMailId(1);
    } else {
      setMailId(msgId + 1);
    }
  };

  const prevMessage = () => {
    if (msgId !== 1) {
      setMailId(msgId - 1);
    } else {
      setMailId(12);
    }
  };

  const changeTagsOnCheck = (checked, label) => {
    let defaultData = mailData;
    let defaultTags = mailData.message.meta.tags;
    if (checked) {
      defaultTags.push(label);
    } else {
      defaultTags = defaultTags.filter((item) => item.text !== label.text);
      mailData.message.meta.tags = defaultTags;
    }
    setMailData({ ...defaultData });
  };

  return (
    <div className="nk-ibx-head">
      <div className="nk-ibx-head-actions">
        <ul className="nk-ibx-head-tools g-1">
          <li className="ml-n2" onClick={() => toggleMessageView()}>
            <a href="#item" onClick={(ev) => ev.preventDefault()} className="btn btn-icon btn-trigger nk-ibx-hide">
              <Icon name="arrow-left"></Icon>
            </a>
          </li>
          <li onClick={() => onArchiveClick(msgId)}>
            <TooltipComponent
              tag="a"
              containerClassName="btn btn-icon btn-trigger"
              icon="archived"
              id="ibx-msg-archive"
              direction="top"
              text="Archive"
            />
          </li>
          <li className="d-none d-sm-block" onClick={() => onSpamClick(msgId)}>
            <TooltipComponent
              tag="a"
              containerClassName="btn btn-icon btn-trigger"
              icon="report"
              id="ibx-msg-spam"
              direction="top"
              text="Spam"
            />
          </li>
          <li onClick={() => deleteInbox(msgId)}>
            <TooltipComponent
              tag="a"
              containerClassName="btn btn-icon btn-trigger"
              icon="trash"
              id="ibx-msg-trash"
              direction="top"
              text="Delete"
            />
          </li>
          <li>
            <UncontrolledDropdown>
              <DropdownToggle
                tag="a"
                onClick={(ev) => ev.preventDefault()}
                className="btn btn-icon btn-trigger"
                color="transparent"
                id="dropdownToggleLabel"
              >
                <Icon name="label"></Icon>
                <UncontrolledTooltip autohide={false} placement="top" target="dropdownToggleLabel">
                  Label
                </UncontrolledTooltip>
              </DropdownToggle>
              <DropdownMenu>
                <ul className="link-tidy no-bdr sm">
                  {outerLabels.map((labelItem, index) => {
                    let findLabel = localLabel.find((item) => item.text === labelItem.text);
                    return (
                      <li key={index}>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked={findLabel ? true : false}
                            id={`check-${labelItem.text}`}
                            onChange={(e) => changeTagsOnCheck(e.target.checked, labelItem)}
                          />
                          <label className="custom-control-label" htmlFor={`check-${labelItem.text}`}>
                            <div className={`dot dot-md dot-${labelItem.color} mr-1`}></div>
                            {labelItem.text}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li>
            <UncontrolledDropdown>
              <DropdownToggle
                tag="a"
                href="#toggle"
                onClick={(ev) => ev.preventDefault()}
                className="dropdown-toggle btn btn-icon btn-trigger"
              >
                <Icon name="more-v"></Icon>
              </DropdownToggle>
              <DropdownMenu>
                <ul className="link-list-opt no-bdr">
                  <li>
                    <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                      <Icon name="eye"></Icon>
                      <span>Move to</span>
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                      <Icon name="trash"></Icon>
                      <span>Delete</span>
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
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
      <div>
        <ul className="nk-ibx-head-tools g-1">
          <li className="d-none d-sm-block" onClick={() => prevMessage()}>
            <TooltipComponent
              tag="a"
              containerClassName="btn btn-icon btn-trigger btn-tooltip"
              icon="arrow-left"
              id="ibx-msg-prev"
              direction="top"
              text="Prev"
            />
          </li>
          <li className="d-none d-sm-block" onClick={() => nextMessage()}>
            <TooltipComponent
              tag="a"
              containerClassName="btn btn-icon btn-trigger btn-tooltip"
              icon="arrow-right"
              id="ibx-msg-next"
              direction="top"
              text="Next"
            />
          </li>
          <li>
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                toggleSearch();
              }}
              className="btn btn-trigger btn-icon search-toggle toggle-search"
            >
              <Icon name="search"></Icon>
            </a>
          </li>
        </ul>
      </div>
      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-content">
          <a
            href="#item"
            onClick={(ev) => {
              ev.preventDefault();
              toggleSearch();
            }}
            className="search-back btn btn-icon toggle-search"
          >
            <Icon name="arrow-left"></Icon>
          </a>
          <input
            type="text"
            className="form-control border-transparent form-focus-none"
            placeholder="Search by user or message"
            //onChange={(e) => onSearchChange(e)}
          />
          <button className="search-submit btn btn-icon">
            <Icon name="search"></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxMessageHeader;
