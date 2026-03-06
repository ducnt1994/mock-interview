import {Globe, Search, CheckCircle2} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section-padding overflow-hidden pt-24 pb-20 bg-neutral-landing">
      <div className="max-w-7xl mx-auto flex gap-16">
        <div className="flex flex-col gap-8 flex-1">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Elevate Your Career</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Master Your Next Big Interview with <span className="text-primary">Pros</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Connect with industry experts for realistic mock interviews and actionable feedback to land your dream job at top-tier global companies.
            </p>
          </div>

          <div className="p-2 bg-white rounded-2xl border border-slate-100">
            <form className="flex flex-col md:flex-row gap-2 items-center">
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
              <Button size={'lg'}>
                <Search className="w-5 h-5" />
                <span className={'font-bold'}>Tìm kiếm</span>
              </Button>
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
        </div>

        <div className={'relative'}>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden bg-primary-500/20 border border-primary-500/30"
            id="right-side"
          >
            <div className="relative m-4 w-[536px] h-[536px]">
              <Image
                src="/images/landing-page/hero.webp"
                alt="Hero Image"
                fill
                className="object-cover rounded-2xl"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/55 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Live Session
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Feedback: Strong technical communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero