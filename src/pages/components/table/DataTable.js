import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../../components/Component";
import { DataTableData, dataTableColumns, dataTableColumns2, userData } from "./TableData";

const DataTablePage = () => {
  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              DataTable Example
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                The tables in this section has used the{" "}
                <a href="https://react-data-table-component.netlify.app/" target="_blank" rel="noreferrer">
                  React-Data-Table-Component
                </a>{" "}
                package. Visit the{" "}
                <a href="https://react-data-table-component.netlify.app/" target="_blank" rel="noreferrer">
                  documentation
                </a>{" "}
                for further understanding. The plugin has been customized for the purpose of React Dashlite.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable Default</BlockTitle>
              <p>
                Just import <code>ReactDataTable</code> from <code>components</code>, it is built in for react dashlite.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination />
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with Export</BlockTitle>
              <p>
                Pass in the <code>actions</code> props to add export option to the table.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination actions />
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with custom markup</BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable
              data={userData}
              columns={dataTableColumns2}
              pagination
              className="nk-tb-list"
              selectableRows
            />
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default DataTablePage;
