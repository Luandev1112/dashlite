import React, { useState, useEffect, useContext } from "react";
import FileManagerDropdown from "../../../../components/partials/file-manager-dropdown/FileManagerDropdown";
import { Icon } from "../../../../components/Component";
import { Link } from "react-router-dom";
import { FileManagerContext } from "../FileManagerContext";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const Grid = ({ data, setData }) => {
  const { onStarClick, getTotalSize } = useContext(FileManagerContext);

  const [filterSelect, setFilterSelect] = useState("Last Opened");
  const [dataList, setDataList] = useState();

  useEffect(() => {
    if (data.length > 0) {
      let filteredData = data.filter((item) => Boolean(item.recovery) === false);
      setDataList([...filteredData]);
    } else {
      setDataList([]);
    }
  }, [data]);

  useEffect(() => {
    if (dataList) {
      let defaultData = dataList;
      if (filterSelect === "Name") {
        defaultData.sort(function (a, b) {
          if (a.meta.name.toUpperCase() < b.meta.name.toUpperCase()) {
            return -1;
          }
          if (a.meta.name.toUpperCase() > b.meta.name.toUpperCase()) {
            return 1;
          }
          return 0;
        });
        setDataList([...defaultData]);
      } else if (filterSelect === "Size") {
        defaultData.sort(function (a, b) {
          if (a.meta.size < b.meta.size) {
            return -1;
          }
          if (a.meta.size > b.meta.size) {
            return 1;
          }
          return 0;
        });
        setDataList([...defaultData]);
      } else {
        let filteredData = data.filter((item) => !item.recovery);
        setDataList([...filteredData]);
      }
    }
  }, [filterSelect]);

  return (
    <div className="nk-files nk-files-view-grid">
      {dataList && dataList.length > 0 ? (
        <React.Fragment>
          <div className="nk-files-head">
            <div className="nk-file-item">
              <div className="nk-file-info">
                <UncontrolledDropdown>
                  <DropdownToggle tag="div" className="tb-head dropdown-toggle dropdown-indicator-caret">
                    {filterSelect}
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xs">
                    <ul className="link-list-opt no-bdr">
                      <li className={filterSelect === "Last Opened" ? "active" : ""}>
                        <DropdownItem
                          tag="a"
                          href="#folder"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setFilterSelect("Last Opened");
                          }}
                        >
                          <span>Last Opened</span>
                        </DropdownItem>
                      </li>
                      <li className={filterSelect === "Name" ? "active" : ""}>
                        <DropdownItem
                          tag="a"
                          href="#folder"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setFilterSelect("Name");
                          }}
                        >
                          <span>Name</span>
                        </DropdownItem>
                      </li>
                      <li className={filterSelect === "Size" ? "active" : ""}>
                        <DropdownItem
                          tag="a"
                          href="#folder"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setFilterSelect("Size");
                          }}
                        >
                          <span>Size</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
          <div className="nk-files-list">
            {dataList.map((item) => (
              <div className="nk-file-item nk-file" key={item.id}>
                <div className="nk-file-info">
                  <div className="nk-file-title">
                    <div className="nk-file-icon">
                      {item.meta.type === "folder" ? (
                        <Link
                          className="nk-file-icon-link"
                          to={`${process.env.PUBLIC_URL}/app-file-manager/folder/${item.id}`}
                        >
                          <span className="nk-file-icon-type">{item.meta.svg}</span>
                        </Link>
                      ) : (
                        <a href="#link" onClick={(ev) => ev.preventDefault()} className="nk-file-icon-link">
                          <span className="nk-file-icon-type">{item.meta.svg}</span>
                        </a>
                      )}
                    </div>
                    <div className="nk-file-name">
                      <div className="nk-file-name-text">
                        {item.meta.type === "folder" ? (
                          <Link to={`${process.env.PUBLIC_URL}/app-file-manager/folder/${item.id}`} className="title">
                            {item.meta.name}
                          </Link>
                        ) : (
                          <a href="#link" onClick={(ev) => ev.preventDefault()} className="title">
                            {item.meta.name}
                          </a>
                        )}
                        <div className="asterisk">
                          <a
                            href="#folder"
                            onClick={(ev) => {
                              ev.preventDefault();
                              onStarClick(item.id);
                            }}
                            className={item.meta.starred ? "active" : ""}
                          >
                            <Icon className="asterisk-off icon ni ni-star"></Icon>
                            <Icon className="asterisk-on icon ni ni-star-fill"></Icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="nk-file-desc">
                    <li className="date">{item.meta.time}</li>
                    <li className="size">{item.meta.type === "folder" ? getTotalSize(item) : item.meta.size} MB</li>
                    {item.meta.members && <li className="members">{item.meta.members.length} Members</li>}
                  </ul>
                </div>
                <FileManagerDropdown file={item} />
              </div>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <div>No folders or files are available</div>
      )}
    </div>
  );
};

export default Grid;
