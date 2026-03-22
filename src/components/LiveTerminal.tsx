"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Zap, Terminal, Wifi, Activity } from "lucide-react";

/* ─── ASCII Art Logo ─── */
const ASCII_LOGO = `
 ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗    ██████╗  ██████╗ ████████╗
██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗╚══██╔══╝
██║     ██║     ███████║██║   ██║██║  ██║█████╗      ██████╔╝██║   ██║   ██║
██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝      ██╔══██╗██║   ██║   ██║
╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗    ██████╔╝╚██████╔╝   ██║
 ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝    ╚═════╝  ╚═════╝    ╚═╝
`.trim();

/* ─── Log Entry Types ─── */
type LogType = "deploy" | "seo" | "ai" | "automation" | "security" | "speed" | "lead" | "system";

interface LogEntry {
  id: number;
  timestamp: string;
  type: LogType;
  message: string;
  highlight?: string;
  value?: string;
  status?: "success" | "warning" | "info";
}

const LOG_TEMPLATES: Array<() => Omit<LogEntry, "id" | "timestamp">> = [
  () => ({ type: "deploy", message: "DEPLOY: Website live for", highlight: randomClient(), value: "→ 200 OK", status: "success" }),
  () => ({ type: "seo", message: "SEO SCAN:", highlight: randomClient(), value: `score: ${85 + Math.floor(Math.random() * 15)}/100`, status: "success" }),
  () => ({ type: "ai", message: "AI CHATBOT: Responding to lead from", highlight: randomCity(), value: `latency: ${12 + Math.floor(Math.random() * 25)}ms`, status: "info" }),
  () => ({ type: "automation", message: "n8n WORKFLOW: Email campaign sent →", highlight: `${10 + Math.floor(Math.random() * 40)} contacts`, value: "delivered ✓", status: "success" }),
  () => ({ type: "security", message: "SSL CERT: Auto-renewed for", highlight: randomDomain(), value: "expires: 2027", status: "success" }),
  () => ({ type: "speed", message: "PAGESPEED:", highlight: randomClient(), value: `${92 + Math.floor(Math.random() * 8)}/100 mobile`, status: "success" }),
  () => ({ type: "lead", message: "NEW LEAD: Contact form submission from", highlight: randomCity(), value: "→ WhatsApp notified", status: "info" }),
  () => ({ type: "automation", message: "STRIPE: Invoice #EF-" + (1000 + Math.floor(Math.random() * 9000)), highlight: "paid", value: `€${(Math.random() * 1200 + 399).toFixed(2)}`, status: "success" }),
  () => ({ type: "system", message: "UPTIME MONITOR: All", highlight: `${3 + Math.floor(Math.random() * 8)} sites`, value: "online — 99.99%", status: "success" }),
  () => ({ type: "ai", message: "GPT-4 AGENT: Analyzing competitor SEO for", highlight: randomClient(), value: `${3 + Math.floor(Math.random() * 7)} opportunities found`, status: "info" }),
  () => ({ type: "deploy", message: "CDN CACHE: Purged & rebuilt for", highlight: randomDomain(), value: `TTFB: ${18 + Math.floor(Math.random() * 30)}ms`, status: "success" }),
  () => ({ type: "automation", message: "BOOKING: New appointment via", highlight: "Calendly", value: randomClient(), status: "info" }),
  () => ({ type: "seo", message: "GOOGLE INDEX: New pages crawled for", highlight: randomDomain(), value: `${2 + Math.floor(Math.random() * 8)} pages`, status: "success" }),
  () => ({ type: "security", message: "FIREWALL: Blocked", highlight: `${50 + Math.floor(Math.random() * 200)} threats`, value: "last 24h", status: "warning" }),
  () => ({ type: "lead", message: "WHATSAPP: Auto-reply sent to new inquiry from", highlight: randomCity(), value: "< 2s response", status: "info" }),
  () => ({ type: "speed", message: "IMAGE OPTIMIZER: Compressed", highlight: `${5 + Math.floor(Math.random() * 20)} images`, value: `saved ${20 + Math.floor(Math.random() * 60)}%`, status: "success" }),
];

