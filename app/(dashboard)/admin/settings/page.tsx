import type { Metadata } from "next";
import SettingsForm from "@/features/settings/components/SettingsForm";

export const metadata: Metadata = {
  title: "Cài đặt | Dashboard",
  description: "Quản lý thông tin tài khoản và cài đặt cá nhân.",
};

export default function SettingsPage() {
  return <SettingsForm />;
}
