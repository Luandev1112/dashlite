import React, { useEffect, useState } from "react";
import { contacts, inboxList } from "./InboxData";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Icon } from "../../../components/Component";

const InboxBodyHead = ({
  allData,
  data,
  aside,
  setAside,
  setData,
  check,
  currentTab,
  setChecked,
  selectorDeleteInbox,
  selectorArchive,
  toggleRefresh,
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    if (searchText !== "") {
      const filteredUser = contacts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
      const filteredData = inboxList.filter((item) => filteredUser.some((el) => item.userId === el.id));
      setData([...filteredData]);
    } else {
      if (currentTab !== "All Mails" && currentTab !== "Trash" && currentTab !== "Archive") {
        let defaultData = allData.filter(
          (item) =>
            item.message.meta[currentTab.toLowerCase()] === true &&
            item.message.meta.trash !== true &&
            item.message.meta.archive !== true
        );
        setTimeout(() => setData([...defaultData]), 1);
      } else if (currentTab === "Archive") {
        let defaultData = allData.filter((item) => item.message.meta.archive === true);
        setData([...defaultData]);
      } else if (currentTab === "Trash") {
        let defaultData = allData.filter((item) => item.message.meta.trash === true);
        setTimeout(() => setData([...defaultData]), 1);
      } else {
        setData(inboxList);
      }
    }
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSearchChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  const toggleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    paginate(currentPage + 1);
  };

  const prevPage = () => {
    paginate(currentPage - 1);
  };

  return (
    <div className="nk-ibx-head">
      <div className="nk-ibx-head-actions">
        <div className="nk-ibx-head-check">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input
              type="checkbox"
              checked={check}
              disabled={data.length === 0}
              className="custom-control-input nk-dt-item-check"
              id="conversionAll"
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label className="custom-control-label" htmlFor="conversionAll"></label>
          </div>
        </div>
        <ul className="nk-ibx-head-tools g-1">
          <li>
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                toggleRefresh();
              }}
              className="btn btn-icon btn-trigger"
            >
              <Icon name="undo"></Icon>
            </a>
          </li>
          <li className="d-none d-sm-block">
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                selectorArchive();
              }}
              className={`btn btn-icon btn-trigger`}
            >
              <Icon name="archived"></Icon>
            </a>
          </li>
          <li className="d-none d-sm-block">
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                selectorDeleteInbox();
              }}
              className={`btn btn-icon btn-trigger`}
            >
              <Icon name="trash"></Icon>
            </a>
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
                  <li onClick={() => selectorDeleteInbox()}>
                    <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                      <Icon name="trash"></Icon>
                      <span>Delete</span>
                    </DropdownItem>
                  </li>
                  <li onClick={() => selectorArchive()}>
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
          <li>
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                prevPage();
              }}
              className={`btn btn-trigger btn-icon btn-tooltip ${currentPage - 1 === 0 ? "disabled" : ""}`}
            >
              <Icon name="arrow-left"></Icon>
            </a>
          </li>
          <li>
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                nextPage();
              }}
              className={`btn btn-trigger btn-icon btn-tooltip ${
                pageNumbers[pageNumbers.length - 1] === currentPage || pageNumbers.length === 0 ? "disabled" : ""
              }`}
            >
              <Icon name="arrow-right"></Icon>
            </a>
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
          <li className="mr-n1 d-lg-none">
            <a
              href="#item"
              onClick={(ev) => {
                ev.preventDefault();
                setAside(!aside);
              }}
              className="btn btn-trigger btn-icon toggle"
            >
              <Icon name="menu-alt-r"></Icon>
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
            placeholder="Search by username"
            onChange={(e) => onSearchChange(e)}
          />
          <button className="search-submit btn btn-icon">
            <Icon name="search"></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxBodyHead;
