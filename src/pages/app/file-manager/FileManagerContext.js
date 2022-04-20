import React, { useState, createContext } from "react";
import { currentTime, getDateStructured } from "../../../utils/Utils";
import { folderList } from "./Data";

export const FileManagerContext = createContext();

export const FileManagerContextProvider = (props) => {
  const [data, setData] = useState(folderList);
  const [plan, setPlan] = useState("Starter");

  // Creates a new folder
  const createFolder = (filename, svg) => {
    let newFolder = {
      id: data.length + 1,
      meta: {
        type: "folder",
        name: filename,
        svg: svg,
        time: currentTime(),
        date: getDateStructured(new Date()),
        size: 0,
        starred: false,
      },
      subFolder: [],
    };
    let defaultData = data;
    let folderId = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
    let findFolder = defaultData.findIndex((item) => item.id === Number(folderId));
    if (folderId !== "" && defaultData[findFolder] !== undefined) {
      defaultData[findFolder].subFolder.push({ fileId: data.length + 1 });
      defaultData = [newFolder, ...defaultData];
      setData(defaultData);
    } else {
      setData([newFolder, ...defaultData]);
    }
  };

  // Creates a file
  const createFile = (files) => {
    let defaultData = data;
    let folderId = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
    let findFolder = defaultData.findIndex((item) => item.id === Number(folderId));
    if (folderId !== "" && defaultData[findFolder] !== undefined) {
      let fileArray = [];
      files.forEach((item) => {
        fileArray.push({ fileId: item.id });
      });
      defaultData[findFolder].subFolder = [...defaultData[findFolder].subFolder, ...fileArray];
      defaultData = [...defaultData, ...files];
      setData([...defaultData]);
    } else {
      defaultData = [...defaultData, ...files];
      setData([...defaultData]);
    }
  };

  // Download a folder/file
  const downloadFile = (file) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "data:" + file.meta.ext + ";charset=utf-8," + encodeURIComponent(file.meta.name);
    downloadLink.download = file.meta.name;
    downloadLink.click();
  };

  // Downloads all the selected file
  const selectorDownloadFile = () => {
    let defaultData = data;
    let checkedItems = defaultData.filter((item) => item.meta.checked === true);
    checkedItems.forEach((file) => {
      downloadFile(file);
    });
  };

  // Copy a folder/file
  const copyToFolder = (file, folder) => {
    let defaultData = data;

    if (folder !== "") {
      let findNewFolderIndex = defaultData.findIndex((item) => item.id === folder);

      defaultData[findNewFolderIndex].subFolder.push({ fileId: file.id });
      setData([...defaultData]);
    }
  };

  // Selector copy for lists
  const selectorCopyToFolder = (folder) => {
    let defaultData = data;
    let checkedItems = defaultData.filter((item) => item.meta.checked === true);
    checkedItems.forEach((file) => {
      copyToFolder(file, folder);
    });
  };

  // Move a folder/filer
  const moveFolder = (currentFolder, file, folder) => {
    let defaultData = data;
    if (folder !== "") {
      if (currentFolder === null) {
        copyToFolder(file, folder);
      } else {
        let findNewFolderIndex = defaultData.findIndex((item) => item.id === folder);
        let findPrevFolderIndex = defaultData.findIndex((item) => item.id === Number(currentFolder));
        defaultData[findNewFolderIndex].subFolder.push({ fileId: file.id });
        defaultData[findPrevFolderIndex].subFolder = defaultData[findPrevFolderIndex].subFolder.filter(
          (item) => item.fileId !== file.id
        );
        setData([...defaultData]);
      }
    }
  };

  // Shares a file/folder
  const shareFiles = (id) => {
    let defaultData = data;
    let found = defaultData.findIndex((item) => item.id === id);
    defaultData[found].shared = { sharedTime: currentTime(), sharedDate: "Today" };
    defaultData[found].meta.members = [{ user: "Illiash Hossain", theme: "purple" }];
    setData([...defaultData]);
  };

  // Stars a folder/file
  const onStarClick = (id) => {
    let defaultData = data;
    let found = defaultData.findIndex((item) => item.id === id);
    if (defaultData[found].meta.starred) {
      defaultData[found].meta.starred = false;
    } else {
      defaultData[found].meta.starred = true;
    }
    setData([...defaultData]);
  };

  // Checks a file/folder
  const onFileCheck = (ev, id) => {
    let defaultData = data;
    let found = defaultData.findIndex((item) => item.id === id);
    if (ev.target.checked) {
      defaultData[found].meta.checked = true;
      setData([...defaultData]);
    } else {
      defaultData[found].meta.checked = false;
      setData([...defaultData]);
    }
  };

  // Deletes a file/folder
  const deleteFolder = (id) => {
    let defaultData = data;
    let found = defaultData.findIndex((item) => item.id === id);
    defaultData[found]["recovery"] = { deletedAt: "Today", deletedOn: currentTime() };
    setData([...defaultData]);
  };

  // Deletes all the selected file
  const selectorDeleteFolder = () => {
    let defaultData = data;
    let checkedItems = defaultData.filter((item) => item.meta.checked === true);
    checkedItems.forEach((file) => {
      deleteFolder(file.id);
    });
  };

  // Restores a file
  const restoreFolder = (id) => {
    let defaultData = data;
    let found = defaultData.findIndex((item) => item.id === id);
    delete defaultData[found]["recovery"];

    setData([...defaultData]);
  };

  // Removes shares
  const removeShare = (id, type) => {
    let defaultData = data;
    let found = defaultData.findIndex((item) => item.id === id);
    if (type === "incoming") {
      defaultData[found].meta.members = [];
      setData([...defaultData]);
    } else if (type === "outgoing") {
      defaultData[found].shared = false;
      setData([...defaultData]);
    } else {
      defaultData[found].meta.link = false;
      setData([...defaultData]);
    }
  };

  // Permanently deletes folders/files
  const permanentDelete = (id) => {
    let defaultData = data;
    defaultData = defaultData.filter((item) => item.id !== id);
    setData([...defaultData]);
  };

  // Returns the total size for a folder;
  const getTotalSize = (folder) => {
    let folderChildren = folder.subFolder;
    let size = 0;
    if (folderChildren.length === 0) {
      return size;
    } else {
      folderChildren.forEach((el) => {
        let file = getFiles(el.fileId);
        if (file === undefined) {
          size = size + 0;
        } else {
          size = size + file.meta.size;
        }
      });
      return size;
    }
  };

  const getFiles = (id) => {
    return data.find((item) => item.id === id);
  };

  return (
    <FileManagerContext.Provider
      value={{
        contextData: [data, setData],
        planData: [plan, setPlan],
        createFolder: createFolder,
        createFile: createFile,
        onStarClick: onStarClick,
        deleteFolder: deleteFolder,
        selectorDeleteFolder: selectorDeleteFolder,
        restoreFolder: restoreFolder,
        removeShare: removeShare,
        shareFiles: shareFiles,
        onFileCheck: onFileCheck,
        downloadFile: downloadFile,
        selectorDownloadFile: selectorDownloadFile,
        copyToFolder: copyToFolder,
        selectorCopyToFolder: selectorCopyToFolder,
        moveFolder: moveFolder,
        permanentDelete: permanentDelete,
        getTotalSize: getTotalSize,
      }}
    >
      {props.children}
    </FileManagerContext.Provider>
  );
};
