"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { 
  Monitor, Users, UsersRound, FileClock, Presentation, Cog, 
  CheckCircle2, Building, GraduationCap, Crown, Briefcase, 
  Megaphone, Award, Banknote, Bot, HelpCircle, ArrowRight, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "IT Recruitment",
      desc: "Specialized sourcing for software engineers, cloud architects, QA automation specialists, and tech leaders.",
      icon: Monitor,
      points: ["Full-Stack Developers", "Cloud & DevOps Specialists", "QA & Test Engineers", "Tech Leads & Architects"]
    },
    {
      title: "Non-IT Hiring",
      desc: "Comprehensive staffing solutions for retail, customer support, sales, accounting, and supply chain functions.",
      icon: Users,
      points: ["Customer Support / BPO", "B2B / B2C Sales Teams", "Finance & HR Operations", "Logistics & Supply Chain"]
    },
    {
      title: "Bulk Hiring",
      desc: "High-volume recruitment campaigns executed rapidly with high conversion ratios and standardized assessment.",
      icon: UsersRound,
      points: ["Mass recruitment drives", "Walk-in drive coordination", "Volume screening funnels", "Fast batch onboarding"]
    },
    {
      title: "Contract Staffing",
      desc: "Flexible, agile workforce augmentation for seasonal projects, sprint surges, and temporary commercial needs.",
      icon: FileClock,
      points: ["Project-based hiring", "Interim staffing solutions", "Seasonal scale-ups", "Flexible tenure models"]
    },
    {
      title: "Permanent Hiring",
      desc: "Rigorous direct-hire recruitment focused on cultural alignment, performance record, and long-term retention.",
      icon: Building,
      points: ["Direct hire placements", "Culture & competency fit", "Salary negotiation support", "Replacement guarantee"]
    },
    {
      title: "Campus Hiring",
      desc: "Structured university recruitment partnerships connecting forward-looking enterprises with top graduate talent.",
      icon: GraduationCap,
      points: ["Tier 1 & 2 college drives", "Aptitude & skill tests", "Campus hackathons", "Fresh graduate onboarding"]
    },
    {
      title: "Executive Search",
      desc: "Discreet, consultative headhunting for CXOs, directors, and critical VP-level organizational decision-makers.",
      icon: Crown,
      points: ["Confidential headhunting", "Leadership track evaluation", "Strategic board alignment", "Executive package advisory"]
    },
    {
      title: "Project Staffing",
      desc: "Turnkey team assembly to deliver specific technical or business transformation milestones on schedule.",
      icon: Briefcase,
      points: ["Dedicated sprint units", "Milestone-driven SLA", "Cross-disciplinary squads", "Dedicated team leads"]
    },
    {
      title: "Recruitment Advertising",
      desc: "Data-driven employer campaigns targeting passive candidate communities across social networks and industry portals.",
      icon: Megaphone,
      points: ["Targeted ad campaigns", "Job board optimization", "Talent pipeline nurture", "Conversion tracking"]
    },
    {
      title: "Employer Branding",
      desc: "Elevating your organizational reputation to position your company as an employer of choice in competitive markets.",
      icon: Award,
      points: ["Value proposition design", "Social reputation audits", "Workplace culture stories", "Candidate experience design"]
    },
    {
      title: "Payroll Support",
      desc: "End-to-end statutory compliance, contractor compensation, and onboarding documentation management.",
      icon: Banknote,
      points: ["Contractor payroll", "Statutory compliance", "Attendance & leave logs", "Seamless monthly disbursal"]
    },
    {
      title: "AI Recruitment",
      desc: "Smart resume parsing, automated candidate ranking, and algorithmic match filters to slash screening time.",
      icon: Bot,
      points: ["Automated resume screening", "Skill taxonomy matching", "Reduced time-to-hire", "Unbiased ranking"]
    },
    {
      title: "HR Consulting",
      desc: "Consultative workforce advisory on compensation benchmarking, policy drafting, and organizational structure.",
      icon: Cog,
      points: ["Compensation benchmarking", "HR policy frameworks", "Retention strategies", "Performance metrics"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 bg-bg-main min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
              <ShieldCheck size={14} /> Enterprise Recruitment & Staffing Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading mb-4 tracking-tight font-heading">
              Our <span className="text-brand-accent">Services</span>
            </h1>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              Step-Up Career delivers scalable, high-velocity talent solutions engineered for enterprise stability and startup agility.
            </p>
          </motion.div>

          {/* Services Grid (13 Cards) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((svc, i) => (
              <motion.div 
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="p-6 bg-bg-card border border-border-main rounded-xl hover:border-brand-accent/50 hover:shadow-md hover:scale-[1.02] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent border border-brand-accent/20 rounded-lg flex items-center justify-center mb-5">
                    <svc.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-2 font-heading">{svc.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed mb-5 min-h-[48px]">{svc.desc}</p>
                  
                  <ul className="space-y-2 border-t border-border-main pt-4 mb-6">
                    {svc.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-text-body">
                        <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                        <span className="font-medium">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/917697334430?text=${encodeURIComponent(`Hi Step-Up Career, I would like to inquire about: ${svc.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-bg-main hover:bg-border-main text-text-heading border border-border-main text-center text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Inquire Service <ArrowRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Approach & Differentiators (No emojis) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24 items-stretch">
            {/* Approach */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-bg-card border border-border-main rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-2 font-heading">Our Hiring Approach</h2>
                <p className="text-xs text-text-body mb-8">A methodical, SLA-driven recruiting framework ensuring optimal matches.</p>

                <div className="space-y-4">
                  {[
                    { step: "01", title: "Requirement Scoping", desc: "Understanding the role technical stack, culture, and business imperatives." },
                    { step: "02", title: "Talent Mapping", desc: "Targeting pre-screened talent networks and actively vetting passive candidates." },
                    { step: "03", title: "Rigorous Screening", desc: "Multi-level technical and behavioral validation before client introduction." },
                    { step: "04", title: "Fast Closure & Support", desc: "Coordinating interviews, offers, background checks, and onboarding." }
                  ].map((st) => (
                    <div key={st.step} className="flex items-start gap-4 p-3 bg-bg-main border border-border-main rounded-lg">
                      <span className="text-xs font-extrabold text-brand-accent px-2 py-1 bg-brand-accent/10 rounded">
                        {st.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-text-heading">{st.title}</h4>
                        <p className="text-xs text-text-body mt-0.5">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Our Services Stand Out */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-bg-card border border-border-main rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-2 font-heading">Why Our Services Stand Out</h2>
                <p className="text-xs text-text-body mb-8">Built to eliminate hiring friction and accelerate time-to-productivity.</p>

                <div className="space-y-4">
                  {[
                    { title: "Rapid Turnaround Times", desc: "First batch of qualified profiles submitted within 48 to 72 hours." },
                    { title: "Zero Cost for Job Seekers", desc: "We are 100% free for candidates; our contracts are corporate-sponsored." },
                    { title: "Pan-India Recruiting Reach", desc: "Ability to source talent across tier 1, tier 2, and tier 3 locations." },
                    { title: "Verified Employer Assurance", desc: "Every job order is vetted for legal compliance and career legitimacy." }
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-bg-main border border-border-main rounded-lg">
                      <CheckCircle2 size={16} className="text-brand-accent mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-text-heading">{pt.title}</h4>
                        <p className="text-xs text-text-body mt-0.5">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="employers" className="mt-8 pt-6 border-t border-border-main">
                <a 
                  href="https://wa.me/917697334430?text=Hi,%20I%20am%20an%20employer%20looking%20to%20hire%20talent."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-center text-sm font-bold rounded-lg transition-colors shadow-sm block"
                >
                  Partner With Step-Up Career
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Candidate & Employer Pathways */}
          <div id="candidates" className="bg-bg-card border border-border-main p-10 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-heading font-heading mb-3">
              Looking for Your Next Career Opportunity?
            </h2>
            <p className="text-sm text-text-body max-w-xl mx-auto mb-6">
              Browse our verified job listings or submit your resume directly to our internal candidate database.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link 
                href="/jobs"
                className="w-full sm:w-auto px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
              >
                Browse All Openings
              </Link>
              <Link 
                href="/apply"
                className="w-full sm:w-auto px-6 py-3 bg-bg-main hover:bg-border-main border border-border-main text-text-heading text-sm font-bold rounded-lg transition-colors"
              >
                Submit General Application
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
