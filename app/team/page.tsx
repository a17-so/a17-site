import Image from "next/image";
import Link from "next/link";
import React from "react";

const team = [
    {
        name: "ABHAY CHEBIUM",
        role: "CEO",
        image: "https://pbs.twimg.com/profile_images/1979772350561144832/MZhwrdpB_400x400.jpg",
        link: "https://x.com/abhaychebium",
    },
    {
        name: "ADVAITH AKELLA",
        role: "COO",
        image: "https://pbs.twimg.com/profile_images/1950106474870452224/Covo9OaM_400x400.jpg",
        link: "https://x.com/advaithakella",
    },
    {
        name: "ETHAN LEONARD",
        role: "PRODUCT",
        image: "https://pbs.twimg.com/profile_images/1959111889071611905/2cTNhYaY_400x400.jpg",
        link: "https://x.com/_eth0n",
    },
    {
        name: "EKAM MEHAT",
        role: "GROWTH",
        image: "",
        link: "https://x.com/EkamMehat",
    },
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

                {/* Content - Constrained Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member) => (
                        <Link
                            key={member.name}
                            href={member.link}
                            target="_blank"
                            className="flex flex-col space-y-4 group"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-square bg-zinc-800 w-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 rounded-sm">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white" />
                                )}
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
