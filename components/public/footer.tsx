import {Globe, Mail, Share2} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-10 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-14 lg:mb-20">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl font-bold tracking-tight text-slate-900">Khu vực logo</span>
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-6 md:pt-8 lg:pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs text-slate-400 font-medium">
        <p>© 2024 InterviewPrep Inc. All rights reserved.</p>
        <p>Built with precision for the modern workforce.</p>
      </div>
    </footer>
  );
};

export default Footer;