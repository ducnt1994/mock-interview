"use client";

import { useState } from "react";
import { Clock, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DATES = ["T2, 10/3", "T3, 11/3", "T4, 12/3", "T5, 13/3", "T6, 14/3"];
const TIMES = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
const TAX_RATE = 0.1;

interface Props {
  price: number;
  onClose?: () => void;
}

export default function BookingCard({ price, onClose }: Props) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const hasSelection = !!selectedDate && !!selectedTime;
  const tax = hasSelection ? price * TAX_RATE : 0;
  const total = hasSelection ? price + tax : 0;

  return (
    <div className="flex flex-col gap-5">
      {/* Mobile header with close */}
      {onClose && (
        <div className="flex items-center justify-between">
          <span className="font-black text-slate-900 text-lg">Đặt lịch</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Price */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-black text-slate-900">
            {price.toLocaleString("vi-VN")}đ
          </p>
          <p className="text-xs text-slate-400 font-medium">/ session</p>
        </div>
        <span className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
          <Clock className="w-3.5 h-3.5" />
          60 phút
        </span>
      </div>

      {/* Date picker */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          Chọn ngày
        </p>
        <div className="flex gap-2 flex-wrap">
          {DATES.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDate(d)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${selectedDate === d
                  ? "bg-primary-500 text-white border-primary-500"
                  : "border-slate-200 text-slate-600 hover:border-primary-500 hover:text-primary-500"
                }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Time picker */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          Chọn giờ
        </p>
        <div className="flex gap-2 flex-wrap">
          {TIMES.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${selectedTime === t
                  ? "bg-primary-500 text-white border-primary-500"
                  : "border-slate-200 text-slate-600 hover:border-primary-500 hover:text-primary-500"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-slate-200" />

      {/* Price breakdown */}
      <div className="space-y-2 text-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          Tổng tiền tạm tính
        </p>
        <div className="flex justify-between text-slate-600">
          <span>Phí buổi phỏng vấn</span>
          <span className="font-semibold">
            {hasSelection ? `${price.toLocaleString("vi-VN")}đ` : "—"}
          </span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Thuế VAT (10%)</span>
          <span className="font-semibold">
            {hasSelection ? `${tax.toLocaleString("vi-VN")}đ` : "—"}
          </span>
        </div>
        <div className="border-t border-slate-100 pt-2 flex justify-between font-black text-slate-900 text-base">
          <span>Tổng cộng</span>
          <span className="text-primary-500">
            {hasSelection ? `${total.toLocaleString("vi-VN")}đ` : "—"}
          </span>
        </div>
      </div>

      {/* CTA */}
      <Button
        className="w-full font-bold rounded-xl py-3 text-base"
        disabled={!hasSelection}
      >
        {hasSelection ? "Xác nhận đặt lịch" : "Chọn ngày & giờ để tiếp tục"}
      </Button>

      {!hasSelection && (
        <p className="text-center text-xs text-slate-400">
          Vui lòng chọn ngày và giờ trước khi xác nhận
        </p>
      )}
    </div>
  );
}
