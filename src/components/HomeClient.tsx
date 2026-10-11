"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Star, TrendingUp, Users, CheckCircle, Search, 
  MapPin, Briefcase, Award, Shield, Timer, Globe, Heart, Share2,
  Calendar, Layers, Sparkles, Database, BadgeCheck, Clock, IndianRupee,
  Cpu, Factory, BookOpen, Monitor, ShieldCheck, Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { Job } from "@/lib/getJobs";

// Hook to animate counting up numbers when in view
function Counter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, Math.max(incrementTime, 16));

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return <span>{count}{suffix}</span>;
}

export default function HomeClient({ featuredJobs }: { featuredJobs: Job[] }) {
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({});

  const toggleSaveJob = (id: string) => {
    setSavedJobs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const shareJob = (job: Job) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this opening for ${job.title} at ${job.company} on Step-Up Career:`,
        url: `${window.location.origin}/jobs`,
      }).catch(() => {});
    } else if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/jobs`);
      alert("Job link copied to clipboard!");
    }
  };

  const services = [
    { id: "ems-electronics", title: "EMS & Electronics Staffing", desc: "Specialized hiring for PCB assembly, SMT line operations, embedded hardware, and cleanroom technicians." },
    { id: "manufacturing-engineering", title: "Manufacturing & Heavy Engineering", desc: "End-to-end recruitment for plant operations, production engineering, factory supervision, and EHS safety." },
    { id: "edtech-recruitment", title: "EdTech & Education Staffing", desc: "Sourcing top-tier academic counselors, B2C education sales leads, curriculum architects, and LMS specialists." },
    { id: "it-recruitment", title: "IT Recruitment", desc: "Sourcing top-tier developers, QA automation specialists, cloud DevOps, and engineering leaders." },
    { id: "non-it-hiring", title: "Non-IT Hiring", desc: "End-to-end recruitment for customer support, retail, corporate sales, accounting, and supply chain." },
    { id: "bulk-hiring", title: "Bulk Hiring", desc: "Scaling workforces quickly with coordinated high-volume recruitment drives and walk-in funnels." },
    { id: "contract-staffing", title: "Contract Staffing", desc: "Flexible staffing options for project-based deliverables and seasonal operational surges." },
    { id: "permanent-hiring", title: "Permanent Hiring", desc: "Acquiring permanent, value-driven full-time talent aligned with long-term retention goals." },
    { id: "campus-hiring", title: "Campus Hiring", desc: "Connecting organizations directly with fresh graduates and high-potential entry-level talent." },
    { id: "executive-search", title: "Executive Search", desc: "Discreet headhunting for senior directors, VPs, and C-suite leadership roles." },
    { id: "project-staffing", title: "Project Staffing", desc: "Dedicated personnel models tailored to complete specific technical and business milestones." },
    { id: "recruitment-advertising", title: "Recruitment Advertising", desc: "Targeted campaigns marketing your job openings across specialized professional talent pools." },
    { id: "employer-branding", title: "Employer Branding", desc: "Enhancing your corporate reputation to attract high-caliber passive industry candidates." },
    { id: "payroll-support", title: "Payroll Support", desc: "Streamlining external candidate onboarding, statutory compliance, and monthly compensation disbursal." },
    { id: "ai-recruitment", title: "AI Recruitment", desc: "Leveraging smart candidate sourcing, semantic taxonomy parsing, and automated match scoring." },
    { id: "hr-consulting", title: "HR Consulting", desc: "Designing workforce strategies, compensation benchmarking, and organizational frameworks." }
  ];

  const valueProps = [
    { title: "Verified Employers", desc: "Work only with legally compliant companies offering verified jobs." },
    { title: "Fast Hiring", desc: "Accelerate your talent sourcing cycle with our pre-screened pool." },
    { title: "PAN India Network", desc: "Access premium job opportunities and candidates across all Indian states." },
    { title: "Dedicated Recruiters", desc: "Get specialized account managers working closely with your hiring team." },
    { title: "End-to-End Recruitment", desc: "Complete support from job scoping and sourcing to negotiation and onboarding." },
    { title: "Industry Experts", desc: "Work with niche recruitment specialists who know your industry inside out." },
    { title: "24/7 Candidate Support", desc: "Dedicated resources to guide candidate workflows and answer queries." }
  ];

  const timelineMilestones = [
    { year: "2025", title: "Step-Up Career Launch", desc: "Officially started operations with dedicated core team." },
    { year: "2025", title: "MSME Registered", desc: "Certified by the Ministry of Micro, Small & Medium Enterprises, Govt. of India." },
    { year: "2026", title: "100+ Clients Served", desc: "Successfully partnered with top manufacturing, EMS, EdTech, and tech firms." },
    { year: "2026", title: "500+ Candidates Placed", desc: "Helped professional candidates land active full-time roles." },
    { year: "2026", title: "PAN India Expansion", desc: "Expanded candidate networks to cover over 20+ major metropolitan and industrial hubs." }
  ];

  const featuredSectors = [
    {
      id: "ems-electronics",
      title: "EMS & Electronics Staffing",
      subtitle: "SMT & Hardware Assembly",
      desc: "PCB assembly, SMT line operations, cleanroom technicians, and embedded hardware engineers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tag: "High Growth",
      icon: Cpu,
    },
    {
      id: "manufacturing-engineering",
      title: "Manufacturing & Engineering",
      subtitle: "Plant & Production Ops",
      desc: "Plant managers, CNC supervisors, production engineers, and industrial safety officers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tag: "Core Sector",
      icon: Factory,
    },
    {
      id: "edtech-recruitment",
      title: "EdTech & Education Staffing",
      subtitle: "Academic & Inside Sales",
      desc: "Academic counselors, BDA sales teams, curriculum architects, and LMS platform leads.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      tag: "Active Hiring",
      icon: BookOpen,
    },
    {
      id: "it-recruitment",
      title: "IT & Software Staffing",
      subtitle: "Cloud, DevOps & Full Stack",
      desc: "Full-stack developers, QA automation specialists, DevOps leads, and technical directors.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tag: "Tech Talent",
      icon: Monitor,
    },
  ];

  const testimonials = [
    { 
      name: "Rahul Sharma", 
      role: "Software Engineering Lead", 
      review: "Step-Up Career connected me with an incredible hybrid role in Bangalore. The recruiter was transparent, and the process was incredibly fast!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    { 
      name: "Anjali Gupta", 
      role: "HR Lead, VeloTech Solutions", 
      review: "Partnering with Step-Up Career solved our bulk hiring bottleneck. They delivered verified, qualified resumes within days.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    { 
      name: "Vikram Malhotra", 
      role: "Product Manager", 
      review: "The support I received during negotiation and onboarding was top-notch. It felt like having a personal career coach.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-bg-main overflow-hidden transition-colors">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-10 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"></div>
        
        {/* Subtle background gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full mix-blend-screen filter blur-[128px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 w-fit border border-brand-accent/20">
              <BadgeCheck className="text-brand-accent animate-pulse" size={16} />
              <span className="text-xs font-semibold text-brand-accent tracking-wide uppercase">Empowering Futures • Connecting Talent</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-text-heading leading-[1.1] font-heading">
              Empowering Futures.<br />
              <span className="text-brand-accent">Connecting Talent.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-text-body max-w-xl leading-relaxed">
              Find verified opportunities across India with one trusted recruitment partner. Specializing in EMS, Manufacturing, EdTech, IT, and Corporate staffing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link 
                href="/jobs" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-lg transition-all hover:scale-[1.02] shadow-md text-base"
              >
                Find Jobs <Search size={18} />
              </Link>
              <a 
                href="https://wa.me/917697334430?text=Hi,%20we%20are%20looking%20to%20hire%20talent%20for%20our%20company." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bg-card hover:bg-border-main text-text-heading border border-border-main font-bold rounded-lg transition-all hover:scale-[1.02] text-base"
              >
                Hire Talent <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          
          {/* Hero Right Visual: High-Impact Image & Animated Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              {/* Outer decorative gradient aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent/30 via-teal-500/20 to-brand-accent/30 rounded-3xl blur-2xl opacity-60 dark:opacity-40 -z-10 animate-pulse"></div>

              {/* Main Feature Workplace Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border-main shadow-2xl bg-bg-card group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Step-Up Career Corporate Talent Consultation"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.95] dark:brightness-[0.88]"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

                {/* Inset bottom pill banner */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass border border-white/20 text-white backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-teal-300 font-bold block">PAN-India Sourcing</span>
                    <span className="text-xs font-semibold">20+ Industrial & Metropolitan Hubs</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-bold">IT</div>
                    <div className="w-7 h-7 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center text-[10px] font-bold">EMS</div>
                    <div className="w-7 h-7 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-[10px] font-bold">MFG</div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: Fast-Track Sourcing */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-bg-card/95 backdrop-blur-md p-3.5 rounded-xl border border-border-main shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-text-heading">48h Fast Turnaround</span>
                  </div>
                  <p className="text-[11px] text-text-body font-medium">Pre-screened verified resumes</p>
                </div>
              </motion.div>

              {/* Floating Widget 2: Google Reviews Badge */}
              <motion.a
                href="https://maps.app.goo.gl/83WeGccke8hHNxMH9"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -right-4 bg-bg-card/95 backdrop-blur-md p-3.5 rounded-xl border border-border-main shadow-xl flex items-center gap-3 z-20 hover:border-brand-accent transition-colors cursor-pointer"
                title="View Google Reviews"
              >
                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center">
                  <Star size={18} fill="currentColor" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-text-heading">4.9 / 5.0 Rating</span>
                    <span className="text-[10px] text-brand-accent font-semibold">Google</span>
                  </div>
                  <p className="text-[11px] text-text-body font-medium">85+ authentic candidate reviews</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Live Statistics Section */}
      <section className="py-16 bg-bg-card border-y border-border-main transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: "500+", label: "Candidates Placed" },
            { value: "50+", label: "Clients Served" },
            { value: "98%", label: "Success Rate" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-5xl md:text-6xl font-extrabold text-brand-accent tracking-tight font-heading">
                <Counter value={stat.value} />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-text-body">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Industry Sectors Spotlight (High-Impact Photo Cards) */}
      <section className="py-24 px-4 sm:px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-2.5 border border-brand-accent/20">
                <Sparkles size={13} /> Specialized Recruitment Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight font-heading">
                Industries We Power
              </h2>
              <p className="text-text-body text-sm sm:text-base max-w-xl mt-2">
                Custom talent sourcing pipelines built for industrial manufacturing, electronics production, education, and enterprise tech.
              </p>
            </div>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-accent-hover hover:underline uppercase tracking-wider group"
            >
              Explore all 16 service sectors <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSectors.map((sector, sIdx) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-border-main bg-bg-card shadow-md hover:shadow-2xl transition-all h-[380px] flex flex-col justify-end"
                >
                  {/* Photo background with zoom on hover */}
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.6]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

                  {/* Card Content Overlay */}
                  <div className="relative z-10 p-6 space-y-2.5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-accent/90 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        {sector.tag}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-heading leading-snug">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {sector.desc}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/services#${sector.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 group-hover:text-white transition-colors"
                      >
                        <span>Explore Roles</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Featured Jobs Section */}
      <section id="jobs" className="py-24 px-4 sm:px-6 bg-bg-card border-t border-border-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-2">
                <Sparkles size={13} /> Live Job Openings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-3 font-heading">Featured Opportunities</h2>
              <p className="text-text-body max-w-2xl text-sm">Direct, active openings synced live from our verified recruitment database.</p>
            </div>
            <Link 
              href="/jobs" 
              className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent-hover font-bold transition-colors whitespace-nowrap text-base group"
            >
              View All Openings <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {featuredJobs.length === 0 ? (
            <div className="p-12 text-center bg-bg-card border border-border-main rounded-xl text-text-body">
              <p className="font-semibold mb-2">New job openings are currently being updated.</p>
              <Link href="/jobs" className="text-brand-accent font-bold hover:underline text-sm">
                Browse Full Job Board &rarr;
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredJobs.map((job, idx) => {
                const isSaved = !!savedJobs[job.id];

                return (
                  <motion.div 
                    key={job.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 bg-bg-card border border-border-main rounded-xl flex flex-col justify-between hover:scale-[1.02] hover:border-brand-accent/50 transition-all group shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-md uppercase tracking-wider">
                          {job.type || "Full-Time"}
                        </span>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => toggleSaveJob(job.id)}
                            className={`p-1.5 rounded transition-colors ${isSaved ? "text-red-500" : "text-text-body/60 hover:text-text-heading"}`}
                            title={isSaved ? "Saved" : "Save Job"}
                          >
                            <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
                          </button>
                          <button 
                            onClick={() => shareJob(job)}
                            className="text-text-body/60 hover:text-brand-accent p-1.5 transition-colors"
                            title="Share Job"
                          >
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>

                      <Link 
                        href={`/jobs?id=${job.id}`}
                        className="text-xl font-bold text-text-heading mb-1 hover:text-brand-accent transition-colors font-heading line-clamp-1 block"
                        title={`View job description for ${job.title}`}
                      >
                        {job.title}
                      </Link>
                      <p className="text-sm font-semibold text-text-body mb-4">{job.company}</p>
                      
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-text-body mb-6">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin size={14} className="text-brand-accent shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <Clock size={14} className="text-brand-accent shrink-0" />
                          <span className="truncate">{job.posted}</span>
                        </div>
                        <div className="flex items-center gap-1.5 col-span-2">
                          <IndianRupee size={14} className="text-brand-accent shrink-0" />
                          <span className="font-semibold text-text-heading">{job.salary}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1.5 min-h-[26px]">
                        {job.tags && job.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-0.5 bg-bg-main border border-border-main rounded text-xs text-text-body">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          href={`/jobs?id=${job.id}`}
                          className="w-full py-2.5 bg-bg-main hover:bg-border-main text-text-heading border border-border-main text-center font-semibold rounded-lg block text-xs transition-colors flex items-center justify-center gap-1"
                        >
                          View JD <ArrowRight size={13} />
                        </Link>
                        <Link 
                          href={`/apply?role=${encodeURIComponent(job.title)}`}
                          className="w-full py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold rounded-lg block text-xs transition-colors shadow-sm flex items-center justify-center"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Services Grid Section - Connected directly to specific tags on /services */}
      <section id="services" className="py-24 px-4 sm:px-6 bg-bg-card border-y border-border-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-4 font-heading">Our Recruiting Services</h2>
            <p className="text-text-body max-w-2xl mx-auto text-sm sm:text-base">Specialized recruitment solutions tailored for EMS, Manufacturing, EdTech, IT, and Enterprise businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc, i) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="p-6 bg-bg-main border border-border-main rounded-xl hover:scale-[1.02] hover:border-brand-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-text-heading mb-2 font-heading">{svc.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{svc.desc}</p>
                </div>
                {/* Direct anchor link to specific service tag */}
                <Link 
                  href={`/services#${svc.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-accent-hover mt-6 uppercase tracking-wider"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Step-Up Career */}
      <section className="py-24 px-4 sm:px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-4 font-heading">Why Choose Step-Up Career</h2>
            <p className="text-text-body max-w-2xl mx-auto text-sm sm:text-base">We deliver speed, transparency, and nationwide reach to help corporate clients scale their workforce.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="p-6 bg-bg-card border border-border-main rounded-xl flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                  <CheckCircle className="text-brand-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-heading mb-1.5 font-heading">{prop.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 px-4 sm:px-6 bg-bg-card border-y border-border-main relative z-10 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-4 font-heading">Our Timeline</h2>
            <p className="text-text-body max-w-xl mx-auto text-sm">From registration to national footprint expansion, tracking our core milestones.</p>
          </div>
          
          {/* Vertical timeline */}
          <div className="relative border-l border-border-main pl-8 space-y-12 max-w-lg mx-auto">
            {timelineMilestones.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-brand-accent border-4 border-bg-card flex items-center justify-center shadow-sm"></div>
                
                <span className="text-xs font-bold text-brand-accent tracking-wider uppercase">{item.year}</span>
                <h3 className="text-xl font-bold text-text-heading mb-1.5 font-heading">{item.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-3 font-heading">What People Say</h2>
            <p className="text-sm text-text-body mb-4">Read authentic reviews from placed professionals and corporate partners.</p>
            <a 
              href="https://maps.app.goo.gl/83WeGccke8hHNxMH9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border-main text-xs font-semibold text-text-heading hover:border-brand-accent transition-colors shadow-sm"
              title="Read verified reviews on Google Maps"
            >
              <div className="flex text-yellow-400">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
              </div>
              <span>Rated 4.9 on Google • View Google Reviews</span>
              <ArrowRight size={12} className="text-brand-accent" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 bg-bg-card border border-border-main rounded-2xl flex flex-col justify-between shadow-sm hover:border-brand-accent/40 transition-colors"
              >
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                  </div>
                  <p className="text-sm text-text-body leading-relaxed mb-6 italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border-main/50">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-brand-accent/30 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-text-heading font-heading flex items-center gap-1">
                      {item.name}
                      <CheckCircle size={13} className="text-brand-accent fill-brand-accent/20" />
                    </h4>
                    <p className="text-[11px] text-text-body font-medium">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos / Sectors Banner */}
      <section className="py-16 bg-bg-card border-t border-border-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-body mb-8">
            Partnering with trusted sectors across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 dark:opacity-40">
            {["EMS & Electronics", "Manufacturing & Heavy Engineering", "EdTech & Education", "Information Technology", "Retail & Consumer Operations", "BPO & Customer Success"].map((sector, i) => (
              <span key={i} className="text-sm sm:text-base font-bold tracking-wider text-text-body font-heading whitespace-nowrap">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
