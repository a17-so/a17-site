import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";
import { XLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: {
    default: "a17",
    template: "%s | a17.so",
  },
  description: "the consumer everything company",
  openGraph: {
    title: "a17",
    description:
      "the consumer everything company",
    url: "https://a17.so",
    siteName: "a17.so",
    images: [
      {
        url: "https://a17.so/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "a17.so",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {/* Top Left - Email */}
        <div className="fixed top-8 left-10 z-50">
          <a href="mailto:hello@a17.so" className="text-xs font-bold text-zinc-200 hover:text-zinc-400 transition-colors">
            HELLO@A17.SO
          </a>
        </div>

        {/* Top Right - Socials */}
        <div className="fixed top-8 right-10 z-50 flex items-center gap-4">
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
        <div className="fixed bottom-8 left-10 z-50 flex items-end gap-0">
          <nav className="flex gap-4 text-xs font-bold text-zinc-200">
            <a href="mailto:hello@a17.so" className="hover:text-zinc-400 transition-colors">CAREERS</a>
            <span className="text-zinc-700 mx-1">•</span>
            <a href="/vision" className="hover:text-zinc-400 transition-colors">VISION</a>
            <span className="text-zinc-700 mx-1">•</span>
            <a href="/portfolio" className="hover:text-zinc-400 transition-colors">PORTFOLIO</a>
            <span className="text-zinc-700 mx-1">•</span>
            <a href="/team" className="hover:text-zinc-400 transition-colors">TEAM</a>
            <span className="text-zinc-700 mx-1">•</span>
            <a href="/office" className="hover:text-zinc-400 transition-colors">OFFICE</a>
          </nav>
        </div>

        {/* Bottom Right Corner & Location */}
        <div className="fixed bottom-8 right-10 z-50 flex items-end justify-end gap-0">
          <span className="text-xs font-bold text-white">SEATTLE, WA</span>
        </div>

        {children}
      </body>
    </html>
  );
}
