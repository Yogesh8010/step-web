import { getJobs } from "@/lib/getJobs";
import HomeClient from "@/components/HomeClient";

export const revalidate = 0; // Always pull fresh live job postings

export default async function Home() {
  const jobs = await getJobs();

  return <HomeClient featuredJobs={jobs.slice(0, 6)} />;
}
