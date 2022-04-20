import React from "react";
import Head from "../../../../layout/head/Head";
import Content from "../../../../layout/content/Content";
import { QuillComponent, QuillComponentMinimal } from "../../../../components/partials/rich-editor/QuillComponent";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
} from "../../../../components/Component";

const QuillPreview = () => {
  return (
    <React.Fragment>
      <Head title="Quill" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Quill Editor
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Using the{" "}
                <a href="https://www.npmjs.com/package/react-quilljs" rel="noreferrer" target="_blank">
                  React Quilljs
                </a>{" "}
                plugin, you can simply make some awesome rich text editor.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic</BlockTitle>
              <BlockDes>
                <p>A basic demostration of quilljs rich text editor.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <QuillComponent />
          </PreviewCard>
          <CodeBlock>
            {`  const { quillRef } = useQuill();
            
    <div style={{ width: "100%", height: "100%" }}>
        <div ref={quillRef} />
    </div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Minimal Editor</BlockTitle>
              <p>A minimal demostration of quilljs rich text editor.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <QuillComponentMinimal />
          </PreviewCard>
          <CodeBlock>
            {`export const QuillComponentMinimal = () => {
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
};`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default QuillPreview;
