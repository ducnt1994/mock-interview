import { Star, BrainCircuit, TrendingUp } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-neutral-landing px-4 xl:px-0 py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="space-y-3 md:space-y-4 pt-6 md:pt-12">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoZBdQELXcrViOwgldkai3WS0tTJ0OcmgifS4IIE03cqkr8pEQ-mqmAxtpY30kaMngoWwqRaaq5hlPJ4nu3sdx1b2lRpjCsemnjG3NdcGw3LqUlWiXmhx4x4n2fyoaOOltZLihoneglczT5UFpZP-Noo-EuFWTbnDkAEPCdi-wH7GcfLJeQHm6ibiqad6OZdNaYGBJDRDHu9ma_g4rGVRiup8DG1EPJftCRZEf1tGXrDBn4kX3iIOkhNwhu5RbhD5aVmK1hg0cFSM"
                alt="Ứng viên luyện phỏng vấn"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 md:p-8 bg-primary-500 rounded-2xl shadow-xl text-white">
              <p className="text-3xl md:text-5xl font-black mb-1">90%</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80">Tỉ lệ thành công</p>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPg8WdTW3f3k6eRvLM7Xq_qJxNz2IXlQvOfiFciUZdWyshH-8FedSSHDka_Ki__8LjageVp672WD7VdsG-dLdWs1GFw1moKfCWzXsOEQd8K1GllWiQrU_PFJhEMijYSb-kzj3vWHHkWKiWvz_lo72p2TzaGpQ5ecuEnHaO7I7RZCG6pIHeGzfpJ-uGDR2wYOZVTpR9fZ3o4GBRKlCoR54aDCWmcgK0mzvL3q6v-2he6-njovGuyerDNyPcTF-vSQynpZtJL2nNes"
                alt="Buổi phỏng vấn thực tế"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-primary/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ffPSt83MgPaAAhuYx7mNg47ICvD9tKl1AJBO6JzMIRpgdJfOALL5pRPCSpxj5jR9Pzt27uID_BlDkRwlRMyp6D6cSdjQfN0NroCN1UAn60R-uj8OV0J93shcW_cfhYjVBjPc_va-gdlt_XvIpq6LA0jySRgPzW86fBGYNU6m2PGHk-DnWOpBNvwsk4L4FXx_jsfW12PuI1qwLf2JKP0oQcDpO3phZIOUkq90ynhI9r52f0ehLSv9QSeOtN6LbLVVKHWEVQZZ5aI"
                alt="Nền tảng luyện tập"
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Lợi ích</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Tại sao chọn nền tảng của chúng tôi?</h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">Môi trường luyện tập thực tế nhất cùng các chuyên gia tuyển dụng hàng đầu trong ngành.</p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              { icon: <Star className="w-5 h-5 text-primary-500" />, title: "Phản hồi từ chuyên gia", desc: "Nhận nhận xét trực tiếp từ các hiring manager tại các công ty công nghệ hàng đầu." },
              { icon: <BrainCircuit className="w-5 h-5 text-primary-500" />, title: "Môi trường thực tế", desc: "Luyện tập trong môi trường chuyên nghiệp với đúng công cụ và nền tảng thực tế." },
              { icon: <TrendingUp className="w-5 h-5 text-primary-500" />, title: "Phát triển sự nghiệp nhanh", desc: "90% người dùng tự tin hơn đáng kể sau khi phỏng vấn thực tế." }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 md:gap-5">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900">{benefit.title}</h4>
                  <p className="text-sm md:text-base text-slate-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;