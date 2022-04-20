import React, { useEffect, useState } from "react";
import { Bar, HorizontalBar, Line } from "react-chartjs-2";
import {
  saleRevenue,
  activeSubscription,
  salesOverview,
  coinOverview,
  coinOverviewSet1,
  coinOverviewSet2,
  coinOverviewSet3,
  userActivity,
  orderOverviewSet1,
  orderOverviewSet2,
  orderOverviewSet3,
  userActivitySet2,
  userActivitySet3,
  userActivitySet4,
} from "./Data";

export const BarChart = ({ sales }) => {
  return (
    <Bar
      className="sales-bar-chart chartjs-render-monitor"
      data={sales ? saleRevenue : activeSubscription}
      options={{
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "#eff6ff",
          titleFontSize: 11,
          titleFontColor: "#6783b8",
          titleMarginBottom: 4,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 10,
          bodySpacing: 3,
          yPadding: 8,
          xPadding: 8,
          footerMarginTop: 0,
          displayColors: false,
        },
      }}
    />
  );
};

export const LineChart = () => {
  return (
    <Line
      className="sales-overview-chart"
      data={salesOverview}
      options={{
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          callbacks: {
            title: function (tooltipItem, data) {
              return data["labels"][tooltipItem[0]["index"]];
            },
            label: function (tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex]["data"][tooltipItem["index"]];
            },
          },
          backgroundColor: "#eff6ff",
          titleFontSize: 13,
          titleFontColor: "#6783b8",
          titleMarginBottom: 6,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 12,
          bodySpacing: 4,
          yPadding: 10,
          xPadding: 10,
          footerMarginTop: 0,
          displayColors: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                fontSize: 11,
                fontColor: "#9eaecf",
                callback: function (value, index, values) {
                  return "$ " + value;
                },
                padding: 10,
                min: 100,
                stepSize: 3000,
              },
              gridLines: {
                tickMarkLength: 0,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                fontSize: 9,
                fontColor: "#9eaecf",
                source: "auto",
                padding: 10,
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: "transparent",
              },
            },
          ],
        },
      }}
    />
  );
};

export const DoubleBar = ({ state }) => {
  let object;
  const setData = (state) => {
    switch (state) {
      case "set2":
        object = orderOverviewSet2;
        break;
      case "set3":
        object = orderOverviewSet3;
        break;
      default:
        object = orderOverviewSet1;
    }
    return object;
  };
  return (
    <Bar
      className="chartjs-render-monitor"
      data={setData(state)}
      options={{
        legend: {
          display: false,
          labels: {
            boxWidth: 30,
            padding: 20,
            fontColor: "#6783b8",
          },
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          backgroundColor: "#eff6ff",
          titleFontSize: 13,
          titleFontColor: "#6783b8",
          titleMarginBottom: 6,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 12,
          bodySpacing: 4,
          yPadding: 10,
          xPadding: 10,
          footerMarginTop: 0,
          displayColors: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                fontSize: 11,
                fontColor: "#9eaecf",
                padding: 10,
                callback: function (value, index, values) {
                  return "$ " + value;
                },
                min: 100,
                max: 5000,
                stepSize: 1200,
              },
              gridLines: {
                tickMarkLength: 0,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                fontSize: 9,
                fontColor: "#9eaecf",
                source: "auto",
                padding: 10,
                stepSize: 2400,
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: "transparent",
              },
            },
          ],
        },
      }}
    />
  );
};

export const HorizontalBarChart = ({ state }) => {
  const [data, setData] = useState(coinOverview);
  useEffect(() => {
    let object;
    if (state === "day") {
      object = coinOverviewSet3;
    } else if (state === "month") {
      object = coinOverviewSet2;
    } else {
      object = coinOverviewSet1;
    }
    setData(object);
  }, [state]);
  return (
    <HorizontalBar
      data={data}
      className="coin-overview-chart"
      options={{
        legend: {
          display: false,
          labels: {
            boxWidth: 30,
            padding: 20,
            fontColor: "#6783b8",
          },
        },
        indexAxis: "y",
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          backgroundColor: "#eff6ff",
          titleFontSize: 13,
          titleFontColor: "#6783b8",
          titleMarginBottom: 6,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 12,
          bodySpacing: 4,
          yPadding: 10,
          xPadding: 10,
          footerMarginTop: 0,
          displayColors: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
              stacked: true,
              ticks: {
                beginAtZero: true,
                padding: 0,
              },
              gridLines: {
                tickMarkLength: 0,
              },
            },
          ],
          xAxes: [
            {
              display: false,
              stacked: true,
              ticks: {
                fontSize: 9,
                fontColor: "#9eaecf",
                source: "auto",
                padding: 0,
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: "transparent",
              },
            },
          ],
        },
      }}
    />
  );
};

export const StackedBarChart = ({ state }) => {
  const [data, setData] = useState(userActivity);
  useEffect(() => {
    let object;
    if (state === "day") {
      object = userActivitySet2;
    } else if (state === "month") {
      object = userActivitySet3;
    } else {
      object = userActivitySet4;
    }
    setData(object);
  }, [state]);
  return (
    <Bar
      className="usera-activity-chart"
      data={data}
      options={{
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          backgroundColor: "#eff6ff",
          titleFontSize: 13,
          titleFontColor: "#6783b8",
          titleMarginBottom: 6,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 12,
          bodySpacing: 4,
          yPadding: 10,
          xPadding: 10,
          footerMarginTop: 0,
          displayColors: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
              stacked: true,
            },
          ],
        },
      }}
    />
  );
};
