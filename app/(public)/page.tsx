"use client";
import React, {useState} from 'react';
import {
  Search,
  CheckCircle2,
  Calendar,
  Video,
  ClipboardCheck,
  Star,
  TrendingUp,
  BrainCircuit,
  Award,
  ArrowRight,
  Menu,
  X,
  Globe,
  Mail,
  Share2,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <ShieldCheck className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-slate-900">InterviewPrep</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {['How it works', 'Benefits', 'Interviewers', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors">
              Login
            </button>
            <button className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {['How it works', 'Benefits', 'Interviewers', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-lg font-semibold text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <hr className="border-slate-100" />
          <button className="w-full py-3 bg-primary text-white font-bold rounded-lg">Get Started</button>
          <button className="w-full py-3 text-slate-900 font-bold">Login</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Elevate Your Career</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Master Your Next Big Interview with <span className="text-primary">Pros</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Connect with industry experts for realistic mock interviews and actionable feedback to land your dream job at top-tier global companies.
            </p>
          </div>

          <div className="p-2 bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100">
            <form className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
                <Globe className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ngành nghề"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Vị trí"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium"
                />
              </div>
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Tìm kiếm
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-${i*100 + 100}`} />
              ))}
            </div>
            <p>Joined by <span className="font-bold text-slate-900">10,000+</span> candidates this month</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-3xl" />
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/50">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnA7SNzehpfBuAJZW7weO310jVLXtr5nxbDfyk9EVdnB_OFo0jfzYZdUSqsyyU5Mjz2jZVkaPf_COEYjcCDdBtFjxnHF5jsZP4-6qO7pCZpqI8X-lcBKBuQcr2Y9qTDLoOV0qSWTvzB-UvQmxo0yDdzNuuAFJmVTT8hWAAwJPVsdTwDCfxDh6Yqd0Kd8VkgNeDACfPs-LUaNKjLWf11HU7Gz0PutIna-ixFogmz2nsu4WBPcnoCjycE0Z68RbXASxAmY559IaLN_Y"
              alt="Professional Interview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Session</p>
                  <p className="text-sm font-bold text-slate-900">Feedback: Strong technical communication</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-slate-50 transition-all group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoZBdQELXcrViOwgldkai3WS0tTJ0OcmgifS4IIE03cqkr8pEQ-mqmAxtpY30kaMngoWwqRaaq5hlPJ4nu3sdx1b2lRpjCsemnjG3NdcGw3LqUlWiXmhx4x4n2fyoaOOltZLihoneglczT5UFpZP-Noo-EuFWTbnDkAEPCdi-wH7GcfLJeQHm6ibiqad6OZdNaYGBJDRDHu9ma_g4rGVRiup8DG1EPJftCRZEf1tGXrDBn4kX3iIOkhNwhu5RbhD5aVmK1hg0cFSM"
                alt="Candidate"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 bg-primary rounded-2xl shadow-xl text-white">
              <p className="text-5xl font-black mb-1">90%</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Success Rate</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPg8WdTW3f3k6eRvLM7Xq_qJxNz2IXlQvOfiFciUZdWyshH-8FedSSHDka_Ki__8LjageVp672WD7VdsG-dLdWs1GFw1moKfCWzXsOEQd8K1GllWiQrU_PFJhEMijYSb-kzj3vWHHkWKiWvz_lo72p2TzaGpQ5ecuEnHaO7I7RZCG6pIHeGzfpJ-uGDR2wYOZVTpR9fZ3o4GBRKlCoR54aDCWmcgK0mzvL3q6v-2he6-njovGuyerDNyPcTF-vSQynpZtJL2nNes"
                alt="Whiteboard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-primary/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ffPSt83MgPaAAhuYx7mNg47ICvD9tKl1AJBO6JzMIRpgdJfOALL5pRPCSpxj5jR9Pzt27uID_BlDkRwlRMyp6D6cSdjQfN0NroCN1UAn60R-uj8OV0J93shcW_cfhYjVBjPc_va-gdlt_XvIpq6LA0jySRgPzW86fBGYNU6m2PGHk-DnWOpBNvwsk4L4FXx_jsfW12PuI1qwLf2JKP0oQcDpO3phZIOUkq90ynhI9r52f0ehLSv9QSeOtN6LbLVVKHWEVQZZ5aI"
                alt="Pattern"
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Advantages</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why Choose Our Platform?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">We provide the most realistic environment for your interview preparation with mentors who actually hire.</p>
          </div>

          <div className="space-y-8">
            {[
              { icon: <Star className="w-6 h-6" />, title: "Expert Feedback", desc: "Get direct insights from hiring managers at top-tier tech giants." },
              { icon: <BrainCircuit className="w-6 h-6" />, title: "Realistic Environment", desc: "Practice in a stress-free yet professional setting using actual tools and platforms." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Rapid Career Growth", desc: "90% of our users report significantly higher confidence in their real interviews." }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Interviewers = () => {
  const experts = [
    {
      name: "Alex Chen",
      role: "Staff Engineer @ Tech Global",
      rating: 4.9,
      tags: ["System Design", "Algorithms"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPGBLYWmV9Hsd8URzPWs4vHRs-KxCS-ITksVS-kmqpIZi8LXKBUkI6gdjkPYzzVmzE4xvYC2f_nSqX2c2wQ0w6Uhx0alTcCfWn-RmFzKnQATfuYKdM-fdXGMrglxxm9wTnSxxZQBjQUsiA1o0uGKKFuadx3JFrO2bZkDM4wKprY1aNLrfQQNTHyerCZ4Q6JdVJ8gPo69hXT6amUdfXov_TIu9byM9P7erjAm1YCqjAwHEMQ1VwXQZvYq7cRnqmboboG1umZgtZXE"
    },
    {
      name: "Sarah Jenkins",
      role: "Product Design Lead @ Social Connect",
      rating: 5.0,
      tags: ["UX Design", "Portfolio"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4axdScLRog6_2SYHjAWqhuS6o7fIViz4VuLyxJkRuTwPqUBABkj9su8A5fScJEkCJcG7N8sxe7UlQkIrQshzdSyvfWBHikv6CxNyRz2CF2fcAll4LmZCg2SZLNa1P6r1SIA_y08p0TUXz25FQmc8NnWjkBNcysfvnAS5Klysg8QoOqBrSGknSTI1QqiXqTW4nifKNfEM7KRcp_A4koAMH_TKDA0Ym3YfIJY42Bt8cSU_CdUGunHReQgiKQHDHUbYG_zA_dFHBH4M"
    },
    {
      name: "David Miller",
      role: "Director of PM @ Retail Giant",
      rating: 4.8,
      tags: ["Leadership", "Product Strategy"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-4kGtuayD61YZzS5AO8ecVzg4RTVHCnFDZwx6-AEHov30RS5zSc0tS_yiqtn5kcDsYEIx6DHCpxD0xrCAi33b1WDDz2Q27C_C-giTXvuArPlojR_2ut-hL5g1S9florvdJ5sM2IjDB9mASKzM9KY8Vov2oVoNs6aGsuuazcXkaG1-XqusJYcuaox448YE6LjHcUOF6F5Bn8oyXcOYqyxdbNUzp5ZAKs-9JS5pMbUTC-vRjbxUEVF7c1cBwvGYNagl5Zyf6Lsvr0"
    },
    {
      name: "Elena Rodriguez",
      role: "Snr. Recruiter @ Streaming Plus",
      rating: 4.9,
      tags: ["Behavioral", "Negotiation"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcWnvHUdYBZTZgbGm9CkwKrCdZgidkL3TaO7jC3DI7KFQSJjmyOuX5SjIqHxIm4kIrP-BckpNuYEiyVg8ZCLmATyV9TjKhPJIRiNvIa0rXVz9ziklV3SXtGVxM5W9FSQ93sbTn27yTrin56AeY5JkA6RTHAvx0SHlPPS9MVshByy3kbUFsthA5SXjk6JBWPkKnw2vz-j_ixrua8fgheNuXhm07-uGzPH17gIFk0pd_S3h9Orvkg_ofHH8MStyAe_IzniaCo2Y2d4E"
    }
  ];

  return (
    <section id="interviewers" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Our Mentors</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Featured Interviewers</h2>
          </div>
          <button className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all group">
            View all 500+ Experts <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-bold text-slate-900">{expert.name}</h4>
                  <div className="flex items-center gap-1 text-green-700 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" /> {expert.rating}
                  </div>
                </div>
                <p className="text-primary text-sm font-semibold">{expert.role}</p>
                <div className="flex flex-wrap gap-2">
                  {expert.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase text-slate-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">InterviewPrep</span>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-sm">
            Connecting ambitious candidates with top-tier industry experts for realistic mock interviews and personalized feedback.
          </p>
          <div className="flex gap-4">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {[
          { title: "Platform", links: ["How it works", "Interviewers", "Success Stories", "Pricing"] },
          { title: "Company", links: ["About Us", "Careers", "Blog", "Press Kit"] },
          { title: "Support", links: ["Help Center", "Terms", "Privacy", "Cookie Policy"] }
        ].map((col, i) => (
          <div key={i} className="space-y-6">
            <h4 className="font-bold text-slate-900">{col.title}</h4>
            <ul className="space-y-4">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-medium">
        <p>© 2024 InterviewPrep Inc. All rights reserved.</p>
        <p>Built with precision for the modern workforce.</p>
      </div>
    </footer>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Interviewers />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
