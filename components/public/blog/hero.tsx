import { Search } from 'lucide-react';
import { categories } from './mock-data';

export default function BlogHero() {
    return (
        <section className="py-16 md:py-24 text-center px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <p className="text-primary-400 font-bold tracking-widest text-sm uppercase">
                    KNOWLEDGE BASE
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
                    Career <span className="text-primary-600">Insights</span> & Interview Tips
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                    Expert advice from top-tier recruiters and engineers to help you navigate your professional journey.
                </p>

                {/* Search */}
                <div className="max-w-2xl mx-auto relative group mt-8">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-12 pr-32 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 shadow-sm text-gray-900 placeholder-gray-400 text-base"
                        placeholder="Search for articles, topics, or skills..."
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <button className="bg-primary-500 hover:bg-primary-700 text-white px-8 py-2.5 rounded-full font-bold transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-10">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-colors ${idx === 0
                                ? "bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-600/20"
                                : "bg-white border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600 shadow-sm"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
