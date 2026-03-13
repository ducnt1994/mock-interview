import BlogHero from "@/components/public/blog/hero";
import FeaturedPost from "@/components/public/blog/featured-post";
import PostList from "@/components/public/blog/post-list";
import CTA from "@/components/shared/CTA";

export const metadata = {
    title: "Blog & Career Insights | InterviewPrep",
    description: "Expert advice from top-tier recruiters and engineers to help you navigate your professional journey.",
};

export default function BlogPage() {
    return (
        <div className="bg-neutral-landing min-h-screen pt-8">
            <BlogHero />
            <FeaturedPost />
            <PostList />
            <CTA />
        </div>
    );
}
