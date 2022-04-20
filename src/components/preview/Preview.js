import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Card, Button } from "reactstrap";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { OverlineTitle } from "../text/Text";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const PreviewCard = ({ className, bodyClass, ...props }) => {
  return (
    <Card className={`card-preview ${className ? className : ""}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ""}`}>{props.children}</div>
    </Card>
  );
};

export const PreviewAltCard = ({ className, bodyClass, ...props }) => {
  return (
    <Card className={`card-bordered ${className ? className : ""}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ""}`}>{props.children}</div>
    </Card>
  );
};

export const PreviewTable = ({ ...props }) => {
  return (
    <Card className="card-preview">
      <table className="table preview-reference">{props.children}</table>
    </Card>
  );
};
export const CodeBlock = ({ language, ...props }) => {
  const [copyText] = useState(props.children);
  const [copyState, setCopyState] = useState(false);
  const onCopyClick = () => {
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };
  return (
    <div className={`code-block code-block-clean ${copyState ? "clipboard-success" : ""}`}>
      <OverlineTitle className="title">{props.title ? props.title : "Code Example"}</OverlineTitle>
      <CopyToClipboard text={copyText} onCopy={onCopyClick}>
        <Button color="blank" size="sm" className="clipboard-init">
          {copyState ? "Copied" : "Copy"}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter language="javascript" className="bg-lighter h-max-150px m-0" style={a11yLight}>
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
};
