"use client";

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
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  {
    label: "Tổng quan",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Lịch phỏng vấn",
    href: "/bookings",
    icon: CalendarCheck,
  },
  {
    label: "Buổi phỏng vấn",
    href: "/interviews",
    icon: ClipboardList,
  },
  {
    label: "Phản hồi",
    href: "/feedback",
    icon: MessageSquareText,
  },
  {
    label: "Cài đặt",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo area */}
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
            onClick={() => {
              setCollapsed(!collapsed);
              setMobileOpen(false);
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/dashboard" && pathname.startsWith(link.href));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                      collapsed && "justify-center px-0",
                      isActive
                        ? "bg-primary-50 text-primary-700 font-semibold"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    <link.icon
                      className={cn(
                        "size-5 flex-shrink-0",
                        isActive ? "text-primary-600" : "text-slate-400"
                      )}
                    />
                    {!collapsed && <span>{link.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="px-3 pb-4">
          <Separator className="mb-3" />

          {/* User profile */}
          <div className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-xl",
            collapsed && "justify-center px-0"
          )}>
            <div className="size-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 flex-shrink-0">
              H
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">hyn</p>
                <p className="text-xs text-slate-400 truncate">hyn@email.com</p>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
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
