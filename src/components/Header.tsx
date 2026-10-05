"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = (e?: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setMounted(true);
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Lock background scroll when mobile drawer is open (crucial for iOS Safari & Android)
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isMobileMenuOpen]);

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
    <>
      <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-border-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={handleHomeClick}
            className="flex items-center group shrink-0 cursor-pointer"
            title="Step-Up Career Home"
          >
            {/* Light mode: transparent logo (grey CAREER text visible against light bg) */}
            <Image 
              src="/logo.png" 
              alt="Step-Up Career Logo" 
              width={800} 
              height={389} 
              className="w-[170px] sm:w-[210px] h-auto object-contain group-hover:scale-105 transition-transform block dark:hidden"
              priority
            />
            {/* Dark mode: full dark-background logo (white CAREER text pops against dark bg) */}
            <Image 
              src="/logo-dark.png" 
              alt="Step-Up Career Logo" 
              width={800} 
              height={389} 
              className="w-[170px] sm:w-[210px] h-auto object-contain group-hover:scale-105 transition-transform hidden dark:block rounded-md"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={link.href === "/" ? handleHomeClick : undefined}
                className="text-text-body hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons, Theme Toggle & CTAs (Desktop) */}
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

          {/* Mobile Controls & Hamburger Button (Optimized for iOS & Touch) */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            <Link
              href="/jobs"
              className="text-text-body hover:text-brand-accent p-2.5 transition-colors rounded-full hover:bg-bg-card active:scale-95 touch-manipulation"
              title="Search Jobs"
              aria-label="Search Jobs"
            >
              <Search size={20} />
            </Link>

            <button 
              onClick={toggleTheme} 
              className="text-text-body hover:text-brand-accent p-2.5 transition-colors rounded-full hover:bg-bg-card active:scale-95 touch-manipulation"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              type="button"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-text-heading p-2 rounded-lg hover:bg-bg-card active:scale-95 touch-manipulation cursor-pointer select-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Rendered via Portal directly to body (Fixes iOS Safari transform & stacking bugs) */}
      {mounted && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden pointer-events-auto">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Drawer */}
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] h-[100dvh] bg-bg-main border-l border-border-main p-6 flex flex-col justify-between shadow-2xl overscroll-contain z-10"
              >
                <div className="space-y-6">
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-border-main">
                    <Link 
                      href="/" 
                      onClick={handleHomeClick}
                      className="flex items-center group cursor-pointer"
                      title="Step-Up Career Home"
                    >
                      <Image 
                        src="/logo.png" 
                        alt="Step-Up Career Logo" 
                        width={800} 
                        height={389} 
                        className="w-[140px] h-auto object-contain block dark:hidden"
                      />
                      <Image 
                        src="/logo-dark.png" 
                        alt="Step-Up Career Logo" 
                        width={800} 
                        height={389} 
                        className="w-[140px] h-auto object-contain hidden dark:block rounded-md"
                      />
                    </Link>
                    <button 
                      type="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-text-heading p-2 rounded-lg hover:bg-bg-card active:scale-95 touch-manipulation"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-3 font-semibold text-base">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        onClick={(e) => {
                          if (link.href === "/") {
                            handleHomeClick(e);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }} 
                        className="py-2 px-3 rounded-lg text-text-body hover:text-brand-accent hover:bg-bg-card transition-colors active:bg-bg-card touch-manipulation"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Drawer Footer Actions */}
                <div className="space-y-5 pt-6 border-t border-border-main">
                  {/* Social media inside mobile menu */}
                  <div className="flex items-center gap-4 justify-center">
                    <a 
                      href="https://www.linkedin.com/company/stepupcareer/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-body hover:text-brand-accent p-2.5 rounded-lg border border-border-main bg-bg-card transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/step_upcareer/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-body hover:text-brand-accent p-2.5 rounded-lg border border-border-main bg-bg-card transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon size={20} />
                    </a>
                  </div>

                  <Link 
                    href="/apply" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold rounded-lg block shadow-sm text-sm active:scale-98 transition-transform touch-manipulation"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
