import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Badge } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";
import { OverlineTitle } from "../../components/text/Text";

const BadgesPage = () => {
  return (
    <React.Fragment>
      <Head title="Badges" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Badges
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Documentation and examples for badges, our small count and labeling component. To use it, import it such
                as <code>import {`{Badge}`} from "reactstrap"</code>. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/badge"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Example with Variations</BlockTitle>
              <p>Add any of the below mentioned modifier props to change the appearance of a badge.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title">
              Default Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge color="primary">Primary</Badge>
              </li>
              <li className="preview-item">
                <Badge color="secondary">Secondary</Badge>
              </li>
              <li className="preview-item">
                <Badge color="success">Success</Badge>
              </li>
              <li className="preview-item">
                <Badge color="danger">Danger</Badge>
              </li>
              <li className="preview-item">
                <Badge color="warning">Warning</Badge>
              </li>
              <li className="preview-item">
                <Badge color="info">Info</Badge>
              </li>
              <li className="preview-item">
                <Badge color="dark">Dark</Badge>
              </li>
              <li className="preview-item">
                <Badge color="gray">Gray</Badge>
              </li>
              <li className="preview-item">
                <Badge color="light">Light</Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Pill Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge pill color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="light">
                  Light
                </Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Outline Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge color="outline-primary">Primary</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-secondary">Secondary</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-success">Success</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-danger">Danger</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-warning">Warning</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-info">Info</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-dark">Dark</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-gray">Gray</Badge>
              </li>
              <li className="preview-item">
                <Badge color="outline-light">Light</Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Outline Pill Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge pill color="outline-primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="outline-light">
                  Light
                </Badge>
              </li>
            </ul>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">Props Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>color={"{state}"}</code>
                </td>
                <td>
                  Use <code>{"{state}"}</code> as{" "}
                  <code>primary, secondary, success, info, warning, danger, dark, gray, light</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>color={"`outline-{state}`"}</code>
                </td>
                <td>
                  Same as above <code>{"{state}"}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>pill</code>
                </td>
                <td>
                  <span>
                    Use with <code>Badge</code> component to get rounded badge style.
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">&lt;Badge color=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;</CodeBlock>
          <CodeBlock language="jsx">&lt;Badge pill color=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Dot Style</BlockTitle>
              <p>
                Use the <code>.badge-dot</code> modifier className to make dot style badges.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-dot" color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dot" color="light">
                  Light
                </Badge>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Badge className="badge-dot" color="primary">Primary</Badge>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Dim/Pale Style</BlockTitle>
              <p>
                Use the <code>.badge-dim</code> modifier className to make soft light / pale color badges.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title">
              Pale Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-dim" color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="light">
                  Light
                </Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Pale Pill Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-dim" pill color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="light">
                  Light
                </Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Pale Bordered Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" color="outline-light">
                  Light
                </Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Plae Bordered Pill Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-secondary">
                  Secondary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-success">
                  Success
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-danger">
                  Danger
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-warning">
                  Warning
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-info">
                  Info
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-dark">
                  Dark
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-gray">
                  Gray
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-dim" pill color="outline-light">
                  Light
                </Badge>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Badge className="badge-dot" color="primary">Primary</Badge>`}</CodeBlock>
          <CodeBlock language="jsx">{`<Badge className="badge-dot" pill color="primary">Primary</Badge>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example with Variations</BlockTitle>
              <p>Add any of the below mentioned modifier classNames to change the appearance of a badge.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title">
              Default Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-xl" color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-lg" color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-md" color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-sm" color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge color="primary">Primary</Badge>
              </li>
            </ul>
            <OverlineTitle tag="span" className="preview-title mt-4">
              Pill Style
            </OverlineTitle>
            <ul className="preview-list">
              <li className="preview-item">
                <Badge className="badge-xl" pill color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-lg" pill color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-md" pill color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge className="badge-sm" pill color="primary">
                  Primary
                </Badge>
              </li>
              <li className="preview-item">
                <Badge pill color="primary">
                  Primary
                </Badge>
              </li>
            </ul>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-200px">ClassName Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.badge-{"{size}"}</code>
                </td>
                <td>
                  Use <code>{"{size}"}</code> as <code>sm, md, lg, xl</code>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<Badge className="badge-sm" pill color="primary">Primary</Badge>`}</CodeBlock>
          <CodeBlock language="jsx">{`<Badge className="badge-lg" pill color="primary">Primary</Badge>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default BadgesPage;
