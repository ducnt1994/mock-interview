import FAQContent from "@/components/public/faq/faq-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp (FAQ) | Dịch Phỏng Vấn",
  description:
    "Tìm câu trả lời nhanh cho những thắc mắc phổ biến về dịch vụ phỏng vấn thử, đặt lịch, thanh toán, và nhiều hơn nữa.",
};

export default function FAQPage() {
  return <FAQContent />;
}
