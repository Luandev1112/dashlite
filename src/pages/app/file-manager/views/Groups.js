import React, { useState, useEffect, useContext } from "react";
import FileManagerDropdown from "../../../../components/partials/file-manager-dropdown/FileManagerDropdown";
import { Icon } from "../../../../components/Component";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import { FileManagerContext } from "../FileManagerContext";

const Groups = ({ data, setData }) => {
  const { onStarClick, getTotalSize } = useContext(FileManagerContext);
  const [dataList, setDataList] = useState();
  const [filterSelect, setFilterSelect] = useState("Last Opened");

  useEffect(() => {
    let folderView = data.filter((item) => item.meta.type === "folder" && !item.recovery);
    let fileView = data.filter((item) => item.meta.type === "file" && !item.recovery);

    setDataList({ folderlist: [...folderView], filelist: [...fileView] });
  }, [data]);

  useEffect(() => {
    if (dataList) {
      let defaultData = dataList;
      if (filterSelect === "Name") {
        defaultData.folderlist = nameSortFunc(defaultData.folderlist);
        defaultData.filelist = nameSortFunc(defaultData.filelist);
        setDataList({ folderlist: [...defaultData.folderlist], filelist: [...defaultData.filelist] });
      } else if (filterSelect === "Size") {
        defaultData.folderlist = sizeSortFunc(defaultData.folderlist);
        defaultData.filelist = sizeSortFunc(defaultData.filelist);
      } else {
        let folderView = data.filter((item) => item.meta.type === "folder" && !item.recovery);
        let fileView = data.filter((item) => item.meta.type === "file" && !item.recovery);

        setDataList({ folderlist: [...folderView], filelist: [...fileView] });
      }
    }
  }, [filterSelect]);

  const nameSortFunc = (data) => {
    data.sort(function (a, b) {
      if (a.meta.name.toUpperCase() < b.meta.name.toUpperCase()) {
        return -1;
      }
      if (a.meta.name.toUpperCase() > b.meta.name.toUpperCase()) {
        return 1;
      }
      return 0;
    });
    return data;
  };

  const sizeSortFunc = (data) => {
    data.sort(function (a, b) {
      if (a.meta.size < b.meta.size) {
        return -1;
      }
      if (a.meta.size > b.meta.size) {
        return 1;
      }
      return 0;
    });
    return data;
  };

  return (
    <div className="nk-files nk-files-view-group">
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
      {dataList && (
        <React.Fragment>
          {dataList.folderlist.length > 0 && (
            <div className="nk-files-group">
              <h6 className="title">Folder</h6>
              <div className="nk-files-list">
                {dataList.folderlist.map((item) => (
                  <div className="nk-file-item nk-file" key={item.id}>
                    <div className="nk-file-info">
                      <div className="nk-file-title">
                        <div className="nk-file-icon">
                          <span className="nk-file-icon-type">{item.meta.svg}</span>
                        </div>
                        <div className="nk-file-name">
                          <div className="nk-file-name-text">
                            {item.meta.type === "folder" ? (
                              <Link
                                to={`${process.env.PUBLIC_URL}/app-file-manager/folder/${item.id}`}
                                className="title"
                              >
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
            </div>
          )}
          {dataList.filelist.length > 0 && (
            <div className="nk-files-group">
              <h6 className="title">Files</h6>
              <div className="nk-files-list">
                {dataList.filelist.map((item) => (
                  <div className="nk-file-item nk-file" key={item.id}>
                    <div className="nk-file-info">
                      <div className="nk-file-title">
                        <div className="nk-file-icon">
                          <span className="nk-file-icon-type">{item.meta.svg}</span>
                        </div>
                        <div className="nk-file-name">
                          <div className="nk-file-name-text">
                            <a href="#folder" onClick={(ev) => ev.preventDefault()} className="title">
                              {item.meta.name}
                            </a>
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
                        <li className="size">{item.meta.size} MB</li>
                        {item.meta.members && <li className="members">{item.meta.members.length} Members</li>}
                      </ul>
                    </div>
                    <FileManagerDropdown file={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Groups;
