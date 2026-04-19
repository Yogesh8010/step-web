"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { UploadCloud, Send, User, Mail, Phone, Briefcase, Award } from "lucide-react";
import { useState } from "react";

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
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
      const whatsappMessage = `Hi Step-Up Career, I just submitted my application on the website.\nName: ${data.name}\nSkills: ${data.skills}\nExperience: ${data.experience}\n(I am attaching my resume here)`;
      window.location.href = `https://wa.me/917697334430?text=${encodeURIComponent(whatsappMessage)}`;
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900/40 rounded-full mix-blend-screen filter blur-[128px]"></div>
        
        <div className="max-w-2xl w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Apply for <span className="text-[var(--color-brand-gold)]">Opportunities</span>
            </h1>
            <p className="text-slate-300">Take the next step in your career journey. Fill out the form below and let us connect you with top companies.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 md:p-10 rounded-3xl shadow-2xl border-t border-[var(--color-brand-gold)]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <User size={16} className="text-[var(--color-brand-gold)]" /> Full Name
                  </label>
                  <input type="text" name="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl glass-input transition-colors" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Phone size={16} className="text-[var(--color-brand-gold)]" /> Phone Number
                  </label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl glass-input transition-colors" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Mail size={16} className="text-[var(--color-brand-gold)]" /> Email Address
                </label>
                <input type="email" name="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl glass-input transition-colors" required />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Briefcase size={16} className="text-[var(--color-brand-gold)]" /> Years of Experience
                  </label>
                  <select name="experience" className="w-full px-4 py-3 rounded-xl glass-input transition-colors appearance-none bg-transparent" required>
                    <option value="" className="bg-[#0a192f] text-white">Select Experience</option>
                    <option value="Fresher" className="bg-[#0a192f] text-white">Fresher</option>
                    <option value="1-3 Years" className="bg-[#0a192f] text-white">1-3 Years</option>
                    <option value="3-5 Years" className="bg-[#0a192f] text-white">3-5 Years</option>
                    <option value="5+ Years" className="bg-[#0a192f] text-white">5+ Years</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Award size={16} className="text-[var(--color-brand-gold)]" /> Primary Skills
                  </label>
                  <input type="text" name="skills" placeholder="e.g. React, Node.js, Sales" className="w-full px-4 py-3 rounded-xl glass-input transition-colors" required />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-slate-300">Upload Resume (PDF, DOCX)</label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[var(--color-brand-gold)]/50 transition-colors bg-white/[0.02] cursor-pointer group">
                  <input 
                    type="file" 
                    id="resume" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                  <label htmlFor="resume" className="cursor-pointer flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-brand-gold)]/20 transition-all">
                      <UploadCloud size={24} className="text-[var(--color-brand-gold)]" />
                    </div>
                    <div className="text-slate-300">
                      {fileName ? (
                        <span className="text-green-400 font-medium">{fileName} selected</span>
                      ) : (
                        <><span className="text-[var(--color-brand-gold)] font-medium">Click to upload</span> or drag and drop</>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">Max file size: 5MB</p>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black font-bold rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(255,215,0,0.3)] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"} <Send size={20} />
                </button>
              </div>
              <p className="text-xs text-center text-slate-500 mt-4">
                By applying, you agree to our Terms of Service. Your application details will be securely saved and you will be redirected to WhatsApp to attach your resume directly.
              </p>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}
