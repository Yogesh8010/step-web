"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building2, Zap, Users, ArrowRight, ShieldCheck, 
  CheckCircle2, FileText, Clock, BarChart3, Database,
  Lock, Sparkles, Send, Layers, Laptop, ExternalLink,
  PhoneCall, CheckSquare
} from "lucide-react";

export default function CRMPage() {
  const pillars = [
    {
      badge: "🎯 Client Side",
      title: "Recruitment CRM",
      subtitle: "Manage Clients & Revenue Operations",
      desc: "Centralize corporate accounts, client contracts, commercial terms, and statutory GST invoicing. Never miss replacement guarantee deadlines.",
      points: [
        "Client contracts, commercial terms & GST invoicing",
        "Open job requisitions & mandate tracking",
        "Guarantee tenure countdown & replacement warranties",
        "Client magic link portal for instant shortlist review"
      ],
      metricLabel: "Mandates & Billing",
      metricValue: "18% GST Compliant"
    },
    {
      badge: "⚡ Sourcing Engine",
      title: "Applicant Tracking System (ATS)",
      subtitle: "Source & Place Talent Faster",
      desc: "Connect your sourcing channels (Naukri, Apna, LinkedIn, Direct Uploads) into one deduplicated candidate registry with ownership locking.",
      points: [
        "One-click bulk resume imports from Naukri, Apna & LinkedIn",
        "Multi-stage visual hiring pipeline (Screening to Joined)",
        "Duplicate phone & email detection with ownership locking",
        "Candidate calling logs, WhatsApp & SMS automation"
      ],
      metricLabel: "Zero Duplicate Engine",
      metricValue: "E.164 Phone Normalization"
    },
    {
      badge: "👥 Internal Operations",
      title: "HRMS & Recruiter Tracking",
      subtitle: "Empower Your Internal Team",
      desc: "Empower your recruiters and managers with 1-click duty clock-ins, leave approvals, automated salary slips with 12% PF deductions, and leaderboards.",
      points: [
        "One-click attendance clock-in & break timer",
        "Leave application & manager approval workflows",
        "Department salary structure & 12% PF calculation",
        "Real-time team presence board & recruiter leaderboards"
      ],
      metricLabel: "Recruiter Productivity",
      metricValue: "12% PF & Payroll Automation"
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
              🚀 Enterprise Recruitment CRM + ATS + HRMS
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-text-heading font-heading tracking-tight leading-[1.1] break-words">
              Powering Modern Recruitment Agencies <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                from Sourcing to Payroll
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-text-body max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Stop juggling multiple disjointed tools. Manage client mandates, source and screen candidates across portals, schedule interviews, track attendance, and generate payslips — all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-2 sm:px-0">
              <a
                href="https://crm.stepup-career.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
              >
                <span>Access CRM Portal</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20I%20would%20like%20to%20request%20client%20access%20to%20the%20Recruitment%20CRM."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-bg-card hover:bg-border-main/80 text-text-heading border border-border-main font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Client Access</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 3 Core Pillars */}
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider block mb-2">Three Integrated Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading">
              Everything Your Recruitment Agency Needs
            </h2>
            <p className="text-text-body text-sm sm:text-base mt-2">
              Step-Up Career merges Client CRM, Candidate ATS, and Staff HRMS into a unified operating system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-bg-card border border-border-main hover:border-indigo-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
                      {p.badge}
                    </span>
                    <span className="text-xs font-semibold text-text-body/70 font-mono">Pillar 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-text-heading font-heading mb-1">{p.title}</h3>
                  <span className="text-xs font-semibold text-indigo-500 block mb-3">{p.subtitle}</span>
                  <p className="text-xs text-text-body leading-relaxed mb-6">{p.desc}</p>

                  <ul className="space-y-3 pt-4 border-t border-border-main/60 text-xs text-text-body">
                    {p.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-border-main/60 flex items-center justify-between text-xs">
                  <span className="text-text-body/70 font-mono">{p.metricLabel}</span>
                  <span className="font-bold text-indigo-500">{p.metricValue}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agency Metrics & Trust Badges */}
        <section className="py-16 bg-bg-card border-y border-border-main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-bg-main border border-border-main/80 space-y-2">
                <span className="text-3xl font-extrabold text-indigo-500 font-heading block">Zero Duplicate Profiles</span>
                <h4 className="text-sm font-bold text-text-heading">E.164 Phone Normalization</h4>
                <p className="text-xs text-text-body">Guarantees clean talent databases across all recruiters with automated ownership locking.</p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-main border border-border-main/80 space-y-2">
                <span className="text-3xl font-extrabold text-sky-500 font-heading block">3x Faster Turnaround</span>
                <h4 className="text-sm font-bold text-text-heading">Automated Candidate Parsing</h4>
                <p className="text-xs text-text-body">1-click resume synchronization across Naukri, Apna, LinkedIn, and direct portal uploads.</p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-main border border-border-main/80 space-y-2">
                <span className="text-3xl font-extrabold text-teal-500 font-heading block">100% Data Security</span>
                <h4 className="text-sm font-bold text-text-heading">Role-Based Permissions</h4>
                <p className="text-xs text-text-body">Multi-tenant isolation, client contact masking, and complete immutable audit trails.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Ready to Accelerate Your Recruitment Operations?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Log into the official Step-Up Career Recruitment CRM or request dedicated credentials for your organization.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://crm.stepup-career.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <span>Access CRM Portal</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://wa.me/917697334430?text=Hi%20Step-Up%20Career,%20we%20want%20to%20request%20access%20to%20your%20Recruitment%20CRM."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl text-sm transition-all flex items-center justify-center"
              >
                <span>Request Client Access</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
