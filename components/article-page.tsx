import Link from "next/link";
import { Article, articlePath, articles } from "@/lib/content";
import { estimateReadingMinutes, getArticleReferences, getResearchProfile } from "@/lib/article-enrichment";
import { getArticleSpecifics } from "@/lib/article-specifics";
import { ArticleProgress, BookmarkButton, ReadingControls } from "./article-tools";

function AnchorHeading({id,children}:{id:string;children:React.ReactNode}){return <h2 id={id}>{children} <a href={`#${id}`} aria-label={`Link to ${String(children)}`}>#</a></h2>}

export default function ArticlePage({article}:{article:Article}){
  const related=articles.filter(a=>a.slug!==article.slug&&(a.category===article.category||a.tags.some(t=>article.tags.includes(t)))).slice(0,3);
  const profile=getResearchProfile(article);
  const specific=getArticleSpecifics(article);
  const refs=getArticleReferences(article);
  const minutes=estimateReadingMinutes(article);
  const cite=(index:number,place:string)=>refs[index]?<sup id={`cite-${index+1}-${place}`}><a href={`#ref-${refs[index].id}`} aria-label={`Reference ${index+1}`}>[{index+1}]</a></sup>:null;

  return <><ArticleProgress/><main id="main-content" className="article-page"><article>
    <header className="article-header"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={article.kind==="effect"?"/effects":"/explore"}>{article.kind==="effect"?"Effects":"Explore"}</Link><span>/</span><span>{article.title}</span></nav><p className="kicker">{article.category}</p><h1>{article.title}</h1><p className="definition">{article.definition}</p><div className="tag-row article-tags">{article.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="article-meta"><span>{minutes} min read</span><span>Updated {new Date(article.updated+"T12:00:00").toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}</span><BookmarkButton slug={article.slug}/></div><ReadingControls/></header>
    <div className="article-layout"><div className="article-body" data-article-body>
      <section className="at-glance"><span>At a glance</span><p>{article.definition} {specific.focus}</p><div className="glance-grid"><div><b>What to watch for</b><p>{specific.everydaySignal}</p></div><div><b>Better question</b><p>{specific.betterQuestion}</p></div></div></section>

      <section><AnchorHeading id="why-it-matters">Why it matters</AnchorHeading><p>{specific.focus}</p><p>{specific.practiceIntro} It becomes less useful when it is treated as a personality label, a diagnosis, or a complete explanation for a single moment.</p></section>

      <section><AnchorHeading id="everyday-example">An everyday case</AnchorHeading><div className="case-study"><p className="case-label">Case notebook</p><p>{article.example}</p><div className="case-questions"><div><span>01</span><p><b>The quick interpretation</b>{specific.quickMisread}</p></div><div><span>02</span><p><b>The research-minded interpretation</b>{specific.betterQuestion}</p></div></div></div><p>This case is illustrative rather than diagnostic. Use it to identify what evidence, cue, comparison, or context would make the concept a better explanation than its alternatives.</p></section>

      <section><AnchorHeading id="how-it-works">How the process may unfold</AnchorHeading><p>{article.mechanism} Researchers treat this as a proposed mechanism, so the useful move is to ask what observable condition would make that mechanism more or less plausible.</p><ol className="mechanism-steps">{specific.process.map((step,index)=><li key={step.title}><span>{index+1}</span><div><b>{step.title}</b><p>{step.detail}</p></div></li>)}</ol><aside className="evidence-note"><b>Mechanism is not destiny</b><p>{specific.boundary}</p></aside></section>

      <section><AnchorHeading id="research">Inside the research</AnchorHeading><p>{specific.researchAngle} {cite(0,"research")}</p><div className="study-blueprint"><div><span>What is measured</span><p>{profile.measure}</p></div><div><span>What is compared</span><p>{profile.comparison}</p></div><div><span>What can be concluded</span><p>{profile.interpretation}</p></div></div><p>{profile.setup} A well-designed study separates the proposed cause from plausible alternatives and reports enough uncertainty to show how far the claim can travel.</p></section>

      <section><AnchorHeading id="findings">What the evidence suggests</AnchorHeading><p>The evidence base is not one monolithic verdict. The most responsible summary starts with what each source directly supports for {article.title.toLowerCase()}:</p><ul className="evidence-list">{refs.map((ref,index)=><li key={ref.id}><span>{String(index+1).padStart(2,"0")}</span><p>{ref.supports} {cite(index,"finding")}</p></li>)}</ul><p>Together, these sources support treating {article.title.toLowerCase()} as a bounded research concept rather than a universal law. {specific.boundary}</p></section>

      <section><AnchorHeading id="contexts">Where the pattern may appear</AnchorHeading><div className="context-grid">{profile.contexts.map((context,index)=><article key={context.title}><span>0{index+1}</span><h3>{context.title}</h3><p>{context.detail}</p></article>)}</div><p>These are plausible contexts, not proof that {article.title.toLowerCase()} caused a particular outcome. {specific.betterQuestion}</p></section>

      <section><AnchorHeading id="limits">Boundary conditions and open questions</AnchorHeading><p>{article.limitation} {cite(0,"limits")}</p><div className="limits-panel"><h3>Before generalizing, ask:</h3><ul><li>{specific.betterQuestion}</li><li>Was the pattern observed in a controlled task, a natural setting, or both?</li><li>Does the sample resemble the people in the claim?</li><li>Would a different measure capture the same construct?</li><li>Have independent teams observed the pattern under comparable conditions?</li></ul></div><p>{specific.boundary}</p></section>

      <section><AnchorHeading id="misconceptions">Common misconceptions</AnchorHeading><div className="myth-grid">{specific.myths.map((myth)=><div key={myth.myth}><span>Myth</span><h3>“{myth.myth}”</h3><p>{myth.reality}</p></div>)}<div><span>Myth</span><h3>“Knowing the name makes me immune.”</h3><p>Recognition can prompt a pause, but better questions, feedback, and environments usually matter more than naming the pattern.</p></div></div></section>

      <section><AnchorHeading id="practical">Putting the idea to work</AnchorHeading><p>{specific.practiceIntro}</p><ol className="practice-list">{[specific.betterQuestion,...profile.practices].map((practice,index)=><li key={practice}><span>{index+1}</span><p>{practice}</p></li>)}</ol><div className="reflection"><b>A small field experiment</b><p>{specific.fieldTest}</p></div></section>

      <section><AnchorHeading id="related">Related concepts and distinctions</AnchorHeading><div className="distinction-list">{related.map(item=><Link href={articlePath(item)} key={item.slug}><div><b>{item.title}</b><p>{item.definition}</p></div><span>Compare →</span></Link>)}</div><p>{specific.focus} Related concepts may overlap at the level of outcome, so compare them by asking what changed, when it changed, and which response was measured.</p></section>

      <section><AnchorHeading id="takeaways">Key takeaways</AnchorHeading><ul className="takeaway-list"><li>{article.definition}</li><li>{specific.everydaySignal}</li><li>{article.mechanism}</li><li>{specific.boundary}</li><li>{specific.betterQuestion}</li></ul><div className="reflection final-question"><b>A question to carry with you</b><p>{specific.finalQuestion}</p></div></section>

      <section className="article-references"><AnchorHeading id="references">References</AnchorHeading>{refs.map((ref,index)=><div id={`ref-${ref.id}`} key={ref.id}><span>{index+1}</span><p>{ref.authors} ({ref.year}). <a href={ref.url} target="_blank" rel="noreferrer">{ref.title}</a>. <i>{ref.source}</i>.<small>{ref.type} · {ref.supports} <a className="back-citation" href={`#cite-${index+1}-finding`} aria-label={`Back to citation ${index+1}`}>↩ Back to text</a></small></p></div>)}</section>
    </div><aside className="toc"><p>In this article</p>{[["why-it-matters","Why it matters"],["everyday-example","Everyday case"],["how-it-works","How it works"],["research","Inside the research"],["findings","Evidence"],["contexts","Where it appears"],["limits","Limitations"],["misconceptions","Misconceptions"],["practical","Practical use"],["related","Related concepts"],["takeaways","Takeaways"],["references","References"]].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</aside></div>
  </article><section className="related"><p className="kicker">Continue exploring</p><h2>Follow the connection</h2><div className="article-grid">{related.map(a=><Link className="article-card" href={articlePath(a)} key={a.slug}><span>{a.category}</span><h3>{a.title}</h3><p>{a.definition}</p><b>Read next →</b></Link>)}</div></section></main></>
}