const clients = ["CarMaster", "iHelp Auto", "GymHolvi", "Fluffy Bites", "Kazumi", "PerfectBrows", "Saana Store", "AutoSky", "CarHelp"];
const cities = ["Zurich", "Bern", "Basel", "Geneva", "Lausanne", "Lucerne", "Winterthur"];
const domains = ["carmaster.fi", "gymholvi.fi", "fluffybites.fi", "kazumi.fi", "autosky.fi", "carhelp.fi"];

function randomClient() { return clients[Math.floor(Math.random() * clients.length)]; }
function randomCity() { return cities[Math.floor(Math.random() * cities.length)]; }
function randomDomain() { return domains[Math.floor(Math.random() * domains.length)]; }

function getTimestamp(): string {
  const now = new Date();
  return now.toISOString().replace("T", " ").slice(0, 19) + " UTC";
}

function getTypeColor(type: LogType): string {
  switch (type) {
    case "deploy": return "#14f195";
    case "seo": return "#00d1ff";
    case "ai": return "#9945ff";
    case "automation": return "#f971ff";
    case "security": return "#ff6b6b";
    case "speed": return "#ffd93d";
    case "lead": return "#14f195";
    case "system": return "#00d1ff";
    default: return "#14f195";
  }
}

function getStatusColor(status?: string): string {
  switch (status) {
    case "success": return "#14f195";
    case "warning": return "#ffd93d";
    case "info": return "#00d1ff";
    default: return "#14f195";
  }
}

export function LiveTerminal() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [stats, setStats] = useState({ sites: 12, uptime: 99.99, revenue: 4826, leads: 47 });
  const logRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  // Generate initial logs
  useEffect(() => {
    const initial: LogEntry[] = [];
    for (let i = 0; i < 6; i++) {
      const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)]();
      initial.push({
        ...template,
        id: idCounter.current++,
        timestamp: getTimestamp(),
      });
    }
    setLogs(initial);
  }, []);

  // Add new log every 2-4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)]();
      const newLog: LogEntry = {
        ...template,
        id: idCounter.current++,
        timestamp: getTimestamp(),
      };
      setLogs((prev) => [...prev.slice(-15), newLog]);

      // Randomly update stats
      setStats((prev) => ({
        sites: prev.sites + (Math.random() > 0.8 ? 1 : 0),
        uptime: 99.99,
        revenue: prev.revenue + Math.floor(Math.random() * 50),
        leads: prev.leads + (Math.random() > 0.6 ? 1 : 0),
      }));
    }, 2000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14f195]/[0.01] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm text-[#14f195] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#14f195]/60" />
            LIVE-JÄRJESTELMÄT
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#14f195]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            Järjestelmämme toimivat <span className="gradient-text">24/7</span> puolestasi.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Reaaliaikainen näkymä automaatiomoottoriimme. Verkkosivut julkaistaan, tekoäly vastaa,
            hakukoneoptimointi optimoi — kaikki toimii automaattisesti.
          </motion.p>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-[#14f195]/20 shadow-[0_0_60px_rgba(20,241,149,0.08)]">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0a0f0a] border-b border-[#14f195]/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 text-[11px] text-[#14f195]/60 font-mono tracking-wider">
                  elfennir@cloud — automation_engine_v4.2
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Wifi size={10} className="text-[#14f195]" />
                  <span className="text-[10px] text-[#14f195]/80 font-mono">CONNECTED</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity size={10} className="text-[#14f195] animate-pulse" />
                  <span className="text-[10px] text-[#14f195]/80 font-mono">LIVE</span>
                </div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="bg-[#0a0f0a] p-5 sm:p-6">
              {/* ASCII Logo */}
              <pre className="text-[#14f195] text-[5px] sm:text-[7px] lg:text-[9px] leading-tight font-mono mb-4 opacity-80 overflow-hidden select-none">
                {ASCII_LOGO}
              </pre>

              {/* Subtitle */}
              <div className="text-[#14f195]/50 text-[10px] sm:text-xs font-mono mb-4 tracking-[0.2em]">
                — AI AUTOMATION ENGINE — WEBSITES · SEO · LEADS · 24/7 —
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-5 pb-4 border-b border-[#14f195]/10">
                <div className="font-mono">
                  <span className="text-[#14f195]/50 text-[10px] sm:text-xs">SITES:</span>{" "}
                  <span className="text-white font-bold text-sm sm:text-base">{stats.sites}</span>
                </div>
                <div className="font-mono">
                  <span className="text-[#14f195]/50 text-[10px] sm:text-xs">UPTIME:</span>{" "}
                  <span className="text-[#14f195] font-bold text-sm sm:text-base">{stats.uptime}%</span>
                </div>
                <div className="font-mono">
                  <span className="text-[#14f195]/50 text-[10px] sm:text-xs">REVENUE:</span>{" "}
                  <span className="text-[#ffd93d] font-bold text-sm sm:text-base">€{stats.revenue.toLocaleString()}</span>{" "}
                  <span className="text-[#14f195] text-[10px]">(+€{Math.floor(Math.random() * 100 + 20)})</span>
                </div>
                <div className="font-mono">
                  <span className="text-[#14f195]/50 text-[10px] sm:text-xs">LEADS:</span>{" "}
                  <span className="text-[#00d1ff] font-bold text-sm sm:text-base">{stats.leads}</span>
                </div>
              </div>

              {/* Log Feed */}
              <div
                ref={logRef}
                className="h-[320px] sm:h-[380px] overflow-y-auto scrollbar-thin pr-2 space-y-1"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#14f195 #0a0f0a",
                }}
              >
                <AnimatePresence mode="popLayout">
                  {logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="font-mono text-[11px] sm:text-xs leading-relaxed"
                    >
                      {/* Colored left border */}
                      <div className="flex items-start gap-2 py-1 px-2 rounded hover:bg-[#14f195]/[0.03] transition-colors">
                        <div
                          className="w-0.5 h-full min-h-[16px] rounded-full flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: getTypeColor(log.type) }}
                        />
                        <div className="flex-1 min-w-0">
                          {/* Timestamp */}
                          <span className="text-[#14f195]/30 text-[9px] sm:text-[10px]">
                            [{log.timestamp}]
                          </span>{" "}
                          {/* Zap icon for certain types */}
                          {(log.type === "lead" || log.type === "deploy") && (
                            <Zap size={9} className="inline text-[#ffd93d] mr-1" />
                          )}
                          {/* Message */}
                          <span className="text-slate-400">{log.message} </span>
                          {/* Highlight */}
                          {log.highlight && (
                            <span
                              className="font-bold"
                              style={{ color: getTypeColor(log.type) }}
                            >
                              {log.highlight}
                            </span>
                          )}{" "}
                          {/* Value */}
                          {log.value && (
                            <span style={{ color: getStatusColor(log.status) }}>
                              {log.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Blinking cursor */}
                <div className="flex items-center gap-2 py-1 px-2 font-mono text-[11px]">
                  <span className="text-[#14f195]/50">{">"}</span>
                  <span className="text-[#14f195] animate-pulse">▊</span>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="flex items-center justify-between px-5 py-2.5 bg-[#0a0f0a] border-t border-[#14f195]/10">
              <div className="flex items-center gap-2">
                <Terminal size={10} className="text-[#14f195]/40" />
                <span className="text-[9px] sm:text-[10px] text-[#14f195]/40 font-mono">
                  elfennir automation v4.2 · powered by AI
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#14f195] animate-pulse" />
                <span className="text-[9px] sm:text-[10px] text-[#14f195]/60 font-mono">
                  {logs.length} events
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
