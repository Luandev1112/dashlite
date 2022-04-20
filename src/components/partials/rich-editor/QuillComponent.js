import React from "react";
import { useQuill } from "react-quilljs";

export const QuillComponent = () => {
  let placeholder = "Hello World!";
  const { quillRef } = useQuill({ placeholder });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={quillRef} />
    </div>
  );
};

export const QuillComponentMinimal = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
    ],
  };

  const placeholder = "Compose an epic...";

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "indent",
    "size",
    "header",
    "link",
    "image",
    "video",
    "color",
    "background",
    "clean",
  ];
  const { quillRef } = useQuill({ modules, formats, placeholder });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={quillRef} />
    </div>
  );
};
