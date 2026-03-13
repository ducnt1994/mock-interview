"use client";

import { useState, useMemo } from "react";
import { faqCategories } from "./mock-data";
import FAQHero from "./faq-hero";
import FAQCategoryTabs from "./faq-category-tabs";
import FAQAccordionList from "./faq-accordion-list";
import CTA from "@/components/shared/CTA";

const FAQContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return faqCategories
      .filter((cat) => !activeCategory || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (q) =>
            !query ||
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [searchQuery, activeCategory]);

  return (
    <>
      <FAQHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <section className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <FAQCategoryTabs
          categories={faqCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <FAQAccordionList categories={filteredCategories} />
      </section>

      <CTA
        title="Không tìm thấy câu trả lời?"
        description="Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của bạn trong thời gian ngắn nhất."
        primaryButtonText="Liên hệ hỗ trợ"
        secondaryButtonText=""
      />
    </>
  );
};

export default FAQContent;
