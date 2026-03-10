import QuickActions from "@/components/public/candidate/quick-actions";
import LeftSidebar from "@/components/public/candidate/left-sidebar";
import CoursesSection from "@/components/public/candidate/courses-section";
import InterviewQuestions from "@/components/public/candidate/interview-questions";
import BookedInterviews from "@/components/public/candidate/booked-interviews";
import RelatedInterviewers from "@/components/public/candidate/related-interviewers";

export const metadata = {
    title: "Dashboard | InterviewPrep",
    description:
        "Your personalized candidate dashboard — track progress, practice questions, and manage interview sessions.",
};

export default function CandidatePage() {
    return (
        <div className="bg-neutral-landing min-h-screen">
            {/* Welcome Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-14">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                        Welcome back, <span className="text-primary-600">hyn</span>!
                    </h1>
                    <p className="text-base text-gray-400 font-medium">
                        Continue learning with our recommendations based on your career goals
                        and recent activity.
                    </p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
                {/* Quick Action Cards */}
                <QuickActions />

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-6 mt-8">
                    {/* Left Column */}
                    <div className="w-full lg:w-[320px] flex-shrink-0">
                        <LeftSidebar />
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 min-w-0 space-y-6">
                        {/* <CoursesSection /> */}
                        <BookedInterviews />
                        <InterviewQuestions />
                        <RelatedInterviewers />
                    </div>
                </div>
            </div>
        </div>
    );
}
