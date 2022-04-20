import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Progress } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const ProgressPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Progress" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Progress
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples for using custom progress bars featuring support for stacked bars, animated backgrounds, and
                text labels. To use it, import it such as <code>import {`{Progress}`} from "reactstrap"</code>. Visit
                the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/progress"} target="_blank" rel="noreferrer">
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
              <BlockTitle tag="h5">Basic Examples</BlockTitle>
              <p>
                Use the <code>value</code> props in <code>Progress</code> element to indicate progress status.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress value="5" />
              </div>
              <div className="fake-class">
                <Progress value="25" />
              </div>
              <div className="fake-class">
                <Progress value="50" />
              </div>
              <div className="fake-class">
                <Progress value="75" />
              </div>
              <div className="fake-class">
                <Progress value="100" />
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Progress value="100" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Different Sizes</BlockTitle>
              <p>
                Use additional className of <code>progress-[sm|lg]</code> on the <code>Progress</code> component.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress className="progress-sm" value="70" />
              </div>
              <div className="fake-class">
                <Progress value="75" />
              </div>
              <div className="fake-class">
                <Progress className="progress-lg" value="80" />
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Progress className="progress-lg" value="80" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Label</BlockTitle>
              <p>
                Add labels to your progress bars by placing text within the <code>Progress</code>.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress className="progress-lg" value="70">
                  70%
                </Progress>
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Progress className="progress-lg" value="70"> 70% </Progress>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Set Background</BlockTitle>
              <p>Use background utility classNames to change the appearance of individual progress bars.</p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress color="success" value="25" />
              </div>
              <div className="fake-class">
                <Progress color="info" value="50" />
              </div>
              <div className="fake-class">
                <Progress color="warning" value="75" />
              </div>
              <div className="fake-class">
                <Progress color="danger" value="100" />
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Progress color="info" value="50" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Multiple Bars</BlockTitle>
              <p>
                Include multiple progress bars in a progress component if you need with <code>multi</code> props
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress multi>
                  <Progress bar value="15" />
                  <Progress bar color="success" value="30" />
                  <Progress bar color="warning" value="20" />
                </Progress>
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<Progress multi>
  <Progress bar value="15" />
  <Progress bar color="success" value="30" />
  <Progress bar color="warning" value="20" />
</Progress>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Striped Bar</BlockTitle>
              <p>
                Add <code>striped</code> props to any <code>Progress</code> component to apply a stripe via CSS gradient
                over the progress bar’s background color.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress striped value="5" />
              </div>
              <div className="fake-class">
                <Progress striped color="success" value="25" />
              </div>
              <div className="fake-class">
                <Progress striped color="info" value="50" />
              </div>
              <div className="fake-class">
                <Progress striped color="warning" value="75" />
              </div>
              <div className="fake-class">
                <Progress striped color="danger" value="100" />
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Progress striped color="success" value="25" />`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Animated Stripes</BlockTitle>
              <p>
                The striped gradient can also be animated. Add <code>animated</code> props to <code>Progress</code> to
                animate the stripes right to left via CSS3 animations.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div className="fake-class">
                <Progress animated value="75" />
              </div>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">{`<Progress animated value="75" />`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default ProgressPage;
