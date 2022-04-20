import React, { useEffect, useState } from "react";
import Groups from "../views/Groups";
import Grid from "../views/Grid";
import List from "../views/List";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../../components/Component";
import { Link } from "react-router-dom";

const Home = ({ data, setData, toggleCreateModal, searchText, setSearchText, toggleUploadModal, toggleScreenLg }) => {
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState(false);
  const [dataList, setDataList] = useState();

  useEffect(() => {
    let quickView = data.filter((item) => item.meta.starred === true && Boolean(item.recovery) === false);
    setTimeout(() => setDataList([...quickView]));
  }, []);

  const filterFilerQuickView = (id) => {
    let defaultData = dataList;
    defaultData = defaultData.filter((item) => item.id !== id);
    setDataList([...defaultData]);
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockBetween className="position-relative">
          <BlockHeadContent>
            <BlockTitle page>Home</BlockTitle>
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

      {dataList && (
        <React.Fragment>
          <Block className="nk-fmg-quick-list">
            <BlockHead size="xs">
              <BlockBetween className="g-2">
                <BlockHeadContent>
                  <BlockTitle tag="h6">Quick Access</BlockTitle>
                </BlockHeadContent>
                <BlockHeadContent>
                  <a
                    href="#toggle"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setHide1(!hide1);
                    }}
                    className={`"link link-primary toggle-opt ${hide1 === true ? "active" : ""}`}
                  >
                    <div className="inactive-text">Show</div>
                    <div className="active-text">Hide</div>
                  </a>
                </BlockHeadContent>
              </BlockBetween>
            </BlockHead>
            <div className={`toggle-expand-content ${hide1 === true ? "expanded" : ""}`}>
              <div className="nk-files nk-files-view-grid">
                <div className="nk-files-list">
                  {dataList.map((file) => (
                    <div className="nk-file-item nk-file" key={file.id}>
                      <div className="nk-file-info">
                        {file.meta.type === "folder" ? (
                          <Link
                            className="nk-file-link"
                            to={`${process.env.PUBLIC_URL}/app-file-manager/folder/${file.id}`}
                          >
                            <div className="nk-file-title">
                              <div className="nk-file-icon">
                                <span className="nk-file-icon-type">{file.meta.svg}</span>
                              </div>
                              <div className="nk-file-name">
                                <div className="nk-file-name-text">
                                  <span className="title">{file.meta.name}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <a className="nk-file-link" href="#link" onClick={(ev) => ev.preventDefault()}>
                            <div className="nk-file-title">
                              <div className="nk-file-icon">
                                <span className="nk-file-icon-type">{file.meta.svg}</span>
                              </div>
                              <div className="nk-file-name">
                                <div className="nk-file-name-text">
                                  <span className="title">{file.meta.name}</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        )}
                      </div>
                      <div className="nk-file-actions hideable">
                        <a
                          href="#folder"
                          onClick={(ev) => {
                            ev.preventDefault();
                            filterFilerQuickView(file.id);
                          }}
                          className="btn btn-sm btn-icon btn-trigger"
                        >
                          <Icon name="cross"></Icon>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Block>

          <Block className="nk-fmg-listing">
            <BlockHead size="xs">
              <BlockBetween className="g-2">
                <BlockHeadContent>
                  <BlockTitle tag="h6">Recent Files</BlockTitle>
                </BlockHeadContent>
                <BlockHeadContent>
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
                </BlockHeadContent>
              </BlockBetween>
            </BlockHead>

            {data.length > 0 ? (
              <div className={`toggle-expand-content ${hide2 === true ? "expanded" : ""}`}>
                {view === "grid" ? (
                  <Grid data={data} setData={setData} />
                ) : view === "group" ? (
                  <Groups data={data} setData={setData} />
                ) : (
                  <List data={data} setData={setData} />
                )}
              </div>
            ) : (
              <div>No files or folders available</div>
            )}
          </Block>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
