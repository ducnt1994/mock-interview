"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  MessageSquareText,
  ClipboardList,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronDown,
  Menu,
  Users,
  UserRound,
  Search,
  DollarSign,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useAuth, type UserRole } from "@/hooks/useAuth";

interface NavItem {
  label: string;
  href?: string;
  icon: React.ElementType;
  children?: { label: string; href: string }[];
}

interface NavSection {
  role: UserRole;
  title: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    role: "admin",
    title: "Quản trị",
    items: [
      { label: "Tổng quan", href: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Lịch phỏng vấn", href: "/admin/bookings", icon: CalendarCheck },
      { label: "Buổi phỏng vấn", href: "/admin/interviews", icon: ClipboardList },
      {
        label: "Người dùng",
        icon: Users,
        children: [{ label: "Ứng viên", href: "/admin/users/candidates" }],
      },
      { label: "Phản hồi", href: "/admin/feedback", icon: MessageSquareText },
      { label: "Cài đặt", href: "/admin/settings", icon: Settings },
    ],
  },
  {
    role: "candidate",
    title: "Ứng viên",
    items: [
      { label: "Tổng quan", href: "/candidate/dashboard", icon: LayoutDashboard },
      { label: "Lịch đã đặt", href: "/candidate/bookings", icon: CalendarCheck },
      { label: "Tìm interviewer", href: "/interviewers", icon: Search },
      { label: "Đánh giá của tôi", href: "/candidate/reviews", icon: Star },
    ],
  },
  {
    role: "interviewer",
    title: "Người phỏng vấn",
    items: [
      { label: "Tổng quan", href: "/interviewer/dashboard", icon: LayoutDashboard },
      { label: "Lịch phỏng vấn", href: "/interviewer/bookings", icon: CalendarCheck },
      { label: "Cài đặt lịch", href: "/interviewer/availability", icon: Clock },
      { label: "Thu nhập", href: "/interviewer/payouts", icon: DollarSign },
      { label: "Cài đặt", href: "/interviewer/settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(
    () => new Set(["Người dùng"])
  );
  const { user, logout } = useAuth();

  const displayName = user?.fullName || user?.email || "—";
  const initials = (user?.fullName || user?.email || "?")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // Chỉ hiển thị sections mà user có role tương ứng
  const visibleSections = NAV_SECTIONS.filter((s) =>
    user?.roles?.includes(s.role)
  );

  const renderNavItem = (item: NavItem) => {
    if (item.children) {
      const expanded = expandedMenus.has(item.label);
      const anyChildActive = item.children.some((c) => isActive(c.href));
      return (
        <li key={item.label}>
          <button
            onClick={() => !collapsed && toggleMenu(item.label)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
              collapsed && "justify-center px-0",
              anyChildActive
                ? "bg-primary-50 text-primary-700"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            )}
          >
            <item.icon className={cn("size-5 flex-shrink-0", anyChildActive ? "text-primary-600" : "text-slate-400")} />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronDown className={cn("size-3.5 transition-transform", expanded && "rotate-180")} />
              </>
            )}
          </button>
          {!collapsed && expanded && (
            <ul className="mt-1 ml-4 pl-3 border-l border-slate-100 flex flex-col gap-0.5">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all",
                      isActive(child.href)
                        ? "text-primary-700 font-semibold bg-primary-50"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    <UserRound className="size-3.5 flex-shrink-0" />
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.href}>
        <Link
          href={item.href!}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
            collapsed && "justify-center px-0",
            isActive(item.href!)
              ? "bg-primary-50 text-primary-700 font-semibold"
              : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
          )}
        >
          <item.icon className={cn("size-5 flex-shrink-0", isActive(item.href!) ? "text-primary-600" : "text-slate-400")} />
          {!collapsed && <span>{item.label}</span>}
        </Link>
      </li>
    );
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white border border-slate-200 rounded-xl p-2 shadow-md"
      >
        <Menu className="size-5 text-slate-600" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-white border-r border-slate-100 flex flex-col transition-all duration-300",
          collapsed ? "w-[72px]" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className={cn(
          "flex items-center h-16 px-4 border-b border-slate-100",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <Link href="/" className="text-lg font-bold text-slate-900 tracking-tight">
              DiPhongVan
            </Link>
          )}
          <button
            onClick={() => { setCollapsed(!collapsed); setMobileOpen(false); }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
          </button>
        </div>

        {/* Nav — role-based sections */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          {visibleSections.map((section, idx) => (
            <div key={section.role} className={cn(idx > 0 && "mt-4")}>
              {/* Section header */}
              {!collapsed && visibleSections.length > 1 && (
                <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  {section.title}
                </p>
              )}
              <ul className="flex flex-col gap-1">
                {section.items.map(renderNavItem)}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom user + logout */}
        <div className="px-3 pb-4">
          <Separator className="mb-3" />
          <div className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-xl",
            collapsed && "justify-center px-0"
          )}>
            {user?.avatarUrl ? (
              <img src={user.avatarUrl} alt={displayName} className="size-8 rounded-full object-cover flex-shrink-0" />
            ) : (
              <div className="size-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 flex-shrink-0">
                {initials}
              </div>
            )}
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{displayName}</p>
                <p className="text-xs text-slate-400 truncate">
                  {user?.roles?.join(", ")}
                </p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            onClick={logout}
            className={cn(
              "w-full mt-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl",
              collapsed ? "justify-center px-0" : "justify-start"
            )}
          >
            <LogOut className="size-4" />
            {!collapsed && <span className="ml-2 text-sm">Đăng xuất</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}
