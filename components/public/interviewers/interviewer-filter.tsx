"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

const INDUSTRIES = [
  "Tất cả",
  "Kỹ thuật phần mềm",
  "Thiết kế UX/UI",
  "Quản lý sản phẩm",
  "Phân tích dữ liệu",
  "Marketing",
  "Tài chính",
];

const STAR_OPTIONS = [
  { label: "Tất cả", value: 0 },
  { label: "4.5 trở lên", value: 4.5 },
  { label: "4.8 trở lên", value: 4.8 },
  { label: "5 sao", value: 5 },
];

export interface FilterState {
  industry: string;
  minRating: number;
  availableOnly: boolean;
}

interface Props {
  value: FilterState;
  onChange: (f: FilterState) => void;
}

export default function InterviewerFilter({ value, onChange }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasActive =
    value.industry !== "Tất cả" || value.minRating > 0 || value.availableOnly;

  const reset = () =>
    onChange({ industry: "Tất cả", minRating: 0, availableOnly: false });

  const panel = (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary-500" />
          Bộ lọc
        </span>
        {hasActive && (
          <button
            onClick={reset}
            className="text-xs text-primary-500 font-semibold hover:underline"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      {/* Industry */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Ngành nghề
        </p>
        <div className="flex flex-col gap-1">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind}
              onClick={() => onChange({ ...value, industry: ind })}
              className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                value.industry === ind
                  ? "bg-primary-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Đánh giá
        </p>
        <div className="flex flex-col gap-1">
          {STAR_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ ...value, minRating: opt.value })}
              className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                value.minRating === opt.value
                  ? "bg-primary-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Available */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trạng thái
        </p>
        <label
          className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 transition-all"
          onClick={() => onChange({ ...value, availableOnly: !value.availableOnly })}
        >
          <div
            className={`w-10 h-6 rounded-full relative transition-colors duration-200 shrink-0 ${
              value.availableOnly ? "bg-primary-500" : "bg-slate-200"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                value.availableOnly ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>
          <span className="text-sm font-medium text-slate-700">
            Chỉ hiển thị đang nhận lịch
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button only */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
            hasActive
              ? "border-primary-500 text-primary-500 bg-primary-50"
              : "border-slate-200 text-slate-600 bg-white"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Bộ lọc
          {hasActive && (
            <span className="w-2 h-2 rounded-full bg-primary-500 ml-1" />
          )}
        </button>

        {/* Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="flex-1 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="w-72 bg-white h-full overflow-y-auto p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-slate-900">Bộ lọc</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {panel}
            </div>
          </div>
        )}
      </div>

      {/* Desktop: render panel directly (page wraps this in hidden lg:block) */}
      <div className="hidden lg:block w-56 xl:w-64 shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          {panel}
        </div>
      </div>
    </>
  );
}
