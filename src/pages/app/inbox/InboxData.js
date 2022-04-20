import User from "../../../images/avatar/a-sm.jpg";
import User1 from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/d-sm.jpg";

export const inboxList = [
  {
    id: 1,
    userId: 1,
    message: {
      subject: "Introducing New Dashboard",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Management", color: "danger" },
          { text: "Team", color: "info" },
        ],
        inbox: true,
        checked: false,
        unread: true,
        favourite: false,
        archived: false,
        trash: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { user: 8, bcc: "team@softnio.com" },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 8,
          to: { user: 1, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: [
            "Hello",
            "You valued response is very welcome, Our team will go over the issues that you have discussed and resolve it as soon as possible",
            "Thank you",
          ],
        },
        {
          replyId: "rep_3",
          userId: 1,
          to: { user: 8, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: ["okayy", "Please let me know as soon as possible", "Thank you"],
        },
      ],
    },
  },
  {
    id: 2,
    userId: 5,
    message: {
      subject: "Email Forwarding",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Management", color: "danger" },
        ],
        inbox: false,
        unread: false,
        checked: false,
        favourite: false,
        archived: false,
        trash: true,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { user: 5, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: [
            "Hello team",
            "I need to know to whom I can forward the email relating problems faced",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 5,
          to: { user: 1, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: ["Hey there", "Our team is working on the issue please wait", "Thank you"],
        },
        {
          replyId: "rep_3",
          userId: 1,
          to: { user: 5, bcc: "team@softnio.com" },
          attachment: [{ fileName: "mail-error.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: ["Thank you"],
        },
      ],
    },
  },
  {
    id: 3,
    userId: 6,
    message: {
      subject: "Modal and Alert Design",
      meta: {
        tags: [{ text: "Mail", color: "warning" }],
        inbox: true,
        unread: false,
        checked: false,
        favourite: false,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 6,
          to: { user: 8 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello Mildred",
            "There seems to be an issue with the alert and modal popups with your applications",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 8,
          to: { user: 6 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hi",
            "Can you provide some screenshots or videos relating to the problem, it works fine in our end",
            "Thank you",
          ],
        },
        {
          replyId: "rep_3",
          userId: 6,
          to: { user: 8 },
          attachment: [{ fileName: "error-file.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Please check attached files.", "Thank you"],
        },
      ],
    },
  },
  {
    id: 4,
    userId: 7,
    message: {
      subject: "Laravel Developer",
      meta: {
        tags: [
          { text: "Management", color: "danger" },
          { text: "Mail", color: "warning" },
          { text: "Team", color: "info" },
        ],
        inbox: true,
        unread: false,
        checked: false,
        favourite: false,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 7,
          to: { user: 6, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "I am looking to hire an experienced laravel developer, do you guys have anyone to recommend?",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 7, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Thanks for your query",
            "Naturally, we do not provide any developers, since we are not an HR agency",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    userId: 7,
    message: {
      subject: "TokenWiz-NewPage",
      meta: {
        tags: [
          { text: "Team", color: "info" },
          { text: "Mail", color: "warning" },
        ],
        inbox: true,
        unread: false,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 7,
          to: { user: 6 },
          attachment: [{ fileName: "page-error.jpg" }, { fileName: "new-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "I am facing problem with the creation of a new page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 7 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hello", "Our team is looking into it", "Thank you"],
        },
      ],
    },
  },
  {
    id: 6,
    userId: 5,
    message: {
      subject: "TokenListe Promo Asset",
      meta: {
        tags: [],
        inbox: true,
        unread: false,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 5,
          to: { user: 6, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hello team", "Can you guys provide me with a Promo for tokenListe.", "Thank you"],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 5, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Sorry", "We currently do not have any codes", "Thank you"],
        },
      ],
    },
  },
  {
    id: 7,
    userId: 8,
    message: {
      subject: "TokenPage Content",
      meta: {
        tags: [
          { text: "Management", color: "danger" },
          { text: "Team", color: "info" },
        ],
        inbox: true,
        unread: true,
        checked: false,
        favourite: false,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 8,
          to: { user: 6, bcc: "team@softnio.com" },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hello team", "I need to add some content in the tokenPage", "Thank you"],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 8, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hi", "Can you specify which application you are taking about?", "Thank you"],
        },
        {
          replyId: "rep_3",
          userId: 8,
          to: { user: 6, bcc: "team@softnio.com" },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hello team", "Please check attached files.", "Thank you"],
        },
      ],
    },
  },
  {
    id: 8,
    userId: 1,
    message: {
      subject: "Feedback about license and policies",
      meta: {
        tags: [{ text: "Team", color: "info" }],
        inbox: true,
        unread: false,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { user: 6 },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "Can you clear out some of the policies, I am facing difficulties understanding them.",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 1 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Yes sure", "Can you elaborate your concern?", "Thank you"],
        },
        {
          replyId: "rep_3",
          userId: 1,
          to: { user: 6 },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "Point number two is where i cant get my head around!, Look at the screenshots",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 9,
    userId: 2,
    message: {
      subject: "Thank you for completion of survey",
      meta: {
        tags: [],
        inbox: true,
        unread: false,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 2,
          to: { user: 3 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hi there", "Just wanted to show our gratitude you for completion of the survey", "Thank you"],
        },
        {
          replyId: "rep_2",
          userId: 3,
          to: { user: 2 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Welcome"],
        },
      ],
    },
  },
  {
    id: 10,
    userId: 5,
    message: {
      subject: "Email template for correction",
      meta: {
        tags: [{ text: "Team", color: "info" }],
        inbox: true,
        unread: false,
        checked: false,
        favourite: false,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 5,
          to: { user: 1 },
          attachment: [{ fileName: "template1.jpg" }, { fileName: "template2.jpg" }, { fileName: "template3.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "The email template given initially is not correct, i need to change it. Here is the new attached files.",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 1,
          to: { user: 5 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Thank you", "We will fix it right away. However this may take several days"],
        },
      ],
    },
  },
  {
    id: 11,
    userId: 6,
    message: {
      subject: "Draft for bank statements",
      meta: {
        tags: [
          { text: "Mail", color: "warning" },
          { text: "Business", color: "primary" },
        ],
        draft: false,
        inbox: true,
        unread: true,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 6,
          to: { user: 7 },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello Larry",
            "I need a sample draft for bank statements as soon as possible. I have already asked for this, many weeks ago, please hurry up. Here is the sample again",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 7,
          to: { user: 6 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hey Sorry",
            "I was really busy the last few weeks, I will give it to you in the coming few days.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 12,
    userId: 1,
    message: {
      subject: "Investrom Account Details",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Team", color: "info" },
        ],
        sent: true,
        unread: false,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { user: 4, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "Could you guys provide a demo account details so that I can test things out, many things are not making sense from the user end",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 4,
          to: { user: 1, bcc: "team@softnio.com" },
          attachment: [{ fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hey there",
            "Well, there are many factors, I would recommend to watch some crypto related videos to have a better understanding, Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 13,
    userId: 1,
    message: {
      subject: "Themeforest Account",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Team", color: "info" },
        ],
        unread: false,
        checked: false,
        draft: true,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { mail: "" },
          date: "14 Jan, 2020",
          time: "05:45 PM",
          replyMessage: ["I have been facing trouble since yesterday to open my account"],
        },
      ],
    },
  },
  {
    id: 14,
    userId: 1,
    message: {
      subject: "Grateful Reply",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Team", color: "info" },
        ],
        unread: false,
        checked: false,
        draft: true,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { mail: "" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Thank you for taking our time to mailing your issue, we will go though the problem"],
        },
      ],
    },
  },
  {
    id: 15,
    userId: 1,
    message: {
      subject: "Grateful Reply",
      meta: {
        tags: [],
        unread: false,
        checked: false,
        draft: true,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { mail: "" },
          date: "01 Feb, 2020",
          time: "07:39 PM",
          replyMessage: ["Is it possible to talk for a few minutes"],
        },
      ],
    },
  },
  {
    id: 16,
    userId: 1,
    message: {
      subject: "Approach a customer",
      meta: {
        tags: [{ text: "Team", color: "info" }],
        unread: false,
        checked: false,
        draft: true,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { mail: "info@softnio.com" },
          date: "11 Jan, 2020",
          time: "10:30 AM",
          replyMessage: ["I would like to decline an offer made"],
        },
      ],
    },
  },
  {
    id: 21,
    userId: 7,
    message: {
      subject: "TokenWiz-NewPage",
      meta: {
        tags: [
          { text: "Team", color: "info" },
          { text: "Mail", color: "warning" },
        ],
        inbox: true,
        unread: false,
        checked: false,
        favourite: true,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 7,
          to: { user: 6 },
          attachment: [{ fileName: "page-error.jpg" }, { fileName: "new-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "I am facing problem with the creation of a new page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 7 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Hello", "Our team is looking into it", "Thank you"],
        },
      ],
    },
  },
  {
    id: 17,
    userId: 1,
    message: {
      subject: "Introducing New Dashboard",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Management", color: "danger" },
          { text: "Team", color: "info" },
        ],
        inbox: true,
        checked: false,
        unread: true,
        favourite: false,
        archived: false,
        trash: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { user: 8, bcc: "team@softnio.com" },
          attachment: [{ fileName: "error-file.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 8,
          to: { user: 1, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: [
            "Hello",
            "You valued response is very welcome, Our team will go over the issues that you have discussed and resolve it as soon as possible",
            "Thank you",
          ],
        },
        {
          replyId: "rep_3",
          userId: 1,
          to: { user: 8, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: ["okayy", "Please let me know as soon as possible", "Thank you"],
        },
      ],
    },
  },
  {
    id: 18,
    userId: 5,
    message: {
      subject: "Email Forwarding",
      meta: {
        tags: [
          { text: "Business", color: "primary" },
          { text: "Management", color: "danger" },
        ],
        inbox: false,
        unread: true,
        checked: false,
        favourite: false,
        archived: false,
        trash: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 1,
          to: { user: 5, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: [
            "Hello team",
            "I need to know to whom I can forward the email relating problems faced",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 5,
          to: { user: 1, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: ["Hey there", "Our team is working on the issue please wait", "Thank you"],
        },
        {
          replyId: "rep_3",
          userId: 1,
          to: { user: 5, bcc: "team@softnio.com" },
          attachment: [{ fileName: "mail-error.jpg" }, { fileName: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          replyMessage: ["Thank you"],
        },
      ],
    },
  },
  {
    id: 19,
    userId: 6,
    message: {
      subject: "Modal and Alert Design",
      meta: {
        tags: [{ text: "Mail", color: "warning" }],
        inbox: true,
        unread: false,
        checked: false,
        favourite: false,
        archived: false,
        trash: true,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 6,
          to: { user: 8 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello Mildred",
            "There seems to be an issue with the alert and modal popups with your applications",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 8,
          to: { user: 6 },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hi",
            "Can you provide some screenshots or videos relating to the problem, it works fine in our end",
            "Thank you",
          ],
        },
        {
          replyId: "rep_3",
          userId: 6,
          to: { user: 8 },
          attachment: [{ fileName: "error-file.jpg" }],
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: ["Please check attached files.", "Thank you"],
        },
      ],
    },
  },
  {
    id: 20,
    userId: 7,
    message: {
      subject: "Laravel Developer",
      meta: {
        tags: [
          { text: "Management", color: "danger" },
          { text: "Mail", color: "warning" },
          { text: "Team", color: "info" },
        ],
        inbox: true,
        unread: false,
        checked: false,
        favourite: false,
        archived: false,
      },
      reply: [
        {
          replyId: "rep_1",
          userId: 7,
          to: { user: 6, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Hello team",
            "I am looking to hire an experienced laravel developer, do you guys have anyone to recommend?",
            "Thank you",
          ],
        },
        {
          replyId: "rep_2",
          userId: 6,
          to: { user: 7, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "09:30 AM",
          replyMessage: [
            "Thanks for your query",
            "Naturally, we do not provide any developers, since we are not an HR agency",
            "Thank you",
          ],
        },
      ],
    },
  },
];

export const draftList = [
  {
    id: 1,
    meta: {
      time: "05:45 PM",
      subject: "Decline a job offer",
      message: "I have been facing trouble since yesterday to open my account",
      tags: ["Business"],
      checked: false,
    },
  },
  {
    id: 2,
    meta: {
      time: "07:45 PM",
      subject: "Grateful Reply",
      message: "Thank you for taking our time to mailing your issue, we will go though the problem",
      tags: ["Management"],
      checked: false,
    },
  },
  {
    id: 3,
    meta: {
      time: "10:10 PM",
      subject: "Approach a customer",
      message: "Is it possible to talk for a few minutes",
      tags: [""],
      checked: false,
    },
  },
  {
    id: 4,
    meta: {
      time: "01:32 AM",
      subject: "Decline a job offer",
      message: "I would like to decline an offer made",
      tags: ["Mail"],
      checked: false,
    },
  },
];

export const navData = [
  {
    name: "Inbox",
    icon: "inbox",
    badge: {
      text: function () {
        let defaultData = inboxList.filter((item) => item.message.meta.inbox === true);
        return defaultData.length;
      },
      theme: "primary",
    },
  },
  {
    name: "Draft",
    icon: "edit",
    badge: {
      text: function () {
        let defaultData = inboxList.filter((item) => item.message.meta.draft === true);
        return defaultData.length;
      },
      theme: "light",
    },
  },
  {
    name: "Favourite",
    icon: "star",
  },
  {
    name: "Sent",
    icon: "send",
  },
  {
    name: "Archive",
    icon: "archive",
  },
  {
    name: "Spam",
    icon: "alert",
  },
  {
    name: "Trash",
    icon: "trash",
    badge: {
      text: function () {
        let defaultData = inboxList.filter((item) => item.message.meta.trash === true);
        return defaultData.length;
      },
      theme: "danger badge-dim",
    },
  },
  {
    name: "All Mails",
    icon: "emails",
  },
];

export const inboxLabels = [
  {
    id: 1,
    text: "Business",
    color: "primary",
  },
  {
    id: 2,
    text: "Management",
    color: "danger",
  },
  {
    id: 3,
    text: "Team",
    color: "info",
  },
  {
    id: 4,
    text: "Mail",
    color: "warning",
  },
];

export const colourOptions = [
  { value: "primary", label: "Primary" },
  { value: "success", label: "Success" },
  { value: "info", label: "Info" },
  { value: "warning", label: "Warning" },
  { value: "danger", label: "Danger" },
  { value: "secondary", label: "Secondary" },
];

export const contacts = [
  {
    id: 1,
    name: "Abu Bin Ishtiyak",
    img: User,
    theme: "primary",
    designation: "CEO of Softnio",
    mail: "info@softnio.com",
  },
  {
    id: 2,
    name: "Dora Schmidt",
    img: User1,
    theme: "primary",
    designation: "VP Product Imagelab",
    mail: "dora@softnio.com",
  },
  {
    id: 3,
    name: "Jessica Fowler",
    img: User2,
    theme: "primary",
    designation: "Developer at Softnio",
    mail: "jess@softnio.com",
  },
  {
    id: 4,
    name: "Eula Flowers",
    img: User3,
    theme: "primary",
    designation: "Co-Founder of Vitzo",
    mail: "flowers@vitzo.com",
  },
  {
    id: 5,
    name: "Ricardo Salazar",
    img: User1,
    theme: "primary",
    designation: "",
    mail: "salazar@softnio.com",
  },
  {
    id: 6,
    name: "Larry Hughes",
    theme: "primary",
    designation: "",
    mail: "larry@softnio.com",
  },
  {
    id: 7,
    name: "Laura Mathews",
    theme: "primary",
    img: User3,
    designation: "",
    mail: "mathews@softnio.com",
  },
  {
    id: 8,
    name: "Mildred Delgado",
    theme: "blue",
    img: User2,
    designation: "",
    mail: "mildred@softnio.com",
  },
];

export const formTemplates = [
  {
    id: 0,
    text: "Thank you message",
  },
  {
    id: 1,
    text: "Your issues solved",
  },
  {
    id: 2,
    text: "Welcome message",
  },
];
