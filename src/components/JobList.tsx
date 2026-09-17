"use client";

import { motion } from "framer-motion";
import { 
  Search, MapPin, Building2, Clock, Briefcase, IndianRupee, 
  Heart, Share2, CheckCircle, ArrowRight, ShieldCheck, Sparkles, X
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Job } from "@/lib/getJobs";

export default function JobList({ initialJobs }: { initialJobs: Job[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [activeChip, setActiveChip] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState<string>(initialJobs[0]?.id || "");
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({});
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  // Filter chips
  const filterChips = ["All", "Full-Time", "Remote", "Hybrid", "Engineering", "Sales"];

  // Filtered jobs calculation
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());

      let matchesChip = true;
      if (activeChip === "Remote") {
        matchesChip = job.location.toLowerCase().includes("remote");
      } else if (activeChip === "Hybrid") {
        matchesChip = job.location.toLowerCase().includes("hybrid");
      } else if (activeChip === "Full-Time") {
        matchesChip = job.type.toLowerCase().includes("full");
      } else if (activeChip === "Engineering") {
        matchesChip = job.tags.some(t => ["react", "node", "tech", "developer", "engineer", "software"].includes(t.toLowerCase())) ||
          job.title.toLowerCase().includes("developer") || job.title.toLowerCase().includes("engineer");
      } else if (activeChip === "Sales") {
        matchesChip = job.tags.some(t => ["sales", "b2b", "marketing", "business"].includes(t.toLowerCase())) ||
          job.title.toLowerCase().includes("sales");
      }

      return matchesSearch && matchesLocation && matchesChip;
    });
  }, [initialJobs, searchQuery, locationQuery, activeChip]);

  // Selected job instance
  const selectedJob = useMemo(() => {
    return filteredJobs.find((j) => j.id === selectedJobId) || filteredJobs[0] || initialJobs[0];
  }, [filteredJobs, selectedJobId, initialJobs]);

  const toggleSaveJob = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedJobs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const shareJob = (job: Job, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this opening for ${job.title} at ${job.company} on Step-Up Career:`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Job link copied to clipboard!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
          <Sparkles size={14} /> Verified Opportunities Across India
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-3 tracking-tight font-heading">
          Explore Jobs & Careers
        </h1>
        <p className="text-text-body text-base max-w-2xl">
          Search and apply for verified roles in IT, Sales, Operations, and Management. Direct hiring workflows powered by Step-Up Career.
        </p>
      </div>

      {/* Global Search & Location Controls */}
      <div className="bg-bg-card p-4 rounded-xl border border-border-main mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-body/60" size={18} />
            <input 
              type="text" 
              placeholder="Search by job title, skill, or company name..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="md:col-span-4 relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-body/60" size={18} />
            <input 
              type="text" 
              placeholder="Location (e.g. Bangalore, Remote, Mumbai)" 
              className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <button 
              onClick={() => {}}
              className="w-full h-full py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              Search
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border-main overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-text-body mr-1">Filter:</span>
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                activeChip === chip 
                  ? "bg-brand-accent text-white" 
                  : "bg-bg-main border border-border-main text-text-body hover:border-brand-accent/50"
              }`}
            >
              {chip}
            </button>
          ))}
          {(searchQuery || locationQuery || activeChip !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setLocationQuery("");
                setActiveChip("All");
              }}
              className="text-xs text-brand-accent hover:underline font-semibold ml-auto whitespace-nowrap"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Main Split Layout: Left Card List, Right Details Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Job Cards List (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-text-body font-semibold px-1 mb-2">
            <span>Showing {filteredJobs.length} verified jobs</span>
            <span>Sorted by: Most Recent</span>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="bg-bg-card border border-border-main rounded-xl p-10 text-center">
              <p className="text-base font-bold text-text-heading mb-1">No jobs found</p>
              <p className="text-xs text-text-body">Try refining your search terms or clearing location filters.</p>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isSelected = selectedJob?.id === job.id;
              const isSaved = !!savedJobs[job.id];

              return (
                <motion.div
                  key={job.id}
                  onClick={() => {
                    setSelectedJobId(job.id);
                    setMobileDetailOpen(true);
                  }}
                  className={`p-5 rounded-xl border transition-all cursor-pointer relative bg-bg-card ${
                    isSelected 
                      ? "border-brand-accent shadow-md ring-1 ring-brand-accent/30" 
                      : "border-border-main hover:border-brand-accent/40 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold text-base shrink-0 border border-brand-accent/20">
                        {job.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-text-heading text-base leading-snug font-heading">
                          {job.title}
                        </h3>
                        <p className="text-xs text-text-body font-medium flex items-center gap-1.5 mt-0.5">
                          <Building2 size={13} className="text-brand-accent" />
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button 
                        onClick={(e) => toggleSaveJob(job.id, e)}
                        className={`p-1.5 rounded hover:bg-bg-main transition-colors ${isSaved ? "text-red-500" : "text-text-body/60 hover:text-text-heading"}`}
                        title={isSaved ? "Saved" : "Save Job"}
                      >
                        <Heart size={15} fill={isSaved ? "currentColor" : "none"} />
                      </button>
                      <button 
                        onClick={(e) => shareJob(job, e)}
                        className="p-1.5 rounded text-text-body/60 hover:text-text-heading hover:bg-bg-main transition-colors"
                        title="Share Job"
                      >
                        <Share2 size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs text-text-body my-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={13} className="text-text-body/70 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee size={13} className="text-text-body/70 shrink-0" />
                      <span className="font-semibold text-text-heading truncate">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={13} className="text-text-body/70 shrink-0" />
                      <span className="truncate">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={13} className="text-text-body/70 shrink-0" />
                      <span className="truncate">{job.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border-main/50">
                    {job.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-bg-main border border-border-main text-[11px] text-text-body font-medium">
                        {tag}
                      </span>
                    ))}
                    {job.tags.length > 3 && (
                      <span className="text-[11px] text-text-body/70 font-medium">
                        +{job.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Right Column: Sticky Job Detail Panel (7 cols on lg) */}
        <div className="hidden lg:block lg:col-span-7 sticky top-28">
          {selectedJob ? (
            <div className="bg-bg-card border border-border-main rounded-xl p-8 shadow-sm space-y-6">
              {/* Header inside details */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-border-main">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent mb-2">
                    <ShieldCheck size={14} /> Verified Partner Employer
                  </div>
                  <h2 className="text-2xl font-bold text-text-heading font-heading">
                    {selectedJob.title}
                  </h2>
                  <p className="text-sm font-semibold text-text-body mt-1">
                    {selectedJob.company} • {selectedJob.location}
                  </p>
                  <p className="text-xs text-text-body/70 mt-1 flex items-center gap-1">
                    <Clock size={12} /> Posted {selectedJob.posted}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-lg font-extrabold text-brand-accent font-heading block">
                    {selectedJob.salary}
                  </span>
                  <span className="text-xs text-text-body uppercase tracking-wider font-semibold">
                    {selectedJob.type}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href={`/apply?role=${encodeURIComponent(selectedJob.title)}`}
                  className="flex-1 py-3 px-6 bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                >
                  Quick Apply Now <ArrowRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/917697334430?text=${encodeURIComponent(`Hi Step-Up Career, I am interested in applying for: ${selectedJob.title} at ${selectedJob.company}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 border border-border-main bg-bg-main hover:bg-border-main text-text-heading text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  WhatsApp Apply
                </a>
              </div>

              {/* Job Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-bg-main rounded-lg border border-border-main text-center">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-text-body block">Role Type</span>
                  <span className="text-xs font-bold text-text-heading">{selectedJob.type}</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-text-body block">Location</span>
                  <span className="text-xs font-bold text-text-heading">{selectedJob.location.split(",")[0]}</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-text-body block">Experience</span>
                  <span className="text-xs font-bold text-text-heading">1 - 5 Years</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-text-body block">Status</span>
                  <span className="text-xs font-bold text-green-500">Actively Hiring</span>
                </div>
              </div>

              {/* Skills required */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-bg-main border border-border-main text-xs font-medium text-text-heading">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Overview */}
              <div className="space-y-3 text-sm text-text-body leading-relaxed border-t border-border-main pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading">About The Position</h4>
                <p>
                  Step-Up Career is actively partnering with {selectedJob.company} to recruit qualified candidates for the {selectedJob.title} opening. 
                  Candidates will work closely with cross-functional teams to deliver high-impact results in a fast-paced environment.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading pt-2">Key Responsibilities</h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs text-text-body">
                  <li>Deliver high-performance execution aligned with team targets and sprint deliverables.</li>
                  <li>Collaborate with stakeholders and managers to optimize daily operational workflows.</li>
                  <li>Uphold industry compliance, code quality, and professional communication standards.</li>
                  <li>Actively identify process bottlenecks and implement scalable solutions.</li>
                </ul>

                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading pt-2">Candidate Benefits</h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs text-text-body">
                  <li>Competitive industry compensation: {selectedJob.salary}.</li>
                  <li>Fast-track interview and feedback cycles through Step-Up Career.</li>
                  <li>Performance incentives and rapid professional career progression.</li>
                </ul>
              </div>

              {/* Footer inside details */}
              <div className="pt-4 border-t border-border-main flex items-center justify-between text-xs text-text-body">
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                  <CheckCircle size={14} /> Zero Candidate Fees Guarantee
                </span>
                <a 
                  href="mailto:jobs@stepup-career.in?subject=Report Job Opening"
                  className="hover:text-red-500 transition-colors"
                >
                  Report job
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-bg-card border border-border-main rounded-xl p-12 text-center text-text-body text-sm">
              Select a job from the list to view comprehensive specifications and application instructions.
            </div>
          )}
        </div>
      </div>

      {/* Mobile Detail Drawer/Modal */}
      {mobileDetailOpen && selectedJob && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-bg-main p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-border-main mb-6">
            <h3 className="font-bold text-text-heading text-lg font-heading truncate">
              {selectedJob.title}
            </h3>
            <button 
              onClick={() => setMobileDetailOpen(false)}
              className="p-2 text-text-body hover:text-text-heading"
            >
              <X size={22} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-brand-accent">{selectedJob.company}</p>
              <p className="text-xs text-text-body">{selectedJob.location} • {selectedJob.salary}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href={`/apply?role=${encodeURIComponent(selectedJob.title)}`}
                className="w-full py-3 bg-brand-accent text-white font-bold text-center rounded-lg text-sm"
              >
                Quick Apply Now
              </Link>
              <a
                href={`https://wa.me/917697334430?text=${encodeURIComponent(`Hi Step-Up Career, I am interested in applying for: ${selectedJob.title} at ${selectedJob.company}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-bg-card border border-border-main text-text-heading font-semibold text-center rounded-lg text-sm"
              >
                Apply via WhatsApp
              </a>
            </div>

            <div className="space-y-3 text-xs text-text-body leading-relaxed">
              <h4 className="font-bold text-text-heading uppercase">About The Role</h4>
              <p>
                Step-Up Career is recruiting for {selectedJob.company}. Fast-tracked application and verified screening process.
              </p>
              <h4 className="font-bold text-text-heading uppercase pt-2">Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedJob.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-bg-card border border-border-main rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
