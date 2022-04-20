import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import SlideA from "../../images/slides/slide-a.jpg";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Button,
} from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const CardsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Cards" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Cards
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Cards provide a flexible and extensible content container with multiple variants and options. To use it,
                import it such as{" "}
                <code>
                  import{" "}
                  {`{Card, CardHeader, CardFooter, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink}`}{" "}
                  from "reactstrap"
                </code>
                . Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/card"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h4">Basic Examples</BlockTitle>
              <p>
                Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
                control and customization.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="4">
                <Card className="card-bordered">
                  <CardImg top src={SlideA} alt="" />
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Card with stretched link</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card"s content.
                    </CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered">   
  <CardImg top src="../../images/slides/slide-a.jpg" alt="" />
  <CardBody className="card-inner">
    <CardTitle tag="h5">Card with stretched link</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBody>
</Card>`}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Titles, text, and links</BlockTitle>
              <p>
                Card titles are used by adding <code>CardTitle</code> as a <code className="code-tag">child props</code>{" "}
                inside <code>Card </code> <br />
                In the same way, links are added and placed next to each other by adding <code>CardLink</code> as a{" "}
                <code className="code-tag">child props</code> inside <code>Card</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="4">
                <Card className="card-bordered">
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 ff-base">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card"s content.
                    </CardText>
                    <CardLink
                      href="#link"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      Card Link
                    </CardLink>
                    <CardLink
                      href="#link"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      Another Link
                    </CardLink>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` <Card className="card-bordered">
  <CardBody className="card-inner">
    <CardTitle tag="h5">Card title</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 ff-base">
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </CardText>
    <CardLink href="#">Card Link</CardLink>
    <CardLink href="#">Another Link</CardLink>
  </CardBody>
</Card>`}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Header and footer</BlockTitle>
              <p>Add an optional header and/or footer within a card.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row>
              <Col lg="4">
                <Card className="card-bordered">
                  <CardHeader className="border-bottom">Featured Title</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Special title treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                  <CardFooter className="border-top">2 days ago</CardFooter>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-bordered">
                  <CardHeader className="border-bottom">Featured Title</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Special title treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered">
  <CardHeader className="border-bottom">
    Featured Title
  </CardHeader>
  <CardBody className="card-inner">
    <CardTitle tag="h5">Special title treatment</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional
      content.
    </CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBody>
  <CardFooter className="border-top">2 days ago</CardFooter>
</Card>`}
          </CodeBlock>
        </Block>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Card Styles</BlockTitle>
              <p>Cards include various options for customizing their backgrounds, borders, and color.</p>
              <p>
                Use <a href="/utlities/color">colors utilities</a> to change the appearance of a card.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col sm="6">
                <Card className="card-bordered" inverse color="primary">
                  <CardHeader>Header</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Primary card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card"s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="card-bordered" inverse color="secondary">
                  <CardHeader>Header</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Secondary card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card"s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="card-bordered" inverse color="gray">
                  <CardHeader>Header</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Dark card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card"s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="card-bordered" color="light">
                  <CardHeader>Header</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Light card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card"s content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Card className="card-bordered" inverse color="primary">
  <CardHeader>Header</CardHeader>
  <CardBody className="card-inner">              
    <CardTitle tag="h5">Primary card title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make
      up the bulk of the card's content.
    </CardText>
  </CardBody>
</Card>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CardsPage;
