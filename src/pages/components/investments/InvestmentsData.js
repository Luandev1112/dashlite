import Banana from "../../../images/items/banana.svg";
import Orange from "../../../images/items/orange.svg";
import Peach from "../../../images/items/peach.svg";
import Grape from "../../../images/items/grape.svg";
import Apple from "../../../images/items/apple.svg";

export const companiesData = [
  {
    status: "bidding",
    companies: [
      {
        id: 1,
        name: "Banana",
        logo: Banana,
        price: 20000,
      },
      {
        id: 2,
        name: "Orange",
        logo: Orange,
        price: 10000,
      }
    ]
  },
  { 
    status: "tosign",
    companies: [
      {
        id: 3,
        name: "Peach",
        logo: Peach,
        price: 50000,
      },
    ]
  },
  {
    status: "topay",
    companies: [
      {
        id: 4,
        name: "Peach",
        logo: Peach,
        price: 50000,
      },
      {
        id: 5,
        name: "Grape",
        logo: Grape,
        price: 9000,
      },
    ]
  },
  {
    status: "toreturn",
    companies: [
      {
        id: 6,
        name: "Apple",
        logo: Apple,
        price: 20000,
      },
    ]
  }
];
