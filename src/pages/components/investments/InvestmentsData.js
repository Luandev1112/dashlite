import { buildClassNameNormalizer } from "@fullcalendar/react";

export const companiesData = [
  {
    status: "bidding",
    companies: [
      {
        id: 1,
        name: "Banana",
        logo: "banana",
        price: 20000,
      },
      {
        id: 2,
        name: "Orange",
        logo: "orange",
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
        logo: "peach",
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
        logo: "peach",
        price: 50000,
      },
      {
        id: 5,
        name: "Grape",
        logo: "grape",
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
        logo: "apple",
        price: 20000,
      },
    ]
  }
];
