import { Globe, Search, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section-padding overflow-hidden pt-4 md:pt-10 lg:pt-20 pb-4 md:pb-10 lg:pb-20 bg-neutral-landing px-4 xl:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left: Text content */}
        <div className="flex flex-col gap-4 md:gap-8 flex-1 w-full">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Nâng tầm sự nghiệp của bạn</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Chinh phục mọi buổi phỏng vấn cùng <span className="text-primary-500">chuyên gia</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Luyện phỏng vấn thực tế cùng chuyên gia trong ngành. Nhận phản hồi chi tiết để tự tin ứng tuyển vào các công ty hàng đầu.
            </p>
          </div>

          <div className="p-2 bg-white rounded-2xl border border-slate-100">
            <form className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b sm:border-b-0 sm:border-r border-slate-100">
                <Globe className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Ngành nghề"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Vị trí"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium"
                />
              </div>
              <Button size={'lg'} className="w-full sm:w-auto">
                <Search className="w-5 h-5" />
                <span className={'font-bold'}>Tìm kiếm</span>
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-3 shrink-0">
              {[1, 2, 3].map((i) => (
                <Avatar key={i}>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                    width={40}
                    height={40}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p>Hơn <span className="font-bold text-slate-900">10.000</span> ứng viên đã tham gia trong tháng này</p>
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="relative w-full max-w-sm lg:max-w-none lg:w-[400px] xl:w-[536px] shrink-0 lg:block hidden">

          <div className="relative aspect-square rounded-3xl" id="right-side">
            <div className="relative m-4 h-[calc(100%-2rem)] drop-shadow-2xl">
              <Image
                src="/images/landing-page/hero.webp"
                alt="Luyện phỏng vấn thực tế cùng chuyên gia"
                fill
                className="object-cover rounded-2xl"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-2xl border border-white/30 bg-white/55 backdrop-blur-xl shadow-xl">
                <div className="flex   items-center gap-3 sm:gap-4 p-3 sm:p-4">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Phiên trực tiếp
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Nhận xét: Kỹ năng giao tiếp kỹ thuật tốt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
