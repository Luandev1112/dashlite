import React, { useContext, useState, useLayoutEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import SimpleBar from "simplebar-react";
import FileManagerAside from "./FileManagerAside";
import FileManagerBody from "./FileManagerBody";
import { FileManagerContext } from "./FileManagerContext";

const FileManager = () => {
  const { contextData } = useContext(FileManagerContext);

  const [scLg, setScLg] = useState(false);
  const [data, setData] = contextData;

  const toggleScreenLg = () => {
    setScLg(!scLg);
  };

  useLayoutEffect(() => {
    if (scLg) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!scLg) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [scLg]);

  return (
    <React.Fragment>
      <Head title="File Manager"></Head>
      <Content>
        <div className="nk-fmg">
          <SimpleBar className={`nk-fmg-aside toggle-screen-lg ${scLg ? "content-active" : ""}`}>
            <FileManagerAside setScLg={setScLg} />
          </SimpleBar>
          {scLg && <div className="toggle-overlay" onClick={() => toggleScreenLg()}></div>}
          <FileManagerBody data={data} setData={setData} toggleScreenLg={toggleScreenLg} />
        </div>
      </Content>
    </React.Fragment>
  );
};

export default FileManager;
