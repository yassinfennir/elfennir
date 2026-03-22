"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/* ─── Real Automation Tool Logos (SVG) ─── */
const automationTools = [
  { name: "n8n", color: "#EA4B71", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><rect width="24" height="24" rx="5" fill="#EA4B71"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="system-ui">n8n</text></svg> },
  { name: "Slack", color: "#4A154B", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/></svg> },
  { name: "Gmail", color: "#EA4335", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/></svg> },
  { name: "Stripe", color: "#635BFF", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><rect width="24" height="24" rx="4" fill="#635BFF"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">S</text></svg> },
  { name: "Notion", color: "#ffffff", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L2.84 2.74c-.466.046-.56.28-.374.466l1.993 1.002zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.933-.234-1.494-.934l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.187c-.093-.187 0-.653.327-.746l.84-.234V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.187zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747L1.43 19.504c-.56-.747-.793-1.307-.793-1.96V2.667c0-.839.374-1.54 1.299-1.632z"/></svg> },
  { name: "Google Sheets", color: "#34A853", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><rect width="24" height="24" rx="3" fill="#34A853"/><rect x="5" y="4" width="14" height="16" rx="1" fill="white"/><line x1="5" y1="9" x2="19" y2="9" stroke="#34A853" strokeWidth="1.5"/><line x1="5" y1="13" x2="19" y2="13" stroke="#34A853" strokeWidth="1.5"/><line x1="5" y1="17" x2="19" y2="17" stroke="#34A853" strokeWidth="1.5"/><line x1="12" y1="4" x2="12" y2="20" stroke="#34A853" strokeWidth="1.5"/></svg> },
  { name: "WhatsApp", color: "#25D366", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { name: "Telegram", color: "#26A5E4", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#26A5E4"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
  { name: "Shopify", color: "#7AB55C", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#96BF48"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104zm-1.469-17.03c-.232-.07-.477-.136-.741-.196.004-.076.012-.17.012-.285 0-1.451-.605-2.186-1.554-2.186-.124 0-.255.014-.392.044.38-.653.972-1.218 1.823-1.218 1.402 0 2.073 1.107 2.073 2.703 0 .382-.033.818-.094 1.263-.378-.05-.758-.097-1.127-.125zm-2.412-.467c-.33-.044-.673-.073-1.026-.073-.108 0-.207.016-.312.021.192-.744.592-1.489 1.26-1.489.51 0 .787.657.787 1.454 0 .13-.005.25-.012.376-.21-.123-.44-.22-.697-.289zm-.746 1.216c-1.347.023-2.404.34-3.22.824-.044-1.08-.059-2.142-.017-2.888.625-.19 1.367-.37 2.177-.37.218 0 .423.022.634.044-.153.553-.216 1.227-.216 1.926 0 .16.005.316.012.464h.63z"/></svg> },
  { name: "HubSpot", color: "#FF7A59", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><circle cx="12" cy="12" r="12" fill="#FF7A59"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="system-ui">HS</text></svg> },
  { name: "Airtable", color: "#18BFFF", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><rect width="24" height="24" rx="5" fill="#18BFFF"/><rect x="4" y="5" width="7" height="7" rx="1" fill="white"/><rect x="13" y="5" width="7" height="7" rx="1" fill="white" fillOpacity="0.6"/><rect x="4" y="14" width="7" height="5" rx="1" fill="white" fillOpacity="0.6"/><rect x="13" y="14" width="7" height="5" rx="1" fill="white" fillOpacity="0.3"/></svg> },
  { name: "Calendly", color: "#006BFF", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><circle cx="12" cy="12" r="12" fill="#006BFF"/><rect x="7" y="6" width="10" height="12" rx="2" fill="white"/><line x1="7" y1="10" x2="17" y2="10" stroke="#006BFF" strokeWidth="1.5"/><circle cx="10" cy="14" r="1" fill="#006BFF"/><circle cx="14" cy="14" r="1" fill="#006BFF"/></svg> },
];

const techStack = [
  { name: "React", color: "#61DAFB", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="0.8"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(120 12 12)"/></svg> },
  { name: "Next.js", color: "#fff", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5v-9l7.5 9h-2.25l-5.25-6.3v6.3H9.5z"/></svg> },
  { name: "TypeScript", color: "#3178C6", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><rect width="24" height="24" rx="3" fill="#3178C6"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">TS</text></svg> },
  { name: "Tailwind", color: "#06B6D4", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#06B6D4"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12z"/></svg> },
  { name: "Node.js", color: "#339933", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#339933"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 9.08l6 3.33v6.67L5 15.75V9.08zm8 10v-6.67l6-3.33v6.67l-6 3.33z"/></svg> },
  { name: "Python", color: "#3776AB", svg: <svg viewBox="0 0 24 24" className="w-7 h-7"><path d="M9.5 2C6.46 2 6 3.33 6 3.33L6.01 6H9.5v.5H4S2 6.07 2 9.5s1.74 3.32 1.74 3.32H5v-1.6s-.06-1.74 1.72-1.74h3.06s1.64.03 1.64-1.58V4.6S11.6 2 9.5 2z" fill="#3776AB"/><path d="M14.5 22c3.04 0 3.5-1.33 3.5-1.33L17.99 18H14.5v-.5H20s2 .43 2-3s-1.74-3.32-1.74-3.32H19v1.6s.06 1.74-1.72 1.74h-3.06s-1.64-.03-1.64 1.58v3.3S12.4 22 14.5 22z" fill="#FFD43B"/></svg> },
  { name: "Netlify", color: "#00C7B7", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#00C7B7"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00C7B7" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Vercel", color: "#fff", svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white"><path d="M12 2L22 20H2L12 2z"/></svg> },
];

export function TechStack() {
  const { t } = useLanguage();

  const stats = [
    { value: "50+", label: t.techStack.stat1Label, color: "#ff6b00" },
    { value: "100%", label: t.techStack.stat2Label, color: "#00d1ff" },
    { value: "99.9%", label: t.techStack.stat3Label, color: "#14f195" },
    { value: "A+", label: t.techStack.stat4Label, color: "#f971ff" },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#14f195] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#14f195]/60" />
            {t.techStack.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#14f195]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.techStack.title1}{" "}
            <span className="gradient-text">{t.techStack.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            {t.techStack.subtitle}
          </motion.p>
        </div>

        {/* Apps we automate — Glass grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <p className="text-xs uppercase tracking-[3px] text-slate-500 mb-5 font-medium text-center">
            {t.techStack.appsLabel}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {automationTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.03 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-xl glass-panel hover:border-white/20 transition-all duration-300 cursor-default"
            >
              <div className="relative">
                {tool.svg}
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: tool.color }}
                />
              </div>
              <span className="text-[10px] text-slate-500 group-hover:text-white transition-colors font-medium">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* RGB Worm Divider */}
        <div className="rgb-worm-line mb-16" />

        {/* Tech Stack Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <p className="text-xs uppercase tracking-[3px] text-slate-500 mb-5 font-medium text-center">
            {t.techStack.builtWithLabel}
          </p>
        </motion.div>

        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.04 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="group flex flex-col items-center gap-2 p-3 rounded-xl glass-panel hover:border-white/20 transition-all duration-300 cursor-default"
            >
              {tech.svg}
              <span className="text-[9px] text-slate-500 group-hover:text-white transition-colors font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl glass-panel"
            >
              <div className="font-[var(--font-heading)] text-2xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
