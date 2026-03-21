"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import BookingFlow from "./BookingFlow";

interface ServiceOffering {
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

export default function BookingDrawer({ userId, offerings }: Props) {
  const [open, setOpen] = useState(false);

  const minPrice = offerings.length
    ? Math.min(...offerings.map((o) => o.basePrice))
    : null;

  return (
    <>
      {/* Mobile sticky footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 px-4 py-3 flex items-center justify-between gap-4 shadow-2xl">
        <div>
          {minPrice !== null && (
            <p className="text-lg font-black text-slate-900">
              {minPrice.toLocaleString("vi-VN")}đ
            </p>
          )}
          <p className="text-xs text-slate-400">/ buổi phỏng vấn</p>
        </div>
        <Button className="font-bold rounded-xl px-6" onClick={() => setOpen(true)}>
          Đặt lịch ngay
        </Button>
      </div>

      {/* Bottom drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="bg-white rounded-t-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white pt-4 px-5 pb-2 border-b border-slate-100 flex items-center justify-between z-10">
              <h2 className="font-black text-slate-900">Đặt lịch phỏng vấn</h2>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <BookingFlow userId={userId} offerings={offerings} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
