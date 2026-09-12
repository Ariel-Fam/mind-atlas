import type { Metadata } from "next";
import { SearchLibraryFromUrl } from "@/components/search-library";
import { articles } from "@/lib/content";
import { Suspense } from "react";
export const metadata:Metadata={title:"Explore psychology",description:"Browse the complete Mind Atlas psychology library."};
export default function Explore(){return <main id="main-content" className="directory-page"><header className="directory-header"><p className="kicker">The library</p><h1>Explore psychology</h1><p>Clear, substantial introductions to how people think, learn, feel, and relate—each written with its evidence and limits in view.</p></header><Suspense fallback={<p className="result-count">Loading library…</p>}><SearchLibraryFromUrl items={articles}/></Suspense></main>}
