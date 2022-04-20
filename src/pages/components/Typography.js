import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Link } from "react-router-dom";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewTable,
  CodeBlock,
  PreviewCard,
} from "../../components/Component";
import { Row, Col } from "reactstrap";

const Typography = () => {
  return (
    <React.Fragment>
      <Head title="Typography"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Typography
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                These examples for typography, including global settings, headings, body text, lists, and more. When
                more control is needed, check out the{" "}
                <Link to={`${process.env.PUBLIC_URL}/components/util-text`}>textual utility classes.</Link>
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Headings</BlockTitle>
              <p>
                All JSX headings, <code className="code-tag">{`<h1>`}</code> through{" "}
                <code className="code-tag">{`<h6>`}</code>, are available
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">Heading</th>
                <th className="overline-title">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>&lt;h1&gt;&lt;/h1&gt;</code>
                </td>
                <td>
                  <span className="h1">h1. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;h2&gt;&lt;/h2&gt;</code>
                </td>
                <td>
                  <span className="h2">h2. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;h3&gt;&lt;/h3&gt;</code>
                </td>
                <td>
                  <span className="h3">h3. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;h4&gt;&lt;/h4&gt;</code>
                </td>
                <td>
                  <span className="h4">h4. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;h5&gt;&lt;/h5&gt;</code>
                </td>
                <td>
                  <span className="h5">h5. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;h6&gt;&lt;/h6&gt;</code>
                </td>
                <td>
                  <span className="h6">h6. Bootstrap heading</span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">ClassName Reference</th>
                <th className="overline-title ">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>&lt;h[num]&gt;</code>, <code>.h[num]</code>
                </td>
                <td>1 | 2 | 3 | 4 | 5 | 6</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">
            {`<h4 className="title"> ... </h4> <span className="title h4"> ... </span>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Customize headings</BlockTitle>
              <p>
                Use the <Link to={`${process.env.PUBLIC_URL}/components/util-text`}>text utitlity classes</Link> to
                customize the heading text further.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <h3 className="ff-base fw-medium">
              {" "}
              Fancy display heading <small className="text-soft">With faded secondary text</small>
            </h3>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<h3 className="ff-base fw-medium">  Fancy display heading  <small className="text-soft">With faded secondary text</small></h3>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Inline Element & Text Style</BlockTitle>
              <p>
                Change text alignment, transform, style, weight, and color with our{" "}
                <Link to={`${process.env.PUBLIC_URL}/components/util-text`}>text utitlity classes</Link> and{" "}
                <Link to={`${process.env.PUBLIC_URL}/components/util-colors`}>color utilities</Link>.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-250px">Code Reference</th>
                <th className="overline-title">Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>&lt;mark&gt;</code>
                </td>
                <td>
                  <p>
                    You can use the mark tag to <mark>highlight</mark> text.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;del&gt;</code>
                </td>
                <td>
                  <p>
                    <del>This line of text is meant to be treated as deleted text.</del>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;s&gt;</code>
                </td>
                <td>
                  <p>
                    <s>This line of text is meant to be treated as no longer accurate.</s>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;ins&gt;</code>
                </td>
                <td>
                  <p>
                    <ins>This line of text is meant to be treated as an addition to the document.</ins>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;u&gt;</code>
                </td>
                <td>
                  <p>
                    <u>This line of text will render as underlined</u>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;small&gt;</code>
                </td>
                <td>
                  <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;strong&gt;</code>
                </td>
                <td>
                  <p>
                    <strong>This line rendered as bold text.</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;sup&gt;</code>
                </td>
                <td>
                  <p>
                    This <sup>text</sup> rendered as superscript
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;sub&gt;</code>
                </td>
                <td>
                  <p>
                    This <sub>text</sub> rendered as subscript
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>&lt;abbr&gt;</code>
                </td>
                <td>
                  <p>
                    Abbreviations have a <abbr title="hello">default underline</abbr> and gain a help cursor
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.lead</code>
                </td>
                <td>
                  <p className="lead">This line of text is meant to lead text to stand out.</p>
                </td>
              </tr>
            </tbody>
          </PreviewTable>

          <CodeBlock language="jsx">
            {`<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p className="lead">This line of text is meant to lead text to stand out.</p>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Blockquotes</BlockTitle>
              <p>
                For quoting blocks of content from another source within your document. Use .blockquote in{" "}
                {`<blockquote>`}.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </PreviewCard>
          <PreviewCard>
            <blockquote className="blockquote text-left">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<blockquote className="blockquote text-center">  
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>  
  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Lists - Style</BlockTitle>
              <p>
                Use <code>.list</code> class with <code className="code-tag">{`<ul>`}</code> element to style basic
                listing. Also your can use <code>.list-checked</code> with <code>.list</code> class for different style
                as below.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col lg="4">
                <ul className="list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>
                    Nulla volutpat aliquam velit{" "}
                    <ul>
                      <li>Phasellus iaculis nequeep</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </Col>
              <Col lg="4">
                <ul className="list list-checked">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>
                    Nulla volutpat aliquam velit{" "}
                    <ul>
                      <li>Phasellus iaculis nequeep</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </Col>
              <Col lg="4"></Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<ul className="list list-checked">  
  <li>Lorem ipsum dolor sit amet</li>    
  <ul>      
    <li>Phasellus iaculis nequeep</li>    
  </ul>  
  <li>Eget porttitor lorem</li>
</ul>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Lists - UnStyle</BlockTitle>
              <p>
                Use <code>.list</code> class with <code className="code-tag">{`<ul>`}</code> element to unstyle.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>
                Nulla volutpat aliquam velit{" "}
                <ul>
                  <li>Phasellus iaculis nequeep</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<ul className="list-unstyled">  
  <li>Lorem ipsum dolor sit amet</li>    
  <ul>      
    <li>Phasellus iaculis nequeep</li>    
  </ul>  
  <li>Eget porttitor lorem</li>
</ul>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Lists - Inline</BlockTitle>
              <p>
                Remove a list’s bullets and apply some light <code className="code-fnc">margin</code> with a combination
                of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<ul className="list-inline">
  <li className="list-inline-item">Lorem ipsum</li>
  <li className="list-inline-item">Phasellus iaculis</li>
  <li className="list-inline-item">Nulla volutpat</li>
</ul>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Description list alignment</BlockTitle>
              <p>
                Align terms and descriptions horizontally by using the{" "}
                <a
                  href={"https://deploy-preview-2356--reactstrap.netlify.app/components/layout"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reactstrap's
                </a>{" "}
                predefined components.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col sm="3" className="fw-bold">
                Description lists
              </Col>
              <Col sm="9">A description list is perfect for defining terms.</Col>
              <Col sm="3" className="fw-bold">
                Euismod
              </Col>
              <Col sm="9">
                <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>{" "}
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </Col>
              <Col sm="3" className="fw-bold">
                Malesuada porta
              </Col>
              <Col sm="9">Etiam porta sem malesuada magna mollis euismod.</Col>
              <Col sm="3" className="fw-bold text-truncate">
                Truncated term is truncated
              </Col>
              <Col sm="9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus.
              </Col>
              <Col sm="3" className="fw-bold">
                Nesting
              </Col>
              <Col sm="9">
                <Row>
                  <Col sm="4" className="fw-bold">
                    Nested definition list
                  </Col>
                  <Col sm="8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</Col>
                </Row>
              </Col>
            </Row>
          </PreviewCard>

          <CodeBlock language="jsx">
            {`<Row>
  <Col sm="3" className="fw-bold">Description lists</Col>
  <Col sm="9">A description list is perfect for defining terms.</Col>
  <Col sm="3" className="fw-bold">Euismod</Col>
  <Col sm="9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>{" "}
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </Col>
  <Col sm="3" className="fw-bold">Malesuada porta</Col>
  <Col sm="9">Etiam porta sem malesuada magna mollis euismod.</Col>
  <Col sm="3" className="fw-bold text-truncate">
    Truncated term is truncated
  </Col>
  <Col sm="9">
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
    amet risus.
  </Col>
  <Col sm="3" className="fw-bold">Nesting</Col>
  <Col sm="9">
    <Row>
      <Col sm="4" className="fw-bold">A description list is perfect for defining terms.</Col>
      <Col sm="8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</Col>
    </Row>
  </Col>
</Row>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Typography;
