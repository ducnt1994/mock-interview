import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Interviewer {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  price: number;
  available: boolean;
  img: string;
  industry: string;
}

export default function InterviewerCard({ expert }: { expert: Interviewer }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-[shadow,transform] duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-44 md:h-52 overflow-hidden">
        <img
          src={expert.img}
          alt={expert.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Availability badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm ${expert.available
              ? "bg-green-500/90 text-white"
              : "bg-slate-500/80 text-white"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${expert.available ? "bg-white animate-pulse" : "bg-slate-300"
                }`}
            />
            {expert.available ? "Sẵn sàng" : "Bận"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bold text-slate-900 text-base md:text-lg leading-tight">
            {expert.name}
          </h3>
          <p className="text-xs md:text-sm text-primary-500 font-semibold mt-0.5">
            {expert.role}
          </p>
          <p className="text-xs text-slate-400 font-medium">{expert.company}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold text-slate-900">
            {expert.rating.toFixed(1)}
          </span>
          <span className="text-xs text-slate-400">
            ({expert.reviewCount} đánh giá)
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {expert.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary-50 text-primary-500 text-[10px] font-bold uppercase rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <div>
            <p className="text-lg font-black text-slate-900">
              {expert.price.toLocaleString("vi-VN")}đ
            </p>
            <p className="text-[10px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> / 60 phút
            </p>
          </div>
          <Button
            size="sm"
            disabled={!expert.available}
            className="font-bold rounded-xl"
          >
            {expert.available ? "Đặt lịch" : "Không khả dụng"}
          </Button>
        </div>
      </div>
    </div>
  );
}
