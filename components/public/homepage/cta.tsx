const CTA = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[60px] border-white rounded-full" />
        </div>

        <div className="relative z-10 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to Land Your Dream Job?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Join thousands of professionals who improved their interview performance by 75% in their first session.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-white text-primary font-bold text-lg rounded-2xl shadow-xl hover:scale-105 transition-transform">
              Start Your Preparation
            </button>
            <button className="px-10 py-5 bg-primary-hover/50 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all">
              Browse Interviewers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;