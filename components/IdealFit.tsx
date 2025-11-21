import { Check } from "lucide-react";

export function IdealFit() {
  const criteria = [
    "Pre-seed → Series B AI SaaS",
    "ACV $6,000–$120,000+",
    "Selling to technical or operations decision-makers",
    "Seeking predictable outbound to scale revenue"
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 bg-slate-950 border-y border-slate-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-white text-center mb-4">
          Designed for AI SaaS building the future.
        </h2>
        <p className="text-slate-400 text-center text-lg mb-16">
          We partner with ambitious teams ready to scale distribution systematically.
        </p>

        <div className="relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm rounded-3xl" />
          
          <div className="relative">
            <p className="text-slate-300 mb-10 text-xl">
              Best fit if you are:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <Check className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {criterion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}