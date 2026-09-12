import { Article, references } from "./content";

export type ResearchProfile = {
  setup: string;
  measure: string;
  comparison: string;
  interpretation: string;
  contexts: { title: string; detail: string }[];
  practices: string[];
};

const profiles: Record<string, ResearchProfile> = {
  "Thinking & decisions": {
    setup:"Participants make estimates, evaluate evidence, or choose between options while researchers vary one feature of the decision environment—such as a starting number, wording, outcome, or base rate.",
    measure:"Choice proportions, numerical estimates, confidence ratings, response time, and how much people update after new evidence.",
    comparison:"The strongest designs hold the underlying information constant while changing only the hypothesized cue. Field work then asks whether the shift persists when choices carry real consequences.",
    interpretation:"A difference between conditions supports an influence on judgment; it does not reveal a permanent trait or prove that every individual used the same mental process.",
    contexts:[{title:"Money & shopping",detail:"Prices, discounts, forecasts, and prior spending create salient reference points."},{title:"Work & planning",detail:"Early estimates and desired outcomes can shape later evidence gathering."},{title:"News & public life",detail:"Examples, frames, and base rates compete for attention when issues are complex."}],
    practices:["Write down the decision criterion before seeing a recommendation or outcome.","Generate at least one plausible alternative and identify evidence that would favor it.","Use ranges, base rates, and independent estimates before discussing as a group."],
  },
  "Attention & perception": {
    setup:"People view displays or complete a focal task while researchers manipulate visual organization, competing information, expectations, or attentional load.",
    measure:"Accuracy, response time, eye movements, detection of unexpected events, and confidence about what was seen.",
    comparison:"Performance is compared across congruent and conflicting trials, low- and high-load tasks, or scenes with and without a masked change.",
    interpretation:"Failure to report an item shows a limit on conscious access under those conditions. It does not necessarily mean the item received no processing at all.",
    contexts:[{title:"Driving & navigation",detail:"Hazards compete with route planning, signage, passengers, and device prompts."},{title:"Interfaces",detail:"Visual hierarchy and grouping determine which controls feel related or get overlooked."},{title:"Conversation",detail:"Goals and expectations influence which words, gestures, and background events reach awareness."}],
    practices:["Reduce simultaneous demands when missing information would be costly.","Use redundant cues—position, labels, contrast, and grouping—rather than color alone.","After an interruption, deliberately rescan instead of assuming the scene is unchanged."],
  },
  "Memory & learning": {
    setup:"Participants study words, images, stories, or skills and later complete recall, recognition, or transfer tests after controlled delays.",
    measure:"Correct recall, false recall, recognition sensitivity, response confidence, learning rate, and retention after a delay.",
    comparison:"Researchers vary spacing, retrieval, wording, interference, or reinforcement while holding study time and materials as constant as possible.",
    interpretation:"Performance on a test reflects both what was encoded and what the test makes retrievable. Familiarity, recall, and transfer are related but distinct outcomes.",
    contexts:[{title:"Study & training",detail:"Spacing, feedback, and retrieval opportunities shape durable access to knowledge."},{title:"Witnessing events",detail:"Later questions and conversations can alter source memory and reported detail."},{title:"Everyday remembering",detail:"Plans, names, and stories are reconstructed with help from cues and prior knowledge."}],
    practices:["Retrieve an explanation from memory before reopening the source.","Space reviews across days and include feedback that corrects errors.","Record important observations before later discussion changes the retrieval context."],
  },
  "Social psychology": {
    setup:"Researchers vary group size, unanimity, authority, accountability, audience presence, or category membership in controlled tasks and natural settings.",
    measure:"Public and private choices, helping, effort, performance, attitude change, attribution, and recall of social information.",
    comparison:"Behavior alone versus behavior in a group is informative only when task difficulty, information, and incentives are carefully matched.",
    interpretation:"Group-level averages do not make people passive puppets. Participants interpret the situation, infer norms, and sometimes resist or reshape them.",
    contexts:[{title:"Teams",detail:"Visibility, shared goals, status, and dissent norms influence effort and judgment."},{title:"Crowds & platforms",detail:"Other people’s behavior supplies information while also diffusing responsibility."},{title:"Relationships",detail:"Expectations and attributions shape how ambiguous actions are explained."}],
    practices:["Invite independent judgments before a group discussion begins.","Name a specific person and action when responsibility must be clear.","Ask what situational constraints would make the same behavior understandable."],
  },
  "Emotion & motivation": {
    setup:"Studies combine self-report, observed behavior, repeated daily measurements, performance tasks, and sometimes physiology to examine goals and emotional change.",
    measure:"Emotion intensity, persistence, goal progress, behavioral repetition, choice, engagement, and well-being over time.",
    comparison:"Researchers compare strategies, motivational climates, time points, or naturally varying contexts; causal claims are strongest in randomized interventions.",
    interpretation:"A strategy’s average effect can conceal substantial variation by emotion, timing, person, and goal. Short-term relief and long-term usefulness may diverge.",
    contexts:[{title:"Starting difficult work",detail:"Ambiguity and immediate discomfort can outweigh distant rewards."},{title:"Health behavior",detail:"Autonomy, competence, stable cues, and feedback influence sustained action."},{title:"Conflict & recovery",detail:"Appraisal and regulation choices change how an emotional episode unfolds."}],
    practices:["Make the next action small and concrete enough to begin now.","Choose a strategy for the current goal instead of labeling emotions as good or bad.","Shape stable cues and supportive environments rather than depending on motivation alone."],
  },
  "Identity & relationships": {
    setup:"Researchers use interviews, validated questionnaires, behavioral observation, experience sampling, and longitudinal designs to study self-knowledge and close relationships.",
    measure:"Reported beliefs, interaction behavior, attention to social cues, relationship functioning, empathy accuracy, and change across time.",
    comparison:"Multiple methods and informants help separate a person’s self-story from observed behavior and a partner’s perspective.",
    interpretation:"Correlations between relationship patterns and outcomes do not establish destiny. Development, current relationships, culture, and measurement all contribute.",
    contexts:[{title:"Close relationships",detail:"Expectations influence bids for support, interpretations, and repair after conflict."},{title:"Social media",detail:"Curated comparison targets can distort the information available for self-evaluation."},{title:"Belonging",detail:"Group membership supplies identity, meaning, support, and sometimes pressure."}],
    practices:["Describe the current interaction pattern instead of assigning a fixed identity label.","Check your interpretation by asking, listening, and looking for disconfirming cues.","Choose comparison targets deliberately and remember what their presentation omits."],
  },
  "Everyday judgments": {
    setup:"Participants encounter repeated stimuli, imagine observers, receive expectation cues, or evaluate episodes whose sequence and ending are manipulated.",
    measure:"Liking, symptom reports, predictions of others’ attention, personality ratings, remembered pleasantness, and future choice.",
    comparison:"Researchers contrast equivalent information, different exposure counts, expectations, or episode structures while tracking what changes and what does not.",
    interpretation:"A reliable shift in rating does not mean the experience is fake. Expectations and memory are parts of experience, but they coexist with physiology and external conditions.",
    contexts:[{title:"Products & media",detail:"Repetition and presentation influence familiarity, preference, and remembered experience."},{title:"Performance anxiety",detail:"Private feelings seem more visible because they dominate one’s own attention."},{title:"Health encounters",detail:"Words, rituals, and prior learning can alter expectations and symptom experience."}],
    practices:["Separate how an experience felt moment to moment from how you remember it overall.","Ask whether a description contains distinctive evidence or only flattering generalities.","When communicating risk or treatment, present equivalent positive and negative frames."],
  },
  "Research methods": {
    setup:"Methodologists examine how sampling, design, measurement, analysis, and publication decisions change the conclusions drawn from data.",
    measure:"Effect estimates, uncertainty intervals, error rates, reliability, model fit, replication outcomes, and patterns across published and unpublished studies.",
    comparison:"Researchers use simulations, reanalysis, direct replication, multi-site studies, registered reports, and meta-analysis to test the stability of findings.",
    interpretation:"No single indicator certifies truth. Credibility grows from transparent methods, strong measurement, appropriate inference, and convergence across independent evidence.",
    contexts:[{title:"Reading headlines",detail:"A statistically significant result may still be small, uncertain, or narrowly applicable."},{title:"Evaluating programs",detail:"Causal claims require credible comparisons and outcomes that represent the intended goal."},{title:"Building knowledge",detail:"Replication and synthesis reveal both durability and meaningful boundary conditions."}],
    practices:["Ask what the comparison group tells you—and what it cannot tell you.","Look for an effect estimate and uncertainty, not only a threshold-crossing p value.","Check whether the measure, sample, and setting match the claim being made."],
  },
};

