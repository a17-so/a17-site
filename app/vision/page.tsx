import Link from "next/link";
import { Card, CardTitle, CardDescription } from "../../components/card";
import Particles from "../../components/particles";

const jobs = [
    {
        title: "FOUNDING ENGINEER",
        salary: "~ $300-500K ~",
    },
    {
        title: "PRODUCT DESIGNER",
        salary: "~ $250-400K ~",
    },
    {
        title: "GROWTH LEAD",
        salary: "~ $150-250K ~",
    },
    {
        title: "HARDWARE ENGINEER",
        salary: "~ $300-400K ~",
    },
    {
        title: "OPEN APPLICATION",
        salary: "~ $150-500K ~",
    },
];

export default function CareersPage() {
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
                        <span className="mr-2">←</span> CAREERS
                    </Link>
                    <div className="space-y-2 text-zinc-400 max-w-2xl">
                        <p>We're building a team of exceptional individuals to rapidly build and scale apps.</p>
                        <p>Must be based in New York.</p>
                    </div>
                </div>

                {/* Job Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.map((job) => (
                        <Card key={job.title} className="bg-transparent border-zinc-800 text-white hover:border-zinc-600 transition-colors p-6 rounded-none">
                            <div className="space-y-2">
                                <CardTitle className="text-sm tracking-wider">{job.title}</CardTitle>
                                <CardDescription className="text-zinc-500">{job.salary}</CardDescription>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
}
