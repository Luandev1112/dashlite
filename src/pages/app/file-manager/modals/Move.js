import React, { useContext, useEffect, useState } from "react";
import { Icon } from "../../../../components/Component";
import { FileManagerContext } from "../FileManagerContext";

const Move = ({ file, toggle, toggleCreateModal }) => {
  const { contextData, moveFolder } = useContext(FileManagerContext);
  const [data, setData] = contextData;

  const [selected, setSelected] = useState("");
  const [currentFolder, setCurrentFolder] = useState(null);

  useEffect(() => {
    let location = window.location.pathname.split("/");
    let findFolder = location.find((item) => item === "folder");
    if (findFolder) {
      setCurrentFolder(location[location.length - 1]);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="modal-header align-center border-bottom-0">
        <h5 className="modal-title">Move item to...</h5>
        <a
          href="#close"
          onClick={(ev) => {
            ev.preventDefault();
            toggle();
          }}
          className="close"
        >
          <Icon name="cross-sm"></Icon>
        </a>
      </div>
      <div className="modal-body pt-0 mt-n2">
        <ul className="breadcrumb breadcrumb-alt breadcrumb-xs breadcrumb-arrow mb-1">
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">Apps</li>
        </ul>
        <div className="nk-fmg-listing is-scrollable">
          <div className="nk-files nk-files-view-list is-compact">
            <div className="nk-files-list">
              {data
                .filter((item) => item.meta.type === "folder" && item.id !== file.id && !item.recovery)
                .map((item) => {
                  return (
                    <div
                      className={`nk-file-item nk-file ${item.id === selected ? "selected" : ""}`}
                      key={item.id}
                      onClick={() => setSelected(item.id)}
                    >
                      <div className="nk-file-info">
                        <a className="nk-file-link" href="#link" onClick={(ev) => ev.preventDefault()}>
                          <div className="nk-file-title">
                            <div className="nk-file-icon">{item.meta.svg}</div>
                            <div className="nk-file-name">
                              <div className="nk-file-name-text">
                                <span className="title">{item.meta.name}</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="nk-file-actions">
                        <a
                          href="#link"
                          onClick={(ev) => ev.preventDefault()}
                          className="btn btn-sm btn-icon btn-trigger"
                        >
                          <Icon name="chevron-right"></Icon>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer bg-light">
        <div className="modal-footer-between">
          <div className="g">
            <a
              href="link"
              onClick={(ev) => {
                ev.preventDefault();
                toggle();
                toggleCreateModal();
              }}
              className="link link-primary"
            >
              Create New Folder
            </a>
          </div>
          <div className="g">
            <ul className="btn-toolbar g-3">
              <li>
                <a
                  href="#file-share"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle();
                  }}
                  className="btn btn-outline-light btn-white"
                >
                  Cancel
                </a>
              </li>
              <li>
                <a
                  href="link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    moveFolder(currentFolder, file, selected);
                    toggle();
                  }}
                  className="btn btn-primary file-dl-toast"
                >
                  Move
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Move;
