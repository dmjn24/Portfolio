"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Codepen, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:pl-32 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-mango transition-all hover:-translate-y-1 duration-300"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-mango transition-all hover:-translate-y-1 duration-300"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-mango transition-all hover:-translate-y-1 duration-300"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://codepen.io"
            target="_blank"
            className="text-gray-400 hover:text-mango transition-all hover:-translate-y-1 duration-300"
          >
            <Codepen size={20} />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9"></div>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-medium text-mango border border-mango rounded hover:bg-mango/10 transition-colors"
          >
            My resume
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:pl-32 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-6">
        <Link
          href="https://github.com"
          target="_blank"
          className="text-gray-300 hover:text-mango transition-all hover:-translate-y-1 duration-300"
        >
          <Github size={20} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-gray-300 hover:text-mango transition-all hover:-translate-y-1 duration-300"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="text-gray-300 hover:text-mango transition-all hover:-translate-y-1 duration-300"
        >
          <Twitter size={20} />
        </Link>
        <Link
          href="https://codepen.io"
          target="_blank"
          className="text-gray-300 hover:text-mango transition-all hover:-translate-y-1 duration-300"
        >
          <Codepen size={20} />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-300 hover:text-mango transition-all rounded-full bg-white/6 hover:bg-white/20"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Link
          href="https://docs.google.com/document/d/1fUSgPgwbuUlsBvYmcTz7YEqWZrju9a5lsWkvkjnPmns/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium text-mango border border-mango rounded hover:bg-mango/10 transition-colors"
        >
          My Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
