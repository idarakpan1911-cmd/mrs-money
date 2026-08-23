import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "../components/site-chrome";
import { JourneyProvider } from "../components/app-state";
export const metadata: Metadata = { title: "Lumen — Catholic faith for teens", description: "A kind, practical space for Catholic teens to learn, pray, and grow." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><JourneyProvider><SiteChrome>{children}</SiteChrome></JourneyProvider></body></html>; }
