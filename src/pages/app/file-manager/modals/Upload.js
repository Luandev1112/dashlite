import React, { useContext, useState } from "react";
import Dropzone from "react-dropzone";
import { Button } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { svgSelect } from "../Data";
import { FileManagerContext } from "../FileManagerContext";
import { bytesToMegaBytes, currentTime, getDateStructured } from "../../../../utils/Utils";

const Upload = ({ toggle }) => {
  const { createFile } = useContext(FileManagerContext);

  const [files, setFiles] = useState([]);
  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const addFilesToSystem = () => {
    let newFiles = [];
    files.forEach((file) => {
      let newFile = {
        id: Math.random(),
        meta: {
          type: "file",
          name: file.name,
          svg: svgSelect[file.type] ? svgSelect[file.type] : svgSelect["others"],
          time: currentTime(),
          date: getDateStructured(new Date()),
          size: bytesToMegaBytes(file.size),
          starred: false,
        },
      };
      newFiles.push(newFile);
    });
    createFile(newFiles);
    toggle();
  };

  const removeFromList = (name) => {
    let defaultFiles = files;
    defaultFiles = defaultFiles.filter((item) => item.name !== name);
    setFiles([...defaultFiles]);
  };

  return (
    <React.Fragment>
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
      <div className="modal-body modal-body-md">
        <div className="nk-upload-form">
          <h5 className="title mb-3">Upload File</h5>
          <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()} className="dropzone upload-zone small bg-lighter my-2 dz-clickable">
                  <input {...getInputProps()} />
                  <div className="dz-message">
                    <span className="dz-message-text">
                      <span>Drag and drop</span> file here or <span>browse</span>
                    </span>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="nk-upload-list">
          <h6 className="title">Uploaded Files</h6>
          {files.length > 0 ? (
            files.map((file, index) => (
              <div className="nk-upload-item" key={index}>
                <div className="nk-upload-icon">
                  {svgSelect[file.type] ? svgSelect[file.type] : svgSelect["others"]}
                </div>
                <div className="nk-upload-info">
                  <div className="nk-upload-title">
                    <span className="title">{file.name}</span>
                  </div>
                  <div className="nk-upload-size">{bytesToMegaBytes(file.size)} MB</div>
                </div>
                <div className="nk-upload-action">
                  <a
                    href="#delete"
                    onClick={(ev) => {
                      ev.preventDefault();
                      removeFromList(file.name);
                    }}
                    className="btn btn-icon btn-trigger"
                  >
                    <Icon name="trash"></Icon>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-center">
              <span>No files added yet !</span>
            </div>
          )}
        </div>
        <div className="nk-modal-action justify-end">
          <ul className="btn-toolbar g-4 align-center">
            <li>
              <a
                href="#toggle"
                onClick={(ev) => {
                  ev.preventDefault();
                  toggle();
                }}
                className="link link-primary"
              >
                Cancel
              </a>
            </li>
            <li>
              <Button color="primary" onClick={() => addFilesToSystem()}>
                Add Files
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Upload;
