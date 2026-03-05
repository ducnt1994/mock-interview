import {Globe, Search, CheckCircle2} from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const Hero = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="flex flex-col gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Elevate Your Career</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Master Your Next Big Interview with <span className="text-primary">Pros</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Connect with industry experts for realistic mock interviews and actionable feedback to land your dream job at top-tier global companies.
            </p>
          </div>

          <div className="p-2 bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100">
            <form className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
                <Globe className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ngành nghề"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Vị trí"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium"
                />
              </div>
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Tìm kiếm
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-${i*100 + 100}`} />
              ))}
            </div>
            <p>Joined by <span className="font-bold text-slate-900">10,000+</span> candidates this month</p>
          </div>
        </FadeIn>

        <FadeIn className={'relative'}>
          <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-3xl" />
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/50">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnA7SNzehpfBuAJZW7weO310jVLXtr5nxbDfyk9EVdnB_OFo0jfzYZdUSqsyyU5Mjz2jZVkaPf_COEYjcCDdBtFjxnHF5jsZP4-6qO7pCZpqI8X-lcBKBuQcr2Y9qTDLoOV0qSWTvzB-UvQmxo0yDdzNuuAFJmVTT8hWAAwJPVsdTwDCfxDh6Yqd0Kd8VkgNeDACfPs-LUaNKjLWf11HU7Gz0PutIna-ixFogmz2nsu4WBPcnoCjycE0Z68RbXASxAmY559IaLN_Y"
              alt="Professional Interview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Session</p>
                  <p className="text-sm font-bold text-slate-900">Feedback: Strong technical communication</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero