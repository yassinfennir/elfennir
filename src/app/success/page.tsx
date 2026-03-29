"use client";
import { motion } from "framer-motion";

import { CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#08080f] to-[#08080f]" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#14f195]/[0.08] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#9945ff]/[0.06] rounded-full blur-[120px]" />

      <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
        {/* Logo + Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="mx-auto mb-8 relative w-24 h-24"
        >
          <img src="/images/logo.png" alt="El Fennir" width={96} height={96} className="drop-shadow-[0_4px_30px_rgba(255,107,0,0.25)]" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#14f195] flex items-center justify-center shadow-lg">
            <CheckCircle size={18} className="text-[#08080f]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }}
          className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Maksu{" "}
          <span className="gradient-text">vastaanotettu!</span>
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: smoothEase }}
          className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Kiitos tilauksestasi. Aloitamme verkkosivustosi rakentamisen{" "}
          <span className="text-white font-semibold">24 tunnin sisällä</span>. Saat pian
          vahvistusviestin sähköpostiisi seuraavista vaiheista.
        </motion.p>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: smoothEase }}
          className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 mb-10 text-left"
        >
          <h3 className="text-white font-semibold text-lg mb-5 text-center">Mitä seuraavaksi tapahtuu?</h3>
          <div className="space-y-4">
            {[
              { num: "1", text: "Saat vahvistusviestin sähköpostiisi muutamassa minuutissa" },
              { num: "2", text: "Otamme sinuun yhteyttä WhatsAppilla keskustellaksemme projektistasi" },
              { num: "3", text: "Aloitamme verkkosivustosi suunnittelun ja rakentamisen" },
              { num: "4", text: "Tarkistat suunnitelman ja pyydät muutoksia" },
              { num: "5", text: "Verkkosivustosi julkaistaan — kaikki automaatiot toiminnassa" },
            ].map((step, i) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#9945ff]/15 border border-[#9945ff]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#9945ff]">{step.num}</span>
                </div>
                <span className="text-slate-300 text-sm">{step.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: smoothEase }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/358466109064"
            target="_blank"
            rel="noopener noreferrer"
            className="sol-btn-green inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[15px] font-semibold"
          >
            <MessageCircle size={16} />
            <span>WhatsApp-viesti</span>
          </a>
          <a
            href="/"
            className="sol-btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px]"
          >
            Takaisin etusivulle
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          <a href="tel:+358466109064" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} /> +358 46 6109064
          </a>
          <a href="mailto:yassinfennir@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} /> yassinfennir@gmail.com
          </a>
        </motion.div>
      </div>
    </main>
  );
}
