import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/a-sm.jpg";
import User4 from "../../../images/avatar/d-sm.jpg";
import PlanS1 from "../../../images/icons/plan-s1.svg";
import PlanS2 from "../../../images/icons/plan-s2.svg";
import PlanS3 from "../../../images/icons/plan-s3.svg";

import { Folder, FolderSecure, FolderShare } from "./Svg";

export const asideData = [
  {
    id: 0,
    text: "Home",
    icon: "home-alt",
    link: "/",
  },
  {
    id: 1,
    text: "Files",
    icon: "file-docs",
    link: "/files",
    sub: ["New Files", "This Month", "Older Files"],
  },
  {
    id: 2,
    text: "Starred",
    icon: "star",
    link: "/starred",
  },
  {
    id: 3,
    text: "Shared",
    icon: "share-alt",
    link: "/shared",
  },
  {
    id: 4,
    text: "Recovery",
    icon: "trash",
    link: "/recovery",
  },
  {
    id: 5,
    text: "Settings",
    icon: "setting",
    link: "/settings",
  },
];

export const folderList = [
  {
    id: 0,
    meta: {
      type: "folder",
      name: "UI Design",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="32" y="16" width="28" height="15" rx="2.5" ry="2.5" style={{ fill: "#f29611" }} />
            <path
              d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
              style={{ fill: "#ffb32c" }}
            />
            <path
              d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
              style={{ fill: "#f2a222" }}
            />
          </g>
        </svg>
      ),
      time: "11:23 PM",
      date: "3/5/2020",
      size: 41.5,
      starred: true,
      share: true,
    },
    subFolder: [{ fileId: 14 }, { fileId: 13 }, { fileId: 11 }],
  },
  {
    id: 1,
    meta: {
      name: "Dashlite Resource",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="32" y="16" width="28" height="15" rx="2.5" ry="2.5" style={{ fill: "#f29611" }} />
            <path
              d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
              style={{ fill: "#ffb32c" }}
            />
            <path
              d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
              style={{ fill: "#f2a222" }}
            />
          </g>
        </svg>
      ),
      time: "01:52 PM",
      date: "Today",
      type: "folder",
      size: 3200,
      starred: false,
    },
    subFolder: [{ fileId: 5 }, { fileId: 6 }, { fileId: 8 }],
  },
  {
    id: 2,
    meta: {
      name: "Projects",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="32" y="16" width="28" height="15" rx="2.5" ry="2.5" style={{ fill: "#f29611" }} />
            <path
              d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
              style={{ fill: "#ffb32c" }}
            />
            <path
              d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
              style={{ fill: "#f2a222" }}
            />
          </g>
        </svg>
      ),
      type: "folder",
      time: "07:35 PM",
      date: "23/5/2021",
      size: 5050,
      starred: true,
    },
    subFolder: [{ fileId: 16 }, { fileId: 11 }, { fileId: 12 }, { fileId: 13 }, { fileId: 14 }],
  },
  {
    id: 5,
    meta: {
      name: "Figma Design",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="32" y="16" width="28" height="15" rx="2.5" ry="2.5" style={{ fill: "#f29611" }} />
            <path
              d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
              style={{ fill: "#ffb32c" }}
            />
            <path
              d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
              style={{ fill: "#f2a222" }}
            />
            <path
              d="M42.2227,40H41.5V37.4443a5.5,5.5,0,0,0-11,0V40h-.7227A2.8013,2.8013,0,0,0,27,42.8184v6.3633A2.8013,2.8013,0,0,0,29.7773,52H42.2227A2.8013,2.8013,0,0,0,45,49.1816V42.8184A2.8013,2.8013,0,0,0,42.2227,40ZM36,48a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,36,48Zm3.5-8h-7V37.4443a3.5,3.5,0,0,1,7,0Z"
              style={{ fill: "#c67424" }}
            />
          </g>
        </svg>
      ),
      type: "folder",
      time: "01:52 PM",
      date: "Today",
      size: 0,
      starred: false,
      members: [
        { user: "Illiash Hossain", theme: "purple" },
        { user: "Abu Bin", theme: "blue" },
        { user: "Hao Limae", theme: "purple", img: User },
        { user: "Kimberly May", theme: "purple", img: User2 },
        { user: "Courier Kay", theme: "purple", img: User4 },
      ],
    },
    subFolder: [],
  },
  {
    id: 3,
    meta: {
      name: "All work.zip",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="18" y="16" width="36" height="40" rx="5" ry="5" style={{ fill: "#e3edfc" }} />
            <path d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
            <rect x="32" y="20" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="25" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="30" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="35" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <path
              d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
              style={{ fill: "#7e95c4" }}
            />
            <path
              d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
              style={{ fill: "#7e95c4" }}
            />
          </g>
        </svg>
      ),
      type: "file",
      time: "08:15 AM",
      date: "3/3/2022",
      size: 8.5,
      ext: "application/x-zip-compressed",
      starred: false,
    },
  },
  {
    id: 4,
    meta: {
      name: "Sales Report.xlsx",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <path
            d="M49,61H23a5.0147,5.0147,0,0,1-5-5V16a5.0147,5.0147,0,0,1,5-5H40.9091L54,22.1111V56A5.0147,5.0147,0,0,1,49,61Z"
            style={{ fill: "#e3edfc" }}
          />
          <path
            d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
            style={{ fill: "#b7d0ea" }}
          />
          <path d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
          <path
            d="M42,31H30a3.0033,3.0033,0,0,0-3,3V45a3.0033,3.0033,0,0,0,3,3H42a3.0033,3.0033,0,0,0,3-3V34A3.0033,3.0033,0,0,0,42,31ZM29,38h6v3H29Zm8,0h6v3H37Zm6-4v2H37V33h5A1.001,1.001,0,0,1,43,34ZM30,33h5v3H29V34A1.001,1.001,0,0,1,30,33ZM29,45V43h6v3H30A1.001,1.001,0,0,1,29,45Zm13,1H37V43h6v2A1.001,1.001,0,0,1,42,46Z"
            style={{ fill: "#36c684" }}
          />
        </svg>
      ),
      type: "file",
      time: "01:00 PM",
      date: "Today",
      size: 3.5,
      ext: "application/vnd.ms-excel",
      starred: false,
    },
  },
  {
    id: 6,
    meta: {
      name: "Proposal.txt",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="50"
            x2="32"
            y2="50"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="46"
            y1="38"
            x2="32"
            y2="38"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="44"
            x2="32"
            y2="44"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="56"
            x2="32"
            y2="56"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="62"
            x2="32"
            y2="62"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="68"
            x2="32"
            y2="68"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="75"
            x2="32"
            y2="75"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "05:10 PM",
      date: "Today",
      type: "file",
      size: 93,
      starred: true,
      ext: "text/plain",
    },
    shared: {
      sharedTime: "05:10 AM",
      sharedDate: "5/8/2022",
    },
  },
  {
    id: 7,
    meta: {
      name: "2019 Projects.doc",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <path
            d="M49,61H23a5.0147,5.0147,0,0,1-5-5V16a5.0147,5.0147,0,0,1,5-5H40.9091L54,22.1111V56A5.0147,5.0147,0,0,1,49,61Z"
            style={{ fill: "#e3edfc" }}
          />
          <path
            d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
            style={{ fill: "#b7d0ea" }}
          />
          <path d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
          <path
            d="M42,31H30a3.0033,3.0033,0,0,0-3,3V45a3.0033,3.0033,0,0,0,3,3H42a3.0033,3.0033,0,0,0,3-3V34A3.0033,3.0033,0,0,0,42,31ZM29,38h6v3H29Zm8,0h6v3H37Zm6-4v2H37V33h5A1.001,1.001,0,0,1,43,34ZM30,33h5v3H29V34A1.001,1.001,0,0,1,30,33ZM29,45V43h6v3H30A1.001,1.001,0,0,1,29,45Zm13,1H37V43h6v2A1.001,1.001,0,0,1,42,46Z"
            style={{ fill: "#36c684" }}
          />
        </svg>
      ),
      type: "file",
      time: "09:59 AM",
      date: "3/5/2021",
      size: 1125,
      starred: false,
      ext: "text/plain",
      members: [
        { user: "Abu Bin", theme: "blue" },
        { user: "Courier Kay", theme: "purple", img: User4 },
        { user: "Kimberly May", theme: "purple", img: User2 },
        { user: "Illiash Hossain", theme: "purple" },
        { user: "Hao Limae", theme: "purple", img: User },
      ],
    },
  },
  {
    id: 8,
    meta: {
      name: "Update Data.pdf",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M57.16,60.13c-.77,0-1.53,0-2.28.08l-.82.07c-.28-.31-.55-.63-.81-1a32.06,32.06,0,0,1-4.11-6.94,28.83,28.83,0,0,0,.67-3.72,16.59,16.59,0,0,0-.49-7.29c-.29-.78-1-1.72-1.94-1.25S46.08,42.2,46,43.28a11,11,0,0,0,.12,2.63,20.88,20.88,0,0,0,.61,2.51c.23.76.49,1.51.77,2.25-.18.59-.37,1.16-.56,1.72-.46,1.28-1,2.49-1.43,3.65l-.74,1.7C44,59.52,43.18,61.26,42.25,63a27.25,27.25,0,0,0-5.72,2.85,12.36,12.36,0,0,0-2.26,2A4.33,4.33,0,0,0,33,70.24a1.62,1.62,0,0,0,.59,1.39,2.36,2.36,0,0,0,2,.27c2.19-.48,3.86-2.48,5.29-4.15a46.09,46.09,0,0,0,3.27-4.41h0a47.26,47.26,0,0,1,6.51-1.63c1.06-.18,2.15-.34,3.26-.44a15.74,15.74,0,0,0,2.54,2.07,11.65,11.65,0,0,0,2.28,1.16,15.78,15.78,0,0,0,2.45.65,7,7,0,0,0,1.3.07c1,0,2.4-.44,2.49-1.71a1.93,1.93,0,0,0-.2-1C64,61,61.33,60.55,60.1,60.34A17,17,0,0,0,57.16,60.13Zm-16,4.68c-.47.75-.91,1.44-1.33,2-1,1.48-2.2,3.25-3.9,3.91a3,3,0,0,1-1.2.22c-.4,0-.79-.21-.77-.69a2,2,0,0,1,.3-.89,5,5,0,0,1,.7-1,11.3,11.3,0,0,1,2.08-1.79,24.17,24.17,0,0,1,4.4-2.33C41.36,64.49,41.27,64.65,41.18,64.81ZM47,45.76a9.07,9.07,0,0,1-.07-2.38,6.73,6.73,0,0,1,.22-1.12c.1-.3.29-1,.61-1.13.51-.15.67,1,.73,1.36a15.91,15.91,0,0,1-.36,5.87c-.06.3-.13.59-.21.88-.12-.36-.24-.73-.35-1.09A19.24,19.24,0,0,1,47,45.76Zm3.55,15A46.66,46.66,0,0,0,45,62a14.87,14.87,0,0,0,1.38-2.39,29.68,29.68,0,0,0,2.42-5.92,28.69,28.69,0,0,0,3.87,6.15l.43.51C52.22,60.48,51.36,60.6,50.52,60.74Zm13.15,2.64c-.07.41-.89.65-1.27.71A6.84,6.84,0,0,1,59,63.74a10,10,0,0,1-2.15-1.06,12.35,12.35,0,0,1-1.9-1.51c.73,0,1.47-.07,2.21-.06a18.42,18.42,0,0,1,2.23.15,7.6,7.6,0,0,1,4,1.63C63.63,63.07,63.7,63.24,63.67,63.38Z"
            fill="#6576ff"
          />
        </svg>
      ),
      type: "file",
      time: "11:52 PM",
      time: "Yesterday",
      size: 350,
      starred: true,
      ext: "application/pdf",
      link: true,
    },
  },
  {
    id: 9,
    meta: {
      name: "Dashlite...1.2.zip",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="18" y="16" width="36" height="40" rx="5" ry="5" style={{ fill: "#e3edfc" }} />
            <path d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
            <rect x="32" y="20" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="25" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="30" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="35" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <path
              d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
              style={{ fill: "#7e95c4" }}
            />
            <path
              d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
              style={{ fill: "#7e95c4" }}
            />
          </g>
        </svg>
      ),
      type: "file",
      time: "01:52 PM",
      date: "Today",
      size: 48,
      starred: false,
      ext: "application/x-zip-compressed",
    },
    shared: {
      sharedTime: "01:25 AM",
      sharedDate: "3/3/2022",
    },
  },
  {
    id: 10,
    meta: {
      name: "Family.png",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            x="40"
            y="45"
            width="23"
            height="19"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            x="36"
            y="49"
            width="23"
            height="19"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="37 62.88 45.12 55.94 52.81 63.06 55.99 59.44 59 62.76"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            cx="52.11"
            cy="54.98"
            r="2.02"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "11:11 AM",
      date: "2/2/2022",
      size: 54,
      type: "file",
      ext: "img/png",
      starred: false,
    },
  },
  {
    id: 11,
    meta: {
      name: "Resume",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M57.16,60.13c-.77,0-1.53,0-2.28.08l-.82.07c-.28-.31-.55-.63-.81-1a32.06,32.06,0,0,1-4.11-6.94,28.83,28.83,0,0,0,.67-3.72,16.59,16.59,0,0,0-.49-7.29c-.29-.78-1-1.72-1.94-1.25S46.08,42.2,46,43.28a11,11,0,0,0,.12,2.63,20.88,20.88,0,0,0,.61,2.51c.23.76.49,1.51.77,2.25-.18.59-.37,1.16-.56,1.72-.46,1.28-1,2.49-1.43,3.65l-.74,1.7C44,59.52,43.18,61.26,42.25,63a27.25,27.25,0,0,0-5.72,2.85,12.36,12.36,0,0,0-2.26,2A4.33,4.33,0,0,0,33,70.24a1.62,1.62,0,0,0,.59,1.39,2.36,2.36,0,0,0,2,.27c2.19-.48,3.86-2.48,5.29-4.15a46.09,46.09,0,0,0,3.27-4.41h0a47.26,47.26,0,0,1,6.51-1.63c1.06-.18,2.15-.34,3.26-.44a15.74,15.74,0,0,0,2.54,2.07,11.65,11.65,0,0,0,2.28,1.16,15.78,15.78,0,0,0,2.45.65,7,7,0,0,0,1.3.07c1,0,2.4-.44,2.49-1.71a1.93,1.93,0,0,0-.2-1C64,61,61.33,60.55,60.1,60.34A17,17,0,0,0,57.16,60.13Zm-16,4.68c-.47.75-.91,1.44-1.33,2-1,1.48-2.2,3.25-3.9,3.91a3,3,0,0,1-1.2.22c-.4,0-.79-.21-.77-.69a2,2,0,0,1,.3-.89,5,5,0,0,1,.7-1,11.3,11.3,0,0,1,2.08-1.79,24.17,24.17,0,0,1,4.4-2.33C41.36,64.49,41.27,64.65,41.18,64.81ZM47,45.76a9.07,9.07,0,0,1-.07-2.38,6.73,6.73,0,0,1,.22-1.12c.1-.3.29-1,.61-1.13.51-.15.67,1,.73,1.36a15.91,15.91,0,0,1-.36,5.87c-.06.3-.13.59-.21.88-.12-.36-.24-.73-.35-1.09A19.24,19.24,0,0,1,47,45.76Zm3.55,15A46.66,46.66,0,0,0,45,62a14.87,14.87,0,0,0,1.38-2.39,29.68,29.68,0,0,0,2.42-5.92,28.69,28.69,0,0,0,3.87,6.15l.43.51C52.22,60.48,51.36,60.6,50.52,60.74Zm13.15,2.64c-.07.41-.89.65-1.27.71A6.84,6.84,0,0,1,59,63.74a10,10,0,0,1-2.15-1.06,12.35,12.35,0,0,1-1.9-1.51c.73,0,1.47-.07,2.21-.06a18.42,18.42,0,0,1,2.23.15,7.6,7.6,0,0,1,4,1.63C63.63,63.07,63.7,63.24,63.67,63.38Z"
            fill="#6576ff"
          />
        </svg>
      ),
      time: "01:52 PM",
      date: "4/5/2021",
      size: 7.5,
      starred: true,
      type: "file",
      ext: "application/pdf",
      link: true,
    },
  },
  {
    id: 12,
    meta: {
      name: "Quotation.doc",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="50"
            x2="32"
            y2="50"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="46"
            y1="38"
            x2="32"
            y2="38"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="44"
            x2="32"
            y2="44"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="56"
            x2="32"
            y2="56"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="62"
            x2="32"
            y2="62"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="68"
            x2="32"
            y2="68"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="75"
            x2="32"
            y2="75"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "04:52 PM",
      date: "8/12/2021",
      size: 88,
      starred: false,
      ext: "text/plain",
      type: "file",
    },
  },
  {
    id: 13,
    meta: {
      name: "Work-to-do.txt",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="50"
            x2="32"
            y2="50"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="46"
            y1="38"
            x2="32"
            y2="38"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="44"
            x2="32"
            y2="44"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="56"
            x2="32"
            y2="56"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="62"
            x2="32"
            y2="62"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="68"
            x2="32"
            y2="68"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="58"
            y1="75"
            x2="32"
            y2="75"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "01:12 PM",
      date: "Today",
      size: 23,
      type: "file",
      starred: false,
      ext: "text/plain",
      link: true,
      members: [
        { user: "Kim Southee", theme: "pink" },
        { user: "Illiash Hossain", theme: "purple" },
        { user: "Courier Kay", theme: "success", img: User3 },
      ],
    },
  },
  {
    id: 14,
    meta: {
      name: "Policy.doc",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="47"
            x2="31"
            y2="47"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="53"
            x2="31"
            y2="53"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="59"
            x2="31"
            y2="59"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="65"
            x2="31"
            y2="65"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="71"
            x2="31"
            y2="71"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "10:55 PM",
      date: "Today",
      size: 11,
      starred: false,
      type: "file",
      ext: "text/plain",
    },
    shared: {
      sharedTime: "10:55 PM",
      sharedDate: "15/12/2021",
    },
  },
  {
    id: 15,
    meta: {
      name: "covid19-widget.zip",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="18" y="16" width="36" height="40" rx="5" ry="5" style={{ fill: "#e3edfc" }} />
            <path d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
            <rect x="32" y="20" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="25" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="30" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="35" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <path
              d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
              style={{ fill: "#7e95c4" }}
            />
            <path
              d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
              style={{ fill: "#7e95c4" }}
            />
          </g>
        </svg>
      ),
      time: "09:16 AM",
      date: "Yesterday",
      size: 21,
      starred: false,
      type: "file",
      ext: "application/x-zip-compressed",
      link: true,
    },
    shared: {
      sharedTime: "09:16 PM",
      sharedDate: "15/3/2022",
    },
  },
  {
    id: 16,
    meta: {
      name: "Widget-Design.zip",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="18" y="16" width="36" height="40" rx="5" ry="5" style={{ fill: "#e3edfc" }} />
            <path d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
            <rect x="32" y="20" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="25" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="30" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <rect x="32" y="35" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
            <path
              d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
              style={{ fill: "#7e95c4" }}
            />
            <path
              d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
              style={{ fill: "#7e95c4" }}
            />
          </g>
        </svg>
      ),
      time: "09:16 AM",
      date: "Yesterday",
      size: 10,
      starred: false,
      type: "file",
      ext: "application/x-zip-compressed",
      link: false,
    },
    recovery: {
      deletedOn: "11:12 PM",
      deletedAt: "12/12/2021",
    },
  },
  {
    id: 17,
    meta: {
      name: "project-work-list.doc",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="47"
            x2="31"
            y2="47"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="53"
            x2="31"
            y2="53"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="59"
            x2="31"
            y2="59"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="65"
            x2="31"
            y2="65"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="71"
            x2="31"
            y2="71"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "09:16 AM",
      date: "Yesterday",
      size: 110,
      starred: false,
      type: "file",
      ext: "text/plain",
      link: false,
    },
    recovery: {
      deletedOn: "02:45 AM",
      deletedAt: "Yesterday",
    },
  },
  {
    id: 18,
    meta: {
      name: "Land-deed.doc",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            x="15"
            y="5"
            width="56"
            height="70"
            rx="6"
            ry="6"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <polyline
            points="60 16 60 31 75 31.07"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="47"
            x2="31"
            y2="47"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="53"
            x2="31"
            y2="53"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="59"
            x2="31"
            y2="59"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="65"
            x2="31"
            y2="65"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            x1="69"
            y1="71"
            x2="31"
            y2="71"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      time: "09:16 AM",
      date: "Yesterday",
      size: 256,
      starred: false,
      type: "file",
      ext: "text/plain",
      link: false,
    },
    recovery: {
      deletedOn: "08:29 AM",
      deletedAt: "Today",
    },
  },
  {
    id: 19,
    meta: {
      name: "Backup Folder",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="32" y="16" width="28" height="15" rx="2.5" ry="2.5" style={{ fill: "#f29611" }} />
            <path
              d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
              style={{ fill: "#ffb32c" }}
            />
            <path
              d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
              style={{ fill: "#f2a222" }}
            />
          </g>
        </svg>
      ),
      time: "09:16 AM",
      date: "Yesterday",
      size: 3050,
      starred: false,
      type: "folder",
      link: false,
    },
    subFolder: [{ fileId: 11 }, { fileId: 12 }, { fileId: 13 }, { fileId: 14 }],
    recovery: {
      deletedOn: "07:19 AM",
      deletedAt: "Today",
    },
  },
  {
    id: 20,
    meta: {
      name: "Ui/UX Designs",
      checked: false,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
          <g>
            <rect x="32" y="16" width="28" height="15" rx="2.5" ry="2.5" style={{ fill: "#f29611" }} />
            <path
              d="M59.7778,61H12.2222A6.4215,6.4215,0,0,1,6,54.3962V17.6038A6.4215,6.4215,0,0,1,12.2222,11H30.6977a4.6714,4.6714,0,0,1,4.1128,2.5644L38,24H59.7778A5.91,5.91,0,0,1,66,30V54.3962A6.4215,6.4215,0,0,1,59.7778,61Z"
              style={{ fill: "#ffb32c" }}
            />
            <path
              d="M8.015,59c2.169,2.3827,4.6976,2.0161,6.195,2H58.7806a6.2768,6.2768,0,0,0,5.2061-2Z"
              style={{ fill: "#f2a222" }}
            />
          </g>
        </svg>
      ),
      time: "09:16 AM",
      date: "Yesterday",
      size: 2050,
      starred: false,
      type: "folder",
      link: false,
    },
    subFolder: [{ fileId: 16 }, { fileId: 11 }, { fileId: 12 }, { fileId: 13 }, { fileId: 14 }],
    recovery: {
      deletedOn: "10:29 PM",
      deletedAt: "Sunday",
    },
  },
];

