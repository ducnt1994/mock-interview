import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { relatedInterviewers } from "./mock-data";

export default function RelatedInterviewers() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
                Recommended Interviewers
            </h3>
            <p className="text-sm text-gray-400 mb-5">
                Top-rated mentors matching your specialties
            </p>

            <div className="space-y-4">
                {relatedInterviewers.map((interviewer) => (
                    <div
                        key={interviewer.id}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors"
                    >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={interviewer.avatar}
                                alt={interviewer.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-900 truncate">
                                {interviewer.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">{interviewer.role}</p>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                                    {interviewer.rating}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {interviewer.sessions} sessions
                                </span>
                                <span className="text-[10px] font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                                    {interviewer.specialty}
                                </span>
                            </div>
                        </div>
                        <Button
                            size="sm"
                            variant="outline"
                            className="flex-shrink-0 font-bold rounded-lg text-xs"
                        >
                            Book
                        </Button>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <Link
                    href="/interviewers"
                    className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                    View all interviewers →
                </Link>
            </div>
        </div>
    );
}
