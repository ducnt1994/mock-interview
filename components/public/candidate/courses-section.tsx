"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronDown, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { currentCourse, progressItems } from "./mock-data";

type TabType = "active" | "completed" | "saved";

export default function CoursesSection() {
    const [activeTab, setActiveTab] = useState<TabType>("active");

    const tabs: { key: TabType; label: string }[] = [
        { key: "active", label: "ACTIVE" },
        { key: "completed", label: "COMPLETED" },
        { key: "saved", label: "SAVED" },
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
            {/* Courses Header */}
            <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-1">
                COURSES
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
                Pick up where you left off
            </h3>
            <p className="text-sm text-gray-400 mb-5">
                Keep it up! You&apos;re making good progress through your course.
            </p>

            {/* Current Course Card */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <div className="relative w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer">
                    <Image
                        src={currentCourse.thumbnail}
                        alt={currentCourse.title}
                        fill
                        className="object-cover"
                        sizes="200px"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="w-4 h-4 text-gray-900 ml-0.5" />
                        </div>
                    </div>
                    {/* Logo pills */}
                    <div className="absolute bottom-2 left-2 flex -space-x-1">
                        {currentCourse.logos.slice(0, 5).map((logo, idx) => (
                            <div
                                key={idx}
                                className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-xs border-2 border-white"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
                    <h4 className="text-base font-bold text-gray-900">
                        {currentCourse.title}
                    </h4>
                    <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg flex-shrink-0">
                        Continue
                    </Button>
                </div>
            </div>

            {/* My Progress */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900">My Progress</h3>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 pb-3 text-xs font-bold tracking-wider transition-colors relative ${activeTab === tab.key
                                ? "text-primary-600"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.key && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Progress Items */}
            <div className="space-y-3">
                {progressItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2">
                        <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <Link
                    href="#"
                    className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                    See more courses
                </Link>
            </div>
        </div>
    );
}
