"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building2, Zap, Users, ArrowRight, ShieldCheck, 
  CheckCircle2, FileText, Clock, BarChart3, Database,
  Lock, Sparkles, Send, Layers, Laptop
} from "lucide-react";

export default function PlatformPage() {
  const crmFeatures = [
    {
      title: "Commercials & Master Service Agreements",
      desc: "Maintain standardized client billing terms, placement fee percentages, milestone payment schedules, and signed MSA contracts."
    },
    {
      title: "18% GST Invoicing & Payment Reconciliation",
      desc: "Generate compliant tax invoices upon successful candidate joining with automated GST calculation and payment tracking."
    },
    {
      title: "Guarantee Clock & Replacement Alerts",
      desc: "Live countdown trackers for 60/90-day replacement warranty periods with proactive notifications before warranty expiration."
    },
    {
      title: "Client Magic-Link Review Portal",
      desc: "Share encrypted, branded review links with hiring managers for 1-click candidate shortlisting, feedback, and interview slot selection."
    }
  ];

  const atsFeatures = [
    {
      title: "1-Click Multi-Portal Resume Intake",
      desc: "Bulk parse and ingest candidate profiles directly from Naukri, Apna, LinkedIn, and spreadsheets into structured database records."
    },
    {
      title: "Zero-Duplicate E.164 Engine",
      desc: "Strict phone and email normalization that prevents duplicate entries and enforces recruiter ownership locking across candidates."
    },
    {
      title: "Visual Kanban Pipeline (Screening → Joined)",
      desc: "Drag-and-drop workflow stages: Sourced, Screening, L1/L2 Technical Interview, Client Round, Offer Extended, and Joined."
    },
    {
      title: "Integrated Calling & WhatsApp Activity Logs",
      desc: "Recruiters trigger calls and WhatsApp messages directly with automated timestamping and discussion history preservation."
    }
  ];

  const hrmsFeatures = [
    {
      title: "1-Click Clock-In & Presence Board",
      desc: "Real-time visibility into recruiter work sessions, break timers, active duty status, and daily shift attendance logs."
    },
    {
      title: "Leave Requests & Manager Approval",
      desc: "Structured paid, sick, and casual leave workflows with automatic quota deduction upon manager authorization."
    },
    {
      title: "Automated Payroll with 12% PF & LOP",
      desc: "Department-level salary calculations factoring in attendance, loss of pay (LOP), statutory 12% PF, and net disbursement slips."
    },
    {
      title: "Recruiter Leaderboards & Calling SLAs",
      desc: "Track daily connect targets, candidate submissions per requisition, turnaround speed, and quarterly revenue contribution."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-bg-main min-h-screen transition-colors">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-15 dark:bg-[radial-gradient(#334155_1px,transparent_1px)]"></div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/15 rounded-full filter blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-500 text-xs font-bold uppercase tracking-wider">
              <Laptop size={14} /> Enterprise Recruitment OS • CRM + ATS + HRMS
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-heading font-heading tracking-tight leading-[1.1]">
              The Unified Operating System for <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                High-Velocity Talent Delivery
              </span>
            </h1>

            <p className="text-base sm:text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
              Step-Up Career unifies corporate client CRM, high-speed multi-portal ATS sourcing, and internal team HRMS operations into one high-integrity cloud environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://crm.stepup-career.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2"
              >
                <span>Access Step-Up CRM Portal</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20we%20are%20interested%20in%20learning%20more%20about%20your%20Recruitment%20CRM%20and%20ATS%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-bg-card hover:bg-border-main/80 text-text-heading border border-border-main font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Demo</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3 Pillars Deep-Dive */}
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-24">
          {/* Pillar 1: Recruitment CRM */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
                <Building2 size={14} /> Pillar 01 • Client CRM
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading">
                Client Mandates, Commercials &amp; Revenue Operations
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Centralize your corporate accounts, agreed fee percentages, commercial terms, and statutory GST invoicing. Never miss replacement guarantee deadlines.
              </p>
              <div className="pt-2">
                <span className="px-3 py-1 rounded-full bg-bg-card border border-border-main text-xs font-semibold text-text-heading">
                  18% GST Compliant • Invoicing Sync • Guarantee Clock
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {crmFeatures.map((feat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-indigo-500/40 transition-colors">
                  <CheckCircle2 size={18} className="text-indigo-500 mb-3" />
                  <h3 className="text-sm font-bold text-text-heading mb-1.5 font-heading">{feat.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Applicant Tracking System */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {atsFeatures.map((feat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-sky-500/40 transition-colors">
                  <Zap size={18} className="text-sky-500 mb-3" />
                  <h3 className="text-sm font-bold text-text-heading mb-1.5 font-heading">{feat.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-500 text-xs font-bold uppercase tracking-wider">
                <Zap size={14} /> Pillar 02 • Sourcing ATS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading">
                Zero-Duplicate Sourcing Across Major Portals
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Connect your sourcing channels (Naukri, Apna, LinkedIn, Direct Uploads) into one deduplicated candidate registry with ownership locking and live Kanban stages.
              </p>
              <div className="pt-2">
                <span className="px-3 py-1 rounded-full bg-bg-card border border-border-main text-xs font-semibold text-text-heading">
                  E.164 Phone Normalization • Ownership Locking • WhatsApp Logs
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: HRMS & Operations */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 text-teal-500 text-xs font-bold uppercase tracking-wider">
                <Users size={14} /> Pillar 03 • Internal HRMS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading">
                Attendance, Leaves &amp; 12% PF Payroll Automation
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Empower your recruiters and managers with 1-click duty clock-ins, leave approvals, automated salary slips with 12% PF deductions, and performance leaderboards.
              </p>
              <div className="pt-2">
                <span className="px-3 py-1 rounded-full bg-bg-card border border-border-main text-xs font-semibold text-text-heading">
                  Live Presence Board • PF &amp; LOP Deductions • Team Targets
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {hrmsFeatures.map((feat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-teal-500/40 transition-colors">
                  <CheckCircle2 size={18} className="text-teal-500 mb-3" />
                  <h3 className="text-sm font-bold text-text-heading mb-1.5 font-heading">{feat.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Multi-Tenancy Architecture Strip */}
        <section className="py-16 bg-bg-card border-y border-border-main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
                <Lock size={13} /> Enterprise-Grade Security
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-heading font-heading">
                Engineered for Integrity &amp; Strict Role Access
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-bg-main border border-border-main">
                <ShieldCheck size={28} className="text-brand-accent mx-auto mb-3" />
                <h3 className="text-base font-bold text-text-heading mb-1">Role-Based Access Control</h3>
                <p className="text-xs text-text-body">Granular permissions between Recruiters, Team Leads, Account Managers, and Admins.</p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-main border border-border-main">
                <Lock size={28} className="text-brand-accent mx-auto mb-3" />
                <h3 className="text-base font-bold text-text-heading mb-1">Candidate Contact Masking</h3>
                <p className="text-xs text-text-body">Client-facing portals mask candidate phone numbers to safeguard agency relationship ownership.</p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-main border border-border-main">
                <Database size={28} className="text-brand-accent mx-auto mb-3" />
                <h3 className="text-base font-bold text-text-heading mb-1">Comprehensive Audit Trails</h3>
                <p className="text-xs text-text-body">Every status transition, call log, invoice generation, and resume view is permanently audited.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Ready to Access the Step-Up CRM Portal?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              If you are an authorized client, recruiter, or partner, sign in to your dashboard to manage mandates, review shortlists, or track team progress.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://crm.stepup-career.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <span>Launch CRM Portal (crm.stepup-career.in)</span>
                <ArrowRight size={16} />
              </a>
              <Link
                href="/services"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl text-sm transition-all flex items-center justify-center"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
