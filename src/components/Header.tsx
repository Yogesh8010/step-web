"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

import Image from "next/image";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.png" 
            alt="Step-Up Career Logo" 
            width={180} 
            height={60} 
            className="group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
          <Link href="/jobs" className="text-slate-300 hover:text-white transition-colors">Jobs</Link>
          <a href="https://wa.me/917697334430" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[var(--color-brand-gold)] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/apply" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Apply Now
          </Link>
          <button className="md:hidden text-white p-2">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
