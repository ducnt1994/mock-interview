import { InterviewerListClient } from "@/components/public/interviewers/interviewer-list-client";
import { fetchInterviewers } from "@/features/interviewer/api";

export const metadata = {
  title: "Tìm người phỏng vấn | MockInterview",
  description: "Kết nối với các chuyên gia hàng đầu để luyện tập phỏng vấn mock.",
};

export default async function InterviewersPage() {
  const interviewers = await fetchInterviewers();
  return <InterviewerListClient interviewers={interviewers} />;
}