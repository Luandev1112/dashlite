import User from "../../../../images/avatar/b-sm.jpg";
import User4 from "../../../../images/avatar/a-sm.jpg";
import User2 from "../../../../images/avatar/c-sm.jpg";
import { chatData } from "../ChatData";

const sortedDataFunc = (array) => {
  chatData.sort(function (a, b) {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });
  return chatData.filter((item) => array.includes(item.name.split("")[0].toUpperCase()) && !item.group);
};

export const contacts = [
  {
    id: 1,
    title: "A",
    contacts: sortedDataFunc(["A"]),
  },
  {
    id: 2,
    title: "B",
    contacts: sortedDataFunc(["B"]),
  },
  {
    id: 3,
    title: "C",
    contacts: sortedDataFunc(["C"]),
  },
  {
    id: 3,
    title: "D",
    contacts: sortedDataFunc(["D"]),
  },
  {
    id: 4,
    title: "E-k",
    contacts: sortedDataFunc(["E", "F", "G", "H", "I", "J", "K"]),
  },
  {
    id: 5,
    title: "L-T",
    contacts: sortedDataFunc(["L", "M", "N", "O", "P", "Q", "R", "S", "T"]),
  },
  {
    id: 6,
    title: "U-Z",
    contacts: sortedDataFunc(["U", "V", "W", "X", "Y", "Z"]),
  },
];

export const data = [
  {
    id: 1,
    title: "A",
    contacts: [
      {
        name: "Abu Bin Ishtiak",
        theme: "pruple",
      },
      {
        name: "Anthony Alaxander",
        theme: "warning",
      },
      {
        name: "Abbrin Wilson",
        image: User4,
      },
      {
        name: "Abigail Avery",
        theme: "secondary",
      },
    ],
  },
  {
    id: 2,
    title: "B",
    contacts: [
      { name: "Brooke Alison", theme: "success" },
      { name: "Brittany Kelly", image: User2 },
      { name: "Beck Joseph", theme: "black" },
    ],
  },
  {
    id: 3,
    title: "D",
    contacts: [
      { name: "Darren Park", theme: "orange" },
      { name: "Davidson Kelly", image: User2 },
      { name: "Devin Sanders", theme: "Pink" },
      { name: "Dixon Bryan", theme: "blue" },
    ],
  },
  {
    id: 4,
    title: "L-R",
    contacts: [
      { name: "Lynn Bennet", theme: "primary" },
      { name: "Miguel Murphy", theme: "warning" },
      { name: "Marion Mayers", image: User4 },
      { name: "Ryan Christensen", theme: "grey" },
    ],
  },
  {
    id: 5,
    title: "W",
    contacts: [{ name: "Wilson Bryant", image: User }],
  },
];
