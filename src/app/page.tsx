"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  ArrowRight, Star, TrendingUp, Users, CheckCircle, Search, 
  MapPin, Briefcase, Award, Shield, Timer, Globe, Heart, Share2,
  Calendar, Layers, Sparkles, Database, BadgeCheck
} from "lucide-react";
import { useState, useEffect } from "react";

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

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    { title: "IT Recruitment", desc: "Sourcing top-tier developers, QA testers, and tech leaders." },
    { title: "Non-IT Hiring", desc: "End-to-end recruitment for retail, logistics, sales, and operations." },
    { title: "Bulk Hiring", desc: "Scaling workforces quickly with coordinated high-volume recruitment drives." },
    { title: "Contract Staffing", desc: "Flexible staffing options for project-based and temporary roles." },
    { title: "Permanent Hiring", desc: "Acquiring permanent, value-driven full-time talent for your business." },
    { title: "Campus Hiring", desc: "Connecting organizations directly with fresh graduates and promising talent." },
    { title: "Executive Search", desc: "Identifying and recruiting senior management and C-level leaders." },
    { title: "Project Staffing", desc: "Dedicated personnel models tailored to complete specific projects." },
    { title: "Recruitment Advertising", desc: "Marketing your job posts to the right target candidate pools." },
    { title: "Employer Branding", desc: "Enhancing your corporate reputation to attract passive candidates." },
    { title: "Payroll Support", desc: "Streamlining external candidate onboarding and monthly payroll execution." },
    { title: "AI Recruitment", desc: "Leveraging smart candidate sourcing and automated matching." },
    { title: "HR Consulting", desc: "Designing workforce strategies and organizational structures." }
  ];

  const featuredJobs = [
    {
      title: "Senior Full Stack Engineer",
      company: "InnovateTech Labs",
      salary: "₹18L - ₹24L",
      location: "Bangalore, India",
      experience: "5+ Years",
      mode: "Hybrid",
      tags: ["React", "Next.js", "Node.js"]
    },
    {
      title: "Corporate HR Manager",
      company: "Reliance Retail Operations",
      salary: "₹10L - ₹14L",
      location: "Mumbai, India",
      experience: "4-6 Years",
      mode: "On-site",
      tags: ["HR Strategy", "Compliance", "Talent Acquisition"]
    },
    {
      title: "Senior Product Designer",
      company: "InstaGrow FinTech",
      salary: "₹12L - ₹18L",
      location: "Remote, India",
      experience: "3+ Years",
      mode: "Remote",
      tags: ["Figma", "UI/UX", "Product Strategy"]
    }
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
    { year: "2026", title: "100+ Clients Served", desc: "Successfully partnered with top tech startups and retail giants." },
    { year: "2026", title: "500+ Candidates Placed", desc: "Helped professional candidates land active full-time roles." },
    { year: "2026", title: "PAN India Expansion", desc: "Expanded candidate networks to cover over 20+ major metropolitan cities." }
  ];

  const testimonials = [
    { name: "Rahul Sharma", role: "Software Engineering Lead", review: "Step-Up Career connected me with an incredible hybrid role in Bangalore. The recruiter was transparent, and the process was incredibly fast!" },
    { name: "Anjali Gupta", role: "HR Lead, VeloTech Solutions", review: "Partnering with Step-Up Career solved our bulk hiring bottleneck. They delivered verified, qualified resumes within days." },
    { name: "Vikram Malhotra", role: "Product Manager", review: "The support I received during negotiation and onboarding was top-notch. It felt like having a personal career coach." }
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 w-fit border border-brand-accent/20">
              <BadgeCheck className="text-brand-accent animate-pulse" size={16} />
              <span className="text-xs font-semibold text-brand-accent tracking-wide uppercase">Premium Recruitment Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-heading leading-[1.1] font-heading">
              Empowering Futures.<br />
              <span className="text-brand-accent">Connecting Talent.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-body max-w-xl leading-relaxed">
              Find verified opportunities across India with one trusted recruitment partner. We bridge the gap between world-class talent and leading organizations.
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
          
          {/* Hero Right Visual: Connection Line Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full aspect-square max-w-lg mx-auto flex items-center justify-center relative">
              {/* Premium abstract SVG graphics instead of heavy images */}
              <svg className="w-full h-full max-w-[400px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                <path d="M40 100 H160" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M100 40 V160" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2" />
                <circle cx="100" cy="100" r="30" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" />
                
                {/* Node 1: Central hub */}
                <circle cx="100" cy="100" r="12" fill="#3B82F6" />
                <circle cx="100" cy="100" r="22" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" />
                
                {/* Node 2: Candidate */}
                <circle cx="40" cy="100" r="8" fill="#1E293B" className="dark:fill-white" />
                <circle cx="40" cy="100" r="14" stroke="#3B82F6" strokeWidth="1" />
                
                {/* Node 3: Recruiter */}
                <circle cx="160" cy="100" r="8" fill="#1E293B" className="dark:fill-white" />
                <circle cx="160" cy="100" r="14" stroke="#3B82F6" strokeWidth="1" />

                {/* Node 4: Job Posting */}
                <circle cx="100" cy="40" r="8" fill="#3B82F6" />
                
                {/* Node 5: Success Placement */}
                <circle cx="100" cy="160" r="8" fill="#22C55E" />
              </svg>

              {/* Floating tags */}
              <div className="absolute top-10 left-10 bg-bg-card p-3 rounded-lg border border-border-main shadow-sm flex items-center gap-2">
                <Sparkles size={16} className="text-brand-accent" />
                <span className="text-xs font-bold text-text-heading">AI Job Matcher</span>
              </div>
              <div className="absolute bottom-10 right-10 bg-bg-card p-3 rounded-lg border border-border-main shadow-sm flex items-center gap-2">
                <Database size={16} className="text-green-500" />
                <span className="text-xs font-bold text-text-heading">Verified Databases</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Live Statistics Section */}
      <section className="py-16 bg-bg-card border-y border-border-main transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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

      {/* Featured Jobs Section */}
      <section id="jobs" className="py-24 px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-text-heading mb-4 font-heading">Featured Opportunities</h2>
              <p className="text-text-body max-w-2xl">Connect directly with organizations hiring today. Click Apply to start your quick application workflow.</p>
            </div>
            <Link 
              href="/jobs" 
              className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent-hover font-bold transition-colors whitespace-nowrap text-base group"
            >
              View All Job Board <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredJobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-bg-card border border-border-main rounded-xl flex flex-col justify-between hover:scale-[1.02] hover:border-brand-accent/50 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-md uppercase tracking-wider">
                      {job.mode}
                    </span>
                    <div className="flex gap-2">
                      <button className="text-text-body hover:text-red-500 p-1.5 transition-colors" title="Save Job">
                        <Heart size={16} />
                      </button>
                      <button className="text-text-body hover:text-brand-accent p-1.5 transition-colors" title="Share Job">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-text-heading mb-1 group-hover:text-brand-accent transition-colors font-heading">
                    {job.title}
                  </h3>
                  <p className="text-sm font-semibold text-text-body mb-4">{job.company}</p>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-text-body mb-6">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-brand-accent" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-brand-accent" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <Award size={14} className="text-brand-accent" />
                      {job.salary}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 bg-bg-main border border-border-main rounded text-xs text-text-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/apply?role=${encodeURIComponent(job.title)}`}
                    className="w-full py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold rounded-lg block text-sm transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 px-6 bg-bg-card border-y border-border-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-text-heading mb-4 font-heading">Our Recruiting Services</h2>
            <p className="text-text-body max-w-2xl mx-auto text-base">Comprehensive and custom workforce recruitment models to meet the requirements of any enterprise or startup.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="p-6 bg-bg-main border border-border-main rounded-xl hover:scale-[1.03] hover:border-brand-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-text-heading mb-2 font-heading">{svc.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{svc.desc}</p>
                </div>
                <Link 
                  href="/services" 
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
      <section className="py-24 px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-text-heading mb-4 font-heading">Why Choose Step-Up Career</h2>
            <p className="text-text-body max-w-2xl mx-auto text-base">We deliver speed, transparency, and nationwide reach to help corporate clients scale their workforce.</p>
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
      <section className="py-24 px-6 bg-bg-card border-y border-border-main relative z-10 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-text-heading mb-4 font-heading">Our Timeline</h2>
            <p className="text-text-body max-w-xl mx-auto">From registration to national footprint expansion, tracking our core milestones.</p>
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
                {/* Bullet node */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-brand-accent border-4 border-bg-card flex items-center justify-center shadow-sm"></div>
                
                <span className="text-xs font-bold text-brand-accent tracking-wider uppercase">{item.year}</span>
                <h3 className="text-xl font-bold text-text-heading mb-1.5 font-heading">{item.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-text-heading mb-16 font-heading">What People Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 bg-bg-card border border-border-main rounded-xl flex flex-col justify-between"
              >
                <div className="flex text-yellow-400 justify-center mb-4">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-sm text-text-body leading-relaxed mb-6 italic">
                  &ldquo;{item.review}&rdquo;
                </p>
                <div>
                  <h4 className="text-base font-bold text-text-heading font-heading">{item.name}</h4>
                  <p className="text-xs text-text-body font-semibold">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Banner */}
      <section className="py-16 bg-bg-card border-t border-border-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-body mb-8">
            Partnering with trusted sectors across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 dark:opacity-40">
            {["Information Technology", "Retail Operations", "BPO & Call Centers", "Sales & Marketing", "Healthcare Services"].map((sector, i) => (
              <span key={i} className="text-lg font-bold tracking-widest text-text-body font-heading whitespace-nowrap">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
