import React, { useEffect, useState } from "react";
import Incoming from "../views/shared/Incoming";
import Links from "../views/shared/Links";
import Outgoing from "../views/shared/Outgoing";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../../components/Component";

const Shared = ({ data, setData, searchText, setSearchText, toggleCreateModal, toggleUploadModal, toggleScreenLg }) => {
  const [tabs, setTab] = useState("incoming");
  const [search, setSearch] = useState(false);
  const [dataList, setDataList] = useState();

  useEffect(() => {
    let filteredIncoming = data.filter((item) => item.meta.members && item.meta.members.length > 0);
    let filteredOutgoing = data.filter((item) => item.shared);
    let filteredLinks = data.filter((item) => item.meta.link === true);

    setDataList({ incoming: filteredIncoming, outgoing: filteredOutgoing, links: filteredLinks });
  }, [data]);

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockBetween className="position-relative">
          <BlockHeadContent>
            <BlockTitle page>Shared</BlockTitle>
          </BlockHeadContent>
          <BlockHeadContent>
            <ul className="nk-block-tools g-1">
              <li className="d-lg-none">
                <a
                  href="#folder"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleSearch();
                  }}
                  className="btn btn-trigger btn-icon search-toggle toggle-search"
                >
                  <Icon name="search"></Icon>
                </a>
              </li>
              <li className="d-lg-none">
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="a"
                    href="#toggle"
                    onClick={(ev) => ev.preventDefault()}
                    className="btn btn-trigger btn-icon"
                  >
                    <Icon name="plus"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#upload"
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleUploadModal();
                          }}
                        >
                          <Icon name="upload-cloud"></Icon>
                          <span>Upload File</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#upload"
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleCreateModal();
                          }}
                        >
                          <Icon name="folder-plus"></Icon>
                          <span>Create Folder</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="d-lg-none mr-n1">
                <a
                  href="#folder"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleScreenLg();
                  }}
                  className="btn btn-trigger btn-icon toggle"
                >
                  <Icon name="menu-alt-r"></Icon>
                </a>
              </li>
            </ul>
          </BlockHeadContent>
          <div className={`search-wrap px-2 d-lg-none ${search ? "active" : ""}`}>
            <div className="search-content">
              <a
                href="#toggle"
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
                value={searchText}
                onChange={(ev) => setSearchText(ev.target.value)}
              />
              <button className="search-submit btn btn-icon">
                <Icon name="search"></Icon>
              </button>
            </div>
          </div>
        </BlockBetween>
      </BlockHead>

      <ul className="nk-nav nav nav-tabs">
        <li className={`nav-item ${tabs === "incoming" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("incoming");
            }}
          >
            Incoming
          </a>
        </li>
        <li className={`nav-item ${tabs === "outgoing" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("outgoing");
            }}
          >
            Outgoing
          </a>
        </li>
        <li className={`nav-item ${tabs === "links" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("links");
            }}
          >
            Links
          </a>
        </li>
      </ul>

      {dataList && (
        <Block size="xs" className="nk-fmg-listing">
          {tabs === "incoming" ? (
            <Incoming data={dataList.incoming} setData={setData} />
          ) : tabs === "outgoing" ? (
            <Outgoing data={dataList.outgoing} setData={setData} />
          ) : (
            <Links data={dataList.links} setData={setData} />
          )}
        </Block>
      )}
    </React.Fragment>
  );
};

export default Shared;
