export const solidLineChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dataUnit: "BTC",
  lineTension: 0.4,
  legend: true,
  categoryPercentage: 0.9,
  barPercentage: 0.6,
  datasets: [
    {
      label: "Total Received",
      borderColor: "#5ce0aa",
      backgroundColor: "white",
      pointBorderWidth: 2,
      fill: false,
      categoryPercentage: 0.9,
      barPercentage: 0.6,
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
    },
    {
      label: "Total Send",
      backgroundColor: "white",
      pointBorderWidth: 2,
      borderColor: "#798bff",
      fill: false,
      categoryPercentage: 0.9,
      barPercentage: 0.6,
      data: [80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82],
    },
  ],
};

export const filledLineChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dataUnit: "BTC",
  datasets: [
    {
      label: "Total Received",
      lineTension: 0.4,
      borderColor: "#798bff",
      backgroundColor: "rgba(121, 139, 255, 0.4)",
      pointBorderWidth: 2,
      pointBackgroundColor: "white",
      pointHoverRadius: 3,
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 3,
      fill: true,
      data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95],
    },
  ],
};

export const straightLineChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dataUnit: "BTC",
  datasets: [
    {
      label: "Total Received",
      lineTension: 0,
      borderColor: "#798bff",
      backgroundColor: "rgba(121, 139, 255, 0.4)",
      pointBorderWidth: 2,
      pointBackgroundColor: "white",
      pointRadius: 4,
      borderRadius: 0,
      fill: true,
      bezierCurve: false,
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
    },
  ],
};

export const barChartData = {
  labels: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  dataUnit: "People",
  datasets: [
    {
      label: "join",
      backgroundColor: "#9cabff",
      barPercentage: 0.8,
      categoryPercentage: 0.8,
      data: [
        110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95,
        75, 90, 75, 90,
      ],
    },
    {
      label: "join",
      backgroundColor: "#9cabff",
      barPercentage: 0.8,
      categoryPercentage: 0.8,
      data: [
        110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95,
        75, 90, 75, 90,
      ],
    },
  ],
};
export const barChartMultiple = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dataUnit: "USD",
  datasets: [
    {
      label: "Income",
      backgroundColor: "#9cabff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
    },
    {
      label: "Expense",
      backgroundColor: "#f4aaa4",
      data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125],
    },
  ],
};
export const barChartStacked = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  stacked: true,
  dataUnit: "USD",
  datasets: [
    {
      label: "Income",
      backgroundColor: "#9cabff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
    },
    {
      label: "Expense",
      backgroundColor: "#f4aaa4",
      data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125],
    },
  ],
};

export const doughnutChartData = {
  labels: ["Send", "Receive", "Withdraw"],
  dataUnit: "BTC",
  legend: false,
  datasets: [
    {
      borderColor: "#fff",
      backgroundColor: ["rgba(156, 171, 255, 0.8)", "rgba(244, 170, 164, 0.8)", "rgba(143, 234, 197, 0.8)"],
      data: [110, 80, 125],
    },
  ],
};

export const polarChartData = {
  labels: ["Send", "Receive", "Withdraw"],
  dataUnit: "BTC",
  legend: false,
  datasets: [
    {
      borderColor: "#fff",
      backgroundColor: ["rgba(156, 171, 255, 0.8)", "rgba(244, 170, 164, 0.8)", "rgba(143, 234, 197, 0.8)"],
      data: [110, 80, 125],
    },
  ],
};

export const dayRemainKnob = {
  labels: ["", "", ""],
  dataUnit: "BTC",
  legend: false,
  datasets: [
    {
      borderColor: "transparent",
      backgroundColor: ["#816bff", "#d9e5f7"],
      data: [220, 80],
    },
  ],
};

export const overviewKnob = {
  labels: ["", "", ""],
  dataUnit: "BTC",
  legend: false,
  datasets: [
    {
      borderColor: "transparent",
      backgroundColor: ["#6576ff", "#d9e5f7"],
      data: [220, 80],
    },
  ],
};
