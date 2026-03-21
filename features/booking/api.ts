import http from "@/lib/http";
import { API_ENDPOINTS } from "@/constants/api";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "in_progress"
  | "paid";

export interface Booking {
  id: string;
  status: BookingStatus;
  priceAmount: number;
  currency: string;
  cancelledAt: string | null;
  interviewerUserId: string;
  slot: {
    startAt: string | null;
    endAt: string | null;
    durationMin: number;
  };
  serviceOffering: {
    durationMin: number;
    position: string | null;
  } | null;
}

export interface CreateBookingDto {
  interviewerUserId: string;
  serviceOfferingId: string;
  startAt: string; // ISO datetime
  endAt: string;
  durationMin: number;
  candidateNote?: string;
}

/** Lấy danh sách bookings của candidate hiện tại */
export async function fetchCandidateBookings(
  status?: BookingStatus
): Promise<Booking[]> {
  const { data } = await http.get<Booking[]>(API_ENDPOINTS.CANDIDATE_BOOKINGS, {
    params: status ? { status } : undefined,
  });
  return data;
}

/** Tạo booking mới */
export async function createBooking(dto: CreateBookingDto): Promise<Booking> {
  const { data } = await http.post<Booking>(API_ENDPOINTS.BOOKINGS, dto);
  return data;
}

/** Huỷ booking */
export async function cancelBooking(bookingId: string): Promise<void> {
  await http.delete(API_ENDPOINTS.BOOKING_DETAIL(bookingId));
}
