# Step-Up Career Platform - Technical Documentation

## 1. Executive Summary
**Company Name:** Step-Up Career  
**Domain:** StepUp-Career.in  
**Contact Email:** jobs@stepup-career.in  
**Address:** Jabalpur M.P 482001  

**Objective:**  
To build a premium, fast, scalable, and conversion-focused recruitment platform. The system will encompass a stunning user interface, lightweight but robust database management, a secure admin panel, and seamless automation for both candidates and recruiters.

---

## 2. Technology Stack & Architecture

### 2.1 Core Technologies
- **Frontend Framework:** Next.js (App Router recommended for optimal SEO, routing, and performance)
- **Styling:** Tailwind CSS + Vanilla CSS (for maximum control and dynamic styling)
- **Animations:** Framer Motion (for dynamic, fluid, and scroll-triggered animations)
- **Backend/API:** Next.js API Routes (Serverless backend architecture)
- **Database:** Google Sheets API (used as a lightweight CRM/Database for phase 1)
- **Media Storage:** Cloudinary (for resumes and dynamic user uploads) & local `/public/images` for static optimized assets

### 2.2 Integrations & Services
- **Hosting:** Vercel (with GitHub integration for auto-deployments)
- **Email Delivery:** Titan Mail via SMTP integration (Nodemailer)
- **Chatbot:** Tawk.to / Crisp (for live chat, automated greetings, and lead capture)
- **Domain Management:** DNS configured via Vercel for `stepup-career.in` (SSL Enabled)

---

## 3. UI/UX Design & Aesthetics
- **Theme:** Premium SaaS look, incorporating **Glassmorphism** (frosted glass effects, background blur, semi-transparent panels).
- **Color Palette:**
  - **Primary:** Deep Blue / Navy (Instills trust, professionalism)
  - **Secondary:** Rich Gold (Premium feel, Call-to-Action highlights)
  - **Backgrounds:** Sleek Dark Mode preferred, featuring smooth, modern gradients to make UI elements pop.
- **Typography:** Inter or Poppins (Clean, readable, modern sans-serif fonts imported via Google Fonts).
- **Micro-interactions:** Interactive elements that feel responsive and alive, using hover effects to encourage interaction.

---

## 4. Website Structure & Navigation

### 4.1 Public Pages
- **Header:** Sticky navbar with Glassmorphism, Logo, Navigation Links, and a prominent "Apply Now" CTA button.
- **Home:** Hero section with animations, featured jobs, value proposition, and a call to action.
- **About Us:** Company mission, vision, and team details.
- **Services:** Tailored offerings for both candidates seeking jobs and employers seeking talent.
- **Jobs Board:** Searchable list of active job openings.
- **Contact:** Contact form, embedded map, and address details.
- **Footer:** Social media links, privacy policy, terms of service, and quick navigation.

### 4.2 Floating Elements
- **WhatsApp Button:** Floating action button in the bottom corner redirecting automatically to: `https://wa.me/917697334430`
- **Chatbot Widget:** Bottom-right corner (Tawk.to/Crisp) for automated greetings and instant support.

---

## 5. Core Workflows

### 5.1 The Candidate Application System
1. **User Action:** Candidate fills out the application form and uploads a Resume file.
2. **Media Handling:** Resume is processed and uploaded securely to Cloudinary via a Next.js API route. A secure URL is returned.
3. **Database Entry:** Form details + Resume URL are appended to the Google Sheet as a new row using the Google Sheets API.
4. **Email Automation (Titan SMTP):**
   - Candidate receives an auto-reply: *"Thank you for applying to Step-Up Career..."*
   - Admin receives a notification: *"New application received from [Name]."*
5. **WhatsApp Redirection:** Upon successful form submission, the user interface automatically redirects the candidate to the WhatsApp chat link.

---

## 6. Database Schema (Google Sheets)
The Google Sheet will act as the primary database. The columns will be structured as follows:

| Date | Name | Phone | Email | Skills | Experience | Resume Link | Source | Status |
|------|------|-------|-------|--------|------------|-------------|--------|--------|
| (Auto) | Text | Text | Text | Text | Number (Years) | URL (Cloudinary) | Text | Pending/Reviewed |

---

## 7. Admin Panel Features
A secure dashboard for internal recruiters to manage the platform.
- **Authentication:** Secure Login system (e.g., using NextAuth.js or JWT cookies).
- **Dashboard Overview:** Key metrics (total applications, recent activity).
- **Candidate Management:** Interface to view candidate details, click out to resumes, and update application status.
- **Job Posting System:** Form to add, edit, or remove job listings that directly update the public Jobs page.

---

## 8. Non-Functional Requirements

### 8.1 Performance & Optimization
- **Load Time:** Target `< 2 seconds` Initial Contentful Paint (ICP).
- **Image Optimization:** Next.js `<Image>` component used globally; assets compressed.
- **Responsiveness:** Mobile-first approach ensuring a flawless UI on phones, tablets, and desktops.

### 8.2 Security
- **SSL / HTTPS:** Enforced globally via Vercel.
- **Spam Protection:** Google reCAPTCHA v3 integrated into application and contact forms to block bots.
- **Data Validation:** Strict input validation (e.g., using Zod) on both the frontend and backend to sanitize inputs.
- **Rate Limiting:** API endpoint protection against spam submissions.

### 8.3 SEO Strategy
- **Meta Tags:** Dynamic Open Graph (OG) tags, title tags, and optimized meta descriptions for every page.
- **Semantic HTML:** Proper use of HTML5 semantic elements (`<main>`, `<article>`, `<section>`, `<h1>` hierarchy).
- **Sitemaps:** Auto-generated `sitemap.xml` and `robots.txt`.

---

## 9. Deployment Strategy
- **Version Control:** Code hosted on GitHub.
- **CI/CD Pipeline:** Connected natively to Vercel. Pushes to the `main` branch trigger automatic builds and global CDN edge deployments.
- **Environment Variables:** Securely stored in Vercel settings (Titan SMTP credentials, Google Sheets API JSON, Cloudinary Keys).

---

## 10. Future Scope & Roadmap (Phase 2)
- **Database Migration:** Transition from Google Sheets to **MongoDB** for robust relational data, indexing, and higher scale.
- **AI Resume Parsing:** Implement AI to automatically read resumes, extract skills, and rank candidates against job descriptions.
- **Multi-Tenant Recruiter Portal:** Allow external companies to create accounts, purchase credits, and post jobs directly on the platform.
