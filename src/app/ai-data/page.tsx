"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Database, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Layers, Cpu, Activity, FileCheck, Eye, RefreshCw, Send,
  Sliders, Users, CheckSquare, Terminal
} from "lucide-react";

export default function AIDataPage() {
  const capabilities = [
    {
      id: "data-collection",
      title: "AI Data Collection",
      tag: "Multimodal Capture",
      desc: "Mobilizing verified contributor networks to capture real-world image, video, text, and environmental data according to structured client protocols.",
      points: [
        "Distributed capture across diverse demographics & environments",
        "Rigorous contributor briefing and sensor specification adherence",
        "Strict consent, privacy, and regulatory compliance protocols"
      ]
    },
    {
      id: "annotation-labelling",
      title: "Data Annotation & Labelling",
      tag: "Computer Vision & NLP",
      desc: "High-precision 2D/3D bounding boxes, polygonal segmentation, semantic masks, NER tagging, and audio transcription executed by trained annotators.",
      points: [
        "Bounding box, polygon, and keypoint tracking for CV models",
        "Text intent classification, NER, and entity linking for NLP",
        "Guideline calibration with continuous error-reduction loops"
      ]
    },
    {
      id: "data-processing",
      title: "Data Processing & Categorisation",
      tag: "Taxonomy & Cleansing",
      desc: "Transforming messy, heterogeneous datasets into clean, normalized, and categorized schemas ready for training and evaluation pipelines.",
      points: [
        "Metadata extraction, normalization, and deduplication",
        "Hierarchical taxonomy classification and filtering",
        "Dataset partitioning into balanced training/validation splits"
      ]
    },
    {
      id: "quality-validation",
      title: "Quality Review & Validation",
      tag: "Double-Pass QA",
      desc: "Multi-tiered auditing workflows featuring double-blind validation, inter-annotator agreement consensus, and statistical spot checks.",
      points: [
        "Consensus scoring and multi-tier auditing by senior leads",
        "Systematic feedback loops to eliminate systematic drift",
        "Verifiable quality benchmark reports prior to export"
      ]
    },
    {
      id: "human-in-the-loop",
      title: "Human-in-the-Loop Operations",
      tag: "Model Evaluation & RLHF",
      desc: "Deploying skilled human review teams for prompt-response ranking, RLHF alignment, model safety classification, and edge-case exception routing.",
      points: [
        "Model output ranking, comparison, and critique rubrics",
        "Hallucination detection, toxicity, and safety auditing",
        "Continuous human feedback to align production outputs"
      ]
    },
    {
      id: "workforce-mobilization",
      title: "Project Workforce Coordination",
      tag: "Contributor Operations",
      desc: "End-to-end recruitment, onboarding, NDA management, and task allocation for distributed project cohorts across India.",
      points: [
        "Rapid mobilization of task-specific contributor cohorts",
        "Active quota tracking and throughput monitoring",
        "Transparent operational reporting and milestone reconciliation"
      ]
    }
  ];

  const workflowStages = [
    {
      step: "01",
      title: "Protocol & Schema Definition",
      desc: "We align on dataset modalities, labelling rubrics, edge-case definitions, acceptance criteria, and delivery schedules."
    },
    {
      step: "02",
      title: "Cohort Mobilization & Training",
      desc: "We screen and onboard vetted contributors, conducting pilot trial tasks to calibrate against your benchmark rubrics."
    },
    {
      step: "03",
      title: "Execution with Real-Time Telemetry",
      desc: "Production tasks are distributed across vetted queues with active monitoring of velocity, label density, and throughput."
    },
    {
      step: "04",
      title: "Multi-Tier Consensus & QA",
      desc: "Every batch undergoes statistical sampling and double-pass verification to ensure agreement thresholds are met."
    },
    {
      step: "05",
      title: "Secure Encrypted Delivery",
      desc: "Cleaned, structured datasets are exported in your preferred format (JSON, COCO, YOLO, Parquet) with full audit logs."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-bg-main min-h-screen transition-colors">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-15 dark:bg-[radial-gradient(#334155_1px,transparent_1px)]"></div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/15 rounded-full filter blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Database size={14} /> AI Data Operations &amp; Human-in-the-Loop Workflows
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading font-heading tracking-tight leading-[1.1]">
              The Human-Powered Engine Behind <br />
              <span className="text-brand-accent">High-Precision AI Data</span>
            </h1>

            <p className="text-base sm:text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
              Step-Up Career provides the operational backbone for AI teams: mobilizing trained contributor cohorts, structuring raw inputs, executing precision annotation, and enforcing rigorous quality validation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20we%20would%20like%20to%20discuss%20an%20AI%20data%20operations%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Discuss an AI Data Project</span>
                <ArrowRight size={16} />
              </a>

              <Link
                href="/#project-configurator"
                className="px-8 py-4 bg-bg-card hover:bg-border-main/80 text-text-heading border border-border-main font-bold rounded-xl text-sm transition-all flex items-center justify-center"
              >
                <span>Interactive Scope Builder</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Operational Commitments Strip */}
        <section className="py-12 bg-bg-card border-y border-border-main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-bg-main border border-border-main/60">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">Quality Assurance</span>
              <span className="text-base font-bold text-text-heading">Double-Pass Verification</span>
              <p className="text-[11px] text-text-body mt-1">Multi-tier consensus checking</p>
            </div>

            <div className="p-4 rounded-xl bg-bg-main border border-border-main/60">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">Data Governance</span>
              <span className="text-base font-bold text-text-heading">Strict Confidentiality</span>
              <p className="text-[11px] text-text-body mt-1">NDA-backed contributor network</p>
            </div>

            <div className="p-4 rounded-xl bg-bg-main border border-border-main/60">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">Scale &amp; Reach</span>
              <span className="text-base font-bold text-text-heading">PAN-India Contributors</span>
              <p className="text-[11px] text-text-body mt-1">Diverse demographic distribution</p>
            </div>

            <div className="p-4 rounded-xl bg-bg-main border border-border-main/60">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">Delivery Agility</span>
              <span className="text-base font-bold text-text-heading">Strict SLA Schedules</span>
              <p className="text-[11px] text-text-body mt-1">Predictable batch turnaround</p>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading mb-3">
              Full-Spectrum Data Operations
            </h2>
            <p className="text-sm sm:text-base text-text-body">
              From raw multimodal data gathering to production-ready ground truth datasets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div 
                key={cap.id}
                className="p-8 rounded-2xl bg-bg-card border border-border-main hover:border-brand-accent/50 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-md bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider inline-block mb-4">
                    {cap.tag}
                  </span>
                  <h3 className="text-xl font-bold text-text-heading font-heading mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-6">
                    {cap.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-border-main/60 text-xs text-text-body">
                    {cap.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-border-main/60">
                  <a
                    href={`https://wa.me/917697334430?text=${encodeURIComponent(`Hi Step-Up Career, I would like to enquire about your ${cap.title} services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:underline"
                  >
                    <span>Request scope &amp; feasibility</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Workflow Section */}
        <section className="py-20 px-4 sm:px-6 bg-bg-card border-y border-border-main">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-2">Process Reliability</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading mb-3">
                How We Deliver AI Data Workflows
              </h2>
              <p className="text-sm text-text-body">
                Structured stages designed to minimize error rates and maintain absolute traceability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {workflowStages.map((st, i) => (
                <div key={i} className="p-6 rounded-2xl bg-bg-main border border-border-main relative flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-extrabold font-mono text-brand-accent/50 block mb-3 font-heading">
                      {st.step}
                    </span>
                    <h3 className="text-base font-bold text-text-heading mb-2 font-heading">
                      {st.title}
                    </h3>
                    <p className="text-xs text-text-body leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-brand-accent/15 via-bg-card to-bg-card border border-brand-accent/30 shadow-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading">
              Have an AI Data or Annotation Mandate?
            </h2>
            <p className="text-sm sm:text-base text-text-body max-w-xl mx-auto">
              Share your guidelines, schema requirements, and volume expectations. Our team will review and provide a structured operational proposal.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20we%20have%20an%20AI%20Data%20project%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Connect with AI Operations Lead</span>
                <Send size={15} />
              </a>
              <Link
                href="/services"
                className="px-8 py-4 bg-bg-main hover:bg-border-main text-text-heading border border-border-main font-bold rounded-xl text-sm transition-all inline-flex items-center justify-center"
              >
                <span>View Workforce &amp; Staffing Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
