import Image from "next/image";
import Link from "next/link";
import React from "react";

const team = [
    {
        name: "ABHAY CHEBIUM",
        role: "CEO",
        image: "https://pbs.twimg.com/profile_images/2063806571906543616/ql9kOCNc_400x400.jpg",
        link: "https://x.com/abhaychebium",
    },
    {
        name: "EKAM MEHAT",
        role: "COO",
        image: "https://pbs.twimg.com/profile_images/2079302115965771776/maN2D2Yz_400x400.jpg",
        link: "https://x.com/ekammehat",
    },
    {
        name: "ADVAITH AKELLA",
        role: "PRODUCT",
        image: "https://pbs.twimg.com/profile_images/2025769390810238976/uUirzSx2_400x400.jpg",
        link: "https://x.com/advaithakella",
    }
];


export default function TeamPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 pt-24 sm:pt-8 overflow-hidden">
            <div className="max-w-3xl w-full space-y-12">
                {/* Header - Aligned with content */}
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight hover:text-zinc-300 transition-colors"
                    >
                        ← TEAM
                    </Link>
                </div>

                {/* Content - Horizontal Scroll */}
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
                    {team.map((member) => (
                        <Link
                            key={member.name}
                            href={member.link}
                            target="_blank"
                            className="flex-none w-64 md:w-80 flex flex-col space-y-4 group snap-center"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-square bg-zinc-800 w-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 rounded-sm">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold tracking-wider">{member.name}</h3>
                                <p className="text-zinc-500 text-[10px] tracking-widest font-mono uppercase">
                                    // {member.role}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
