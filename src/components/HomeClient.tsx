"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Star, TrendingUp, Users, CheckCircle, Search, 
  MapPin, Briefcase, Award, Shield, Timer, Globe, Heart, Share2,
  Calendar, Layers, Sparkles, Database, BadgeCheck, Clock, IndianRupee,
  Cpu, Factory, BookOpen, Monitor, ShieldCheck, Zap, Activity,
  Sliders, FileCheck, CheckCircle2, ChevronRight, BarChart3,
  Network, Eye, RefreshCw, Send, Building2, PhoneCall
} from "lucide-react";
import { useState, useEffect } from "react";
import { Job } from "@/lib/getJobs";

// Hook to animate counting up numbers when in view, then keep slowly ticking
function Counter({ value, duration = 1.5, live = false }: { value: string; duration?: number; live?: boolean }) {
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
      if (start === end) {
        clearInterval(timer);
        if (live) {
          let liveCount = end;
          const liveTimer = setInterval(() => {
            liveCount += 1;
            setCount(liveCount);
          }, 4500);
          return () => clearInterval(liveTimer);
        }
      }
    }, Math.max(incrementTime, 16));

    return () => clearInterval(timer);
  }, [numericValue, duration, live]);

  return <span>{count}{suffix}</span>;
}

export default function HomeClient({ featuredJobs }: { featuredJobs: Job[] }) {
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({});
  const [heroTab, setHeroTab] = useState<"ai-data" | "workforce">("ai-data");
  const [activePipelineStep, setActivePipelineStep] = useState(0);
  const [selectedPillar, setSelectedPillar] = useState<"all" | "ai-data" | "workforce">("all");

  // Project Configurator state
  const [configService, setConfigService] = useState<"ai-data" | "recruitment">("ai-data");
  const [configSubtype, setConfigSubtype] = useState("Data Annotation & Labelling");
  const [configVolume, setConfigVolume] = useState("Pilot (<10k units / 1-5 roles)");
  const [configTimeline, setConfigTimeline] = useState("Immediate (Within 1-2 weeks)");

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

  // Auto-cycle through the pipeline demo steps in AI Data mode
  useEffect(() => {
    if (heroTab !== "ai-data") return;
    const interval = setInterval(() => {
      setActivePipelineStep(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroTab]);

  const pipelineSteps = [
    {
      title: "1. Data Ingestion",
      tag: "Raw Inputs",
      desc: "Multimodal ingestion of raw images, video clips, sensor feeds, and audio logs according to client-defined sampling rules.",
      telemetry: "Ingest Rate: 12.4k items/batch • Format: JSON, Parquet, Media",
      sampleBadge: "Source: Distributed Mobile & Studio Teams",
      metric: "99.9% Ingestion Integrity"
    },
    {
      title: "2. Precision Annotation",
      tag: "Human-in-the-Loop",
      desc: "Bounding boxes, polygonal segmentation, semantic classification, and keypoint mapping executed by trained annotator cohorts.",
      telemetry: "Label Density: 18 tags/frame • Guidelines: v2.4 Certified",
      sampleBadge: "CV Bounding Boxes & Object Tracking",
      metric: "Sub-pixel Precision Alignment"
    },
    {
      title: "3. Dual-Pass QA Review",
      tag: "Quality Gates",
      desc: "Double-blind consensus reviews and automated rubric validation to identify discrepancies before data is approved.",
      telemetry: "Consensus Threshold: >98% • Error Feedback Loops: Active",
      sampleBadge: "Cross-Verification by Senior Auditors",
      metric: "99.4% Verified Accuracy"
    },
    {
      title: "4. Structured Delivery",
      tag: "Production Ready",
      desc: "Exporting validated, structured training and test datasets into cloud buckets with compliance and audit trails.",
      telemetry: "SLA Delivery: Within 48h • Encrypted Handover",
      sampleBadge: "COCO / YOLO / Custom Schemas",
      metric: "Zero-Latency Client Handover"
    }
  ];

  const aiDataServices = [
    {
      id: "data-collection",
      title: "AI Data Collection",
      tag: "Multimodal",
      desc: "Organizing distributed contributor networks to collect real-world image, video, speech, and structured domain datasets under defined protocols.",
      features: ["Custom capture guidelines", "PAN-India contributor reach", "Consent & privacy compliance"]
    },
    {
      id: "annotation-labelling",
      title: "Data Annotation & Labelling",
      tag: "Computer Vision & NLP",
      desc: "High-precision 2D/3D bounding boxes, polygon masking, text intent classification, and NER tagging executed against project acceptance rubrics.",
      features: ["Polygon & keypoint annotation", "NER & text classification", "Trained domain contributors"]
    },
    {
      id: "data-processing",
      title: "Data Processing & Categorisation",
      tag: "Structuring",
      desc: "Transforming unstructured raw data into clean, normalized, and categorized schemas ready for machine learning pipelines.",
      features: ["Metadata extraction & deduplication", "Taxonomy classification", "Dataset curation & cleansing"]
    },
    {
      id: "quality-validation",
      title: "Quality Review & Validation",
      tag: "Double-Pass QA",
      desc: "Multi-tier human auditing workflows, consensus checks, and discrepancy resolution to guarantee reliable benchmark datasets.",
      features: ["Statistical spot audits", "Inter-annotator agreement metrics", "Real-time error escalation"]
    },
    {
      id: "human-in-the-loop",
      title: "Human-in-the-Loop Operations",
      tag: "Model Evaluation",
      desc: "Deploying human oversight teams for model output ranking, RLHF evaluation tasks, content classification, and edge-case exceptions.",
      features: ["Prompt & response evaluation", "Hallucination checking", "Safety & guideline verification"]
    },
    {
      id: "workforce-mobilization",
      title: "Project Workforce Coordination",
      tag: "Contributor Ops",
      desc: "End-to-end management of distributed project workers: contributor screening, task allocation, progress tracking, and operational SLA reporting.",
      features: ["Rapid cohort mobilization", "Active task distribution", "SLA monitoring & progress dashboards"]
    }
  ];

  const workforceServices = [
    {
      id: "ems-electronics",
      title: "EMS & Electronics Staffing",
      tag: "Hardware Assembly",
      desc: "Specialized hiring for PCB assembly, SMT line operations, embedded hardware, cleanroom technicians, and quality inspectors.",
      features: ["SMT & Line operators", "Cleanroom technicians", "IPC standard compliance"]
    },
    {
      id: "manufacturing-engineering",
      title: "Manufacturing & Heavy Engineering",
      tag: "Plant Operations",
      desc: "Recruitment for production engineering, plant operations, CNC machining, maintenance supervision, and industrial EHS safety.",
      features: ["Plant & shift managers", "CNC & tooling technicians", "Quality & safety leads"]
    },
    {
      id: "it-recruitment",
      title: "IT & Software Recruitment",
      tag: "Engineering Talent",
      desc: "Sourcing verified software engineers, full-stack developers, DevOps leads, QA automation specialists, and tech managers.",
      features: ["Full-Stack & Cloud architects", "QA automation specialists", "48h candidate shortlists"]
    },
    {
      id: "edtech-recruitment",
      title: "EdTech & Education Staffing",
      tag: "Academic & Sales",
      desc: "Sourcing academic counselors, BDA inside sales teams, curriculum architects, and LMS operations specialists.",
      features: ["Inside sales professionals", "Curriculum designers", "High-velocity hiring drives"]
    },
    {
      id: "bulk-hiring",
      title: "Bulk & Volume Recruitment",
      tag: "Rapid Scale",
      desc: "Orchestrating high-velocity recruitment drives, walk-in funnels, and mass onboarding for new facility launches across India.",
      features: ["Turnkey hiring drives", "Pre-screened talent pools", "Strict SLA turnaround"]
    },
    {
      id: "contract-staffing",
      title: "Project-Based Staffing",
      tag: "Agile Teams",
      desc: "Deploying dedicated project teams and flexible operational personnel for defined milestone delivery and seasonal demand.",
      features: ["Milestone-based staffing", "Verified candidate credentials", "Direct account coordination"]
    }
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

  const deliverySteps = [
    {
      num: "01",
      title: "Scope & Requirement Discovery",
      subtitle: "Aligning Objectives & Protocols",
      desc: "We analyze your project specifications, data schemas, volume requirements, skill matrices, acceptance thresholds, and turnaround timelines."
    },
    {
      num: "02",
      title: "Workflow & SLA Blueprint",
      subtitle: "Process Engineering",
      desc: "We establish detailed annotation guidelines, contributor briefing rubrics, double-pass QA checkpoints, and escalation procedures."
    },
    {
      num: "03",
      title: "Contributor & Talent Onboarding",
      subtitle: "Mobilizing Cohorts",
      desc: "We recruit, screen, and induct verified contributors or specialist candidates from our PAN-India talent network with NDA compliance."
    },
    {
      num: "04",
      title: "Execution & Dual-Pass QA",
      subtitle: "Precision Operations",
      desc: "Task queues are executed with real-time tracking, rigorous consensus audits, and active discrepancy resolution to ensure top-tier accuracy."
    },
    {
      num: "05",
      title: "Reconciliation & Secure Delivery",
      subtitle: "Production Handover",
      desc: "We reconcile completed milestones, deliver verified data packages or onboarded personnel, and provide comprehensive operational reports."
    }
  ];

  const timelineMilestones = [
    { year: "2025", title: "Step-Up Career Launch", desc: "Officially launched operations with a dedicated recruitment and staffing operations team." },
    { year: "2025", title: "MSME Registered", desc: "Certified by the Ministry of Micro, Small & Medium Enterprises, Govt. of India." },
    { year: "2026", title: "AI Data Operations Launch", desc: "Expanded services into human-powered AI data collection, annotation, and verification pipelines." },
    { year: "2026", title: "30+ Enterprise Partners", desc: "Successfully partnered with clients across manufacturing, EMS, EdTech, and technology sectors." },
    { year: "2026", title: "PAN-India Network", desc: "Expanded candidate and contributor reach across 20+ major metropolitan and industrial hubs." },
  ];

  const buildWhatsappConfiguratorUrl = () => {
    const text = `Hi Step-Up Career, I would like to enquire about:
- Pillar: ${configService === "ai-data" ? "AI Data Operations" : "Talent & Workforce Solutions"}
- Service: ${configSubtype}
- Scope/Volume: ${configVolume}
- Timeline: ${configTimeline}
Please connect with me to discuss requirements.`;
    return `https://wa.me/917697334430?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Header />
      
      {/* Hero Section: Modern AI Operations & Workforce Platform */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 bg-bg-main overflow-hidden transition-colors">
        {/* Subtle dot matrix grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-15 dark:bg-[radial-gradient(#334155_1px,transparent_1px)]"></div>
        
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-brand-accent/15 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Top Live Ticker / Operational Status Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8 pb-3 border-b border-border-main/60 text-[11px] text-text-body font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-text-heading">Operational Hubs Online</span>
              <span className="hidden sm:inline text-text-body/60">• Active in Bengaluru, Pune, NCR, Mumbai & 20+ Hubs</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-text-body/70">MSME Certified Partner</span>
              <span className="px-2 py-0.5 rounded bg-brand-accent/10 text-brand-accent font-semibold text-[10px] uppercase tracking-wider">
                India-Wide Delivery
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Bold Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 w-fit border border-brand-accent/25">
                <Sparkles className="text-brand-accent" size={14} />
                <span className="text-[11px] font-bold text-brand-accent tracking-wider uppercase">
                  AI Data Operations • Workforce Solutions • Talent
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-heading leading-[1.08] font-heading">
                Powering AI Data Operations. <br />
                <span className="text-brand-accent">Connecting Talent.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-text-body max-w-xl leading-relaxed">
                Step-Up Career delivers human-in-the-loop data operations, precision annotation, and structured quality workflows for AI teams — alongside specialized workforce recruitment across India.
              </p>
              
              {/* Dual Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a 
                  href="#project-configurator"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl transition-all shadow-md hover:shadow-brand-accent/20 hover:scale-[1.01] text-sm group"
                >
                  <span>Discuss an AI Data Project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-bg-card hover:bg-border-main/80 text-text-heading border border-border-main font-bold rounded-xl transition-all text-sm shadow-sm"
                >
                  <span>Explore Workforce Solutions</span>
                </Link>
              </div>

              {/* Quick candidate access pill */}
              <div className="flex items-center gap-3 pt-3 text-xs text-text-body">
                <span className="text-text-body/60">Looking for jobs?</span>
                <Link href="/jobs" className="font-semibold text-brand-accent hover:underline flex items-center gap-1">
                  <span>Browse 100% Free Job Board</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </motion.div>
            
            {/* Right Column: Interactive Dual-Pillar Operations Simulator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl border border-border-main bg-bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Simulator Header & Tab Switcher */}
                <div className="px-5 py-4 border-b border-border-main bg-bg-main/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                    <span className="text-xs font-mono text-text-body/70 ml-2 font-semibold">operations_console.sh</span>
                  </div>

                  <div className="flex rounded-lg bg-bg-main p-1 border border-border-main text-xs font-semibold">
                    <button 
                      onClick={() => setHeroTab("ai-data")}
                      className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${heroTab === "ai-data" ? "bg-brand-accent text-white shadow-sm" : "text-text-body hover:text-text-heading"}`}
                    >
                      <Database size={13} /> AI Data
                    </button>
                    <button 
                      onClick={() => setHeroTab("workforce")}
                      className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${heroTab === "workforce" ? "bg-brand-accent text-white shadow-sm" : "text-text-body hover:text-text-heading"}`}
                    >
                      <Users size={13} /> Workforce
                    </button>
                  </div>
                </div>

                {/* Simulator Content Area */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {heroTab === "ai-data" ? (
                      <motion.div 
                        key="ai-data-tab"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Status bar */}
                        <div className="flex items-center justify-between pb-3 border-b border-border-main/60">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-brand-accent tracking-wider block">Live Workflow Pipeline</span>
                            <h3 className="text-base font-bold text-text-heading font-heading">Human-in-the-Loop Data Lifecycle</h3>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                            <Activity size={12} className="animate-spin" /> Live Pipeline
                          </span>
                        </div>

                        {/* Interactive Step Navigator */}
                        <div className="grid grid-cols-4 gap-2">
                          {pipelineSteps.map((step, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActivePipelineStep(idx)}
                              className={`p-2.5 rounded-xl border text-left transition-all ${activePipelineStep === idx ? "border-brand-accent bg-brand-accent/10 shadow-sm" : "border-border-main bg-bg-main hover:border-brand-accent/40"}`}
                            >
                              <span className="text-[10px] font-bold text-text-body block">Step 0{idx + 1}</span>
                              <span className="text-xs font-bold text-text-heading truncate block">{step.tag}</span>
                            </button>
                          ))}
                        </div>

                        {/* Active Step Visual Canvas */}
                        <div className="p-4 rounded-xl bg-bg-main border border-border-main/80 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded bg-brand-accent text-white text-[11px] font-bold">
                              {pipelineSteps[activePipelineStep].title}
                            </span>
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              {pipelineSteps[activePipelineStep].metric}
                            </span>
                          </div>

                          <p className="text-xs text-text-body leading-relaxed">
                            {pipelineSteps[activePipelineStep].desc}
                          </p>

                          <div className="pt-2 border-t border-border-main/60 flex items-center justify-between text-[11px] font-mono text-text-body/70">
                            <span>{pipelineSteps[activePipelineStep].telemetry}</span>
                            <span className="px-2 py-0.5 rounded bg-bg-card border border-border-main text-text-heading font-semibold">
                              {pipelineSteps[activePipelineStep].sampleBadge}
                            </span>
                          </div>
                        </div>

                        {/* Highlights summary */}
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="p-2.5 rounded-lg bg-bg-main border border-border-main">
                            <span className="text-[10px] text-text-body block uppercase font-bold">Modality</span>
                            <span className="text-xs font-bold text-text-heading">CV • NLP • Multimodal</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-bg-main border border-border-main">
                            <span className="text-[10px] text-text-body block uppercase font-bold">Quality Standard</span>
                            <span className="text-xs font-bold text-brand-accent">Double-Pass QA</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-bg-main border border-border-main">
                            <span className="text-[10px] text-text-body block uppercase font-bold">Turnaround</span>
                            <span className="text-xs font-bold text-text-heading">Strict SLA</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="workforce-tab"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-border-main/60">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-brand-accent tracking-wider block">Enterprise Sourcing Network</span>
                            <h3 className="text-base font-bold text-text-heading font-heading">High-Velocity Workforce Sourcing</h3>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center gap-1.5">
                            <Zap size={12} /> 48h Turnaround SLA
                          </span>
                        </div>

                        {/* Sourcing Hubs Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-bg-main border border-border-main flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-brand-accent flex items-center justify-center shrink-0">
                              <Cpu size={16} />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-text-heading">EMS & Electronics</h4>
                              <p className="text-[11px] text-text-body">SMT line, PCB assembly, testing</p>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-bg-main border border-border-main flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                              <Factory size={16} />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-text-heading">Manufacturing</h4>
                              <p className="text-[11px] text-text-body">Plant engineers, CNC & safety</p>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-bg-main border border-border-main flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                              <Monitor size={16} />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-text-heading">IT & Software</h4>
                              <p className="text-[11px] text-text-body">Developers, DevOps, QA engineers</p>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-bg-main border border-border-main flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                              <BookOpen size={16} />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-text-heading">EdTech & Corporate</h4>
                              <p className="text-[11px] text-text-body">Inside sales, academic counseling</p>
                            </div>
                          </div>
                        </div>

                        {/* Bottom SLA guarantee box */}
                        <div className="p-4 rounded-xl bg-bg-main border border-border-main flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="text-emerald-500" size={18} />
                            <div>
                              <span className="font-bold text-text-heading block">Pre-Screened Candidates Only</span>
                              <span className="text-[11px] text-text-body">Verified credentials & background check</span>
                            </div>
                          </div>
                          <Link 
                            href="/services" 
                            className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
                          >
                            <span>View Sectors</span> &rarr;
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Dynamic Statistics Strip with Live Ticker */}
      <section className="py-14 bg-bg-card border-y border-border-main transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-bg-main/50 border border-border-main/50">
            <span className="text-4xl md:text-5xl font-extrabold text-brand-accent tracking-tight font-heading flex items-center justify-center gap-1">
              <Counter value="500" live={true} />
              <span className="text-2xl">+</span>
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-heading">Candidates Placed</span>
            <span className="text-[11px] text-text-body/70 font-medium">and mobilizing active cohorts every day</span>
          </div>

          <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-bg-main/50 border border-border-main/50">
            <span className="text-4xl md:text-5xl font-extrabold text-brand-accent tracking-tight font-heading flex items-center justify-center gap-1">
              <Counter value="30" />
              <span className="text-2xl">+</span>
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-heading">Clients Served</span>
            <span className="text-[11px] text-text-body/70 font-medium">across manufacturing, electronics, tech & EdTech</span>
          </div>

          <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-bg-main/50 border border-border-main/50">
            <span className="text-4xl md:text-5xl font-extrabold text-brand-accent tracking-tight font-heading flex items-center justify-center gap-1">
              <Counter value="20" />
              <span className="text-2xl">+</span>
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-heading">Sourcing Hubs</span>
            <span className="text-[11px] text-text-body/70 font-medium">PAN-India industrial and metropolitan footprint</span>
          </div>
        </div>
      </section>

      {/* Dual-Pillar Interactive Service Matrix */}
      <section className="py-24 px-4 sm:px-6 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
              <Layers size={13} /> Two Integrated Business Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight font-heading">
              Our Core Operations & Services
            </h2>
            <p className="text-text-body text-sm sm:text-base mt-3 leading-relaxed">
              Step-Up Career bridges human operations with modern industry requirements: supporting high-grade AI data pipelines alongside fast-turnaround enterprise recruitment.
            </p>

            {/* Pillar Selector Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setSelectedPillar("all")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${selectedPillar === "all" ? "bg-brand-accent text-white shadow-sm" : "bg-bg-card border border-border-main text-text-body hover:text-text-heading"}`}
              >
                All Capabilities
              </button>
              <button
                onClick={() => setSelectedPillar("ai-data")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${selectedPillar === "ai-data" ? "bg-brand-accent text-white shadow-sm" : "bg-bg-card border border-border-main text-text-body hover:text-text-heading"}`}
              >
                <Database size={13} /> Pillar A: AI Data Operations
              </button>
              <button
                onClick={() => setSelectedPillar("workforce")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${selectedPillar === "workforce" ? "bg-brand-accent text-white shadow-sm" : "bg-bg-card border border-border-main text-text-body hover:text-text-heading"}`}
              >
                <Users size={13} /> Pillar B: Workforce & Staffing
              </button>
            </div>
          </div>

          {/* Pillar A: AI Data Operations Cards */}
          {(selectedPillar === "all" || selectedPillar === "ai-data") && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-border-main">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                    <Database size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-heading font-heading">Pillar A — AI Data Operations</h3>
                    <p className="text-xs text-text-body">Human-in-the-loop data collection, annotation, and validation workflows</p>
                  </div>
                </div>
                <Link 
                  href="/ai-data" 
                  className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
                >
                  <span>View Dedicated AI Data Page</span> &rarr;
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiDataServices.map((svc, idx) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-brand-accent/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-wider">
                          {svc.tag}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-bg-main border border-border-main flex items-center justify-center text-text-body group-hover:text-brand-accent transition-colors">
                          <CheckCircle2 size={14} />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-text-heading mb-2 font-heading group-hover:text-brand-accent transition-colors">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-text-body leading-relaxed mb-4">
                        {svc.desc}
                      </p>

                      <ul className="space-y-1.5 pt-3 border-t border-border-main/50 text-[11px] text-text-body">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 mt-4 border-t border-border-main/50">
                      <a 
                        href="#project-configurator"
                        onClick={() => {
                          setConfigService("ai-data");
                          setConfigSubtype(svc.title);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
                      >
                        <span>Discuss this capability</span> &rarr;
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Pillar B: Workforce & Talent Solutions Cards */}
          {(selectedPillar === "all" || selectedPillar === "workforce") && (
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-border-main">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Users size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-heading font-heading">Pillar B — Talent & Workforce Solutions</h3>
                    <p className="text-xs text-text-body">Permanent recruitment, bulk hiring drives, and project staffing across India</p>
                  </div>
                </div>
                <Link 
                  href="/services" 
                  className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
                >
                  <span>Explore all hiring solutions</span> &rarr;
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workforceServices.map((svc, idx) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-brand-accent/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                          {svc.tag}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-bg-main border border-border-main flex items-center justify-center text-text-body group-hover:text-brand-accent transition-colors">
                          <CheckCircle2 size={14} />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-text-heading mb-2 font-heading group-hover:text-brand-accent transition-colors">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-text-body leading-relaxed mb-4">
                        {svc.desc}
                      </p>

                      <ul className="space-y-1.5 pt-3 border-t border-border-main/50 text-[11px] text-text-body">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 mt-4 border-t border-border-main/50 flex items-center justify-between">
                      <Link 
                        href={`/services#${svc.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
                      >
                        <span>Learn more</span> &rarr;
                      </Link>
                      <a 
                        href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20we%20have%20a%20hiring%20requirement%20to%20discuss."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-text-body hover:text-text-heading"
                      >
                        Fast Enquiry
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5-Step Project Delivery Engine (Bespoke Workflow Component) */}
      <section className="py-24 px-4 sm:px-6 bg-bg-card border-y border-border-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-2.5 border border-brand-accent/20">
              <FileCheck size={13} /> Disciplined Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight font-heading">
              How Project Delivery Works
            </h2>
            <p className="text-text-body text-sm sm:text-base mt-2">
              A structured operational methodology that turns complex project specs into consistent, verified deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {deliverySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-bg-main border border-border-main hover:border-brand-accent/50 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-brand-accent font-heading font-mono">
                      {step.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-accent/40 group-hover:bg-brand-accent transition-colors"></span>
                  </div>

                  <h3 className="text-sm font-bold text-text-heading mb-1 font-heading">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-text-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-Up Career Enterprise Recruitment OS (CRM + ATS + HRMS) */}
      <section id="platform" className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative z-10 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full filter blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Enterprise Recruitment OS • CRM + ATS + HRMS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading mb-4 leading-tight">
              One Unified Engine for <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400 bg-clip-text text-transparent">
                Clients, Candidates &amp; Internal Teams
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Step-Up Career eliminates messy spreadsheets by unifying client commercial tracking, multi-portal ATS sourcing, and team HRMS operations into one high-velocity system.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Recruitment CRM */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 text-xl font-bold mb-6 group-hover:scale-105 transition-transform">
                  <Building2 size={24} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-heading">Recruitment CRM</h3>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
                    Client Side
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Manage high-value corporate mandates, commercial terms, replacement warranties, and revenue operations.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-800">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Client Commercials, MSA &amp; Fee Agreements</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>18% GST Invoicing &amp; Payment Tracking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Guarantee Tenure Countdown &amp; Replacement Alerts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Client Magic Link Portal for Fast Review</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Revenue &amp; Mandates</span>
                <span className="text-indigo-400 font-semibold">Real-Time Sync</span>
              </div>
            </motion.div>

            {/* Card 2: Applicant Tracking System (ATS) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full filter blur-2xl pointer-events-none"></div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 text-xl font-bold mb-6 group-hover:scale-105 transition-transform">
                  <Zap size={24} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-heading">Applicant Tracking (ATS)</h3>
                  <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 text-[10px] font-bold uppercase tracking-wider">
                    Sourcing Engine
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Streamline multi-portal resume intake, interview scheduling, and candidate ownership pipelines.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-800">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>1-Click Bulk Resume Import (Naukri, Apna, LinkedIn)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Zero Duplicate Engine (E.164 Phone Normalization)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Visual Kanban Pipeline (Screening &rarr; Joined)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Candidate WhatsApp &amp; Call Activity Logs</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Zero Duplicates</span>
                <span className="text-sky-400 font-semibold">E.164 Locked</span>
              </div>
            </motion.div>

            {/* Card 3: Team HRMS & Recruiter Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 text-xl font-bold mb-6 group-hover:scale-105 transition-transform">
                  <Users size={24} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-heading">Internal HRMS &amp; Ops</h3>
                  <span className="px-2 py-0.5 rounded bg-teal-500/15 text-teal-300 text-[10px] font-bold uppercase tracking-wider">
                    Staff &amp; Payroll
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Track recruiter attendance, manage team leaves, monitor leaderboards, and automate payroll with PF deductions.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-800">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>1-Click Clock-In &amp; Real-Time Presence Board</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Leave Requests &amp; Manager Approval Workflows</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Automated Payroll with 12% PF &amp; LOP Deductions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Recruiter Targets, Calling SLAs &amp; Leaderboards</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Operations</span>
                <span className="text-teal-400 font-semibold">12% PF &amp; Payroll</span>
              </div>
            </motion.div>
          </div>

          {/* Metrics & Performance Strip */}
          <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <span className="text-2xl font-extrabold text-indigo-400 font-heading block">Zero Duplicate Profiles</span>
              <span className="text-xs text-slate-400">E.164 phone &amp; email normalization guarantees clean data</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-sky-400 font-heading block">3x Faster Turnaround</span>
              <span className="text-xs text-slate-400">1-click resume parsing across Naukri, Apna &amp; LinkedIn</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-teal-400 font-heading block">100% Data Security</span>
              <span className="text-xs text-slate-400">Role-based permissions, contact masking &amp; audit trails</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://crm.stepup-career.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Access Step-Up CRM Portal</span>
              <ArrowRight size={16} />
            </a>

            <Link
              href="/platform"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center"
            >
              <span>Explore Recruitment OS Architecture</span>
            </Link>
          </div>
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
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.6]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

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
                <Sparkles size={13} /> Verified Openings
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
                    className="p-6 bg-bg-main border border-border-main rounded-xl flex flex-col justify-between hover:scale-[1.01] hover:border-brand-accent/50 transition-all group shadow-sm"
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
                          <span key={tIdx} className="px-2.5 py-0.5 bg-bg-card border border-border-main rounded text-xs text-text-body">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          href={`/jobs?id=${job.id}`}
                          className="w-full py-2.5 bg-bg-card hover:bg-border-main text-text-heading border border-border-main text-center font-semibold rounded-lg block text-xs transition-colors flex items-center justify-center gap-1"
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

      {/* Interactive Project Scope Configurator (The "Instant Requirement Builder") */}
      <section id="project-configurator" className="py-24 px-4 sm:px-6 bg-bg-main relative z-10 transition-colors scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border-main shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
                <Sliders size={13} /> Project Scope Configurator
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-heading font-heading mb-3">
                Configure Your Project Requirement
              </h2>
              <p className="text-sm text-text-body max-w-2xl mb-8">
                Select your parameters below to generate an immediate structured scope. Our delivery team will review and respond with estimated turnarounds.
              </p>

              <div className="space-y-6">
                {/* 1. Pillar Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-text-heading block mb-2">
                    1. Select Service Pillar
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setConfigService("ai-data");
                        setConfigSubtype("Data Annotation & Labelling");
                      }}
                      className={`p-4 rounded-xl border text-left transition-all ${configService === "ai-data" ? "border-brand-accent bg-brand-accent/10 shadow-sm" : "border-border-main bg-bg-main hover:border-brand-accent/40"}`}
                    >
                      <Database className="text-brand-accent mb-1.5" size={18} />
                      <span className="text-sm font-bold text-text-heading block">AI Data Operations</span>
                      <span className="text-xs text-text-body">Data collection, annotation, QA validation</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setConfigService("recruitment");
                        setConfigSubtype("Specialized Technical Recruitment");
                      }}
                      className={`p-4 rounded-xl border text-left transition-all ${configService === "recruitment" ? "border-brand-accent bg-brand-accent/10 shadow-sm" : "border-border-main bg-bg-main hover:border-brand-accent/40"}`}
                    >
                      <Users className="text-brand-accent mb-1.5" size={18} />
                      <span className="text-sm font-bold text-text-heading block">Talent & Workforce</span>
                      <span className="text-xs text-text-body">Bulk hiring, IT, EMS & manufacturing staffing</span>
                    </button>
                  </div>
                </div>

                {/* 2. Specific Service Subtype */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-text-heading block mb-2">
                    2. Specific Requirement Focus
                  </label>
                  <select
                    value={configSubtype}
                    onChange={(e) => setConfigSubtype(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-bg-main border border-border-main text-text-heading text-sm font-medium focus:outline-none focus:border-brand-accent"
                  >
                    {configService === "ai-data" ? (
                      <>
                        <option value="Data Annotation & Labelling">Data Annotation & Labelling (CV / NLP)</option>
                        <option value="Multimodal Data Collection">Multimodal Data Collection (Image, Audio, Video)</option>
                        <option value="Data Processing & Categorisation">Data Processing & Categorisation</option>
                        <option value="Quality Review & Verification">Quality Review & Verification (Dual-pass QA)</option>
                        <option value="Human-in-the-Loop Operations">Human-in-the-Loop & Model Evaluation</option>
                        <option value="Distributed Project Workforce">Distributed Project Workforce Mobilization</option>
                      </>
                    ) : (
                      <>
                        <option value="Specialized Technical Recruitment">Specialized Technical Recruitment (IT, Cloud, Dev)</option>
                        <option value="EMS & Electronics Assembly Staffing">EMS & Electronics Assembly Staffing (SMT lines)</option>
                        <option value="Manufacturing & Plant Engineering">Manufacturing & Plant Engineering</option>
                        <option value="Bulk & Volume Hiring Drives">Bulk & Volume Hiring Drives</option>
                        <option value="EdTech & Inside Sales Hiring">EdTech & Inside Sales Hiring</option>
                        <option value="Project-Based Contract Staffing">Project-Based Contract Staffing</option>
                      </>
                    )}
                  </select>
                </div>

                {/* 3. Scope & Timeline Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-text-heading block mb-2">
                      3. Project Scope / Volume
                    </label>
                    <select
                      value={configVolume}
                      onChange={(e) => setConfigVolume(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-bg-main border border-border-main text-text-heading text-sm font-medium focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Pilot (<10k units / 1-5 roles)">Pilot Project (&lt;10k units / 1-5 roles)</option>
                      <option value="Medium Volume (10k-100k units / 5-20 roles)">Medium Volume (10k–100k units / 5–20 roles)</option>
                      <option value="Enterprise Scale (>100k units / 20+ roles)">Enterprise Scale (&gt;100k units / 20+ roles)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-text-heading block mb-2">
                      4. Target Launch Timeline
                    </label>
                    <select
                      value={configTimeline}
                      onChange={(e) => setConfigTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-bg-main border border-border-main text-text-heading text-sm font-medium focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Immediate (Within 1-2 weeks)">Immediate (Within 1–2 weeks)</option>
                      <option value="Planned (Within 1 month)">Planned (Within 1 month)</option>
                      <option value="Exploring Feasibility">Exploring Feasibility / R&amp;D</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-border-main/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-text-body">
                    <span className="font-semibold text-text-heading block">Zero Obligation Review</span>
                    <span>Direct response from our operations team</span>
                  </div>

                  <a
                    href={buildWhatsappConfiguratorUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit &amp; Discuss via WhatsApp</span>
                    <Send size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 px-4 sm:px-6 bg-bg-card border-y border-border-main relative z-10 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-4 font-heading">Our Timeline</h2>
            <p className="text-text-body max-w-xl mx-auto text-sm">Tracking our milestones from initial registration to dual-pillar national delivery.</p>
          </div>
          
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

      {/* Partner Logos / Sectors Banner */}
      <section className="py-16 bg-bg-main relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-body mb-8">
            Supporting critical industrial &amp; technology workflows across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 dark:opacity-40">
            {["AI & Data Teams", "EMS & Electronics Assembly", "Manufacturing & Heavy Engineering", "EdTech & Education", "Information Technology", "Enterprise Operations"].map((sector, i) => (
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
