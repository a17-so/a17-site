import Link from "next/link";
import { Card, CardTitle, CardDescription } from "../../components/card";
import Particles from "../../components/particles";

const projects = [
    {
        title: "CAL AI",
        description: "Track calories - 15m downloads, $30m revenue",
        icon: "🍎", // Placeholder
    },
    {
        title: "UMAX",
        description: "Improve skin & hair - 30m downloads, $12m revenue",
        icon: "Are", // Placeholder - U icon
    },
    {
        title: "PLUG AI",
        description: "Dating assistant - 15m downloads, $8m revenue",
        icon: "🔌", // Placeholder
    },
];

const socialLinks = [
    { name: "LINKEDIN", href: "https://linkedin.com" }, // Todo: add real links if known
    { name: "X", href: "https://x.com" },
    { name: "INSTAGRAM", href: "https://instagram.com" },
];

export default function PortfolioPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white p-8 md:p-24 font-mono overflow-auto pb-32">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            <div className="max-w-2xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center text-xl hover:text-zinc-300 transition-colors">
                        <span className="mr-2">←</span> ABOUT
                    </Link>
                    <div className="space-y-4 text-zinc-300 max-w-2xl">
                        <p>the <span className="italic text-zinc-200 font-bold">consumer</span> everything company. starting with apps.</p>
                        <p>we are building a family of iconic consumer products that enable everyone to live a better, more fulfilling, and more productive life.</p>
                        <p>we are a small focused team of polymaths. we work to win.</p>
                        <p className="text-zinc-100 italic pt-4">- abhay, advaith & ethan</p>
                        <p className="text-zinc-500 text-xs">a17 inc. © 2025</p>
                    </div>
                </div>

                {/* Project List */}
                <div className="flex flex-col gap-4">
                    {projects.map((project) => (
                        <Card key={project.title} className="bg-transparent border-zinc-800 text-white hover:border-zinc-600 transition-colors p-6 rounded-none flex items-center gap-6">
                            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded text-2xl border border-zinc-800">
                                {/* In a real app, use Image component here */}
                                <span className="text-white">{project.title[0]}</span>
                            </div>
                            <div className="space-y-1">
                                <CardTitle className="text-sm tracking-wider">{project.title}</CardTitle>
                                <CardDescription className="text-zinc-500">{project.description}</CardDescription>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Social Footer */}
                <div className="flex justify-center gap-6 pt-12 text-xs text-zinc-500">
                    {socialLinks.map(link => (
                        <a key={link.name} href={link.href} className="hover:text-zinc-300 transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}
