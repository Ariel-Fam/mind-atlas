import type { Metadata } from "next";
import { SearchLibrary } from "@/components/search-library";
import { articles } from "@/lib/content";
export const metadata:Metadata={title:"Psychological effects",description:"Browse psychological effects and cognitive biases with evidence and limits."};
export default function Effects(){return <main id="main-content" className="directory-page"><header className="directory-header"><p className="kicker">Patterns, not rules</p><h1>Psychological effects</h1><p>A field guide to recurring patterns in judgment, memory, attention, and social life. These are context-sensitive tendencies—not labels for people.</p></header><SearchLibrary items={articles} effectsOnly/></main>}
