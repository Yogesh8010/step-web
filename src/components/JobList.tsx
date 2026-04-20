"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Building2, Clock, Briefcase, IndianRupee } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Job } from "@/lib/getJobs";

export default function JobList({ initialJobs }: { initialJobs: Job[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  // Filter jobs based on search inputs
  const filteredJobs = initialJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
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
            className="w-full pl-12 pr-4 py-3 rounded-xl glass-input"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(5); }}
          />
        </div>
        <div className="md:w-64 relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Location" 
            className="w-full pl-12 pr-4 py-3 rounded-xl glass-input"
            value={locationQuery}
            onChange={(e) => { setLocationQuery(e.target.value); setVisibleCount(5); }}
          />
        </div>
        <button 
          onClick={() => setVisibleCount(5)}
          className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105"
        >
          Search
        </button>
      </motion.div>

      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 glass-card rounded-2xl">
            <h3 className="text-2xl text-white font-bold mb-2">No jobs found matching your criteria</h3>
            <p className="text-slate-400">Try adjusting your search terms or location.</p>
          </div>
        ) : (
          visibleJobs.map((job, i) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.1 }}
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
                  href={`/apply?role=${encodeURIComponent(job.title)}`}
                  className="w-full md:w-auto px-8 py-3 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/20 text-center"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </div>
      
      {filteredJobs.length > visibleCount && (
        <div className="mt-12 text-center">
          <button 
            onClick={() => setVisibleCount(prev => prev + 5)}
            className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </div>
  );
}
