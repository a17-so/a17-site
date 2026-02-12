"use client";

import { usePathname } from "next/navigation";
import { XLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function GlobalNav() {
    const pathname = usePathname();
    const hiddenRoutes = ["/terms", "/privacy", "/apps/regen/medical-disclaimer"];

    if (hiddenRoutes.includes(pathname)) {
        return null;
    }

    const isHomePage = pathname === "/";
    const navClasses = isHomePage ? "opacity-0 animate-nav-fade-in" : "";

    return (
        <>
            {/* Top Left - Email */}
            <div className={`fixed top-8 left-10 z-50 ${navClasses}`}>
                <a href="mailto:hello@a17.so" className="text-xs font-bold text-zinc-200 hover:text-zinc-400 transition-colors">
                    HELLO@A17.SO
                </a>
            </div>

            {/* Top Right - Socials */}
            <div className={`fixed top-8 right-10 z-50 flex items-center gap-4 ${navClasses}`}>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-zinc-400 transition-colors">
                    <XLogo className="w-5 h-5" weight="fill" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-zinc-400 transition-colors">
                    <LinkedinLogo className="w-5 h-5" weight="fill" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-zinc-400 transition-colors">
                    <InstagramLogo className="w-5 h-5" weight="fill" />
                </a>
            </div>

            {/* Bottom Left Corner & Nav */}
            <div className={`fixed bottom-8 left-10 z-50 flex items-end gap-0 ${navClasses}`}>
                <nav className="flex gap-4 text-xs font-bold text-zinc-200">
                    <a href="mailto:hello@a17.so" className="hover:text-zinc-400 transition-colors">CAREERS</a>
                    <span className="text-zinc-700 mx-1">•</span>
                    <a href="/vision" className="hover:text-zinc-400 transition-colors">VISION</a>
                    <span className="text-zinc-700 mx-1">•</span>
                    <a href="/portfolio" className="hover:text-zinc-400 transition-colors">PORTFOLIO</a>
                    <span className="text-zinc-700 mx-1">•</span>
                    <a href="/team" className="hover:text-zinc-400 transition-colors">TEAM</a>
                    <span className="hidden sm:flex sm:gap-4">
                        <span className="text-zinc-700 mx-1">•</span>
                        <a href="/office" className="hover:text-zinc-400 transition-colors">OFFICE</a>
                    </span>
                </nav>
            </div>

            {/* Bottom Right Corner & Location */}
            <div className={`fixed bottom-8 right-10 z-50 items-end justify-end gap-0 ${navClasses} hidden sm:flex`}>
                <span className="text-xs font-bold text-white">SEATTLE, WA</span>
            </div>
        </>
    );
}
