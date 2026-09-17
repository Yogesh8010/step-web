"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border-main bg-bg-card pt-16 pb-28 md:pb-8 px-6 mt-20 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Brand & Newsletter */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Step-Up Career Logo" 
              width={160} 
              height={50} 
              className="group-hover:scale-102 transition-transform dark:brightness-110"
            />
          </Link>
          <p className="text-text-body text-sm leading-relaxed max-w-sm">
            A premium recruitment platform connecting the best talent with industry-leading companies across India.
          </p>
          
          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-text-heading font-semibold text-sm">Subscribe to our Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full px-4 py-2.5 rounded-lg text-sm glass-input focus:outline-none focus:border-brand-accent transition-colors"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-sm rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-text-heading font-bold text-sm mb-6 tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm text-text-body">
            <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link href="/jobs" className="hover:text-brand-accent transition-colors">Find Jobs</Link></li>
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
            <li><a href="https://wa.me/917697334430" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Contact Support</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-text-heading font-bold text-sm mb-6 tracking-wider uppercase">Services</h4>
          <ul className="space-y-3 text-sm text-text-body">
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">IT Recruitment</Link></li>
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">Non-IT Hiring</Link></li>
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">Bulk Staffing</Link></li>
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">Contractual Workforce</Link></li>
            <li><Link href="/services" className="hover:text-brand-accent transition-colors">Executive Search</Link></li>
          </ul>
        </div>

        {/* Trust & Legal */}
        <div className="space-y-6">
          <div>
            <h4 className="text-text-heading font-bold text-sm mb-4 tracking-wider uppercase">Trust Badges</h4>
            <div className="space-y-3">
              {/* Google Rating Badge */}
              <div className="flex items-center gap-2 bg-bg-main p-3 rounded-xl border border-border-main w-fit">
                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-xs font-bold text-text-heading">4.9 Google Rating</span>
              </div>
              
              {/* MSME Registered Badge */}
              <div className="flex items-center gap-2 bg-bg-main p-3 rounded-xl border border-border-main w-fit">
                <ShieldCheck size={16} className="text-brand-accent" />
                <div className="leading-none">
                  <p className="text-[10px] font-bold text-text-heading uppercase tracking-wider">MSME Registered</p>
                  <p className="text-[9px] text-text-body">Govt. of India Certified</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-text-heading font-bold text-sm mb-3 tracking-wider uppercase">Legal</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-body">
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border-main flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-text-body text-xs">
          &copy; {new Date().getFullYear()} Step-Up Career. All rights reserved. Headquartered in Jabalpur, M.P, India.
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/company/stepupcareer/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-body hover:text-brand-accent p-2 transition-colors border border-border-main rounded-lg bg-bg-main"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a 
            href="https://www.instagram.com/step_upcareer/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-body hover:text-brand-accent p-2 transition-colors border border-border-main rounded-lg bg-bg-main"
            title="Instagram"
          >
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
