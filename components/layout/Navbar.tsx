"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/layout/UserMenu";

const listMenu = [
  { name: "Người phỏng vấn", href: "/interviewers" },
  { name: "Bài viết", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 xl:px-0">
      <div className="mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex gap-2 text-primary">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            DiPhongVan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {listMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" className="font-semibold" asChild>
              <Link href="/interviewers">Đặt lịch ngay</Link>
            </Button>
            <UserMenu />
          </div>
        </div>

        {/* Mobile: chỉ hiển thị UserMenu */}
        <div className="flex md:hidden">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;