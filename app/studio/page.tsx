import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import { ArrowUpRight, Plus } from "@phosphor-icons/react/dist/ssr";
import Particles from "../../components/particles";

export const metadata: Metadata = {
    title: "studio",
    description:
        "a17 studio — we build your idea into a ready to launch MVP in 2 weeks.",
};

const BOOK_URL = "https://cal.com/abhaychebium/30-min-meeting";

const stats = [
    { value: "200+", label: "Products Built" },
    { value: "$25M+", label: "Client Funding" },
    { value: "80+", label: "VC investments in our clients" },
];

const process = [
    {
        tag: "Iterate",
        title: "Set your roadmap and milestones",
        body: "Once live, we help you define clear goals and run bi-weekly sprints to ship features, improve UX, and scale efficiently.",
    },
    {
        tag: "Grow",
        title: "Move faster with AI-powered tools",
        body: "We leverage Lovable, Cursor, and Supabase to build at unmatched speed — combining AI automation with real engineering best practices.",
    },
    {
        tag: "Collaborate",
        title: "Stay flexible with async collaboration",
        body: "Join weekly calls, stay connected asynchronously, and pause or cancel anytime — total flexibility, zero long-term commitments.",
    },
    {
        tag: "Freedom",
        title: "Pause or cancel anytime",
        body: "No rigid contracts. Just an open, flexible process that adapts to how you work — not the other way around.",
    },
];

const work = [
    {
        name: "REGEN",
        description: "The personalized peptide care app",
        link: "https://www.regenhealth.app/",
        image: "/apps/REGEN.png",
    },
    {
        name: "LIFEMAXX",
        description: "Character-based self improvement app · 70k downloads",
        link: "",
        image: "/apps/lifemaxx.png",
    },
    {
        name: "PRETTI",
        description: "AI makeup assistant · 10k downloads",
        link: "https://apps.apple.com/us/app/pretti-ai-makeup-assistant/id6749188903",
        image: "/apps/pretti.png",
    },
];

const why = [
    {
        title: "AI native",
        body: "AI isn't just a tool — it's a multiplier. We use it to remove friction, accelerate creation, and free you to focus on vision, not code.",
    },
    {
        title: "Clear, async collaboration",
        body: "Weekly calls, a shared Slack channel, and progress updates you can actually read. No status theater.",
    },
    {
        title: "Design matters",
        body: "In a world filled with AI clones, user experience matters more than ever. Design is what makes technology feel human — and that's where we obsess.",
    },
    {
        title: "Operate with freedom",
        body: "No rigid contracts. Just an open, flexible process that adapts to how you work — not the other way around.",
    },
];

const sayNo = ["Long contracts", "Micromanagement", "High hiring costs", "Lengthy meetings"];

