export const columnData = {
  task: {
    "task-1": {
      id: "task-1",
      title: "Implement Design into template",
      desc: "Start implementing new design in coding @dashlite",
      meta: {
        users: [{ value: "Sara Dervashi", label: "Sara Dervashi", theme: "light" }],
        tags: [
          { value: "Dashlite", label: "Dashlite", theme: "info" },
          { value: "HTML", label: "HTML", theme: "danger" },
        ],
        date: "15 Dec 2020",
        category: "Frontend",
        comment: "2",
      },
    },
    "task-2": {
      id: "task-2",
      title: "Dashlite React Version",
      desc: "Implement new UI design in react version @dashlite template as soon as possible.",
      meta: {
        users: [{ value: "Cooper Jones", label: "Cooper Jones", theme: "blue" }],
        tags: [
          { value: "Dashlite", label: "Dashlite", theme: "info" },
          { value: "React", label: "React", theme: "dark" },
        ],
        date: "15 Dec 2020",
        category: "Frontend",
        comment: "5",
        attachment: "3",
      },
    },
    "task-3": {
      id: "task-3",
      title: "Dashlite Design Kit Update",
      desc: "Update the new UI design for @dashlite template with based on feedback.",
      board: "In Progress",
      meta: {
        users: [{ value: "Ashraf Raneem", label: "Ashraf Raneem", theme: "primary" }],
        tags: [
          { value: "Dashlite", label: "Dashlite", theme: "info" },
          { value: "UI Design", label: "UI Design", theme: "warning" },
        ],
        due: "2",
        category: "Design",
        comment: "4",
        attachment: "1",
      },
    },
    "task-4": {
      id: "task-4",
      title: "Techyspec Keyword Research",
      desc: "Keyword recarch for @techyspec business profile and there other websites, to improve ranking.",
      board: "In Progress",
      meta: {
        users: [{ value: "Vernon Hollander", label: "Vernon Hollander", theme: "danger" }],
        tags: [
          { value: "Techyspec", label: "Techyspec", theme: "dark" },
          { value: "SEO", label: "SEO", theme: "success" },
        ],
        date: "02 Jan 2021",
        category: "Research",
        comment: "21",
        attachment: "31",
      },
    },
    "task-5": {
      id: "task-5",
      title: "Fitness Next Website Design",
      desc: "Design a awesome website for @fitness_next new product launch.",
      board: "In Progress",
      meta: {
        users: [{ value: "Patrick Newman", label: "Patrick Newman", theme: "pink" }],
        tags: [
          { value: "Fitness Next", label: "Fitness Next", theme: "primary" },
          { value: "UI Design", label: "UI Design", theme: "warning" },
        ],
        due: "8",
        category: "Design",
        comment: "5",
        attachment: "1",
      },
    },
    "task-6": {
      id: "task-6",
      title: "Runnergy Website Redesign",
      desc: "Redesign there old/backdated website new modern and clean look keeping minilisim in mind.",
      board: "In Progress",
      meta: {
        users: [
          { value: "Jose Fayman", label: "Jose Fayman", theme: "purple" },
          { value: "Indever Clay", label: "Indever City", theme: "success" },
        ],
        tags: [
          { value: "Redesign", label: "Redesign", theme: "light" },
          { value: "UI Design", label: "UI Design", theme: "warning" },
        ],
        date: "10 Jan 2022",
        category: "Design",
        comment: "15",
        attachment: "19",
      },
    },
    "task-7": {
      id: "task-7",
      title: "Wordlab Android App",
      desc: "Wordlab Android App with with react native.",
      board: "In Progress",
      meta: {
        users: [{ value: "Jose Fayman", label: "Jose Fayman", theme: "purple" }],
        tags: [
          { value: "Wordlab", label: "Wordlab", theme: "success" },
          { value: "Android", label: "Android", theme: "light" },
        ],
        date: "25 Dec 2022",
        category: "Design",
        comment: "50",
        attachment: "11",
      },
    },
    "task-8": {
      id: "task-8",
      title: "Oberlo Development",
      desc: "Complete website development for Oberlo limited.",
      board: "To Review",
      meta: {
        users: [
          { value: "Ober Mayers", label: "Ober Mayers", theme: "purple" },
          { value: "Sergei Surnama", label: "Sergei Surnama", theme: "success" },
        ],
        tags: [
          { value: "Oberlo", label: "Oberlo", theme: "info" },
          { value: "Development", label: "Development", theme: "danger" },
        ],
        due: "1",
        category: "Backend",
        comment: "9",
        attachment: "1",
      },
    },
    "task-9": {
      id: "task-9",
      title: "IOS app for Getsocio",
      desc: "Design and develop app for Getsocio IOS.",
      board: "To Review",
      meta: {
        users: [
          { value: "Jermaine Klaus", label: "Jermaine Klaus", theme: "purple" },
          { value: "Sergei Surnama", label: "Sergei Surnama", theme: "success" },
        ],
        tags: [
          { value: "Getsocio", label: "Getsocio", theme: "dark" },
          { value: "IOS", label: "IOS", theme: "light" },
        ],
        due: "4",
        category: "Frontend",
        comment: "8",
        attachment: "5",
      },
    },
  },
  columns: {
    "column-open": {
      id: "column-open",
      text: "Open",
      theme: "light",
      tasks: ["task-1", "task-2"],
    },
    "column-progress": {
      id: "column-progress",
      text: "In Progress",
      theme: "primary",
      tasks: ["task-3", "task-4", "task-5", "task-6", "task-7"],
    },
    "column-review": {
      id: "column-review",
      text: "To Review",
      theme: "warning",
      tasks: ["task-8", "task-9"],
    },
    "column-completed": {
      id: "column-completed",
      text: "Completed",
      theme: "success",
      tasks: [],
    },
  },
  columnOrder: ["column-open", "column-progress", "column-review", "column-completed"],
};

export const tagSet = [
  {
    value: "Dashlite",
    label: "Dashlite",
    theme: "info",
  },
  {
    value: "HTML",
    label: "HTML",
    theme: "danger",
  },
  {
    value: "UI Design",
    label: "UI Design",
    theme: "warning",
  },
  {
    value: "React",
    label: "React",
    theme: "dark",
  },
  {
    value: "Techyspec",
    label: "Techyspec",
    theme: "dark",
  },
  {
    value: "Development",
    label: "Development",
    theme: "danger",
  },
  {
    value: "SEO",
    label: "SEO",
    theme: "success",
  },
  {
    value: "IOS",
    label: "IOS",
    theme: "grey",
  },
];

export const teamList = [
  { value: "Abu Bin", label: "Abu Bin", theme: "purple" },
  { value: "Newman John", label: "Newman John", theme: "primary" },
  { value: "Milagros Betts", label: "Milagros Betts", theme: "purple" },
  { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
  { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
  { value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" },
];

export const themes = [
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "info", label: "Info" },
  { value: "danger", label: "Danger" },
  { value: "warning", label: "Warning" },
  { value: "success", label: "Success" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];
