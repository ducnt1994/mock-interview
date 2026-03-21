import QuickActions from "@/components/public/candidate/quick-actions";
import LeftSidebar from "@/components/public/candidate/left-sidebar";
import InterviewQuestions from "@/components/public/candidate/interview-questions";
import BookedInterviews from "@/components/public/candidate/booked-interviews";
import RelatedInterviewers from "@/components/public/candidate/related-interviewers";

export const metadata = {
  title: "Dashboard | DiPhongVan",
  description:
    "Tổng quan tài khoản ứng viên — theo dõi tiến trình, câu hỏi luyện tập và các buổi phỏng vấn.",
};

export default function CandidatePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full lg:w-[300px] flex-shrink-0">
          <LeftSidebar />
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-0 space-y-6">
          <QuickActions />
          <BookedInterviews />
          <InterviewQuestions />
          <RelatedInterviewers />
        </div>
      </div>
    </div>
  );
}
