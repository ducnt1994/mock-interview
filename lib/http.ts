import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

/**
 * Axios instance dùng chung toàn project.
 * - Tự gắn baseURL từ env
 * - Request interceptor: thêm Authorization header nếu có token
 * - Response interceptor: unwrap data, handle 401
 */
const http = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// ── Request interceptor ────────────────────────────────────────────────────
http.interceptors.request.use(
  (config) => {
    // Chỉ chạy trên client
    if (typeof window !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((c) => c.startsWith("access_token="))
        ?.split("=")[1];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor ────────────────────────────────────────────────────
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // Xoá token cũ và redirect về login
      document.cookie = "access_token=; Max-Age=0; path=/";
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;
