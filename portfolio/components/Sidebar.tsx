"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: "#contact", label: "Contact", id: "contact" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Exp.", id: "experience" },
    { href: "#about", label: "About", id: "about" },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-24 hidden md:flex flex-col items-center py-8 bg-background border-r border-white/10 z-50">
      <div className="mb-auto">
        <Link
          href="/"
          className="text-4xl font-bold text-mango tracking-tighter hover:text-white transition-colors"
        >
          D.
        </Link>
      </div>

      <nav className="flex flex-row items-center gap-6 [writing-mode:vertical-lr] rotate-180">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`text-sm font-medium py-3 px-3 rounded transition-all duration-300 hover:-translate-y-1 ${
              activeSection === link.id
                ? "text-mango bg-mango/10"
                : "text-gray-200 hover:text-mango"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto h-10 w-px bg-white/10"></div>
    </aside>
  );
};

export default Sidebar;
