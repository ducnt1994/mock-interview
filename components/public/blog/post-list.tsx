import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { posts } from './mock-data';

export default function PostList() {
    return (
        <section className="px-4 md:px-6 pb-24 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {posts.map((post) => (
                    <Link key={post.id} href={post.href} className="group flex flex-col h-full">
                        <div className="relative h-60 w-full overflow-hidden rounded-[1.5rem] mb-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] ring-1 ring-gray-900/5">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-col flex-1 px-1">
                            <div className="mb-4">
                                <span className="bg-primary-50 text-primary-500 font-extrabold uppercase tracking-wide text-[10px] px-3 py-1.5 rounded-md">
                                    {post.category}
                                </span>
                            </div>
                            <h3 className="text-[1.35rem] leading-tight font-black text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-500 text-base mb-6 line-clamp-3 flex-1 font-medium leading-relaxed">
                                {post.description}
                            </p>

                            <div className="flex items-center text-primary-600 font-bold text-base mt-auto group-hover:translate-x-1 transition-transform">
                                Read More <ArrowRight className="ml-1.5 w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-20">
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-gray-100 text-gray-400 hover:bg-gray-50 transition-colors shadow-sm" disabled>
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-600 text-white font-bold shadow-md shadow-primary-600/20 transition-colors">
                    1
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-gray-100 text-gray-600 font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    2
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-gray-100 text-gray-600 font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    3
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-gray-100 text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
            </div>
        </section>
    );
}
