import type { Metadata } from "next";
import InterviewsList from "@/features/interview/components/InterviewsList";

export const metadata: Metadata = {
  title: "Buổi phỏng vấn | Dashboard",
  description: "Xem lại lịch sử các buổi phỏng vấn đã hoàn thành.",
};

export default function InterviewsPage() {
  return <InterviewsList />;
}
