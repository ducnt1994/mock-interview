const Testimonial = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight italic">
          This platform is a game-changer. I went from constant rejections to 3 offers in 2 weeks.
        </h3>
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border-4 border-primary/10 p-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqJVlIqIMsHkG7hNE8caTwLpgQpGfRoLYM6s-iyEL5kpifs5SXZHasP37Bjzl3W8_HBQ52VZMISIrPuj6Nx9zSQ73rGmpu_rJMm4wDR5ESl6Osq6rSVMQsVlIEoaXU6RESqdqKk_zshFr_tMfpbuWfL4AIPCxENK0x3p33MbXzRYju7ebgbdAk0Wc7V3ieuUWM9vWkfEyhUxws0dhKcaam_UrNFBFO3ErhLOBvzTCvIXWv2SQmL0Cp-L0Qx9mJcxEra-iIZ0ZsN0U"
              alt="User"
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-slate-900">Mark Henderson</p>
            <p className="text-slate-500">Software Engineer at Major Tech Corp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;