export const svgSelect = {
  "application/x-zip-compressed": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <g>
        <rect x="18" y="16" width="36" height="40" rx="5" ry="5" style={{ fill: "#e3edfc" }} />
        <path d="M19.03,54A4.9835,4.9835,0,0,0,23,56H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
        <rect x="32" y="20" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
        <rect x="32" y="25" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
        <rect x="32" y="30" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
        <rect x="32" y="35" width="8" height="2" rx="1" ry="1" style={{ fill: "#7e95c4" }} />
        <path
          d="M35,16.0594h2a0,0,0,0,1,0,0V41a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V16.0594A0,0,0,0,1,35,16.0594Z"
          style={{ fill: "#7e95c4" }}
        />
        <path
          d="M38.0024,40H33.9976A1.9976,1.9976,0,0,0,32,41.9976v2.0047A1.9976,1.9976,0,0,0,33.9976,46h4.0047A1.9976,1.9976,0,0,0,40,44.0024V41.9976A1.9976,1.9976,0,0,0,38.0024,40Zm-.0053,4H34V42h4Z"
          style={{ fill: "#7e95c4" }}
        />
      </g>
    </svg>
  ),
  "text/plain": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <rect
        x="15"
        y="5"
        width="56"
        height="70"
        rx="6"
        ry="6"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="60 16 60 31 75 31.07"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="58"
        y1="50"
        x2="32"
        y2="50"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="46"
        y1="38"
        x2="32"
        y2="38"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="44"
        x2="32"
        y2="44"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="56"
        x2="32"
        y2="56"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="58"
        y1="62"
        x2="32"
        y2="62"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="68"
        x2="32"
        y2="68"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="58"
        y1="75"
        x2="32"
        y2="75"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  "application/pdf": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <rect
        x="15"
        y="5"
        width="56"
        height="70"
        rx="6"
        ry="6"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="60 16 60 31 75 31.07"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M57.16,60.13c-.77,0-1.53,0-2.28.08l-.82.07c-.28-.31-.55-.63-.81-1a32.06,32.06,0,0,1-4.11-6.94,28.83,28.83,0,0,0,.67-3.72,16.59,16.59,0,0,0-.49-7.29c-.29-.78-1-1.72-1.94-1.25S46.08,42.2,46,43.28a11,11,0,0,0,.12,2.63,20.88,20.88,0,0,0,.61,2.51c.23.76.49,1.51.77,2.25-.18.59-.37,1.16-.56,1.72-.46,1.28-1,2.49-1.43,3.65l-.74,1.7C44,59.52,43.18,61.26,42.25,63a27.25,27.25,0,0,0-5.72,2.85,12.36,12.36,0,0,0-2.26,2A4.33,4.33,0,0,0,33,70.24a1.62,1.62,0,0,0,.59,1.39,2.36,2.36,0,0,0,2,.27c2.19-.48,3.86-2.48,5.29-4.15a46.09,46.09,0,0,0,3.27-4.41h0a47.26,47.26,0,0,1,6.51-1.63c1.06-.18,2.15-.34,3.26-.44a15.74,15.74,0,0,0,2.54,2.07,11.65,11.65,0,0,0,2.28,1.16,15.78,15.78,0,0,0,2.45.65,7,7,0,0,0,1.3.07c1,0,2.4-.44,2.49-1.71a1.93,1.93,0,0,0-.2-1C64,61,61.33,60.55,60.1,60.34A17,17,0,0,0,57.16,60.13Zm-16,4.68c-.47.75-.91,1.44-1.33,2-1,1.48-2.2,3.25-3.9,3.91a3,3,0,0,1-1.2.22c-.4,0-.79-.21-.77-.69a2,2,0,0,1,.3-.89,5,5,0,0,1,.7-1,11.3,11.3,0,0,1,2.08-1.79,24.17,24.17,0,0,1,4.4-2.33C41.36,64.49,41.27,64.65,41.18,64.81ZM47,45.76a9.07,9.07,0,0,1-.07-2.38,6.73,6.73,0,0,1,.22-1.12c.1-.3.29-1,.61-1.13.51-.15.67,1,.73,1.36a15.91,15.91,0,0,1-.36,5.87c-.06.3-.13.59-.21.88-.12-.36-.24-.73-.35-1.09A19.24,19.24,0,0,1,47,45.76Zm3.55,15A46.66,46.66,0,0,0,45,62a14.87,14.87,0,0,0,1.38-2.39,29.68,29.68,0,0,0,2.42-5.92,28.69,28.69,0,0,0,3.87,6.15l.43.51C52.22,60.48,51.36,60.6,50.52,60.74Zm13.15,2.64c-.07.41-.89.65-1.27.71A6.84,6.84,0,0,1,59,63.74a10,10,0,0,1-2.15-1.06,12.35,12.35,0,0,1-1.9-1.51c.73,0,1.47-.07,2.21-.06a18.42,18.42,0,0,1,2.23.15,7.6,7.6,0,0,1,4,1.63C63.63,63.07,63.7,63.24,63.67,63.38Z"
        fill="#6576ff"
      />
    </svg>
  ),
  "application/vnd.ms-excel": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        d="M49,61H23a5.0147,5.0147,0,0,1-5-5V16a5.0147,5.0147,0,0,1,5-5H40.9091L54,22.1111V56A5.0147,5.0147,0,0,1,49,61Z"
        style={{ fill: "#e3edfc" }}
      />
      <path
        d="M54,22.1111H44.1818a3.3034,3.3034,0,0,1-3.2727-3.3333V11s1.8409.2083,6.9545,4.5833C52.8409,20.0972,54,22.1111,54,22.1111Z"
        style={{ fill: "#b7d0ea" }}
      />
      <path d="M19.03,59A4.9835,4.9835,0,0,0,23,61H49a4.9835,4.9835,0,0,0,3.97-2Z" style={{ fill: "#c4dbf2" }} />
      <path
        d="M42,31H30a3.0033,3.0033,0,0,0-3,3V45a3.0033,3.0033,0,0,0,3,3H42a3.0033,3.0033,0,0,0,3-3V34A3.0033,3.0033,0,0,0,42,31ZM29,38h6v3H29Zm8,0h6v3H37Zm6-4v2H37V33h5A1.001,1.001,0,0,1,43,34ZM30,33h5v3H29V34A1.001,1.001,0,0,1,30,33ZM29,45V43h6v3H30A1.001,1.001,0,0,1,29,45Zm13,1H37V43h6v2A1.001,1.001,0,0,1,42,46Z"
        style={{ fill: "#36c684" }}
      />
    </svg>
  ),
  "img/png": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <rect
        x="15"
        y="5"
        width="56"
        height="70"
        rx="6"
        ry="6"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="60 16 60 31 75 31.07"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="40"
        y="45"
        width="23"
        height="19"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="36"
        y="49"
        width="23"
        height="19"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="37 62.88 45.12 55.94 52.81 63.06 55.99 59.44 59 62.76"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="52.11"
        cy="54.98"
        r="2.02"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  "img/jpeg": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <rect
        x="15"
        y="5"
        width="56"
        height="70"
        rx="6"
        ry="6"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="60 16 60 31 75 31.07"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="40"
        y="45"
        width="23"
        height="19"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="36"
        y="49"
        width="23"
        height="19"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="37 62.88 45.12 55.94 52.81 63.06 55.99 59.44 59 62.76"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="52.11"
        cy="54.98"
        r="2.02"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  "img/jpg": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <rect
        x="15"
        y="5"
        width="56"
        height="70"
        rx="6"
        ry="6"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="60 16 60 31 75 31.07"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="40"
        y="45"
        width="23"
        height="19"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="36"
        y="49"
        width="23"
        height="19"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="37 62.88 45.12 55.94 52.81 63.06 55.99 59.44 59 62.76"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="52.11"
        cy="54.98"
        r="2.02"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
  others: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <rect
        x="15"
        y="5"
        width="56"
        height="70"
        rx="6"
        ry="6"
        fill="#e3e7fe"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M69.88,85H30.12A6.06,6.06,0,0,1,24,79V21a6.06,6.06,0,0,1,6.12-6H59.66L76,30.47V79A6.06,6.06,0,0,1,69.88,85Z"
        fill="#fff"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polyline
        points="60 16 60 31 75 31.07"
        fill="none"
        stroke="#6576ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="58"
        y1="50"
        x2="32"
        y2="50"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="46"
        y1="38"
        x2="32"
        y2="38"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="44"
        x2="32"
        y2="44"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="56"
        x2="32"
        y2="56"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="58"
        y1="62"
        x2="32"
        y2="62"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="68"
        x2="32"
        y2="68"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="58"
        y1="75"
        x2="32"
        y2="75"
        fill="none"
        stroke="#c4cefe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ),
};

