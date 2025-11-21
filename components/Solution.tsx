import { Brain, Sparkles, Calendar } from "lucide-react";

export function Solution() {
  const pillars = [
    {
      number: "1",
      icon: Brain,
      title: "ICP Intelligence",
      description: "Deep buyer mapping, behavior data, and message positioning that resonates with technical decision-makers.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      borderHover: "hover:border-blue-500/50"
    },
    {
      number: "2",
      icon: Sparkles,
      title: "AI Personalization Engine",
      description: "Multi-channel messaging that adapts to objections, roles, and intent signals.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      borderHover: "hover:border-purple-500/50"
    },
    {
      number: "3",
      icon: Calendar,
      title: "Predictable Demo Pipeline",
      description: "We deliver qualified demos straight to your calendar — so you focus on closing.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
      borderHover: "hover:border-emerald-500/50"
    }
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">
            Outbound, reimagined as an intelligent system.
          </h2>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <p className="text-blue-400 text-xl">
              Pipeline-as-a-Service for AI SaaS.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.number}
                className={`relative group bg-gradient-to-br ${pillar.gradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 ${pillar.borderHover} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${pillar.iconBg} border border-current/20 ${pillar.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-slate-500 text-xl font-mono">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {pillar.description}
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