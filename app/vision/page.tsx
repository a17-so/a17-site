import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function VisionPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 overflow-hidden">
            <div className="max-w-3xl w-full space-y-12">
                {/* Header - Aligned with content */}
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight hover:text-zinc-300 transition-colors"
                    >
                        ← VISION
                    </Link>
                </div>

                {/* Content - Constrained Grid */}
                {/* Content */}
                <div className="flex flex-col space-y-8">
                    <h2 className="text-sm text-zinc-300 leading-relaxed">
                        the <span className="italic text-zinc-200 font-bold text-base">consumer</span> everything company. starting with apps.
                    </h2>
                    <h2 className="text-sm text-zinc-300 leading-relaxed">
                        we are building a family of iconic consumer products that enable everyone to live a better, more fulfilling, and more productive life.
                    </h2>
                    <h2 className="text-sm text-zinc-300 leading-relaxed">
                        we are a small focused team of polymaths. we work to win.
                    </h2>

                    <h2 className="text-sm text-zinc-100">
                        <span className="italic"> - abhay</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}
