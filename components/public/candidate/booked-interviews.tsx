"use client";

import Image from "next/image";
import { Calendar, Clock, MoreVertical, Plus, Video, Trash2, Edit3 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { bookedInterviews } from "./mock-data";

const statusStyles = {
    upcoming: "bg-primary-50 text-primary-600",
    completed: "bg-gray-100 text-gray-500",
};

export default function BookedInterviews() {
    const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Booked Interviews</h3>
                    <p className="text-sm text-gray-400">Manage your upcoming and past sessions</p>
                </div>
                <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg gap-1.5">
                    <Plus className="w-4 h-4" />
                    Book New
                </Button>
            </div>

            <div className="space-y-3">
                {bookedInterviews.map((interview) => (
                    <div
                        key={interview.id}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors"
                    >
                        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={interview.avatar}
                                alt={interview.interviewer}
                                fill
                                className="object-cover"
                                sizes="44px"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <p className="text-sm font-bold text-gray-900 truncate">
                                    {interview.interviewer}
                                </p>
                                <span
                                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${statusStyles[interview.status]
                                        }`}
                                >
                                    {interview.status === "upcoming" ? "Upcoming" : "Completed"}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 truncate">{interview.role}</p>
                            <div className="flex items-center gap-3 mt-1.5">
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                    <Calendar className="w-3 h-3" />
                                    {interview.date}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    {interview.time}
                                </span>
                                <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                                    {interview.specialty}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 flex-shrink-0 relative">
                            {interview.status === "upcoming" && (
                                <button className="p-2 rounded-lg text-primary-500 hover:bg-primary-50 transition-colors" title="Join session">
                                    <Video className="w-4 h-4" />
                                </button>
                            )}
                            <button
                                className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors"
                                onClick={() => setMenuOpenId(menuOpenId === interview.id ? null : interview.id)}
                            >
                                <MoreVertical className="w-4 h-4" />
                            </button>

                            {menuOpenId === interview.id && (
                                <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 w-36 z-10">
                                    <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        <Edit3 className="w-3.5 h-3.5" />
                                        Reschedule
                                    </button>
                                    <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                                        <Trash2 className="w-3.5 h-3.5" />
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
