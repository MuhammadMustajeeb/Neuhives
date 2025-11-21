import { Button } from "./ui/button";
import { ArrowRight, Zap, Target, Layers } from "lucide-react";

export function EngagementModel() {
  const models = [
    {
      icon: Layers,
      title: "Pipeline-as-a-Service",
      description: "Monthly subscription + performance upside.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-400"
    },
    {
      icon: Target,
      title: "Performance Growth",
      description: "Pay-per-qualified-demo.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Hybrid",
      description: "Base + performance.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32 bg-slate-950 border-y border-slate-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-white text-center mb-4">
          Simple, aligned, outcome-driven.
        </h2>
        <p className="text-slate-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Choose the model that aligns with your growth stage.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div 
                key={index}
                className={`relative group bg-gradient-to-br ${model.gradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-current/30 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm rounded-2xl" />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-current/10 border border-current/20 ${model.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-white mb-4">
                    {model.title}
                  </h3>
                  <p className="text-slate-400 text-lg">
                    {model.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-blue-600/30 border-0"
          >
            Request pricing (private, invite-only)
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}