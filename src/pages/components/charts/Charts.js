import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  Block,
  BackTo,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  LineChartExample,
  Row,
  Col,
  BarChartExample,
  PieChartExample,
  DoughnutExample,
  PolarExample,
} from "../../../components/Component";
import {
  barChartData,
  barChartMultiple,
  barChartStacked,
  filledLineChart,
  solidLineChart,
  straightLineChart,
  doughnutChartData,
  polarChartData,
} from "./ChartData";

const ChartPage = () => {
  return (
    <React.Fragment>
      <Head title="Chart Js" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Chart Js
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                <a href="https://www.chartjs.org/">ChartJs</a> is a very simple and flexible JavaScript charting for
                designers & developers. You can visualize your data in different ways. We present some of examples for
                you.
              </p>
              <p>
                Also can fine more details from <a href="https://www.chartjs.org/">here</a>.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block>
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Solid Line Chart</BlockTitle>
              <BlockDes>
                <p>
                  A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the
                  comparison of two data sets.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="nk-ck">
              <LineChartExample legend={true} data={solidLineChart} />
            </div>
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Filled Line Chart</BlockTitle>
              <BlockDes>
                <p>Alternatively, you can use line chart with some background to display more visually.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col md={6}>
              <PreviewCard>
                <div className="card-head">
                  <h6 className="title">Rounded Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <LineChartExample legend={false} data={filledLineChart} />
                </div>
              </PreviewCard>
            </Col>
            <Col md={6}>
              <PreviewCard>
                <div className="card-head">
                  <h6 className="title">Straight Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <LineChartExample legend={false} data={straightLineChart} />
                </div>
              </PreviewCard>
            </Col>
          </Row>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Bar Chart - Single</BlockTitle>
              <BlockDes>
                <p>A bar chart provides a way of showing data values represented as vertical bars.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="nk-ck">
              <BarChartExample data={barChartData} />
            </div>
          </PreviewCard>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Bar Chart - Multiple </BlockTitle>
              <BlockDes>
                <p>A bar chart provides a way of comparison of multiple data sets side by side or with stacked view.</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col md={6}>
              <PreviewCard>
                <div className="card-head">
                  <h6 className="title">Multiple Bar</h6>
                </div>
                <div className="nk-ck-sm">
                  <BarChartExample data={barChartMultiple} />
                </div>
              </PreviewCard>
            </Col>
            <Col md={6}>
              <PreviewCard>
                <div className="card-head">
                  <h6 className="title">Stacked Bar Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <BarChartExample stacked data={barChartStacked} />
                </div>
              </PreviewCard>
            </Col>
          </Row>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Pie & Doughnut Charts</BlockTitle>
              <BlockDes>
                <p>
                  Pie and doughnut charts are probably the most commonly used charts. It use to show relational
                  proportions between data.
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col md={4}>
              <PreviewCard>
                <div className="card-head text-center">
                  <h6 className="title">Pie Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <PieChartExample data={doughnutChartData} />
                </div>
              </PreviewCard>
            </Col>
            <Col md={4}>
              <PreviewCard>
                <div className="card-head text-center">
                  <h6 className="title">Doughnut Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <DoughnutExample data={doughnutChartData} />
                </div>
              </PreviewCard>
            </Col>
            <Col md={4}>
              <PreviewCard>
                <div className="card-head text-center">
                  <h6 className="title">Polar Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <PolarExample data={polarChartData} />
                </div>
              </PreviewCard>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default ChartPage;
