"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import InterviewerFilter, {
    FilterState,
} from "@/components/public/interviewers/interviewer-filter";
import InterviewerCard, {
    Interviewer,
} from "@/components/public/interviewers/interviewer-card";

const MOCK_INTERVIEWERS: Interviewer[] = [
    {
        id: 1,
        name: "Alex Chen",
        role: "Staff Engineer",
        company: "Tech Global",
        rating: 4.9,
        reviewCount: 128,
        tags: ["Thiết kế hệ thống", "Thuật toán"],
        price: 800000,
        available: true,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPGBLYWmV9Hsd8URzPWs4vHRs-KxCS-ITksVS-kmqpIZi8LXKBUkI6gdjkPYzzVmzE4xvYC2f_nSqX2c2wQ0w6Uhx0alTcCfWn-RmFzKnQATfuYKdM-fdXGMrglxxm9wTnSxxZQBjQUsiA1o0uGKKFuadx3JFrO2bZkDM4wKprY1aNLrfQQNTHyerCZ4Q6JdVJ8gPo69hXT6amUdfXov_TIu9byM9P7erjAm1YCqjAwHEMQ1VwXQZvYq7cRnqmboboG1umZgtZXE",
        industry: "Kỹ thuật phần mềm",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Product Design Lead",
        company: "Social Connect",
        rating: 5.0,
        reviewCount: 94,
        tags: ["Thiết kế UX", "Portfolio"],
        price: 750000,
        available: true,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4axdScLRog6_2SYHjAWqhuS6o7fIViz4VuLyxJkRuTwPqUBABkj9su8A5fScJEkCJcG7N8sxe7UlQkIrQshzdSyvfWBHikv6CxNyRz2CF2fcAll4LmZCg2SZLNa1P6r1SIA_y08p0TUXz25FQmc8NnWjkBNcysfvnAS5Klysg8QoOqBrSGknSTI1QqiXqTW4nifKNfEM7KRcp_A4koAMH_TKDA0Ym3YfIJY42Bt8cSU_CdUGunHReQgiKQHDHUbYG_zA_dFHBH4M",
        industry: "Thiết kế UX/UI",
    },
    {
        id: 3,
        name: "David Miller",
        role: "Director of Product",
        company: "Retail Giant",
        rating: 4.8,
        reviewCount: 211,
        tags: ["Lãnh đạo", "Chiến lược sản phẩm"],
        price: 1200000,
        available: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-4kGtuayD61YZzS5AO8ecVzg4RTVHCnFDZwx6-AEHov30RS5zSc0tS_yiqtn5kcDsYEIx6DHCpxD0xrCAi33b1WDDz2Q27C_C-giTXvuArPlojR_2ut-hL5g1S9florvdJ5sM2IjDB9mASKzM9KY8Vov2oVoNs6aGsuuazcXkaG1-XqusJYcuaox448YE6LjHcUOF6F5Bn8oyXcOYqyxdbNUzp5ZAKs-9JS5pMbUTC-vRjbxUEVF7c1cBwvGYNagl5Zyf6Lsvr0",
        industry: "Quản lý sản phẩm",
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Senior Recruiter",
        company: "Streaming Plus",
        rating: 4.9,
        reviewCount: 176,
        tags: ["Phỏng vấn hành vi", "Thương lượng"],
        price: 650000,
        available: true,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcWnvHUdYBZTZgbGm9CkwKrCdZgidkL3TaO7jC3DI7KFQSJjmyOuX5SjIqHxIm4kIrP-BckpNuYEiyVg8ZCLmATyV9TjKhPJIRiNvIa0rXVz9ziklV3SXtGVxM5W9FSQ93sbTn27yTrin56AeY5JkA6RTHAvx0SHlPPS9MVshByy3kbUFsthA5SXjk6JBWPkKnw2vz-j_ixrua8fgheNuXhm07-uGzPH17gIFk0pd_S3h9Orvkg_ofHH8MStyAe_IzniaCo2Y2d4E",
        industry: "Kỹ thuật phần mềm",
    },
    {
        id: 5,
        name: "Minh Trần",
        role: "Senior Data Scientist",
        company: "FinTech Corp",
        rating: 4.7,
        reviewCount: 63,
        tags: ["Machine Learning", "SQL", "Python"],
        price: 900000,
        available: true,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        industry: "Phân tích dữ liệu",
    },
    {
        id: 6,
        name: "Linh Nguyễn",
        role: "Head of Marketing",
        company: "Growth Studio",
        rating: 4.9,
        reviewCount: 88,
        tags: ["Digital Marketing", "Content", "SEO"],
        price: 700000,
        available: false,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        industry: "Marketing",
    },
    {
        id: 7,
        name: "James Wilson",
        role: "Frontend Engineer",
        company: "CloudBase",
        rating: 4.8,
        reviewCount: 142,
        tags: ["React", "TypeScript", "CSS"],
        price: 700000,
        available: true,
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        industry: "Kỹ thuật phần mềm",
    },
    {
        id: 8,
        name: "Hoa Phạm",
        role: "UX Research Lead",
        company: "Design Lab",
        rating: 5.0,
        reviewCount: 57,
        tags: ["User Research", "Figma", "Prototype"],
        price: 850000,
        available: true,
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        industry: "Thiết kế UX/UI",
    },
];

