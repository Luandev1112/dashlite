import React from "react";
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
  ReactDualList,
} from "../../../components/Component";

const options = [
  { value: "1", label: "Cheese" },
  { value: "2", label: "Egg" },
  { value: "3", label: "Butter" },
  { value: "4", label: "Margarine" },
  { value: "5", label: "Yogurt" },
  { value: "6", label: "Pizza" },
  { value: "7", label: "Steak" },
  { value: "8", label: "Kebab" },
  { value: "9", label: "Sandwich" },
  { value: "10", label: "Hamburger" },
];

const DualListPage = () => {
  return (
    <React.Fragment>
      <Head title="Duallistbox"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              React DualListBox
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Dual Listbox is a pure JavaScript plugin that converts the normal select box into a searchable dual list
                box where the users are able to move options between two selection panels. Visit the{" "}
                <a href="https://www.npmjs.com/package/react-dual-listbox" target="_blank" rel="noreferrer">
                  React Duallistbox
                </a>{" "}
                plugin for further details.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic</BlockTitle>
              <BlockDes>
                import <code>DualListBox</code> component from "react-dual-listbox".
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ReactDualList options={options} canFilter={true} />
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Custom labels</BlockTitle>
              <BlockDes>
                Add an <code>icons</code> props to the <code>DualList component</code> to add custom buttons.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ReactDualList options={options} icon canFilter={true} />
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Pre Selected</BlockTitle>
              <BlockDes>
                Add an <code>selected</code> props to the <code>DualList component</code> to add pre-selected.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ReactDualList options={options} canFilter={true} preSelected={["1", "2"]} />
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Without search</BlockTitle>
              <BlockDes>
                Remove <code>canFilter</code> props to the <code>DualList component</code> to remove search option.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ReactDualList options={options} />
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default DualListPage;