const categoryRefs: Record<string,string[]> = {
  "Thinking & decisions":["tversky-kahneman","kahneman-tversky","framing-meta"],
  "Attention & perception":["inattentional-meta","change-blindness","gestalt"],
  "Memory & learning":["working-memory","loftus-palmer","cepeda-spacing","roediger-karpicke"],
  "Social psychology":["conformity-meta","bystander-meta","social-facilitation-meta","social-loafing-meta"],
  "Emotion & motivation":["emotion-regulation-meta","sdt-meta","procrastination-meta","habit-formation"],
  "Identity & relationships":["social-comparison-meta","attachment-meta","noba"],
  "Everyday judgments":["mere-exposure-meta","spotlight","transparency","placebo-review","peak-end"],
  "Research methods":["open-science","replication-review","effect-size","publication-bias"],
};

const specificRefs: Record<string,string[]> = {
  "confirmation-bias":["tversky-kahneman","open-science"],"anchoring":["tversky-kahneman"],"availability-heuristic":["tversky-kahneman"],"representativeness":["tversky-kahneman"],"framing-effect":["framing-meta","kahneman-tversky"],"loss-aversion":["kahneman-tversky"],"sunk-cost-effect":["sunk-cost"],"dunning-kruger-effect":["dunning-original","dunning-critique"],
  "inattentional-blindness":["inattentional-meta"],"change-blindness":["change-blindness"],"stroop-effect":["stroop"],"gestalt-grouping":["gestalt"],
  "working-memory":["working-memory"],"reconstructive-memory":["loftus-palmer"],"misinformation-effect":["loftus-palmer"],"serial-position-effects":["serial-position"],"spacing-effect":["cepeda-spacing"],"retrieval-practice":["roediger-karpicke","cepeda-spacing"],"classical-conditioning":["conditioning"],"observational-learning":["observational-learning"],
  "conformity":["conformity-meta"],"social-proof":["conformity-meta"],"bystander-effect":["bystander-meta"],"social-facilitation":["social-facilitation-meta"],"social-loafing":["social-loafing-meta"],
  "emotion-regulation":["emotion-regulation-meta"],"self-determination-theory":["sdt-meta"],"procrastination":["procrastination-meta"],"habit-formation":["habit-formation"],"affective-forecasting":["affective-forecasting"],"hedonic-adaptation":["affective-forecasting"],
  "social-comparison":["social-comparison-meta"],"attachment-theory":["attachment-meta"],"empathy":["attachment-meta"],
  "mere-exposure-effect":["mere-exposure-meta"],"spotlight-effect":["spotlight"],"illusion-of-transparency":["transparency"],"barnum-effect":["barnum"],"placebo-nocebo":["placebo-review"],"peak-end-rule":["peak-end"],
  "effect-size":["effect-size"],"replication":["replication-review","open-science"],"publication-bias":["publication-bias"],"measurement-quality":["replication-review"],"correlation-causation":["noba"],
};

export function getResearchProfile(article:Article){return profiles[article.category]}
export function getArticleReferences(article:Article){
  const topicSpecific=specificRefs[article.slug];
  const ids=topicSpecific?.length?[...topicSpecific,"noba"]:[...(categoryRefs[article.category]??[]),"noba"];
  return Array.from(new Set(ids)).slice(0,4).map(id=>references.find(ref=>ref.id===id)).filter((ref):ref is (typeof references)[number]=>Boolean(ref));
}

export function estimateReadingMinutes(article:Article){
  const profile=getResearchProfile(article);
  const uniqueWords=[article.definition,article.example,article.mechanism,article.limitation,...profile.contexts.map(c=>c.detail),...profile.practices].join(" ").split(/\s+/).length;
  return Math.max(9,Math.round((1050+uniqueWords)/220));
}
