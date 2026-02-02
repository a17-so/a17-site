import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function OfficePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 overflow-hidden">
            <div className="max-w-3xl w-full space-y-12">
                {/* Header - Aligned with content */}
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight hover:text-zinc-300 transition-colors"
                    >
                        ← OFFICE
                    </Link>
                </div>

                {/* Content - Constrained Grid */}
                {/* Content */}
                <div className="flex flex-col space-y-8">
                    <h2 className="text-sm text-zinc-300 leading-relaxed">
                        coming soon...
                    </h2>
                </div>
            </div>
        </div>
    );
}
