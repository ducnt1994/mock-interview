"use client";

import { useState } from "react";
import {
  Clock,
  Star,
  Play,
  FileText,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type InterviewStatus = "completed" | "no_show" | "in_review";

interface Interview {
  id: number;
  interviewer: string;
  avatar: string;
  date: string;
  duration: string;
  type: string;
  status: InterviewStatus;
  score?: number;
  hasRecording: boolean;
  hasFeedback: boolean;
}

const mockInterviews: Interview[] = [
  {
    id: 1,
    interviewer: "David Miller",
    avatar: "DM",
    date: "10/03/2026",
    duration: "58 phút",
    type: "Product Strategy",
    status: "completed",
    score: 8.5,
    hasRecording: true,
    hasFeedback: true,
  },
  {
    id: 2,
    interviewer: "Alex Chen",
    avatar: "AC",
    date: "05/03/2026",
    duration: "52 phút",
    type: "System Design",
    status: "completed",
    score: 7.8,
    hasRecording: true,
    hasFeedback: true,
  },
  {
    id: 3,
    interviewer: "Sarah Jenkins",
    avatar: "SJ",
    date: "28/02/2026",
    duration: "45 phút",
    type: "Portfolio Review",
    status: "completed",
    score: 9.0,
    hasRecording: false,
    hasFeedback: true,
  },
  {
    id: 4,
    interviewer: "Elena Rodriguez",
    avatar: "ER",
    date: "20/02/2026",
    duration: "0 phút",
    type: "Behavioral Interview",
    status: "no_show",
    hasRecording: false,
    hasFeedback: false,
  },
  {
    id: 5,
    interviewer: "Minh Trần",
    avatar: "MT",
    date: "15/02/2026",
    duration: "60 phút",
    type: "Data Science",
    status: "in_review",
    hasRecording: true,
    hasFeedback: false,
  },
];

const statusConfig: Record<InterviewStatus, { label: string; className: string }> = {
  completed: {
    label: "Hoàn thành",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  no_show: {
    label: "Vắng mặt",
    className: "bg-red-50 text-red-600 border-red-200",
  },
  in_review: {
    label: "Đang đánh giá",
    className: "bg-blue-50 text-blue-600 border-blue-200",
  },
};

const filterTabs: { label: string; value: InterviewStatus | "all" }[] = [
  { label: "Tất cả", value: "all" },
  { label: "Hoàn thành", value: "completed" },
  { label: "Đang đánh giá", value: "in_review" },
  { label: "Vắng mặt", value: "no_show" },
];

export default function InterviewsList() {
  const [activeFilter, setActiveFilter] = useState<InterviewStatus | "all">("all");

  const filtered =
    activeFilter === "all"
      ? mockInterviews
      : mockInterviews.filter((i) => i.status === activeFilter);

  return (
    <div className="px-4 md:px-8 py-6 md:py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Buổi phỏng vấn</h1>
        <p className="text-sm text-slate-500 mt-1">
          Xem lại lịch sử và kết quả các buổi phỏng vấn đã hoàn thành.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
        <Filter className="size-4 text-slate-400 flex-shrink-0" />
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex-shrink-0 ${
              activeFilter === tab.value
                ? "bg-primary-500 text-white shadow-sm"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interviews List */}
      <Card className="border-slate-100 shadow-sm">
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-semibold text-slate-500">
            {filtered.length} buổi phỏng vấn
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-3xl mb-3">📋</p>
              <p className="font-semibold text-slate-700">Chưa có buổi phỏng vấn nào</p>
              <p className="text-sm text-slate-400 mt-1">
                Các buổi phỏng vấn đã hoàn thành sẽ hiển thị ở đây.
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              {filtered.map((interview, idx) => (
                <div key={interview.id}>
                  <div className="flex items-center gap-4 py-4">
                    {/* Avatar */}
                    <div className="size-11 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700 flex-shrink-0">
                      {interview.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {interview.interviewer}
                        </p>
                        <span
                          className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-semibold border ${statusConfig[interview.status].className}`}
                        >
                          {statusConfig[interview.status].label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{interview.type}</p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                        <span>{interview.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {interview.duration}
                        </span>
                        {interview.score && (
                          <span className="flex items-center gap-1 text-amber-600 font-semibold">
                            <Star className="size-3 fill-amber-500 text-amber-500" />
                            {interview.score}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {interview.hasRecording && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg text-xs hidden sm:flex"
                        >
                          <Play className="size-3 mr-1" />
                          Xem lại
                        </Button>
                      )}
                      {interview.hasFeedback && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-lg text-xs hidden sm:flex"
                        >
                          <FileText className="size-3 mr-1" />
                          Phản hồi
                        </Button>
                      )}
                    </div>
                  </div>
                  {idx < filtered.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
