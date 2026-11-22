"use client";

import Header from "@/components/Header";
import { FileCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-bg-main min-h-screen transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-4 border border-brand-accent/20">
              <FileCheck size={14} /> Legal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading mb-3">Terms of Service</h1>
            <p className="text-xs text-text-body">Last updated: November 2026</p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8 text-text-body">
            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">1. Acceptance of Terms</h2>
              <p className="text-sm leading-relaxed">
                By accessing or using the Step-Up Career website (<strong className="text-text-heading">stepup-career.in</strong>) or our services, 
                you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">2. Services Provided</h2>
              <p className="text-sm leading-relaxed mb-3">Step-Up Career provides the following services:</p>
              <ul className="list-disc list-inside space-y-1.5 text-sm">
                <li><strong className="text-text-heading">AI Data Operations:</strong> Data collection, annotation, labelling, processing, quality review, and human-in-the-loop task coordination</li>
                <li><strong className="text-text-heading">Recruitment Services:</strong> Talent sourcing, screening, and placement across IT, Non-IT, EMS, manufacturing, and other sectors</li>
                <li><strong className="text-text-heading">Project Workforce Coordination:</strong> Contributor onboarding, task allocation, and operational management for defined project scopes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">3. For Candidates — Zero Fee Policy</h2>
              <p className="text-sm leading-relaxed">
                Step-Up Career does not charge any fee to candidates for job applications, resume review, or placement services. 
                Any service claiming to represent Step-Up Career and charging candidates is not authorised by us. 
                Report such incidents to <a href="mailto:jobs@stepup-career.in" className="text-brand-accent hover:underline">jobs@stepup-career.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">4. For Clients & Employers</h2>
              <p className="text-sm leading-relaxed">
                Engagement with Step-Up Career for recruitment or AI data project services is governed by a separate Master Service Agreement (MSA) or Statement of Work (SOW) agreed between parties. 
                These Terms of Service govern website usage only. Commercial terms, deliverables, and payment obligations are defined in the applicable project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">5. Acceptable Use</h2>
              <p className="text-sm leading-relaxed mb-2">When using our website, you agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-sm">
                <li>Submit false, misleading, or fraudulent information in job applications or project enquiries</li>
                <li>Attempt to access, scrape, or copy content or data from our website without written permission</li>
                <li>Use our contact channels for spam, phishing, or unsolicited commercial communications</li>
                <li>Misrepresent your identity or affiliation when engaging with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">6. Intellectual Property</h2>
              <p className="text-sm leading-relaxed">
                All content on this website, including text, logos, design, and code, is the property of Step-Up Career or its licensors. 
                You may not reproduce, distribute, or create derivative works without explicit written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">7. Disclaimer</h2>
              <p className="text-sm leading-relaxed">
                Step-Up Career provides recruitment and data services on a best-effort basis. We do not guarantee placement outcomes, candidate availability, or specific project throughput rates. 
                All service commitments are defined in individual project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">8. Limitation of Liability</h2>
              <p className="text-sm leading-relaxed">
                To the maximum extent permitted by applicable law, Step-Up Career shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or our services beyond the scope defined in a signed project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">9. Governing Law</h2>
              <p className="text-sm leading-relaxed">
                These Terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Jabalpur, Madhya Pradesh, India.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-text-heading font-heading mb-2">10. Contact</h2>
              <p className="text-sm leading-relaxed">
                For any queries related to these Terms:<br />
                <strong className="text-text-heading">Step-Up Career</strong><br />
                Email: <a href="mailto:jobs@stepup-career.in" className="text-brand-accent hover:underline">jobs@stepup-career.in</a><br />
                Phone: <a href="tel:+917697334430" className="text-brand-accent hover:underline">+91 76973 34430</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
