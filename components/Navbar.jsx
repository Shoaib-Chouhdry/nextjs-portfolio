"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" ,scroll: true},
  { name: "about", path: "/#about" ,scroll: true},
  { name: "skills", path: "/#skills",scroll: true },
  { name: "experience", path: "/#experience",scroll: true },
  { name: "projects", path: "/#projects",scroll: true },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          scroll={link.scroll ?? true}
          className={`${link.path === pathname && 
                      "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;


