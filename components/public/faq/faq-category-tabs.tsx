import { FAQCategory } from "./mock-data";

interface FAQCategoryTabsProps {
  categories: FAQCategory[];
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
}

const FAQCategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: FAQCategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 md:mb-12">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === null
            ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
            : "bg-white text-slate-600 border border-slate-200 hover:border-primary-200 hover:text-primary-600"
          }`}
      >
        Tất cả
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeCategory === cat.id
              ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
              : "bg-white text-slate-600 border border-slate-200 hover:border-primary-200 hover:text-primary-600"
            }`}
        >
          <span>{cat.icon}</span>
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default FAQCategoryTabs;
