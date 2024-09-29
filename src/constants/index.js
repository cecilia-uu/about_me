import { a } from "@react-spring/three";
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
  figma,
  docker,
  amazon,
  gmg,
  usf,
  bank,
  fastApi,
  Python,
  GPT3,
  bryanShaffer,
  olga,
  wei,
  OpenAI,
  tank,
  YouTube,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: Python,
  },
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "FastAPI",
    icon: fastApi,
  }
];

const experiences = [
  {
    title: "Research Apprentice",
    company_name: "Khoury College of Computer Science, Northeastern University",
    icon: amazon,
    iconBg: "#383E56",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Contributed to a research project examining the impact of social platform changes on marginalized communities.",
      "Analyzed social media data to identify patterns and trends in how marginalized communities respond to policy shifts and threats."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "InfiniFlow",
    icon: gmg,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed the SDK and HTTP API for the open-source RAG (Retrieval-Augmented Generation) engine - ragflow with over 14.8k GitHub stars as the No.5 contributor; increased API efficiency by 70%.",
      "Integrated LLM models, including MiniMax, into the system; extended model functionality by 11% to enhance performance.",
      "Updated Docker environments for clients; streamlined deployment processes; reduced setup time by 120%.",
    ],
  },
  {
    title: "Full-stack Software Engineer Intern",
    company_name: "One Community Global",
    icon: usf,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed the Highest Good Network for member management using the MERN stack (MongoDB, Express.js, React.js, Node.js); designed and implemented RESTful APIs in the backend; integrated user authentication and data validation.",
      "Conducted Pull Request (PR) reviews; ensured code quality, adherence to coding standards, and system-wide consistency; improved software maintainability and robustness; reduced code defects by 10%.",
    ],
  },
  {
    title: "Graduate Teaching Assistant for Discrete Structures",
    company_name: "Northeastern University",
    icon: usf,
    iconBg: "#383E56",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Graded assignments; invigilated exams; facilitated communication between students and faculty; ensured timely feedback for over 30 students",
      "Held weekly office hours; addressed student inquiries; provided academic support and clarification on course materials; increased student engagement by 80%.",
    ],
  },
  {
    title: "CEO Assistant",
    company_name: "Uranus Research",
    icon: usf,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Innovatively executed 20+ promotional strategies for social media channels. Authored 20+ impactful new media articles, resulting in a cumulative page view count 1.8m+. Moreover, successfully grew the fan base by a remarkable 144%.",
      "Cultivated strategic partnerships with prominent media outlets, securing 5+ valuable media resources, elevating Uranus Research from obscurity to prominence within the Shanghai hedge fund arena.",
      "Led talent acquisition with a 98%+ success rate for top-tier candidates."
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I am confident that Anshaj will be able to succeed with his computer science major. He has the skill and drive that are optimal for any academic pursuits.He has the qualities that an educator looks for in all of their students, and I cannot recommend him enough.",
//     name: "Brayan shaffer",
//     designation: "Professor",
//     company: "University of Massachusetts",
//     image: bryanShaffer,
//   },
//   {
//     testimonial:
//       "Great student, very hard working and dedicated. I will recomend him for Tapai confrence and future opportunities.",
//     name: "Olga Karpenko",
//     designation: "Professor",
//     company: "University of San Francisco",
//     image: olga,
//   },
//   {
//     testimonial:
//       "Anshaj is avery good devlopment engineer. he has a good sense of ownership and can get projects done on time.",
//     name: "Wei Zhang",
//     designation: "Software Development Engineer",
//     company: "Amazon",
//     image: wei,
//   },

// ];

const projects = [
  {
    name: "Take-out Application",
    description:
      "A dual-system application for sellers and users, incorporating functionalities like employee and dish management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "MyBatis",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/cecilia-uu/take_out_app",
    // live_link: "https://anshajvats.github.io/hoboBank",
  },
  {
    name: "MemEcho",
    description:
      "A mobile application that enables users to use both private and public features",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: GPT3,
    source_code_link: "https://github.com/CS5520FeinbergSpring2024/team-project-group16",
    // live_link: "https://anshajvats.github.io/GPT3-Webpage/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
