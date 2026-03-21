/**
 * Interviewer API
 *
 * - Server-side (SSR/RSC): dùng native fetch để tương thích Next.js ISR cache
 * - Client-side: dùng axios http instance (interceptors, auth header)
 */
import http from "@/lib/http";
import { API_ENDPOINTS } from "@/constants/api";

const SERVER_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface InterviewerListItem {
  userId: string;
  id: string;
  fullName: string | null;
  avatarUrl: string | null;
  company: string | null;
  jobTitle: string | null;
  yearsExp: number;
  ratingAvg: number;
  totalReviews: number;
  specialties: string[];
  minPrice: number | null;
}

export interface ServiceOffering {
  id: string;
  positionName: string | null;
  industryName: string | null;
  durationMin: number;
  basePrice: number;
  currency: string;
  description: string | null;
}

export interface Feedback {
  id: string;
  rate: number;
  content: string;
  date: string;
  candidateName: string | null;
  candidateAvatar: string | null;
}

export interface Interviewer {
  userId: string;
  id: string;
  fullName: string | null;
  avatarUrl: string | null;
  company: string | null;
  jobTitle: string | null;
  yearsExp: number;
  ratingAvg: number;
  totalReviews: number;
  linkedinUrl: string | null;
  bio: string | null;
  isVerified: boolean;
  specialties: string[];
  minPrice: number | null;
  serviceOfferings: ServiceOffering[];
  feedbacks: Feedback[];
}

export interface TimeSlot {
  startAt: string; // "09:00"
  endAt: string;   // "10:00"
}

// ─── Server-side (SSR / RSC) — native fetch cho Next.js ISR cache ──────────

/** Lấy danh sách interviewers — Server Component */
export async function fetchInterviewers(): Promise<InterviewerListItem[]> {
  try {
    const res = await fetch(`${SERVER_BASE}/api/v1/interviewers`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : (json.data ?? []);
  } catch {
    return [];
  }
}

/** Lấy chi tiết interviewer — Server Component */
export async function fetchInterviewerDetail(
  userId: string
): Promise<Interviewer | null> {
  try {
    const res = await fetch(
      `${SERVER_BASE}/api/v1/interviewers/${userId}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ─── Client-side — axios (interceptors, auth header) ───────────────────────

/** Lấy danh sách slots trống — Client Component */
export async function fetchAvailableSlots(
  userId: string,
  date: string,
  durationMin: number
): Promise<TimeSlot[]> {
  const { data } = await http.get<TimeSlot[]>(
    API_ENDPOINTS.INTERVIEWER_SLOTS(userId),
    { params: { date, duration: durationMin } }
  );
  return data;
}
