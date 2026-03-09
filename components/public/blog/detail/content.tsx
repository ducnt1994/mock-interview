import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Share2, Bookmark } from "lucide-react";
import { blogDetail } from "./mock-data";

export default function BlogContent() {
    return (
        <article className="max-w-none">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
                {blogDetail.breadcrumb.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                        {idx > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                        <Link href="#" className="hover:text-primary-600 transition-colors">
                            {item}
                        </Link>
                    </span>
                ))}
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-tight mb-6">
                {blogDetail.title}
            </h1>

            {/* Author + Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src={blogDetail.author.avatar}
                            alt={blogDetail.author.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">{blogDetail.author.name}</p>
                        <p className="text-xs text-gray-400">{blogDetail.date} &middot; {blogDetail.readTime}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
                        <Share2 className="w-4.5 h-4.5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
                        <Bookmark className="w-4.5 h-4.5" />
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden mb-10">
                <Image
                    src={blogDetail.image}
                    alt={blogDetail.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 65vw"
                    priority
                />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none
        prose-headings:font-black prose-headings:text-gray-900
        prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
        prose-li:text-gray-600 prose-li:leading-relaxed
        prose-ul:my-4 prose-ul:pl-6
        prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-25 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-blockquote:font-medium
        prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900
        prose-img:rounded-2xl
      ">
                {blogDetail.content.split("\n\n").map((block, idx) => {
                    const trimmed = block.trim();
                    if (!trimmed) return null;

                    if (trimmed.startsWith("## ")) {
                        return (
                            <h2 key={idx}>{trimmed.replace("## ", "")}</h2>
                        );
                    }

                    if (trimmed.startsWith("> ")) {
                        return (
                            <blockquote key={idx}>
                                <p>{trimmed.replace(/^> "?|"?$/g, "")}</p>
                            </blockquote>
                        );
                    }

                    if (trimmed.startsWith("- ")) {
                        const items = trimmed.split("\n").map((line) => line.replace(/^- /, ""));
                        return (
                            <ul key={idx}>
                                {items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        );
                    }

                    return <p key={idx}>{trimmed}</p>;
                })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-12 pt-8 border-t border-gray-100">
                {blogDetail.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-lg border border-gray-100 hover:border-primary-200 hover:text-primary-600 transition-colors cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
