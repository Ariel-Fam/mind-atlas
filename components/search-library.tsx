"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { articlePath, type Article } from "@/lib/content";
import { estimateReadingMinutes } from "@/lib/article-enrichment";

export function SearchLibrary({ items, effectsOnly=false, initialQuery="" }:{items:Article[];effectsOnly?:boolean;initialQuery?:string}) {
  const [query,setQuery]=useState(initialQuery); const [category,setCategory]=useState("All"); const [sort,setSort]=useState("title");
  const categories=["All",...Array.from(new Set(items.map(a=>a.category)))];
  const filtered=useMemo(()=>items.filter(a=>(!effectsOnly||a.kind==="effect")&&(category==="All"||a.category===category)&&`${a.title} ${a.definition} ${a.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>sort==="time"?a.minutes-b.minutes:a.title.localeCompare(b.title)),[items,effectsOnly,category,query,sort]);
  return <>
    <div className="library-tools"><label className="search-box"><span aria-hidden>⌕</span><span className="sr-only">Search articles</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search titles, summaries, and tags…"/></label><label><span className="sr-only">Filter by category</span><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></label><label><span className="sr-only">Sort articles</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="title">A–Z</option><option value="time">Reading time</option></select></label></div>
    <p className="result-count">{filtered.length} {filtered.length===1?"article":"articles"}</p>
    {filtered.length?<div className="article-grid">{filtered.map(a=><Link className="article-card" href={articlePath(a)} key={a.slug}><div className="card-meta"><span>{a.category}</span><span>{estimateReadingMinutes(a)} min</span></div><h2>{a.title}</h2><p>{a.definition}</p><div className="tag-row">{a.tags.slice(0,2).map(t=><span key={t}>{t}</span>)}</div><b>Read article <span>→</span></b></Link>)}</div>:<div className="empty-state"><span>⌕</span><h2>No matching articles</h2><p>Try a broader term or clear the category filter.</p><button onClick={()=>{setQuery("");setCategory("All")}}>Clear search</button></div>}
  </>;
}

export function SearchLibraryFromUrl({items}:{items:Article[]}){const params=useSearchParams();return <SearchLibrary items={items} initialQuery={params.get("q")||""}/>}
