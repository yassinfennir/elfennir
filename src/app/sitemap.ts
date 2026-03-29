import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elfennir.com";

  return [
    // Core pages
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/verkkosivut-yritykselle`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/kotisivut-hinta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/tekoaly-automaatio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ravintola-verkkosivut`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Local SEO — Finland
    { url: `${baseUrl}/website-espoo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // International SEO — Spain
    { url: `${baseUrl}/diseno-web-espana`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/web-design-spain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // International SEO — Switzerland
    { url: `${baseUrl}/webdesign-schweiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/web-design-switzerland`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // International SEO — Dubai/UAE
    { url: `${baseUrl}/web-design-dubai`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Blog
    { url: `${baseUrl}/blogi`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blogi/verkkosivut-yritykselle-2026`, lastModified: new Date("2026-03-15"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blogi/tekoaly-pk-yritys`, lastModified: new Date("2026-03-20"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blogi/ravintolan-markkinointi`, lastModified: new Date("2026-03-25"), changeFrequency: "yearly", priority: 0.6 },

    // Certificates
    { url: `${baseUrl}/certificates`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
