interface TechItem {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[]; // An array of technology names
  link: string;
  github: string;
  image: string;
}

const Languages: TechItem[] = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Solidity", icon: "/icons/solidity.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },
];

const frameworks: TechItem[] = [
  { name: "ReactJS", icon: "/icons/react.svg" },
  { name: "NextJS", icon: "/icons/nextjs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "Hardhat", icon: "/icons/Hardhat.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { name: "MaterialUI", icon: "/icons/material.svg" },
  { name: "ShadCn", icon: "/icons/shadcn.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
];

const dbs: TechItem[] = [
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "SQLite", icon: "/icons/sqlite.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
];

const projects: Project[] = [
  {
    title: "VoteSafe",
    description:
      "A blockchain-based voting system with user authentication and election management.",
    tech: ["ReactJS", "MongoDB", "Express", "Solidity"],
    link: "https://www.youtube.com/watch?v=VBK3PXftSDE",
    github: "https://github.com/shadow2411/VoteSafe",
    image: "/projects/votesafe.png",
  },
  {
    title: "KnowHow'24 Website",
    description:
      "Event website with schedules and registration for 600+ participants.",
    tech: ["ReactJS", "MongoDB", "Express"],
    link: "#",
    github: "https://github.com/shadow2411/KnowHow-24-Website",
    image: "/projects/knowhow.jpg",
  },
  {
    title: "Tripscript",
    description:
      "AI-powered trip planner with personalized itineraries and ML-based recommendations.",
    tech: ["NextJS", "Firebase", "Python", "Scikit-Learn"],
    link: "#",
    github: "https://github.com/shaunak-10/TripScript",
    image: "/projects/tripscript.png",
  },
  {
    title: "Discuss",
    description:
      "Reddit-style discussion platform with user authentication and content management.",
    tech: ["NextJs", "SQLite"],
    link: "#",
    github: "https://github.com/shadow2411/Discuss-Reddit-Clone",
    image: "/projects/disuss.png",
  },
];

export default { Languages, frameworks, dbs, projects };
export type { TechItem, Project };
