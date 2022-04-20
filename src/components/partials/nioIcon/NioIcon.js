import React, { useState } from "react";
import Icon from "../../icon/Icon";
import Button from "../../button/Button";
import CopyToClipboard from "react-copy-to-clipboard";

const NicoIconCard = ({ iconName, tag, ...props }) => {
  const [copy, setCopy] = useState(false);
  const [text] = useState(tag);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <React.Fragment>
      <li className="preview-icon-item">
        <div className={`preview-icon-box card ${copy ? "clipboard-success" : ""}`}>
          <CopyToClipboard text={text}>
            <Button type="button" className="btn-icon btn-clipboard clipboard-init clipboard-text" onClick={handleCopy}>
              <Icon name="copy"></Icon>
            </Button>
          </CopyToClipboard>
          <div className="preview-icon-wrap">
            <Icon name={iconName}></Icon>
          </div>
          <span className="preview-icon- name">{iconName}</span>
          <span className="clipboard-success-message text-primary">Copied</span>
        </div>
      </li>
    </React.Fragment>
  );
};
export default NicoIconCard;
