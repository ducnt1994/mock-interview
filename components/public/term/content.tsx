import { CheckCircle2, Mail, Headphones } from "lucide-react";
import { termsSections } from "./mock-data";

type ContentBlock =
    | { type: "text"; value: string }
    | { type: "highlight"; value: string }
    | { type: "list"; items: { bold: string; text: string }[] }
    | { type: "cards"; items: { title: string; text: string }[] }
    | { type: "contact"; items: { label: string; value: string; icon: string }[] };

export default function TermContent() {
    const renderBlock = (block: ContentBlock, idx: number) => {
        switch (block.type) {
            case "text":
                return (
                    <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                        {block.value}
                    </p>
                );

            case "highlight":
                return (
                    <div
                        key={idx}
                        className="bg-primary-25 border-l-4 border-primary-500 rounded-r-xl px-6 py-5 my-6"
                    >
                        <p className="text-gray-700 text-sm leading-relaxed font-medium italic">
                            {block.value}
                        </p>
                    </div>
                );

            case "list":
                return (
                    <div key={idx} className="space-y-4 my-5 pl-1">
                        {block.items.map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-1.5" />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <span className="font-bold text-gray-900">{item.bold}</span>{" "}
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                );

            case "cards":
                return (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        {block.items.map((item, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 border border-gray-100 rounded-xl p-5"
                            >
                                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                );

            case "contact":
                return (
                    <div
                        key={idx}
                        className="bg-primary-500 rounded-2xl p-6 mt-6 flex flex-col sm:flex-row gap-4"
                    >
                        {block.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 flex-1">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                    {item.icon === "mail" ? (
                                        <Mail className="w-5 h-5 text-white" />
                                    ) : (
                                        <Headphones className="w-5 h-5 text-white" />
                                    )}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                                        {item.label}
                                    </p>
                                    <p className="text-white font-bold text-sm">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Terms & Privacy Policy
            </h1>
            <p className="text-sm text-gray-400 mb-10">
                Last updated: October 24, 2023
            </p>

            <div className="space-y-12">
                {termsSections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900">
                                {section.number}. {section.title}
                            </h2>
                        </div>

                        <div className="pl-11">
                            {(section.content as ContentBlock[]).map((block, idx) =>
                                renderBlock(block, idx)
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
