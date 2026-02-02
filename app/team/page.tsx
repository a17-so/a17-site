import Link from "next/link";
import { Card, CardTitle, CardDescription } from "../../components/card";
import Particles from "../../components/particles";

const team = [
    {
        name: "BLAKE ANDERSON",
        role: "CEO",
        image: "/placeholder-blake.jpg", // Placeholder
    },
    {
        name: "BENJAMIN CHEN",
        role: "COO",
        image: "/placeholder-ben-c.jpg", // Placeholder
    },
    {
        name: "BEN WANG",
        role: "PRODUCT",
        image: "/placeholder-ben-w.jpg", // Placeholder
    },
    {
        name: "JAY GUPTA",
        role: "ENGINEER",
        image: "/placeholder-jay.jpg", // Placeholder
    },
];

export default function TeamPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white p-8 md:p-24 font-mono overflow-auto pb-32">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center text-xl hover:text-zinc-300 transition-colors">
                        <span className="mr-2">←</span> TEAM
                    </Link>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {team.map((member) => (
                        <div key={member.name} className="group space-y-4">
                            {/* Image Placeholder with Grayscale/Dither effect simulation */}
                            <div className="aspect-square bg-zinc-900 border border-zinc-800 grayscale overflow-hidden relative">
                                {/* In real implementation, use next/image here */}
                                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-bold tracking-wider text-zinc-100 uppercase">{member.name}</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">// {member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
