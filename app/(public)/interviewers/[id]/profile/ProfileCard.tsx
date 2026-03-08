import { Star, Briefcase, BadgeCheck } from "lucide-react";
import { Expert } from "./types";

export default function ProfileCard({ expert }: { expert: Expert }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6">
      <div className="flex gap-4 md:gap-6 items-start">
        {/* Avatar */}
        <div className="relative shrink-0">
          <img
            src={expert.img}
            alt={expert.name}
            referrerPolicy="no-referrer"
            className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover shadow-md"
          />
          {expert.available && (
            <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl md:text-2xl font-black text-slate-900">
              {expert.name}
            </h1>
            <span className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-200">
              <BadgeCheck className="w-3 h-3" />
              Đã xác nhận
            </span>
          </div>

          <p className="text-sm md:text-base font-semibold text-primary-500">
            {expert.role}
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-medium flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" />
            {expert.company}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(expert.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-slate-200 fill-slate-200"
                }`}
              />
            ))}
            <span className="text-sm font-bold text-slate-900 ml-1">
              {expert.rating.toFixed(1)}
            </span>
            <span className="text-xs text-slate-400">
              ({expert.reviewCount} đánh giá)
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {expert.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-primary-50 text-primary-500 text-[10px] font-bold uppercase rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
