import React, { useContext } from "react";
import { Icon, UserGroup, UserAvatar } from "../../../../components/Component";
import { findUpper } from "../../../../utils/Utils";
import { FileManagerContext } from "../FileManagerContext";

const Details = ({ file, toggle, toggleShare }) => {
  const { downloadFile } = useContext(FileManagerContext);

  return (
    <React.Fragment>
      <div className="modal-header align-center">
        <div className="nk-file-title">
          <div className="nk-file-icon">{file.meta.svg}</div>
          <div className="nk-file-name">
            <div className="nk-file-name-text">
              <span className="title">{file.meta.name}</span>
            </div>
            <div className="nk-file-name-sub">Project</div>
          </div>
        </div>
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
      <div className="modal-body">
        <div className="nk-file-details">
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Type</div>
            <div className="nk-file-details-col">{file.meta.type}</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Size</div>
            <div className="nk-file-details-col">{file.meta.size} MB</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Location</div>
            <div className="nk-file-details-col">
              <ul className="breadcrumb breadcrumb-sm breadcrumb-alt breadcrumb-arrow">
                <li className="breadcrumb-item">ThemeForest</li>
                <li className="breadcrumb-item">Project</li>
              </ul>
            </div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Owner</div>
            <div className="nk-file-details-col">Me</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Shared with</div>
            <div className="nk-file-details-col">
              {!file.meta.members ? (
                <div className="tb-lead">Only Me</div>
              ) : (
                <UserGroup>
                  {file.meta.members.length > 3 ? (
                    <React.Fragment>
                      {file.meta.members.slice(0, 3).map((user, index) => (
                        <UserAvatar
                          theme={user.theme}
                          text={findUpper(user.user)}
                          className="xs"
                          image={user.img}
                          key={index}
                        />
                      ))}
                      <UserAvatar theme="light" className="xs" text={`+${file.meta.members.length - 3}`} />
                    </React.Fragment>
                  ) : (
                    file.meta.members.map((user, index) => (
                      <UserAvatar theme={user.theme} text={findUpper(user.user)} className="xs" key={index} />
                    ))
                  )}
                </UserGroup>
              )}
            </div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Modified</div>
            <div className="nk-file-details-col">Feb 19, 2020 by Abu Bit Istiyak</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Opened</div>
            <div className="nk-file-details-col">Apr 23, 2020 by Me</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Created</div>
            <div className="nk-file-details-col">{file.meta.date}</div>
          </div>
        </div>
      </div>
      <div className="modal-footer modal-footer-stretch bg-light">
        <div className="modal-footer-between">
          <div className="g">
            <a href="link" onClick={(ev) => ev.preventDefault()} className="link link-primary">
              View All Activity
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
                    toggleShare();
                  }}
                  className="btn btn-outline-light btn-white"
                >
                  Share
                </a>
              </li>
              <li>
                <a
                  href="link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    downloadFile(file);
                  }}
                  className="btn btn-primary file-dl-toast"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
