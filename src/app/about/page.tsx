"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/navbar";

const educationPath = [
  {
    year: "2021 - 2025",
    title: "B.Tech Information Technology",
    institution: "Birla Vishvakarma Mahavidyalaya, Anand, Gujarat",
    details: "CPI: 7.96",
  },
  {
    year: "2021",
    title: "Higher Secondary, Science Stream",
    institution: "P. P. Savani Chaitanya Vidya Sankul, Surat, Gujarat",
    details: "Percentile: 95.00",
  },
];

const contactInfo = [
  { icon: Github, link: "https://github.com/shadow2411", label: "GitHub" },
  {
    icon: Linkedin,
    link: "https://linkedin.com/in/nisarg-patel",
    label: "LinkedIn",
  },
  { icon: Mail, link: "mailto:nisarg.prof2411@gmail.com", label: "Email" },
];

export default function About() {
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
          About Me
        </motion.h1>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Education Journey
          </h2>
          <div className="relative max-w-2xl mx-auto pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            {educationPath.map((edu, index) => (
              <motion.div
                key={edu.year}
                className="relative mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="ml-6">
                  <CardHeader>
                    <CardTitle>{edu.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{edu.year}</p>
                    <p>{edu.institution}</p>
                    <p>{edu.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Work Experience
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Training And Placement Coordinator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">
                Birla Vishvakarma Mahavidyalaya, Gujarat, India
              </p>
              <p className="mb-4">November 2023 - Present</p>
              <ul className="list-disc list-inside">
                <li>
                  Organized KnowHow'24, focusing on students' professional and
                  communicational abilities.
                </li>
                <li>Coordinated students through various placement drives.</li>
                <li>Organized workshops for soft skill development.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Achievements
          </h2>
          <Card>
            <CardContent className="mt-6">
              <ul className="list-disc list-inside">
                <li>Organized Knowhow'24 and Managed 600+ students</li>
                <li>2 Star and 1400+ rating in codechef</li>
                <li>96 percentile in Jee Mains 2021</li>
                <li>Odoo Combat Hackathon Finalist</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* <h2 className="text-2xl font-semibold mb-8 text-center">Contact</h2>
          <div className="flex justify-center space-x-6">
            {contactInfo.map(({ icon: Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="outline" size="icon">
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{label}</span>
                </Button>
              </motion.a>
            ))}
          </div> */}
        </motion.section>
      </main>
    </div>
  );
}