// Extend Interviewer type locally with industry
type InterviewerWithIndustry = Interviewer & { industry: string };

const DEFAULT_FILTER: FilterState = {
    industry: "Tất cả",
    minRating: 0,
    availableOnly: false,
};

export default function InterviewersPage() {
    const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return (MOCK_INTERVIEWERS as InterviewerWithIndustry[]).filter((e) => {
            if (filter.industry !== "Tất cả" && e.industry !== filter.industry)
                return false;
            if (filter.minRating > 0 && e.rating < filter.minRating) return false;
            if (filter.availableOnly && !e.available) return false;
            if (
                search &&
                !e.name.toLowerCase().includes(search.toLowerCase()) &&
                !e.role.toLowerCase().includes(search.toLowerCase()) &&
                !e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
            )
                return false;
            return true;
        });
    }, [filter, search]);

    return (
        <div className="bg-neutral-landing min-h-screen">
            {/* Page header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 xl:px-0 py-8 md:py-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-1">
                        Tìm người phỏng vấn <span className="text-primary-500">phù hợp nhất</span> đối với bạn
                    </h2>

                    {/* Search bar */}
                    <div className="mt-6 relative max-w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Tìm theo tên, vị trí, kỹ năng..."
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 md:py-10">
                {/* Mobile: results count only (filter button is rendered inside InterviewerFilter) */}
                <div className="flex items-center justify-end mb-4 lg:hidden">
                    <p className="text-sm text-slate-500 font-medium">
                        <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
                        chuyên gia
                    </p>
                </div>

                <div className="flex gap-6 lg:gap-8 items-start flex-col lg:flex-row">
                    {/* Filter — renders mobile button at lg:hidden, desktop sidebar at hidden lg:block */}
                    <InterviewerFilter value={filter} onChange={setFilter} />

                    {/* Cards grid */}
                    <div className="flex-1 min-w-0 w-full">
                        {/* Desktop results count */}
                        <div className="hidden lg:flex items-center justify-between mb-6">
                            <p className="text-sm text-slate-500 font-medium">
                                <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
                                chuyên gia
                            </p>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="text-center py-20 text-slate-400">
                                <p className="text-4xl mb-3">🔍</p>
                                <p className="font-bold text-slate-600">Không tìm thấy chuyên gia phù hợp</p>
                                <p className="text-sm mt-1">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                                {filtered.map((expert) => (
                                    <InterviewerCard key={expert.id} expert={expert} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}