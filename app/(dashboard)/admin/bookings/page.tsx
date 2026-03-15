import type { Metadata } from "next";
import BookingsList from "@/features/booking/components/BookingsList";

export const metadata: Metadata = {
  title: "Lịch phỏng vấn | Dashboard",
  description: "Quản lý các buổi phỏng vấn đã đặt lịch.",
};

export default function BookingsPage() {
  return <BookingsList />;
}
