import { Sparkles, TrendingUp, DollarSign, Users } from "lucide-react";

export function Outcomes() {
  const outcomes = [
    {
      icon: TrendingUp,
      text: "3–5× pipeline growth within 90 days",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-400"
    },
    {
      icon: Users,
      text: "20–40 qualified demos monthly",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-400"
    },
    {
      icon: DollarSign,
      text: "Lower CAC and shorter sales cycles",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Sparkles,
      text: "No SDR hiring, training, or management overhead",
      gradient: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <section id="outcomes" className="relative px-6 py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-white mb-4">
          What AI SaaS founders achieve with Neuhives
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
          Results that compound over time, not one-time wins.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={index}
                className={`relative group bg-gradient-to-br ${outcome.gradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-current/30 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm rounded-2xl" />
                <div className="relative flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-current/10 border border-current/20 ${outcome.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <p className="text-slate-200 text-left text-lg flex-1">
                    {outcome.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}