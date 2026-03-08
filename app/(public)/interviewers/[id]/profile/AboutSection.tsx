import { Expert } from "./types";

export default function AboutSection({ expert }: { expert: Expert }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6 space-y-3">
      <h2 className="text-base md:text-lg font-black text-slate-900">
        Giới thiệu
      </h2>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        {expert.bio}
      </p>
    </div>
  );
}
