import Papa from "papaparse";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  tags: string[];
}

// Fallback data if the Google Sheet isn't linked yet or fails
const fallbackJobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    location: "Bangalore, India (Hybrid)",
    type: "Full-Time",
    salary: "18L - 25L",
    posted: "2 days ago",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "2",
    title: "B2B Sales Executive",
    company: "GrowthX Media",
    location: "Mumbai, India",
    type: "Full-Time",
    salary: "6L - 9L",
    posted: "5 hours ago",
    tags: ["Sales", "B2B", "Communication"]
  }
];

export async function getJobs(): Promise<Job[]> {
  const SHEET_CSV_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;

  if (!SHEET_CSV_URL) {
    console.log("No Google Sheet CSV URL provided. Using fallback data.");
    return fallbackJobs;
  }

  try {
    const res = await fetch(SHEET_CSV_URL, { cache: "no-store" }); // Disable cache so jobs update instantly
    if (!res.ok) throw new Error("Failed to fetch Google Sheet");
    
    const csvText = await res.text();
    
    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedJobs = results.data.map((row: any, index) => ({
            id: String(index + 1),
            title: row.Title || "Untitled Job",
            company: row.Company || "Confidential",
            location: row.Location || "Remote",
            type: row.Type || "Full-Time",
            salary: row.Salary || "Not Disclosed",
            posted: row.Posted || "Just now",
            tags: row.Tags ? row.Tags.split(",").map((t: string) => t.trim()) : [],
          }));
          resolve(parsedJobs);
        },
        error: () => resolve(fallbackJobs),
      });
    });
  } catch (error) {
    console.error("Error fetching jobs from sheet:", error);
    return fallbackJobs;
  }
}
