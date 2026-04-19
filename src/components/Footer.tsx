import Link from "next/link";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060e17] pt-16 pb-28 md:pb-8 px-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center group mb-6">
            <Image 
              src="/logo.png" 
              alt="Step-Up Career Logo" 
              width={180} 
              height={60} 
              className="group-hover:scale-105 transition-transform"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            A premium recruitment platform connecting the best talent with industry-leading companies.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-[var(--color-brand-gold)] transition-colors">About Us</Link></li>
            <li><Link href="/jobs" className="hover:text-[var(--color-brand-gold)] transition-colors">Find Jobs</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-brand-gold)] transition-colors">Services</Link></li>
            <li><a href="https://wa.me/917697334430" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">Contact Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
              <span>Jabalpur, M.P 482001<br/>India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--color-brand-gold)] shrink-0" />
              <a href="mailto:jobs@stepup-career.in" className="hover:text-white transition-colors">jobs@stepup-career.in</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--color-brand-gold)] shrink-0" />
              <a href="tel:+917697334430" className="hover:text-white transition-colors">+91 76973 34430</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Step-Up Career. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
