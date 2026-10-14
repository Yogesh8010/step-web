import { NextResponse } from "next/server";

// Temporary debug route — lists available Gemini models for the configured API key
export async function GET() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return NextResponse.json({ error: "no_key" });
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models`,
      {
        headers: {
          "x-goog-api-key": GEMINI_API_KEY,
        },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: `http_${res.status}`, detail: text });
    }

    const data = await res.json();
    const names = (data.models || []).map((m: any) => m.name);
    return NextResponse.json({ key_works: true, available_models: names });
  } catch (err: any) {
    return NextResponse.json({ error: "fetch_error", detail: err.message });
  }
}
