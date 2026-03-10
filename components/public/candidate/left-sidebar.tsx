import { CheckCircle2, Circle, Star, X, Gift, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { onboardingSteps, questionOfDay } from "./mock-data";

export default function LeftSidebar() {
    return (
        <div className="space-y-6">
            {/* Getting Started */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-gray-900">Getting started</h3>
                    <button className="text-gray-300 hover:text-gray-500 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-sm text-gray-400 mb-5">
                    Start preparing for your next interview.
                </p>
                <div className="space-y-3.5">
                    {onboardingSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            {step.completed ? (
                                <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                            ) : (
                                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                            )}
                            <span
                                className={`text-sm font-medium ${step.completed ? "text-gray-900" : "text-gray-400"
                                    }`}
                            >
                                {step.label}
                            </span>
                            {step.reward && (
                                <span className="flex items-center gap-0.5 text-xs font-bold text-amber-500 ml-auto">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    {step.reward}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Refer Friends */}
            <div className="bg-primary-25 rounded-2xl border border-primary-100 p-6">
                <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-primary-500" />
                    <h3 className="text-base font-bold text-gray-900">Refer a friend</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Invite friends and both earn a free mock interview session!
                </p>
                <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 truncate">
                        interviewprep.com/r/hyn2026
                    </div>
                    <Button size="sm" variant="outline" className="flex-shrink-0">
                        <Copy className="w-4 h-4" />
                    </Button>
                </div>
                <p className="text-xs text-primary-600 font-medium mt-3">
                    3 friends joined · 2 free sessions earned
                </p>
            </div>

            {/* Question of the Day */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-2">
                    {questionOfDay.label}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-4">
                    {questionOfDay.question}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                    <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg">
                        Answer now
                    </Button>
                    <Button size="sm" variant="outline" className="font-bold rounded-lg">
                        Shuffle
                    </Button>
                </div>
                <p className="text-xs text-gray-400">{questionOfDay.description}</p>
            </div>

            {/* Ad Space */}
            <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 flex flex-col items-center justify-center min-h-[200px]">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-3">
                    <span className="text-lg text-gray-400">📢</span>
                </div>
                <p className="text-sm font-semibold text-gray-400 text-center">
                    Advertisement Space
                </p>
                <p className="text-xs text-gray-300 text-center mt-1">Your ad could be here</p>
            </div>
        </div>
    );
}
