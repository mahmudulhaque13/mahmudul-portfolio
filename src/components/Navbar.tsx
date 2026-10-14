"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Education/Training", href: "/#education" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        {/* Brand */}
        <Link className="brand" href="/#home" onClick={closeMenu}>
          <span className="brand-mark">MH</span>

          <span>
            Mahmudul Haque<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigation links */}
        <div
          id="primary-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
