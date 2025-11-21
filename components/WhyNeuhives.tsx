export function WhyNeuhives() {
  const reasons = [
    "Built on first principles of distribution and market psychology",
    "Blends AI automation with human strategic clarity",
    "Designed to scale, adapt, and learn over time",
    "Guided by a simple belief: systems grow companies, not hacks."
  ];

  return (
    <section id="about" className="relative px-6 py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-white text-center mb-6">
          Not an agency. A systemic growth partner.
        </h2>
        <p className="text-slate-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Every decision grounded in strategy. Every tactic engineered to compound.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative group bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:from-slate-900 hover:to-slate-800/80 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}