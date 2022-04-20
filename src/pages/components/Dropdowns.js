import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";

import { Button, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock, PreviewTable } from "../../components/preview/Preview";
import { OverlineTitle } from "../../components/text/Text";

const DropdownsPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <React.Fragment>
      <Head title="Dropdowns" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Dropdowns
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin. To
                use the components, import it such as{" "}
                <code>import {`{Dropdown, DropdownToggle, DropdownMenu}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/dropdowns"} target="_blank" rel="noreferrer">
                  Reactstrap
                </a>{" "}
                library for detailed instructions.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Example</BlockTitle>
              <p>
                Any single .btn-action can be turned into a <code>DropdownToggle</code> with some markup changes. Here’s
                how you can put them to work with either elements:
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className="btn-action" color="primary">
                    <span>Dropdown Button</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Profile Settings</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Notifications</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Something else here</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li className="preview-item">
                <UncontrolledDropdown>
                  <div className="btn-group">
                    <Button color="secondary">Action</Button>
                    <DropdownToggle className="dropdown-toggle-split" color="secondary">
                      <Icon name="chevron-down"></Icon>
                    </DropdownToggle>
                  </div>
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Profile Settings</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Notifications</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Something else here</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="preview-item">
                <UncontrolledDropdown direction="up">
                  <DropdownToggle className="btn-action" color="primary">
                    <span>Dropup Button</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Profile Settings</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Notifications</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Something else here</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="preview-item">
                <UncontrolledDropdown direction="up">
                  <div className="btn-group">
                    <Button color="secondary">Action</Button>
                    <DropdownToggle className="dropdown-toggle-split" color="secondary">
                      <Icon name="chevron-up"></Icon>
                    </DropdownToggle>
                  </div>
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Profile Settings</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Notifications</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Something else here</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="preview-item">
                <UncontrolledDropdown direction="right">
                  <DropdownToggle className="btn-action" color="primary">
                    <span>Dropright Button</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Profile Settings</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Notifications</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Something else here</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="preview-item">
                <UncontrolledDropdown direction="right">
                  <div className="btn-group">
                    <Button color="secondary">Action</Button>
                    <DropdownToggle className="dropdown-toggle-split" color="secondary">
                      <Icon name="chevron-right"></Icon>
                    </DropdownToggle>
                  </div>
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Profile Settings</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Notifications</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Something else here</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const DropdownExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {setIsOpen(!isOpen)};

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="btn-action" color="primary">
        <span>Dropdown Button</span>
      </DropdownToggle>
      <DropdownMenu>
        <ul className="link-list-opt">
          <li>
            <DropdownItem
              tag="a"
              href="#links"
              onClick={(ev) => ev.preventDefault()}
            >
              <span>Profile Settings</span>
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              tag="a"
              href="#links"
              onClick={(ev) => ev.preventDefault()}
            >
              <span>Notifications</span>
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              tag="a"
              href="#links"
              onClick={(ev) => ev.preventDefault()}
            >
              <span>Another Action</span>
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              tag="a"
              href="#links"
              onClick={(ev) => ev.preventDefault()}
            >
              <span>Something else here</span>
            </DropdownItem>
          </li>
        </ul>
      </DropdownMenu>
    </Dropdown>
  )
}`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5"> Example 1 - Option Style</BlockTitle>
              <p>
                Use <code>.link-list-opt</code> className on <code>ul</code> to get styles shown in card below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <h6 className="title mb-3">With Border</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Selected / Active
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-opt">
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>List Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>Another Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>More Action</span>
    </a>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewCard>
            <h6 className="title mb-3">Without Border</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Selected / Active
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-opt no-bdr">
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>List Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>Another Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>More Action</span>
    </a>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewCard>
            <h6 className="title mb-3">With Seperator</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Selected / Active
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-opt no-bdr">
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>List Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>Another Action</span>
    </a>
  </li>
  <li className="divider"></li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>More Action</span>
    </a>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Classname Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.active</code>
                </td>
                <td>
                  Use <code>{"active"}</code> as <code>a</code> tag for active styles
                </td>
              </tr>
              <tr>
                <td>
                  <code>.no-bdr</code>
                </td>
                <td>
                  <span>
                    Use <code>{`no-bdr`}</code> as a className with <code>ul</code> for no border style
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.divider</code>
                </td>
                <td>
                  <span>
                    Use <code>divider</code> with <code>li</code> tag for a divider
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5"> Example 2 - Plain Style</BlockTitle>
              <p>
                Use <code>.link-list-opt</code> className on <code>ul</code> to get styles shown in card below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <h6 className="title mb-3">With Border</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Compact / Small
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain sm">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-plain">
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>List Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>Another Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>More Action</span>
    </a>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewCard>
            <h6 className="title mb-3">Without Border</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Compact / Small
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain no-bdr sm">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-plain no-bdr">
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>List Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>Another Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>More Action</span>
    </a>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewCard>
            <h6 className="title mb-3">With Seperator</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>List Action</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Another Action</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>More Action</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain no-bdr">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Compact / Small
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-plain no-bdr sm">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="setting"></Icon>
                          <span>Action Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notify"></Icon>
                          <span>Push Notification</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="activity-alt"></Icon>
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="setting"></Icon>
                              <span>Action Settings</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notify"></Icon>
                              <span>Push Notification</span>
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="activity-alt"></Icon>
                              <span>Login Activity</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-plain no-bdr">
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>List Action</span>
    </a>
  </li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>Another Action</span>
    </a>
  </li>
  <li className="divider"></li>
  <li>
    <a href="#links" onClick={(ev) => ev.preventDefault()}>
      <span>More Action</span>
    </a>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewCard>
            <h6 className="title mb-3">Multiple Column</h6>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  3 Column
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu className="dropdown-menu-md">
                    <ul className="link-list-plain li-col3x text-center">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Jan
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Feb
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Mar
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Apr
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          May
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Jun
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Jul
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Aug
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Sep
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Oct
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Nov
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Dec
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  4 Column
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu className="dropdown-menu-md">
                    <ul className="link-list-plain li-col4x text-center">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Jan
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Feb
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Mar
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Apr
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          May
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Jun
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Jul
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Aug
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Sep
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Oct
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Nov
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Dec
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain li-col4x text-center">
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Jan
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Feb
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Mar
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Apr
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              May
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Jun
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Jul
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Aug
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Sep
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Oct
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Nov
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Dec
                            </a>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-plain li-col4x text-center">
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Jan
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Feb
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Mar
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Apr
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              May
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Jun
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Jul
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Aug
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Sep
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Oct
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Nov
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Dec
                            </a>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<ul className="link-list-plain li-col4x text-center">
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Jan</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Feb</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Mar</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Apr</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>May</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Jun</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Jul</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Aug</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Sep</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Oct</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Nov</a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}>Dec</a></li>
</ul>`}
          </CodeBlock>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Classname Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.active</code>
                </td>
                <td>
                  Use <code>{"active"}</code> as <code>a</code> tag for active styles
                </td>
              </tr>
              <tr>
                <td>
                  <code>.no-bdr</code>
                </td>
                <td>
                  <span>
                    Use <code>{`no-bdr`}</code> as a className with <code>ul</code> for no border style
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.li-{`{col}`}</code>
                </td>
                <td>
                  <span>
                    Use <code>{`{col}`} </code> as <code>col2x, col3x, col4x </code> with{" "}
                    <code>ul.link-list-plain</code> list for column based list.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.divider</code>
                </td>
                <td>
                  <span>
                    Use <code>divider</code> with <code>li</code> tag for a divider
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5"> Example 3 - Tidy Style</BlockTitle>
              <p>
                Use <code>.link-tidy</code> className on <code>ul</code> to get styles shown in card below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-tidy">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" defaultChecked={true} id="check-bl" />
                          <label className="custom-control-label" htmlFor="check-bl">
                            Balance
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check-ph" />
                          <label className="custom-control-label" htmlFor="check-ph">
                            Phone
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            defaultChecked={true}
                            name="radio-list"
                            id="radio-bl"
                          />
                          <label className="custom-control-label" htmlFor="radio-bl">
                            Balance
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-radio">
                          <input type="radio" className="custom-control-input" name="radio-list" id="radio-ph" />
                          <label className="custom-control-label" htmlFor="radio-ph">
                            Phone
                          </label>
                        </div>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Without Border
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-tidy no-bdr">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked={true}
                            id="check-bl-wb"
                          />
                          <label className="custom-control-label" htmlFor="check-bl-wb">
                            Balance
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check-ph-wb" />
                          <label className="custom-control-label" htmlFor="check-ph-wb">
                            Phone
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            defaultChecked={true}
                            name="radio-list"
                            id="radio-bl-wb"
                          />
                          <label className="custom-control-label" htmlFor="radio-bl-wb">
                            Balance
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-radio">
                          <input type="radio" className="custom-control-input" name="radio-list" id="radio-ph-wb" />
                          <label className="custom-control-label" htmlFor="radio-ph-wb">
                            Phone
                          </label>
                        </div>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Compact / Small
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-tidy sm">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked={true}
                            id="check-bl-cm"
                          />
                          <label className="custom-control-label" htmlFor="check-bl-cm">
                            Balance
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check-ph-cm" />
                          <label className="custom-control-label" htmlFor="check-ph-cm">
                            Phone
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            defaultChecked={true}
                            name="radio-list"
                            id="radio-bl-cm"
                          />
                          <label className="custom-control-label" htmlFor="radio-bl-cm">
                            Balance
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-radio">
                          <input type="radio" className="custom-control-input" name="radio-list" id="radio-ph-cm" />
                          <label className="custom-control-label" htmlFor="radio-ph-cm">
                            Phone
                          </label>
                        </div>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-tidy">
                          <li>
                            <div className="custom-control custom-control-sm custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                defaultChecked={true}
                                id="check-bl-pr"
                              />
                              <label className="custom-control-label" htmlFor="check-bl-pr">
                                Balance
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-control-sm custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="check-ph-pr" />
                              <label className="custom-control-label" htmlFor="check-ph-pr">
                                Phone
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-control-sm custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                defaultChecked={true}
                                name="radio-list"
                                id="radio-bl-pr"
                              />
                              <label className="custom-control-label" htmlFor="radio-bl-pr">
                                Balance
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-control-sm custom-radio">
                              <input type="radio" className="custom-control-input" name="radio-list" id="radio-ph-pr" />
                              <label className="custom-control-label" htmlFor="radio-ph-pr">
                                Phone
                              </label>
                            </div>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-tidy">
                          <li>
                            <div className="custom-control custom-control-sm custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                defaultChecked={true}
                                id="check-bl-dd"
                              />
                              <label className="custom-control-label" htmlFor="check-bl-dd">
                                Balance
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-control-sm custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="check-ph-dd" />
                              <label className="custom-control-label" htmlFor="check-ph-dd">
                                Phone
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-control-sm custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                defaultChecked={true}
                                name="radio-list"
                                id="radio-bl-dd"
                              />
                              <label className="custom-control-label" htmlFor="radio-bl-dd">
                                Balance
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-control-sm custom-radio">
                              <input type="radio" className="custom-control-input" name="radio-list" id="radio-ph-dd" />
                              <label className="custom-control-label" htmlFor="radio-ph-dd">
                                Phone
                              </label>
                            </div>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-tidy">                      
  <li>
    <div className="custom-control custom-control-sm custom-checkbox">
        <input type="checkbox" className="custom-control-input" defaultChecked={true} id="check-bl"/>
        <label className="custom-control-label" htmlFor="check-bl">Balance</label>
    </div>
  </li>
  <li>
    <div className="custom-control custom-control-sm custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check-ph"/>
        <label className="custom-control-label" htmlFor="check-ph">Phone</label>
    </div>
  </li>
  <li>
    <div className="custom-control custom-control-sm custom-radio">
        <input type="radio" className="custom-control-input" defaultChecked={true} name="radio-list" id="radio-bl"/>
        <label className="custom-control-label" htmlFor="radio-bl">Balance</label>
    </div>
  </li>
  <li>
    <div className="custom-control custom-control-sm custom-radio">
        <input type="radio" className="custom-control-input" name="radio-list" id="radio-ph"/>
        <label className="custom-control-label" htmlFor="radio-ph">Phone</label>
    </div>
  </li>
</ul>`}
          </CodeBlock>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Classname Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.no-bdr</code>
                </td>
                <td>
                  <span>
                    Use <code>{`no-bdr`}</code> as a className with <code>ul</code> for no border style
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.sm</code>
                </td>
                <td>
                  <span>
                    Use <code>sm</code> with <code>ul</code> tag for a compact size
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5"> Example 4 - Menu Style</BlockTitle>
              <p>
                Use <code>.link-list-menu</code> className on <code>ul</code> to get styles shown in card below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-menu">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Account Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>My Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Sign out</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Active Link
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-menu no-bdr">
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Account Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>My Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Sign out</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Divider
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-list-menu sm">
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Account Settings</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>My Account</span>
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <span>Sign out</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-menu">
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <span>Account Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <span>My Account</span>
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <span>Sign out</span>
                            </a>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-list-menu">
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <span>Account Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <span>My Account</span>
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <span>Sign out</span>
                            </a>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="link-list-menu">                      
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}><span>Account Settings</span></a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}><span>My Account</span></a></li>
  <li><a href="#links" onClick={(ev) => ev.preventDefault()}><span>Sign out</span></a></li>
