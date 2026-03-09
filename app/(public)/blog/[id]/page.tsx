import BlogContent from "@/components/public/blog/detail/content";
import BlogSidebar from "@/components/public/blog/detail/sidebar";
import CTA from "@/components/public/homepage/cta";

export const metadata = {
    title: "10 Essential Tips to Ace Your Next Technical Interview | InterviewPrep",
    description:
        "Technical interviews can be daunting. Learn the 10 essential tips to help you prepare and ace your next technical interview.",
};

export default function BlogDetailPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-16">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        <BlogContent />
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-[340px] flex-shrink-0">
                        <div className="lg:sticky lg:top-24">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <CTA />
        </div>
    );
}
