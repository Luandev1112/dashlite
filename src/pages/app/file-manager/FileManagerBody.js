import React, { useState, useEffect } from "react";
import Home from "./preview/Home";
import Files from "./preview/Files";
import Upload from "./modals/Upload";
import Shared from "./preview/Shared";
import Pricing from "./preview/Pricing";
import Starred from "./preview/Starred";
import Recovery from "./preview/Recovery";
import CreateFolder from "./modals/CreateFolder";
import SettingsPreview from "./preview/Settings";
import SpecificFolder from "./preview/SpecificFolder";
import { folderList } from "./Data";
import { Icon } from "../../../components/Component";
import { Route, Switch } from "react-router";
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Modal, UncontrolledDropdown } from "reactstrap";

const FileManagerBody = ({ data, setData, toggleScreenLg }) => {
  const [dataList, setDataList] = useState();
  const [createModal, setCreateModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [children, setChildren] = useState([]);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };
  const toggleUploadModal = () => {
    setUploadModal(!uploadModal);
  };

  const returnFolder = (id) => {
    return data.find((item) => item.id === id);
  };

  useEffect(() => {
    setDataList(data);
  }, [data]);

  useEffect(() => {
    if (dataList) {
      let findFolder = dataList.find(
        (item) =>
          item.id === Number(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1])
      );
      if (findFolder) {
        let children = [];
        findFolder.subFolder.map((el) => {
          children.push(returnFolder(el.fileId));
        });
        setChildren([...children]);
      }
    }
  }, [window.location.pathname, dataList]);

  useEffect(() => {
    setSearchText("");
  }, [window.location.pathname]);

  useEffect(() => {
    let defaultData = data;
    if (searchText !== "") {
      if (children.length > 0) {
        defaultData = children.filter((item) => {
          return item.meta.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setChildren(defaultData);
      } else {
        defaultData = folderList.filter((item) => {
          return item.meta.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setDataList([...defaultData]);
      }
    } else {
      setDataList([...folderList]);
    }
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="nk-fmg-body">
      {window.location.pathname.split("/")[window.location.pathname.split("/").length - 1] !== "settings" &&
        window.location.pathname.split("/")[window.location.pathname.split("/").length - 1] !== "pricing" && (
          <div className="nk-fmg-body-head d-none d-lg-flex">
            <div className="nk-fmg-search">
              <Icon name="search"></Icon>
              <input
                type="text"
                className="form-control border-transparent form-focus-none"
                placeholder="Search files, folders"
                value={searchText}
                onChange={(ev) => setSearchText(ev.target.value)}
              />
            </div>
            <div className="nk-fmg-actions">
              <ul className="nk-block-tools g-3">
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      tag="a"
                      href="#toggle"
                      onClick={(ev) => ev.preventDefault()}
                      className="btn btn-light"
                    >
                      <Icon name="plus"></Icon> <span>Create</span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#upload"
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleUploadModal();
                            }}
                          >
                            <Icon name="upload-cloud"></Icon>
                            <span>Upload File</span>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#upload"
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleCreateModal();
                            }}
                          >
                            <Icon name="folder-plus"></Icon>
                            <span>Create Folder</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li>
                  <Button color="primary" onClick={() => toggleUploadModal()}>
                    <Icon name="upload-cloud"></Icon> <span>Upload</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      <div className="nk-fmg-body-content">
        {searchText !== "" ? (
          <Files
            data={dataList}
            setData={setData}
            searchText={searchText}
            setSearchText={setSearchText}
            folderName={"Search Files"}
            toggleCreateModal={toggleCreateModal}
            toggleUploadModal={toggleUploadModal}
            toggleScreenLg={toggleScreenLg}
          />
        ) : (
          dataList && (
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager`}
                render={() => (
                  <Home
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/files`}
                render={() => (
                  <Files
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/starred`}
                render={() => (
                  <Starred
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/shared`}
                render={() => (
                  <Shared
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/recovery`}
                render={() => (
                  <Recovery
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/settings`}
                render={() => <SettingsPreview toggleScreenLg={toggleScreenLg} />}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/pricing`}
                render={() => <Pricing toggleScreenLg={toggleScreenLg} />}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/folder/:id`}
                render={(props) => (
                  <SpecificFolder
                    data={data}
                    children={children}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                    {...props}
                  />
                )}
              />
            </Switch>
          )
        )}
      </div>
      <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
        <CreateFolder toggle={toggleCreateModal} />
      </Modal>
      <Modal isOpen={uploadModal} size="md" toggle={toggleUploadModal}>
        <Upload toggle={toggleUploadModal} />
      </Modal>
    </div>
  );
};

export default FileManagerBody;
