import { TrendingDown } from "lucide-react";

export function Problem() {
  const pains = [
    "Prospects are overloaded with generic AI pitches.",
    "Reply rates decline as messaging becomes commoditized.",
    "SDR hiring and training is slow, inconsistent, and expensive.",
    "Founders lose months building outbound systems that never scale."
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <TrendingDown className="h-6 w-6 text-red-400" />
          </div>
          <h2 className="text-white text-center md:text-left">
            AI SaaS is booming — but outbound has never been harder.
          </h2>
        </div>

        <div className="space-y-5 mb-12">
          {pains.map((pain, index) => (
            <div key={index} className="flex items-start gap-4 group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-red-500/30 hover:bg-slate-900/80 transition-all duration-300">
              <div className="flex-shrink-0 w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-red-500/20 transition-colors">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
              </div>
              <p className="text-slate-300 text-lg">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
          <p className="text-slate-300 text-lg italic">
            Scaling distribution is now harder than building the product.
          </p>
        </div>
      </div>
    </section>
  );
}