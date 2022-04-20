import React, { useContext, useState } from "react";
import Share from "../../../../../pages/app/file-manager/modals/Share";
import { Icon } from "../../../../../components/Component";
import { Link } from "react-router-dom";
import { DropdownItem, DropdownMenu, Modal, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { FileManagerContext } from "../../FileManagerContext";

const Incoming = ({ data, setData }) => {
  const { removeShare } = useContext(FileManagerContext);
  const [shareModal, setShareModal] = useState(false);

  const toggleShareModal = () => {
    setShareModal(!shareModal);
  };

  return (
    <div className="nk-files nk-files-view-list">
      {data.length > 0 ? (
        <React.Fragment>
          <div className="nk-files-head">
            <div className="nk-file-item">
              <div className="nk-file-info">
                <div className="tb-head">Name</div>
              </div>
              <div className="nk-file-meta">
                <div className="tb-head">Shared On</div>
              </div>
              <div className="nk-file-members">
                <div className="tb-head">Shared By</div>
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
                        <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()} href="#item">
                          <Icon name="share"></Icon>
                          <span>Share</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          onClick={(ev) => ev.preventDefault()}
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
                          onClick={(ev) => ev.preventDefault()}
                          href="#item"
                          className="link-danger"
                        >
                          <Icon name="cross-circle"></Icon>
                          <span>Shared Remove</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
          <div className="nk-files-list">
            {data
              .filter((item) => item.meta.members.length > 0)
              .map((item) => (
                <React.Fragment key={item.id}>
                  <div className="nk-file-item nk-file">
                    <div className="nk-file-info">
                      <div className="nk-file-title">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                          <input type="checkbox" className="custom-control-input" id={`folder-${item.id}`} />
                          <label className="custom-control-label" htmlFor={`folder-${item.id}`}></label>
                        </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-file-meta">
                      <div className="tb-lead">
                        {item.meta.date}, {item.meta.time}
                      </div>
                    </div>
                    <div className="nk-file-members">{item.meta.members[0].user}</div>
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
                                  toggleShareModal();
                                }}
                                href="#item"
                              >
                                <Icon name="share"></Icon>
                                <span>Share</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => ev.preventDefault()}
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
                                  removeShare(item.id, "incoming");
                                }}
                                href="#item"
                                className="link-danger"
                              >
                                <Icon name="cross-circle"></Icon>
                                <span>Shared Remove</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                  <Modal isOpen={shareModal} size="md" toggle={toggleShareModal}>
                    <Share file={item} toggle={toggleShareModal} />
                  </Modal>
                </React.Fragment>
              ))}
          </div>
        </React.Fragment>
      ) : (
        <div>No files or folders available</div>
      )}
    </div>
  );
};

export default Incoming;
