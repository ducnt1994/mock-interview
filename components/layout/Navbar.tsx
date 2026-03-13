import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const listMenu = [
    {
      name: "Người phỏng vấn",
      href: "/interviewers"
    },
    {
      name: "Bài viết",
      href: "/bai-viet"
    },
    {
      name: "Trở thành người phỏng vấn",
      href: "/tro-thanh-nguoi-phong-van"
    },
    {
      name: "FAQ",
      href: "/faq"
    },
    {
      name: "Liên hệ",
      href: "/lien-he"
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 xl:px-0">
      <div className="mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex gap-2 text-primary">
          <span className="text-xl font-bold tracking-tight text-slate-900">Khu vực logo</span>
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
            <Button variant={'default'} className={'shadow-2xl'} size={'lg'}>
              <span className={'font-bold'}>Đặt lịch ngay</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;