export const selectFolderTypes = [
  {
    id: 1,
    value: "general",
    label: "General",
    svg: <Folder />,
  },
  {
    id: 2,
    value: "shared",
    label: "Shared",
    svg: <FolderShare />,
  },
  {
    id: 3,
    value: "secure",
    label: "Secure",
    svg: <FolderSecure />,
  },
];

export const selectOptions = [
  {
    id: 1,
    value: "Illiash Hossain",
    label: "Illiash Hossain",
  },
  {
    id: 2,
    value: "Abu Bin Ishtiak",
    label: "Abu Bin Ishtiak",
  },
  {
    id: 3,
    value: "George Phillips",
    label: "George Phillps",
  },
];

export const pricingTableDataV2 = [
  {
    id: 1,
    title: "Starter",
    logo: PlanS1,
    desc: "If you are a small business amn please select this plan",
    amount: 99,
    memory: 25,
    userNumber: 1,
    tags: false,
  },
  {
    id: 2,
    title: "Pro",
    logo: PlanS2,
    desc: "If you are a small business amn please select this plan",
    amount: 299,
    userNumber: 5,
    memory: 50,
    tags: true,
  },
  {
    id: 3,
    title: "Enterprise",
    logo: PlanS3,
    desc: "If you are a small business amn please select this plan",
    amount: 599,
    userNumber: 20,
    memory: 75,
    tags: false,
  },
  {
    id: 4,
    title: "Premium",
    logo: PlanS1,
    desc: "If you are a small business amn please select this plan",
    amount: 999,
    memory: 100,
    userNumber: "Unlimited",
    tags: false,
  },
];

