import React, { useContext, useState } from "react";
import CreateFolder from "../../../pages/app/file-manager/modals/CreateFolder";
import Details from "../../../pages/app/file-manager/modals/Details";
import Share from "../../../pages/app/file-manager/modals/Share";
import Copy from "../../../pages/app/file-manager/modals/Copy";
import Move from "../../../pages/app/file-manager/modals/Move";
import { Icon } from "../../Component";
import { FileManagerContext } from "../../../pages/app/file-manager/FileManagerContext";
import { DropdownItem, DropdownMenu, DropdownToggle, Modal, UncontrolledDropdown } from "reactstrap";

const FileManagerDropdown = ({ file }) => {
  const { deleteFolder, downloadFile } = useContext(FileManagerContext);

  const [detailModal, setDetailModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [copyModal, setCopyModal] = useState(false);
  const [moveModal, setMoveModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };

  const toggleDetailModal = () => {
    setDetailModal(!detailModal);
  };
  const toggleShareModal = () => {
    setShareModal(!shareModal);
  };
  const toggleCopyModal = () => {
    setCopyModal(!copyModal);
  };
  const toggleMoveModal = () => {
    setMoveModal(!moveModal);
  };

  return (
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
                  setDetailModal(true);
                }}
                href="#item"
              >
                <Icon name="eye"></Icon>
                <span>Details</span>
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                tag="a"
                onClick={(ev) => {
                  ev.preventDefault();
                  setShareModal(true);
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
                onClick={(ev) => {
                  ev.preventDefault();
                  setCopyModal(true);
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
                  setMoveModal(true);
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
                  downloadFile(file);
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
                  deleteFolder(file.id);
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

      <Modal isOpen={detailModal} size="md" toggle={toggleDetailModal}>
        <Details file={file} toggle={toggleDetailModal} toggleShare={toggleShareModal} />
      </Modal>

      <Modal isOpen={shareModal} size="md" toggle={toggleShareModal}>
        <Share file={file} toggle={toggleShareModal} />
      </Modal>

      <Modal isOpen={copyModal} size="md" toggle={toggleCopyModal}>
        <Copy file={file} toggle={toggleCopyModal} toggleCreateModal={toggleCreateModal} />
      </Modal>

      <Modal isOpen={moveModal} size="md" toggle={toggleMoveModal}>
        <Move file={file} toggle={toggleMoveModal} toggleCreateModal={toggleCreateModal} />
      </Modal>

      <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
        <CreateFolder toggle={toggleCreateModal} />
      </Modal>
    </div>
  );
};

export default FileManagerDropdown;
