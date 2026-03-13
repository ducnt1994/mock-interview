"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Clock,
  Video,
  MoreHorizontal,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type BookingStatus = "confirmed" | "pending" | "completed" | "cancelled";

interface Booking {
  id: number;
  interviewer: string;
  role: string;
  avatar: string;
  date: string;
  time: string;
  type: string;
  status: BookingStatus;
  price: number;
  meetLink?: string;
}

const mockBookings: Booking[] = [
  {
    id: 1,
    interviewer: "Alex Chen",
    role: "Staff Engineer · Tech Global",
    avatar: "AC",
    date: "15/03/2026",
    time: "14:00 – 15:00",
    type: "System Design",
    status: "confirmed",
    price: 800000,
    meetLink: "https://meet.google.com/abc",
  },
  {
    id: 2,
    interviewer: "Sarah Jenkins",
    role: "Product Design Lead · Social Connect",
    avatar: "SJ",
    date: "18/03/2026",
    time: "10:00 – 11:00",
    type: "UX Portfolio Review",
    status: "pending",
    price: 750000,
  },
  {
    id: 3,
    interviewer: "Elena Rodriguez",
    role: "Senior Recruiter · Streaming Plus",
    avatar: "ER",
    date: "22/03/2026",
    time: "09:00 – 10:00",
    type: "Behavioral Interview",
    status: "confirmed",
    price: 650000,
    meetLink: "https://meet.google.com/def",
  },
  {
    id: 4,
    interviewer: "David Miller",
    role: "Director of Product · Retail Giant",
    avatar: "DM",
    date: "10/03/2026",
    time: "15:00 – 16:00",
    type: "Product Strategy",
    status: "completed",
    price: 1200000,
  },
  {
    id: 5,
    interviewer: "Minh Trần",
    role: "Senior Data Scientist · FinTech Corp",
    avatar: "MT",
    date: "08/03/2026",
    time: "11:00 – 12:00",
    type: "Machine Learning",
    status: "completed",
    price: 900000,
  },
  {
    id: 6,
    interviewer: "Linh Nguyễn",
    role: "Head of Marketing · Growth Studio",
    avatar: "LN",
    date: "01/03/2026",
    time: "14:00 – 15:00",
    type: "Marketing Strategy",
    status: "cancelled",
    price: 700000,
  },
];

const statusConfig: Record<
  BookingStatus,
  { label: string; className: string }
> = {
  confirmed: {
    label: "Đã xác nhận",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  pending: {
    label: "Chờ xác nhận",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  completed: {
    label: "Hoàn thành",
    className: "bg-slate-50 text-slate-600 border-slate-200",
  },
  cancelled: {
    label: "Đã hủy",
    className: "bg-red-50 text-red-600 border-red-200",
  },
};

const filterTabs: { label: string; value: BookingStatus | "all" }[] = [
  { label: "Tất cả", value: "all" },
  { label: "Đã xác nhận", value: "confirmed" },
  { label: "Chờ xác nhận", value: "pending" },
  { label: "Hoàn thành", value: "completed" },
  { label: "Đã hủy", value: "cancelled" },
];

export default function BookingsList() {
  const [activeFilter, setActiveFilter] = useState<BookingStatus | "all">("all");

  const filtered =
    activeFilter === "all"
      ? mockBookings
      : mockBookings.filter((b) => b.status === activeFilter);

  return (
    <div className="px-4 md:px-8 py-6 md:py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Lịch phỏng vấn</h1>
          <p className="text-sm text-slate-500 mt-1">
            Quản lý và theo dõi các buổi phỏng vấn đã đặt lịch.
          </p>
        </div>
        <Button className="font-semibold rounded-xl self-start">
          <CalendarCheck className="size-4 mr-1.5" />
          Đặt lịch mới
        </Button>
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

      {/* Bookings List */}
      <Card className="border-slate-100 shadow-sm">
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-semibold text-slate-500">
            {filtered.length} lịch phỏng vấn
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-3xl mb-3">📭</p>
              <p className="font-semibold text-slate-700">
                Không có lịch phỏng vấn nào
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Thử thay đổi bộ lọc hoặc đặt lịch mới.
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              {filtered.map((booking, idx) => (
                <div key={booking.id}>
                  <div className="flex items-center gap-4 py-4">
                    {/* Avatar */}
                    <div className="size-11 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700 flex-shrink-0">
                      {booking.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {booking.interviewer}
                        </p>
                        <span
                          className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-semibold border ${statusConfig[booking.status].className}`}
                        >
                          {statusConfig[booking.status].label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">
                        {booking.role}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <CalendarCheck className="size-3" />
                          {booking.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {booking.time}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {booking.meetLink && booking.status === "confirmed" && (
                        <Button
                          size="sm"
                          className="rounded-lg text-xs font-semibold hidden sm:flex"
                        >
                          <Video className="size-3.5 mr-1" />
                          Tham gia
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="size-8 p-0">
                        <MoreHorizontal className="size-4 text-slate-400" />
                      </Button>
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
