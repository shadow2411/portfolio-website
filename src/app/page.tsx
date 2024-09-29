"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Nisarg from "../../public/Nisarg.png";
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hey There, I'm Nisarg Patel
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              I like to create websites.
            </p>
            <form action="/contact">
              <Button type="submit" size="lg">
                Get in touch
              </Button>
            </form>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-500 rounded-full overflow-hidden">
              <Image
                src={Nisarg}
                alt="Nisarg Patel"
                height={800}
                width={800}
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
