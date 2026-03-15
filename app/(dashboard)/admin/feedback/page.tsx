import type { Metadata } from "next";
import FeedbackList from "@/features/feedback/components/FeedbackList";

export const metadata: Metadata = {
  title: "Phản hồi | Dashboard",
  description: "Xem phản hồi chi tiết từ các buổi phỏng vấn.",
};

export default function FeedbackPage() {
  return <FeedbackList />;
}
