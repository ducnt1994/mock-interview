import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { relatedArticles } from "./mock-data";

export default function BlogSidebar() {
    return (
        <aside className="space-y-8">
            {/* Search Blog */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blog</h3>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm text-gray-900 placeholder-gray-400"
                        placeholder="Search articles..."
                    />
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary-500 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Get Weekly Tips</h3>
                <p className="text-sm text-white/80 mb-4">
                    Get the latest interview tips, career guides and expert insights.
                </p>
                <input
                    type="email"
                    className="block w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
                    placeholder="Your email"
                />
                <Button className="w-full bg-white text-primary-700 font-bold hover:bg-white/90 rounded-lg">
                    Subscribe Now
                </Button>
            </div>

            {/* Related Articles */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                    {relatedArticles.map((article) => (
                        <Link
                            key={article.id}
                            href={article.href}
                            className="flex items-center gap-3.5 group"
                        >
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    sizes="64px"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                    {article.title}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">{article.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Practice with Experts */}
            <div className="bg-primary-25 rounded-2xl p-6 border border-primary-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Practice with Experts</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Book a mock interview with our experienced mentors. Get real-time feedback.
                </p>
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl">
                    Find a Mentor
                </Button>
            </div>
        </aside>
    );
}
