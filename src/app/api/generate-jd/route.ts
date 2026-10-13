import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "";
  const tags = searchParams.get("tags") || "";
  const salary = searchParams.get("salary") || "";
  const location = searchParams.get("location") || "";
  const type = searchParams.get("type") || "";

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  // If no API key configured, return a structured fallback
  if (!GEMINI_API_KEY) {
    return NextResponse.json({ generated: false, description: "" });
  }

  const prompt = `You are writing a professional job description for a recruitment platform called Step-Up Career.

Job Details:
- Title: ${title}
- Skills/Tags: ${tags}
- Salary: ${salary}
- Location: ${location}
- Type: ${type}

Write a concise job description in 3-4 sentences. It should:
1. Describe what the candidate will do in this role
2. Mention the key skills (${tags}) naturally
3. Be professional, clear, and appealing to job seekers in India
4. NOT mention "partnering with" anyone — Step-Up Career is the recruiter

Only output the description paragraph. No headings, no bullet points, no extra text.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY, // Required for new AQ. format keys
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 200,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status);
      return NextResponse.json({ generated: false, description: "" });
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    return NextResponse.json({ generated: true, description: text });
  } catch (err) {
    console.error("generate-jd error:", err);
    return NextResponse.json({ generated: false, description: "" });
  }
}
