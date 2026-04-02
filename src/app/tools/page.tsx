"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

/* ─── Types ─── */

interface Tool {
  name: string;
  description: string;
  href: string;
}

interface ToolCategory {
  emoji: string;
  title: string;
  gradient: string;
  borderColor: string;
  tools: Tool[];
}

/* ─── Data ─── */

const TOOL_CATEGORIES: ToolCategory[] = [
  {
    emoji: "\uD83C\uDF10",
    title: "Web Development",
    gradient: "from-[#14F195] to-[#00D1FF]",
    borderColor: "border-[#14F195]/20",
    tools: [
      { name: "Vercel", description: "Deployment platform for frontend apps", href: "#vercel" },
      { name: "Tailwind CSS", description: "Utility-first CSS styling framework", href: "#tailwind" },
      { name: "React / Next.js", description: "Frontend framework for modern web apps", href: "#nextjs" },
      { name: "TypeScript", description: "Type-safe JavaScript for robust code", href: "#typescript" },
    ],
  },
  {
    emoji: "\uD83E\uDD16",
    title: "AI & Automation",
    gradient: "from-[#9945FF] to-[#00D1FF]",
    borderColor: "border-[#9945FF]/20",
    tools: [
      { name: "Claude AI", description: "AI assistant for coding & business ops", href: "#claude" },
      { name: "n8n", description: "Workflow automation platform", href: "#n8n" },
      { name: "Make", description: "Alternative visual automation tool", href: "#make" },
    ],
  },
  {
    emoji: "\uD83D\uDCB0",
    title: "Business & Payments",
    gradient: "from-[#ff8c00] to-[#FFD700]",
    borderColor: "border-[#ff8c00]/20",
    tools: [
      { name: "Stripe", description: "Payment processing for online businesses", href: "#stripe" },
      { name: "Gumroad", description: "Sell digital products effortlessly", href: "#gumroad" },
    ],
  },
  {
    emoji: "\uD83C\uDFA8",
    title: "Design & Media",
    gradient: "from-[#00D1FF] to-[#9945FF]",
    borderColor: "border-[#00D1FF]/20",
    tools: [
      { name: "Cloudinary", description: "Image optimization & media management", href: "#cloudinary" },
      { name: "Figma", description: "Collaborative design tool for UI/UX", href: "#figma" },
    ],
  },
  {
    emoji: "\uD83D\uDCCA",
    title: "Analytics & SEO",
    gradient: "from-[#14F195] to-[#9945FF]",
    borderColor: "border-[#14F195]/20",
    tools: [
      { name: "Google Analytics", description: "Traffic tracking & user insights", href: "#google-analytics" },
      { name: "Google Search Console", description: "SEO monitoring & indexing tools", href: "#search-console" },
    ],
  },
  {
    emoji: "\uD83D\uDD27",
    title: "Dev Tools",
    gradient: "from-[#9945FF] to-[#ff8c00]",
    borderColor: "border-[#9945FF]/20",
    tools: [
      { name: "Cursor AI", description: "AI-powered code editor", href: "#cursor" },
      { name: "GitHub", description: "Version control & collaboration", href: "#github" },
      { name: "VS Code", description: "Lightweight code editor", href: "#vscode" },
    ],
  },
  {
    emoji: "\u2601\uFE0F",
    title: "Hosting & Infrastructure",
    gradient: "from-[#00D1FF] to-[#14F195]",
    borderColor: "border-[#00D1FF]/20",
    tools: [
      { name: "Supabase", description: "Open-source database & auth platform", href: "#supabase" },
      { name: "Railway", description: "Backend hosting made simple", href: "#railway" },
      { name: "Namecheap", description: "Affordable domain registration", href: "#namecheap" },
      { name: "Hostinger", description: "Budget-friendly web hosting", href: "#hostinger" },
    ],
  },
];

/* ─── Animation Variants ─── */

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const TOOL_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
} as const;

/* ─── Components ─── */

function ToolItem({ tool }: { tool: Tool }) {
  return (
    <motion.a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={TOOL_VARIANTS}
      className="group flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-[#ff8c00]/30 hover:bg-white/[0.05]"
    >
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-white group-hover:text-[#ff8c00] transition-colors duration-300">
          {tool.name}
        </p>
        <p className="text-sm text-gray-400">{tool.description}</p>
      </div>
      <span className="ml-4 flex shrink-0 items-center gap-1 text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-[#ff8c00]">
        Try it
        <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </motion.a>
  );
}

function CategoryCard({ category }: { category: ToolCategory }) {
  return (
    <motion.div
      variants={CARD_VARIANTS}
      className={`rounded-2xl border ${category.borderColor} bg-[#0a0a0a]/80 p-6 backdrop-blur-sm`}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="text-2xl">{category.emoji}</span>
        <h3
          className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-xl font-bold text-transparent`}
        >
          {category.title}
        </h3>
      </div>
      <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-2"
      >
        {category.tools.map((tool) => (
          <ToolItem key={tool.name} tool={tool} />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── Page ─── */

export default function ToolsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#14F195]/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#9945FF]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#00D1FF]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#14F195]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#14F195] via-[#00D1FF] to-[#9945FF] bg-clip-text text-transparent">
              Tools I Use
            </span>{" "}
            <span className="text-white">to Build &amp; Automate Everything</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            The exact stack I use to build websites, AI chatbots, and automation
            systems for businesses worldwide.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#14F195] to-[#9945FF]" />
        </motion.section>

        {/* Tool Categories Grid */}
        <motion.section
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {TOOL_CATEGORIES.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 rounded-2xl border border-[#ff8c00]/20 bg-gradient-to-br from-[#ff8c00]/5 to-[#9945FF]/5 p-8 text-center backdrop-blur-sm sm:p-12"
        >
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Need help setting up your tech stack?
          </h2>
          <p className="mb-6 text-gray-400">
            I help businesses choose and implement the right tools for growth,
            automation, and scalability.
          </p>
          <a
            href="https://elfennir.com/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#FFD700] px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.3)]"
          >
            Contact me at elfennir.com
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.section>
      </div>
    </main>
  );
}
