import React, { useRef } from "react";
import Head from "../../../../layout/head/Head";
import Content from "../../../../layout/content/Content";
import { Editor } from "@tinymce/tinymce-react";
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

const TinymcePreview = () => {
  const editorRef = useRef(null);

  return (
    <React.Fragment>
      <Head title="Tinymce" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Tinymce Editor
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Using the{" "}
                <a href="https://www.tiny.cloud/" target="_blank" rel="noreferrer">
                  Tinymce
                </a>{" "}
                plugin, you can simply make some awesome rich text editor.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Default settings Editor</BlockTitle>
              <BlockDes>
                <p>Tinymce rich text editor with default options.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            {" "}
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                menubar: "file edit view format",
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic | alignleft aligncenter " +
                  "alignright alignjustify | outdent indent",
              }}
            />
          </PreviewCard>
          <CodeBlock>{`<Editor
    onInit={(evt, editor) => (editorRef.current = editor)}
    initialValue="<p>This is the initial content of the editor.</p>"
    init={{
    menubar: "file edit view format",
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code",
    ],
    toolbar:
        "undo redo | formatselect | " +
        "bold italic | alignleft aligncenter " +
        "alignright alignjustify | outdent indent",
    }}
/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Menubar Editor</BlockTitle>
              <p>Tinymce rich text editor with only menubar.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            {" "}
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                menubar: "file edit view format",
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code",
                ],
                toolbar: false,
              }}
            />
          </PreviewCard>
          <CodeBlock>{`<Editor
    onInit={(evt, editor) => (editorRef.current = editor)}
    initialValue="<p>This is the initial content of the editor.</p>"
    init={{
    menubar: "file edit view format",
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code",
    ],
    toolbar: false,
    }}
/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Toolbar Editor</BlockTitle>
              <p>Tinymce rich text editor with only toolbar.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            {" "}
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic | alignleft aligncenter " +
                  "alignright alignjustify | outdent indent",
              }}
            />
          </PreviewCard>
          <CodeBlock>{` <Editor
    onInit={(evt, editor) => (editorRef.current = editor)}
    initialValue="<p>This is the initial content of the editor.</p>"
    init={{
    menubar: false,
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code",
    ],
    toolbar:
        "undo redo | formatselect | " +
        "bold italic | alignleft aligncenter " +
        "alignright alignjustify | outdent indent",
    }}
/>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default TinymcePreview;
