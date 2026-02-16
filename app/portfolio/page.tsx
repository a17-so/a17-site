import Image from "next/image";
import Link from "next/link";
import React from "react";

const apps = [
    {
        name: "REGEN",
        description: "Science-Based AI Peptide Transformation App (just launched)",
        link: "https://apps.apple.com/us/app/regen-build-your-cycle/id6756548399",
        image: "/apps/REGEN.png",
    },
    {
        name: "LIFEMAXX",
        description: "Character-Based Self Improvement App (70k downloads)",
        link: "https://apps.apple.com/us/app/lifemaxx-88-days/id6742798149",
        image: "/apps/lifemaxx.png",
    },
    {
        name: "PRETTI",
        description: "AI Makeup Assistant (10k downloads)",
        link: "https://apps.apple.com/us/app/pretti-ai-makeup-assistant/id6749188903",
        image: "/apps/pretti.png",
    },
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 pt-24 sm:pt-8 overflow-hidden">
            <div className="max-w-3xl w-full space-y-12">
                {/* Header - Aligned with content */}
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight hover:text-zinc-300 transition-colors"
                    >
                        ← PORTFOLIO
                    </Link>
                </div>

                {/* Content - Constrained Grid */}
                {/* Content - Horizontal Scroll */}
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
                    {apps.map((app) => (
                        <Link
                            key={app.name}
                            href={app.link}
                            target="_blank"
                            className="flex-none w-64 md:w-80 flex flex-col space-y-4 group snap-center"
                        >
                            {/* Image Placeholder */}
                            <div className={`aspect-square bg-zinc-800 w-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 rounded-sm ${app.name === "REGEN" ? "opacity-80 hover:opacity-100" : ""}`}>
                                <Image
                                    src={app.image}
                                    alt={app.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold tracking-wider">{app.name}</h3>
                                <p className="text-zinc-500 text-[10px] tracking-widest font-mono uppercase">
                                    // {app.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