export const selectLanguageOptions = [
  {
    id: 0,
    label: "English (United States)",
    value: "English (United States)",
  },
  {
    id: 1,
    label: "English (United Kingdom)",
    value: "English (United Kingdom)",
  },
  {
    id: 2,
    label: "French",
    value: "French",
  },
  {
    id: 3,
    label: "Spanish",
    value: "Spanish",
  },
  {
    id: 4,
    label: "Chinese",
    value: "Chinese",
  },
  {
    id: 5,
    label: "Bangla",
    value: "Bangla",
  },
];

export const selectDateFormat = [
  {
    id: 0,
    label: "MM/DD/YYYY",
    value: "MM/DD/YYYY",
  },
  {
    id: 1,
    label: "DD/MM/YYYY",
    value: "DD/MM/YYYY",
  },
  {
    id: 2,
    label: "YYYY/MM/DD",
    value: "YYYY/MM/DD",
  },
];

export const selectTimezoneFormat = [
  {
    id: 0,
    label: "Bangladesh (GMT +6)",
    value: "Bangladesh (GMT +6)",
  },
  {
    id: 1,
    label: "United Kingdom (GMT +0)",
    value: "United Kingdom (GMT +0)",
  },
  {
    id: 2,
    label: "Spain (GMT +1)",
    value: "Spain (GMT +1)",
  },
  {
    id: 6,
    label: "China (GMT +8)",
    value: "China (GMT +8)",
  },
  {
    id: 4,
    label: "Australia (GMT +9)",
    value: "Australia (GMT +9)",
  },
  {
    id: 3,
    label: "Brazil (GMT -3)",
    value: "Brazil (GMT -3)",
  },
  {
    id: 5,
    label: "United States (GMT -8)",
    value: "United States (GMT -8)",
  },
];
