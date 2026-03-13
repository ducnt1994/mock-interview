import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCategory } from "./mock-data";

interface FAQAccordionListProps {
  categories: FAQCategory[];
}

const FAQAccordionList = ({ categories }: FAQAccordionListProps) => {
  if (categories.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">
          Không tìm thấy kết quả
        </h3>
        <p className="text-sm text-slate-500">
          Thử tìm kiếm với từ khóa khác hoặc liên hệ đội hỗ trợ.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {categories.map((category) => (
        <div key={category.id}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {category.title}
              </h2>
              <p className="text-sm text-slate-500">{category.description}</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {category.questions.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white border border-slate-100 rounded-2xl px-5 md:px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:shadow-md data-[state=open]:border-primary-200"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-slate-800 py-4 md:py-5 hover:no-underline hover:text-primary-600 transition-colors [&[data-state=open]]:text-primary-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-slate-600 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordionList;
