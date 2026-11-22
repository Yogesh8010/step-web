"use client";

import Header from "@/components/Header";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-bg-main min-h-screen transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-4 border border-brand-accent/20">
              <ShieldCheck size={14} /> Legal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading mb-3">Privacy Policy</h1>
            <p className="text-xs text-text-body">Last updated: November 2026</p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8 text-text-body">
            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">1. Who We Are</h2>
              <p className="text-sm leading-relaxed">
                Step-Up Career (<strong className="text-text-heading">stepup-career.in</strong>) is an India-based AI data operations, recruitment and workforce solutions venture headquartered in Jabalpur, Madhya Pradesh. 
                We provide AI data collection, annotation, quality review, talent acquisition, and project workforce coordination services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">2. Information We Collect</h2>
              <p className="text-sm leading-relaxed mb-3">We collect information you provide directly, including:</p>
              <ul className="list-disc list-inside space-y-1.5 text-sm">
                <li>Name, email address, and phone number submitted through job applications or contact forms</li>
                <li>Resume or CV files uploaded for recruitment purposes</li>
                <li>Business enquiry details shared via WhatsApp or our contact form</li>
                <li>Anonymous usage data collected via Google Analytics (page views, session duration)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1.5 text-sm">
                <li>To review and respond to job applications and project enquiries</li>
                <li>To match candidates with verified employer openings in our recruitment database</li>
                <li>To coordinate project workforce tasks for AI data operations mandates</li>
                <li>To send relevant job or project notifications (only if you opt in)</li>
                <li>To improve our website and services using aggregated, anonymized analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">4. Data Sharing</h2>
              <p className="text-sm leading-relaxed">
                We do not sell your personal data. We may share your information with verified employer partners or AI data project clients only when you have applied for a role or project. 
                We may also share data with service providers (such as Google Sheets for application tracking) on a need-to-know basis under confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">5. Data Retention</h2>
              <p className="text-sm leading-relaxed">
                Candidate and applicant data is retained for up to 12 months from the date of submission, or until you request deletion. Project contributor data is retained for the duration of the project plus 6 months.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">6. Your Rights</h2>
              <p className="text-sm leading-relaxed">
                You may request access to, correction of, or deletion of your personal data at any time by contacting us at{" "}
                <a href="mailto:jobs@stepup-career.in" className="text-brand-accent hover:underline">jobs@stepup-career.in</a>. 
                We will respond within 15 business days.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">7. Cookies</h2>
              <p className="text-sm leading-relaxed">
                Our website uses minimal cookies for theme preference (dark/light mode) and analytics. No tracking cookies are shared with third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">8. Contact Us</h2>
              <p className="text-sm leading-relaxed">
                For any privacy-related questions or data requests, contact:<br />
                <strong className="text-text-heading">Step-Up Career</strong><br />
                Email: <a href="mailto:jobs@stepup-career.in" className="text-brand-accent hover:underline">jobs@stepup-career.in</a><br />
                Phone: <a href="tel:+917697334430" className="text-brand-accent hover:underline">+91 76973 34430</a><br />
                Address: Jabalpur, Madhya Pradesh, India — 482001
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
