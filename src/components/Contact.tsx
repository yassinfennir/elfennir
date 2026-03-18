"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Sparkles, Clock, Shield, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9945ff]/[0.02] to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#9945ff]/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#14f195]/[0.03] rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#00d1ff] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00d1ff]/60" />
            {t.contact.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00d1ff]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.contact.title1} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-xl mx-auto text-lg"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Simple Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-5"
            action="https://formsubmit.co/yassinfennir@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://elfennir.com/#contact" />
            <input type="hidden" name="_subject" value="Uusi asiakaspyyntö — elfennir.com" />

            {/* Email - Required */}
            <div>
              <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                {t.contact.emailLabel} <span className="text-[#f971ff]">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#9945ff]/40 focus:ring-2 focus:ring-[#9945ff]/10 focus:bg-white/[0.05] transition-all duration-300"
              />
            </div>

            {/* Phone - Required */}
            <div>
              <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                {t.contact.phoneLabel} <span className="text-[#f971ff]">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+358 40 123 4567"
                required
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#9945ff]/40 focus:ring-2 focus:ring-[#9945ff]/10 focus:bg-white/[0.05] transition-all duration-300"
              />
            </div>

            {/* Service selector */}
            <div>
              <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                {t.contact.serviceLabel}
              </label>
              <select
                name="service"
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-slate-400 text-sm focus:outline-none focus:border-[#9945ff]/40 focus:bg-white/[0.05] transition-all duration-300 appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  {t.contact.servicePlaceholder}
                </option>
                <option value="new-website">{t.contact.serviceOption1}</option>
                <option value="redesign">{t.contact.serviceOption2}</option>
                <option value="ai-automation">{t.contact.serviceOption3}</option>
                <option value="seo">{t.contact.serviceOption4}</option>
                <option value="maintenance">{t.contact.serviceOption5}</option>
                <option value="other">{t.contact.serviceOption6}</option>
              </select>
            </div>

            {/* Optional message */}
            <div>
              <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                {t.contact.messageLabel} <span className="text-slate-600">{t.contact.messageOptional}</span>
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#9945ff]/40 focus:ring-2 focus:ring-[#9945ff]/10 focus:bg-white/[0.05] transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="sol-btn group w-full inline-flex items-center justify-center gap-2.5 py-4 text-white font-semibold text-[15px] transition-all duration-300"
            >
              <Send size={16} className="relative z-[2]" />
              <span className="relative z-[2]">{t.contact.submitBtn}</span>
            </button>

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {[t.contact.trustFree, t.contact.trustNoCommitment, t.contact.trustFastResponse].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Shield size={10} className="text-[#14f195]" />
                  <span className="text-[10px] text-slate-500 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="font-[var(--font-heading)] text-white font-semibold mb-4">
                {t.contact.directContactTitle}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/358466109064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#14f195] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#14f195]/10 border border-[#14f195]/20 flex items-center justify-center group-hover:bg-[#14f195]/20 transition-colors">
                    <MessageCircle size={14} className="text-[#14f195]" />
                  </div>
                  WhatsApp — +358 46 610 9064
                </a>
                <a
                  href="tel:+358466109064"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#9945ff] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center group-hover:bg-[#9945ff]/20 transition-colors">
                    <Phone size={14} className="text-[#9945ff]" />
                  </div>
                  +358 46 610 9064
                </a>
                <a
                  href="mailto:yassinfennir@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#00d1ff] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00d1ff]/10 border border-[#00d1ff]/20 flex items-center justify-center group-hover:bg-[#00d1ff]/20 transition-colors">
                    <Mail size={14} className="text-[#00d1ff]" />
                  </div>
                  yassinfennir@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-[#f971ff]/10 border border-[#f971ff]/20 flex items-center justify-center">
                    <MapPin size={14} className="text-[#f971ff]" />
                  </div>
                  Espoo, Finland
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#9945ff]/[0.08] to-[#14f195]/[0.04] border border-[#9945ff]/[0.12] overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9945ff]/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-[#9945ff]" />
                  <h3 className="font-[var(--font-heading)] text-white font-semibold">
                    {t.contact.whatsappChatTitle}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {t.contact.whatsappChatDesc}
                </p>
                <a
                  href="https://wa.me/358466109064?text=Hi%20Yassin%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sol-btn-green group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300"
                >
                  <MessageCircle size={14} className="relative" />
                  <span className="relative">{t.contact.whatsappChatCta}</span>
                </a>
              </div>
            </div>

            {/* Payment info */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white text-xs font-semibold mb-2 uppercase tracking-wider">{t.contact.paymentTitle}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                {t.contact.paymentDesc}
              </p>
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="w-8 h-8 rounded-lg bg-[#14f195]/10 border border-[#14f195]/20 flex items-center justify-center">
                <Clock size={14} className="text-[#14f195]" />
              </div>
              <div>
                <p className="text-white text-xs font-medium">{t.contact.responseTimeTitle}</p>
                <p className="text-slate-500 text-[10px]">{t.contact.responseTimeSub}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
