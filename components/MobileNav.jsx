"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "experience", path: "#experience" },
  { name: "projects", path: "#projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl text-accent"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {open && (
        <div className="fixed top-[90px] left-0 w-full bg-primary border-t border-white/10 z-50">
          <nav className="flex flex-col items-center gap-8 py-10">
            {links.map((link) => {
              const isActive =
                link.path.includes(activeSection) && activeSection !== "";

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`capitalize text-lg font-medium transition-all
                    ${
                      isActive
                        ? "text-accent"
                        : "text-white hover:text-accent"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
