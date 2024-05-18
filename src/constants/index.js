import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  maham,
  lemon,
  smart,
  mern,
  mega,
  mysql,
  atc,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Al-Maham Medical Equipment Trading L.L.C",
    icon: maham,
    iconBg: "#383E56",
    date: "August 2024 - January 2024",
    points: [
      "Reviewed code, debugged problems, and corrected issues.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Analyzed existing software implementations to identify areas requiring improvement.",
      "Developed functional databases, applications and servers to support websites on back-end.",
      "Collaborated with back-end developers to design APIs.",
      "Utilized NodeJS, ORM and SQL/No-SQL to develop and manage databases.",
      "Created unit test cases for testing and automation.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Lemon labs",
    icon: lemon,
    iconBg: "#E6DEDD",
    date: "August 2022 - August 2023",
    points: [
      "Design and implement complex features in microservices environment.",
      "Ccontribute to maintaining a huge codebase with a lot of integrations.",
      "Evaluated and adopted new tools and technologies to achieve company-level goals.",
      "Developed and maintained core product services, libraries and frameworks.",
      "Improved performance and reliability of databases, web services and other integrations.",
      "Working closely with protocols like GRPC, Sockets, HTTP to deliver messages and to communicate to other services.",
      "Optimize services performance using concepts and technologies like caching and database indexing.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Smart Node",
    icon: smart,
    iconBg: "#383E56",
    date: "October 2018 - July 2022",
    points: [
      "Collaborate with the team to build the backend for the platform using NodeJS and technologies like MySQL including systems like video uploading, exams, teachers, and courses management.",
      "Implemented the front-end part of the system as an interactive portal to manage statistical charts, and handle data visualizations.",
      "Estimated project scope and worked with PM team to forecast milestones and timelines.",
      "Oversaw system testing and validation procedures to automate functionality and establish reliability.",
      "Assisted project managers in understanding client requirements and planning technical solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Web-based platform that allows users to search, book, and manage property rentals, buying, and selling listings from various providers, providing a convenient and efficient solution for real estate needs. It is not done yet",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "https://github.com/A-Oka-jr/mern-estate",
  },
  {
    name: "E-Commerce mega shop",
    description:
      "mega shop is a revolutionary eCommerce platform designed to revolutionize your shopping experience. mega shop brings the mall to your fingertips, allowing you to browse, shop, and save effortlessly from the comfort of your own home.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: mega,
    source_code_link: "https://github.com/A-Oka-jr/mega_shop",
  },
  {
    name: "African Training Center",
    description:
      "The African Trininig Center offers various technical training programs and certifications aimed at enhancing digital skills. It provides courses in areas such as information technology, digital marketing, and software development. ",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: atc,
    source_code_link: "https://afro-tech.net/#!/app/home",
  },
];

export { services, technologies, experiences, testimonials, projects };
