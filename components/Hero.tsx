import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative px-6 pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-white mb-6 tracking-tight">
          A smarter outbound engine for AI SaaS.
        </h1>
        
        <p className="text-slate-300 max-w-3xl mx-auto mb-12 text-lg md:text-xl opacity-90">
          We build AI-driven outbound systems that deliver 20–40 qualified demos/month — without SDRs, ad spend, or unpredictable pipelines.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Strategy Call
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white"
          >
            View How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-slate-400 text-sm">
          Trusted by early-stage and VC-backed AI SaaS teams.
        </p>
      </div>
    </section>
  );
}