import Header from "@/components/Header";
import JobList from "@/components/JobList";
import { getJobs } from "@/lib/getJobs";

export const revalidate = 0; // Disable static caching so jobs are always fresh!

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 relative min-h-screen">
        {/* Background glow */}
        <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[128px]"></div>

        <JobList initialJobs={jobs} />
      </main>
    </>
  );
}
