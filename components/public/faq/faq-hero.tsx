import { Search } from "lucide-react";

interface FAQHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const FAQHero = ({ searchQuery, onSearchChange }: FAQHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 size-40 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 size-60 rounded-full bg-primary-100/30 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
          💬 Hỗ trợ
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
          Câu hỏi thường gặp
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-8">
          Tìm câu trả lời nhanh cho những thắc mắc phổ biến về dịch vụ phỏng vấn thử của chúng tôi.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
