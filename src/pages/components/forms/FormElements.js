import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import makeAnimated from "react-select/animated";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  OverlineTitle,
  OutlinedInput,
  Icon,
} from "../../../components/Component";
import { defaultOptions, groupedData, colourData } from "./SelectData";
import { RSelect } from "../../../components/Component";

const FormElementsPage = () => {
  const [file, setFile] = useState("");
  const animatedComponents = makeAnimated();

  return (
    <React.Fragment>
      <Head title="Form Elements" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Form Elements
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples and usage guidelines for form control styles, layout options, and custom components for
                creating a wide variety of forms. Here’s a quick example to demonstrate form styles, so use these
                classes to opt into their customized displays.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Form controls</BlockTitle>
              <p>
                Textual form controls—like <code className="code-tag">&lt;input&gt;</code>s,{" "}
                <code className="code-tag">&lt;select&gt;</code>s, and{" "}
                <code className="code-tag">&lt;textarea&gt;</code>s—are styled with the <code>.form-control</code>{" "}
                className. Included are styles for general appearance, focus state, sizing, and more. Additional classes
                can be used to vary this layout on a per-form basis.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg">
              {" "}
              Default Preview{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                    Input text Default
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-1" className="form-label">
                    Input with Text
                  </Label>
                  <div className="form-control-wrap">
                    <div className="form-text-hint">
                      <span className="overline-title">Usd</span>
                    </div>
                    <input className="form-control" type="text" id="default-1" placeholder="Input placeholder" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-2" className="form-label">
                    Input with Icon Left
                  </Label>
                  <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                      <Icon name="user" />
                    </div>
                    <input className="form-control" type="text" id="default-2" placeholder="Input placeholder" />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="default-3" className="form-label">
                    Input with Icon Right
                  </Label>
                  <div className="form-control-wrap">
                    <div className="form-icon form-icon-right">
                      <Icon name="user" />
                    </div>
                    <input className="form-control" type="text" id="default-3" placeholder="Input placeholder" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-textarea" className="form-label">
                    Textarea
                  </Label>
                  <div className="form-control-wrap">
                    <textarea
                      className="no-resize form-control"
                      type="textarea"
                      id="default-textarea"
                      defaultValue="Large text area content"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-4" className="form-label">
                    Default File Upload
                  </Label>
                  <div className="form-control-wrap">
                    <div className="custom-file">
                      <input
                        type="file"
                        multiple
                        className="custom-file-input form-control"
                        id="customFile"
                        onChange={(e) => setFile(e.target.files[0].name)}
                      />
                      <Label className="custom-file-label" htmlFor="customFile">
                        {file === "" ? "Choose file" : file}
                      </Label>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="default-4" className="form-label">
                    Default Select
                  </Label>
                  <div className="form-control-wrap">
                    <div className="form-control-select">
                      <Input type="select" name="select" id="default-4">
                        <option value="default_option">Default Option</option>
                        <option value="option_select_name">Option select name</option>
                        <option value="option_select_name">Option select name</option>
                      </Input>
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <label htmlFor="default-5" className="form-label">
                    Default Select Multiple
                  </label>
                  <div className="form-control-wrap">
                    <div className="form-control-select-multiple">
                      <Input className="custom-select" type="select" name="select" id="default-5" multiple>
                        <option value="option_select0">Default Option</option>
                        <option value="option_select1">Option select name</option>
                        <option value="option_select2">Option select name</option>
                        <option value="option_select2">Option select name</option>
                        <option value="option_select2">Option select name</option>
                      </Input>
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>
            <OverlineTitle tag="span" className="preview-title-lg">
              {" "}
              State Preview{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-5" className="form-label">
                    Focus State
                  </Label>
                  <input className="form-control focus" placeholder="Input placeholder" />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-5" className="form-label">
                    Filled State
                  </Label>
                  <input className="form-control" defaultValue="Abu Ibn Ishtiak" placeholder="Input placeholder" />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-5" className="form-label">
                    Error State
                  </Label>
                  <input className="form-control error" placeholder="Input placeholder" />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-5" className="form-label">
                    Disabled State
                  </Label>
                  <input
                    className="form-control"
                    disabled
                    defaultValue="info@softnio.com"
                    placeholder="Input placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>
            <span className="preview-title-lg overline-title">Size Preview </span>
            <Row className="gy-4 align-center">
              <Col lg="4">
                <FormGroup>
                  <div className="form-control-wrap">
                    <input type="text" className="form-control form-control-xl" placeholder="Input Large" />
                  </div>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <div className="form-control-wrap">
                    <input type="text" className="form-control form-control-lg" placeholder="Input Regular" />
                  </div>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <div className="form-control-wrap">
                    <input type="text" className="form-control form-control-sm" placeholder="Input small" />
                  </div>
                </FormGroup>
              </Col>
              <Col lg="12">
                <p className="text-soft">
                  Use <code>.form-control-lg</code> or <code>.form-control-sm</code> with <code>.form-control</code> for
                  large or small input box.
                </p>
              </Col>
            </Row>
          </PreviewCard>
        </Block>

        <Block>
          <CodeBlock language="jsx">{`<input className="form-control form-control-lg"/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Form Outlined</BlockTitle>
              <p>
                Textual form controls—like <code className="code-tag">&lt;input&gt;</code>s,{" "}
                <code className="code-tag">&lt;select&gt;</code>s, and{" "}
                <code className="code-tag">&lt;textarea&gt;</code>s—are styled with the <code>.form-control</code>{" "}
                className. Included are styles for general appearance, focus state, sizing, and more. Additional classes
                can be used to vary this layout on a per-form basis.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <span className="preview-title-lg overline-title">Outlined Preview</span>
            <Row className="gy-4">
              <Col lg="4" sm="6">
                <FormGroup>
                  <OutlinedInput id="outlined-normal" label="Input text outline" size="xl" />
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup>
                  <OutlinedInput id="outlined-icon" label="Input with icon" size="xl" icon="user" />
                </FormGroup>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>
            <span className="preview-title-lg overline-title">Outlined Sizes</span>
            <Row className="gy-4">
              <Col sm="6" lg="4">
                <FormGroup>
                  <OutlinedInput id="outlined-xl" label="Input text xl" size="xl" />
                </FormGroup>
              </Col>
              <Col sm="6" lg="4">
                <FormGroup>
                  <OutlinedInput id="outlined-lg" label="Input text lg" size="lg" />
                </FormGroup>
              </Col>
              <Col sm="6" lg="4">
                <FormGroup>
                  <OutlinedInput label="Input Text" id="outlined-default" />
                </FormGroup>
              </Col>
              <Col size="12">
                <p className="text-soft">
                  Use <code>.form-control-outlined</code> with <code>.form-control</code> for outlined form element and
                  replace <code>.form-label</code> with <code>.form-label-outlined</code>, also place label after
                  input/select element.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">{`import { OutlinedInput } from "../../components/Components" 

<OutlinedInput id="outlined-icon" label="Input with icon" size="xl" icon="user" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Checkbox Styles</BlockTitle>
              <p>
                To create custom control, wrapped with <code className="code-tag">&lt;div&gt;</code> each checkbox{" "}
                <code className="code-tag">&lt;input&gt;</code> &amp; <code className="code-tag">&lt;label&gt;</code>{" "}
                using <code>.custom-control</code>, <code>.custom-checkbox</code> classes.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6" md="3">
                <div className="preview-block">
                  <span className="preview-title overline-title">Default</span>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input form-control" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col sm="6" md="3">
                <span className="preview-title overline-title">Checked</span>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input form-control"
                    defaultChecked
                    id="customCheck2"
                  />
                  <label className="custom-control-label" htmlFor="customCheck2">
                    Option Label
                  </label>
                </div>
              </Col>
              <Col sm="6" md="3">
                <div className="preview-block">
                  <span className="preview-title overline-title">Disabled</span>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input form-control" disabled id="customCheck3" />
                    <label className="custom-control-label" htmlFor="customCheck3">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col sm="6" md="3">
                <div className="preview-block">
                  <span className="preview-title overline-title">Check Disabled</span>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      defaultChecked
                      disabled
                      id="customCheck4"
                    />
                    <label className="custom-control-label" htmlFor="customCheck4">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <div className="preview-block">
                  <span className="preview-title overline-title">Size</span>
                  <div className="g-3 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck7" />
                        <label className="custom-control-label" htmlFor="customCheck7">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck6" />
                        <label className="custom-control-label" htmlFor="customCheck6">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-control-lg custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck5" />
                        <label className="custom-control-label" htmlFor="customCheck5">
                          Option Label
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <p className="text-soft">
                  For large or small size of <code>.custom-checkbox</code>, use <code>.custom-control-{`lg|sm`}</code>{" "}
                  with <code>.custom-control</code> className.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`<input type="checkbox" className="custom-control-input custom-control-lg"/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Radio Style</BlockTitle>
              <p>
                To create custom control, wrapped with <code className="code-tag">&lt;div&gt;</code> each radio{" "}
                <code className="code-tag">&lt;input&gt;</code> &amp; <code className="code-tag">&lt;label&gt;</code>{" "}
                using <code>.custom-control</code>, <code>.custom-radio</code> classNames.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Default</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio1">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Checked</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio2"
                      name="customRadio"
                      defaultChecked
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio2">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Disabled</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio3"
                      name="customRadio"
                      disabled
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio3">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Check Disabled</span>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio4"
                      name="customRadio1"
                      defaultChecked
                      disabled
                      className="custom-control-input form-control"
                    />
                    <label className="custom-control-label" htmlFor="customRadio4">
                      Option Label
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <div className="preview-block">
                  <span className="preview-title overline-title">Size</span>
                  <div className="g-4 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input form-control"
                          name="radioSize"
                          id="customRadio7"
                        />
                        <label className="custom-control-label" htmlFor="customRadio7">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input form-control"
                          name="radioSize"
                          id="customRadio6"
                        />
                        <label className="custom-control-label" htmlFor="customRadio6">
                          Option Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-control-lg custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input form-control"
                          name="radioSize"
                          id="customRadio5"
                        />
                        <label className="custom-control-label" htmlFor="customRadio5">
                          Option Label
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <p className="text-soft">
                  For large or small size of <code>.custom-radio</code>, use <code>.custom-control-{`lg|sm`}</code> with{" "}
                  <code>.custom-control</code> className.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`<input type="radio" className="custom-control custom-radio custom-control-lg"/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Switch Style</BlockTitle>
              <p>
                The switch markup of a <code>.custom-control</code> <code className="code-fnc">checkbox</code> but uses
                the <code>.custom-switch</code> className to render a toggle switch.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Default</span>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input form-control" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Checked</span>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      defaultChecked
                      id="customSwitch2"
                    />
                    <label className="custom-control-label" htmlFor="customSwitch2">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Disabled</span>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input form-control" disabled id="customSwitch3" />
                    <label className="custom-control-label" htmlFor="customSwitch3">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="preview-block">
                  <span className="preview-title overline-title">Check Disabled</span>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      defaultChecked
                      disabled
                      id="customSwitch4"
                    />
                    <label className="custom-control-label" htmlFor="customSwitch4">
                      Switch
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <div className="preview-block">
                  <span className="preview-title overline-title">Size</span>
                  <div className="g-3 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch7" />
                        <label className="custom-control-label" htmlFor="customSwitch7">
                          Switch Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-switch">
                        <Input type="checkbox" className="custom-control-input form-control" id="customSwitch6" />
                        <label className="custom-control-label" htmlFor="customSwitch6">
                          Switch Label
                        </label>
                      </div>
                    </div>
                    <div className="g">
                      <div className="custom-control custom-control-lg custom-switch">
                        <input type="checkbox" className="custom-control-input form-control" id="customSwitch5" />
                        <label className="custom-control-label" htmlFor="customSwitch5">
                          Switch Label
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="12">
                <p className="text-soft">
                  For large or small size of <code>.custom-switch</code>, use <code>.custom-control-{`lg|sm`}</code>{" "}
                  with <code>.custom-control</code> className.
                </p>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`<div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input form-control" defaultChecked id="customSwitch2"/>
  <label className="custom-control-label" htmlFor="customSwitch2"> Switch </label>
</div>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">React Select</BlockTitle>
              <p>
                To use the Dashlite customized version of react-select component import it such as,{" "}
                <code>import {`{RSelect}`} from "/components/Component.js"</code>. Visit the official documentaion{" "}
                <a href="https://react-select.com/home" target="_blank" rel="noreferrer">
                  here.
                </a>
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm={6}>
                <div className="form-group">
                  <label className="form-label">Select Default</label>
                  <RSelect options={defaultOptions} />
                </div>
              </Col>
              <Col sm={6}>
                <div className="form-group">
                  <label className="form-label">Select Multiple</label>
                  <RSelect options={defaultOptions} isMulti />
                </div>
              </Col>
              <Col sm={6}>
                <div className="form-group">
                  <label className="form-label">Select Grouped</label>
                  <RSelect options={groupedData} />
                </div>
              </Col>
              <Col sm={6}>
                <div className="form-group">
                  <label className="form-label">Select Animated</label>
                  <RSelect
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultData={[colourData[0], colourData[1]]}
                    isMulti
                    options={colourData}
                  />
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock>{`const Example () => {
  const options = {
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  }
  const animatedComponents = makeAnimated();

  return (
    // For default
    <RSelect options={options}/>

    // For Mutilple
    <RSelect isMulti options={options}/>

    // For Animation
    <RSelect isMulti components={animatedComponents} options={options} 
  )
}`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormElementsPage;
