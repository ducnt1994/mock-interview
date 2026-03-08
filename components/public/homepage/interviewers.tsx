import { ArrowRight, Star } from "lucide-react";
import React from "react";

const Interviewers = () => {
  const experts = [
    {
      name: "Alex Chen",
      role: "Staff Engineer @ Tech Global",
      rating: 4.9,
      tags: ["Thiết kế hệ thống", "Thuật toán"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPGBLYWmV9Hsd8URzPWs4vHRs-KxCS-ITksVS-kmqpIZi8LXKBUkI6gdjkPYzzVmzE4xvYC2f_nSqX2c2wQ0w6Uhx0alTcCfWn-RmFzKnQATfuYKdM-fdXGMrglxxm9wTnSxxZQBjQUsiA1o0uGKKFuadx3JFrO2bZkDM4wKprY1aNLrfQQNTHyerCZ4Q6JdVJ8gPo69hXT6amUdfXov_TIu9byM9P7erjAm1YCqjAwHEMQ1VwXQZvYq7cRnqmboboG1umZgtZXE"
    },
    {
      name: "Sarah Jenkins",
      role: "Product Design Lead @ Social Connect",
      rating: 5.0,
      tags: ["Thiết kế UX", "Portfolio"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4axdScLRog6_2SYHjAWqhuS6o7fIViz4VuLyxJkRuTwPqUBABkj9su8A5fScJEkCJcG7N8sxe7UlQkIrQshzdSyvfWBHikv6CxNyRz2CF2fcAll4LmZCg2SZLNa1P6r1SIA_y08p0TUXz25FQmc8NnWjkBNcysfvnAS5Klysg8QoOqBrSGknSTI1QqiXqTW4nifKNfEM7KRcp_A4koAMH_TKDA0Ym3YfIJY42Bt8cSU_CdUGunHReQgiKQHDHUbYG_zA_dFHBH4M"
    },
    {
      name: "David Miller",
      role: "Director of PM @ Retail Giant",
      rating: 4.8,
      tags: ["Lãnh đạo", "Chiến lược sản phẩm"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-4kGtuayD61YZzS5AO8ecVzg4RTVHCnFDZwx6-AEHov30RS5zSc0tS_yiqtn5kcDsYEIx6DHCpxD0xrCAi33b1WDDz2Q27C_C-giTXvuArPlojR_2ut-hL5g1S9florvdJ5sM2IjDB9mASKzM9KY8Vov2oVoNs6aGsuuazcXkaG1-XqusJYcuaox448YE6LjHcUOF6F5Bn8oyXcOYqyxdbNUzp5ZAKs-9JS5pMbUTC-vRjbxUEVF7c1cBwvGYNagl5Zyf6Lsvr0"
    },
    {
      name: "Elena Rodriguez",
      role: "Snr. Recruiter @ Streaming Plus",
      rating: 4.9,
      tags: ["Phỏng vấn hành vi", "Thương lượng"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcWnvHUdYBZTZgbGm9CkwKrCdZgidkL3TaO7jC3DI7KFQSJjmyOuX5SjIqHxIm4kIrP-BckpNuYEiyVg8ZCLmATyV9TjKhPJIRiNvIa0rXVz9ziklV3SXtGVxM5W9FSQ93sbTn27yTrin56AeY5JkA6RTHAvx0SHlPPS9MVshByy3kbUFsthA5SXjk6JBWPkKnw2vz-j_ixrua8fgheNuXhm07-uGzPH17gIFk0pd_S3h9Orvkg_ofHH8MStyAe_IzniaCo2Y2d4E"
    }
  ];

  return (
    <section id="interviewers" className="section-padding bg-slate-50/50 px-4 xl:px-0 py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="space-y-3 md:space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-500">Chuyên gia của chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Người phỏng vấn nổi bật</h2>
          </div>
          <button className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all group shrink-0">
            Xem 500+ chuyên gia <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {experts.map((expert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-44 md:h-56 overflow-hidden">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-base md:text-lg font-bold text-slate-900">{expert.name}</h4>
                  <div className="flex items-center gap-1 text-green-700 font-bold text-sm shrink-0 ml-2">
                    <Star className="w-4 h-4 fill-current" /> {expert.rating}
                  </div>
                </div>
                <p className="text-primary text-xs md:text-sm font-semibold">{expert.role}</p>
                <div className="flex flex-wrap gap-2">
                  {expert.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase text-slate-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interviewers;