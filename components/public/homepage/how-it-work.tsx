import { Calendar, Video, ClipboardCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-6 h-6 text-primary-500" />,
      title: "1. Đặt lịch phỏng vấn",
      desc: "Chọn chuyên gia phỏng vấn từ các công ty công nghệ hàng đầu và đặt lịch theo thời gian bạn muốn."
    },
    {
      icon: <Video className="w-6 h-6 text-primary-500" />,
      title: "2. Phỏng vấn thực tế",
      desc: "Tham gia buổi phỏng vấn 1:1 qua video, được thiết kế riêng theo vị trí và công ty bạn đang nhắm đến."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-primary-500" />,
      title: "3. Nhận phản hồi chi tiết",
      desc: "Nhận báo cáo đánh giá cụ thể, biết rõ điểm cần cải thiện và có lộ trình phát triển rõ ràng."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white px-4 xl:px-0 py-4 md:py-10 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <span className="text-primary-500 text-xs font-bold tracking-[0.2em] uppercase text-primary">Quy trình</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Cách thức hoạt động</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Chỉ 3 bước đơn giản để luyện tập và tự tin hơn trong mỗi buổi phỏng vấn.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-slate-50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-transform">
                {step.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;