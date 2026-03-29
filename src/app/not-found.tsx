"use client";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#08080f]">
      <div className="text-center max-w-lg">
        <div className="text-[8rem] font-[var(--font-heading)] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff8c00] to-[#ff6b00]/40 leading-none">
          404
        </div>
        <h1 className="text-2xl font-bold text-white mt-4 mb-3">Page not found</h1>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="sol-btn inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-semibold text-[15px] transition-all duration-300"
        >
          <Home size={16} />
          <span>Back to Home</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </main>
  );
}
