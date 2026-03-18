"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, ShieldCheck, Crown, Sparkles, Zap, Clock, Headphones, RefreshCw, Rocket, CreditCard, Lock, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/*
  STRIPE PAYMENT LINKS — Replace these placeholder URLs with real Stripe Payment Links
  after creating products in Stripe Dashboard → Payment Links
*/
const STRIPE_LINKS = {
  starter: "https://buy.stripe.com/3cI00i66753k40VcZCcQU03",
  business: "https://buy.stripe.com/5kQcN49ij7bs54Z1gUcQU02",
  premium: "https://buy.stripe.com/5kQ8wO5230N47d7bVycQU04",
};

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "399",
      cents: ",00",
      originalPrice: "599",
      period: "one-time",
      maintenance: t.pricing.starterMaintenance,
      desc: t.pricing.starterDesc,
      features: [
        t.pricing.starterF1,
        t.pricing.starterF2,
        t.pricing.starterF3,
        t.pricing.starterF4,
        t.pricing.starterF5,
        t.pricing.starterF6,
        t.pricing.starterF7,
        t.pricing.starterF8,
        t.pricing.starterF9,
        t.pricing.starterF10,
        t.pricing.starterF11,
        t.pricing.starterF12,
      ],
      cta: t.pricing.starterCta,
      stripeUrl: STRIPE_LINKS.starter,
      popular: false,
      gradient: "from-slate-500/5 to-slate-600/5",
      borderHover: "hover:border-slate-400/20",
      supportYears: 1,
      paidCount: 0,
    },
    {
      name: "Business",
      icon: Star,
      price: "859",
      cents: ",00",
      originalPrice: "1.299",
      period: "one-time",
      maintenance: t.pricing.businessMaintenance,
      desc: t.pricing.businessDesc,
      features: [
        t.pricing.businessF1,
        t.pricing.businessF2,
        t.pricing.businessF3,
        t.pricing.businessF4,
        t.pricing.businessF5,
        t.pricing.businessF6,
        t.pricing.businessF7,
        t.pricing.businessF8,
        t.pricing.businessF9,
        t.pricing.businessF10,
        t.pricing.businessF11,
        t.pricing.businessF12,
        t.pricing.businessF13,
        t.pricing.businessF14,
      ],
      cta: t.pricing.businessCta,
      stripeUrl: STRIPE_LINKS.business,
      popular: true,
      gradient: "from-[#9945ff]/[0.12] to-[#9945ff]/[0.04]",
      borderHover: "",
      supportYears: 2,
      paidCount: 0,
    },
    {
      name: "Premium",
      icon: Crown,
      price: "1.499",
      cents: ",00",
      originalPrice: "2.499",
      period: "one-time",
      maintenance: t.pricing.premiumMaintenance,
      desc: t.pricing.premiumDesc,
      features: [
        t.pricing.premiumF1,
        t.pricing.premiumF2,
        t.pricing.premiumF3,
        t.pricing.premiumF4,
        t.pricing.premiumF5,
        t.pricing.premiumF6,
        t.pricing.premiumF7,
        t.pricing.premiumF8,
        t.pricing.premiumF9,
        t.pricing.premiumF10,
        t.pricing.premiumF11,
        t.pricing.premiumF12,
        t.pricing.premiumF13,
        t.pricing.premiumF14,
        t.pricing.premiumF15,
      ],
      cta: t.pricing.premiumCta,
      stripeUrl: STRIPE_LINKS.premium,
      popular: false,
      gradient: "from-violet-500/5 to-purple-600/5",
      borderHover: "hover:border-violet-400/20",
      supportYears: 3,
      paidCount: 0,
    },
  ];

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#00d1ff] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00d1ff]/60" />
            {t.pricing.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00d1ff]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.pricing.title1} <span className="gradient-text">{t.pricing.titleHighlight}</span> {t.pricing.title2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-8 rounded-3xl transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#9945ff]/[0.12] to-[#9945ff]/[0.04] border-2 border-[#9945ff]/25 scale-[1.03] shadow-[0_0_40px_rgba(153,69,255,0.1)]"
                  : `bg-gradient-to-b ${plan.gradient} border border-white/[0.06] ${plan.borderHover}`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-5 py-1.5 bg-gradient-to-r from-[#9945ff] to-[#7c3aed] text-white text-xs font-bold rounded-full shadow-lg shadow-[#9945ff]/40 border border-white/10">
                  <Star size={10} fill="white" />
                  {t.pricing.recommended}
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    plan.popular ? "bg-[#9945ff]/20 border border-[#9945ff]/30" : "bg-white/[0.04] border border-white/[0.08]"
                  }`}>
                    <plan.icon size={16} className={plan.popular ? "text-[#9945ff]" : "text-slate-400"} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-1.5">
                  <span className="font-[var(--font-heading)] text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="font-[var(--font-heading)] text-lg font-bold text-white">
                    {plan.cents}
                  </span>
                  <span className="text-slate-500 text-lg ml-1">EUR</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-slate-600 text-sm line-through">
                    {plan.originalPrice},00 EUR
                  </span>
                  <span className="text-[11px] text-[#14f195] font-semibold px-2.5 py-0.5 bg-[#14f195]/10 border border-[#14f195]/20 rounded-full">
                    SAVE {parseInt(plan.originalPrice.replace(".", "")) - parseInt(plan.price.replace(".", ""))}€
                  </span>
                </div>

                {/* PAID badge */}
                {plan.paidCount > 0 && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14f195]/10 border border-[#14f195]/20 mb-3">
                  <BadgeCheck size={12} className="text-[#14f195]" />
                  <span className="text-[11px] font-bold text-[#14f195] tracking-wide">
                    PAID
                  </span>
                  <span className="text-[10px] text-[#14f195]/70">
                    — {plan.paidCount} {t.pricing.customersBought}
                  </span>
                </div>
                )}

                {/* Maintenance badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  plan.popular
                    ? "bg-[#9945ff]/15 text-[#9945ff] border border-[#9945ff]/20"
                    : plan.supportYears === 3
                    ? "bg-[#14f195]/10 text-[#14f195] border border-[#14f195]/20"
                    : "bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                }`}>
                  <Clock size={11} />
                  {plan.supportYears} {t.pricing.yearSupport}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-[#9945ff]/15" : "bg-white/[0.04]"
                    }`}>
                      <Check
                        size={11}
                        className={`flex-shrink-0 ${
                          plan.popular ? "text-[#9945ff]" : "text-slate-500"
                        }`}
                      />
                    </div>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.stripeUrl}
                target={plan.stripeUrl.startsWith("https://") ? "_blank" : undefined}
                rel={plan.stripeUrl.startsWith("https://") ? "noopener noreferrer" : undefined}
                className={`group w-full inline-flex items-center justify-center gap-2 py-3.5 font-medium text-sm transition-all duration-300 ${
                  plan.popular
                    ? "sol-btn text-white"
                    : "sol-btn-ghost text-white"
                }`}
              >
                <CreditCard size={14} className="relative z-[2]" />
                <span className="relative z-[2]">{plan.cta}</span>
                <ArrowRight size={14} className="relative z-[2] group-hover:translate-x-0.5 transition-transform" />
              </a>
              {/* Secure badge */}
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-slate-500">
                <Lock size={9} />
                {t.pricing.securePayment}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's included in maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h3 className="font-[var(--font-heading)] text-xl font-bold text-white text-center mb-8">
            {t.pricing.maintenanceTitle1} <span className="gradient-text">{t.pricing.maintenanceTitleHighlight}</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: RefreshCw, title: t.pricing.maint1Title, desc: t.pricing.maint1Desc, color: "#9945ff" },
              { icon: Headphones, title: t.pricing.maint2Title, desc: t.pricing.maint2Desc, color: "#00d1ff" },
              { icon: Rocket, title: t.pricing.maint3Title, desc: t.pricing.maint3Desc, color: "#14f195" },
              { icon: ShieldCheck, title: t.pricing.maint4Title, desc: t.pricing.maint4Desc, color: "#f971ff" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="sol-card p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
              >
                <div className="sol-icon w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ color: item.color }}>
                  <item.icon size={18} />
                </div>
                <h4 className="text-white text-sm font-semibold mb-1.5">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12 mb-6"
        >
          <p className="text-slate-500 text-sm">
            {t.pricing.paymentText1} <span className="text-white font-medium">{t.pricing.paymentStripe}</span>, <span className="text-white font-medium">{t.pricing.paymentTransfer}</span> tai <span className="text-white font-medium">{t.pricing.paymentInvoice}</span> {t.pricing.paymentText2}
          </p>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-10 border-t border-white/[0.04]"
        >
          {[
            t.pricing.trust1,
            t.pricing.trust2,
            t.pricing.trust3,
            t.pricing.trust4,
            t.pricing.trust5,
          ].map((trustItem) => (
            <div key={trustItem} className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#14f195]" />
              <span className="text-xs text-slate-400 font-medium">{trustItem}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
