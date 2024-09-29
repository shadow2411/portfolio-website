"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
const Languages = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Solidity", icon: "/icons/solidity.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
];
const frameworks = [
  { name: "ReactJS", icon: "/icons/react.svg" },
  { name: "NextJS", icon: "/icons/nextjs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "Hardhat", icon: "/icons/Hardhat.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { name: "MaterialUI", icon: "/icons/material.svg" },
  { name: "ShadCn", icon: "/icons/shadcn.svg" },
];
const dbs = [
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "SQLite", icon: "/icons/sqlite.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
];
const projects = [
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1 * index },
              }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      {project.link !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center mt-14">
            Skills
          </h2>
          <h3 className="text-lg font-semibold text-center mb-10">
            Languages{" "}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Languages.map((language, index) => (
              <motion.div
                key={language.name}
                className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm border border-l-neutral-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Image
                  src={language.icon}
                  alt={language.name}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-center mt-8 mb-10">
            Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm border border-l-neutral-500 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Image
                  src={framework.icon}
                  alt={framework.name}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-center mt-8 mb-10">
            Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {dbs.map((db, index) => (
              <motion.div
                key={db.name}
                className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm border border-l-neutral-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Image src={db.icon} alt={db.name} width={50} height={50} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
