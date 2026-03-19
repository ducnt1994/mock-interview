import { notFound } from "next/navigation";
import { Star, Briefcase, ExternalLink, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookingFlow from "../../../../components/public/interviewers/profile/BookingFlow";
import BookingDrawer from "../../../../components/public/interviewers/profile/BookingDrawer";
import {
  fetchInterviewerDetail,
  type Interviewer,
  type ServiceOffering,
} from "@/features/interviewer/api";
// ─── Helpers ─────────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
      ))}
    </div>
  );
}

function Avatar({ src, name, size = 80 }: { src: string | null; name: string; size?: number }) {
  const initials = name.split(" ").map((w) => w[0]).slice(-2).join("").toUpperCase();
  if (src) {
    return (
      <div style={{ width: size, height: size }} className="relative rounded-full overflow-hidden flex-shrink-0">
        <Image src={src} alt={name} fill className="object-cover" sizes={`${size}px`} />
      </div>
    );
  }
  return (
    <div style={{ width: size, height: size }} className="rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
      <span className="font-bold text-primary-700" style={{ fontSize: size * 0.3 }}>{initials}</span>
    </div>
  );
}

// ─── Page (SSR) ───────────────────────────────────────────────────────────────
export default async function InterviewerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: userId } = await params;
  const expert = await fetchInterviewerDetail(userId);
  if (!expert) notFound();

  const activeOfferings = expert.serviceOfferings ?? [];

  return (
    <div className="bg-neutral-landing min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 xl:px-0 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-primary-500 transition-colors font-medium">Trang chủ</Link>
            <span className="text-slate-300">/</span>
            <Link href="/interviewers" className="hover:text-primary-500 transition-colors font-medium">Danh sách người phỏng vấn</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold truncate">{expert.fullName}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          {/* ── Left column ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">

            {/* Profile card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="flex items-start gap-4">
                <Avatar src={expert.avatarUrl} name={expert.fullName ?? "Interviewer"} size={72} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl font-black text-slate-900">{expert.fullName}</h1>
                    {expert.isVerified && <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />}
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {expert.jobTitle}{expert.jobTitle && expert.company ? " · " : ""}{expert.company}
                  </p>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400" />
                      {expert.ratingAvg.toFixed(1)}
                      <span className="text-slate-400 font-normal">({expert.totalReviews} đánh giá)</span>
                    </span>
                    {expert.yearsExp > 0 && (
                      <span className="flex items-center gap-1 text-sm text-slate-500">
                        <Briefcase className="w-4 h-4" /> {expert.yearsExp} năm kinh nghiệm
                      </span>
                    )}
                    {expert.linkedinUrl && (
                      <a href={expert.linkedinUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary-600 hover:underline">
                        <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            {expert.bio && (
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h2 className="text-base font-bold text-slate-900 mb-3">Giới thiệu</h2>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{expert.bio}</p>
              </div>
            )}

            {/* Services */}
            {activeOfferings.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h2 className="text-base font-bold text-slate-900 mb-4">Dịch vụ cung cấp</h2>
                <div className="flex flex-col gap-3">
                  {activeOfferings.map((s) => (
                    <div key={s.id} className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-100">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900">{s.positionName ?? "Mock Interview"}</p>
                        {s.industryName && <p className="text-xs text-slate-400 mt-0.5">{s.industryName}</p>}
                        {s.description && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{s.description}</p>}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-base font-black text-primary-600">{s.basePrice.toLocaleString("vi-VN")}đ</p>
                        <p className="text-xs text-slate-400">{s.durationMin} phút</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Feedbacks */}
            {expert.feedbacks.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-base font-bold text-slate-900">Đánh giá từ ứng viên</h2>
                  <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400" /> {expert.ratingAvg.toFixed(1)}
                  </span>
                  <span className="text-sm text-slate-400">({expert.totalReviews} đánh giá)</span>
                </div>
                <div className="flex flex-col gap-4">
                  {expert.feedbacks.map((f) => (
                    <div key={f.id} className="border-b border-slate-50 pb-4 last:border-none last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar src={f.candidateAvatar} name={f.candidateName ?? "Ẩn danh"} size={36} />
                        <div>
                          <p className="text-sm font-bold text-slate-900">{f.candidateName}</p>
                          <div className="flex items-center gap-2">
                            <StarRating rating={f.rate} />
                            <span className="text-xs text-slate-400">{new Date(f.date).toLocaleDateString("vi-VN")}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{f.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right column — Booking (desktop) ────────────────────────── */}
          <div className="hidden lg:block w-80 xl:w-96 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4">Đặt lịch phỏng vấn</h2>
              <BookingFlow userId={expert.userId} offerings={activeOfferings} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile booking drawer */}
      <BookingDrawer userId={expert.userId} offerings={activeOfferings} />
      <div className="lg:hidden h-20" />
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const expert = await fetchInterviewerDetail(id);
  if (!expert) return { title: "Không tìm thấy" };
  return {
    title: `${expert.fullName} — Mock Interview`,
    description: expert.bio?.slice(0, 160) ?? `Book mock interview với ${expert.fullName}`,
  };
}