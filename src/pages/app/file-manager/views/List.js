import React, { useEffect, useState, useContext } from "react";
import FileManagerDropdown from "../../../../components/partials/file-manager-dropdown/FileManagerDropdown";
import SelectorCopy from "../modals/SelectorCopy";
import CreateFolder from "../modals/CreateFolder";
import { Icon, UserAvatar, UserGroup } from "../../../../components/Component";
import { findUpper } from "../../../../utils/Utils";
import { FileManagerContext } from "../FileManagerContext";
import { Link } from "react-router-dom";
import { DropdownItem, DropdownMenu, Modal, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const List = ({ data, setData, starred }) => {
  const { onStarClick, onFileCheck, selectorDeleteFolder, selectorDownloadFile, getTotalSize } =
    useContext(FileManagerContext);

  const [dataList, setDataList] = useState();
  const [createModal, setCreateModal] = useState(false);
  const [copyModal, setCopyModal] = useState(false);

  useEffect(() => {
    if (starred) {
      let filteredData = data.filter((item) => item.meta.starred === true && !item.recovery);
      setDataList([...filteredData]);
    } else {
      let filteredData = data.filter((item) => !item.recovery);
      setDataList([...filteredData]);
    }
  }, [data]);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };

  const toggleCopyModal = () => {
    setCopyModal(!copyModal);
  };

  return (
    <div className="nk-files nk-files-view-list">
      <div className="nk-files-head">
        <div className="nk-file-item">
          <div className="nk-file-info">
            <div className="tb-head">Name</div>
            <div className="tb-head"></div>
          </div>
          <div className="nk-file-meta">
            <div className="tb-head">Last Opened</div>
          </div>
          <div className="nk-file-members">
            <div className="tb-head">Members</div>
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
                        toggleCopyModal();
                      }}
                      href="#item"
                    >
                      <Icon name="copy"></Icon>
                      <span>Copy</span>
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem
                      tag="a"
                      onClick={(ev) => {
                        ev.preventDefault();
                        toggleCopyModal();
                      }}
                      href="#item"
                    >
                      <Icon name="forward-arrow"></Icon>
                      <span>Move</span>
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem
                      tag="a"
                      onClick={(ev) => {
                        ev.preventDefault();
                        selectorDownloadFile();
                      }}
                      href="#item"
                      className="file-dl-toast"
                    >
                      <Icon name="download"></Icon>
                      <span>Download</span>
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem
                      tag="a"
                      onClick={(ev) => {
                        ev.preventDefault();
                        selectorDeleteFolder();
                      }}
                      href="#item"
                    >
                      <Icon name="trash"></Icon>
                      <span>Delete</span>
                    </DropdownItem>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
      <div className="nk-files-list">
        {dataList &&
          dataList.map((item) => (
            <div className="nk-file-item nk-file" key={item.id}>
              <div className="nk-file-info">
                <div className="nk-file-title">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      checked={item.meta.checked}
                      className="custom-control-input"
                      onChange={(ev) => onFileCheck(ev, item.id)}
                      id={`folder-${item.id}`}
                    />
                    <label className="custom-control-label" htmlFor={`folder-${item.id}`}></label>
                  </div>
                  <div className="nk-file-icon">
                    <span className="nk-file-icon-type">{item.meta.svg}</span>
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
                      <div className="nk-file-star asterisk">
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
              </div>
              <div className="nk-file-meta">
                <div className="tb-lead">{item.meta.time}</div>
                {item.meta.members && <div className="tb-sub">by {item.meta.members[0].user}</div>}
              </div>
              <div className="nk-file-members">
                {!item.meta.members ? (
                  <div className="tb-lead">Only Me</div>
                ) : (
                  <UserGroup>
                    {item.meta.members.length > 3 ? (
                      <React.Fragment>
                        {item.meta.members.slice(0, 3).map((user, index) => (
                          <UserAvatar
                            theme={user.theme}
                            text={findUpper(user.user)}
                            className="xs"
                            image={user.img}
                            key={index}
                          />
                        ))}
                        <UserAvatar theme="light" className="xs" text={`+${item.meta.members.length - 3}`} />
                      </React.Fragment>
                    ) : (
                      item.meta.members.map((user, index) => (
                        <UserAvatar theme={user.theme} text={findUpper(user.user)} className="xs" key={index} />
                      ))
                    )}
                  </UserGroup>
                )}
              </div>
              <FileManagerDropdown file={item} />
            </div>
          ))}
      </div>
      <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
        <CreateFolder toggle={toggleCreateModal} />
      </Modal>
      <Modal isOpen={copyModal} size="md" toggle={toggleCopyModal}>
        <SelectorCopy toggle={toggleCopyModal} toggleCreateModal={toggleCreateModal} />
      </Modal>
    </div>
  );
};

export default List;
