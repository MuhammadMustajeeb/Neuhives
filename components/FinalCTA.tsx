import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative px-6 py-32 md:py-40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-blue-400 text-sm">Ready to scale?</span>
        </div>

        <h2 className="text-white mb-6">
          Let's design your growth system.
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          A 30-minute conversation to explore fit, diagnose bottlenecks, and outline a growth system for your AI SaaS.
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-600/40 border-0 text-lg px-8 py-6 h-auto"
        >
          <Mail className="mr-2 h-6 w-6" />
          Book Strategy Call
        </Button>

        <p className="text-slate-500 text-sm mt-8">
          No sales pressure. Just strategic clarity.
        </p>
      </div>
    </section>
  );
}