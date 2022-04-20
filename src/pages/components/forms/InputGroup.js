import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
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
  Icon,
} from "../../../components/Component";
import { Row, Col, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from "reactstrap";

const InputGroup = () => {
  const [defaultFiles, setDefaultFiles] = useState("");
  const [defaultFiles2, setDefaultFiles2] = useState("");
  const [defaultFiles3, setDefaultFiles3] = useState("");
  const [defaultFiles4, setDefaultFiles4] = useState("");

  return (
    <React.Fragment>
      <Head title="Input Group"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Input Group
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples and usage guidelines for input group. Extend form controls by adding text, buttons, or button
                groups on either side of text inputs, custom selects, and custom file inputs.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Example</BlockTitle>
              <p>
                Place one add-on or button on either side of an input. You may also place one on both sides of an input.
                We do not support multiple form-controls in a single input group and{" "}
                <code className="code-tag">{`<label>`}</code>s must come outside the input group.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        @
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" required="" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" required="" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        @example.com
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="basic-url">
                    Your URL
                  </label>
                  <div className="form-control-wrap">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">
                          https://example.com/users/
                        </span>
                      </div>
                      <input type="text" className="form-control" required="" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon4">
                        $
                      </span>
                    </div>
                    <input type="text" className="form-control" required="" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon4">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">With textarea</span>
                    </div>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<div className="form-control-wrap">
    <div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text">With textarea</span>
        </div>
        <textarea className="form-control"></textarea>
    </div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Sizing</BlockTitle>
              <p>
                Add the relative form sizing classes to the .input-group itself and contents within will automatically
                resize—no need for repeating the form control size classes on each element.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group input-group-sm">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Small
                      </span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-md">
                        Default
                      </span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-lg">
                        Large
                      </span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<div className="form-control-wrap">
    <div className="input-group input-group-lg">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
            Large
            </span>
        </div>
        <input type="text" className="form-control" />
    </div>
</div> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Checkbox and Radios</BlockTitle>
              <p>Place any checkbox or radio option within an input group’s addon instead of text.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <input type="checkbox" />
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <input type="radio" />
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  <div className="form-control-wrap">
    <div className="input-group">
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="radio" />
            </div>
        </div>
        <input type="text" className="form-control" />
    </div>
</div> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Multiple inputs</BlockTitle>
              <p>
                While multiple <code>{`<input>`}</code>s are supported visually, validation styles are only available
                for input groups with a single <code>{`<input>`}</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">First and last name</span>
                    </div>
                    <input type="text" className="form-control" />
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  <div className="form-control-wrap">
    <div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text">First and last name</span>
        </div>
        <input type="text" className="form-control" />
        <input type="text" className="form-control" />
    </div>
</div> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Multiple addons</BlockTitle>
              <p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {` <div className="input-group">
    <input type="text" className="form-control" />
    <div className="input-group-append">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
    </div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Button Addons</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipients username" />
                    <div className="input-group-append">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                      <Button outline color="primary" className="btn-dim" placeholder="Recipients username">
                        Button
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<div className="form-control-wrap">
    <div className="input-group">
        <input type="text" className="form-control" />
        <div className="input-group-append">
            <Button outline color="primary" className="btn-dim">
                Button
            </Button>
            <Button outline color="primary" className="btn-dim" placeholder="Recipients username">
                Button
            </Button>
        </div>
    </div>
</div> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Button with Dropdowns</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <UncontrolledButtonDropdown className="input-group-prepend">
                      <DropdownToggle tag="button" className="btn btn-outline-primary btn-dim dropdown-toggle">
                        <span>Dropdown</span>
                        <Icon name="chevron-down" className="mx-n1"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Action Settings
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Push Notification
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Login Activity
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <UncontrolledButtonDropdown className="input-group-append">
                      <DropdownToggle tag="button" className="btn btn-outline-primary btn-dim dropdown-toggle">
                        <span>Dropdown</span>
                        <Icon name="chevron-down" className="mx-n1"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Action Settings
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Push Notification
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Login Activity
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` <div className="form-control-wrap">
    <div className="input-group">
        <input type="text" className="form-control" />
        <UncontrolledButtonDropdown className="input-group-append">
        <DropdownToggle tag="button" className="btn btn-outline-primary btn-dim dropdown-toggle">
            <span>Dropdown</span>
            <Icon name="chevron-down" className="mx-n1"></Icon>
        </DropdownToggle>
        <DropdownMenu>
            <ul className="link-list-opt no-bdr">
            <li>
                <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                Action Settings
                </DropdownItem>
            </li>
            <li>
                <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                Push Notification
                </DropdownItem>
            </li>
            <li className="divider"></li>
            <li>
                <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                Login Activity
                </DropdownItem>
            </li>
            </ul>
        </DropdownMenu>
        </UncontrolledButtonDropdown>
    </div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Segmented Buttons</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <UncontrolledButtonDropdown className="input-group-prepend">
                      <Button outline color="primary" className="btn-dim">
                        Action
                      </Button>
                      <DropdownToggle
                        tag="button"
                        className="btn btn-icon btn-outline-primary btn-dim dropdown-toggle dropdown-toggle-split"
                      >
                        <Icon name="chevron-down"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                              Action Settings
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                              Push Notification
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                              Login Activity
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <UncontrolledButtonDropdown className="input-group-append">
                      <Button outline color="primary" className="btn-dim">
                        Action
                      </Button>
                      <DropdownToggle
                        tag="button"
                        className="btn btn-icon btn-outline-primary btn-dim dropdown-toggle dropdown-toggle-split"
                      >
                        <Icon name="chevron-down"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Action Settings
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Push Notification
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" onClick={(ev) => ev.preventDefault()}>
                              Login Activity
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="form-control-wrap">
    <div className="input-group">
        <input type="text" className="form-control" />
        <UncontrolledButtonDropdown className="input-group-append">
            <Button outline color="primary" className="btn-dim">
                Action
            </Button>
            <DropdownToggle tag="button" className="btn btn-icon btn-outline-primary btn-dim dropdown-toggle dropdown-toggle-split">
                <Icon name="chevron-down"></Icon>
            </DropdownToggle>
            <DropdownMenu>
                <ul className="link-list-opt no-bdr">
                <li>
                    <DropdownItem tag="a" href="#dd"  onClick={(ev) => ev.preventDefault()}>
                    Action Settings
                    </DropdownItem>
                </li>
                <li>
                    <DropdownItem tag="a" href="#dd" onClick={(ev) => ev.preventDefault()}>
                    Push Notification
                    </DropdownItem>
                </li>
                <li className="divider"></li>
                <li>
                    <DropdownItem tag="a" href="#dd" onClick={(ev) => ev.preventDefault()}>
                    Login Activity
                    </DropdownItem>
                </li>
                </ul>
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    </div>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Custom Select</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="inputGroupSelect01">
                        Options
                      </label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                      <option defaultValue="">Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option defaultValue="">Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="input-group-append">
                      <label className="input-group-text" htmlFor="inputGroupSelect02">
                        Options
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                    <select className="custom-select" id="inputGroupSelect03">
                      <option defaultValue="">Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <select className="custom-select" id="inputGroupSelect03">
                      <option defaultValue="">Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="input-group-append">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<div className="form-control-wrap">
    <div className="input-group">
        <input type="text" className="form-control" />
        <div className="input-group-append">
            <Button outline color="primary" className="btn-dim">
            Button
            </Button>
            <select className="custom-select" id="inputGroupSelect03">
                <option defaultValue="">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</div> `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Custom file input</BlockTitle>
              <BlockDes>
                <p>
                  Input groups include support for custom file inputs. Browser default versions of these are not
                  supported.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Upload</span>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        onChange={(e) => setDefaultFiles(e.target.files[0].name)}
                      />
                      <label className="custom-file-label" htmlFor="inputGroupFile01">
                        {defaultFiles === "" ? "Choose files" : defaultFiles}
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile02"
                        onChange={(e) => setDefaultFiles2(e.target.files[0].name)}
                      />
                      <label className="custom-file-label" htmlFor="inputGroupFile02">
                        {defaultFiles2 === "" ? "Choose files" : defaultFiles2}
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">Upload</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile03"
                        onChange={(e) => setDefaultFiles3(e.target.files[0].name)}
                      />
                      <label className="custom-file-label" htmlFor="inputGroupFile03">
                        {defaultFiles3 === "" ? "Choose files" : defaultFiles3}
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-12">
                <div className="form-control-wrap">
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile04"
                        onChange={(e) => setDefaultFiles4(e.target.files[0].name)}
                      />
                      <label className="custom-file-label" htmlFor="inputGroupFile04">
                        {defaultFiles4 === "" ? "Choose files" : defaultFiles4}
                      </label>
                    </div>
                    <div className="input-group-append">
                      <Button outline color="primary" className="btn-dim">
                        Button
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<div className="form-control-wrap">
    <div className="input-group">
        <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile04" />
            <label className="custom-file-label" htmlFor="inputGroupFile04">
            Choose file
            </label>
        </div>
        <div className="input-group-append">
            <Button outline color="primary" className="btn-dim">
                Button
            </Button>
        </div>
    </div>
</div> `}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default InputGroup;
