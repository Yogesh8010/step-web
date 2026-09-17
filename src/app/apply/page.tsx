"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { UploadCloud, Send, User, Mail, Phone, Briefcase, Award, ShieldCheck, CheckCircle } from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const searchParams = useSearchParams();
  const roleFromUrl = searchParams.get("role") || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      role: formData.get("role"),
      experience: formData.get("experience"),
      skills: formData.get("skills"),
      fileName: fileName
    };

    try {
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (GOOGLE_SCRIPT_URL) {
        // We use text/plain to avoid CORS preflight issues with Google Scripts
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(data),
        });
      }

      // Redirect to WhatsApp after saving to Google Sheet
      const whatsappMessage = `Hi Step-Up Career, I just submitted my application on the website.\nName: ${data.name}\nRole Applied: ${data.role}\nSkills: ${data.skills}\nExperience: ${data.experience}\n(I am attaching my resume here)`;
      window.location.href = `https://wa.me/917697334430?text=${encodeURIComponent(whatsappMessage)}`;
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-card p-6 sm:p-10 rounded-2xl border border-border-main shadow-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-1.5">
              <User size={14} className="text-brand-accent" /> Full Name
            </label>
            <input 
              type="text" 
              name="name" 
              placeholder="e.g. John Doe" 
              className="w-full px-4 py-2.5 rounded-lg glass-input text-sm" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-1.5">
              <Phone size={14} className="text-brand-accent" /> Phone Number
            </label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="+91 98765 43210" 
              className="w-full px-4 py-2.5 rounded-lg glass-input text-sm" 
              required 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-1.5">
            <Mail size={14} className="text-brand-accent" /> Email Address
          </label>
          <input 
            type="email" 
            name="email" 
            placeholder="john@example.com" 
            className="w-full px-4 py-2.5 rounded-lg glass-input text-sm" 
            required 
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-1.5">
            <Briefcase size={14} className="text-brand-accent" /> Role Applied For
          </label>
          <input 
            type="text" 
            name="role" 
            defaultValue={roleFromUrl} 
            placeholder="e.g. Full Stack Developer" 
            className="w-full px-4 py-2.5 rounded-lg glass-input text-sm" 
            required 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-1.5">
              <Briefcase size={14} className="text-brand-accent" /> Experience Level
            </label>
            <select 
              name="experience" 
              className="w-full px-4 py-2.5 rounded-lg glass-input text-sm bg-bg-main" 
              required
            >
              <option value="">Select Experience</option>
              <option value="Fresher">Fresher (0 Years)</option>
              <option value="1-3 Years">1 - 3 Years</option>
              <option value="3-5 Years">3 - 5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-1.5">
              <Award size={14} className="text-brand-accent" /> Primary Skills
            </label>
            <input 
              type="text" 
              name="skills" 
              placeholder="e.g. React, Node.js, Sales" 
              className="w-full px-4 py-2.5 rounded-lg glass-input text-sm" 
              required 
            />
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-heading">
            Resume / CV (PDF, DOCX)
          </label>
          <div className="border-2 border-dashed border-border-main rounded-xl p-6 text-center hover:border-brand-accent/60 transition-colors bg-bg-main cursor-pointer group">
            <input 
              type="file" 
              id="resume" 
              className="hidden" 
              accept=".pdf,.doc,.docx" 
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            <label htmlFor="resume" className="cursor-pointer flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <UploadCloud size={20} />
              </div>
              <div className="text-xs text-text-body font-medium">
                {fileName ? (
                  <span className="text-green-600 dark:text-green-400 font-semibold">{fileName} selected</span>
                ) : (
                  <><span className="text-brand-accent font-semibold">Click to upload</span> or drag and drop</>
                )}
              </div>
              <p className="text-[11px] text-text-body/60">PDF, DOC, DOCX up to 5MB</p>
            </label>
          </div>
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-sm disabled:opacity-60"
          >
            {isSubmitting ? "Submitting Application..." : "Submit Application"} <Send size={16} />
          </button>
        </div>

        <div className="pt-2 border-t border-border-main flex items-center justify-between text-[11px] text-text-body">
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
            <CheckCircle size={13} /> 100% Free For Candidates
          </span>
          <span>Redirects to WhatsApp for resume attachment</span>
        </div>
      </form>
    </motion.div>
  );
}

export default function Apply() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 bg-bg-main min-h-screen transition-colors flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 border border-brand-accent/20">
              <ShieldCheck size={14} /> Quick Candidate Application
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-heading mb-2 font-heading">
              Apply for <span className="text-brand-accent">Opportunities</span>
            </h1>
            <p className="text-xs sm:text-sm text-text-body max-w-md mx-auto">
              Submit your candidate details. Our recruitment managers will review your profile and connect you with matching employers.
            </p>
          </motion.div>

          <Suspense fallback={<div className="text-center text-text-body p-8 bg-bg-card border border-border-main rounded-xl">Loading application form...</div>}>
            <ApplyForm />
          </Suspense>
        </div>
      </main>
    </>
  );
}
