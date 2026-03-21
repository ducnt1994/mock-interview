"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import InterviewerFilter, { FilterState } from "./interviewer-filter";
import InterviewerCard, { Interviewer } from "./interviewer-card";

const DEFAULT_FILTER: FilterState = {
  industry: "Tất cả",
  minRating: 0,
  availableOnly: false,
};

interface Props {
  interviewers: Interviewer[];
}

export function InterviewerListClient({ interviewers }: Props) {
  const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return interviewers.filter((e) => {
      if (filter.minRating > 0 && e.ratingAvg < filter.minRating) return false;
      if (
        search &&
        !e.fullName?.toLowerCase().includes(search.toLowerCase()) &&
        !e.jobTitle?.toLowerCase().includes(search.toLowerCase()) &&
        !e.company?.toLowerCase().includes(search.toLowerCase()) &&
        !e.specialties.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      ) {
        return false;
      }
      return true;
    });
  }, [interviewers, filter, search]);

  return (
    <div className="bg-neutral-landing min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 xl:px-0 py-8 md:py-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-1">
            Tìm người phỏng vấn <span className="text-primary-500">phù hợp nhất</span> đối với bạn
          </h2>

          <div className="mt-6 relative max-w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm theo tên, vị trí, kỹ năng..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 md:py-10">
        <div className="flex items-center justify-end mb-4 lg:hidden">
          <p className="text-sm text-slate-500 font-medium">
            <span className="font-bold text-slate-900">{filtered.length}</span> chuyên gia
          </p>
        </div>

        <div className="flex gap-6 lg:gap-8 items-start flex-col lg:flex-row">
          <InterviewerFilter value={filter} onChange={setFilter} />

          <div className="flex-1 min-w-0 w-full">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500 font-medium">
                <span className="font-bold text-slate-900">{filtered.length}</span> chuyên gia
              </p>
            </div>

            {interviewers.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <p className="text-4xl mb-3">🔌</p>
                <p className="font-bold text-slate-600">Không thể tải danh sách</p>
                <p className="text-sm mt-1">Vui lòng thử lại sau</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <p className="text-4xl mb-3">🔍</p>
                <p className="font-bold text-slate-600">Không tìm thấy chuyên gia phù hợp</p>
                <p className="text-sm mt-1">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((expert) => (
                  <InterviewerCard key={expert.id} expert={expert} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
