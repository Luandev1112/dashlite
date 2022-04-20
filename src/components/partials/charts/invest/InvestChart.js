import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  planPurchase,
  planPurchaseSet2,
  planPurchaseSet3,
  planPurchaseSet4,
  totalBalance,
  totalDeposit,
  totalWithdraw,
} from "./InvestData";

export const DepositBarChart = () => {
  return (
    <Bar
      className="iv-data-chart"
      data={totalDeposit}
      options={{
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
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
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      }}
    ></Bar>
  );
};

export const BalanceBarChart = () => {
  return (
    <Bar
      className="iv-data-chart"
      data={totalBalance}
      options={{
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
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
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      }}
    ></Bar>
  );
};

export const WithdrawBarChart = () => {
  return (
    <Bar
      className="iv-data-chart"
      data={totalWithdraw}
      options={{
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
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
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      }}
    ></Bar>
  );
};

export const PurchasePlanChart = ({ set }) => {
  const [data, setData] = useState(planPurchase);
  useEffect(() => {
    let object;
    if (set === "7") {
      object = planPurchaseSet2;
    } else if (set === "15") {
      object = planPurchaseSet3;
    } else {
      object = planPurchaseSet4;
    }
    setData(object);
  }, [set]);

  return (
    <Bar
      className="iv-plan-purchase"
      data={data}
      options={{
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
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
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      }}
    ></Bar>
  );
};
