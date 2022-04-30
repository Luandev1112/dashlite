import Banana from "../../images/items/banana.svg";
import Orange from "../../images/items/orange.svg";
import Peach from "../../images/items/peach.svg";
import Grape from "../../images/items/grape.svg";
import Apple from "../../images/items/apple.svg";

import { setDeadline } from "../../utils/Utils";

export const sellerData = [
  {
    id: 1,
    logo: Banana,
    avatarClass: "purple",
    name: "Banana",
    long_name: "Organic Orange Firm",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    score: 4,
    favorite: false,
    deals: "3",
    totalDeals: "93",
    industry: "Agriculture",
    total_price: "1K+",
    verification: true,
    sector: "Fruits",
    response_time: "3",
    deadline: setDeadline(20), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      { value: "Milagros Betts", label: "Milagros Betts", theme: "pink" },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
    ],
  },
  {
    id: 2,
    logo: Orange,
    avatarClass: "purple",
    name: "Orange",
    long_name: "Organic Orange Firm",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    score: 3,
    favorite: true,
    deals: "3",
    totalDeals: "93",
    industry: "Agriculture",
    total_price: "1K+",
    verification: true,
    sector: "Fruits",
    response_time: "3",
    deadline: setDeadline(20), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      { value: "Milagros Betts", label: "Milagros Betts", theme: "pink" },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
    ],
  },
];