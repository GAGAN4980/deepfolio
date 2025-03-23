import type { Metadata } from "next";
import "./globals.css";
import LEDSkyCanvas from "./components/LEDSkyCanvas";
import Glow from "./components/Glow";
import { Inter } from "next/font/google";
import { siteConfig } from "./config";
import { Toaster } from "sonner";
import Plausible from "./components/Plausible";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: {
        canonical: siteConfig.url,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        type: "website",
        siteName: siteConfig.title,
        images: [
            {
                url: "/Portfolio.png",
                width: 1920,
                height: 1080,
                alt: "Alvin Chang Portfolio",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                {/* <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-48x48.png"
                    sizes="48x48"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Deepfolio.dev"
                />  */}
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body
                className={`${inter.className} antialiased bg-background text-slate-100`}
            >
                <LEDSkyCanvas />
                {/* <Glow /> */}
                <Toaster />
                <Plausible />
                {children}
            </body>
        </html>
    );
}
