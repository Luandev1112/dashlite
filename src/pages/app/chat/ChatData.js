import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/d-sm.jpg";
import User4 from "../../../images/avatar/a-sm.jpg";

export const chatUserData = [
  {
    id: 1,
    user: "Illiash Hossain",
    active: true,
    theme: "primary",
  },
  {
    id: 2,
    user: "Abu Bin Ishtiak",
    active: true,
    theme: "blue",
  },
  {
    id: 3,
    user: "George Phillips",
    active: true,
    image: User,
    theme: "pink",
  },
  {
    id: 4,
    name: "Larry Hughes",
    image: User2,
    active: true,
    theme: "purple",
  },
  {
    id: 5,
    name: "Tammy Wilson",
    theme: "purple",
    active: true,
  },
  {
    id: 6,
    name: "Softnio Group",
    group: true,
    theme: "purple",
    active: false,
  },
  {
    id: 7,
    user: "Emile Clarke",
    active: true,
    image: User4,
  },
  {
    id: 8,
    user: "Shakel Krosser",
    theme: "info",
    active: true,
  },
  {
    id: 9,
    user: "Kumar Kamal",
    theme: "info",
    active: true,
  },
];

export const chatData = [
  {
    id: 1,
    name: "Illiash Hossain",
    nickname: "",
    theme: "purple",
    chatTheme: "purple",
    fav: true,
    active: "30m",
    date: "Now",
    unread: false,
    archive: false,
    delivered: true,
    convo: [
      {
        id: "chat_1",
        chat: ["Hello!", "I found an issues when try to purchase the product."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        id: "chat_2",
        me: true,
        chat: ["Thanks for inform. We just solved the issues. Please check now."],
        date: "29 Apr, 2020 4:12 PM",
      },
      {
        id: "chat_3",
        chat: ["This is really cool.", "It’s perfect. Thanks for letting me know."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        meta: {
          metaID: "meta_1",
          metaText: "12 May, 2020",
        },
      },
      {
        id: "chat_4",
        chat: ["Hey, I am facing problem as i can not login into application. Can you help me to reset my password?"],
        date: "3:49 PM",
      },
      {
        id: "chat_5",
        me: true,
        date: "3:55 PM",
        chat: ["Definately. We are happy to help you."],
      },
      {
        id: "chat_6",
        date: "3:55 PM",
        chat: ["Thank you! Let me know when it done."],
      },
      {
        id: "chat_7",
        date: "3:55 PM",
        me: true,
        now: true,
        chat: [
          "We just reset your account. Please check your email for verification.",
          "Please confirm if your got email",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Abu Bin Ishtiak",
    nickname: "",
    theme: "blue",
    chatTheme: "purple",
    date: "4.39 Am",
    active: "60m",
    unread: true,
    archive: false,
    fav: true,
    delivered: true,
    convo: [
      {
        id: "chat_1",
        chat: ["Hi I am Ishtiak, can you help me with something?"],
        date: "4:49 AM",
      },
      {
        id: "chat_2",
        me: true,
        chat: ["Thanks for inform. We just solved the issues. Please check now."],
        date: "4:12 PM",
      },
      {
        id: "chat_3",
        chat: ["This is really cool.", "It’s perfect. Thanks for letting me know."],
        date: "4:28 PM",
      },
    ],
  },
  {
    id: 3,
    name: "George Philips",
    nickname: "",
    image: User,
    chatTheme: "purple",
    fav: true,
    date: "6 Apr",
    unread: false,
    archive: false,
    active: true,
    delivered: true,
    convo: [
      {
        id: "chat_1",
        chat: ["Have you seens the claim from Rose?"],
        date: "6 Apr",
      },
      {
        id: "chat_3",
        me: true,
        chat: ["No I haven't. I will look into it", "It’s perfect. Thanks for letting me know."],
        date: "4:28 PM",
      },
    ],
  },
  {
    id: 4,
    name: "Larry Hughes",
    nickname: "",
    image: User2,
    fav: true,
    chatTheme: "purple",
    unread: false,
    archive: true,
    date: "19 Apr",
    active: true,
    delivered: "unread",
    convo: [
      {
        id: "chat_1",
        chat: ["Hi Frank! How is you doing?"],
        date: "3 Apr",
      },
      {
        id: "chat_3",
        me: true,
        chat: ["Hey, I have been great. It has been a long time.", "How have you been doing?."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        id: "chat_4",
        chat: ["Great.", "How's is work going?. Are you going abroad?"],
        date: "29 Apr, 2020 4:28 PM",
      },
    ],
  },
  {
    id: 5,
    name: "Tammy Wilson",
    nickname: "",
    theme: "pink",
    chatTheme: "purple",
    active: true,
    fav: true,
    unread: false,
    archive: true,
    date: "2 May",
    delivered: "sent",
    convo: [
      {
        id: "chat_1",
        me: true,
        chat: ["I just bought a new computer but i am having some problem"],
        date: "27 Mar",
      },
    ],
  },
  {
    id: 6,
    name: "Softnio Group",
    nickname: "",
    chatGroup: true,
    theme: "purple",
    chatTheme: "purple",
    fav: true,
    unread: false,
    archive: false,
    date: "5 May",
    active: true,
    delivered: "sent",
    user: [
      {
        name: "Abu Bin Ishtiak",
        theme: "purple",
      },
      {
        name: "Marele Jhonson",
        image: User3,
      },
    ],
    convo: [
      {
        id: "chat_1",
        me: true,
        chat: ["I just bought a new computer but i am having some problem"],
        date: "27 Mar",
      },
    ],
  },
  {
    id: 7,
    name: "Emile Clarke",
    nickname: "",
    active: true,
    image: User4,
    chatTheme: "purple",
    unread: false,
    archive: false,
    date: "Now",
    fav: false,
    convo: [],
  },
  {
    id: 8,
    name: "Shakel Krosser",
    nickname: "",
    theme: "danger",
    chatTheme: "purple",
    active: true,
    unread: false,
    archive: false,
    date: "Now",
    fav: false,
    convo: [],
  },
  {
    id: 9,
    name: "Kumar Kamal",
    nickname: "",
    theme: "purple",
    chatTheme: "purple",
    date: "Now",
    unread: false,
    archive: false,
    active: true,
    fav: false,
    convo: [],
  },
  {
    id: 10,
    name: "Aaron Nunez",
    nickname: "",
    active: true,
    image: User3,
    chatTheme: "purple",
    unread: false,
    archive: false,
    date: "Now",
    fav: false,
    convo: [],
  },
  {
    id: 11,
    name: "Case Wolf",
    nickname: "",
    theme: "secondary",
    chatTheme: "purple",
    active: true,
    unread: false,
    archive: false,
    date: "Now",
    fav: false,
    convo: [],
  },
  {
    id: 12,
    name: "Amilia Luna",
    nickname: "",
    theme: "info",
    chatTheme: "purple",
    date: "Now",
    unread: false,
    archive: false,
    active: true,
    fav: false,
    convo: [],
  },
  {
    id: 13,
    name: "Softnio Group",
    group: true,
    chatTheme: "purple",
    unread: true,
    archive: false,
    date: "Now",
    active: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "Abu Bin Ishtiak",
        theme: "purple",
        role: "Admin",
      },
      {
        id: 2,
        name: "Marele Jhonson",
        image: User3,
        role: "User",
      },
      {
        id: 3,
        name: "Ellie Gold",
        theme: "warning",
        role: "User",
      },
    ],
    convo: [
      {
        id: "chat_1",
        user: { name: "Ellie Gold", theme: "warning" },
        chat: ["Hello!", "I found an issues when try to purchase the product."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        id: "chat_2",
        me: true,
        chat: ["Thanks for inform. We just solved the issues. Please check now."],
        date: "29 Apr, 2020 4:12 PM",
      },
      {
        id: "chat_3",
        user: { name: "Abu Bin Ishtiak", theme: "purple" },
        chat: ["This is really cool.", "It’s perfect. Thanks for letting me know."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        meta: {
          metaID: "meta_1",
          metaText: "12 May, 2020",
        },
      },
      {
        id: "chat_4",
        user: { name: "Marele Jhonson", image: User3 },
        chat: ["Hey, I am facing problem as i can not login into application. Can you help me to reset my password?"],
        date: "3:49 PM",
      },
      {
        id: "chat_5",
        me: true,
        date: "3:55 PM",
        chat: ["Definately. We are happy to help you."],
      },
      {
        id: "chat_6",
        date: "3:55 PM",
        chat: ["Thank you! Let me know when it done."],
        user: { name: "Marele Jhonson", image: User3 },
      },
      {
        id: "chat_7",
        date: "3:55 PM",
        me: true,
        now: true,
        chat: [
          "We just reset your account. Please check your email for verification.",
          "Please confirm if your got email",
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Dashlite Customers",
    group: true,
    unread: false,
    archive: false,
    date: "27 Mar",
    chatTheme: "purple",
    active: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "George Phillips",
        image: User,
        role: "User",
      },
      {
        id: 2,
        name: "Jhonson Clarke",
        image: User4,
        role: "Admin",
      },
    ],
    convo: [
      {
        id: "chat_1",
        me: true,
        chat: ["We need a website for an ecommerce project, please inbox us for further details"],
        date: "27 Mar",
      },
      {
        id: "chat_6",
        date: "3:55 PM",
        chat: ["Thank you! Let me know when it done."],
        user: { name: "Marele Jhonson", image: User3 },
      },
      {
        id: "chat_7",
        date: "3:55 PM",
        me: true,
        now: true,
        chat: [
          "We just reset your account. Please check your email for verification.",
          "Please confirm if your got email",
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Invest Panel Users",
    group: true,
    unread: false,
    chatTheme: "purple",
    archive: true,
    date: "16 Apr",
    active: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "George Phillips",
        image: User,
        role: "Admin",
      },
      {
        id: 2,
        name: "Jhonson Clarke",
        theme: "pink",
        role: "User",
      },
    ],
    convo: [
      {
        id: "chat_1",
        user: { name: "Khabi Khawab", theme: "orange" },
        chat: ["We need a website for an car dealing site, Can you guys do it ?"],
        date: "27 Mar",
      },
      {
        id: "chat_6",
        date: "3:55 PM",
        chat: ["I am also looking for a same thing."],
        user: { name: "Marele Jhonson", image: User3 },
      },
      {
        id: "chat_7",
        date: "3:55 PM",
        me: true,
        now: true,
        chat: ["We need will need some time to let you know", "Please, give us around 2 working days"],
      },
    ],
  },
  {
    id: 16,
    name: "New Customers",
    group: true,
    chatTheme: "purple",
    unread: false,
    archive: false,
    date: "5 May",
    active: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "Dua Popar",
        theme: "black",
        role: "User",
      },
      {
        id: 2,
        name: "Jhonson Clarke",
        theme: "success",
        role: "Admin",
      },
    ],
    convo: [
      {
        id: "chat_1",
        me: true,
        chat: ["Good template but I need some more features to be added"],
        date: "5 May",
      },
    ],
  },
  {
    id: 17,
    name: "dashlite-project",
    group: true,
    chatTheme: "purple",
    theme: "pink",
    unread: false,
    archive: false,
    date: "15 May",
    active: true,
    channel: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "Abu Bin Ishtiak",
        theme: "purple",
        role: "Admin",
      },
      {
        id: 2,
        name: "Marele Jhonson",
        image: User3,
        role: "User",
      },
      {
        id: 3,
        name: "Ellie Gold",
        theme: "warning",
        role: "User",
      },
      {
        id: 4,
        name: "Illiash Hossain",
        theme: "primary",
        role: "User",
      },
      {
        id: 5,
        name: "George Philips",
        image: User,
        role: "User",
      },
    ],
    convo: [
      {
        id: "chat_1",
        user: { name: "Ellie Gold", theme: "warning" },
        chat: ["Hello!", "I found an issues when try to purchase the product."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        id: "chat_2",
        me: true,
        chat: ["Thanks for inform. We just solved the issues. Please check now."],
        date: "29 Apr, 2020 4:12 PM",
      },
      {
        id: "chat_3",
        user: { name: "Abu Bin Ishtiak", theme: "purple" },
        chat: ["This is really cool.", "It’s perfect. Thanks for letting me know."],
        date: "29 Apr, 2020 4:28 PM",
      },
      {
        meta: {
          metaID: "meta_1",
          metaText: "12 May, 2020",
        },
      },
      {
        id: "chat_4",
        user: { name: "Marele Jhonson", image: User3 },
        chat: ["Hey, I am facing problem as i can not login into application. Can you help me to reset my password?"],
        date: "3:49 PM",
      },
      {
        id: "chat_5",
        me: true,
        date: "3:55 PM",
        chat: ["Definately. We are happy to help you."],
      },
      {
        id: "chat_6",
        date: "3:55 PM",
        chat: ["Thank you! Let me know when it done."],
        user: { name: "Marele Jhonson", image: User3 },
      },
      {
        id: "chat_7",
        date: "3:55 PM",
        me: true,
        now: true,
        chat: [
          "We just reset your account. Please check your email for verification.",
          "Please confirm if your got email",
        ],
      },
    ],
  },
  {
    id: 18,
    name: "features-discussion",
    group: true,
    chatTheme: "purple",
    theme: "primary",
    unread: false,
    archive: false,
    date: "15 May",
    active: true,
    channel: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "Michael Kenon",
        theme: "purple",
        role: "User",
      },
      {
        id: 2,
        name: "Marele Jhonson",
        image: User3,
        role: "Admin",
      },
      {
        id: 3,
        name: "Ellie Gold",
        theme: "warning",
        role: "User",
      },
    ],
    convo: [
      {
        id: "chat_1",
        user: {
          name: "Michael Kenon",
          theme: "primary",
        },
        chat: ["Please help with an issue that I have faced, need a new feature on chat application"],
      },
    ],
  },
  {
    id: 19,
    name: "new-ideas",
    group: true,
    chatTheme: "purple",
    unread: false,
    theme: "warning",
    archive: false,
    date: "28 May",
    active: true,
    channel: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "Keating Beat",
        theme: "purple",
        role: "User",
      },
      {
        id: 2,
        name: "Marele Jhonson",
        image: User3,
        role: "Admin",
      },
      {
        id: 3,
        name: "Ellie Gold",
        theme: "warning",
        role: "User",
      },
    ],
    convo: [
      {
        id: "chat_1",
        user: {
          name: "Keating Beat",
          theme: "pink",
        },
        chat: ["I seem t have a new ideas, and now looking for sponsers. Anyone care to join in ? "],
      },
      {
        id: "chat_2",
        user: {
          name: "Rowanda Olsen",
          theme: "purple",
        },
        chat: ["I would like to share some of my ideas as well ? "],
      },
      {
        id: "chat_3",
        me: true,
        chat: ["Sure, let us meet and share our several views on the application? "],
      },
    ],
  },
  {
    id: 20,
    name: "themeforest",
    group: true,
    chatTheme: "purple",
    unread: false,
    theme: "danger",
    archive: false,
    date: "30 May",
    active: true,
    channel: true,
    delivered: "sent",
    user: [
      {
        id: 1,
        name: "Anealise Gabriel",
        theme: "purple",
        role: "User",
      },
      {
        id: 2,
        name: "Marele Jhonson",
        image: User3,
        role: "User",
      },
      {
        id: 3,
        name: "Ellie Gold",
        theme: "warning",
        role: "Admin",
      },
    ],
    convo: [
      {
        id: "chat_1",
        user: {
          name: "Analiese Gabriele",
          theme: "purple",
        },
        chat: ["Please help with an issue that I have faced in themeforest"],
      },
    ],
  },
];

const sortedDataFunc = (array) => {
  chatData.sort(function (a, b) {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });
  return chatData.filter((item) => array.includes(item.name.split("")[0].toUpperCase()) && !item.group);
};

const sortedDataNotFavFunc = (array) => {
  chatData.sort(function (a, b) {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });
  return chatData.filter((item) => array.includes(item.name.split("")[0].toUpperCase()) && item.fav === false);
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

export const addUserData = [
  {
    id: 50,
    role: "User",
    name: "Alissa Kate",
    theme: "purple",
  },
  {
    id: 51,
    role: "User",
    name: "Jasper Jordan",
    theme: "orange",
  },
  {
    id: 52,
    role: "User",
    name: "Winter Rays",
    theme: "pink",
  },
];

export const nonFavContacts = [
  {
    id: 1,
    title: "A",
    contacts: sortedDataNotFavFunc(["A"]),
  },
  {
    id: 2,
    title: "B",
    contacts: sortedDataNotFavFunc(["B"]),
  },
  {
    id: 3,
    title: "C",
    contacts: sortedDataNotFavFunc(["C"]),
  },
  {
    id: 3,
    title: "D",
    contacts: sortedDataNotFavFunc(["D"]),
  },
  {
    id: 4,
    title: "E-k",
    contacts: sortedDataNotFavFunc(["E", "F", "G", "H", "I", "J", "K"]),
  },
  {
    id: 5,
    title: "L-T",
    contacts: sortedDataNotFavFunc(["L", "M", "N", "O", "P", "Q", "R", "S", "T"]),
  },
  {
    id: 6,
    title: "U-Z",
    contacts: sortedDataNotFavFunc(["U", "V", "W", "X", "Y", "Z"]),
  },
];
