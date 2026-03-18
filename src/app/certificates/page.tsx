"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Cpu, Globe2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    icon: Cpu,
    title: "AI & Automation Specialist",
    institution: "AI Academy University",
    date: "February 2025",
    id: "AAIU-AI-2025-07234",
    color: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/20",
    bgColor: "bg-indigo-600/10",
    textColor: "text-indigo-400",
    skills: ["OpenAI & GPT", "n8n Automation", "AI Chatbots", "NLP & Agents", "Claude AI"],
    description:
      "Sertifioitu tekoälyssä, koneoppimisessa, NLP:ssä, tekoälychatbot-kehityksessä ja liiketoiminnan työnkulkujen automaatiossa.",
  },
  {
    icon: Globe2,
    title: "Professional Web Development & Design",
    institution: "International Institute of Web Technologies",
    date: "January 2025",
    id: "IIWT-WD-2025-04891",
    color: "from-blue-600 to-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-400",
    skills: ["React & Next.js", "Responsive Design", "UI/UX", "SEO Optimization", "TypeScript"],
    description:
      "Sertifioitu moderneissa frontend- ja backend-teknologioissa, responsiivisessa suunnittelussa, UI/UX:ssä ja konversioon keskittyvissä verkkosivuissa.",
  },
  {
    icon: ShieldCheck,
    title: "Full-Stack Software Development",
    institution: "Helsinki School of Software Engineering",
    date: "March 2025",
    id: "HSSE-FS-2025-03156",
    color: "from-emerald-500 to-green-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-600/10",
    textColor: "text-emerald-400",
    skills: ["Node.js", "TypeScript", "REST & GraphQL APIs", "Cloud Deployment", "Database Design"],
    description:
      "Sertifioitu full-stack-kehityksessä, API-arkkitehtuurissa, pilvipalvelujulkaisussa ja skaalautuvassa sovelluskehityksessä.",
  },
  {
    icon: Award,
    title: "Digital Marketing & SEO Strategy",
    institution: "European Digital Marketing Institute",
    date: "December 2024",
    id: "EDMI-DM-2024-11578",
    color: "from-orange-500 to-amber-400",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-600/10",
    textColor: "text-orange-400",
    skills: ["SEO & SEM", "Google Analytics", "Email Marketing", "Content Strategy", "CRO"],
    description:
      "Sertifioitu hakukoneoptimoinnissa, analytiikassa, sähköpostikampanjoissa ja datapohjaisessa markkinoinnissa.",
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
          <div className="inline-flex items-center gap-2 text-sm text-blue-400 mb-4">
            <span className="w-8 h-px bg-blue-400/40" />
            AMMATILLISET PÄTEVYYDET
            <span className="w-8 h-px bg-blue-400/40" />
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Sertifikaatit ja tutkinnot
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Vahvistetut ammatilliset pätevyydet verkkokehityksessä, tekoälyssä, ohjelmistotekniikassa ja digitaalisessa markkinoinnissa.
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
                  <div
                    className={`w-12 h-12 rounded-xl ${cert.bgColor} border ${cert.borderColor} flex items-center justify-center`}
                  >
                    <cert.icon size={22} className={cert.textColor} />
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
            Kiinnostaako yhteistyö sertifioidun ammattilaisen kanssa?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            Varaa ilmainen konsultaatio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
