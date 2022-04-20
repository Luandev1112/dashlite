import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { FileManagerContext } from "../FileManagerContext";

const Share = ({ file, toggle }) => {
  const { shareFiles } = useContext(FileManagerContext);
  const [mail, setMail] = useState("");

  const onSubmit = () => {
    if (mail !== "") {
      shareFiles(file.id, mail);
      toggle();
    }
  };

  return (
    <React.Fragment>
      <div className="modal-header align-center">
        <div className="nk-file-title">
          <div className="nk-file-icon">{file.meta.svg}</div>
          <div className="nk-file-name">
            <div className="nk-file-name-text">
              <span className="title">{file.meta.name}</span>
            </div>
            <div className="nk-file-name-sub">{file.meta.size} MB</div>
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
      <div className="modal-body p-0">
        <div className="nk-file-share-header">
          <div className="nk-file-share-group">
            <div className="nk-file-share-input-group">
              <div className="nk-file-share-input nk-file-share-input-to">
                <label className="label">To</label>
                <input
                  type="text"
                  className="input-mail tagify"
                  placeholder="Email or Name"
                  onChange={(ev) => setMail(ev.target.value)}
                />
              </div>
            </div>
            <ul className="nk-file-share-nav">
              <li>
                <span className="badge badge-sm badge-outline-gray">Can View</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="nk-file-share-editor">
          <div className="nk-file-share-field">
            <textarea
              className="form-control form-control-simple no-resize ex-large"
              placeholder="Add a Message (optional)"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="modal-footer bg-light">
        <ul className="btn-toolbar g-3">
          <li>
            <a
              href="link"
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
            <Button color="primary" onClick={() => onSubmit()}>
              Share
            </Button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Share;
