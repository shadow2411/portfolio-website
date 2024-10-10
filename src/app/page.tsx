"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, ExternalLink, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Nisarg from "../../public/nisarg2.png";
import educationPath from "@/data/about";
import contactInfo from "@/data/contact";
import projects from "@/data/portfolio";
import frameworks from "@/data/portfolio";
import Languages from "@/data/portfolio";
import dbs from "@/data/portfolio";
import type { TechItem } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
interface SectionRefs {
  home: HTMLElement | null;
  about: HTMLElement | null;
  portfolio: HTMLElement | null;
  contact: HTMLElement | null;
}
const words = ["aspiring Full Stack Developer.", "IT Student."];

const navItems: Array<{ href: keyof SectionRefs; label: string }> = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "portfolio", label: "Portfolio" },
  { href: "contact", label: "Contact" },
];
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionRefs = useRef<SectionRefs>({
    home: null,
    about: null,
    portfolio: null,
    contact: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      (Object.keys(sectionRefs.current) as Array<keyof SectionRefs>).forEach(
        (section) => {
          const ref = sectionRefs.current[section];
          if (
            ref &&
            ref.offsetTop <= scrollPosition + 100 &&
            ref.offsetTop + ref.offsetHeight > scrollPosition + 100
          ) {
            setActiveSection(section);
          }
        }
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: keyof SectionRefs) => {
    const ref = sectionRefs.current[sectionId];
    if (ref) {
      const startPosition = window.pageYOffset;
      const targetPosition = ref.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1000; // ms
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(
          0,
          startPosition + distance * easeInOutCubic(percentage)
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
    setIsOpen(false);
  };
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); // Enable loading state

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "e300f447-8019-44d6-867b-6b8a6af7984c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false); // Disable loading state after completion
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex-1">
            <Link
              href="#home"
              className="flex items-center space-x-2"
              onClick={() => scrollToSection("home")}
            >
              <span className="font-bold ml-3">Nisarg Patel</span>
            </Link>
          </div>
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`#${item.href}`}
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/Nisarg_Resume.pdf"
              className="transition-colors hover:text-foreground/80"
            >
              Resume
            </Link>
          </nav>
          <div className="flex-1 flex justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-3 x-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <Link
                  href="#home"
                  className="flex items-center"
                  onClick={() => scrollToSection("home")}
                >
                  <span className="font-bold">Nisarg Patel</span>
                </Link>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={`#${item.href}`}
                        onClick={() => scrollToSection(item.href)}
                        className={
                          activeSection === item.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <HeroHighlight>
        <main className="flex-grow">
          {/* Home Section */}
          <section
            id="home"
            ref={(el) => {
              if (el) sectionRefs.current.home = el;
            }}
            className="min-h-screen flex items-center py-0 px-4 md:px-0 lg:px-8"
          >
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:mt-0 items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className=" text-5xl md:text-5xl lg:text-5xl font-bold mb-4">
                  Hey There, I am
                </h2>
                <Highlight className="mb-10 text-5xl md:text-5xl lg:text-5xl font-bold">
                  Nisarg Patel
                </Highlight>
                <br />
                <br />

                <br />
                <Button
                  size="lg"
                  className="cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in touch
                </Button>
                <Link
                  href={"/Nisarg_Resume.pdf"}
                  download={"/Nisarg_Resume.pdf"}
                >
                  <Button
                    className="ml-4 border-black border-solid hover:indigo-600 cursor-pointer"
                    size={"lg"}
                    variant="secondary"
                  >
                    View Resume
                  </Button>
                </Link>
                <br />
                <br />
                <p className="inline  mt-4 text-md md:text-xl text-muted-foreground">
                  I am an
                </p>
                <FlipWords
                  words={words}
                  duration={1000}
                  className="inline text-md md:text-xl text-muted-foreground mb-6"
                />
              </motion.div>
              <motion.div
                className="relative md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
                  <div className="absolute mt-10 w-full h-full bg-gray-400 rounded-full"></div>
                  <Image
                    src={Nisarg}
                    alt="Nisarg Patel"
                    width={333}
                    height={333}
                    objectFit="cover"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[39%] rounded-full z-10"
                    style={{
                      clipPath: "circle(50% at 50% 38%)",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            ref={(el) => {
              if (el) sectionRefs.current.about = el;
            }}
            className="min-h-screen py-16 px-4 md:px-8 lg:px-16"
          >
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
              <Card className="max-w-2xl text-center mx-auto">
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
                      Organized KnowHow&apos;24, focusing on students&apos; professional
                      and communicational abilities.
                    </li>
                    <li>
                      Coordinated students through various placement drives.
                    </li>
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
              <Card className="max-w-2xl text-center mx-auto">
                <CardContent className="mt-6">
                  <ul className="list-disc list-inside">
                    <li>Organized Knowhow&apos;24 and Managed 600+ students</li>
                    <li>2 Star and 1400+ rating in codechef</li>
                    <li>96 percentile in Jee Mains 2021</li>
                    <li>Odoo Combat Hackathon Finalist</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            ref={(el) => {
              if (el) sectionRefs.current.portfolio = el;
            }}
            className="min-h-screen py-16 px-4 md:px-8 lg:px-16"
          >
            <motion.h1
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Portfolio
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.projects.map((project: Project, index: number) => (
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
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
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
                Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Languages.Languages.map(
                  (language: TechItem, index: number) => (
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
                  )
                )}
              </div>

              <h3 className="text-lg font-semibold text-center mt-8 mb-10">
                Frameworks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {frameworks.frameworks.map(
                  (framework: TechItem, index: number) => (
                    <motion.div
                      key={framework.name}
                      className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm border border-l-neutral-500"
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
                  )
                )}
              </div>

              <h3 className="text-lg font-semibold text-center mt-8 mb-10">
                Databases
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {dbs.dbs.map((db: TechItem, index: number) => (
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
          </section>

          {/* Contact section */}
          <section
            id="contact"
            ref={(el) => {
              if (el) sectionRefs.current.contact = el;
            }}
            className="min-h-screen py-16 px-4 md:px-8 lg:px-16"
          >
            <motion.h1
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Me
            </motion.h1>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      className="space-y-4"
                      onSubmit={handleSubmit}
                      method="POST"
                    >
                      <div>
                        <Input
                          placeholder="Your Name"
                          type="text"
                          id="name"
                          name="name"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          id="message"
                          name="message"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        variant="default"
                        disabled={loading}
                        className="w-full justify-center"
                      >
                        {loading ? "Sending...": "Send"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
                <div className="flex justify-center space-x-4">
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
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </HeroHighlight>
    </div>
  );
}
