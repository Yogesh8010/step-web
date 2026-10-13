"use client";

import { motion } from "framer-motion";
import { 
  Search, MapPin, Building2, Clock, Briefcase, IndianRupee, 
  Heart, Share2, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, X
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Job } from "@/lib/getJobs";

export default function JobList({ 
  initialJobs,
  initialJobId,
}: { 
  initialJobs: Job[];
  initialJobId?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [activeChip, setActiveChip] = useState("All");

  const startingJobId = useMemo(() => {
    if (initialJobId && initialJobs.some(j => j.id === initialJobId)) {
      return initialJobId;
    }
    return initialJobs[0]?.id || "";
  }, [initialJobId, initialJobs]);

  const [selectedJobId, setSelectedJobId] = useState<string>(startingJobId);
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({});
  const [mobileDetailOpen, setMobileDetailOpen] = useState(Boolean(initialJobId));
  // Cache AI-generated JDs keyed by job id so we don't re-fetch on every click
  const [aiJdCache, setAiJdCache] = useState<Record<string, string>>({});
  const [aiJdLoading, setAiJdLoading] = useState(false);

  // Lock background scroll on mobile when detail modal is open
  useEffect(() => {
    if (mobileDetailOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileDetailOpen]);

  // Auto-fetch AI JD when a job with no description is selected
  useEffect(() => {
    const selected = initialJobs.find(j => j.id === selectedJobId);
    if (!selected) return;
    // Already has a real JD or already cached — skip
    if (selected.description || aiJdCache[selectedJobId]) return;

    setAiJdLoading(true);
    const params = new URLSearchParams({
      title: selected.title,
      tags: (selected.tags || []).join(", "),
      salary: selected.salary,
      location: selected.location,
      type: selected.type,
    });

    fetch(`/api/generate-jd?${params.toString()}`)
      .then(r => r.json())
      .then(data => {
        if (data.generated && data.description) {
          setAiJdCache(prev => ({ ...prev, [selectedJobId]: data.description }));
        }
      })
      .catch(() => {}) // Fail silently — fallback text handles it
      .finally(() => setAiJdLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedJobId]);

  // Filter chips
  const filterChips = ["All", "Full-Time", "Remote", "Hybrid", "Engineering", "Sales"];

  // Filtered jobs calculation (defensive against undefined/null values)
  const filteredJobs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const loc = locationQuery.trim().toLowerCase();

    return initialJobs.filter((job) => {
      const matchesSearch = !q || 
        (job.title && job.title.toLowerCase().includes(q)) || 
        (job.company && job.company.toLowerCase().includes(q)) ||
        (job.salary && job.salary.toLowerCase().includes(q)) ||
        (job.type && job.type.toLowerCase().includes(q)) ||
        (Array.isArray(job.tags) && job.tags.some(tag => tag && tag.toLowerCase().includes(q)));
        
      const matchesLocation = !loc || 
        (job.location && job.location.toLowerCase().includes(loc));

      let matchesChip = true;
      if (activeChip === "Remote") {
        matchesChip = (job.location || "").toLowerCase().includes("remote");
      } else if (activeChip === "Hybrid") {
        matchesChip = (job.location || "").toLowerCase().includes("hybrid");
      } else if (activeChip === "Full-Time") {
        matchesChip = (job.type || "").toLowerCase().includes("full");
      } else if (activeChip === "Engineering") {
        matchesChip = 
          (Array.isArray(job.tags) && job.tags.some(t => ["react", "node", "tech", "developer", "engineer", "software"].includes((t || "").toLowerCase()))) ||
          (job.title || "").toLowerCase().includes("developer") || 
          (job.title || "").toLowerCase().includes("engineer");
      } else if (activeChip === "Sales") {
        matchesChip = 
          (Array.isArray(job.tags) && job.tags.some(t => ["sales", "b2b", "marketing", "business"].includes((t || "").toLowerCase()))) ||
          (job.title || "").toLowerCase().includes("sales");
      }

      return matchesSearch && matchesLocation && matchesChip;
    });
  }, [initialJobs, searchQuery, locationQuery, activeChip]);

  // Keep selectedJobId synchronized with filtered results
  useEffect(() => {
    if (filteredJobs.length > 0 && !filteredJobs.some(j => j.id === selectedJobId)) {
      setSelectedJobId(filteredJobs[0].id);
    }
  }, [filteredJobs, selectedJobId]);

  // Selected job instance
  const selectedJob = useMemo(() => {
    return filteredJobs.find((j) => j.id === selectedJobId) || filteredJobs[0] || initialJobs[0];
  }, [filteredJobs, selectedJobId, initialJobs]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const resultsEl = document.getElementById("job-results-container");
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-body/60" size={18} />
            <input 
              type="text" 
              placeholder="Search by job title, skill, or company name..." 
              className="w-full pl-10 pr-9 py-2.5 rounded-lg glass-input text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-body/60 hover:text-text-heading p-1 transition-colors"
                title="Clear search"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
          <div className="md:col-span-4 relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-body/60" size={18} />
            <input 
              type="text" 
              placeholder="Location (e.g. Bangalore, Remote, Mumbai)" 
              className="w-full pl-10 pr-9 py-2.5 rounded-lg glass-input text-sm"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
            {locationQuery && (
              <button
                type="button"
                onClick={() => setLocationQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-body/60 hover:text-text-heading p-1 transition-colors"
                title="Clear location"
                aria-label="Clear location"
              >
                <X size={15} />
              </button>
            )}
          </div>
          <div className="md:col-span-2">
            <button 
              type="submit"
              className="w-full h-full py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Search size={16} /> Search
            </button>
          </div>
        </form>

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
      <div id="job-results-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28">
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
                        <h3 className="font-bold text-text-heading text-base leading-snug font-heading group-hover:text-brand-accent transition-colors">
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
                    {(job.tags || []).slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-bg-main border border-border-main text-[11px] text-text-body font-medium">
                        {tag}
                      </span>
                    ))}
                    {(job.tags || []).length > 3 && (
                      <span className="text-[11px] text-text-body/70 font-medium">
                        +{(job.tags || []).length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Clear CTA on card to open full JD */}
                  <div className="mt-3 pt-2.5 border-t border-border-main/40 flex items-center justify-between text-xs">
                    <span className="text-brand-accent font-bold flex items-center gap-1 hover:underline">
                      <span>View Full Job Description</span>
                      <ArrowRight size={13} />
                    </span>
                    <span className="text-[11px] text-text-body/60 font-medium lg:hidden">
                      Tap to open
                    </span>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Right Column: Sticky Job Detail Panel (7 cols on lg) */}
        <div className="hidden lg:block lg:col-span-7 sticky top-24">
          {selectedJob ? (
            <div className="bg-bg-card border border-border-main rounded-xl p-6 lg:p-8 shadow-sm space-y-6 max-h-[calc(100vh-7.5rem)] overflow-y-auto overscroll-contain">
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
                  {(selectedJob.tags || []).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-bg-main border border-border-main text-xs font-medium text-text-heading">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Overview */}
              <div className="space-y-3 text-sm text-text-body leading-relaxed border-t border-border-main pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading">About The Position</h4>

                {/* Priority: Sheet JD → AI-generated → fallback */}
                {selectedJob.description ? (
                  <p className="whitespace-pre-line">{selectedJob.description}</p>
                ) : aiJdLoading ? (
                  <div className="flex items-center gap-2 text-xs text-text-body/60 animate-pulse">
                    <Sparkles size={13} /> Generating job description…
                  </div>
                ) : aiJdCache[selectedJob.id] ? (
                  <p>{aiJdCache[selectedJob.id]}</p>
                ) : (
                  <p>
                    Step-Up Career is exclusively recruiting for the <strong className="text-text-heading">{selectedJob.title}</strong> role on behalf of a verified employer partner.
                    We manage the complete hiring process — from application screening and shortlisting to interview scheduling and offer coordination — so you get faster responses with zero hassle.
                  </p>
                )}

                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading pt-2">Key Responsibilities</h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs text-text-body">
                  <li>Deliver high-performance execution aligned with team targets and sprint deliverables.</li>
                  <li>Collaborate with stakeholders and managers to optimize daily operational workflows.</li>
                  <li>Uphold industry compliance, quality standards, and professional communication practices.</li>
                  <li>Proactively identify process gaps and implement effective, scalable solutions.</li>
                </ul>

                <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading pt-2">Why Apply Through Step-Up Career</h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs text-text-body">
                  <li>Competitive industry compensation: {selectedJob.salary}.</li>
                  <li>Direct shortlisting to the employer — no middlemen, no unnecessary delays.</li>
                  <li>100% free for candidates. We are paid by employers, never by you.</li>
                  <li>Dedicated placement support from application to day-one onboarding.</li>
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

      {/* Mobile Detail Drawer/Modal with Full JD */}
      {mobileDetailOpen && selectedJob && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-bg-main animate-in fade-in duration-200">
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-20 bg-bg-card/95 backdrop-blur border-b border-border-main px-4 py-3 flex items-center justify-between">
            <button 
              onClick={() => setMobileDetailOpen(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-text-body hover:text-text-heading active:scale-95 transition-all p-1"
            >
              <ArrowLeft size={18} />
              <span>Back to Jobs</span>
            </button>

            <div className="flex items-center gap-1">
              <button 
                onClick={(e) => toggleSaveJob(selectedJob.id, e)}
                className={`p-2 rounded-lg border border-border-main ${savedJobs[selectedJob.id] ? "text-red-500 bg-red-500/10" : "text-text-body"}`}
                title="Save Job"
              >
                <Heart size={16} fill={savedJobs[selectedJob.id] ? "currentColor" : "none"} />
              </button>
              <button 
                onClick={(e) => shareJob(selectedJob, e)}
                className="p-2 rounded-lg border border-border-main text-text-body hover:text-text-heading"
                title="Share Job"
              >
                <Share2 size={16} />
              </button>
              <button 
                onClick={() => setMobileDetailOpen(false)}
                className="p-2 text-text-body hover:text-text-heading rounded-lg hover:bg-bg-main"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Complete JD Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 pb-32 overscroll-contain">
            {/* Header inside details */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent mb-2">
                <ShieldCheck size={14} /> Verified Partner Employer
              </div>
              <h2 className="text-2xl font-bold text-text-heading font-heading leading-tight">
                {selectedJob.title}
              </h2>
              <p className="text-sm font-semibold text-text-body mt-1.5">
                {selectedJob.company} • {selectedJob.location}
              </p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-main/60">
                <span className="text-xl font-extrabold text-brand-accent font-heading">
                  {selectedJob.salary}
                </span>
                <span className="text-xs text-text-body/70 flex items-center gap-1">
                  <Clock size={13} /> Posted {selectedJob.posted}
                </span>
              </div>
            </div>

            {/* Job Highlights Grid */}
            <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-bg-card rounded-xl border border-border-main text-center">
              <div className="p-2.5 rounded-lg bg-bg-main border border-border-main/50">
                <span className="text-[10px] uppercase tracking-wider text-text-body block">Role Type</span>
                <span className="text-xs font-bold text-text-heading">{selectedJob.type}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-bg-main border border-border-main/50">
                <span className="text-[10px] uppercase tracking-wider text-text-body block">Location</span>
                <span className="text-xs font-bold text-text-heading truncate block">{selectedJob.location.split(",")[0]}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-bg-main border border-border-main/50">
                <span className="text-[10px] uppercase tracking-wider text-text-body block">Experience</span>
                <span className="text-xs font-bold text-text-heading">1 - 5 Years</span>
              </div>
              <div className="p-2.5 rounded-lg bg-bg-main border border-border-main/50">
                <span className="text-[10px] uppercase tracking-wider text-text-body block">Status</span>
                <span className="text-xs font-bold text-green-500">Actively Hiring</span>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading mb-2.5">
                Required Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(selectedJob.tags || []).map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-bg-card border border-border-main text-xs font-medium text-text-heading">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Job Overview / Description */}
            <div className="space-y-3.5 text-sm text-text-body leading-relaxed border-t border-border-main pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading">About The Position</h4>

              {/* Priority: Sheet JD → AI-generated → fallback */}
              {selectedJob.description ? (
                <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">{selectedJob.description}</p>
              ) : aiJdLoading ? (
                <div className="flex items-center gap-2 text-xs text-text-body/60 animate-pulse">
                  <Sparkles size={13} /> Generating job description…
                </div>
              ) : aiJdCache[selectedJob.id] ? (
                <p className="text-xs sm:text-sm leading-relaxed">{aiJdCache[selectedJob.id]}</p>
              ) : (
                <p className="text-xs sm:text-sm leading-relaxed">
                  Step-Up Career is exclusively recruiting for the <strong className="text-text-heading">{selectedJob.title}</strong> role on behalf of a verified employer partner.
                  We manage the complete hiring process — from application screening and shortlisting to interview scheduling and offer coordination — so you get faster responses with zero hassle.
                </p>
              )}

              <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading pt-2">Key Responsibilities</h4>
              <ul className="space-y-2 list-disc list-inside text-xs text-text-body">
                <li>Deliver high-performance execution aligned with team targets and sprint deliverables.</li>
                <li>Collaborate with stakeholders and managers to optimize daily operational workflows.</li>
                <li>Uphold industry compliance, quality standards, and professional communication practices.</li>
                <li>Proactively identify process gaps and implement effective, scalable solutions.</li>
              </ul>

              <h4 className="text-xs font-bold uppercase tracking-wider text-text-heading pt-2">Why Apply Through Step-Up Career</h4>
              <ul className="space-y-2 list-disc list-inside text-xs text-text-body">
                <li>Competitive industry compensation: {selectedJob.salary}.</li>
                <li>Direct shortlisting to the employer — no middlemen, no unnecessary delays.</li>
                <li>100% free for candidates. We are paid by employers, never by you.</li>
                <li>Dedicated placement support from application to day-one onboarding.</li>
              </ul>
            </div>

            {/* Trust Footer */}
            <div className="pt-4 border-t border-border-main flex items-center justify-between text-xs text-text-body">
              <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-semibold">
                <CheckCircle size={14} /> Zero Candidate Fees Guarantee
              </span>
              <a 
                href="mailto:jobs@stepup-career.in?subject=Report Job Opening"
                className="hover:text-red-500 transition-colors text-[11px]"
              >
                Report job
              </a>
            </div>
          </div>

          {/* Fixed Sticky Bottom Action Bar for 1-Tap Application */}
          <div className="fixed bottom-0 left-0 right-0 z-30 bg-bg-card/95 backdrop-blur border-t border-border-main p-4 flex items-center gap-2.5 shadow-lg">
            <Link
              href={`/apply?role=${encodeURIComponent(selectedJob.title)}`}
              className="flex-1 py-3 px-4 bg-brand-accent hover:bg-brand-accent-hover active:scale-98 text-white font-bold text-center rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2"
            >
              Quick Apply Now <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/917697334430?text=${encodeURIComponent(`Hi Step-Up Career, I am interested in applying for: ${selectedJob.title} at ${selectedJob.company}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 bg-bg-main border border-border-main hover:bg-border-main active:scale-98 text-text-heading font-semibold text-center rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap"
            >
              WhatsApp Apply
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
