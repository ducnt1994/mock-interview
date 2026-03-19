"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Loader2, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getAccessToken } from "@/lib/auth";

const API = process.env.NEXT_PUBLIC_API_URL;

interface RecommendedInterviewer {
  id: string;
  userId: string;
  fullName: string | null;
  avatarUrl: string | null;
  company: string | null;
  jobTitle: string | null;
  yearsExp: number;
  ratingAvg: number;
  totalReviews: number;
  specialties: string[];
}

export default function RelatedInterviewers() {
  const [interviewers, setInterviewers] = useState<RecommendedInterviewer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) { setLoading(false); return; }
    fetch(`${API}/api/v1/candidate/recommended-interviewers?limit=5`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data: RecommendedInterviewer[]) => setInterviewers(Array.isArray(data) ? data : []))
      .catch(() => setInterviewers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-1">Recommended Interviewers</h3>
      <p className="text-sm text-gray-400 mb-5">Top-rated mentors matching your specialties</p>

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="size-5 animate-spin text-slate-400" />
        </div>
      ) : interviewers.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-10">Chưa có interviewer nào phù hợp</p>
      ) : (
        <div className="space-y-4">
          {interviewers.map((iv) => {
            const initials = (iv.fullName ?? "?")[0].toUpperCase();
            const specialty = iv.specialties[0] ?? null;
            return (
              <div
                key={iv.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors"
              >
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-primary-100 flex items-center justify-center">
                  {iv.avatarUrl ? (
                    <Image src={iv.avatarUrl} alt={iv.fullName ?? "Interviewer"} fill className="object-cover" sizes="48px" />
                  ) : (
                    <span className="text-primary-700 font-bold text-sm">{initials}</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {iv.fullName ?? "Interviewer"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {iv.jobTitle ?? ""}
                    {iv.jobTitle && iv.company ? " · " : ""}
                    {iv.company ?? ""}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {Number(iv.ratingAvg).toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {iv.totalReviews} reviews
                    </span>
                    {iv.yearsExp > 0 && (
                      <span className="flex items-center gap-0.5 text-xs text-gray-400">
                        <Briefcase className="w-3 h-3" />
                        {iv.yearsExp}y exp
                      </span>
                    )}
                    {specialty && (
                      <span className="text-[10px] font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                        {specialty}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="flex-shrink-0 font-bold rounded-lg text-xs"
                  asChild
                >
                  <Link href={`/interviewers/${iv.userId}`}>Book</Link>
                </Button>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-5">
        <Link href="/interviewers" className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">
          View all interviewers →
        </Link>
      </div>
    </div>
  );
}
