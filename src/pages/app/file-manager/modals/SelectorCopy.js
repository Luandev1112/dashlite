import React, { useContext, useState } from "react";
import { Icon } from "../../../../components/Component";
import { FileManagerContext } from "../FileManagerContext";

const SelectorCopy = ({ toggle, toggleCreateModal }) => {
  const { contextData, selectorCopyToFolder } = useContext(FileManagerContext);
  const [data, setData] = contextData;

  const [selected, setSelected] = useState("");

  return (
    <React.Fragment>
      <div className="modal-header align-center border-bottom-0">
        <h5 className="modal-title">Copy item to...</h5>
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
      <div className="modal-body pt-0 mt-2">
        <div className="nk-fmg-listing is-scrollable">
          <div className="nk-files nk-files-view-list is-compact">
            <div className="nk-files-list">
              {data
                .filter((item) => item.meta.type === "folder" && !item.recovery)
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
                    selectorCopyToFolder(selected);
                    toggle();
                  }}
                  className="btn btn-primary file-dl-toast"
                >
                  Copy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectorCopy;
