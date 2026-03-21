"use client";

import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, ChevronDown, CalendarDays } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth, type UserRole } from "@/hooks/useAuth";

/** Priority: admin > interviewer > candidate */
const ROLE_PRIORITY: UserRole[] = ["admin", "interviewer", "candidate"];

/** Route dashboard tương ứng với từng role */
const DASHBOARD_ROUTE: Record<UserRole, string> = {
  admin: "/admin/dashboard",
  interviewer: "/interviewer/dashboard",
  candidate: "/candidate",
};

/** Label nút quản trị theo role */
const DASHBOARD_LABEL: Record<UserRole, string> = {
  admin: "Quản trị",
  interviewer: "Dashboard interviewer",
  candidate: "Trang cá nhân",
};

/** Lấy role ưu tiên cao nhất từ roles[] */
function getPrimaryRole(roles: UserRole[]): UserRole {
  return ROLE_PRIORITY.find((r) => roles.includes(r)) ?? "candidate";
}

export default function UserMenu() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const primaryRole = user ? getPrimaryRole(user.roles) : "candidate";

  if (loading) {
    return (
      <div className="size-8 rounded-full bg-slate-100 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <Button
        variant="default"
        size="lg"
        className="shadow-sm font-bold"
        onClick={() => router.push("/login")}
      >
        Đăng nhập
      </Button>
    );
  }

  const displayName = user.fullName || user.email;
  const initials = (user.fullName || user.email)
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 hover:bg-slate-100 transition-colors focus-visible:outline-none">
          {/* Avatar */}
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={displayName}
              className="size-8 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="size-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 flex-shrink-0">
              {initials}
            </div>
          )}
          <span className="text-sm font-semibold text-slate-800 max-w-[120px] truncate hidden sm:block">
            {displayName}
          </span>
          <ChevronDown className="size-3.5 text-slate-400 hidden sm:block" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="font-normal">
          <p className="text-sm font-semibold text-slate-900 truncate">{displayName}</p>
          <p className="text-xs text-slate-400 truncate">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(DASHBOARD_ROUTE[primaryRole])}
        >
          <LayoutDashboard className="size-4" />
          {DASHBOARD_LABEL[primaryRole]}
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/candidate/bookings")}
        >
          <CalendarDays className="size-4" />
          Quản lý lịch
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
          onClick={logout}
        >
          <LogOut className="size-4" />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
