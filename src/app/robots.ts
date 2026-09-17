import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://stepup-career.in/sitemap.xml",
  };
}
