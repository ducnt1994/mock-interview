"use client";

import Image from "next/image";
import { Calendar, Clock, MoreVertical, Plus, Video, Trash2, Edit3, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { getAccessToken } from "@/lib/auth";

const API = process.env.NEXT_PUBLIC_API_URL;

interface BookedSlot {
  id: string;
  status: string;
  priceAmount: number;
  currency: string;
  cancelledAt: string | null;
  interviewerUserId: string;
  slot: { startAt: string; endAt: string } | null;
  serviceOffering: { durationMin: number; position: string | null } | null;
  // joined trên server sau khi có seed data đầy đủ
  interviewerName?: string;
  interviewerAvatar?: string;
}

const STATUS_STYLE: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-600",
  confirmed: "bg-blue-50 text-blue-600",
  paid: "bg-purple-50 text-purple-600",
  in_progress: "bg-emerald-50 text-emerald-600",
  completed: "bg-gray-100 text-gray-500",
  cancelled_by_candidate: "bg-red-50 text-red-500",
  cancelled_by_interviewer: "bg-red-50 text-red-500",
  no_show: "bg-orange-50 text-orange-500",
};

const STATUS_LABEL: Record<string, string> = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  paid: "Đã thanh toán",
  in_progress: "Đang diễn ra",
  completed: "Hoàn thành",
  cancelled_by_candidate: "Đã huỷ",
  cancelled_by_interviewer: "Đã huỷ",
  no_show: "Vắng mặt",
};

function formatDateTime(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }),
    time: d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
  };
}

export default function BookedInterviews() {
  const [bookings, setBookings] = useState<BookedSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) { setLoading(false); return; }
    fetch(`${API}/api/v1/candidate/bookings`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data: BookedSlot[]) => setBookings(Array.isArray(data) ? data : []))
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!menuOpenId) return;
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpenId(null); };
    const handleOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpenId(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [menuOpenId]);

  const isUpcoming = (b: BookedSlot) =>
    ["pending", "confirmed", "paid", "in_progress"].includes(b.status);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Buổi phỏng vấn đã đặt</h3>
          <p className="text-sm text-gray-400">Quản lý lịch sắp tới và đã hoàn thành</p>
        </div>
        <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg gap-1.5">
          <Plus className="w-4 h-4" />
          Đặt mới
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="size-5 animate-spin text-slate-400" />
        </div>
      ) : bookings.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-10">Chưa có buổi phỏng vấn nào</p>
      ) : (
        <div className="space-y-3">
          {bookings.map((b) => {
            const dt = b.slot ? formatDateTime(b.slot.startAt) : null;
            const initials = (b.interviewerName ?? "?")[0].toUpperCase();
            return (
              <div
                key={b.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors"
              >
                {/* Avatar */}
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-primary-100 flex items-center justify-center">
                  {b.interviewerAvatar ? (
                    <Image src={b.interviewerAvatar} alt={b.interviewerName ?? "Interviewer"} fill className="object-cover" sizes="44px" />
                  ) : (
                    <span className="text-primary-700 font-bold text-sm">{initials}</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-bold text-gray-900 truncate">
                      {b.interviewerName ?? "Interviewer"}
                    </p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${STATUS_STYLE[b.status] ?? "bg-gray-100 text-gray-500"}`}>
                      {STATUS_LABEL[b.status] ?? b.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">
                    {b.serviceOffering?.position ?? "Mock Interview"}
                    {b.serviceOffering ? ` · ${b.serviceOffering.durationMin} phút` : ""}
                  </p>
                  {dt && (
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {dt.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {dt.time}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 flex-shrink-0 relative" ref={menuOpenId === b.id ? menuRef : undefined}>
                  {isUpcoming(b) && (
                    <button className="p-2 rounded-lg text-primary-500 hover:bg-primary-50 transition-colors" aria-label="Join">
                      <Video className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors"
                    onClick={() => setMenuOpenId(menuOpenId === b.id ? null : b.id)}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                  {menuOpenId === b.id && (
                    <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 w-36 z-10" role="menu">
                      <button role="menuitem" className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpenId(null)}>
                        <Edit3 className="w-3.5 h-3.5" /> Đổi lịch
                      </button>
                      <button role="menuitem" className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-50" onClick={() => setMenuOpenId(null)}>
                        <Trash2 className="w-3.5 h-3.5" /> Huỷ
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
