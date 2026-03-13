"use client";

import {
  CalendarCheck,
  Clock,
  TrendingUp,
  Star,
  ArrowUpRight,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  {
    label: "Buổi phỏng vấn",
    value: "12",
    change: "+3 tháng này",
    icon: CalendarCheck,
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    label: "Giờ luyện tập",
    value: "9.5h",
    change: "+2.5h tháng này",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Điểm trung bình",
    value: "8.2",
    change: "+0.6 so với tháng trước",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Chuyên gia đã gặp",
    value: "5",
    change: "+2 tháng này",
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const upcomingBookings = [
  {
    id: 1,
    interviewer: "Alex Chen",
    role: "Staff Engineer · Tech Global",
    date: "15/03/2026",
    time: "14:00 – 15:00",
    type: "System Design",
    status: "confirmed" as const,
    avatar: "AC",
  },
  {
    id: 2,
    interviewer: "Sarah Jenkins",
    role: "Product Design Lead · Social Connect",
    date: "18/03/2026",
    time: "10:00 – 11:00",
    type: "UX Portfolio Review",
    status: "pending" as const,
    avatar: "SJ",
  },
  {
    id: 3,
    interviewer: "Elena Rodriguez",
    role: "Senior Recruiter · Streaming Plus",
    date: "22/03/2026",
    time: "09:00 – 10:00",
    type: "Behavioral Interview",
    status: "confirmed" as const,
    avatar: "ER",
  },
];

const recentFeedback = [
  {
    id: 1,
    interviewer: "David Miller",
    score: 8.5,
    date: "10/03/2026",
    summary: "Kỹ năng giải quyết vấn đề tốt, cần cải thiện communication skills.",
    tags: ["Problem Solving", "Communication"],
  },
  {
    id: 2,
    interviewer: "Alex Chen",
    score: 7.8,
    date: "05/03/2026",
    summary: "System design approach cần structured hơn. Đã có progress rõ rệt.",
    tags: ["System Design", "Architecture"],
  },
];

const statusConfig = {
  confirmed: { label: "Đã xác nhận", variant: "default" as const },
  pending: { label: "Chờ xác nhận", variant: "secondary" as const },
};

export default function DashboardOverview() {
  return (
    <div className="px-4 md:px-8 py-6 md:py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          Chào buổi chiều, <span className="text-primary-600">hyn</span> 👋
        </h1>
        <p className="text-slate-500 mt-1 text-sm md:text-base">
          Đây là tổng quan hoạt động phỏng vấn của bạn.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.bg} ${stat.color} p-2.5 rounded-xl`}>
                  <stat.icon className="size-5" />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </p>
              <p className="text-xs text-primary-600 font-semibold mt-2">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Bookings */}
        <div className="lg:col-span-2">
          <Card className="border-slate-100 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-900">
                  Lịch phỏng vấn sắp tới
                </CardTitle>
                <Link href="/bookings">
                  <Button variant="ghost" size="sm" className="text-primary-600 text-xs">
                    Xem tất cả
                    <ArrowUpRight className="size-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="px-4 md:px-6 pb-4">
              <div className="flex flex-col gap-3">
                {upcomingBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center gap-4 p-3 md:p-4 rounded-xl border border-slate-100 hover:border-primary-100 hover:bg-primary-25 transition-all"
                  >
                    <div className="size-10 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700 flex-shrink-0">
                      {booking.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {booking.interviewer}
                      </p>
                      <p className="text-xs text-slate-400 truncate">
                        {booking.role}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 hidden sm:block">
                      <p className="text-sm font-semibold text-slate-700">
                        {booking.date}
                      </p>
                      <p className="text-xs text-slate-400">{booking.time}</p>
                    </div>
                    <Badge variant={statusConfig[booking.status].variant} className="flex-shrink-0 text-xs">
                      {statusConfig[booking.status].label}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Feedback */}
        <div className="lg:col-span-1">
          <Card className="border-slate-100 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-900">
                  Phản hồi gần đây
                </CardTitle>
                <Link href="/feedback">
                  <Button variant="ghost" size="sm" className="text-primary-600 text-xs">
                    Xem tất cả
                    <ArrowUpRight className="size-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="px-4 md:px-6 pb-4">
              <div className="flex flex-col gap-4">
                {recentFeedback.map((fb) => (
                  <div
                    key={fb.id}
                    className="p-4 rounded-xl border border-slate-100 hover:border-primary-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {fb.interviewer}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="size-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-slate-900">
                          {fb.score}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {fb.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5 flex-wrap">
                        {fb.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] px-2 py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 flex-shrink-0">
                        {fb.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