const faqs = [
    {
        group: "General",
        items: [
            {
                q: "What is a17 studio?",
                a: "a17 studio is the product studio arm of a17. We design, build, and launch consumer apps and AI products for startups and founders — the same way we build our own.",
            },
            {
                q: "What makes a17 studio different from other agencies?",
                a: "We ship our own consumer apps, so we build yours like an operator, not a vendor. Small senior team, AI-native tooling, and a bias toward launching fast.",
            },
            {
                q: "Who do you work with?",
                a: "Early-stage founders, funded startups, and teams inside larger companies that need a focused product shipped in weeks, not quarters.",
            },
        ],
    },
    {
        group: "Services & process",
        items: [
            {
                q: "What do you build?",
                a: "Mobile apps (iOS and Android), web apps, AI features and agents, backends and integrations, and the product design that ties it all together.",
            },
            {
                q: "How does a 2-week sprint work?",
                a: "Week one is scope, design, and core build. Week two is integrations, polish, and launch prep. You get a weekly call, async updates in Slack, and a working product at the end.",
            },
            {
                q: "Can you help me validate my idea first?",
                a: "Yes. We can start with a short strategy sprint to pressure-test the idea, define the MVP, and map the roadmap before writing code.",
            },
        ],
    },
    {
        group: "Pricing & timelines",
        items: [
            {
                q: "How much does it cost?",
                a: "It depends on scope. Book a call and we'll give you a clear fixed quote — no hourly billing, no surprise invoices.",
            },
            {
                q: "How long does it take?",
                a: "Most MVPs launch in 2 weeks. Larger products run as back-to-back sprints, and you can pause or cancel between any of them.",
            },
            {
                q: "Do you offer support after launch?",
                a: "Yes. Ongoing sprints cover new features, growth work, and maintenance for as long as you need us.",
            },
        ],
    },
    {
        group: "AI & integrations",
        items: [
            {
                q: "What kinds of AI features can you build?",
                a: "Chat and voice assistants, personalization and recommendations, computer-vision features, agents and automations, and anything on top of modern model APIs.",
            },
            {
                q: "Can you add AI to my existing product?",
                a: "Yes. We integrate into existing codebases and stacks, and can work alongside your team.",
            },
            {
                q: "Is what you build scalable?",
                a: "Yes. We build on production-grade stacks and hand over clean code you own outright — no lock-in.",
            },
        ],
    },
];


