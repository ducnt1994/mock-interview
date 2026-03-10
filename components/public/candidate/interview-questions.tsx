import Link from "next/link";
import { interviewQuestions } from "./mock-data";

const difficultyColor: Record<string, string> = {
    Easy: "bg-primary-50 text-primary-600",
    Medium: "bg-amber-50 text-amber-600",
    Hard: "bg-rose-50 text-rose-600",
};

export default function InterviewQuestions() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
                Interview questions
            </h3>
            <p className="text-sm text-gray-400 mb-5">
                Find and practice with real interview questions asked by companies.
            </p>

            <div className="space-y-4">
                {interviewQuestions.map((q) => (
                    <Link
                        key={q.id}
                        href="#"
                        className="block p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all group"
                    >
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-xs font-bold text-gray-900">
                                        {q.company}
                                    </span>
                                    <span className="text-xs text-gray-300">·</span>
                                    <span className="text-xs text-gray-400">{q.role}</span>
                                </div>
                                <p className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-1">
                                    {q.question}
                                </p>
                            </div>
                            <span
                                className={`text-[10px] font-bold px-2.5 py-1 rounded-md flex-shrink-0 ${difficultyColor[q.difficulty] || difficultyColor.Medium
                                    }`}
                            >
                                {q.difficulty}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {q.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-5">
                <Link
                    href="#"
                    className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                    Browse all questions →
                </Link>
            </div>
        </div>
    );
}
