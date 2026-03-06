import { Calendar, Video, ClipboardCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "1. Book a Session",
      desc: "Choose from our pool of expert interviewers from top tech companies at your preferred time."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "2. Mock Interview",
      desc: "Engage in a realistic 1:1 video interview tailored to your specific role and target company."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "3. Get Feedback",
      desc: "Receive a detailed performance report with specific areas to improve and a clear roadmap."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Simple steps to accelerate your career growth and gain interview confidence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-slate-50 transition-all group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
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