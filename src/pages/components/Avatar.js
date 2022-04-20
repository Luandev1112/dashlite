import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import User from "../../images/avatar/b-sm.jpg";
import User2 from "../../images/avatar/c-sm.jpg";
import {
  UserAvatar,
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  PreviewTable,
  CodeBlock,
  OverlineTitle,
  UserGroup,
} from "../../components/Component";
import { Col, Row } from "reactstrap";

const Avatar = () => {
  return (
    <React.Fragment>
      <Head title="Avatar"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Avatar
            </BlockTitle>
            <BlockDes>
              <p className="lead">Documentation and Example of User Avatar</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example with Variations</BlockTitle>
              <p>
                Add any of the below props to the <code>UserAvatar</code> components to change the appearance of a
                avatar.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col md="3">
                <OverlineTitle className="preview-title">Default Style's</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar theme="primary" text="AB"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="success" icon="user-alt"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="primary" image={User}></UserAvatar>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <OverlineTitle className="preview-title">Status Style's</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar theme="primary" text="AB">
                      <div className="status dot dot-lg dot-success"></div>
                    </UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="success" icon="user-alt">
                      <div className="status dot dot-lg dot-gray"></div>
                    </UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="primary" image={User}>
                      <div className="status dot dot-lg dot-warning"></div>
                    </UserAvatar>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <OverlineTitle className="preview-title">Square Style's</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar theme="primary" text="AB" className="sq"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="success" icon="user-alt" className="sq"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="primary" image={User} className="sq"></UserAvatar>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <OverlineTitle className="preview-title">Square Style's</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar theme="primary" text="AB" className="sq">
                      <div className="status dot dot-lg dot-success"></div>
                    </UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="success" icon="user-alt" className="sq">
                      <div className="status dot dot-lg dot-gray"></div>
                    </UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="primary" image={User} className="sq">
                      <div className="status dot dot-lg dot-warning"></div>
                    </UserAvatar>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <OverlineTitle className="preview-title">Group Style's</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserGroup>
                      <UserAvatar theme="primary" text="AB"></UserAvatar>
                      <UserAvatar theme="success" text="NL"></UserAvatar>
                    </UserGroup>
                  </li>
                  <li className="preview-item">
                    <UserGroup>
                      <UserAvatar theme="primary" text="AB"></UserAvatar>
                      <UserAvatar theme="primary" image={User}></UserAvatar>
                    </UserGroup>
                  </li>
                  <li className="preview-item">
                    <UserGroup>
                      <UserAvatar theme="primary" image={User2}></UserAvatar>
                      <UserAvatar theme="primary" image={User}></UserAvatar>
                    </UserGroup>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <OverlineTitle className="preview-title">Group Style's v2</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <div className="user-avatar user-avatar-multiple">
                      <UserAvatar theme="primary" text="A"></UserAvatar>
                      <UserAvatar theme="success" text="N"></UserAvatar>
                    </div>
                  </li>
                  <li className="preview-item">
                    <div className="user-avatar user-avatar-multiple">
                      <UserAvatar theme="primary" text="AB"></UserAvatar>
                      <UserAvatar theme="primary" image={User}></UserAvatar>
                    </div>
                  </li>
                  <li className="preview-item">
                    <div className="user-avatar user-avatar-multiple">
                      <UserAvatar theme="primary" image={User2}></UserAvatar>
                      <UserAvatar theme="primary" image={User}></UserAvatar>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {` import {UserAvatar} from "../../components/Components"
  
  // Default Avatar with text 
  <UserAvatar theme="primary" text="AB"></UserAvatar>

  // Default Avatar with icon
  <UserAvatar theme="primary" icon="user-alt"></UserAvatar>

  // Default Avatar with image
  <UserAvatar theme="primary" image={IMAGE_URL}></UserAvatar>`}
          </CodeBlock>

          <CodeBlock language="jsx">
            {` import {UserAvatar} from "../../components/Components"
  
  // Default Avatar with status 
  <UserAvatar theme="primary" text="AB">
    <div className="status dot dot-lg dot-success"></div>  
  </UserAvatar>

  // Default Avatar with square style
  <UserAvatar theme="primary" icon="user-alt" className="sq"></UserAvatar>`}
          </CodeBlock>
          <CodeBlock language="jsx">
            {` import {UserAvatar, UserGroup} from "../../components/Components"
  
  // Default Avatar Grouped
  <UserGroup>
    <UserAvatar theme="primary" text="AB"></UserAvatar>
    <UserAvatar theme="success" text="NK"></UserAvatar>
  </UserGroup>


  // Default Avatar grouped v2
 <div className="user-avatar user-avatar-multiple">
    <UserAvatar theme="primary" text="AB"></UserAvatar>
    <UserAvatar theme="primary" image={User}></UserAvatar>
  </div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example with Color Variations</BlockTitle>
              <p>
                Add any of the below colors to <code>theme</code> props to the <code>UserAvatar</code> component to
                change the appearence of a avatar.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col className="col-12">
                <OverlineTitle>Avatar Fill Color</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar theme="primary" text="AB"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="secondary" text="NL"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="warning" text="SW"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="danger" text="GO"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="success" text="PS"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="info" text="DM"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="azure" text="CA"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="blue" text="SM"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="pink" text="JC"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="indigo" text="VA"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="dark" text="EH"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="gray" text="HT"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="orange" text="KT"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="teal" text="AF"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="purple" text="HW"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="light" text="KR"></UserAvatar>
                  </li>
                </ul>
              </Col>
              <Col className="col-12">
                <OverlineTitle>Avatar Dim Color</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar theme="primary-dim" text="AB"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="secondary-dim" text="NL"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="warning-dim" text="SW"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="danger-dim" text="GO"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="success-dim" text="PS"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="info-dim" text="DM"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="azure-dim" text="CA"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="blue-dim" text="SM"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="pink-dim" text="JC"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="indigo-dim" text="VA"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="dark-dim" text="EH"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="gray-dim" text="HT"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="orange-dim" text="KT"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="teal-dim" text="AF"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="purple-dim" text="HW"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar theme="lighter" text="KR"></UserAvatar>
                  </li>
                </ul>
              </Col>
            </Row>
          </PreviewCard>
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
                  <code>theme={`"color"`}</code>
                </td>
                <td>
                  Use <code>{`"color"`}</code> as{" "}
                  <code>
                    primary, secondary, warning, danger, success, info, azure, blue, pink, indigo, dark, gray, orange,
                    teal, purple, lighter
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>theme={`"color-dim"`}</code>
                </td>
                <td>
                  Use <code>{`"color"`}</code> as{" "}
                  <code>
                    primary, secondary, warning, danger, success, info, azure, blue, pink, indigo, dark, gray, orange,
                    teal, purple, light
                  </code>{" "}
                  <br /> Use <code>light</code> without <code>-dim</code> postfix
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example with Size</BlockTitle>
              <p>
                Add any of the below sizes to <code>className</code> props to the <code>UserAvatar</code> component to
                change the appearence of a avatar.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col md="6">
                <OverlineTitle>Rounded Avatars</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary" className="xl"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary" className="lg">
                      <div className="status dot dot-lg dot-success"></div>
                    </UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar image={User} color="primary" className="md"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary" className="sm"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="A" color="primary" className="xs"></UserAvatar>
                  </li>
                </ul>
              </Col>
              <Col md="6">
                <OverlineTitle>Squared Avatars</OverlineTitle>
                <ul className="preview-list g-2">
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary" className="xl sq"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary" className="lg sq">
                      <div className="status dot dot-lg dot-success"></div>
                    </UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar image={User} color="primary" className="md sq"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="AB" color="primary" className="sm sq"></UserAvatar>
                  </li>
                  <li className="preview-item">
                    <UserAvatar text="A" color="primary" className="xs sq"></UserAvatar>
                  </li>
                </ul>
              </Col>
            </Row>
          </PreviewCard>
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
                  <code>className="size"</code>
                </td>
                <td>
                  Use <code>{"size"}</code> as <code>xl, lg, md, sm, xs</code>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example with Use Case</BlockTitle>
              <p>Lets take a look at some real use case for avatar.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-4">
              <Col md="4" sm="6">
                <OverlineTitle>User Card 1</OverlineTitle>
                <div className="user-toggle">
                  <UserAvatar icon="user-alt" theme="primary"></UserAvatar>
                  <div className="user-info">
                    <div className="user-status text-primary">Administrator</div>
                    <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6">
                <OverlineTitle>User Card 2</OverlineTitle>
                <div className="user-card">
                  <UserAvatar image={User2} theme="primary"></UserAvatar>
                  <div className="user-info">
                    <span className="lead-text">Keith Jensen</span>
                    <span className="sub-text">keith@softnio.com</span>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="6">
                <OverlineTitle>User Card 2</OverlineTitle>
                <div className="user-card">
                  <UserAvatar text="AB" theme="purple" className="sm"></UserAvatar>
                  <div className="user-name">
                    <span className="tb-lead">Abu Bin Ishtiyak</span>
                  </div>
                </div>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` // Card 1
  <div className="user-toggle">
    <UserAvatar icon="user-alt" theme="primary"></UserAvatar>
    <div className="user-info">
      <div className="user-status text-primary">Administrator</div>
      <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
    </div>
  </div>`}
          </CodeBlock>
          <CodeBlock language="jsx">
            {` // Card 2
    <div className="user-card">
      <UserAvatar image={User2} theme="primary"></UserAvatar>
      <div className="user-info">
        <span className="lead-text">Keith Jensen</span>
        <span className="sub-text">keith@softnio.com</span>
      </div>
    </div>
            `}
          </CodeBlock>
          <CodeBlock language="jsx">
            {` // Card 3 
    <div className="user-card">
      <UserAvatar text="AB" theme="purple" className="sm"></UserAvatar>
      <div className="user-name">
        <span className="tb-lead">Abu Bin Ishtiyak</span>
      </div>
    </div>
            `}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Avatar;
