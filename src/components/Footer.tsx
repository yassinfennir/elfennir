"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.certificates, href: "/certificates" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="El Fennir" width={32} height={32} className="flex-shrink-0 rounded-md" />
              <span className="text-white font-semibold">Yassin El Fennir</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>
            <a
              href="https://wa.me/358466109064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#00d1ff] hover:text-[#14f195] transition-colors"
            >
              WhatsApp — +358 46 610 9064
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">{t.footer.navTitle}</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-[#00d1ff] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="mailto:yassinfennir@gmail.com" className="hover:text-[#00d1ff] transition-colors">
                  yassinfennir@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+358466109064" className="hover:text-[#00d1ff] transition-colors">
                  +358 46 610 9064
                </a>
              </li>
              <li>Zürich, Sveitsi</li>
            </ul>
          </div>
        </div>

        <div className="sol-divider mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Yassin El Fennir. {t.footer.copyright}
          </p>
          <p className="text-slate-700 text-xs">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
