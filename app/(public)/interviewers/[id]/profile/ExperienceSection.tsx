import { Briefcase, GraduationCap } from "lucide-react";
import { Expert } from "./types";

export default function ExperienceSection({ expert }: { expert: Expert }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience */}
        <div className="space-y-4">
          <h2 className="text-base md:text-lg font-black text-slate-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary-500" />
            Kinh nghiệm
          </h2>
          <div className="relative pl-4 border-l-2 border-slate-100 space-y-5">
            {expert.experience.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-primary-500 border-2 border-white shadow" />
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary-50 text-primary-500 text-[10px] font-black flex items-center justify-center">
                    {exp.logo}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{exp.company}</p>
                    <p className="text-xs text-primary-500 font-semibold">{exp.role}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h2 className="text-base md:text-lg font-black text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary-500" />
            Học vấn & Chứng chỉ
          </h2>
          <div className="relative pl-4 border-l-2 border-slate-100 space-y-5">
            {expert.education.map((edu, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-slate-300 border-2 border-white shadow" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-slate-900">{edu.school}</p>
                    {edu.isCert && (
                      <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-bold rounded uppercase">
                        Cert
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{edu.degree}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
