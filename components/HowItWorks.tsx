import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "1",
      name: "Alignment",
      description: "ICP refining, product narrative, and value architecture."
    },
    {
      step: "2",
      name: "Data Engine",
      description: "Source ideal accounts using AI agents + verified buyer signals."
    },
    {
      step: "3",
      name: "Messaging",
      description: "Adaptive sequences tested across channels and roles."
    },
    {
      step: "4",
      name: "Outbound Ops",
      description: "Campaign execution, deliverability, tracking, intent routing."
    },
    {
      step: "5",
      name: "Demo Pipeline",
      description: "Qualified meetings delivered to your calendar."
    }
  ];

  return (
    <section id="how-it-works" className="relative px-6 py-24 md:py-32 bg-slate-950 border-y border-slate-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            A system designed for compound growth.
          </h2>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.step}>
              <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:from-slate-900 hover:to-slate-800/80 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:scale-110 transition-all duration-300 font-mono">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {step.name}
                    </h3>
                    <p className="text-slate-400 text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}