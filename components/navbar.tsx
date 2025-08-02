"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "blogs", "projects", "about", "home"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/ankman007",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      tooltip: "GitHub: ankman007",
    },
    {
      href: "https://linkedin.com/in/ankit-poudel007",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      tooltip: "LinkedIn: ankit-poudel007",
    },
    {
      href: "https://x.com/ankitpoudel_",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      tooltip: "Twitter: @ankitpoudel_",
    },
    {
      href: "https://leetcode.com/u/ankeetpoudel_/",
      icon: <SiLeetcode className="w-5 h-5" />,
      label: "LeetCode",
      tooltip: "LeetCode: ankeetpoudel_",
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/50 z-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-slate-900 border-b-2 border-slate-900 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label={social.label}
                title={social.tooltip}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-slate-200/50 mt-2 pt-6">
            <div className="space-y-4 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6 pt-4 border-t border-slate-200/50">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
