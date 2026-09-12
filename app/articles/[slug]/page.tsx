import type { Metadata } from "next";import { notFound } from "next/navigation";import ArticlePage from "@/components/article-page";import { articles,getArticle } from "@/lib/content";
export function generateStaticParams(){return articles.filter(a=>a.kind==="guide").map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const a=getArticle((await params).slug);return a?{title:a.title,description:a.definition,openGraph:{title:a.title,description:a.definition,images:[]},twitter:{title:a.title,description:a.definition,images:[]}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const a=getArticle((await params).slug);if(!a||a.kind!=="guide")notFound();return <ArticlePage article={a}/>}
