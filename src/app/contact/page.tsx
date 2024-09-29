"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";
import Navbar from "@/components/navbar";

const contactInfo = [
  { icon: Github, link: "https://github.com/shadow2411", label: "GitHub" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/nisarg-patel-347948233/",
    label: "LinkedIn",
  },
  { icon: Mail, link: "mailto:nisarg.prof2411@gmail.com", label: "Email" },
  { icon: Phone, link: "tel:+919903535282", label: "Call Me" },
  {icon: Instagram, link: "https://www.instagram.com/nisarg_2411/", label: "Instagram"},
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
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
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" />
                  </div>
                  <Button type="submit">Send Message</Button>
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
      </main>
    </div>
  );
}
