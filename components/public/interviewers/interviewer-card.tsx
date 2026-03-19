import { Star, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface Interviewer {
  id: string;          // profileId (uuid)
  userId: string;      // dùng cho link detail
  fullName: string | null;
  avatarUrl: string | null;
  company: string | null;
  jobTitle: string | null;
  yearsExp: number;
  ratingAvg: number;
  totalReviews: number;
  minPrice: number | null;
  specialties: string[];
}

function Avatar({ src, name }: { src: string | null; name: string }) {
  const initials = name.split(" ").map((w) => w[0]).slice(-2).join("").toUpperCase();
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-100">
      <span className="text-4xl font-black text-primary-600">{initials}</span>
    </div>
  );
}

export default function InterviewerCard({ expert }: { expert: Interviewer }) {
  const name = expert.fullName ?? "Interviewer";
  return (
    <Link
      href={`/interviewers/${expert.userId}`}
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-[shadow,transform] duration-300 flex flex-col"
    >
      {/* Avatar area */}
      <div className="relative h-44 md:h-52 overflow-hidden bg-slate-100">
        <Avatar src={expert.avatarUrl} name={name} />
        {expert.specialties[0] && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm bg-primary-500/90 text-white">
              {expert.specialties[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bold text-slate-900 text-base md:text-lg leading-tight">{name}</h3>
          <p className="text-xs md:text-sm text-primary-500 font-semibold mt-0.5">{expert.jobTitle}</p>
          <p className="text-xs text-slate-400 font-medium">{expert.company}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {Number(expert.ratingAvg).toFixed(1)}
            <span className="text-slate-400 font-normal text-xs">({expert.totalReviews})</span>
          </span>
          {expert.yearsExp > 0 && (
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Briefcase className="w-3.5 h-3.5" /> {expert.yearsExp}y
            </span>
          )}
        </div>

        {/* Specialties */}
        {expert.specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {expert.specialties.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-primary-50 text-primary-500 text-[10px] font-bold uppercase rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <div>
            {expert.minPrice !== null ? (
              <>
                <p className="text-lg font-black text-slate-900">{expert.minPrice.toLocaleString("vi-VN")}đ</p>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> / buổi
                </p>
              </>
            ) : (
              <p className="text-sm text-slate-400">Liên hệ</p>
            )}
          </div>
          <Button size="sm" className="font-bold rounded-xl pointer-events-none">
            Xem hồ sơ
          </Button>
        </div>
      </div>
    </Link>
  );
}
