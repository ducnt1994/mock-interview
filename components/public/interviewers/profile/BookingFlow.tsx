"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Clock, Loader2, CalendarDays, CheckCircle2, AlertCircle } from "lucide-react";
import { fetchAvailableSlots, type TimeSlot } from "@/features/interviewer/api";

export interface ServiceOffering {
  id: string;
  positionName: string | null;
  durationMin: number;
  basePrice: number;
  currency: string;
}

interface Props {
  userId: string;
  offerings: ServiceOffering[];
}

function toISO(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplayDate(date: Date) {
  return date.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function BookingFlow({ userId, offerings }: Props) {
  const [selectedOffering, setSelectedOffering] = useState<ServiceOffering | null>(
    offerings[0] ?? null
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [fetchedDate, setFetchedDate] = useState<string>("");

  const handleDateSelect = async (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSlots([]);
    setSlotsError("");
    if (!date || !selectedOffering) return;

    const iso = toISO(date);
    if (iso === fetchedDate) return;

    setLoadingSlots(true);
    setFetchedDate(iso);
    try {
      const data = await fetchAvailableSlots(userId, iso, selectedOffering.durationMin);
      setSlots(data);
      if (data.length === 0) setSlotsError("Không có lịch trống trong ngày này");
    } catch {
      setSlotsError("Không thể tải lịch. Vui lòng thử lại.");
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleOfferingChange = (o: ServiceOffering) => {
    setSelectedOffering(o);
    setSelectedDate(undefined);
    setSlots([]);
    setSelectedSlot(null);
    setSlotsError("");
    setFetchedDate("");
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="flex flex-col gap-5">
      {/* Step 1: Chọn dịch vụ */}
      {offerings.length > 1 && (
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Loại phỏng vấn
          </p>
          <div className="flex flex-col gap-2">
            {offerings.map((o) => (
              <button
                key={o.id}
                onClick={() => handleOfferingChange(o)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-sm transition-colors text-left ${
                  selectedOffering?.id === o.id
                    ? "border-primary-500 bg-primary-50 text-primary-700"
                    : "border-slate-200 hover:border-slate-300 text-slate-700"
                }`}
              >
                <span className="font-semibold">
                  {o.positionName ?? "Mock Interview"}
                </span>
                <span className="font-bold text-slate-900 shrink-0 ml-2">
                  {o.basePrice.toLocaleString("vi-VN")}đ
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Giá dịch vụ đơn */}
      {offerings.length === 1 && selectedOffering && (
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-3xl font-black text-slate-900">
              {selectedOffering.basePrice.toLocaleString("vi-VN")}đ
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" />
              {selectedOffering.durationMin} phút / buổi
            </p>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-slate-100" />

      {/* Step 2: Chọn ngày */}
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <CalendarDays className="w-3.5 h-3.5" />
          Chọn ngày
        </p>
        <div className="w-full">
        <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={(date) => date < today}
            className="rounded-xl border border-slate-200 shadow-sm p-3"
            classNames={{
              root: "w-full",
              months: "relative w-full",
              month: "w-full flex flex-col gap-4",
              month_grid: "w-full border-collapse",
              month_caption: "flex h-8 w-full items-center justify-center px-8",
            }}
          />
        </div>
      </div>

      {/* Step 3: Chọn giờ */}
      {selectedDate && (
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Chọn giờ — {formatDisplayDate(selectedDate)}
          </p>

          {loadingSlots ? (
            <div className="flex justify-center py-6">
              <Loader2 className="size-5 animate-spin text-slate-400" />
            </div>
          ) : slotsError ? (
            <div className="flex items-center gap-2 text-sm text-slate-500 py-4 px-3 rounded-xl bg-slate-50">
              <AlertCircle className="size-4 text-slate-400 shrink-0" />
              {slotsError}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => {
                const isSelected = selectedSlot?.startAt === slot.startAt;
                return (
                  <button
                    key={slot.startAt}
                    onClick={() => setSelectedSlot(isSelected ? null : slot)}
                    className={`py-2 px-1 rounded-xl text-sm font-semibold border transition-colors ${isSelected
                        ? "bg-primary-500 border-primary-500 text-white"
                        : "border-slate-200 text-slate-700 hover:border-primary-300 hover:bg-primary-50"
                      }`}
                  >
                    {slot.startAt}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Summary & CTA */}
      {selectedSlot && selectedDate && selectedOffering && (
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="size-4 text-primary-600 mt-0.5 shrink-0" />
            <div className="text-sm">
              <p className="font-bold text-slate-900">
                {selectedOffering.positionName ?? "Mock Interview"}
              </p>
              <p className="text-slate-600 mt-0.5">
                {formatDisplayDate(selectedDate)} · {selectedSlot.startAt} – {selectedSlot.endAt}
              </p>
              <p className="text-primary-700 font-black mt-1">
                {selectedOffering.basePrice.toLocaleString("vi-VN")}đ
              </p>
            </div>
          </div>
          <Button className="w-full font-bold rounded-xl" size="lg">
            Xác nhận đặt lịch
          </Button>
          <p className="text-xs text-center text-slate-400">
            Hoàn tiền 100% nếu huỷ trước 24h
          </p>
        </div>
      )}

      {/* CTA khi chưa chọn slot */}
      {!selectedSlot && (
        <Button
          className="w-full font-bold rounded-xl"
          size="lg"
          disabled={!selectedDate || loadingSlots}
          variant={selectedDate ? "default" : "outline"}
        >
          {!selectedDate ? "Chọn ngày để xem lịch trống" : loadingSlots ? "Đang tải..." : "Chọn giờ phỏng vấn"}
        </Button>
      )}
    </div>
  );
}
