"use client";
import { useRef,useState } from "react";

const trials=[
  {word:"BLUE",color:"#BC4938",answer:"Red"},
  {word:"GREEN",color:"#0077B6",answer:"Blue"},
  {word:"RED",color:"#16865b",answer:"Green"},
  {word:"BLUE",color:"#0077B6",answer:"Blue"},
];

export default function StroopDemo(){
  const [index,setIndex]=useState(0);
  const [scores,setScores]=useState<number[]>([]);
  const [status,setStatus]=useState("Name the ink color—not the word.");
  const [running,setRunning]=useState(false);
  const started=useRef(0);
  function begin(timestamp:number){if(scores.length===trials.length){setScores([]);setIndex(0)}started.current=timestamp;setRunning(true);setStatus("Name the ink color—not the word.")}
  function choose(answer:string,timestamp:number){
    const elapsed=timestamp-started.current;
    if(answer===trials[index].answer){
      const nextScores=[...scores,elapsed];
      setScores(nextScores);setStatus("Correct.");
      if(index<trials.length-1){setIndex(index+1);started.current=timestamp}
      else {setStatus(`Complete — average ${Math.round(nextScores.reduce((a,b)=>a+b,0)/trials.length)} ms.`);setRunning(false)}
    }else setStatus("Look at the ink color and try again.");
  }
  function reset(){setIndex(0);setScores([]);setRunning(false);setStatus("Name the ink color—not the word.")}
  return <div className="demo-card"><div><p className="kicker">Interactive demonstration</p><h2>Try the Stroop task</h2><p>{status}</p></div><div className="stroop-stage">{running?<><strong style={{color:trials[index].color}}>{trials[index].word}</strong><div>{["Red","Blue","Green"].map(c=><button key={c} onClick={e=>choose(c,e.timeStamp)}>{c}</button>)}</div></>:<button className="demo-start" onClick={e=>begin(e.timeStamp)}>{scores.length?"Try again":"Begin"}</button>}<button className="reset-link" onClick={reset}>Reset</button></div><small>This illustrates response interference, not intelligence or diagnosis. Browser and device conditions affect timing.</small></div>
}
