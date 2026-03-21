/** Global API endpoint constants */
export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: "/auth/login",
  AUTH_REFRESH: "/auth/refresh",
  AUTH_LOGOUT: "/auth/logout",
  AUTH_GOOGLE: "/auth/google",

  // Interviewers (public)
  INTERVIEWERS: "/interviewers",
  INTERVIEWER_DETAIL: (userId: string) => `/interviewers/${userId}`,
  INTERVIEWER_SLOTS: (userId: string) =>
    `/interviewers/${userId}/available-slots`,

  // Bookings
  BOOKINGS: "/bookings",
  BOOKING_DETAIL: (id: string) => `/bookings/${id}`,

  // Candidate
  CANDIDATE_BOOKINGS: "/candidate/bookings",
  CANDIDATE_RECOMMENDED: "/candidate/recommended-interviewers",
} as const;