function BookButton({ className = "", children = "Book a Call" }: { className?: string; children?: React.ReactNode }) {
    return (
        <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-zinc-200 transition-colors ${className}`}
        >
            {children}
            <ArrowUpRight className="w-4 h-4" weight="bold" />
        </a>
    );
}

function Reveal({
    delay = 0,
    className = "",
    children,
}: {
    delay?: number;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`opacity-0 animate-fade-up ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-500">
            // {children}
        </p>
    );
}

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-black text-white antialiased">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-800/30 via-black to-black" />
                <Particles className="pointer-events-none absolute inset-0 opacity-0 animate-fade-in-fast" quantity={80} />
                <div className="pointer-events-none absolute top-0 left-0 w-full h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
                    <Reveal delay={0}>
                        <Link href="/" className="inline-flex items-baseline gap-2 group">
                            <span className="font-display text-2xl leading-none">a17</span>
                            <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                studio · Seattle, WA
                            </span>
                        </Link>
                    </Reveal>
                    <Reveal delay={150}>
                        <h1 className="mt-10 font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tighter max-w-4xl">
                            We&apos;ll build your idea into a ready to launch MVP in 2 weeks
                        </h1>
                    </Reveal>
                    <Reveal delay={350}>
                        <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
                            The AI product studio trusted by startups and founders to design, build, and launch products that scale.
                        </p>
                    </Reveal>
                    <Reveal delay={500} className="mt-10 flex flex-wrap items-center gap-4">
                        <BookButton />
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-400 transition-colors"
                        >
                            View work
                        </a>
                    </Reveal>

                    {/* Stats */}
                    <Reveal delay={700} className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-md overflow-hidden">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-black p-6 sm:p-8">
                                <p className="font-bold tracking-tight text-4xl sm:text-5xl">{s.value}</p>
                                <p className="mt-2 text-[10px] tracking-[0.2em] font-mono uppercase text-zinc-500">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </Reveal>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </section>

            {/* Process */}
            <section id="process" className="border-t border-zinc-900">
                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                    <Eyebrow>How we work</Eyebrow>
                    <h2 className="mt-4 font-bold text-3xl sm:text-5xl tracking-tighter max-w-3xl">
                        We simplify complex builds into fast, focused sprints that ship real results every week.
                    </h2>
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-md overflow-hidden">
                        {process.map((p, i) => (
                            <div key={p.tag} className="bg-black p-8 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-500">
                                        0{i + 1} · {p.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work */}
            <section id="work" className="border-t border-zinc-900">
                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <Eyebrow>Explore work</Eyebrow>
                            <h2 className="mt-4 font-bold text-3xl sm:text-5xl tracking-tighter">
                                Products we&apos;ve shipped.
                            </h2>
                        </div>
                        <Link
                            href="/portfolio"
                            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase text-zinc-400 hover:text-white transition-colors"
                        >
                            View all work <ArrowUpRight className="w-3.5 h-3.5" weight="bold" />
                        </Link>
                    </div>
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {work.map((app) => {
                            const Wrapper: any = app.link ? Link : "div";
                            const wrapperProps = app.link ? { href: app.link, target: "_blank" } : {};
                            return (
                                <Wrapper key={app.name} {...wrapperProps} className="group flex flex-col gap-4">
                                    <div className="aspect-square w-full overflow-hidden relative rounded-md bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image src={app.image} alt={app.name} fill className="object-cover" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold tracking-wider">{app.name}</h3>
                                        <p className="text-zinc-500 text-[10px] tracking-widest font-mono uppercase">
                                            // {app.description}
                                        </p>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why */}
            <section id="why" className="border-t border-zinc-900">
                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                    <Eyebrow>Why a17 studio</Eyebrow>
                    <h2 className="mt-4 font-bold text-3xl sm:text-5xl tracking-tighter max-w-3xl">
                        By the end you&apos;ll have a full working product ready to launch to the world.
                    </h2>
                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-md overflow-hidden">
                            {why.map((w) => (
                                <div key={w.title} className="bg-black p-8">
                                    <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
                                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{w.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border border-zinc-800 rounded-md p-8 flex flex-col">
                            <p className="text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-500">
                                // Say no more to
                            </p>
                            <ul className="mt-6 space-y-4">
                                {sayNo.map((s) => (
                                    <li key={s} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <span className="text-zinc-600 line-through decoration-zinc-600">✕</span>
                                        <span className="line-through decoration-zinc-600 text-zinc-500">{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-10">
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Book a 15-minute free call with our team.
                                </p>
                                <BookButton className="mt-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="border-t border-zinc-900">
                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div>
                            <Eyebrow>FAQ</Eyebrow>
                            <h2 className="mt-4 font-bold text-3xl sm:text-5xl tracking-tighter">
                                Questions? Answers.
                            </h2>
                            <p className="mt-4 text-sm text-zinc-400">
                                Something else?{" "}
                                <a href="mailto:hello@a17.so" className="text-zinc-200 underline underline-offset-4 hover:text-white">
                                    hello@a17.so
                                </a>
                            </p>
                        </div>
                        <div className="lg:col-span-2 space-y-12">
                            {faqs.map((g) => (
                                <div key={g.group}>
                                    <p className="text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-500 mb-2">
                                        // {g.group}
                                    </p>
                                    <div className="divide-y divide-zinc-900 border-y border-zinc-900">
                                        {g.items.map((f) => (
                                            <details key={f.q} className="group py-5">
                                                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-base font-medium text-zinc-100 hover:text-white [&::-webkit-details-marker]:hidden">
                                                    {f.q}
                                                    <Plus
                                                        className="w-4 h-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-45"
                                                        weight="bold"
                                                    />
                                                </summary>
                                                <p className="mt-3 pr-10 text-sm text-zinc-400 leading-relaxed">{f.a}</p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="border-t border-zinc-900">
                <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 text-center">
                    <h2 className="font-bold text-4xl sm:text-6xl tracking-tighter">
                        Start your project with us today.
                    </h2>
                    <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
                        Tell us what you&apos;re building. We&apos;ll come back with a plan, a timeline, and a fixed quote.
                    </p>
                    <BookButton className="mt-10">Start a project</BookButton>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-900">
                <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] font-mono uppercase text-zinc-500">
                    <Link href="/" className="hover:text-zinc-300 transition-colors">← a17.so</Link>
                    <div className="flex gap-6">
                        <a href="mailto:hello@a17.so" className="hover:text-zinc-300 transition-colors">hello@a17.so</a>
                        <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
                    </div>
                    <span>Seattle, WA</span>
                </div>
            </footer>
        </div>
    );
}
