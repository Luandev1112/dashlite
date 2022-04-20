import StockA from "../../../images/stock/a.jpg";
import StockB from "../../../images/stock/b.jpg";
import StockC from "../../../images/stock/c.jpg";
import StockD from "../../../images/stock/d.jpg";
import StockE from "../../../images/stock/e.jpg";
import StockF from "../../../images/stock/f.jpg";

export const pricingTableDataV1 = [
  {
    id: "plan-iv-1",
    title: "Starter",
    caption: "Enjoy entry level of invest & earn.",
    interest: 1.67,
    term: 30,
    startDate: "Nov 04, 2019",
    endDate: "Dec 04, 2019",
    minDeposit: {
      usd: 250,
      euro: 221,
      BTC: 0.0052,
      ETH: 6,
    },
    maxDeposit: {
      usd: 1999,
      euro: 1700,
      BTC: 0.041,
      ETH: 50,
    },
    investLevels: {
      usd: [250, 500, 1000, 1500, 1999],
      euro: [221, 500, 1000, 1500, 1700],
      BTC: [0.0052, 0.01, 0.041],
      ETH: [6, 20, 30, 50],
    },
    return: "Yes",
    totalReturn: 125,
    tags: false,
  },
  {
    id: "plan-iv-2",
    title: "Silver",
    caption: "Best plan for user to investers.",
    interest: 4.76,
    term: 21,
    startDate: "Nov 04, 2019",
    endDate: "Nov 25, 2019",
    minDeposit: {
      usd: 2000,
      euro: 1771,
      BTC: 0.041,
      ETH: 50,
    },
    maxDeposit: {
      usd: 4999,
      euro: 4427,
      BTC: 0.099,
      ETH: 125,
    },
    investLevels: {
      usd: [2000, 2500, 3000, 4000, 4999],
      euro: [1771, 2000, 2500, 3000, 4427],
      BTC: [0.041, 0.07, 0.099],
      ETH: [50, 70, 90, 110, 125],
    },
    return: "Yes",
    totalReturn: 200,
    tags: false,
  },
  {
    id: "plan-iv-3",
    title: "Diamond",
    caption: "Advance level of invest & earn.",
    interest: 14.29,
    term: 14,
    startDate: "Nov 04, 2019",
    endDate: "Nov 18, 2019",
    minDeposit: {
      usd: 5000,
      euro: 4428,
      BTC: 0.1,
      ETH: 125,
    },
    maxDeposit: {
      usd: 20000,
      euro: 17712,
      BTC: 0.41,
      ETH: 500,
    },
    investLevels: {
      usd: [5000, 10000, 12000, 15000, 20000],
      euro: [4428, 7000, 10000, 15000, 17712],
      BTC: [0.1, 0.3, 0.41],
      ETH: [125, 200, 300, 400, 500],
    },
    return: "Yes",
    totalReturn: 300,
    tags: true,
  },
  {
    id: "plan-iv-4",
    title: "Platinum",
    caption: "Just invest money & earn.",
    interest: 21.07,
    term: 7,
    startDate: "Nov 04, 2019",
    endDate: "Nov 11, 2019",
    minDeposit: {
      usd: 10500,
      euro: 9298,
      BTC: 0.21,
      ETH: 265,
    },
    maxDeposit: {
      usd: 50999,
      euro: 45164,
      BTC: 1.05,
      ETH: 1200,
    },
    investLevels: {
      usd: [10500, 20000, 30000, 40000, 50999],
      euro: [9298, 20000, 30000, 40000, 45000],
      BTC: [0.21, 0.5, 1.05],
      ETH: [265, 500, 800, 1000, 1200],
    },
    return: "Yes",
    totalReturn: 500,
    tags: false,
  },
];

export const cardPreview = [
  {
    id: 0,
    img: StockA,
    heading: "Card with stretched link",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 1,
    img: StockB,
    heading: "Card with stretched link",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    img: StockC,
    heading: "Card with stretched link",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    img: StockD,
    heading: "Card with stretched link",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 4,
    img: StockE,
    heading: "Card with stretched link",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 5,
    img: StockF,
    heading: "Card with stretched link",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export const jsTreeData = {
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
};

export const jsTreeData2 = {
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
};

export const jsTreeData3 = {
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

export const jsTreeData4 = {
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
};
