import React, { useEffect, useState } from "react";
import Files from "./Files";
import { folderList } from "../Data";

const SpecificFolder = ({
  match,
  data,
  searchText,
  setSearchText,
  setData,
  children,
  toggleCreateModal,
  toggleUploadModal,
  toggleScreenLg,
}) => {
  const returnFolder = (id) => {
    return folderList.find((item) => item.id === id);
  };

  return (
    <React.Fragment>
      {children && (
        <Files
          data={children}
          setData={setData}
          searchText={searchText}
          setSearchText={setSearchText}
          folderName={returnFolder(Number(match.params.id)).meta.name}
          toggleCreateModal={toggleCreateModal}
          toggleUploadModal={toggleUploadModal}
          toggleScreenLg={toggleScreenLg}
        />
      )}
    </React.Fragment>
  );
};

export default SpecificFolder;
