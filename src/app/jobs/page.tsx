"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Search, MapPin, Building2, Clock, Briefcase, IndianRupee } from "lucide-react";
import Link from "next/link";

export default function Jobs() {
  const mockJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      location: "Bangalore, India (Hybrid)",
      type: "Full-Time",
      salary: "18L - 25L",
      posted: "2 days ago",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "B2B Sales Executive",
      company: "GrowthX Media",
      location: "Mumbai, India",
      type: "Full-Time",
      salary: "6L - 9L",
      posted: "5 hours ago",
      tags: ["Sales", "B2B", "Communication"]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      company: "FinServe Corp",
      location: "Pune, India (Remote)",
      type: "Full-Time",
      salary: "8L - 12L",
      posted: "1 day ago",
      tags: ["Support", "CRM", "Retention"]
    },
    {
      id: 4,
      title: "HR Executive (Bulk Hiring)",
      company: "Step-Up Career Internal",
      location: "Jabalpur, India",
      type: "Full-Time",
      salary: "Not Disclosed",
      posted: "Just now",
      tags: ["Recruitment", "Sourcing", "HR"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 relative min-h-screen">
        {/* Background glow */}
        <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[128px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Explore <span className="text-[var(--color-brand-gold)]">Opportunities</span>
            </h1>
            <p className="text-slate-300 text-lg">Find the perfect role that matches your skills and career aspirations.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-4 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 border border-[var(--color-brand-gold)]/20"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search job title, skills, or company..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl glass-input w-full"
              />
            </div>
            <div className="md:w-64 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full pl-12 pr-4 py-3 rounded-xl glass-input w-full"
              />
            </div>
            <button className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105">
              Search
            </button>
          </motion.div>

          <div className="space-y-6">
            {mockJobs.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[var(--color-brand-gold)]/40 transition-colors group"
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-brand-gold)] transition-colors">{job.title}</h2>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Building2 size={16} className="text-[var(--color-brand-gold)]" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-[var(--color-brand-gold)]" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <IndianRupee size={16} className="text-[var(--color-brand-gold)]" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={16} className="text-[var(--color-brand-gold)]" />
                      {job.type}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock size={14} />
                    {job.posted}
                  </div>
                  <Link 
                    href="/apply"
                    className="w-full md:w-auto px-8 py-3 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/20 text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 glass text-white rounded-full hover:bg-white/5 transition-colors">
              Load More Jobs
            </button>
          </div>

        </div>
      </main>
    </>
  );
}
