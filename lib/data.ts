import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { StaticImageData } from "next/image";
import beyouteeImg from "@/public/beyoutee-screenshot.png";
import bookhubImg from "@/public/bookhub-screenshot.png";
import lorappImg from "@/public/lorapp-screenshot.png";
import bbaImg from "@/public/bba-screenshot.png";

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  youtubeVideoId?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const personalDetails = {
  firstName: "Camilo",
  lastName: "Lucero",
  email: "camilolucerodev@gmail.com", // This email is associated with a Resend API account. Changing would require making a new Resend account with the matching email.
  websiteName: "camilolucero.com",
  title: "Full-Stack Developer",
  location: "Winnipeg, Manitoba",
  profilePictureUrl: "/camilo-lucero.jpg",
  resumeUrl: "/camilo-lucero-resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/milolucero/",
  githubUrl: "https://github.com/milolucero",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lorapp Co-founder",
    location: "Bogota, Colombia",
    description:
      "Innovative e-book platform for university students. Within a small yet dynamic team, my role focused on the areas of business development, product management, UI/UX design, and front-end development.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2018",
  },
  {
    title: "Back-end Developer (NodeJS)",
    location: "Bogota, Colombia",
    description:
      "I worked on a cryptocurrency investment bot as a personal project. The bot identified arbitrage opportunities between exchange platforms and traded automatically when favorable conditions were met. Generated +$50,000 CAD over one year.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "RRC - Business Information Technology",
    location: "Winnipeg, Manitoba",
    description:
      "This 2.5 year program provided a solid foundation in information technology with focus on desktop and web application development, database management, and IT infrastructure.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "Be•YOU•tee",
    description:
      "A responsive web app that connects users with beauty service providers in their area, allowing them to browse services and schedule appointments directly at their homes.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Geolocation"],
    imageUrl: beyouteeImg,
    demoUrl: "",
  },
  {
    title: "BookHub",
    description:
      "Online bookstore web platform. This was a college project, I worked as a full-stack developer. Features shopping cart, checkout, payment processing, admin panel, and user authentication.",
    tags: ["Ruby On Rails", "APIs", "Active Admin", "Stripe", "AWS", "Docker"],
    imageUrl: bookhubImg,
    githubUrl: "https://github.com/milolucero/rails_library",
  },
  {
    title: "Lorapp",
    description:
      "Award-winning innovative e-book library where university students in Latin America can rent e-book chapters on demand. This was a company I founded where I worked as the product manager and front-end developer.",
    tags: [
      "JavaScript",
      "jQuery",
      "Design systems",
      "Sketch",
      "Zeplin",
      "MySQL",
      "Product management",
    ],
    imageUrl: lorappImg,
    youtubeVideoId: "zQsxzeDXFTc",
  },
  {
    title: "Bits and Bytes Association",
    description:
      "The website of my college's IT student association. I volunteered to make part of the development team, where I worked on the new website released on January 2024.",
    tags: ["React", "Next.js", "Tailwind", "Design systems"],
    imageUrl: bbaImg,
    githubUrl:
      "https://github.com/bits-and-bytes-association/bitsandbytesassociation.ca",
    demoUrl: "https://bitsandbytesassociation.ca/",
  },
] as const;

export const skillsData = [
  "C#",
  ".NET",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "APIs",
  "Algorithms",
  "SQL",
  "AWS",
  "Linux",
  "Cybersecurity",
  "UI/UX design",
  "Figma",
  "HTML",
  "CSS",
  "Git",
  "Scrum",
] as const;
