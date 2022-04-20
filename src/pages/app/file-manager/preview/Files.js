import React, { useEffect, useState } from "react";
import Grid from "../views/Grid";
import Groups from "../views/Groups";
import List from "../views/List";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../../components/Component";

const Files = ({
  data,
  setData,
  folderName,
  searchText,
  setSearchText,
  toggleCreateModal,
  toggleUploadModal,
  toggleScreenLg,
}) => {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (folderName === "Search Files") {
      setSearch(true);
    }
  }, []);

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockBetween className="position-relative">
          <BlockHeadContent>
            <BlockTitle page>{folderName ? folderName : "Files"}</BlockTitle>
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
                    href="#folder"
                    onClick={(ev) => ev.preventDefault()}
                    className="btn btn-trigger btn-icon"
                  >
                    <Icon name="view-grid3-wd"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setView("grid");
                          }}
                          href="#item"
                        >
                          <Icon name="view-grid3-wd"></Icon>
                          <span>Grid View</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setView("group");
                          }}
                          href="#item"
                        >
                          <Icon name="view-group-wd"></Icon>
                          <span>Group View</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setView("list");
                          }}
                          href="#item"
                        >
                          <Icon name="view-row-wd"></Icon>
                          <span>List View</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
                autoFocus={folderName === "Search Files" ? true : false}
                onChange={(ev) => setSearchText(ev.target.value)}
              />
              <button className="search-submit btn btn-icon">
                <Icon name="search"></Icon>
              </button>
            </div>
          </div>
          <BlockBetween className="d-none d-lg-block">
            <ul className="nk-block-tools g-3">
              <li>
                <a
                  href="#link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setView("grid");
                  }}
                  className={`nk-switch-icon ${view === "grid" ? "active" : ""}`}
                >
                  <Icon name="view-grid3-wd"></Icon>
                </a>
              </li>
              <li>
                <a
                  href="#link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setView("group");
                  }}
                  className={`nk-switch-icon ${view === "group" ? "active" : ""}`}
                >
                  <Icon name="view-group-wd"></Icon>
                </a>
              </li>
              <li>
                <a
                  href="#link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setView("list");
                  }}
                  className={`nk-switch-icon ${view === "list" ? "active" : ""}`}
                >
                  <Icon name="view-row-wd"></Icon>
                </a>
              </li>
            </ul>
          </BlockBetween>
        </BlockBetween>
      </BlockHead>

      {data.length > 0 ? (
        <Block className="nk-fmg-listing">
          {view === "grid" ? (
            <Grid data={data} setData={setData} />
          ) : view === "group" ? (
            <Groups data={data} setData={setData} />
          ) : (
            <List data={data} setData={setData} />
          )}
        </Block>
      ) : (
        <Block className="nk-fmg-listing">No files found in this directory</Block>
      )}
    </React.Fragment>
  );
};

export default Files;
