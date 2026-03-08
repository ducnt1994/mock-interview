"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Expert, Review } from "../../../../components/public/interviewers/profile/types";
import ProfileCard from "../../../../components/public/interviewers/profile/ProfileCard";
import AboutSection from "../../../../components/public/interviewers/profile/AboutSection";
import ExperienceSection from "../../../../components/public/interviewers/profile/ExperienceSection";
import ReviewsSection from "../../../../components/public/interviewers/profile/ReviewsSection";
import BookingCard from "../../../../components/public/interviewers/profile/BookingCard";

// ─── Mock data ────────────────────────────────────────────────────────────────
const EXPERT: Expert = {
    id: 1,
    name: "Alex Chen",
    role: "Staff Engineer",
    company: "Tech Global",
    rating: 4.9,
    reviewCount: 128,
    tags: ["Thiết kế hệ thống", "Thuật toán", "Backend"],
    price: 800000,
    available: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPGBLYWmV9Hsd8URzPWs4vHRs-KxCS-ITksVS-kmqpIZi8LXKBUkI6gdjkPYzzVmzE4xvYC2f_nSqX2c2wQ0w6Uhx0alTcCfWn-RmFzKnQATfuYKdM-fdXGMrglxxm9wTnSxxZQBjQUsiA1o0uGKKFuadx3JFrO2bZkDM4wKprY1aNLrfQQNTHyerCZ4Q6JdVJ8gPo69hXT6amUdfXov_TIu9byM9P7erjAm1YCqjAwHEMQ1VwXQZvYq7cRnqmboboG1umZgtZXE",
    industry: "Kỹ thuật phần mềm",
    bio: "Mình là kỹ sư phần mềm với hơn 10 năm kinh nghiệm tại các công ty công nghệ hàng đầu. Mình đã phỏng vấn hơn 300 ứng viên cho các vị trí từ junior đến senior engineer. Mình sẽ giúp bạn tự tin hơn, trình bày rõ ràng hơn và chinh phục mọi buổi phỏng vấn kỹ thuật.",
    experience: [
        { company: "Tech Global", role: "Staff Engineer", period: "2020 – Hiện tại", logo: "TG" },
        { company: "CloudBase", role: "Senior Software Engineer", period: "2017 – 2020", logo: "CB" },
        { company: "StartupXYZ", role: "Software Engineer", period: "2014 – 2017", logo: "SX" },
    ],
    education: [
        { school: "Đại học Quốc gia TP.HCM", degree: "Kỹ sư Khoa học Máy tính", period: "2010 – 2014" },
        { school: "Google", degree: "Professional Cloud Architect", period: "2019", isCert: true },
    ],
};

const REVIEWS: Review[] = [
    {
        id: 1,
        name: "Minh Tuấn",
        avatar: "MT",
        rating: 5,
        date: "02/03/2026",
        comment: "Anh Alex rất nhiệt tình và chuyên sâu. Buổi mock interview giúp mình nhận ra những điểm yếu về system design mà mình chưa để ý. Sau buổi đó mình phỏng vấn thật và pass ngay!",
    },
    {
        id: 2,
        name: "Lan Anh",
        avatar: "LA",
        rating: 5,
        date: "18/02/2026",
        comment: "Feedback rất chi tiết và cụ thể. Anh giúp mình cải thiện cách trình bày thuật toán rõ ràng hơn nhiều. Rất đáng tiền!",
    },
    {
        id: 3,
        name: "Hoàng Nam",
        avatar: "HN",
        rating: 4,
        date: "10/02/2026",
        comment: "Buổi phỏng vấn mock rất thực tế, câu hỏi sát với thực tế tại các big tech. Mình học được nhiều cách tiếp cận bài toán mới.",
    },
    {
        id: 4,
        name: "Thu Hà",
        avatar: "TH",
        rating: 5,
        date: "25/01/2026",
        comment: "Excellente! Anh Alex chia sẻ insight từ người trong ngành rất quý giá, không tìm được ở đâu khác. Highly recommend!",
    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InterviewerDetailPage() {
    const [showBookingDrawer, setShowBookingDrawer] = useState(false);
    const expert = EXPERT;

    return (
        <div className="bg-neutral-landing min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 xl:px-0 py-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 flex-wrap">
                        <a href="/" className="hover:text-primary-500 transition-colors font-medium">
                            Trang chủ
                        </a>
                        <span className="text-slate-300">/</span>
                        <a href="/interviewers" className="hover:text-primary-500 transition-colors font-medium">
                            Danh sách người phỏng vấn
                        </a>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-900 font-semibold truncate">{expert.name}</span>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 md:py-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                    {/* Left column */}
                    <div className="flex-1 min-w-0 flex flex-col gap-6">
                        <ProfileCard expert={expert} />
                        <AboutSection expert={expert} />
                        <ExperienceSection expert={expert} />
                        <ReviewsSection
                            reviews={REVIEWS}
                            rating={expert.rating}
                            reviewCount={expert.reviewCount}
                        />
                    </div>

                    {/* Right column — desktop booking card */}
                    <div className="hidden lg:block w-80 xl:w-96 shrink-0">
                        <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <BookingCard price={expert.price} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile sticky footer */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 px-4 py-3 flex items-center justify-between gap-4 shadow-2xl">
                <div>
                    <p className="text-lg font-black text-slate-900">
                        {expert.price.toLocaleString("vi-VN")}đ
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> / 60 phút
                    </p>
                </div>
                <Button
                    className="font-bold rounded-xl px-6"
                    onClick={() => setShowBookingDrawer(true)}
                >
                    Đặt lịch ngay
                </Button>
            </div>

            {/* Mobile booking drawer */}
            {showBookingDrawer && (
                <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
                    <div
                        className="flex-1 bg-black/40 backdrop-blur-sm"
                        onClick={() => setShowBookingDrawer(false)}
                    />
                    <div className="bg-white rounded-t-3xl p-5 max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />
                        <BookingCard price={expert.price} onClose={() => setShowBookingDrawer(false)} />
                        <div className="h-4" />
                    </div>
                </div>
            )}

            {/* Spacer for mobile sticky footer */}
            <div className="lg:hidden h-20" />
        </div>
    );
}