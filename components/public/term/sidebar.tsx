"use client";

import { useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { sidebarLinks } from "./mock-data";

export default function TermSidebar() {
    const [active, setActive] = useState("introduction");

    const handleClick = (id: string) => {
        setActive(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="space-y-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                LEGAL CENTER
            </p>

            {sidebarLinks.map((link) => {
                const Icon = link.icon;
                const isActive = active === link.id;
                return (
                    <button
                        key={link.id}
                        onClick={() => handleClick(link.id)}
                        className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive
                                ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                    >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {link.label}
                    </button>
                );
            })}

            {/* Version badge */}
            <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                        New
                    </span>
                    <span className="text-xs text-gray-500 font-medium">v1.2 update</span>
                </div>
                <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary-600 transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Download Policy
                </Link>
            </div>
        </nav>
    );
}
