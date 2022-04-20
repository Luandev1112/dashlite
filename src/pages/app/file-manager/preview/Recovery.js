import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  RSelect,
} from "../../../../components/Component";
import { selectOptions } from "../Data";
import { FileManagerContext } from "../FileManagerContext";

const Recovery = ({
  data,
  setData,
  searchText,
  setSearchText,
  toggleCreateModal,
  toggleUploadModal,
  toggleScreenLg,
}) => {
  const [dataList, setDataList] = useState();
  const [search, setSearch] = useState(false);
  const [filterOptions, setFilterOptions] = useState(false);
  const [dates, setDates] = useState({
    from: new Date(),
    to: new Date(),
  });

  useEffect(() => {
    setDataList([...data]);
  }, [data]);

  const { restoreFolder, permanentDelete, getTotalSize } = useContext(FileManagerContext);

  // Sets the filter to default
  const resetFilter = () => {
    setDates({ from: new Date(), to: new Date() });
  };

  // Runs the filter function
  const filterOnDates = () => {
    let defaultData = data;
    let dateDay = new Date().getDate();
    if (dates.to.getDate() === dateDay && dates.from.getDate() === dateDay) {
      defaultData = defaultData.filter((item) => item.recovery && item.recovery.deletedAt === "Today");
      setDataList([...defaultData]);
    } else if (dates.to.getDate() !== dateDay) {
      defaultData = defaultData.filter((item) => item.recovery && item.recovery.deletedAt !== "Today");
      setDataList([...defaultData]);
    } else {
      setDataList([...data]);
    }
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  const toggleFilterOptions = () => {
    setFilterOptions(!filterOptions);
  };

  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockBetween className="position-relative">
          <BlockHeadContent>
            <BlockTitle page>Recovery</BlockTitle>
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
                <a
                  href="#folder"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleFilterOptions();
                  }}
                  className="btn btn-trigger btn-icon toggle-expand"
                >
                  <Icon name="opt"></Icon>
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

      <Block className="nk-fmg-listing">
        {dataList && dataList.length > 0 ? (
          <Row>
            <Col xl="3" className="order-xl-12">
              <div className={`nk-fmg-filter toggle-expand-content ${filterOptions ? "expanded" : ""}`}>
                <form>
                  <Row>
                    <Col lg="12" md="4">
                      <FormGroup>
                        <label className="form-label">From</label>
                        <div className="form-control-wrap">
                          <DatePicker
                            selected={dates.from}
                            onChange={(date) => setDates({ ...dates, from: date })}
                            className="form-control date-picker"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="4">
                      <FormGroup>
                        <label className="form-label">To</label>
                        <div className="form-control-wrap">
                          <DatePicker
                            selected={dates.to}
                            onChange={(date) => setDates({ ...dates, to: date })}
                            className="form-control date-picker"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="4">
                      <FormGroup>
                        <label className="form-label">Deleted By</label>
                        <div className="form-control-wrap">
                          <RSelect options={selectOptions} />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <div className="d-flex justify-between mt-1">
                        <button type="reset" className="link link-sm link-primary ml-n1" onClick={() => resetFilter()}>
                          Reset Filter
                        </button>
                        <Button color="primary" size="sm" onClick={() => filterOnDates()}>
                          Filter
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col xl="9" lg="12">
              <div className="nk-files nk-files-view-list">
                <div className="nk-files-head">
                  <div className="nk-file-item">
                    <div className="nk-file-info">
                      <div className="tb-head">Name</div>
                    </div>
                    <div className="nk-file-meta">
                      <div className="tb-head">Size</div>
                    </div>
                    <div className="nk-file-members">
                      <div className="tb-head">Deleted At</div>
                    </div>
                  </div>
                </div>
                <div className="nk-files-list">
                  {dataList
                    .filter((el) => el.recovery)
                    .map((item) => (
                      <div className="nk-file-item nk-file" key={item.id}>
                        <div className="nk-file-info">
                          {item.meta.type === "folder" ? (
                            <Link
                              className="nk-file-link"
                              to={`${process.env.PUBLIC_URL}/app-file-manager/folder/${item.id}`}
                            >
                              <div className="nk-file-title">
                                <div className="nk-file-icon">
                                  <span className="nk-file-icon-type">{item.meta.svg}</span>
                                </div>
                                <div className="nk-file-name">
                                  <div className="nk-file-name-text">
                                    <span className="title">{item.meta.name}</span>
                                  </div>
                                  <ul className="breadcrumb breadcrumb-alt breadcrumb-xs breadcrumb-arrow">
                                    <li className="breadcrumb-item">Project</li>
                                    <li className="breadcrumb-item">Dashlite</li>
                                    <li className="breadcrumb-item">apps</li>
                                  </ul>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <a className="nk-file-link" href="#link" onClick={(ev) => ev.preventDefault()}>
                              <div className="nk-file-title">
                                <div className="nk-file-icon">
                                  <span className="nk-file-icon-type">{item.meta.svg}</span>
                                </div>
                                <div className="nk-file-name">
                                  <div className="nk-file-name-text">
                                    <span className="title">{item.meta.name}</span>
                                  </div>
                                  <ul className="breadcrumb breadcrumb-alt breadcrumb-xs breadcrumb-arrow">
                                    <li className="breadcrumb-item">Project</li>
                                    <li className="breadcrumb-item">Dashlite</li>
                                    <li className="breadcrumb-item">apps</li>
                                  </ul>
                                </div>
                              </div>
                            </a>
                          )}
                        </div>
                        <div className="nk-file-size">
                          <div className="tb-lead">
                            {item.meta.type === "folder" ? getTotalSize(item) : item.meta.size} MB
                          </div>
                        </div>
                        <div className="nk-file-date">
                          {item.recovery.deletedAt} {item.recovery.deletedOn}
                        </div>
                        <div className="nk-file-actions">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              tag="a"
                              href="#folder"
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
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      restoreFolder(item.id);
                                    }}
                                    href="#item"
                                    className="text-primary"
                                  >
                                    <Icon name="undo"></Icon>
                                    <span>Restore</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem
                                    tag="a"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      permanentDelete(item.id);
                                    }}
                                    href="#item"
                                    className="text-danger"
                                  >
                                    <Icon name="trash"></Icon>
                                    <span>Permanently Delete</span>
                                  </DropdownItem>
                                </li>
                              </ul>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div>No files or folders available</div>
        )}
      </Block>
    </React.Fragment>
  );
};

export default Recovery;
