var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
/*
var t_dd = String(tomorrow.getDate()).padStart(2, "0");
var t_mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
var t_yyyy = tomorrow.getFullYear();
*/

var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
var y_dd = String(yesterday.getDate()).padStart(2, "0");
var y_mm = String(yesterday.getMonth() + 1).padStart(2, "0");
var y_yyyy = yesterday.getFullYear();

var YM = yyyy + "-" + mm;
var YESTERDAY = y_yyyy + "-" + y_mm + "-" + y_dd;
var TODAY = yyyy + "-" + mm + "-" + dd;

var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const returnDate = (date) => {
  if (date !== undefined) {
    const dateSection = date.split("-");
    let newDate = dateSection[2] + " " + month[Number(dateSection[1]) - 1] + " " + dateSection[0];
    return newDate;
  }
};

export const events = [
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Reader will be distracted",
    start: YM + "-03",
    end: YM + "-03",
    className: "fc-event-danger",
    type: { value: "fc-event-danger", label: "Business dinners" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Rabfov va hezow.",
    start: YM + "-14",
    end: YM + "-14",
    className: "fc-event-success",
    type: { value: "fc-event-success", label: "Seminars" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "The leap into electronic",
    start: YM + "-05",
    end: YM + "-06",
    className: "fc-event-primary",
    type: { value: "fc-event-primary", label: "Company" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Lorem Ipsum passage - Product Release",
    start: YM + "-02",
    end: YM + "-04",
    className: "fc-event-primary",
    type: { value: "fc-event-primary", label: "Company" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Gibmuza viib hepobe.",
    start: YM + "-12",
    end: YM + "-10",
    className: "fc-event-pink",
    type: { value: "fc-event-pink", label: "Private" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Jidehse gegoj fupelone.",
    start: YM + "-07",
    end: YM + "-07",
    className: "fc-event-danger",
    type: { value: "fc-event-danger", label: "Business dinners" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Ke uzipiz zip.",
    start: YM + "-16",
    end: YM + "-16",
    className: "fc-event-info",
    type: { value: "fc-event-info", label: "Conferences" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Piece of classical Latin literature",
    start: TODAY + "-01",
    end: TODAY + "-01",
    className: "fc-event-primary",
    type: { value: "fc-event-primary", label: "Company" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Nogok kewwib ezidbi.",
    start: TODAY,
    end: TODAY,
    className: "fc-event-info",
    type: { value: "fc-event-info", label: "Conferences" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Mifebi ik cumean.",
    start: TODAY,
    end: TODAY,
    className: "fc-event-warning",
    type: { value: "fc-event-warning", label: "Meeting" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Play Time",
    start: TODAY,
    end: TODAY,
    className: "fc-event-info",
    type: { value: "fc-event-info", label: "Conferences" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "Rujfogve kabwih haznojuf.",
    start: YESTERDAY,
    end: YESTERDAY,
    className: "fc-event-danger",
    type: { value: "fc-event-danger", label: "Business dinners" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "simply dummy text of the printing",
    start: YESTERDAY,
    end: YESTERDAY,
    className: "fc-event-primary",
    type: { value: "fc-event-primary", label: "Company" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
];

export const eventOptions = [
  { value: "fc-event-primary", label: "Company" },
  { value: "fc-event-success", label: "Seminars" },
  { value: "fc-event-info", label: "Conferences" },
  { value: "fc-event-warning", label: "Meeting" },
  { value: "fc-event-danger", label: "Business dinners" },
  { value: "fc-event-pink", label: "Private" },
  { value: "fc-event-primary-dim", label: "Auctions" },
  { value: "fc-event-success-dim", label: "Networking Events" },
  { value: "fc-event-info-dim", label: "Product Launches" },
  { value: "fc-event-warning-dim", label: "Fundrising" },
  { value: "fc-event-danger-dim", label: "Sponsored" },
  { value: "fc-event-pink-dim", label: "Sports events" },
];
