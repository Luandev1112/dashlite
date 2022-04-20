import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  Button,
  PreviewTable,
} from "../../../components/Component";
import { Col, Row } from "reactstrap";

const FormUpload = () => {
  const [defaultFiles, setDefaultFiles] = useState("");
  const [defaultFiles2, setDefaultFiles2] = useState("");
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);
  const [files4, setFiles4] = useState([]);

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles, set) => {
    set(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  return (
    <React.Fragment>
      <Head title="Form Upload"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Form Upload / Dropzone
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples and usage guidelines for form upload fields with default file input type and with{" "}
                <a href="https://react-dropzone.js.org/" target="_blank" rel="noreferrer">
                  {" "}
                  Dropzone{" "}
                </a>
                components.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Default Upload Field</BlockTitle>
              <p>File Upload with default input file type.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Default File Upload</label>
                  <div className="form-control-wrap">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => setDefaultFiles(e.target.files[0].name)}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        {defaultFiles === "" ? "Choose files" : defaultFiles}
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Multiple File Upload</label>
                  <div className="form-control-wrap">
                    <div className="custom-file">
                      <input
                        type="file"
                        multiple
                        className="custom-file-input"
                        id="customMultipleFiles"
                        onChange={(e) => setDefaultFiles2(e.target.files[0].name)}
                      />
                      <label className="custom-file-label" htmlFor="customMultipleFiles">
                        {defaultFiles2 === "" ? "Choose files" : defaultFiles2}
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<div className="form-group">
    <label className="form-label">Multiple File Upload</label>
    <div className="form-control-wrap">
        <div className="custom-file">
            <input type="file" multiple className="custom-file-input" id="customMultipleFiles" />
            <label className="custom-file-label" htmlFor="customMultipleFiles">
            Choose files
            </label>
        </div>
    </div>
</div> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Dropzone</BlockTitle>
              <p>
                File Upload system with
                <a href="https://react-dropzone.js.org/" target="_blank" rel="noreferrer">
                  {" "}
                  Dropzone{" "}
                </a>
                , for more detailed documentation, visit{" "}
                <a href="https://react-dropzone.js.org/" target="_blank" rel="noreferrer">
                  {" "}
                  React Dropzone{" "}
                </a>
                .
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col sm="6">
                <label className="form-label">Dropzone Default</label>
                <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                        <input {...getInputProps()} />
                        {files.length === 0 && (
                          <div className="dz-message">
                            <span className="dz-message-text">Drag and drop file</span>
                            <span className="dz-message-or">or</span>
                            <Button color="primary">SELECT</Button>
                          </div>
                        )}
                        {files.map((file) => (
                          <div
                            key={file.name}
                            className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                          >
                            <div className="dz-image">
                              <img src={file.preview} alt="preview" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Col>
              <Col sm="6">
                <label className="form-label">Dropzone Single File</label>
                <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles2)} maxFiles={1}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                        <input {...getInputProps()} />
                        {files2.length === 0 && (
                          <div className="dz-message">
                            <span className="dz-message-text">Drag and drop file</span>
                            <span className="dz-message-or">or</span>
                            <Button color="primary">SELECT</Button>
                          </div>
                        )}
                        {files2.map((file) => (
                          <div
                            key={file.name}
                            className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                          >
                            <div className="dz-image">
                              <img src={file.preview} alt="preview" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Col>
              <Col sm="6">
                <label className="form-label">Dropzone File Size Limit</label>
                <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles3)} maxSize={4194304}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                        <input {...getInputProps()} />
                        {files3.length === 0 && (
                          <div className="dz-message">
                            <span className="dz-message-text">Drag and drop file</span>
                            <span className="dz-message-or">or</span>
                            <Button color="primary">SELECT</Button>
                          </div>
                        )}
                        {files3.map((file) => (
                          <div
                            key={file.name}
                            className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                          >
                            <div className="dz-image">
                              <img src={file.preview} alt="preview" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Col>
              <Col sm="6">
                <label className="form-label">Dropzone Only Image Upload</label>
                <Dropzone
                  onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles4)}
                  accept={[".jpg", ".png", ".svg"]}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                        <input {...getInputProps()} />
                        {files4.length === 0 && (
                          <div className="dz-message">
                            <span className="dz-message-text">Drag and drop file</span>
                            <span className="dz-message-or">or</span>
                            <Button color="primary">SELECT</Button>
                          </div>
                        )}
                        {files4.map((file) => (
                          <div
                            key={file.name}
                            className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                          >
                            <div className="dz-image">
                              <img src={file.preview} alt="preview" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`import {useState} from "react";
import Dropzone from "react-dropzone";

const [files, setFiles] = useState([]);

const handleDropChange = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

<Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
{({ getRootProps, getInputProps }) => (
  <section>
    <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
      <input {...getInputProps()} />
      {files.length === 0 && (
        <div className="dz-message">
          <span className="dz-message-text">Drag and drop file</span>
          <span className="dz-message-or">or</span>
          <Button color="primary">SELECT</Button>
        </div>
      )}
      {files.map((file) => (
        <div
          key={file.name}
          className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
        >
          <div className="dz-image">
            <img src={file.preview} alt="preview" />
          </div>
        </div>
      ))}
    </div>
  </section>
)}
</Dropzone>`}
          </CodeBlock>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Props Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>maxFiles={`{number}`}</code>
                </td>
                <td>
                  Use <code>{`{number}`}</code> with <code>maxFiles</code> props to specify file limit in react dropzone{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <code>maxSize={`{size}`}</code>
                </td>
                <td>
                  Use <code>{`{size}`}</code> with <code>maxSize</code> props to specify file size (bytes) limit in
                  react dropzone{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <code>acceptedFiles=[".jpg", ".png", ".svg"]</code>
                </td>
                <td>
                  Use <code>{`{fileType}`}</code> with <code>acceptedFiles</code> props as{" "}
                  <code>image/*, .docx, .psd, .txt</code> etc in a array of strings to specify accepted file types.
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormUpload;
