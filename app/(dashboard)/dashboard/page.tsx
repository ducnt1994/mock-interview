import type { Metadata } from "next";
import DashboardOverview from "@/features/dashboard/components/DashboardOverview";

export const metadata: Metadata = {
  title: "Tổng quan | Dashboard",
  description: "Xem tổng quan hoạt động phỏng vấn và tiến độ cải thiện của bạn.",
};

export default function DashboardPage() {
  return <DashboardOverview />;
}
