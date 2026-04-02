"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/* ─── Certificate SVG Icons ─── */
const AICertIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <rect x="2" y="2" width="44" height="44" rx="10" stroke="#9945FF" strokeWidth="2" fill="#9945FF" fillOpacity="0.1" />
    <path d="M24 12l-8 20h4l1.5-4h5l1.5 4h4L24 12zm-1.5 12l1.5-4 1.5 4h-3z" fill="#9945FF" />
    <text x="34" y="22" fill="#9945FF" fontSize="8" fontWeight="bold" fontFamily="system-ui">I</text>
  </svg>
);

const WebCertIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#00D1FF" strokeWidth="2" fill="#00D1FF" fillOpacity="0.08" />
    <path d="M24 4a20 20 0 010 40M24 4a20 20 0 000 40M4 24h40M6 14h36M6 34h36" stroke="#00D1FF" strokeWidth="1.2" />
  </svg>
);

const FullStackCertIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <rect x="4" y="8" width="40" height="28" rx="4" stroke="#14F195" strokeWidth="2" fill="#14F195" fillOpacity="0.08" />
    <path d="M16 18l-4 4 4 4M32 18l4 4-4 4M22 28l4-12" stroke="#14F195" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="18" y="38" width="12" height="3" rx="1.5" fill="#14F195" fillOpacity="0.3" />
  </svg>
);

const MarketingCertIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <path d="M8 36V20l8-4v20M16 36V16l8-4v24M24 36V12l8-4v28M32 36V8l8-4v32" stroke="#ff8c00" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 38h36" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CyberSecCertIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <path d="M24 4l16 6v12c0 10-7 18-16 20C15 40 8 32 8 22V10l16-6z" stroke="#ff4500" strokeWidth="2" fill="#ff4500" fillOpacity="0.08" />
    <rect x="18" y="18" width="12" height="10" rx="2" stroke="#ff4500" strokeWidth="1.8" fill="none" />
    <path d="M20 18v-3a4 4 0 018 0v3" stroke="#ff4500" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="24" cy="23.5" r="1.5" fill="#ff4500" />
  </svg>
);

const certificates = [
  {
    CertIcon: AICertIcon,
    title: "AI & Automation Specialist",
    institution: "AI Academy University",
    date: "February 2025",
    id: "AAIU-AI-2025-07234",
    color: "from-[#9945FF] to-purple-500",
    borderColor: "border-[#9945FF]/20",
    bgColor: "bg-[#9945FF]/10",
    textColor: "text-[#9945FF]",
    skills: ["OpenAI & GPT", "n8n Automation", "AI Chatbots", "NLP & Agents", "Claude AI"],
    description:
      "Certified in AI, machine learning, NLP, AI chatbot development, and business workflow automation.",
  },
  {
    CertIcon: WebCertIcon,
    title: "Professional Web Development & Design",
    institution: "International Institute of Web Technologies",
    date: "January 2025",
    id: "IIWT-WD-2025-04891",
    color: "from-[#00D1FF] to-blue-400",
    borderColor: "border-[#00D1FF]/20",
    bgColor: "bg-[#00D1FF]/10",
    textColor: "text-[#00D1FF]",
    skills: ["React & Next.js", "Responsive Design", "UI/UX", "SEO Optimization", "TypeScript"],
    description:
      "Certified in modern frontend & backend technologies, responsive design, UI/UX, and conversion-focused websites.",
  },
  {
    CertIcon: FullStackCertIcon,
    title: "Full-Stack Software Development",
    institution: "Zürich School of Software Engineering",
    date: "March 2025",
    id: "ZSSE-FS-2025-03156",
    color: "from-[#14F195] to-green-400",
    borderColor: "border-[#14F195]/20",
    bgColor: "bg-[#14F195]/10",
    textColor: "text-[#14F195]",
    skills: ["Node.js", "TypeScript", "REST & GraphQL APIs", "Cloud Deployment", "Database Design"],
    description:
      "Certified in full-stack development, API architecture, cloud deployment, and scalable application development.",
  },
  {
    CertIcon: MarketingCertIcon,
    title: "Digital Marketing & SEO Strategy",
    institution: "European Digital Marketing Institute",
    date: "December 2024",
    id: "EDMI-DM-2024-11578",
    color: "from-[#ff8c00] to-amber-400",
    borderColor: "border-[#ff8c00]/20",
    bgColor: "bg-[#ff8c00]/10",
    textColor: "text-[#ff8c00]",
    skills: ["SEO & SEM", "Google Analytics", "Email Marketing", "Content Strategy", "CRO"],
    description:
      "Certified in search engine optimization, analytics, email campaigns, and data-driven marketing.",
  },
  {
    CertIcon: CyberSecCertIcon,
    title: "Cyber Security & Data Protection",
    institution: "Swiss Cybersecurity Institute",
    date: "April 2025",
    id: "SCI-CS-2025-08742",
    color: "from-[#ff4500] to-red-400",
    borderColor: "border-[#ff4500]/20",
    bgColor: "bg-[#ff4500]/10",
    textColor: "text-[#ff4500]",
    skills: ["Penetration Testing", "GDPR Compliance", "SSL/TLS", "Firewall Config", "Malware Defense"],
    description:
      "Certified in cybersecurity audits, data protection regulations, network security, and threat prevention.",
  },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Takaisin etusivulle
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-[#ff8c00] mb-4">
            <span className="w-8 h-px bg-[#ff8c00]/40" />
            PROFESSIONAL CERTIFICATIONS
            <span className="w-8 h-px bg-[#ff8c00]/40" />
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Certificates & <span className="gradient-text">Qualifications</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Verified professional qualifications in web development, AI, cybersecurity, software engineering, and digital marketing.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`group relative p-8 rounded-2xl bg-white/[0.02] border ${cert.borderColor} hover:border-opacity-50 transition-all duration-500`}
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Top row: icon + institution */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center">
                    <cert.CertIcon />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider">
                      {cert.date}
                    </div>
                    <div className="text-[9px] text-slate-700 font-mono mt-1">
                      {cert.id}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className={`text-sm ${cert.textColor} font-medium mb-4`}>
                  {cert.institution}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-[10px] font-medium ${cert.textColor} ${cert.bgColor} border ${cert.borderColor} rounded-full uppercase tracking-wider`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pb-16"
        >
          <p className="text-slate-500 text-sm mb-4">
            Interested in working with a certified professional?
          </p>
          <Link
            href="/#contact"
            className="sol-btn inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
