import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  SpecialTable,
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  OrderTable,
  LoginLogTable,
} from "../../../components/Component";
import { Card } from "reactstrap";

const SpecialTablePage = () => {
  return (
    <React.Fragment>
      <Head title="Special table" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Exclusive &amp; Special Table
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                <strong>Softnio Team</strong> understand the value of <strong>real case-use</strong>, so our team
                designed some large content base table which is <strong>well optimized</strong> and fit on every screen.
                It gives you extra ease on your project and surely you loved it.{" "}
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Transaction List - With Action</BlockTitle>
              <p>
                The following table can be use for <strong className="text-primary">invoice, payment history</strong>{" "}
                related transaction.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <Card className="card-bordered card-preview">
            <SpecialTable action={true} />
          </Card>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Transaction List - No Action</BlockTitle>
              <p>
                The following table can be use for <strong className="text-primary">invoice, payment history</strong>{" "}
                related transaction.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <Card className="card-bordered card-preview">
            <SpecialTable action={false} />
          </Card>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Transaction List - Compact</BlockTitle>
              <p>
                Add the <code>.is-compact</code> class with <code>.table-tranx</code> className to make compact version
                of table.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <Card className="card-bordered card-preview">
            <SpecialTable action={false} isCompact />
          </Card>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Order History - With Action</BlockTitle>
              <p>
                The following table can be use for{" "}
                <strong className="text-primary">order history, invoice listing</strong> related transaction.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <Card className="card-bordered card-preview">
            <OrderTable />
          </Card>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Login History - With Action</BlockTitle>
              <p>
                The following table can be used for{" "}
                <strong className="text-primary">Login Activity, Browser Session, etc</strong> .
              </p>
            </BlockHeadContent>
          </BlockHead>
          <Card className="card-bordered card-preview">
            <LoginLogTable />
          </Card>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default SpecialTablePage;
