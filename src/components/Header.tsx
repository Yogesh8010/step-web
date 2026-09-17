"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Services", href: "/services" },
    { name: "Employers", href: "/services#employers" },
    { name: "Candidates", href: "/services#candidates" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "https://wa.me/917697334430" }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border-main"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image 
            src="/logo.png" 
            alt="Step-Up Career Logo" 
            width={160} 
            height={50} 
            className="group-hover:scale-102 transition-transform dark:brightness-110"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 font-semibold text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-text-body hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons, Theme Toggle & CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Global Search Icon Link */}
          <Link href="/jobs" className="text-text-body hover:text-brand-accent p-2 transition-colors" title="Search Jobs">
            <Search size={18} />
          </Link>

          {/* Social Icons */}
          <a 
            href="https://www.linkedin.com/company/stepupcareer/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-body hover:text-brand-accent p-2 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href="https://www.instagram.com/step_upcareer/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-body hover:text-brand-accent p-2 transition-colors"
            title="Instagram"
          >
            <InstagramIcon size={18} />
          </a>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="text-text-body hover:text-brand-accent p-2 transition-colors rounded-full hover:bg-bg-card"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Login Placeholder */}
          <Link 
            href="/apply" 
            className="text-sm font-semibold text-text-body hover:text-brand-accent transition-colors px-4 py-2"
          >
            Login
          </Link>

          {/* Apply Now CTA */}
          <Link 
            href="/apply" 
            className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold rounded-lg transition-all hover:scale-102 shadow-sm"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile controls & Drawer Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="text-text-body hover:text-brand-accent p-2 transition-colors rounded-full hover:bg-bg-card"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button 
            className="text-text-heading p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-bg-main border-l border-border-main z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-border-main">
                  <Image 
                    src="/logo.png" 
                    alt="Step-Up Career Logo" 
                    width={130} 
                    height={40} 
                    className="dark:brightness-110"
                  />
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-text-heading p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4 font-semibold text-lg">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-text-body hover:text-brand-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-6 pt-6 border-t border-border-main">
                {/* Social media inside mobile menu */}
                <div className="flex items-center gap-4 justify-center">
                  <a 
                    href="https://www.linkedin.com/company/stepupcareer/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-body hover:text-brand-accent p-2 transition-colors"
                  >
                    <LinkedinIcon size={22} />
                  </a>
                  <a 
                    href="https://www.instagram.com/step_upcareer/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-body hover:text-brand-accent p-2 transition-colors"
                  >
                    <InstagramIcon size={22} />
                  </a>
                </div>

                <Link 
                  href="/apply" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold rounded-lg block shadow-sm"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
