"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { saveTokens } from "@/lib/auth";

function decodeRole(token: string): string | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload?.role ?? null;
  } catch {
    return null;
  }
}

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const isNewUser = searchParams.get("isNewUser") === "true";

    if (!accessToken || !refreshToken) {
      router.replace("/login");
      return;
    }

    saveTokens(accessToken, refreshToken);

    const role = decodeRole(accessToken);

    // Admin không cần complete-profile — vào dashboard luôn
    if (role === "admin") {
      window.location.href = "/admin/dashboard";
      return;
    }

    if (isNewUser) {
      window.location.href = "/login/complete-profile";
      return;
    }

    window.location.href = "/candidate";
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="size-8 animate-spin rounded-full border-4 border-slate-200 border-t-primary-500" />
        <p className="text-sm text-slate-500">Đang xử lý đăng nhập...</p>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <span className="size-8 animate-spin rounded-full border-4 border-slate-200 border-t-primary-500" />
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
