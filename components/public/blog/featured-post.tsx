import Image from 'next/image';
import Link from 'next/link';
import { featuredPost } from './mock-data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedPost() {
    return (
        <section className="px-4 md:px-6 mb-20 max-w-[1200px] mx-auto">
            <Link href={featuredPost.href} className="group block">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_50px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col md:flex-row border border-gray-100">

                    <div className="w-full md:w-[55%] h-[300px] md:h-auto min-h-[400px] relative overflow-hidden">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 motion-reduce:group-hover:scale-100 transition-transform duration-700 ease-in-out"
                            sizes="(max-width: 768px) 100vw, 55vw"
                            priority
                        />
                    </div>

                    <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white z-10">
                        <div className="mb-6">
                            <span className="bg-primary-50 text-primary-500 font-extrabold uppercase tracking-wide text-[11px] px-3.5 py-1.5 rounded-md">
                                {featuredPost.category}
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-5 group-hover:text-primary-600 transition-colors">
                            {featuredPost.title}
                        </h2>

                        <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                            {featuredPost.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 pt-8 mt-auto gap-4">
                            <div className="flex items-center gap-3.5">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm">
                                    <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" sizes="44px" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-gray-900 text-sm">{featuredPost.author.name}</p>
                                    <p className="text-gray-500 text-sm font-medium mt-0.5">{featuredPost.date} &middot; {featuredPost.readTime}</p>
                                </div>
                            </div>

                            <div className="flex items-center text-primary-600 font-bold group-hover:translate-x-1 transition-transform">
                                Read More <ArrowRight className="ml-1.5 w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