</ul>`}
          </CodeBlock>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Classname Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.active</code>
                </td>
                <td>
                  <span>
                    Use <code>active</code> as a className with <code>li</code> for active style
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.divider</code>
                </td>
                <td>
                  <span>
                    Use <code>divider</code> with blank <code>li</code> tag for a divider
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5"> Example 5 - with Heading</BlockTitle>
              <p>
                Use <code>.link-check</code> className on <code>ul</code> to get styles shown in card below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Default
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-check">
                      <li>
                        <span>Quick Insert</span>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Hello Team!
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Thank You!
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          Most Welcome!
                        </a>
                      </li>
                    </ul>
                    <ul className="link-check">
                      <li>
                        <span>Manage</span>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="file-plus"></Icon>
                          <span>Save as Template</span>
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="notes-alt"></Icon>
                          <span>Manage Template</span>
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Selected
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-check">
                      <li>
                        <span>Show</span>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          10 Items
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          20 Items
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          50 Items
                        </a>
                      </li>
                    </ul>
                    <ul className="link-check">
                      <li>
                        <span>Order By</span>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          DESC
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          ASC
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  With Icon
                </OverlineTitle>
                <div className="dropdown-preview">
                  <DropdownMenu>
                    <ul className="link-check">
                      <li>
                        <span>Show</span>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          10 Items
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          20 Items
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          50 Items
                        </a>
                      </li>
                    </ul>
                    <ul className="link-check">
                      <li>
                        <span>Order By</span>
                      </li>
                      <li className="active">
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          {" "}
                          <Icon name="arrow-long-up"></Icon>DESC
                        </a>
                      </li>
                      <li>
                        <a href="#links" onClick={(ev) => ev.preventDefault()}>
                          <Icon name="arrow-long-down"></Icon>ASC
                        </a>
                      </li>
                    </ul>
                  </DropdownMenu>
                </div>
              </li>
              <li className="preview-item">
                <OverlineTitle tag="span" className="preview-title">
                  Preview
                </OverlineTitle>
                <ul className="d-flex g-3">
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-light">Click Here</DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-check">
                          <li>
                            <span>Quick Insert</span>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Hello Team!
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Thank You!
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              Most Welcome!
                            </a>
                          </li>
                        </ul>
                        <ul className="link-check">
                          <li>
                            <span>Manage</span>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="file-plus"></Icon>
                              <span>Save as Template</span>
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="notes-alt"></Icon>
                              <span>Manage Template</span>
                            </a>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li>
                    <UncontrolledDropdown>
                      <DropdownToggle className="dropdown-toggle btn btn-icon btn-light">
                        <Icon name="more-h"></Icon>
                      </DropdownToggle>
                      <DropdownMenu>
                        <ul className="link-check">
                          <li>
                            <span>Show</span>
                          </li>
                          <li className="active">
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              10 Items
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              20 Items
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              50 Items
                            </a>
                          </li>
                        </ul>
                        <ul className="link-check">
                          <li>
                            <span>Order By</span>
                          </li>
                          <li className="active">
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              DESC
                            </a>
                          </li>
                          <li>
                            <a href="#links" onClick={(ev) => ev.preventDefault()}>
                              ASC
                            </a>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<DropdownMenu>
  <ul className="link-check">
    <li><span>Show</span></li>
    <li className="active"><a href="#links" onClick={(ev) => ev.preventDefault()}>10 Items</a></li>
    <li><a href="#links" onClick={(ev) => ev.preventDefault()}>20 Items</a></li>
    <li><a href="#links" onClick={(ev) => ev.preventDefault()}>50 Items</a></li>
  </ul>
  <ul className="link-check">
    <li><span>Order By</span></li>
    <li className="active"><a href="#links" onClick={(ev) => ev.preventDefault()}>DESC</a></li>
    <li><a href="#links" onClick={(ev) => ev.preventDefault()}>ASC</a></li>
  </ul>
</DropdownMenu>`}
          </CodeBlock>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Classname Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.active</code>
                </td>
                <td>
                  <span>
                    Use <code>active</code> as a className with <code>li</code> for active style
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.divider</code>
                </td>
                <td>
                  <span>
                    Use <code>divider</code> with blank <code>li</code> tag for a divider
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default DropdownsPage;
