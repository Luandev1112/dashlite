import React from "react";
import { Line, Bar, Pie, Polar, Doughnut } from "react-chartjs-2";

export const LineChartExample = ({ data, legend }) => {
  return (
    <Line
      className="line-chart"
      data={data}
      options={{
        legend: {
          display: legend,
          labels: {
            boxWidth: 12,
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
                beginAtZero: false,
                fontSize: 12,
                fontColor: "#9eaecf",
                padding: 10,
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
                fontSize: 12,
                fontColor: "#9eaecf",
                source: "auto",
                padding: 5,
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 10,
                offsetGridLines: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export const BarChartExample = ({ data, stacked }) => {
  return (
    <Bar
      data={data}
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
              stacked: stacked ? true : false,
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: "#9eaecf",
                padding: 5,
              },
              gridLines: {
                tickMarkLength: 0,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              stacked: stacked ? true : false,
              ticks: {
                fontSize: 12,
                fontColor: "#9eaecf",
                source: "auto",
                padding: 5,
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 10,
                zeroLineColor: "transparent",
              },
            },
          ],
        },
      }}
    />
  );
};

export const PieChartExample = ({ data }) => {
  return (
    <Pie
      data={data}
      options={{
        legend: {
          display: false,
        },
        rotation: -0.2,
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
      }}
    />
  );
};

export const DoughnutExample = ({ data }) => {
  return (
    <Doughnut
      data={data}
      options={{
        legend: {
          display: false,
        },
        rotation: 1,
        cutoutPercentage: 40,
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
      }}
    />
  );
};

export const PolarExample = ({ data }) => {
  return (
    <Polar
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
      }}
    />
  );
};
