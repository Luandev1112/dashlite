import React, { useState } from "react";
import TreeView from "react-jstree-table";
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
} from "../../../components/Component";
import { jsTreeData, jsTreeData2, jsTreeData3, jsTreeData4 } from "./Data";

const JsTreePreview = () => {
  const [state] = useState({
    data: jsTreeData,
  });
  const [state2] = useState({
    data: jsTreeData2,
  });
  const [state3] = useState({
    data: jsTreeData3,
  });
  const [state4] = useState({
    data: jsTreeData4,
  });

  return (
    <React.Fragment>
      <Head title="jsTree"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              jsTree
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                React jsTree table is a react wrapper for the jsTree plugin, that provides interactive trees. jsTree is
                easily extendable, themable and configurable, it supports HTML & JSON data sources and AJAX loading.
              </p>
              <p className="lead">
                For more info please visit{" "}
                <a href="https://www.npmjs.com/package/react-jstree-table" target="_blank" rel="noreferrer">
                  React JsTree Table
                </a>
                .
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic</BlockTitle>
              <BlockDes>
                Just import <code>TreeView</code> component from <code>react-jstree-table</code> plugin.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <TreeView treeData={state.data} treeSearchData={state.data}></TreeView>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` // Json Object that needs to be passed
              core: {
                data: [
                  {
                    text: "Root node 1",
                    state: {
                      opened: true,
                    },
                    children: [
                      { text: "Child node 1" },
                      {
                        text: "Initially selected",
                        state: {
                          selected: true,
                        },
                      },
                      {
                        text: "Initially Open",
                        state: {
                          opened: true,
                        },
                        children: [
                          {
                            text: "Disabled Node",
                            state: {
                              disabled: true,
                            },
                          },
                          { text: "Another Node" },
                        ],
                      },
                    ],
                  },
                  {
                    text: "Root node 2",
                  },
                ],
              },


<TreeView treeData={state.data} treeSearchData={state.data}></TreeView>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Custom Icon</BlockTitle>
              <BlockDes>
                Custom icons can be passed in the <code>json structure</code> with each node, use the <code>icon</code>{" "}
                property.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <TreeView treeData={state2.data} treeSearchData={state2.data}></TreeView>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` // Json Object that needs to be passed
  core: {
    data: [
      {
        text: "Root node 1",
        state: {
          opened: true,
        },
        children: [
          { text: "Child node 1" },
          {
            text: "Initially selected",
            icon: "icon ni ni-calendar-fill text-info",
            state: {
              selected: true,
            },
          },
          {
            text: "Initially Open",
            state: {
              opened: true,
            },
            children: [
              {
                text: "Disabled Node",
                icon: "ni ni-archive-fill",
                state: {
                  disabled: true,
                },
              },
              { text: "Another Node" },
            ],
          },
        ],
      },
      {
        text: "Root node 2",
        icon: "icon ni ni-puzzle-fill text-success",
      },
    ],
  },

<TreeView treeData={state.data} treeSearchData={state.data}></TreeView>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Drag and Drop</BlockTitle>
              <BlockDes>
                Add <code>dnd</code> plugin to the core <code>json structure</code>. Further details can be found{" "}
                <a href="https://www.jstree.com/plugins/">here</a>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <TreeView treeData={state3.data} treeSearchData={state3.data}></TreeView>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` // Json Object that needs to be passed

{
    core: {
      data: [
        {
          text: "Root node 1",
          state: {
            opened: true,
          },
          children: [
            { text: "Child node 1" },
            {
              text: "Initially selected",
              state: {
                selected: true,
              },
            },
            {
              text: "Initially Open",
              state: {
                opened: true,
              },
              children: [
                {
                  text: "Disabled Node",
                  state: {
                    disabled: true,
                  },
                },
                { text: "Another Node" },
              ],
            },
          ],
        },
        {
          text: "Root node 2",
        },
      ],
      check_callback: true,
    },
    plugins: ["dnd"],
  };
            
<TreeView treeData={state.data} treeSearchData={state.data}></TreeView>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">CheckBox</BlockTitle>
              <BlockDes>
                <p>
                  To activate checkbox option with full row selection, you just need to include <code>wholerow</code>{" "}
                  and <code>checkbox</code> in plugins option. For more information please check{" "}
                  <a href="https://www.jstree.com/plugins/">jsTree Plugin Page</a>
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <TreeView treeData={state4.data} treeSearchData={state4.data}></TreeView>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` // Json Object that needs to be passed

{
    core: {
      data: [
        {
          text: "Root node 1",
          state: {
            opened: true,
          },
          children: [
            { text: "Child node 1" },
            {
              text: "Initially selected",
              state: {
                selected: true,
              },
            },
            {
              text: "Initially Open",
              state: {
                opened: true,
              },
              children: [
                {
                  text: "Disabled Node",
                  state: {
                    disabled: true,
                  },
                },
                { text: "Another Node" },
              ],
            },
          ],
        },
        {
          text: "Root node 2",
        },
      ],
    },
    checkbox: {
      keep_selected_style: false,
    },
    plugins: ["checkbox", "wholerow"],
  }
            
<TreeView treeData={state.data} treeSearchData={state.data}></TreeView>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default JsTreePreview;
