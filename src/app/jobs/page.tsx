import type { Metadata } from "next";
import Header from "@/components/Header";
import JobList from "@/components/JobList";
import { getJobs } from "@/lib/getJobs";

export const revalidate = 0; // Disable static caching so jobs are always fresh!

export const metadata: Metadata = {
  title: "Explore Verified Jobs & Careers | Step-Up Career",
  description: "Discover and apply for verified job openings across India in IT, Sales, Operations, and Management with Step-Up Career.",
  keywords: ["jobs in India", "IT recruitment", "hiring", "careers", "Step-Up Career", "sales jobs", "developer jobs"],
};

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 bg-bg-main min-h-screen transition-colors">
        <JobList initialJobs={jobs} />
      </main>
    </>
  );
}
