"use client";
import { RefreshCw, Home } from "lucide-react";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#08080f]">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center mx-auto mb-6">
          <RefreshCw size={28} className="text-[#ff6b00]" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Something went wrong</h1>
        <p className="text-slate-400 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="sol-btn inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-[15px]"
          >
            <RefreshCw size={14} />
            Try again
          </button>
          <a
            href="/"
            className="sol-btn-ghost inline-flex items-center gap-2 px-6 py-3 text-[15px]"
          >
            <Home size={14} />
            Home
          </a>
        </div>
      </div>
    </main>
  );
}
