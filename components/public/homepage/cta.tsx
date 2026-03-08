const CTA = () => {
  return (
    <section className="px-4 md:px-6 pb-10 pt-4 md:pt-10 lg:pt-16 xl:pt-20 md:pb-16 lg:pb-24 bg-neutral-landing">
      <div className="max-w-6xl mx-auto bg-primary-500 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[60px] border-white rounded-full" />
        </div>

        <div className="relative z-10 space-y-6 md:space-y-10">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight">Sẵn sàng chinh phục công việc mơ ước?</h2>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">Hàng nghìn ứng viên đã cải thiện kỹ năng phỏng vấn lên 75% chỉ sau buổi đầu tiên.</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            <button className="px-6 py-4 md:px-10 md:py-5 bg-white text-primary font-bold text-base md:text-lg rounded-2xl shadow-xl hover:scale-105 transition-transform">
              Bắt đầu luyện tập ngay
            </button>
            <button className="px-6 py-4 md:px-10 md:py-5 bg-primary-hover/50 backdrop-blur-md border border-white/20 text-white font-bold text-base md:text-lg rounded-2xl hover:bg-white/10 transition-all">
              Xem danh sách chuyên gia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;