"use client";

import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { Review } from "./types";

const REVIEWS_PER_PAGE = 3;

interface Props {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export default function ReviewsSection({ reviews, rating, reviewCount }: Props) {
  const [shown, setShown] = useState(REVIEWS_PER_PAGE);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base md:text-lg font-black text-slate-900">
          Đánh giá từ học viên
        </h2>
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-bold text-slate-900">{rating.toFixed(1)}</span>
          <span className="text-xs text-slate-400">({reviewCount})</span>
        </div>
      </div>

      {/* Review list */}
      <div className="space-y-4">
        {reviews.slice(0, shown).map((review) => (
          <div
            key={review.id}
            className="w-full border border-slate-100 rounded-2xl p-4 md:p-5 space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-600 text-xs font-black flex items-center justify-center shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200 fill-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Load more */}
      {shown < reviews.length && (
        <button
          onClick={() => setShown((n) => n + REVIEWS_PER_PAGE)}
          className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:border-primary-500 hover:text-primary-500 transition-all"
        >
          Xem thêm đánh giá <ChevronDown className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
