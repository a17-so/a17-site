import Link from "next/link";
import Particles from "../../components/particles";

export default function OfficePage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white p-8 md:p-24 font-mono flex flex-col items-center justify-center">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            <div className="space-y-4 text-center">
                <Link href="/" className="inline-flex items-center text-xl hover:text-zinc-300 transition-colors mb-8">
                    <span className="mr-2">←</span> NYC OFFICE
                </Link>
                <p className="text-zinc-500">Coming soon.</p>
            </div>
        </div>
    );
}
