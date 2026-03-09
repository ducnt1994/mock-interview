import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TermSidebar from "@/components/public/term/sidebar";
import TermContent from "@/components/public/term/content";

export const metadata = {
    title: "Terms & Privacy Policy | InterviewPrep",
    description:
        "Read our Terms of Service and Privacy Policy to understand how InterviewPrep protects your data and ensures a professional experience.",
};

export default function TermPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-6 pb-20">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
                    <Link href="/" className="hover:text-primary-600 transition-colors">
                        HOME
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-gray-600 font-medium">Legal Center</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* Sidebar */}
                    <div className="w-full lg:w-[240px] flex-shrink-0">
                        <div className="lg:sticky lg:top-24">
                            <TermSidebar />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        <TermContent />
                    </div>
                </div>
            </div>
        </div>
    );
}
