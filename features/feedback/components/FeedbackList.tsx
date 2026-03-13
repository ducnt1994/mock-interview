"use client";

import { Star, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface FeedbackItem {
  id: number;
  interviewer: string;
  avatar: string;
  date: string;
  type: string;
  overallScore: number;
  skills: {
    name: string;
    score: number;
    trend: "up" | "down" | "stable";
  }[];
  strengths: string[];
  improvements: string[];
  summary: string;
}

const mockFeedback: FeedbackItem[] = [
  {
    id: 1,
    interviewer: "David Miller",
    avatar: "DM",
    date: "10/03/2026",
    type: "Product Strategy",
    overallScore: 8.5,
    skills: [
      { name: "Problem Solving", score: 9, trend: "up" },
      { name: "Communication", score: 7.5, trend: "down" },
      { name: "Technical Knowledge", score: 8.5, trend: "up" },
      { name: "Leadership", score: 9, trend: "stable" },
    ],
    strengths: [
      "Phân tích vấn đề logic và có cấu trúc",
      "Kiến thức chuyên môn sâu rộng",
    ],
    improvements: [
      "Nên trình bày ý tưởng ngắn gọn hơn",
      "Cần lắng nghe câu hỏi kỹ trước khi trả lời",
    ],
    summary:
      "Ứng viên thể hiện khả năng giải quyết vấn đề xuất sắc và kiến thức chuyên sâu. Cần cải thiện kỹ năng giao tiếp để truyền đạt ý tưởng hiệu quả hơn.",
  },
  {
    id: 2,
    interviewer: "Alex Chen",
    avatar: "AC",
    date: "05/03/2026",
    type: "System Design",
    overallScore: 7.8,
    skills: [
      { name: "System Architecture", score: 7, trend: "up" },
      { name: "Scalability", score: 8, trend: "up" },
      { name: "Trade-off Analysis", score: 8.5, trend: "stable" },
      { name: "Communication", score: 7.5, trend: "up" },
    ],
    strengths: [
      "Có approach rõ ràng khi giải quyết bài toán",
      "Hiểu biết tốt về trade-offs",
    ],
    improvements: [
      "Cần structured hơn khi trình bày system design",
      "Nên vẽ diagram rõ ràng hơn",
    ],
    summary:
      "Đã có tiến bộ rõ rệt so với lần trước. System design approach cần structured hơn, nhưng khả năng phân tích trade-offs rất tốt.",
  },
  {
    id: 3,
    interviewer: "Sarah Jenkins",
    avatar: "SJ",
    date: "28/02/2026",
    type: "Portfolio Review",
    overallScore: 9.0,
    skills: [
      { name: "Visual Design", score: 9.5, trend: "stable" },
      { name: "UX Thinking", score: 9, trend: "up" },
      { name: "Presentation", score: 8.5, trend: "up" },
      { name: "Process", score: 9, trend: "stable" },
    ],
    strengths: [
      "Portfolio trình bày rất chuyên nghiệp",
      "Design thinking process rõ ràng",
    ],
    improvements: [
      "Thêm metrics và impact vào case studies",
    ],
    summary:
      "Portfolio ấn tượng với process design rõ ràng. Nên bổ sung impact metrics để tăng tính thuyết phục.",
  },
];

const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  if (trend === "up") return <TrendingUp className="size-3 text-emerald-500" />;
  if (trend === "down") return <TrendingDown className="size-3 text-red-500" />;
  return <Minus className="size-3 text-slate-400" />;
};

const ScoreBar = ({ score }: { score: number }) => {
  const width = (score / 10) * 100;
  const color =
    score >= 8.5
      ? "bg-emerald-500"
      : score >= 7
        ? "bg-primary-500"
        : "bg-amber-500";

  return (
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default function FeedbackList() {
  return (
    <div className="px-4 md:px-8 py-6 md:py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Phản hồi</h1>
        <p className="text-sm text-slate-500 mt-1">
          Đánh giá chi tiết từ các chuyên gia sau mỗi buổi phỏng vấn.
        </p>
      </div>

      {/* Feedback Cards */}
      <div className="flex flex-col gap-5">
        {mockFeedback.map((fb) => (
          <Card key={fb.id} className="border-slate-100 shadow-sm overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700">
                    {fb.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold text-slate-900">
                      {fb.interviewer}
                    </CardTitle>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {fb.type} · {fb.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-xl">
                  <Star className="size-4 text-amber-500 fill-amber-500" />
                  <span className="text-lg font-bold text-slate-900">
                    {fb.overallScore}
                  </span>
                  <span className="text-xs text-slate-400">/10</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-5 px-5 md:px-6">
              {/* Summary */}
              <p className="text-sm text-slate-600 leading-relaxed mb-5 bg-slate-50 p-3 rounded-xl">
                {fb.summary}
              </p>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {fb.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <TrendIcon trend={skill.trend} />
                        <span className="text-xs font-bold text-slate-800">
                          {skill.score}
                        </span>
                      </div>
                    </div>
                    <ScoreBar score={skill.score} />
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Strengths & Improvements */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-emerald-700 mb-2">
                    ✅ Điểm mạnh
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {fb.strengths.map((s, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 pl-3 border-l-2 border-emerald-300"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-700 mb-2">
                    🔧 Cần cải thiện
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {fb.improvements.map((imp, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 pl-3 border-l-2 border-amber-300"
                      >
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
