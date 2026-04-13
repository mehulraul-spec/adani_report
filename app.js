// ══════════════════════════════════════════════════════════
// ADANI CEMENT NARRATIVE INTELLIGENCE · app.js
// ══════════════════════════════════════════════════════════

// ─── PLATFORM ICON SVGs ───
const ICONS = {
  youtube: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="7" fill="#FF0000"/><path d="M26.5 18c0 0-0.2-1.7-0.9-2.4-0.9-0.9-1.9-0.9-2.3-1-3.2-0.2-8-0.2-8-0.2s-4.8 0-8 0.2c-0.4 0-1.4 0.1-2.3 1C4.2 16.3 4 18 4 18s-0.2 1.9-0.2 3.8v1.8c0 1.9 0.2 3.8 0.2 3.8s0.2 1.7 0.9 2.4c0.9 0.9 2 0.9 2.6 1 1.9 0.2 8 0.2 8 0.2s4.8 0 8-0.2c0.4 0 1.4-0.1 2.3-1 0.7-0.7 0.9-2.4 0.9-2.4s0.2-1.9 0.2-3.8v-1.8C26.7 19.9 26.5 18 26.5 18z" fill="#FF0000"/><polygon points="14.5,22.6 14.5,14.2 22,18.4" fill="white"/></svg>`,
  twitter: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="7" fill="#000"/><path d="M7 7h5.2l4.4 6 5.2-6H26L18.4 17 27 29h-5.3l-4.8-6.5L11.2 29H7l8-11.5L7 7z" fill="white"/></svg>`,
  instagram: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="igG" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f09433"/><stop offset="25%" stop-color="#e6683c"/><stop offset="50%" stop-color="#dc2743"/><stop offset="75%" stop-color="#cc2366"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><rect width="36" height="36" rx="7" fill="url(#igG)"/><rect x="8" y="8" width="20" height="20" rx="5" fill="none" stroke="white" stroke-width="2"/><circle cx="18" cy="18" r="5" fill="none" stroke="white" stroke-width="2"/><circle cx="24" cy="12" r="1.5" fill="white"/></svg>`,
  reddit: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#FF4500"/><path d="M30 18a3 3 0 00-5-2.3C23 14.6 20.6 14 18 14s-5 .6-7 1.7A3 3 0 006 18a3 3 0 001.5 2.6v.4c0 4.4 4.7 8 10.5 8s10.5-3.6 10.5-8v-.4A3 3 0 0030 18zm-18 2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10.5 4c-1.2 1.2-3.2 1.8-4.5 1.8s-3.3-.6-4.5-1.8l1.4-1.4c.7.7 2 1.2 3.1 1.2s2.4-.5 3.1-1.2l1.4 1.4zm1.5-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="white"/><path d="M20 10a2 2 0 00-2 2l-3.5-.5.5-4L20 8a2 2 0 000-2z" fill="white"/></svg>`,
  news: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="7" fill="#1c3a6e"/><rect x="7" y="9" width="22" height="3" rx="1.5" fill="white"/><rect x="7" y="15" width="14" height="2" rx="1" fill="rgba(255,255,255,0.7)"/><rect x="7" y="19" width="17" height="2" rx="1" fill="rgba(255,255,255,0.7)"/><rect x="7" y="23" width="11" height="2" rx="1" fill="rgba(255,255,255,0.7)"/></svg>`,
};

// ─── THEME CONFIG ───
const THEMES = {
  political:    { label: 'Political', icon: '🏛', color: '#c0342a' },
  financial:    { label: 'Financial', icon: '💰', color: '#1c3a6e' },
  environmental:{ label: 'Environmental', icon: '🌿', color: '#1a6e42' },
  brand:        { label: 'Brand/Quality', icon: '🏷', color: '#8a4f00' },
  consumer:     { label: 'Consumer', icon: '🛒', color: '#5c3a8c' },
  media:        { label: 'Media/Narrative', icon: '📡', color: '#2a2e3e' },
  positive:     { label: 'Positive', icon: '✅', color: '#1a6e42' },
};

// ─── 25 NARRATIVES ───
const NARRATIVES = [
  // ════ CRITICAL ════
  {
    id: 1, num: '01',
    intensity: 'critical', intensityLabel: '● CRITICAL',
    theme: 'environmental',
    platforms: ['youtube', 'reddit', 'twitter'],
    title: 'The Environmental Betrayal Narrative',
    argument: 'Adani Cement is destroying ecosystems at industrial scale while the government simultaneously runs "Ek Ped Maa Ke Naam" tree-planting campaigns. The irony has crystallized into the highest-engagement single comment in the entire monitored dataset — a meme-sized indictment that no PR campaign can displace.',
    evidence: [
      { url: 'https://www.youtube.com/watch?v=YyHruVi_I1Q', source: 'BBC News Hindi · YouTube · "Adani Group को Bihar में 1 रुपए में 1 हज़ार एकड़ जमीन" Ground Report', text: '"एक पेड़ मां के नाम, 10 लाख पेड़ अदानी के नाम 😢" — Most-liked comment in the entire monitored dataset. Highest single engagement signal across all platforms.' },
      { url: 'https://www.youtube.com/watch?v=eU_mke7M1Qw', source: 'Aditya Kakkar · YouTube · "Adani–Modi\'s Rs1 Land Deal in Bihar — 1050 Acres & 10 Lakh Trees"', text: '"As a Bihari — This is very wrong — Cutting 10,000 trees 😔" — Geographically specific; not abstract criticism. Second-highest engagement thread on the land-tree controversy.' },
      { url: null, source: 'Economic Times / Himachal Guardian · Jan–Feb 2026', text: 'NGT joint committee confirmed violations at ACC Barmana plant: fugitive dust emissions, missing mandatory three-layer tree plantation, inadequate wastewater treatment. Prior ₹1.29 crore fine for same violations.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=r22379wM-tI', title: 'Anant Cosmos YT — "Adani\'s 2400 MW Bihar Project: 10 Lakh Trees at Risk?"' },
      { url: 'https://www.youtube.com/watch?v=0du-VIlD_N0', title: 'Adv. Akshay Samarth — "MODI\'s INDIA SALE: Assam BJP gave 3,000 bigha Tribal land to Adani cement"' },
      { url: 'https://www.reddit.com/r/mumbai/comments/1o3zf0x/the_environment_ministry_is_tweaking_a_rule_for/', title: 'r/mumbai — "The Environment Ministry Is Tweaking A Rule For Cement…" (EIA exemption thread)' },
    ],
    analystNote: 'This narrative is a convergence — environmental negligence + government greenwashing hypocrisy + political cronyism, all compressed into one viral meme. Verified by actual NGT enforcement action. Cannot be countered with press releases. Requires audited, public, on-ground corrective action.',
  },
  {
    id: 2, num: '02',
    intensity: 'critical', intensityLabel: '● CRITICAL',
    theme: 'political',
    platforms: ['youtube', 'twitter', 'reddit'],
    title: 'The "Modani" / Crony Capitalism Charge',
    argument: 'Every Adani cement expansion — Holcim deal, Penna, Orient, JAL insolvency bid — is perceived as state-facilitated, not market-earned. The "Modani" portmanteau operates as a political shorthand that collapses business success into political patronage, making every operational achievement suspect.',
    evidence: [
      { url: 'https://www.youtube.com/watch?v=YyHruVi_I1Q', source: 'BBC News Hindi · YouTube · Bihar Land Deal Ground Report', text: '"कोई आया था गंगा का लाल बनकर रह गया अड़ानी अम्बानी का दलाल बनकर — मोदी बीजेपी हटाओ देश संविधान बचाओ" — Comment with high engagement on BBC\'s Bihar power plant investigation.' },
      { url: null, source: 'Financial Express · September 2025', text: 'Union Ministry of Environment proposed rule exempting standalone cement grinding units from EIA and public consultation — critics argue this specifically paves way for Adani\'s contested ₹1,400-crore Kalyan plant, bypassing the exact protests seen in Visakhapatnam.' },
      { url: 'https://www.reddit.com/r/india/comments/1qll38z/adani_group_completes_full_takeover_of_ians_news/', source: 'Reddit r/india — "Adani Group completes full takeover of IANS news agency"', text: 'Community explicitly connects cement business expansion to media agency acquisition — constructing a unified narrative of systemic political-media capture.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=79JFbto2vmA', title: 'HW News English YT — "Supriya Shrinate targets PM Modi over Adani\'s cement plant in Kalyan"' },
      { url: 'https://www.youtube.com/watch?v=KQuTuOvuD4o', title: 'BBC News Marathi YT — "Adani cement grinding project: प्रकल्पाला विरोध का होतोय?"' },
      { url: 'https://www.reddit.com/r/Mumbai/comments/1o3zf0x/the_environment_ministry_is_tweaking_a_rule_for/', title: 'r/mumbai — EIA exemption rule thread linking Kalyan plant controversy' },
      { url: 'https://www.reddit.com/r/Maharashtra/comments/1oeum7f/these_days_everything_seems_to_be_sold_to_adani/', title: 'r/Maharashtra — "These days, everything seems to be sold to Adani wherever he sets his eyes"' },
    ],
    analystNote: 'The Kalyan EIA exemption is the single most dangerous piece of evidence in this dataset. It provides empirical support for regulatory capture claims that were previously anecdotal. Every positive business outcome is now filtered through a "political favor" lens that is extremely difficult to dismantle.',
  },
  {
    id: 3, num: '03',
    intensity: 'critical', intensityLabel: '● CRITICAL',
    theme: 'financial',
    platforms: ['reddit', 'twitter', 'youtube', 'news'],
    title: 'ACC as a Liquidity Engine — Siphoning Allegation',
    argument: 'Emkay Global\'s Sell downgrade (target: ₹1,600, cut 30%) revealed that ACC\'s working capital days spiked from 25 to 57 due to inter-group supply arrangements forcing ACC to fund Ambuja\'s growth. Trade receivables hit ₹24B in H1 FY26. Retail investors on Reddit identified this before the analyst community did.',
    evidence: [
      { url: null, source: 'Emkay Global Financial Services · Downgrade Report · November 24, 2025', text: 'Downgraded ACC to Sell, target ₹1,600 (30% cut). Cited forced supplies to Ambuja under Master Supply Agreement draining ACC working capital. Trade receivables: ₹24 billion H1 FY26. Working capital days: 25 → 57.' },
      { url: 'https://www.business-standard.com/companies/news/cement-maker-acc-equity-value-sees-sharp-fall-after-adani-acquisition', source: 'Business Standard — "Cement maker ACC equity value sees sharp fall after Adani acquisition"', text: 'ACC equity value sees sharp fall post-acquisition. Stock at ₹1,359 52-week low (March 2026).' },
      { url: 'https://www.youtube.com/watch?v=AEnZgefQU3c', source: 'Trading With Vivek · YouTube · "Ambuja, ACC and Orient Cement Merger — What to Do?"', text: 'Comment sections show retail investor concern about merger ratio and ACC\'s standalone value — "What about ACC shareholders?" recurring question with no brand response.' },
    ],
    relatedSources: [
      { url: 'https://www.thecore.in/business/adani-ambuja-acc-merger-cement-consolidation-857016', title: 'The Core — "Adani\'s Long-Awaited Cement Merger Arrives As An Afterthought For The Market"' },
      { url: 'https://www.reddit.com/r/IndianStockMarket/comments/1r3fdih/which_indian_stock_looks_great_on_paper_but_you/', title: 'r/IndianStockMarket — "Which Indian stock looks great on paper but you still refuse to buy?"' },
      { url: 'https://www.reddit.com/r/IndianStreetBets/comments/1qkn0ww/whats_happening_to_orient_cement/', title: 'r/IndianStreetBets — "What\'s happening to Orient cement?"' },
      { url: 'https://www.goodreturns.in/news/100-328-100-33-shares-exchange-ratio-adani-stocks-buy-ambuja-cements-stock-acc-orient-cement-merger-1478474.html', title: 'Goodreturns — "100:328 + 100:33 Share Exchange Ratio — Buy Ambuja Cements Stock Before ACC-Orient Merger?"' },
    ],
    analystNote: 'This is no longer a conspiracy theory — it is analyst-confirmed. Motilal Oswal maintains Buy only on Ambuja (target ₹740), not ACC. The market has already bifurcated its trust. The narrative will accelerate with every quarter that working capital doesn\'t normalize.',
  },
  {
    id: 4, num: '04',
    intensity: 'critical', intensityLabel: '● CRITICAL',
    theme: 'environmental',
    platforms: ['twitter', 'news', 'reddit'],
    title: 'Violent Community Resistance — Visakhapatnam Pattern',
    argument: 'The October 2025 public hearing for a new Ambuja plant in Visakhapatnam descended into violence — protesters stormed the stage and threw furniture, overwhelming police and halting environmental clearance. This is not isolated: it establishes a replicable protest template for every new plant expansion site nationwide.',
    evidence: [
      { url: null, source: 'Global Cement · October 8, 2025', text: 'Visakhapatnam public hearing for Ambuja Cements plant descended into chaos. Protesters, citing existing severe pollution, rushed stage and threw furniture, temporarily halting environmental clearance process.' },
      { url: 'https://www.reddit.com/r/CriticalThinkingIndia/comments/1njazav/why_the_adani_got_land_for_1_outrage_misses_the/', source: 'r/CriticalThinkingIndia — "Why the \'Adani got land for ₹1\' outrage misses the bigger picture"', text: 'Even counter-analysis threads acknowledging analytical misrepresentation of land data still confirm the underlying controversy is real and documents exist.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=KQuTuOvuD4o', title: 'BBC News Marathi YT — Adani cement grinding project resistance (local communities)' },
      { url: 'https://www.instagram.com/p/DOyEpTzCKvz/', title: 'Viralkarbhar Instagram — "अदानीच्या सिमेंट फॅक्टरीला स्थानिकांचा विरोध" (locals protest Adani cement factory)' },
      { url: 'https://www.reddit.com/r/CriticalThinkingIndia/comments/1ruh06z/workers_death_at_adani_power_plant_triggers/', title: 'r/CriticalThinkingIndia — "Worker\'s Death at Adani Power Plant Triggers Violent…"' },
    ],
    analystNote: 'This event directly threatens the 155 MTPA capacity timeline. If every new expansion site triggers a public hearing crisis, the capex pipeline stalls. Combined with the Kalyan EIA exemption narrative, Adani\'s expansion strategy is now publicly associated with circumventing democratic process.',
  },

  // ════ HIGH ════
  {
    id: 5, num: '05',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'environmental',
    platforms: ['youtube', 'news', 'twitter'],
    title: 'Labor Strikes & Land-for-Jobs Betrayal',
    argument: 'Truck drivers burned Gautam Adani effigies at Darlaghat and Barmana plants over freight rate disputes. Workers at Adani\'s Godda plant launched hunger strikes alleging the company reneged on "land-for-jobs" promises, replacing permanent roles with outsourced contracts via Riddhi Corporate Services.',
    evidence: [
      { url: null, source: 'Hindustan Times / Scroll.in · 2025–2026', text: 'Godda workers hunger strike: allege Adani reneged on permanent employment promises for land they surrendered. Permanent roles replaced by outsourced contracts via Riddhi Corporate Services.' },
      { url: null, source: 'Regional Reports · Himachal Pradesh · Late 2025', text: 'Darlaghat and Barmana plant operations paralyzed. Truck drivers burned Gautam Adani effigies over freight rate dispute.' },
      { url: 'https://www.youtube.com/watch?v=hFbZdSAcfR0', source: 'CA Piyush Bafna · YouTube · "ADANI vs BIRLA — Which Billionaire Wins in Cement?"', text: '"Kabhi mai bhi AMBUJA CEMENT LT. ka employee tha, tab batane me bahut pride hota tha but abhi waha ke logo ki halat dekh ke rona aata hai 😢😢😢" — Ex-employee cultural wound, highly personal.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=MYkPohN2uNo', title: 'Live Cities Media YT — "Nawada में Adani के Cement Factory में कर्मचारियों ने जमकर बवाल काटा"' },
      { url: 'https://www.youtube.com/watch?v=KH4Fxaf6Kyo', title: 'Civil Ki Bat YT — "Working Hour and Work Pressure in Adani Cement"' },
    ],
    analystNote: 'The specificity of the Godda allegation (named outsourcing company: Riddhi Corporate Services) makes it legally and journalistically actionable. This is not vague anti-Adani sentiment — it is a documented, specific grievance awaiting investigative amplification.',
  },
  {
    id: 6, num: '06',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'financial',
    platforms: ['news', 'twitter', 'reddit'],
    title: 'The Monopoly Machine — UltraTech Arms Race',
    argument: 'ACC + Ambuja + Orient + Penna + JAL = a single entity approaching UltraTech\'s dominance. "Adani cement monopoly India" is an active search cluster. The UltraTech counter-response (240.76 MTPA target by FY28 vs Adani\'s 155 MTPA) is feeding an "arms race" narrative that frames cement supply as a geopolitical resource.',
    evidence: [
      { url: 'https://m.economictimes.com/industry/indl-goods/svs/cement/adani-owned-ambuja-cements-approves-amalgamation-of-acc-and-orient-cement-to-create-pan-india-cement-powerhouse/articleshow/126125050.cms', source: 'Economic Times — "Pan-India Cement Powerhouse" (Merger Announcement)', text: 'Ambuja merging ACC + Orient into a unified platform — language of "powerhouse" and "pan-India dominance" embedded in official corporate communications itself.' },
      { url: null, source: 'Analyst Reports · FY26', text: 'UltraTech countered with ₹10,000 crore investment to reach 240.76 MTPA by FY28 vs Adani\'s 155 MTPA. Described by analysts as a duopoly arms race threatening all smaller producers.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=LDGFn_T7rVg', title: 'Upstox YT — "UltraTech vs Adani: How India\'s Cement Market Is Being Reshaped"' },
      { url: 'https://www.youtube.com/watch?v=QV2QxwEFGTg', title: 'Upstox YT — "India\'s Cement Battle: Adani vs UltraTech — M&A War & Sector Deep Dive"' },
      { url: 'https://www.youtube.com/watch?v=n1m1v3Smsgo', title: 'Groww YT — "UltraTech Cement vs Ambuja Cements" comparison' },
      { url: 'https://www.moneycontrol.com/news/business/how-the-ambuja-acc-orient-merger-will-help-adani-streamline-rs-35-000-crore-cement-business-13738982.html', title: 'Moneycontrol — "How the Ambuja-ACC-Orient merger will help Adani streamline Rs 35,000-crore cement business"' },
    ],
    analystNote: 'When 155 MTPA was announced as the target, the narrative shifted from "growth story" to "monopoly formation." The moment Adani surpasses UltraTech in any capacity metric, the monopoly narrative will hit national front pages.',
  },
  {
    id: 7, num: '07',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'brand',
    platforms: ['youtube', 'reddit', 'news'],
    title: 'Consumer Quality Erosion — "Chopped with Fingernails"',
    argument: 'A robust consumer narrative insists ACC and Ambuja cement quality has degraded post-acquisition. In YouTube head-to-head comparisons against UltraTech, Adani\'s products are repeatedly disparaged. One consumer claimed a new floor cracked in under a year; another described the hardness as something that could be "chopped with fingernails."',
    evidence: [
      { url: 'https://www.youtube.com/watch?v=hFbZdSAcfR0', source: 'CA Piyush Bafna · YouTube · "ADANI vs BIRLA — Which Billionaire Wins in Cement?"', text: 'Consumer reporting Ambuja cement floor developed potholes within one year while adjacent UltraTech pour remained intact. Second consumer: current cement quality "can be chopped with fingernails."' },
      { url: 'https://www.instagram.com/p/DWysemZCMqz/', source: 'Instagram @adanicementofficial — "Green Building Centres / TNFD Sustainability"', text: 'Brand actively deploying sustainability certifications as quality proxy — but organic post engagement (comments vs. likes ratio) indicates passive, disengaged audience. Counter-narrative not landing.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=nPt9xGCzRAg', title: 'Engineer Wala Construction YT — "Ambuja vs UltraTech vs ACC Cement Comparison 2025 | Real Test Result"' },
      { url: 'https://www.youtube.com/watch?v=Rsg8TQUG5o4', title: 'Owner\'s Verdict YT — "ACC vs Ultratech vs Ambuja vs Dalmia vs JSW — Best cement for plaster?"' },
      { url: 'https://www.youtube.com/watch?v=MxZ29t1qxkQ', title: 'RK Engineering YT — "Drop Test: Ultratech Premium VS ACC F2R — Cement Review"' },
      { url: 'https://www.youtube.com/watch?v=g0crYcicc9w', title: 'Civil Ki Bat YT — "Adani Cement Placement Doubt — Civil Engineers Discussion"' },
    ],
    analystNote: 'The Ambuja Kawach trademark lawsuit against JSW Cement (Delhi High Court, September 2025) proves the brand itself recognizes the fragility of its quality equity. You don\'t sue to protect a brand name unless you know the physical product is under consumer scrutiny.',
  },
  {
    id: 8, num: '08',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'financial',
    platforms: ['reddit', 'twitter', 'news'],
    title: 'Hindenburg Ghost + US SEC Case — Governance Risk Premium',
    argument: '"Hindenburg Adani cement" remains an active search query despite SEBI proceedings concluding. Now the US SEC civil fraud case (April 2026) has reactivated the governance trust deficit. Retail investors explicitly cite these proceedings as justification for avoiding deeply discounted ACC equity.',
    evidence: [
      { url: null, source: 'The Indian Eye / Financial Express · April 7–8, 2026', text: 'Gautam and Sagar Adani petitioned US District Court NY for pre-motion conference to dismiss SEC civil fraud case (bribery allegations). April 30, 2026 deadline to file formal dismissal motion.' },
      { url: 'https://www.thecore.in/business/adani-ambuja-acc-merger-cement-consolidation-857016', source: 'The Core — "Adani\'s Long-Awaited Cement Merger Arrives As An Afterthought For The Market"', text: 'Market reaction to the mega-merger announcement described as "muted." Stock did not surge on transformational news. The trust discount is quantifiable in price action.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=4c_9iJdzPio', title: 'Dr. Mukul Agrawal YT — "Adani Stock Crash Today | US SEC Summons Explained"' },
      { url: 'https://www.youtube.com/watch?v=dsb1nfRrVUE', title: 'Zee Business YT — "Adani Stocks Fall Sharply: What Happened in US Court? Market Impact"' },
      { url: 'https://www.reddit.com/r/IndianStockMarket/comments/1no70bs/adani_stocks_seems_prospective_right_now/', title: 'r/IndianStockMarket — "Adani stocks seems prospective right now?" (community debate)' },
    ],
    analystNote: 'The SEC case is the highest-severity legal risk in this dataset. Unlike SEBI proceedings (domestic, perceived as politically influenced), US Federal Court involvement carries international credibility that cannot be dismissed as partisan opposition.',
  },
  {
    id: 9, num: '09',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'environmental',
    platforms: ['twitter', 'reddit', 'news'],
    title: 'Farmer Dispossession — Maharashtra & Assam Land Grab Allegations',
    argument: 'In Chandrapur, Maharashtra, farmers allege land was acquired through shell companies acting as Ambuja fronts. In Kokrajhar, Assam, viral claims spread that 3,000 bighas were handed to Adani for a cement plant — prompting a formal Adani denial labelling claims "mischievous and baseless." The denial itself confirms the scale of the allegation.',
    evidence: [
      { url: 'https://www.youtube.com/watch?v=YyHruVi_I1Q', source: 'BBC News Hindi · YouTube · Bihar Land Deal Ground Report', text: '"नीतीश हटाओ, बिहार बचाओ / 15 लाख रुपये वाली जमीन का मुआवजा 1 लाख रुपये से भी कम 😢😢😢" — State government complicity in land undervaluation directly named.' },
      { url: null, source: 'Regional Reports — Assam / Maharashtra · 2025', text: 'Adani Group issued formal denial of Kokrajhar Assam land grab allegations, labelling claims "mischievous and baseless." Chandrapur Maharashtra: shell company front allegations circulating in local media.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=a8v8atWg_k4', title: 'Northeast Unexplored YT — "3000 Bigha Land Scam???" (Assam)' },
      { url: 'https://www.youtube.com/watch?v=IQJaeYaoSsQ', title: 'Cobrapost YT — "Factcheck: Did Adani Get 3,000 Bighas in Assam? Dima Hasao Row"' },
      { url: 'https://www.youtube.com/watch?v=Ln3x4uA45YA', title: 'GPlus YT — "Is this a joke? Gauhati High Court Judge on 3,000 bighas given for cement factory in Assam"' },
      { url: 'https://www.reddit.com/r/unitedstatesofindia/comments/1mtfz8m/assam_bjp_govt_gave_81_million_sqft_to_adani_to/', title: 'r/unitedstatesofindia — "Assam BJP Govt gave 81 million Sq.ft to Adani to build a cement plant"' },
      { url: 'https://www.reddit.com/r/assam/comments/1mu97n7/this_video_that_people_are_circulating_the_land/', title: 'r/assam — "This video that people are circulating the land is given for 30 years…" (fact-check thread)' },
    ],
    analystNote: 'The formal denial of the Assam allegations — required because the claims went viral at a scale demanding official response — actually confirms the narrative has penetrated mainstream awareness. The denial is evidence of impact, not evidence of resolution.',
  },
  {
    id: 10, num: '10',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'financial',
    platforms: ['news', 'youtube', 'twitter'],
    title: 'JAL Acquisition: ₹14,535 Crore Under Supreme Court Fire',
    argument: 'Adani\'s ₹14,535-crore resolution plan for Jaypee Associates\' assets (approved by CoC in November 2024) faces Vedanta\'s counter-bid before the Supreme Court (active: April 2026). An adverse ruling means ₹14,535 crore in committed exposure without asset acquisition — debt without cement capacity.',
    evidence: [
      { url: 'https://www.thehindu.com/business/Industry/supreme-court-does-not-interfere-with-order-allowing-adani-to-acquire-jal-asks-nclat-to-decide-promptly/article70830205.ece', source: 'The Hindu — "Supreme Court does not interfere with order allowing Adani to acquire JAL, asks NCLAT to decide promptly"', text: 'Supreme Court allows Adani\'s JAL acquisition order to stand, directing NCLAT to expedite hearings on Vedanta\'s appeals. Proceedings ongoing.' },
      { url: 'https://www.youtube.com/watch?v=HIDBJf1OuBk', source: 'Mint · YouTube · "Big Win For Adani Group, Secures $1.7bn Takeover Of Bankrupt Jaypee Group"', text: 'NCLT approved Adani\'s resolution plan. However binary court risk remains — any adverse NCLAT ruling creates debt exposure without asset.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=XywoatyPE4Q', title: 'Biz Tak YT — "Adani vs Vedanta: Jaypee Group की कंपनी पर अडानी की जीत, वेदांता को लगा झटका"' },
      { url: 'https://www.youtube.com/watch?v=J_RqUK6riig', title: 'Jagran Business YT — "Gautam Adani की हुई Jaiprakash Associates! ₹15 हजार करोड़ की महा-डील से क्या मिला?"' },
      { url: 'https://www.reddit.com/r/JIIT__NOIDA/comments/1lt049y/impact_of_jal_sale_to_adani_on_jiit_and_future/', title: 'r/JIIT__NOIDA — "Impact of JAL sale to Adani on JIIT and future for JIIT"' },
    ],
    analystNote: 'The JAL acquisition adds 7+ MTPA cement capacity and positions Adani in UP/Delhi NCR — strategically vital. But the concurrent Vedanta legal challenge creates a live binary event risk. Adverse ruling generates immediate stock impact + fresh "crony deal reversal" narrative.',
  },
  {
    id: 11, num: '11',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'brand',
    platforms: ['youtube', 'news'],
    title: 'Adani vs. Birla — Heritage Usurpation Narrative',
    argument: 'YouTube creators have framed the ACC/Ambuja acquisition as a civilizational contest: "Old India Heritage (Birla) vs. New Political India (Adani)." This humanizes the victim (Birla\'s legacy) and demonizes the acquirer. The top comment frames Adani\'s advantage as purely political — "Adani has government support, but BIRLA has vintage."',
    evidence: [
      { url: 'https://www.youtube.com/watch?v=hFbZdSAcfR0', source: 'CA Piyush Bafna · YouTube · "ADANI vs BIRLA — Which Billionaire Wins in Cement?"', text: 'Top comment: "Adani has government support — but BIRLA has vintage." Frames Adani not as a better operator but as a politically-backed usurper.' },
      { url: 'https://www.youtube.com/watch?v=zOddw7fimh0', source: 'Khan Sir Uncut · YouTube · "The real truth of Adani and Ambani"', text: '"लोग टाटा को विलन क्यों नहीं समझते हैं। लोग अजीम जी प्रेम जी को विलन क्यों नहीं समझते।" — Users questioning why only Adani is villainized — the answer they arrive at is political taint.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=xAHBnHs9Xi8', title: 'CA Piyush Bafna YT — "Birla vs Adani: $100B WAR That Will SHOCK You"' },
      { url: 'https://www.youtube.com/watch?v=YAUjcS2WogQ', title: 'CA Rahul Malodia YT — "Birla Vs Adani: Real Estate का नया युद्ध!"' },
      { url: 'https://www.youtube.com/watch?v=1649', title: 'Rishab Jain YT — "Adani Cement vs. Birla: The Cement War | Case Study"' },
      { url: 'https://www.youtube.com/watch?v=iA7-lNK-yiw', title: 'Rishab Jain YT — "Adani Cement vs. Birla: The Cement War | Case Study"' },
    ],
    analystNote: 'Heritage vs. Usurpation narratives are emotionally sticky and do not respond to financial data. Adani cannot become "vintage" in 3 years of ownership. This narrative requires a 5-10 year trust-building arc. No short-term fix exists.',
  },
  {
    id: 12, num: '12',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'financial',
    platforms: ['news', 'twitter', 'reddit'],
    title: '$3.5B Debt Refinancing — Financial Engineering Fears',
    argument: 'Adani Group initiating talks to refinance $3.5 billion in Ambuja/ACC acquisition loans (Moneycontrol, March 2026) while simultaneously executing the mega-merger and managing a petcoke price surge (11% to $135/tonne) creates a perception of financial pressure that institutional analysts are tracking with caution.',
    evidence: [
      { url: 'https://www.moneycontrol.com/budget/adani-group-begins-talks-to-refinance-3-5-billion-ambuja-acc-acquisition-loans-article-13866319.html', source: 'Moneycontrol — "Adani group begins talks to refinance $3.5 billion Ambuja, ACC acquisition loans"', text: 'Adani Group begins talks to refinance $3.5 billion in Ambuja and ACC acquisition loans. Simultaneous with merger integration execution.' },
      { url: null, source: 'Industry Data · FY26', text: 'Petcoke prices up 11% to $135/tonne. Margin pressure building. ₹100/tonne merger synergy target under threat from input cost inflation. Potential price hikes to consumers.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=UXvj-3fjp4o', title: 'Anant Ladha YT — "Adani big power game - 80% crash" (debt analysis)' },
      { url: 'https://www.reddit.com/r/IndianStockMarket/comments/1ls13x2/adani_reliance_tata_birla_vs_you/', title: 'r/IndianStockMarket — "Adani, Reliance, Tata, Birla… vs You" (investment thesis debate)' },
    ],
    analystNote: 'Refinancing at acquisition debt scale ($3.5B) while integrating three entities and managing legal proceedings (SEC + JAL) is operationally complex. Any credit market tightening activates the debt trap narrative that Reddit communities have been priming since 2023.',
  },
  {
    id: 13, num: '13',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'media',
    platforms: ['reddit', 'twitter'],
    title: 'Media Capture — IANS Takeover Credibility Paradox',
    argument: 'Adani\'s full acquisition of the IANS news agency, combined with existing media investments, has created a credibility paradox: every positive coverage of Adani cement in mainstream media is now interpreted as captured content by Reddit and Twitter communities. Organic positive journalism has become structurally unbelievable.',
    evidence: [
      { url: 'https://www.reddit.com/r/india/comments/1qll38z/adani_group_completes_full_takeover_of_ians_news/', source: 'Reddit r/india — "Adani Group completes full takeover of IANS news agency"', text: 'Community commentary explicitly connects media control to narrative control around cement controversies. Thread bridging business expansion and editorial independence concerns.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=2223', title: 'NDTV YT — "Adani Group News: False, Baseless: LIC Rejects Washington Post Report On Adani Link"' },
      { url: 'https://www.youtube.com/watch?v=2223rtA3xuEX-Rs', title: 'NDTV — LIC/Washington Post Adani coverage' },
    ],
    analystNote: 'This narrative is a strategic trap. If mainstream media defends Adani, critics cite media capture. If mainstream media covers negatively, it becomes evidence. The only escape route is demonstrably arms-length, third-party journalism and independent audits that cannot be associated with IANS distribution.',
  },
  {
    id: 14, num: '14',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'brand',
    platforms: ['news', 'twitter'],
    title: 'Kawach Trademark War — Brand Fragility Exposed',
    argument: 'Ambuja Cements sued JSW Cement in Delhi High Court (September 2025) alleging Jal Kavach deliberately mimics the Kawach brand — copying phonetic elements, packaging layouts, and the "Giant Man\'s Arm" logo. The lawsuit inadvertently signals that Ambuja\'s most valuable brand asset needs legal protection precisely when its physical quality is under consumer question.',
    evidence: [
      { url: null, source: 'BestMediaInfo / AngelOne · September 18, 2025', text: 'Ambuja Cements files trademark infringement suit in Delhi High Court against JSW Cement. Alleges "Jal Kavach" copies the Ambuja "Kawach" brand phonetically and visually. Court directed parties to mediation.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=Rsg8TQUG5o4', title: 'Owner\'s Verdict YT — "ACC vs Ultratech vs Ambuja vs Dalmia vs JSW — Best cement for plaster in India?"' },
      { url: 'https://www.instagram.com/p/DWGxBzCE-mr/', title: 'ACC Instagram @acclimited — "89 saalon se iss bharose ke rishte mein bandhe" (brand legacy post)' },
    ],
    analystNote: 'Suing to protect a brand name while consumer reviews question the product quality creates a contradictory brand signal. The lawsuit says "our brand is valuable" while YouTube reviews say "the cement is not what it used to be." Strategically, this is counter-productive in the current sentiment environment.',
  },
  {
    id: 15, num: '15',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'political',
    platforms: ['twitter', 'news', 'reddit'],
    title: 'Kalyan EIA Exemption — Regulatory Capture Evidence',
    argument: 'The Union Ministry of Environment\'s September 2025 proposal to exempt standalone cement grinding units from Environmental Impact Assessments perfectly aligns with Adani\'s need to build the contested ₹1,400-crore Kalyan plant without public hearings — the exact type of process that turned violent in Visakhapatnam.',
    evidence: [
      { url: null, source: 'Land Conflict Watch / Financial Express · September 2025', text: 'MoEF&CC draft proposal would exempt standalone cement grinding units from mandatory EIA and public consultations. Critics argue this specifically enables the Adani Kalyan plant, bypassing community opposition.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=79JFbto2vmA', title: 'HW News English YT — "Supriya Shrinate targets PM Modi over Adani\'s cement plant in the Mumbai suburb of Kalyan"' },
      { url: 'https://www.youtube.com/watch?v=KQuTuOvuD4o', title: 'BBC News Marathi YT — Adani cement grinding project resistance' },
      { url: 'https://www.reddit.com/r/mumbai/comments/1o3zf0x/the_environment_ministry_is_tweaking_a_rule_for/', title: 'r/mumbai — "The Environment Ministry Is Tweaking A Rule For Cement…" (EIA rule thread)' },
    ],
    analystNote: 'This is the single most empirically damaging piece of evidence in the crony capitalism narrative. It is specific, dated, government-sourced, and has a direct beneficiary. It will be cited as primary evidence in every future regulatory capture argument involving Adani cement.',
  },
  {
    id: 16, num: '16',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'financial',
    platforms: ['news', 'twitter'],
    title: '"Market Afterthought" — Institutional Indifference to Merger',
    argument: 'The Core\'s headline for the December 2025 merger announcement — "Adani\'s Long-Awaited Cement Merger Arrives As An Afterthought For The Market" — captures institutional sentiment precisely. A merger expected to create a 155 MTPA cement powerhouse generated muted stock response. The trust discount is quantifiable in price action.',
    evidence: [
      { url: 'https://www.thecore.in/business/adani-ambuja-acc-merger-cement-consolidation-857016', source: 'The Core — "Adani\'s Long-Awaited Cement Merger Arrives As An Afterthought For The Market" · January 2026', text: 'Institutional analysis questioning whether merger creates real synergy or is primarily debt rationalization. Market reaction described as muted despite transformational scale.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=ZaRTSOSWKRs', title: 'Zee Business YT — "Ambuja-ACC-Orient Cement Mega Merger — Will Shares Surge After the Deal?" (Anil Singhvi)' },
      { url: 'https://www.youtube.com/watch?v=E_or4vHe2wk', title: 'Upstox YT — "Ambuja–ACC–Orient Merger: ₹100/Tonne Savings | Markets Today"' },
      { url: 'https://www.youtube.com/watch?v=lwgVWwtA22A', title: 'Markets by Zerodha Hindi YT — "How India\'s cement giants are expanding fast | The Daily Brief"' },
      { url: 'https://timesofindia.indiatimes.com/business/india-business/cement-consolidation-ambuja-merges-acc-and-orient-into-one-platform-what-the-adani-groups-scale-bet-means-for-investors/articleshow/126139694.cms', title: 'Times of India — "Cement consolidation: Ambuja merges ACC and Orient — what the Adani Group\'s scale bet means for investors"' },
    ],
    analystNote: 'Motilal Oswal Buy on Ambuja (₹740 target) vs Emkay Sell on ACC (₹1,600 target) shows the market has already bifurcated — it trusts Ambuja as the beneficiary entity and views ACC as the sacrificial vehicle. The merger narrative is already priced in as a zero-sum game.',
  },
  {
    id: 17, num: '17',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'brand',
    platforms: ['youtube', 'twitter'],
    title: 'BBC Hindi & Foreign Media Amplification',
    argument: 'BBC Hindi\'s YouTube ground report on the Bihar land deal generated a comment "बीबीसी की आवाज पुरे विश्व मे जायगी 🙏" — indicating that audiences actively celebrate foreign media covering Adani, because they distrust domestic coverage as captured. Foreign media amplification of any negative development reaches scale that domestic opposition coverage cannot.',
    evidence: [
      { url: 'https://www.youtube.com/watch?v=YyHruVi_I1Q', source: 'BBC News Hindi · YouTube · "Adani Group को Bihar में 1 रुपए में 1 हज़ार एकड़ जमीन — ज़मीन, क्या है सच"', text: '"बीबीसी की आवाज पुरे विश्व मे जायगी 🙏" — Audiences celebrating international media coverage as validation for domestic narrative suppression claims. Second-most-liked comment in the dataset.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=3249', title: 'Live Law YT — "3000 BIGHAS TRIBAL LAND GIVEN TO CEMENT COMPANY IN ASSAM"' },
      { url: 'https://www.youtube.com/watch?v=6L96H2Z2DjE', title: 'Live Law YT — "3000 BIGHAS TRIBAL LAND GIVEN TO CEMENT COMPANY IN ASSAM"' },
    ],
    analystNote: 'International media covering Adani controversies carries disproportionate legitimacy with Indian audiences who perceive domestic media as compromised. The BBC/Reuters/FT coverage of the SEC case in April 2026 will have 5-10× the credibility impact of equivalent Indian coverage.',
  },
  {
    id: 18, num: '18',
    intensity: 'high', intensityLabel: '◆ HIGH',
    theme: 'consumer',
    platforms: ['twitter', 'reddit', 'news'],
    title: 'Cement Price Hike Anticipation — Monopoly Tax',
    argument: '"Adani cement price hike" is an active search query cluster. With petcoke prices up 11%, $3.5B refinancing pressure, and monopoly formation underway, dealer networks anticipate localized price hikes being passed to consumers. The GST reform narrative (potential ₹30-35/bag reduction) creates contradictory signals that increase consumer anxiety.',
    evidence: [
      { url: null, source: 'Market Data / Dealer Reports · FY26', text: 'Petcoke: $135/tonne (+11%). Dealer networks anticipating localized price hikes in early 2026 to mitigate cost pressure from input inflation and debt servicing.' },
      { url: null, source: 'GST Council Reports · 2025', text: 'Potential GST overhaul could reduce retail cement price ₹30-35 per 50kg bag. Contradicts dealer price hike expectations — creating consumer uncertainty and search query volume.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=4PN8OUdUyQQ', title: 'BuildMakaan YT — "Cement GST घटा — Now Cement Prices are Down? Ultratech vs ACC cement"' },
      { url: 'https://www.youtube.com/watch?v=ELxVaca46Vc', title: 'sai builders mp YT — "All Cement price today, cement new price after GST rate"' },
      { url: 'https://www.youtube.com/watch?v=_wmfJyrx_6g', title: 'BuildMakaan YT — "Ambuja Cement vs Ultratech Cement — Cement कौन सा बेहतर है?"' },
    ],
    analystNote: 'Price hike narrative is a consumer-facing monopoly narrative that will materialize the moment Adani cement prices deviate from market averages in any region. The search query volume indicates consumer anxiety is already primed and awaiting confirmation.',
  },

  // ════ MEDIUM ════
  {
    id: 19, num: '19',
    intensity: 'medium', intensityLabel: '◇ MEDIUM',
    theme: 'financial',
    platforms: ['news', 'twitter'],
    title: 'Orient Cement Shareholders — The Forgotten Victims',
    argument: 'Orient Cement shareholders received a ~9% premium in the merger ratio (100:33 Ambuja shares per 100 Orient shares) — described by retail investors as derisory given cement capacity is valued at just ~$48/tonne, while Adani paid ₹395/share in cash just months prior. The narrative of "buy high, offer low" is active on trading forums.',
    evidence: [
      { url: null, source: 'Investor Forums / Reddit r/IndianStockMarket · December 2025', text: 'Orient shareholders calculating that the implied merger valuation ($48/tonne) is significantly below replacement cost. Adani paid ₹395/share in cash for Orient, now offering ~9% premium through Ambuja shares at market price.' },
      { url: 'https://m.economictimes.com/industry/indl-goods/svs/cement/adani-owned-ambuja-cements-approves-amalgamation-of-acc-and-orient-cement-to-create-pan-india-cement-powerhouse/articleshow/126125050.cms', source: 'Economic Times — "Adani\'s Ambuja Cements approves merger of ACC and Orient Cement"', text: 'Share exchange ratio: 100 Orient shares → 33 Ambuja shares. 100 ACC shares → 328 Ambuja shares. Both ratios generating friction in retail investment communities.' },
    ],
    relatedSources: [
      { url: 'https://www.reddit.com/r/IndianStreetBets/comments/1qkn0ww/whats_happening_to_orient_cement/', title: 'r/IndianStreetBets — "What\'s happening to Orient cement?"' },
      { url: 'https://www.reddit.com/r/IndianStreetBets/comments/1pih1j1/anyone_betting_on_gamestop_oh_sorry_orientcem/', title: 'r/IndianStreetBets — "Anyone betting on GAMESTOP? oh sorry, ORIENTCEM"' },
      { url: 'https://www.youtube.com/watch?v=L2kUIbVUSu0', title: 'Dr. Mukul Agrawal YT — "ACC & Orient cement Merge Ho Gaye? shareholder ko kya milega?"' },
      { url: 'https://www.goodreturns.in/news/100-328-100-33-shares-exchange-ratio-adani-merger-ambuja-merge-acc-orient-cement-buy-adani-stocks-1477620.html', title: 'Goodreturns — "100:328 + 100:33 Adani Mega Merger! Ambuja To Merge ACC & Orient Cement"' },
    ],
    analystNote: 'Orient Cement shareholders are a smaller, less vocal group than ACC shareholders but their grievance is arithmetically cleaner. If organized, they represent a secondary litigation risk alongside the ACC minority shareholder challenge.',
  },
  {
    id: 20, num: '20',
    intensity: 'medium', intensityLabel: '◇ MEDIUM',
    theme: 'consumer',
    platforms: ['reddit', 'news'],
    title: 'Dealer Network Disruption & Loyalty Fracture',
    argument: '"Ambuja cement dealership" and "ACC cement dealer complaint" appear as active search queries. The consolidation into a "One Cement Platform" threatens dealer commission structures, territory allocations, and exclusive arrangements built over decades with Holcim-era management.',
    evidence: [
      { url: null, source: 'Search Data · SerpAPI Dataset · April 2026', text: '"Ambuja cement dealership" and "ACC cement dealer complaint" appear as active search queries across the monitored dataset, indicating active dealer community concern about post-merger commercial arrangements.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=PwwO0Y4VVAw', title: 'Chhota Business YT — "Investment for Cement Dealership & Retailership"' },
      { url: 'https://www.reddit.com/r/StockMarketIndia/comments/1qgvx5k/what_should_i_do_with_ambuja_cement_stock/', title: 'r/StockMarketIndia — "What should I do with Ambuja Cement stock?" (dealer/retail investor thread)' },
    ],
    analystNote: 'Dealer network disruption is a slow-burn risk that B2C metrics won\'t catch until it\'s too late. Dealers who defect to UltraTech take years of regional market share with them. The consolidation creates an opportunity for competitors to poach systematically.',
  },
  {
    id: 21, num: '21',
    intensity: 'medium', intensityLabel: '◇ MEDIUM',
    theme: 'political',
    platforms: ['twitter', 'reddit'],
    title: '"Ambani-Adani ka UGC" — Brand Halo Contamination',
    argument: 'During the UGC Equity Regulations 2026 controversy, "Education for Sale" and "Ambani-Adani ka UGC" trended simultaneously. Cement brand has been pulled into education privatization discourse — a topic that mobilizes a completely different, younger demographic. Brand contamination extends beyond the core cement sector.',
    evidence: [
      { url: null, source: 'Social Listening Data · UGC Rollback Dataset · January 2026', text: '"Ambani-Adani ka UGC" trending tag during education reform protests. Connects Adani brand to education privatization narrative without any direct Adani involvement in education policy.' },
    ],
    relatedSources: [
      { url: 'https://www.reddit.com/r/StockMarketIndia/comments/1rp5uni/the_adani_octopus_the_growth_engine_of_the_nation/', title: 'r/StockMarketIndia — "The Adani \'Octopus\'... the growth engine of the nation, OR…?" (brand perception thread)' },
    ],
    analystNote: 'This is classic brand halo contamination — Adani\'s name is now a shorthand for any privatization-adjacent controversy regardless of sector. The cement brand is absorbing reputational damage from unrelated business verticals and political controversies.',
  },
  {
    id: 22, num: '22',
    intensity: 'medium', intensityLabel: '◇ MEDIUM',
    theme: 'brand',
    platforms: ['news', 'twitter'],
    title: 'Sanghi Industries Silent Absorption',
    argument: 'The Ambuja Cements and Sanghi Industries merger approval (World Cement, early 2026) was processed with minimal public attention — which itself generates a skepticism narrative: that Adani\'s regulatory approvals are "systematically accelerated" while community objections are buried in procedural paperwork.',
    evidence: [
      { url: 'https://www.worldcement.com/indian-subcontinent/11022026/ambuja-cements-and-sanghi-industries-merger-approved/', source: 'World Cement — "Ambuja Cements and Sanghi Industries merger approved" · February 2026', text: 'Ambuja Cements and Sanghi Industries merger approved with minimal public consultation visible in record — adds to pattern of rapid regulatory processing for Adani acquisitions.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=Z27GMCIPhwI', title: 'Money9 YT — "ACC, Ambuja, Orient, Sanghi Industries मिलकर बनेगी एक बड़ी कंपनी — कहां करें खरीदारी?"' },
      { url: 'https://www.cemnet.com/News/story/180507/adani-group-to-merge-ambuja-acc-and-orient-cement-into-single-platform.html', title: 'International Cement Review — "Adani Group to merge Ambuja, ACC and Orient Cement into single platform"' },
    ],
    analystNote: 'Individually this is a minor event. In the pattern-matching environment that critics operate in, it becomes Exhibit N in the "regulatory capture" argument. Each smooth approval retroactively makes the difficult ones (Visakhapatnam) look like targeted resistance.',
  },
  {
    id: 23, num: '23',
    intensity: 'medium', intensityLabel: '◇ MEDIUM',
    theme: 'consumer',
    platforms: ['youtube', 'news'],
    title: 'EBITDA ₹1,250/Tonne Target — Infrastructure Positioning Narrative',
    argument: 'Adani\'s strategy of integrating cement into the broader port-and-energy logistics network (targeting ₹4,000/tonne production costs and ₹1,250/tonne EBITDA by FY28) is the one narrative that financial analysts find genuinely compelling. The port-logistics cost advantage is real and quantifiable.',
    evidence: [
      { url: null, source: 'Analyst Reports / Ambuja Cement Management Guidance · FY26', text: 'Adani targeting ₹100/tonne cost savings from merger synergies. Port and energy logistics integration reducing freight costs structurally. EBITDA target ₹1,250/tonne by FY28.' },
      { url: null, source: 'Official Ambuja Cements Press Release · January 30, 2026', text: 'Q3 FY26 record performance: 18.9 MnT volume (+17% YoY). PAT up 258% YoY normalized. Revenue: ₹10,277 crore quarterly.' },
    ],
    relatedSources: [
      { url: 'https://www.youtube.com/watch?v=1438', title: 'NSE BSE Official YT — "Ambuja Cement Q2 Results 2026 — Ambuja Cement Results Today"' },
      { url: 'https://www.youtube.com/watch?v=g_URn9MbFOU', title: 'NSE BSE Official YT — "Ambuja Cement Q2 Results 2026 — Ambuja Cement Results Today"' },
      { url: 'https://www.youtube.com/watch?v=3901', title: 'Upstox YT — "India\'s Cement Battle: Adani vs UltraTech — M&A War & Sector Deep Dive"' },
      { url: 'https://www.youtube.com/watch?v=QV2QxwEFGTg', title: 'Upstox YT — "India\'s Cement Battle: Adani vs UltraTech — M&A War & Sector Deep Dive"' },
    ],
    analystNote: 'This is the one narrative that Adani controls. The port-logistics advantage is real, not political. Financial analysts who cover the sector (Motilal Oswal) are pricing it in. The problem is that this narrative reaches institutional investors — not the retail community or the local communities generating the backlash.',
  },

  // ════ POSITIVE ════
  {
    id: 24, num: '24',
    intensity: 'positive', intensityLabel: '↑ POSITIVE',
    theme: 'positive',
    platforms: ['instagram', 'twitter', 'news'],
    title: 'Odisha ₹33,000 Crore Investment — Infrastructure Leadership',
    argument: 'Adani Group\'s Odisha investment announcement (cement plant: ₹2,100 crore; total: ₹33,000 crore including power and data) is being framed as genuine infrastructure development creating 2,500+ jobs. Official brand channels are pushing this hard, and it is the most positively received content across platforms.',
    evidence: [
      { url: 'https://www.instagram.com/p/DW4GqGwoOFE/', source: 'Instagram @adanionline — "Adani\'s ₹2,100 crore cement manufacturing unit near Cuttack"', text: '"Great visions need material to become real. Adani\'s ₹2,100 crore cement manufacturing unit near Cuttack provides exactly that — supplying cement for Odisha\'s hospitals, schools, roads and homes, while creating over 2,500 employment opportunities."' },
      { url: 'https://www.republicworld.com/initiatives/adani-group-bets-big-on-odisha-announces-rs-33000-crore-investments-in-data-power-cement', source: 'Republic World — "Adani Group Bets Big On Odisha, Announces Rs 33,000+ Crore Investments In Data, Power, Cement"', text: 'Official state government reception positive. Odisha CM welcomed investment. Frames Adani as infrastructure partner for state development.' },
    ],
    relatedSources: [
      { url: 'https://x.com/AdaniOnline/status/2041908940099739751', title: 'Twitter @AdaniOnline — "Great visions need material to become real" (Odisha cement plant announcement)' },
      { url: 'https://x.com/otvnews/status/2042088635214999873', title: 'OTV News Twitter — "Adani Group to invest Rs 33,000 crore in Odisha across power, cement, data sectors"' },
      { url: 'https://x.com/ANI/status/2041780148090122656', title: 'ANI — "Khordha, Odisha: Managing Director of Adani Ports" (official investment ceremony coverage)' },
    ],
    analystNote: 'This is the one arena where the brand narrative is gaining genuine traction — state-level infrastructure investment framing. Replicated in more states, demonstrated with visible job creation, and documented with worker testimonials, this is the path to trust rebuilding.',
  },
  {
    id: 25, num: '25',
    intensity: 'positive', intensityLabel: '↑ POSITIVE',
    theme: 'positive',
    platforms: ['instagram', 'twitter'],
    title: 'India\'s First TNFD Cement Company — ESG Leadership Claim',
    argument: 'Adani Cement becoming India\'s first cement company to adopt the TNFD (Taskforce on Nature-related Financial Disclosures) framework is a genuinely first-mover ESG move. In institutional investor circles and ESG-focused fund mandates, this carries real differentiation value — particularly against UltraTech.',
    evidence: [
      { url: 'https://www.instagram.com/p/DRJ32zhCcsO/', source: 'Instagram @adanicementofficial — "India\'s first cement company to adopt the TNFD framework"', text: '"Adani Cement has become India\'s first cement company to adopt the TNFD framework, reinforcing its commitment to nature-related disclosures and sustainable operations."' },
      { url: 'https://www.instagram.com/p/DWrNC02Ehjg/', source: 'Instagram @adanicementofficial — "Adani Cement × NAREDCO Partnership"', text: 'Adani Cement and NAREDCO collaborate to strengthen India\'s construction ecosystem through sustainable materials and technology.' },
    ],
    relatedSources: [
      { url: 'https://www.instagram.com/p/DWysemZCMqz/', title: 'Instagram @adanicementofficial — "Adani Cement advancing eco-friendly construction through Green Building Centres"' },
      { url: 'https://twitter.com/AmbujaCementACL/status/1920723428614586718', title: 'Twitter @AmbujaCementACL — "At our Gagal Cement plant in Himachal, the eucalyptus…" (sustainability post)' },
      { url: 'https://twitter.com/ACCLimited/status/1924790701557957058', title: 'Twitter @ACCLimited — "Adani Cement is advancing its legacy of nation-building"' },
    ],
    analystNote: 'TNFD is a credible, internationally recognized framework — not a greenwashing badge. However, its impact is severely undermined by the concurrent NGT violations at Barmana. TNFD adoption without operational compliance is the definition of greenwashing, and informed critics will make that connection.',
  },
];

// ─── FILTER STATE ───
let activeTheme = 'all';
let activePlatform = 'all';
let activeSeverity = 'all';

// ─── PLATFORM DOT COLORS ───
const PLATFORM_COLORS = {
  youtube: '#cc0000',
  twitter: '#1a1a1a',
  instagram: '#dc2743',
  reddit: '#e84015',
  news: '#1c3a6e',
};

// ─── RENDER PLATFORM TAGS ───
function renderPlatformTags(platforms) {
  return platforms.map(p => `<span class="plat-pill plat-${p}">${p}</span>`).join('');
}

// ─── RENDER EVIDENCE ───
function renderEvidence(evidence) {
  return evidence.map(e => {
    const src = e.source || '';
    const isOfficial = src.includes('@adani') || src.includes('adanionline') || src.includes('adanicementofficial') || src.includes('Ambuja Cements Press') || src.includes('Official Ambuja') || src.includes('@AdaniOnline') || src.includes('@AdaniCement') || src.includes('@acclimited') || src.includes('ambuja_cement_official');
    const cls = isOfficial ? '' : 'public-post';
    const tagCls = isOfficial ? '' : 'public-tag';
    // Strip view/like/comment counts from source label
    const cleanSrc = src.replace(/·?\s*[\d,]+\s*(Views?|Likes?|Comments?|Upvotes?)[^·]*/gi, '').replace(/·\s*·/g, '·').trim().replace(/·\s*$/, '').trim();
    const sourceEl = e.url
      ? `<a href="${e.url}" target="_blank" rel="noopener" class="handle-tag ${tagCls}" style="display:block;margin-top:10px;font-size:11px;font-weight:800;color:inherit;text-transform:none;letter-spacing:0;">${cleanSrc} <span style="opacity:0.5;">↗</span></a>`
      : `<div class="handle-tag ${tagCls}" style="margin-top:10px;font-size:11px;font-weight:700;">${cleanSrc}</div>`;
    return `
    <div class="handle-block ${cls}" style="margin-bottom:8px;">
      ${sourceEl}
      <div class="handle-text">${e.text}</div>
    </div>`;
  }).join('');
}

// ─── RENDER NARRATIVE CARD ───
function renderCard(n) {
  // Build related sources from evidence with urls AND from n.relatedSources
  const evSources = n.evidence.filter(e => e.url).map(e => ({ url: e.url, title: e.source.replace(/·?\s*[\d,]+\s*(Views?|Likes?|Comments?|Upvotes?)[^·]*/gi,'').replace(/·\s*·/g,'·').trim().replace(/·\s*$/,'').trim() }));
  const extraSources = (n.relatedSources || []);
  const allSources = [...evSources, ...extraSources];
  const sourcesHtml = allSources.length ? `
    <button class="sources-toggle" onclick="var list=this.nextElementSibling;list.classList.toggle('open');this.textContent=list.classList.contains('open')?'▲ Hide':'▶ More Related Data Sources (${allSources.length})'">▶ More Related Data Sources (${allSources.length})</button>
    <div class="sources-list">
      ${allSources.map(s => `<a href="${s.url}" target="_blank" rel="noopener"><span class="src-title">${s.title}</span></a>`).join('')}
    </div>` : '';
  return `
    <div class="narrative-card" 
      data-theme="${n.theme}" 
      data-platforms="${n.platforms.join(',')}" 
      data-intensity="${n.intensity}">
      <div class="narrative-card-num">${n.num}</div>
      <div class="narrative-header">
        <span class="intensity-badge ${n.intensity}">${n.intensityLabel}</span>
        <span class="theme-badge">${THEMES[n.theme].icon} ${THEMES[n.theme].label}</span>
      </div>
      <div class="narrative-title">${n.title}</div>
      <div class="narrative-argument">${n.argument}</div>
      ${renderEvidence(n.evidence)}
      <div class="analyst-note"><div class="analyst-note-label">Analyst Assessment</div>${n.analystNote}</div>
      ${sourcesHtml}
      <div class="platform-tags">${renderPlatformTags(n.platforms)}</div>
    </div>
  `;
}

// ─── APPLY FILTERS ───
function applyFilters() {
  const cards = document.querySelectorAll('.narrative-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const theme = card.dataset.theme;
    const platforms = card.dataset.platforms.split(',');
    const intensity = card.dataset.intensity;

    const themeOk = activeTheme === 'all' || theme === activeTheme;
    const platformOk = activePlatform === 'all' || platforms.includes(activePlatform);
    const severityOk = activeSeverity === 'all' || intensity === activeSeverity;

    if (themeOk && platformOk && severityOk) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  const status = document.getElementById('filter-status');
  if (status) {
    status.innerHTML = `Showing <span>${visibleCount}</span> of <span>${NARRATIVES.length}</span> narratives`;
  }

  // Empty state
  const grid = document.getElementById('narrative-grid');
  let emptyEl = grid.querySelector('.empty-state');
  if (visibleCount === 0) {
    if (!emptyEl) {
      grid.insertAdjacentHTML('beforeend', '<div class="empty-state">NO NARRATIVES MATCH THE SELECTED FILTERS. TRY CLEARING A FILTER.</div>');
    }
  } else {
    if (emptyEl) emptyEl.remove();
  }
}

// ─── RENDER FILTER BAR ───
function renderFilterBar() {
  const themes = [
    { key: 'all', label: 'All Themes', icon: '◉' },
    { key: 'political', label: 'Political', icon: '🏛' },
    { key: 'financial', label: 'Financial', icon: '💰' },
    { key: 'environmental', label: 'Environmental', icon: '🌿' },
    { key: 'brand', label: 'Brand/Quality', icon: '🏷' },
    { key: 'consumer', label: 'Consumer', icon: '🛒' },
    { key: 'media', label: 'Media', icon: '📡' },
    { key: 'positive', label: 'Positive', icon: '✅' },
  ];
  const platforms = [
    { key: 'all', label: 'All Platforms', color: '#888' },
    { key: 'youtube', label: 'YouTube', color: '#cc0000' },
    { key: 'twitter', label: 'Twitter/X', color: '#1a1a1a' },
    { key: 'instagram', label: 'Instagram', color: '#dc2743' },
    { key: 'reddit', label: 'Reddit', color: '#e84015' },
    { key: 'news', label: 'News', color: '#1c3a6e' },
  ];
  const severities = [
    { key: 'all', label: 'All Severity' },
    { key: 'critical', label: '● Critical' },
    { key: 'high', label: '◆ High' },
    { key: 'medium', label: '◇ Medium' },
    { key: 'positive', label: '↑ Positive' },
  ];

  const bar = document.getElementById('filter-bar');
  bar.innerHTML = `
    <div class="filter-row">
      <span class="filter-label">Theme</span>
      ${themes.map(t => `
        <button class="filter-btn ${t.key === 'all' ? 'active' : ''}" 
          data-filter-type="theme" data-filter-value="${t.key}">
          ${t.icon} ${t.label}
        </button>
      `).join('')}
    </div>
    <div class="filter-row">
      <span class="filter-label">Platform</span>
      ${platforms.map(p => `
        <button class="filter-btn ${p.key === 'all' ? 'active' : ''}" 
          data-filter-type="platform" data-filter-value="${p.key}">
          <span class="plat-dot" style="background:${p.color};"></span>${p.label}
        </button>
      `).join('')}
    </div>
    <div class="filter-row">
      <span class="filter-label">Severity</span>
      ${severities.map(s => `
        <button class="filter-btn ${s.key === 'all' ? 'active' : ''}" 
          data-filter-type="severity" data-filter-value="${s.key}">
          ${s.label}
        </button>
      `).join('')}
    </div>
    <div class="filter-status" id="filter-status">Showing <span>${NARRATIVES.length}</span> of <span>${NARRATIVES.length}</span> narratives</div>
  `;

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    const type = btn.dataset.filterType;
    const value = btn.dataset.filterValue;

    // Update active button in row
    bar.querySelectorAll(`[data-filter-type="${type}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (type === 'theme') activeTheme = value;
    if (type === 'platform') activePlatform = value;
    if (type === 'severity') activeSeverity = value;

    applyFilters();
  });
}

// ─── RENDER NARRATIVES ───
function renderNarratives() {
  const grid = document.getElementById('narrative-grid');
  grid.innerHTML = NARRATIVES.map(renderCard).join('');
}

// ─── STRATEGIC RESPONSE MATRIX ───
const MATRIX_DATA = [
  { theme: 'Political', icon: '🏛', color: '#c0342a', score: 95, trend: '↑↑ Critical Rise', platforms: ['twitter','youtube','reddit','news'], urgency: 'mb-immediate', urgencyLabel: 'IMMEDIATE', action: 'SEC Crisis Protocol + Crony Narrative Counter', filterKey: 'political' },
  { theme: 'Financial', icon: '💰', color: '#1c3a6e', score: 92, trend: '↑ Sustained Rise', platforms: ['reddit','news','twitter'], urgency: 'mb-immediate', urgencyLabel: 'IMMEDIATE', action: 'ACC Investor Day + Emkay Counter', filterKey: 'financial' },
  { theme: 'Environmental', icon: '🌿', color: '#1a6e42', score: 88, trend: '↑↑ Critical Rise', platforms: ['youtube','reddit','twitter'], urgency: 'mb-immediate', urgencyLabel: 'IMMEDIATE', action: 'NGT Compliance Audit + Public Report', filterKey: 'environmental' },
  { theme: 'Brand/Quality', icon: '🏷', color: '#8a4f00', score: 78, trend: '→ Stable Risk', platforms: ['youtube','reddit'], urgency: 'mb-short', urgencyLabel: 'SHORT-TERM', action: 'Quality Dashboard + Worker Voice Program', filterKey: 'brand' },
  { theme: 'Consumer', icon: '🛒', color: '#5c3a8c', score: 75, trend: '↑ Rising Risk', platforms: ['reddit','twitter','news'], urgency: 'mb-short', urgencyLabel: 'SHORT-TERM', action: 'Pricing Transparency + Dealer Engagement', filterKey: 'consumer' },
  { theme: 'Media/Narrative', icon: '📡', color: '#2a2e3e', score: 68, trend: '→ Stable', platforms: ['reddit','twitter'], urgency: 'mb-monitor', urgencyLabel: 'MONITOR', action: 'Third-Party Journalism Ecosystem', filterKey: 'media' },
  { theme: 'Positive', icon: '✅', color: '#1a6e42', score: 38, trend: '↑ Opportunity', platforms: ['instagram','twitter'], urgency: 'mb-monitor', urgencyLabel: 'LEVERAGE', action: 'Amplify Odisha + TNFD Institutional Story', filterKey: 'positive' },
];

function renderResponseMatrix() {
  const container = document.getElementById('response-matrix-container');
  const rows = MATRIX_DATA.map((row, i) => `
    <tr data-filter-key="${row.filterKey}" title="Click to filter narratives by ${row.theme}">
      <td>
        <div class="matrix-theme-name">
          <span>${row.icon}</span>
          <span>${row.theme}</span>
        </div>
        <div class="matrix-score-bar"><div class="matrix-score-fill" style="width:${row.score}%;background:${row.color};"></div></div>
      </td>
      <td style="font-family:var(--font-head);font-weight:800;font-size:18px;color:${row.color};">${row.score}</td>
      <td style="color:${row.score > 80 ? '#c0342a' : '#d4860a'};font-weight:600;">${row.trend}</td>
      <td>
        <div class="matrix-platforms">
          ${row.platforms.map(p => `<img src="data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'><circle cx=\'4\' cy=\'4\' r=\'4\' fill=\''+PLATFORM_COLORS[p]+'\'/></svg>')}" width="10" height="10" title="${p}" style="border-radius:50%;margin:0 1px;">`).join('')}
          ${row.platforms.map(p => `<span style="font-family:var(--font-mono);font-size:9px;color:#666;">${p}</span>`).join(' · ')}
        </div>
      </td>
      <td><span class="matrix-badge ${row.urgency}">${row.urgencyLabel}</span></td>
      <td class="matrix-note">${row.action}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div style="overflow-x:auto;">
    <table class="response-matrix">
      <thead>
        <tr>
          <th>Theme</th>
          <th>Score</th>
          <th>Trend</th>
          <th>Platforms</th>
          <th>Response Window</th>
          <th>Priority Action</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    </div>
  `;

  // Click to filter narratives
  container.querySelectorAll('tbody tr').forEach(tr => {
    tr.addEventListener('click', () => {
      const key = tr.dataset.filterKey;
      const isActive = tr.classList.contains('active-filter');

      container.querySelectorAll('tbody tr').forEach(r => r.classList.remove('active-filter'));

      if (!isActive) {
        tr.classList.add('active-filter');
        activeTheme = key;
      } else {
        activeTheme = 'all';
      }

      // Update theme filter buttons
      document.querySelectorAll('[data-filter-type="theme"]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filterValue === activeTheme);
      });

      applyFilters();

      // Scroll to narratives
      document.getElementById('narratives').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ─── PLATFORM INTEL ───
const PLATFORM_INTEL = [
  {
    name: 'YouTube', iconKey: 'youtube',
    url: 'https://www.youtube.com/results?search_query=adani+cement',
    sentiment: 'Volume-dominant · Neutral/Financial · Top comments: Hostile',
    points: [
      'Largest raw volume platform in the monitored dataset — finance, news, and community channels all active',
      'Top comment (most-liked): "एक पेड़ मां के नाम, 10 लाख पेड़ अदानी के नाम 😢" — on BBC Hindi Bihar land report — highest single engagement signal across all platforms',
      'CA Piyush Bafna ("ADANI vs BIRLA"), Trading With Vivek ("ACC Merger"), Khan Sir Uncut, CA Nikhil Nainani — finance creators forming retail investor opinion',
      'BBC Hindi Bihar ground report, Aditya Kakkar, Ankat Cosmos — political/land narrative amplification reaching mass audiences',
      'Ambuja Cement official channel active (Durga Puja, product ads) — brand content present but separate from organic debate',
      'Risk: Consumer quality comparison videos (RK Engineering, Engineer Wala, BuildMakaan) are shaping contractor perception in real time',
    ],
  },
  {
    name: 'Instagram', iconKey: 'instagram',
    url: 'https://www.instagram.com/adanicementofficial/',
    sentiment: 'Commercially Positive · Organically Passive / Skeptical',
    points: [
      'Top-performing brand content: Ambuja "Bekaar ki baaton" tech ad — brand commanding feed with creative amplification',
      'Odisha investment content (₹2,100cr cement plant, ₹33,000cr total) is highest-performing organic brand post from @adanionline',
      'Comment-to-like ratio near zero across @adanionline, @ambuja_cement_official, @acclimited — follower base is passive, not community-engaged',
      'TNFD, Green Building Centres, NAREDCO partnership — sustainability counter-narrative actively deployed by @adanicementofficial',
      'Third-party post: Viralkarbhar documenting local protest against Adani cement factory — organic hostile content outperforming brand posts in engagement density',
      'First Indian cement company TNFD adoption — most credible positive brand signal on this platform',
    ],
  },
  {
    name: 'Twitter / X', iconKey: 'twitter',
    url: 'https://twitter.com/AdaniCement_',
    sentiment: 'Predominantly Neutral · Hostile cluster on legal/political threads',
    points: [
      'Official @AdaniOnline, @AdaniCement_, @AmbujaCementACL pushing Odisha investment and TNFD content — minimal organic amplification',
      'Hostile cluster: JAL opposition, SEC case commentary, shareholder anger, "Modani" ecosystem',
      'Opposition handles connecting Kalyan EIA exemption to Visakhapatnam protests — creating pattern narrative',
      'Finance journalists (The Core, Business Standard, Mint) driving most credible critical coverage',
      '@otvnews, @ANI covering Odisha investment positively — state-level infrastructure frame gaining some traction',
      'Any adverse SC/NCLAT ruling will trend within minutes — no messaging buffer available',
    ],
  },
  {
    name: 'Reddit', iconKey: 'reddit',
    url: 'https://www.reddit.com/r/IndianStockMarket/',
    sentiment: 'Analytical · 70% Neutral · Vocal Negative on Governance',
    points: [
      'r/IndianStockMarket, r/IndianStreetBets, r/india, r/Maharashtra — analytical, data-literate, politically aware communities',
      'Retail investors accurately identified ACC working capital concerns BEFORE formal analyst downgrades were published',
      'IANS media takeover thread (r/india) explicitly connecting media control to cement narrative suppression',
      'r/IndianStreetBets: active threads on Orient Cement merger ratio ("What\'s happening to Orient cement"), Adani "too big to fail" debate',
      'r/mumbai: EIA exemption rule thread directly linking policy change to Kalyan plant controversy',
      '"Governance risk premium" language originated on Reddit before entering financial media vocabulary',
    ],
  },
  {
    name: 'News / Media', iconKey: 'news',
    url: 'https://economictimes.indiatimes.com/topic/adani-cement',
    sentiment: 'Mixed · Financial press analytical · Regional press hostile',
    points: [
      'Economic Times, Business Standard, Moneycontrol covering merger ratios and financial engineering with skeptical framing',
      'The Core: "Cement Merger Arrives As An Afterthought For The Market" — most damaging headline for institutional confidence',
      'Hindustan Times, The Hindu covering JAL SC proceedings and Odisha investment with factual balance',
      'BBC Hindi, Cobrapost, GPlus: land-grab and Bihar power plant controversy reaching mass audiences in regional languages',
      'World Cement, International Cement Review: industry press neutral/positive — reaches global institutional audience',
      'Republic World, OTV News covering Odisha announcement positively — state-level investment framing working with aligned media',
    ],
  },
];

function renderPlatformIntel() {
  const grid = document.getElementById('platform-grid');
  grid.innerHTML = PLATFORM_INTEL.map(p => `
    <div class="platform-tile">
      <div class="platform-header">
        <div class="platform-logo">${ICONS[p.iconKey]}</div>
        <div>
          <a href="${p.url}" target="_blank" rel="noopener" class="platform-name-text" style="text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.15);">${p.name} ↗</a>
        </div>
      </div>
      <div class="platform-sentiment-tag">${p.sentiment}</div>
      <ul class="platform-points">
        ${p.points.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════
// CHART.JS INITIALIZATION
// ══════════════════════════════════════════════════════════

function initCharts() {
  Chart.defaults.font.family = "'League Spartan', sans-serif";
  Chart.defaults.font.weight = '600';
  Chart.defaults.font.family = "'League Spartan', sans-serif";
  Chart.defaults.font.weight = '600';
  // ── DARK BG CHART DEFAULTS ──
  const darkTicks = { color: 'rgba(255,255,255,0.45)', font: { size: 11 } };
  const darkGrid = { color: 'rgba(255,255,255,0.06)' };
  const lightTicks = { color: '#333', font: { size: 11, family: 'League Spartan' } };
  const lightGrid = { color: 'rgba(12,12,18,0.07)' };

  // 1. TIMELINE CHART (dark bg)
  new Chart(document.getElementById('timelineChart'), {
    type: 'line',
    data: {
      labels: ['Apr 25', 'May 25', 'Jun 25', 'Jul 25', 'Aug 25', 'Sep 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26'],
      datasets: [
        {
          label: 'Hostile / Negative Volume',
          data: [18, 22, 26, 30, 34, 42, 58, 68, 78, 100, 74, 68, 62],
          borderColor: '#c0342a',
          backgroundColor: 'rgba(192,52,42,0.08)',
          borderWidth: 2, fill: true, tension: 0.4,
          pointBackgroundColor: '#c0342a', pointRadius: 4,
        },
        {
          label: 'Neutral / Positive Volume',
          data: [38, 38, 40, 40, 38, 36, 34, 36, 38, 36, 42, 46, 50],
          borderColor: '#d4860a',
          backgroundColor: 'rgba(212,134,10,0.05)',
          borderWidth: 2, fill: true, tension: 0.4,
          pointBackgroundColor: '#d4860a', pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: 'rgba(255,255,255,0.50)', boxWidth: 12, padding: 14, font: { family: "'League Spartan'", size: 11 } } },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}`,
            afterBody: items => {
              const notes = {
                9: '⚑ Emkay Sell Downgrade + Merger Announcement',
                10: '⚑ NGT Barmana Compliance Report',
                6: '⚑ Visakhapatnam Public Hearing Violence',
              };
              return notes[items[0].dataIndex] || '';
            },
          },
        },
      },
      scales: {
        x: { grid: darkGrid, ticks: darkTicks },
        y: { grid: darkGrid, ticks: darkTicks },
      },
    },
  });

  // 2. PLATFORM DOUGHNUT (dark bg)
  new Chart(document.getElementById('platformShare'), {
    type: 'doughnut',
    data: {
      labels: ['YouTube', 'Twitter/X', 'News/Blogs', 'Instagram', 'Reddit'],
      datasets: [{
        data: [42, 24, 16, 11, 7],
        backgroundColor: ['#cc0000', '#333', '#1c3a6e', '#dc2743', '#e84015'],
        borderWidth: 0,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '62%',
      plugins: {
        legend: {
          position: 'right',
          labels: { color: 'rgba(255,255,255,0.5)', boxWidth: 10, padding: 10, font: { size: 10 } },
        },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label} — ${ctx.parsed}% of narrative volume`,
          },
        },
      },
    },
  });

  // 3. YT SENTIMENT DOUGHNUT (light bg)
  new Chart(document.getElementById('ytSentiment'), {
    type: 'doughnut',
    data: {
      labels: ['Neutral / Financial', 'Hostile (High-Engagement)', 'Positive / Development'],
      datasets: [{
        data: [82, 12, 6],
        backgroundColor: ['#888', '#0a0a0a', '#cac7c0'],
        borderWidth: 0,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#333', boxWidth: 10, padding: 8, font: { size: 10 } },
        },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed}% of engagement-weighted content`,
          },
        },
      },
    },
  });

  // 4. PLATFORM SENTIMENT STACKED BAR (light bg)
  new Chart(document.getElementById('platformSentiment'), {
    type: 'bar',
    data: {
      labels: ['Instagram', 'Twitter/X', 'YouTube', 'Reddit'],
      datasets: [
        { label: 'Hostile', data: [6, 8, 12, 8], backgroundColor: '#c0342a', borderWidth: 0 },
        { label: 'Skeptical/Neutral', data: [68, 74, 82, 70], backgroundColor: '#d4860a', borderWidth: 0 },
        { label: 'Supportive', data: [26, 18, 6, 22], backgroundColor: '#1a6e42', borderWidth: 0 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: lightTicks },
        y: { stacked: true, max: 100, grid: lightGrid, ticks: { ...lightTicks, callback: v => v + '%' } },
      },
      plugins: {
        legend: { labels: { color: '#333', boxWidth: 10, padding: 10, font: { family: "'League Spartan'", size: 10, weight: '700' } } },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.dataset.label} sentiment — ${ctx.parsed.y}% of content`,
          },
        },
      },
    },
  });

  // 5. THEME INTENSITY HORIZONTAL BAR (light bg — in alt section)
  new Chart(document.getElementById('themeChart'), {
    type: 'bar',
    data: {
      labels: ['Political Cronyism / Modani', 'Retail Investor Distrust (ACC)', 'Ecological / Land Rights', 'Merger & Monopoly Scale', 'Workforce Disenfranchisement', 'Consumer Quality / Price', 'Brand Heritage Erosion', 'Institutional Skepticism'],
      datasets: [{
        label: 'Composite Intensity Score',
        data: [95, 92, 88, 85, 82, 78, 76, 72],
        backgroundColor: ['#c0342a', '#c0342a', '#1a6e42', '#1c3a6e', '#8a4f00', '#5c3a8c', '#8a4f00', '#1c3a6e'],
        borderWidth: 0,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` Intensity: ${ctx.parsed.x}/100`,
            title: items => items[0].label,
          },
        },
      },
      scales: {
        x: { max: 100, grid: lightGrid, ticks: { ...lightTicks, callback: v => v } },
        y: { grid: { display: false }, ticks: { color: '#222', font: { size: 11.5 } } },
      },
    },
  });

  // 6. RISK SCATTER (light bg — in alt section)
  new Chart(document.getElementById('riskScatter'), {
    type: 'scatter',
    data: {
      datasets: [
        { label: 'US SEC Civil Fraud Case', data: [{ x: 85, y: 95 }], backgroundColor: '#c0342a', pointRadius: 18, pointHoverRadius: 20 },
        { label: 'NGT Environmental Violations', data: [{ x: 80, y: 88 }], backgroundColor: '#c0342a', pointRadius: 16 },
        { label: 'ACC Shareholder Litigation', data: [{ x: 70, y: 90 }], backgroundColor: '#c0342a', pointRadius: 15 },
        { label: 'Community Violence (Vizag Pattern)', data: [{ x: 72, y: 86 }], backgroundColor: '#c0342a', pointRadius: 14 },
        { label: 'Quality Defect Amplification', data: [{ x: 60, y: 78 }], backgroundColor: '#d4860a', pointRadius: 13 },
        { label: '$3.5B Refinancing Pressure', data: [{ x: 52, y: 75 }], backgroundColor: '#d4860a', pointRadius: 12 },
        { label: 'Worker Mobilization (Godda+Darlaghat)', data: [{ x: 65, y: 72 }], backgroundColor: '#d4860a', pointRadius: 12 },
        { label: 'JAL SC Adverse Ruling Risk', data: [{ x: 45, y: 88 }], backgroundColor: '#8a4f00', pointRadius: 13 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: {
          min: 0, max: 100,
          title: { display: true, text: 'PROBABILITY OF OCCURRENCE →', color: '#555', font: { size: 10 } },
          grid: lightGrid, ticks: lightTicks,
        },
        y: {
          min: 0, max: 100,
          title: { display: true, text: '↑ IMPACT IF OCCURS', color: '#555', font: { size: 10 } },
          grid: lightGrid, ticks: lightTicks,
        },
      },
      plugins: {
        legend: { position: 'bottom', labels: { color: '#333', boxWidth: 10, padding: 8, font: { size: 10 } } },
        tooltip: {
          callbacks: {
            label: ctx => {
              const p = ctx.parsed.x;
              const i = ctx.parsed.y;
              const pLabel = p >= 80 ? 'Very High Probability' : p >= 65 ? 'High Probability' : p >= 50 ? 'Moderate Probability' : 'Lower Probability';
              const iLabel = i >= 90 ? 'Existential Impact' : i >= 80 ? 'Critical Impact' : i >= 70 ? 'High Impact' : 'Significant Impact';
              return ` ${pLabel} · ${iLabel}`;
            },
            title: items => items[0].dataset.label,
          },
        },
      },
    },
  });

  // 7. TRUST GAP (light bg)
  new Chart(document.getElementById('trustGap'), {
    type: 'line',
    data: {
      labels: ['Sep 22', 'Dec 22', 'Mar 23', 'Jun 23\n(Hindenburg)', 'Sep 23', 'Dec 23', 'Mar 24', 'Jun 24\n(Penna)', 'Sep 24', 'Dec 24', 'Jan 26\n(Merger)', 'Apr 26'],
      datasets: [
        {
          label: 'Operational Performance Index',
          data: [38, 48, 56, 42, 58, 66, 70, 76, 80, 85, 91, 88],
          borderColor: '#1a6e42', borderWidth: 2.5,
          tension: 0.4, fill: false,
          pointBackgroundColor: '#1a6e42', pointRadius: 4,
        },
        {
          label: 'Public Trust / Sentiment Index',
          data: [52, 46, 40, 20, 28, 34, 38, 36, 40, 36, 26, 30],
          borderColor: '#c0342a', borderWidth: 2.5,
          tension: 0.4, fill: false,
          pointBackgroundColor: '#c0342a', pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#333', boxWidth: 10, padding: 12, font: { size: 11 } } },
        annotation: {},
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.y;
              const level = v >= 80 ? 'Strong' : v >= 60 ? 'Moderate' : v >= 40 ? 'Weak' : v >= 25 ? 'Very Weak' : 'Critical Low';
              return ` ${ctx.dataset.label}: ${level}`;
            },
          },
        },
      },
      scales: {
        x: { grid: lightGrid, ticks: { color: '#444', font: { size: 9.5 } } },
        y: { min: 0, max: 100, grid: lightGrid, ticks: lightTicks },
      },
    },
  });
}

// ─── SCORE BAR ANIMATION ───
function animateScoreBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.score-fill').forEach(el => {
          el.classList.add('animate');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.score-section').forEach(el => observer.observe(el));
}

// ─── SMOOTH NAV ───
function initNav() {
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ─── INIT ALL ───
document.addEventListener('DOMContentLoaded', () => {
  renderNarratives();
  renderFilterBar();
  renderResponseMatrix();
  renderPlatformIntel();
  initCharts();
  animateScoreBars();
  initNav();
});
// ══════════════════════════════════════════════════════════
// CREATOR TABLE — Enhanced with pagination, filters, expand links
// ══════════════════════════════════════════════════════════

const CREATORS = [
  // ─── RAW / GROUND LEVEL — hostile/investigative (small–medium) — put first ───
  {
    name: 'Civil Ki Bat',
    url: 'https://www.youtube.com/@CivilKiBat',
    platform: 'youtube',
    focus: 'Adani Cement placement doubts & working conditions — civil engineer POV',
    sentiment: 'skeptical',
    narrative: 'Insider civil engineer concern about quality, RMC work pressure & job insecurity post-Adani takeover',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=g0crYcicc9w', title: 'Adani Cement Placement Daubt (quality lab concerns)' },
      { url: 'https://www.youtube.com/watch?v=KH4Fxaf6Kyo', title: 'Working Hour and Work Pressure in Adani Cement' },
      { url: 'https://www.youtube.com/watch?v=VHYpESKX7AY', title: 'RMC Life | Adani Cement | Manufacturing Department work schedule' },
    ]
  },
  {
    name: 'Live Cities Media',
    url: 'https://www.youtube.com/@LiveCitiesMedia',
    platform: 'youtube',
    focus: 'Nawada, Bihar — on-ground worker revolt at Adani cement factory',
    sentiment: 'hostile',
    narrative: 'Workers inside Adani cement factory stop work, local dispute on-camera — raw ground reporting',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=MYkPohN2uNo', title: 'Nawada में Adani के Cement Factory में कर्मचारियों ने जमकर बवाल काटा' },
    ]
  },
  {
    name: 'Northeast Unexplored',
    url: 'https://www.youtube.com/watch?v=a8v8atWg_k4',
    platform: 'youtube',
    focus: 'Assam 3000 bigha land controversy — local channel documenting the issue',
    sentiment: 'hostile',
    narrative: '3000 bigha tribal land "scam" — grassroots Assam perspective before larger media covered it',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=a8v8atWg_k4', title: '3000 Bigha Land Scam???' },
    ]
  },
  {
    name: 'GPlus',
    url: 'https://www.youtube.com/watch?v=Ln3x4uA45YA',
    platform: 'youtube',
    focus: 'Gauhati HC judge reacts to 3000 bigha Assam land deal',
    sentiment: 'hostile',
    narrative: 'Judicial outrage amplified — "Is this a joke?" framing; gave legal gravitas to grassroots protest',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=Ln3x4uA45YA', title: 'Gauhati HC Judge on 3,000 bighas of land given for cement factory in Assam' },
    ]
  },
  {
    name: 'Live Law',
    url: 'https://www.youtube.com/watch?v=6O_93lEvo0I',
    platform: 'youtube',
    focus: 'Legal news — 3000 bighas tribal land given to cement company in Assam',
    sentiment: 'hostile',
    narrative: 'Tribal rights + Gauhati HC proceedings — legal credibility given to land controversy',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=6O_93lEvo0I', title: '3000 BIGHAS TRIBAL LAND GIVEN TO CEMENT COMPANY IN ASSAM' },
    ]
  },
  {
    name: 'SAHIL BR',
    url: 'https://www.youtube.com/watch?v=DoiiRpLirUY',
    platform: 'youtube',
    focus: 'BJP gave 3000 bighas land to Adani — short-form viral',
    sentiment: 'hostile',
    narrative: 'Assam land political gifting — concise hostile Shorts format reaching young audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=DoiiRpLirUY', title: 'Adani ko BJP ki taraf se 3000 Bighas jameen diya gaya | #shorts' },
    ]
  },
  {
    name: 'Adv. Akshay Samarth',
    url: 'https://www.youtube.com/watch?v=0du-VIlD_N0',
    platform: 'youtube',
    focus: 'Legal analysis — Assam BJP tribal land given to Adani cement factory',
    sentiment: 'hostile',
    narrative: '"Modi\'s India Sale" — tribal land gifting framing from a lawyer\'s perspective',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=0du-VIlD_N0', title: 'MODI\'s INDIA SALE: Assam BJP Govt gave 3,000 bigha(8.1 Crore sqft) Tribal land to Adani cement factory' },
    ]
  },
  {
    name: 'Cobrapost',
    url: 'https://www.youtube.com/watch?v=IQJaeYaoSsQ',
    platform: 'youtube',
    focus: 'Factcheck — Did Adani Get 3,000 Bighas in Assam?',
    sentiment: 'hostile',
    narrative: 'Investigative factcheck — confirms factual core of controversy with documentary evidence',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=IQJaeYaoSsQ', title: 'Factcheck | Did Adani Get 3,000 Bighas in Assam? | Dima Hasao Row' },
    ]
  },
  {
    name: 'CNBC Awaaz',
    url: 'https://www.youtube.com/watch?v=mdxxtCc93ew',
    platform: 'youtube',
    focus: 'Assam CM launches operation to reclaim land — 10,000 acres exposed',
    sentiment: 'hostile',
    narrative: 'Government land grab exposes scale — mainstream financial news amplifying regional issue',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=mdxxtCc93ew', title: '10,000 Acres Land Grab Exposed! Assam CM Launches Bold Operation to Reclaim Land' },
    ]
  },
  {
    name: 'INOVI TV',
    url: 'https://www.youtube.com/watch?v=BkLgfiH31Xw',
    platform: 'youtube',
    focus: 'Adani-Modi 1Rs land deal Bihar — scam framing Shorts',
    sentiment: 'hostile',
    narrative: '₹1 land + political nexus packaged for Shorts — compact hostile narrative for young audiences',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=BkLgfiH31Xw', title: 'ADANI - MODI 1RS LAND DEAL IN BIHAR | 1050 ACRE LAND SCAM STORY!!! #shorts' },
    ]
  },
  {
    name: 'Aditya Gautam',
    url: 'https://www.youtube.com/watch?v=ICvZG1JKbqo',
    platform: 'youtube',
    focus: 'Bihar ₹1 land deal — how Adani secured 1020 acres',
    sentiment: 'hostile',
    narrative: 'Factual walk-through of Bihar land allocation — viral Shorts framing, widely shared',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=ICvZG1JKbqo', title: 'How adani secures a historic deal in Bihar | 1₹ for 1020 acre land #shortsfeed #adani #bihar' },
    ]
  },
  {
    name: 'Anant Cosmos',
    url: 'https://www.youtube.com/watch?v=r22379wM-tI',
    platform: 'youtube',
    focus: 'Bihar 2400MW project — 10 lakh trees at risk',
    sentiment: 'hostile',
    narrative: 'Environmental betrayal — orchard land, tree-felling; connects to "Ek Ped Maa Ke Naam" irony',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=r22379wM-tI', title: 'Adani\'s 2400 MW Bihar Project: 10 Lakh Trees at Risk?' },
    ]
  },
  {
    name: 'Crime Connect',
    url: 'https://www.youtube.com/watch?v=tnbXE5QdYs0',
    platform: 'youtube',
    focus: 'Will Gautam Adani be arrested? ₹2100 crore bribery explained in Hindi',
    sentiment: 'hostile',
    narrative: 'US SEC bribery case for mass Hindi audiences — very high view count, broad reach',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=tnbXE5QdYs0', title: 'क्या Gautam Adani होंगे गिरफ्तार: 2,100 Crore की घूस की क्या पूरी कहानी!' },
    ]
  },
  {
    name: 'Dragon\'s Perception',
    url: 'https://www.youtube.com/watch?v=-bvSM2df40c',
    platform: 'youtube',
    focus: 'Your house-building grows Adani\'s empire',
    sentiment: 'hostile',
    narrative: 'Buying cement = political contribution — viral framing that reframes consumer choice as political act',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=-bvSM2df40c', title: 'आपके घर बनाने से ADANI का साम्राज्य कैसा बनता है? 🔥| #shorts #adani #cement' },
    ]
  },
  {
    name: 'HW News English',
    url: 'https://www.youtube.com/watch?v=79JFbto2vmA',
    platform: 'youtube',
    focus: 'Supriya Shrinate targets Modi over Adani Kalyan cement plant',
    sentiment: 'hostile',
    narrative: 'Opposition politician Shorts clip — EIA bypass controversy reaches political mainstream',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=79JFbto2vmA', title: '#Shorts | Supriya Shrinate targets PM Modi over Adani\'s cement plant in the Mumbai suburb of Kalyan' },
    ]
  },
  {
    name: 'Nava CG Times (Instagram)',
    url: 'https://www.instagram.com/reel/DWSqClbjZSA/',
    platform: 'instagram',
    focus: 'Adani-Ambuja cement plant guard beats 12-year-old child for picking mangoes — Chhattisgarh',
    sentiment: 'hostile',
    narrative: 'Viral local incident — security brutality at plant site; community relations crisis at ground level',
    brand: 'absent',
    links: [
      { url: 'https://www.instagram.com/reel/DWSqClbjZSA/', title: 'अडानी-अंबुजा सीमेंट प्लांट: 12 साल के बच्चे से मारपीट — Nava CG Times' },
      { url: 'https://www.instagram.com/reel/DWeB19JCfjZ/', title: 'आम तोड़ने पर 12 साल के बच्चे से मारपीट, प्लांट में बवाल' },
    ]
  },
  {
    name: 'Viralkarbhar (Instagram)',
    url: 'https://www.instagram.com/viralkarbhar',
    platform: 'instagram',
    focus: 'Local protest footage at Adani cement factory — Marathi-language grassroots',
    sentiment: 'hostile',
    narrative: 'Community resistance, environmental concern; raw protest footage widely circulated',
    brand: 'absent',
    links: [
      { url: 'https://www.instagram.com/viralkarbhar', title: 'Viralkarbhar — local Adani cement factory protest coverage' },
    ]
  },
  {
    name: 'r/Maharashtra (Reddit)',
    url: 'https://www.reddit.com/r/Maharashtra/comments/1oeum7f/these_days_everything_seems_to_be_sold_to_adani/',
    platform: 'reddit',
    focus: 'Kalyan plant resistance & EIA controversy — Maharashtra audience',
    sentiment: 'hostile',
    narrative: '"Everything sold to Adani" — Raj Thackeray quote viral; Marathi community opposition crystallized here',
    brand: 'absent',
    links: [
      { url: 'https://www.reddit.com/r/Maharashtra/comments/1oeum7f/these_days_everything_seems_to_be_sold_to_adani/', title: 'r/Maharashtra — "These days, everything seems to be sold to Adani wherever he sets his eyes"' },
      { url: 'https://www.reddit.com/r/mumbai/comments/1o3zf0x/the_environment_ministry_is_tweaking_a_rule_for/', title: 'r/mumbai — Environment Ministry tweaking EIA rule for cement (Kalyan plant thread)' },
    ]
  },
  {
    name: 'r/india (Reddit)',
    url: 'https://www.reddit.com/r/india',
    platform: 'reddit',
    focus: 'IANS takeover, land grab, general Adani cronyism threads',
    sentiment: 'hostile',
    narrative: 'Media capture + monopoly formation + land coercion — largest India Reddit audience for Adani discourse',
    brand: 'absent',
    links: [
      { url: 'https://www.reddit.com/r/india/comments/1qll38z/adani_group_completes_full_takeover_of_ians_news/', title: 'r/india — Adani Group completes full takeover of IANS news agency' },
      { url: 'https://www.reddit.com/r/india/comments/1ogib3i/adanis_itd_cementation_wins_rs_164_billion_pune/', title: 'r/india — Adani ITD Cementation wins Pune Metro contract' },
    ]
  },
  {
    name: 'Talks by Renjith Krishnan',
    url: 'https://www.youtube.com/watch?v=ymG6YhK2u_A',
    platform: 'youtube',
    focus: 'Malayalam-language explainer — Ambuja Cement takeover by Adani',
    sentiment: 'skeptical',
    narrative: 'South India regional audience getting Adani acquisition story in Malayalam — underreported demographic',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=ymG6YhK2u_A', title: 'അങ്ങനെ അംബുജ സിമൻ്റ്സ് ഇനി അദാനിക്ക്! ഏറ്റെടുക്കലിന് പിന്നിലെ ബിസിനസ് രഹസ്യം?' },
    ]
  },

  // ─── SKEPTICAL / ANALYTICAL ───
  {
    name: 'CA Nikhil Nainani',
    url: 'https://www.youtube.com/@CANikhilNainani',
    platform: 'youtube',
    focus: 'ACC equity devaluation & working capital siphoning analysis',
    sentiment: 'skeptical',
    narrative: 'ACC inter-group MSA critique, merger dilution — finance CA audience; very credible source',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=MMrYXp3xnC8', title: 'Ambuja didn\'t just buy ACC & Orient, WAR in cement sector? #ambujacement #acccement #adanigroup' },
      { url: 'https://www.youtube.com/watch?v=HMZDy8o-DI0', title: 'Adani Enterprises Q4 Results 2025 | Mixed Performance | Kya Future Bright Hai?' },
    ]
  },
  {
    name: 'Trading With Vivek',
    url: 'https://www.youtube.com/@TradingWithVivek',
    platform: 'youtube',
    focus: 'ACC/Ambuja/Orient merger — investor view on merger ratio fairness',
    sentiment: 'skeptical',
    narrative: 'Merger ratio unfair to ACC shareholders — small retail investor channel, very high frequency coverage',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=AEnZgefQU3c', title: 'Ambuja, ACC and Orient Cement Merger - What to Do?' },
    ]
  },
  {
    name: 'CA Piyush Bafna',
    url: 'https://www.youtube.com/@CAPiyushBafna',
    platform: 'youtube',
    focus: 'ADANI vs BIRLA cement war — analytical shorts format',
    sentiment: 'skeptical',
    narrative: '"Birla has vintage, Adani has government support" — recurring framing across multiple videos',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=hFbZdSAcfR0', title: 'ADANI vs BIRLA Which Billionaire Wins in Cement? ACC AMBUJA story' },
      { url: 'https://www.youtube.com/watch?v=xAHBnHs9Xi8', title: 'Birla vs Adani: $100B WAR That Will SHOCK You' },
      { url: 'https://www.youtube.com/watch?v=y0qlaejQDWc', title: 'ADANI vs VEDANTA vs DALMIA - The Rs.54000 CRORE BATTLEGROUND' },
    ]
  },
  {
    name: 'CA Rahul Malodia',
    url: 'https://www.youtube.com/@CArahulmalodia',
    platform: 'youtube',
    focus: 'Birla vs Adani real estate war — business expansion framing',
    sentiment: 'skeptical',
    narrative: 'Adani expansion as hostile takeover of legacy business territory',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=YAUjcS2WogQ', title: 'Birla Vs Adani: Real Estate का नया युद्ध! #shorts #investment #trending' },
    ]
  },
  {
    name: 'Ankit Avasthi Insights',
    url: 'https://www.youtube.com/@AnkitAvasthi',
    platform: 'youtube',
    focus: 'Adani cement market entry explainer — education-focused',
    sentiment: 'skeptical',
    narrative: 'Monopoly risk, UltraTech arms race — framed for competitive analysis',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=8H0f6KCsnWc', title: 'Adani\'s Big Move: Cement Market Shaken by Billionaire\'s Entry! | Explained by Ankit Avasthi Sir' },
    ]
  },
  {
    name: 'Dr. Mukul Agrawal (Stock Market Coach)',
    url: 'https://www.youtube.com/@DrMukulAgrawalStocks',
    platform: 'youtube',
    focus: 'ACC & Orient merger shareholder rights & SEC crash explainer',
    sentiment: 'skeptical',
    narrative: 'Merger dilution, stock crash post-SEC summons — retail investor audience focused',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=L2kUIbVUSu0', title: '"ACC & Orient cement Merge Ho Gaye? | shareholder ko kya milega!"' },
      { url: 'https://www.youtube.com/watch?v=4c_9iJdzPio', title: 'Adani Stock Crash Today | ₹1 Lakh Crore Wiped Out | US SEC Summons Explained' },
    ]
  },
  {
    name: 'Rishab Jain',
    url: 'https://www.youtube.com/watch?v=iA7-lNK-yiw',
    platform: 'youtube',
    focus: 'Adani Cement vs. Birla: The Cement War — Case Study',
    sentiment: 'skeptical',
    narrative: 'Heritage usurpation, brand dilution — structured case study format, business student audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=iA7-lNK-yiw', title: 'Adani Cement vs. Birla: The Cement War | Case Study | Rishab Jain' },
    ]
  },
  {
    name: 'Anant Ladha',
    url: 'https://www.youtube.com/@AnantLadha',
    platform: 'youtube',
    focus: 'Adani debt analysis — "big power game, 80% crash"',
    sentiment: 'skeptical',
    narrative: 'Debt-financed expansion risk — "$3.5B refinancing" warnings for retail investors',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=UXvj-3fjp4o', title: 'Adani big power game - 80% crash' },
    ]
  },
  {
    name: 'Engineer Wala Construction',
    url: 'https://www.youtube.com/@EngineerWalaConstruction',
    platform: 'youtube',
    focus: 'Ambuja vs UltraTech vs ACC — real strength test 2025',
    sentiment: 'skeptical',
    narrative: 'Physical quality comparison post-Adani — contractor community audience; direct product challenge',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=nPt9xGCzRAg', title: 'Ambuja vs UltraTech vs ACC Cement Comparison 2025 | कौन-सा Cement सबसे Strong है? Real Test Result 🔥' },
    ]
  },
  {
    name: 'Owner\'s Verdict',
    url: 'https://www.youtube.com/watch?v=Rsg8TQUG5o4',
    platform: 'youtube',
    focus: 'ACC vs UltraTech vs Ambuja vs Dalmia vs JSW — best for plaster',
    sentiment: 'skeptical',
    narrative: 'Consumer quality doubts — Ambuja losing spec comparisons against UltraTech in practitioner tests',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=Rsg8TQUG5o4', title: 'ACC vs Ultratech vs Ambuja vs Dalmia vs JSW - Best cement for plaster in India? Owner\'s Verdict' },
    ]
  },
  {
    name: 'RK Engineering 03',
    url: 'https://www.youtube.com/@RKEngineering03',
    platform: 'youtube',
    focus: 'Drop test comparisons: UltraTech Premium vs ACC F2R — multiple videos',
    sentiment: 'skeptical',
    narrative: 'Physical product quality testing — ACC repeatedly compared to UltraTech; contractor-facing audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=MxZ29t1qxkQ', title: 'Drop Test || Ultratech Premium VS ACC F2R || Ultratech Cement Review || ACC F2R Cement Review' },
      { url: 'https://www.youtube.com/watch?v=OwQBdCE427Q', title: 'ACC Gold Water Shield 🛡️ || ACC Cement Review || Best Cement For Roof Casting' },
      { url: 'https://www.youtube.com/watch?v=G54sn9wTwIQ', title: 'ACC F2R || ACC F2R Cement Review || Best Cement For Roof Casting' },
      { url: 'https://www.youtube.com/watch?v=HwLUg4pI1RQ', title: 'ACC F2R Cement || Chhat dhlai ke liye Best Cement' },
    ]
  },
  {
    name: 'Wealth SaGa Global',
    url: 'https://www.youtube.com/watch?v=02nwUf5pdpg',
    platform: 'youtube',
    focus: 'Why Adani is secretly buying bankrupt companies',
    sentiment: 'skeptical',
    narrative: 'Debt-financed acquisition strategy — "62,000 crore buying spree" framing',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=02nwUf5pdpg', title: 'Why Adani is secretly buying this? 💀 🔥🔥' },
    ]
  },
  {
    name: 'Learn to Earn by AKR',
    url: 'https://www.youtube.com/watch?v=YW9glvepqWQ',
    platform: 'youtube',
    focus: 'Ambuja ACC Orient merger demerger explainer — small investor channel',
    sentiment: 'skeptical',
    narrative: 'Retail investor confusion around merger ratios — small channel with high relevance frequency',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=YW9glvepqWQ', title: 'AMBUJA CEMENT MERGER ACC CEMENT | Merger & Demerger | ORIENT CEMENT MERGER | ACC SHARE | ADANI' },
    ]
  },
  {
    name: 'Sarthak Bazar Se',
    url: 'https://www.youtube.com/watch?v=sp3g1ux6cPQ',
    platform: 'youtube',
    focus: 'Ambuja, ACC, Orient Cement share latest news — daily retail investor tracker',
    sentiment: 'skeptical',
    narrative: 'Small retail investor channel tracking merger impact daily — persistent micro-influence',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=sp3g1ux6cPQ', title: 'Ambuja Cements, ACC, Orient Cement share latest news' },
    ]
  },
  {
    name: 'Yadnya Investment Academy',
    url: 'https://www.youtube.com/watch?v=iwrwmXltLGE',
    platform: 'youtube',
    focus: 'Daily stock news — Ambuja cement merger Dec 2025',
    sentiment: 'skeptical',
    narrative: 'Merger impact on ACC/Ambuja retail investors — established investment education channel',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=iwrwmXltLGE', title: 'Daily Stock Market News(23 Dec 2025): Gold ATH, SBI MF IPO & Ambuja Cement Merger' },
    ]
  },
  {
    name: 'Jayant Mundhra',
    url: 'https://www.youtube.com/watch?v=-aUUuSEQrfc',
    platform: 'youtube',
    focus: 'Cement industry India vs China — Ambuja/ACC vs UltraTech marketshare',
    sentiment: 'skeptical',
    narrative: 'Structural market analysis — where Adani cement stands vs Birla in long run',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=-aUUuSEQrfc', title: 'Cement Industry, India vs China - Adani\'s Ambuja and ACC, or Birla\'s Ultratech marketshare?' },
    ]
  },
  {
    name: 'Laughing Stocks',
    url: 'https://www.youtube.com/watch?v=cBLnXTKKVts',
    platform: 'youtube',
    focus: 'AWL Adani stock analysis — why Adani exited Wilmar',
    sentiment: 'skeptical',
    narrative: 'Conglomerate portfolio credibility, equity exit concern — financial analyst audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=cBLnXTKKVts', title: '#58 AWL Agri Business (Adani Wilmar) Stock Analysis Oct-2025 | Why Adani Exited AWL??' },
    ]
  },
  {
    name: 'coachsurendra',
    url: 'https://www.youtube.com/watch?v=-tAVpaKdY6Y',
    platform: 'youtube',
    focus: 'How Adani might acquire Jaypee Group with ₹57,000 Cr debt',
    sentiment: 'skeptical',
    narrative: 'Debt-laden acquisition strategy — "unconditional bid wins" framing',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=-tAVpaKdY6Y', title: 'How Adani Might Acquire Jaypee Group With ₹57,000 Cr Debt! #shorts' },
    ]
  },
  {
    name: 'r/IndianStreetBets (Reddit)',
    url: 'https://www.reddit.com/r/IndianStreetBets',
    platform: 'reddit',
    focus: 'Orient Cement merger ratio — "what happened?" shareholder discussion',
    sentiment: 'skeptical',
    narrative: 'Orient at scrap value, shareholder destruction fear — active daily discussion threads',
    brand: 'absent',
    links: [
      { url: 'https://www.reddit.com/r/IndianStreetBets/comments/1qkn0ww/whats_happening_to_orient_cement/', title: 'r/IndianStreetBets — "What\'s happening to Orient cement?"' },
      { url: 'https://www.reddit.com/r/IndianStreetBets/comments/1ou9q25/adani_is_too_big_to_fail/', title: 'r/IndianStreetBets — "Adani is too big to Fail" (heated debate thread)' },
    ]
  },
  {
    name: 'r/IndianStockMarket (Reddit)',
    url: 'https://www.reddit.com/r/IndianStockMarket',
    platform: 'reddit',
    focus: 'ACC governance risk, merger ratio analysis — institutional-quality retail discourse',
    sentiment: 'skeptical',
    narrative: 'Retail investor distrust, 50% below historic PE — this community identified siphoning before Emkay',
    brand: 'absent',
    links: [
      { url: 'https://www.reddit.com/r/IndianStockMarket/comments/1r3fdih/which_indian_stock_looks_great_on_paper_but_you/', title: 'r/IndianStockMarket — "Which Indian stock looks great on paper but you still refuse to buy?" (ACC thread)' },
      { url: 'https://www.reddit.com/r/IndianStockMarket/comments/1ls13x2/adani_reliance_tata_birla_vs_you/', title: 'r/IndianStockMarket — "Adani, Reliance, Tata, Birla… vs You" (cement prices crushed)' },
    ]
  },
  {
    name: 'r/CriticalThinkingIndia (Reddit)',
    url: 'https://www.reddit.com/r/CriticalThinkingIndia/comments/1njazav/why_the_adani_got_land_for_1_outrage_misses_the/',
    platform: 'reddit',
    focus: 'Fact-checking land deal outrage — nuanced counter-analysis',
    sentiment: 'neutral',
    narrative: 'Even counter-analysis confirms underlying controversy is real — validates debate legitimacy',
    brand: 'absent',
    links: [
      { url: 'https://www.reddit.com/r/CriticalThinkingIndia/comments/1njazav/why_the_adani_got_land_for_1_outrage_misses_the/', title: 'r/CriticalThinkingIndia — "Why the Adani got land for ₹1 outrage misses the bigger picture"' },
    ]
  },

  // ─── LARGE NEWS / ESTABLISHED CHANNELS ───
  {
    name: 'BBC News Hindi',
    url: 'https://www.youtube.com/@BBCNewsHindi',
    platform: 'youtube',
    focus: 'Bihar land deal investigation — on-ground report',
    sentiment: 'hostile',
    narrative: '"₹1 for 1,000 acres" — state-facilitated land grab; highest-engagement single video in dataset',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=YyHruVi_I1Q', title: 'Adani Group को Bihar में 1 रुपए में 1 हज़ार एकड़ जमीन, क्या है सच-Ground Report' },
    ]
  },
  {
    name: 'BBC News Marathi',
    url: 'https://www.youtube.com/@BBCNewsMarathi',
    platform: 'youtube',
    focus: 'Adani cement grinding project — why Kalyan locals resist',
    sentiment: 'hostile',
    narrative: 'Marathi audience community resistance; EIA bypass controversy covered in local language',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=KQuTuOvuD4o', title: 'Adani cement grinding project : प्रकल्पाला विरोध का होतोय?' },
    ]
  },
  {
    name: 'Aditya Kakkar',
    url: 'https://www.youtube.com/@AdityaKakkar',
    platform: 'youtube',
    focus: 'Bihar Rs1 land deal — 1050 acres & 10 lakh trees controversy',
    sentiment: 'hostile',
    narrative: 'Government-Adani nexus, 10 lakh trees cleared — second highest engagement on land-tree theme',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=eU_mke7M1Qw', title: 'Adani–Modi\'s Rs1 Land Deal in Bihar | 1050 Acres & 10 Lakh Trees Controversy' },
    ]
  },
  {
    name: 'Khan Sir Uncut',
    url: 'https://www.youtube.com/@KhanSirUncut',
    platform: 'youtube',
    focus: 'Adani vs Ambani business reality — political economy',
    sentiment: 'hostile',
    narrative: 'Crony capitalism, political patronage — massive existing audience brought into Adani discourse',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=zOddw7fimh0', title: 'The real truth of Adani and Ambani #adani #ambani #business #india' },
    ]
  },
  {
    name: 'Dhruv Rathee',
    url: 'https://www.youtube.com/@dhruvrathee',
    platform: 'youtube',
    focus: 'Adani Group investigations & crony capitalism (general coverage)',
    sentiment: 'hostile',
    narrative: 'Systematic political favouritism, Hindenburg context — largest independent Hindi political channel',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/@dhruvrathee', title: 'Dhruv Rathee — YouTube Channel (multiple Adani investigation videos)' },
    ]
  },
  {
    name: 'Biz Tak',
    url: 'https://www.youtube.com/@BizTak',
    platform: 'youtube',
    focus: 'Adani vs Vedanta JAL bid; Jewar airport land deal coverage',
    sentiment: 'hostile',
    narrative: 'Adani land-at-discount pattern; Jaypee bid framing as crony win',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=XywoatyPE4Q', title: 'Adani vs Vedanta I Jaypee Group की कंपनी पर अडानी की जीत, वेदांता को लगा झटका' },
      { url: 'https://www.youtube.com/watch?v=GRHFfjJftVY', title: 'Jewar Airport के पास Adani का खेल, कौड़ियों के भाव मिली 4,000 एकड़ जमीन!' },
      { url: 'https://www.youtube.com/watch?v=OW7HUC1FvlU', title: 'Adani का बड़ा गेम, डूबती कंपनी पर लगाया ₹12,500 करोड़ का दांव? | Jaypee Group' },
    ]
  },

  // ─── NEUTRAL / FINANCIAL NEWS ───
  {
    name: 'Zee Business',
    url: 'https://www.youtube.com/@ZeeBusiness',
    platform: 'youtube',
    focus: 'Merger news & stock uncertainty; SEC case market impact',
    sentiment: 'neutral',
    narrative: 'Muted market reaction; stock analysis; mainstream business news framing',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=ZaRTSOSWKRs', title: 'Ambuja-ACC-Orient Cement Mega Merger | Will Shares Surge After the Deal? | Anil Singhvi' },
      { url: 'https://www.youtube.com/watch?v=dsb1nfRrVUE', title: 'Adani Stocks Fall Sharply: What Happened in US Court? Market Impact Explained by Anil Singhvi' },
    ]
  },
  {
    name: 'Mint',
    url: 'https://www.youtube.com/@mint',
    platform: 'youtube',
    focus: 'JAL acquisition win; cement giant analysis',
    sentiment: 'neutral',
    narrative: '"Who wins, who loses" — analytical framing; Ambuja merger as market afterthought',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=HIDBJf1OuBk', title: 'Big Win For Adani Group, Secures $1.7-bn Takeover Of Bankrupt Jaypee Group | The Inside Story' },
    ]
  },
  {
    name: 'Upstox',
    url: 'https://www.youtube.com/@Upstox',
    platform: 'youtube',
    focus: 'UltraTech vs Adani — cement market reshaping; merger savings analysis',
    sentiment: 'neutral',
    narrative: 'Cement arms race, M&A war — broker platform audience; analytical, not hostile',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=LDGFn_T7rVg', title: 'UltraTech vs Adani: How India\'s Cement Market Is Being Reshaped | Upstox' },
      { url: 'https://www.youtube.com/watch?v=E_or4vHe2wk', title: 'Ambuja–ACC–Orient Merger: ₹100/Tonne Savings | Markets Today #139 | Upstox' },
      { url: 'https://www.youtube.com/watch?v=QV2QxwEFGTg', title: 'India\'s Cement Battle: Adani vs UltraTech – M&A War & Sector Deep Dive | Upstox' },
    ]
  },
  {
    name: 'Groww',
    url: 'https://www.youtube.com/@GrowwApp',
    platform: 'youtube',
    focus: 'UltraTech vs Ambuja Cements — comparison for retail investors',
    sentiment: 'neutral',
    narrative: 'Valuation gap, fundamentals vs sentiment — fintech platform audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=n1m1v3Smsgo', title: 'UltraTech Cement vs Ambuja Cements' },
    ]
  },
  {
    name: 'Markets by Zerodha Hindi',
    url: 'https://www.youtube.com/watch?v=lwgVWwtA22A',
    platform: 'youtube',
    focus: 'How India\'s cement giants are expanding fast — The Daily Brief',
    sentiment: 'neutral',
    narrative: 'Sector expansion framing — UltraTech/Ambuja/Shree capacity race comparison',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=lwgVWwtA22A', title: 'How India\'s cement giants are expanding fast | The Daily Brief Hindi' },
    ]
  },
  {
    name: 'Money9',
    url: 'https://www.youtube.com/watch?v=Z27GMCIPhwI',
    platform: 'youtube',
    focus: 'ACC, Ambuja, Orient, Sanghi merger — where to invest?',
    sentiment: 'neutral',
    narrative: 'Analytical investment positioning post-merger — mass Hindi business audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=Z27GMCIPhwI', title: 'ACC, Ambuja Cements, Orient Cement, Sanghi Industries मिलकर बनेगी एक बड़ी कंपनी, कहां करें खरीदारी?' },
      { url: 'https://www.youtube.com/watch?v=nkJC2NP9giM', title: 'Adani Enterprises, ATGL, Adani Green, Adani Power, Ambuja Cement Share में कौन चलेगा?' },
    ]
  },
  {
    name: 'NSE BSE Official',
    url: 'https://www.youtube.com/watch?v=g_URn9MbFOU',
    platform: 'youtube',
    focus: 'Ambuja Cement Q2 Results 2026 — latest share news',
    sentiment: 'neutral',
    narrative: 'Results coverage — retail investor decision-making channel',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=g_URn9MbFOU', title: 'Ambuja Cement Q2 Results 2026 | Ambuja Cement Results Today | Ambuja Cement Share Latest News' },
    ]
  },
  {
    name: 'Biz Tak — Ambuja Record',
    url: 'https://www.youtube.com/watch?v=j8hxmFRVzAI',
    platform: 'youtube',
    focus: 'Ambuja Cement breaks all records — Q3 FY26',
    sentiment: 'neutral',
    narrative: 'Positive operational news framing — record results but framed analytically not enthusiastically',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=j8hxmFRVzAI', title: 'Gautam Adani की कंपनी Ambuja Cement ने रच दिया इतिहास, तोड़े सारे रिकॉर्ड! | BIZ Tak' },
    ]
  },
  {
    name: 'Alankar Gupta',
    url: 'https://www.youtube.com/watch?v=KsFN6TL_kmk',
    platform: 'youtube',
    focus: 'He turned a dying cement plant into a $7.3 Billion empire',
    sentiment: 'neutral',
    narrative: 'Cement industry success stories — Shree Cement case; indirectly frames Adani differently',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=KsFN6TL_kmk', title: 'He turned a Dying Cement Plant into a $7.3 Billion Empire' },
    ]
  },
  {
    name: 'BuildMakaan',
    url: 'https://www.youtube.com/@BuildMakaan',
    platform: 'youtube',
    focus: 'Cement GST cuts, price comparison — Ambuja vs UltraTech',
    sentiment: 'neutral',
    narrative: 'Consumer pricing, GST & quality comparison — practical home builder audience',
    brand: 'absent',
    links: [
      { url: 'https://www.youtube.com/watch?v=4PN8OUdUyQQ', title: 'Cement GST घटा ⁉️ Now Cement Prices are Down ⁉️ Ultratach Cement Vs ACC cement By BuildMakaan' },
      { url: 'https://www.youtube.com/watch?v=_wmfJyrx_6g', title: 'Cement Price Per Bag 💰 Ambuja Cement Vs Ultratech Cement 🏗️ By BuildMakaan' },
    ]
  },
  {
    name: '@livemint (Twitter/X)',
    url: 'https://twitter.com/livemint',
    platform: 'twitter',
    focus: 'Cement giant in the making — who wins, who loses',
    sentiment: 'neutral',
    narrative: 'Merger synergies vs retail investor skepticism — quality financial journalism audience',
    brand: 'absent',
    links: [
      { url: 'https://x.com/livemint/status/2005853750716453139', title: 'Mint Twitter — Adani\'s cement giant in the making – who wins and who loses?' },
    ]
  },
  {
    name: '@EconomicTimes (Twitter/X)',
    url: 'https://x.com/EconomicTimes',
    platform: 'twitter',
    focus: 'Ambuja approves merger of ACC and Orient Cement',
    sentiment: 'neutral',
    narrative: 'Major merger announcement coverage — institutional audience framing',
    brand: 'absent',
    links: [
      { url: 'https://x.com/EconomicTimes/status/2003152091200844066', title: 'Economic Times Twitter — Adani\'s Ambuja Cements approves merger of ACC and Orient Cement' },
    ]
  },
  {
    name: 'ANI (Twitter/X)',
    url: 'https://twitter.com/ANI',
    platform: 'twitter',
    focus: 'Odisha ceremony; Adani cement investment official coverage',
    sentiment: 'neutral',
    narrative: 'State-level infrastructure investment framing — wire service, institutional reach',
    brand: 'absent',
    links: [
      { url: 'https://twitter.com/ANI/status/2041780148090122656', title: 'ANI — Adani cement manufacturing unit near Cuttack, ₹2,100 crores, 2500 jobs' },
    ]
  },
  {
    name: '@darshitpatel84 (Twitter/X)',
    url: 'https://twitter.com/darshitpatel84',
    platform: 'twitter',
    focus: 'GST 2.0 impact on cement — price implications for Adani',
    sentiment: 'neutral',
    narrative: 'GST cut analysis — retail cement prices down ₹25-30/bag; margin and demand modelling',
    brand: 'absent',
    links: [
      { url: 'https://twitter.com/darshitpatel84/status/1965314234767614109', title: 'From cement to solar: How GST 2.0 could reprice Adani stocks' },
    ]
  },
  {
    name: 'The Wire (Instagram)',
    url: 'https://www.instagram.com/thewire.in/',
    platform: 'instagram',
    focus: 'Investigative land & environmental posts — EIA exemption, Assam land grab',
    sentiment: 'hostile',
    narrative: 'EIA exemption controversy, Assam tribal land, NGT violations — credible investigative reach',
    brand: 'absent',
    links: [
      { url: 'https://www.instagram.com/thewire.in/', title: 'The Wire Instagram — investigative Adani cement coverage' },
    ]
  },

  // ─── BRAND-OWNED ───
  {
    name: '@ambuja_cement_official (Instagram)',
    url: 'https://www.instagram.com/ambuja_cement_official/',
    platform: 'instagram',
    focus: 'Product & brand campaigns — Mazbooti, sustainability, Gujarat Giants IPL',
    sentiment: 'brand',
    narrative: 'Mazbooti, sustainability messaging, Odisha investment — brand content reaching existing followers',
    brand: 'brand',
    links: [
      { url: 'https://www.instagram.com/ambuja_cement_official/', title: '@ambuja_cement_official — Official Instagram' },
      { url: 'https://www.instagram.com/ambuja_cement_official/reel/DTm6lECkkNV/', title: 'Gujarat Giants / Ambuja Cement brand integration' },
      { url: 'https://www.instagram.com/ambuja_cement_official/reel/DVBOkqSklhH/', title: 'Adani XTRA Strong Self-Cure Plaster product reel' },
    ]
  },
  {
    name: '@acclimited (Instagram)',
    url: 'https://www.instagram.com/acclimited/',
    platform: 'instagram',
    focus: 'Heritage & product posts — 89 years of trust; ACC F2R and Gold Water Shield',
    sentiment: 'brand',
    narrative: '"Building Nation, Building Homes since 1936" — legacy positioning; dealer recruitment',
    brand: 'brand',
    links: [
      { url: 'https://secure.instagram.com/acclimited/', title: '@acclimited — Official Instagram (Become an Adani Cement Dealer)' },
      { url: 'https://www.instagram.com/acclimited/reel/DVvlmxmkx5X/', title: 'ACC Concrete+ Cement ke saath banao ek mazboot ghar' },
      { url: 'https://www.instagram.com/acclimited/reel/DLzeGbFzCbu/', title: 'ACC Gold Water Shield — seepage prevention campaign' },
    ]
  },
  {
    name: '@adanicementofficial (Instagram)',
    url: 'https://www.instagram.com/adanicementofficial/',
    platform: 'instagram',
    focus: 'TNFD, Green Building Centres, NAREDCO partnership posts',
    sentiment: 'brand',
    narrative: 'India\'s first TNFD cement company, sustainability; RMC plant inauguration coverage',
    brand: 'brand',
    links: [
      { url: 'https://www.instagram.com/p/DRJ32zhCcsO/', title: 'Adani Cement — India\'s first TNFD adopter in cement' },
      { url: 'https://www.instagram.com/p/DMcoxCWII9k/', title: 'Adani Cement — RMC plant inauguration at Shantigram' },
    ]
  },
  {
    name: '@adanionline (Instagram)',
    url: 'https://www.instagram.com/adanionline/',
    platform: 'instagram',
    focus: 'Odisha investment reels, group infrastructure, Karan Adani content',
    sentiment: 'brand',
    narrative: '₹33,000 cr Odisha, 2,500 jobs, nation-building; ₹2,100 cr cement unit near Cuttack',
    brand: 'brand',
    links: [
      { url: 'https://secure.instagram.com/adanionline/', title: '@adanionline — Official Adani Group Instagram (256K followers)' },
      { url: 'https://www.instagram.com/p/DK4WZlWTbVu/', title: 'Adani Cement and CREDAI joint forces — CREDAI National partnership' },
    ]
  },
  {
    name: '@AdaniCement_ (Twitter/X)',
    url: 'https://twitter.com/AdaniCement_',
    platform: 'twitter',
    focus: 'R&D quality posts, sustainability certifications, Network Operating Centre',
    sentiment: 'brand',
    narrative: 'Multi-stage quality testing, TNFD, digital precision in cement delivery',
    brand: 'brand',
    links: [
      { url: 'https://x.com/AdaniCement_/status/2041148355846533260', title: '@AdaniCement_ — Sustainability initiatives tweet' },
      { url: 'https://x.com/ACCLimited/status/1944638153673093204', title: 'Adani Cement reshaping infra delivery with digital precision — CNOC' },
    ]
  },
  {
    name: '@ACCLimited (Twitter/X)',
    url: 'https://twitter.com/ACCLimited',
    platform: 'twitter',
    focus: 'Nation-building legacy, EEP programme, SBTi net-zero validated targets',
    sentiment: 'brand',
    narrative: 'Legacy brand maintenance — "Building Nation since 1936"; SBTi 4th globally by scale',
    brand: 'brand',
    links: [
      { url: 'https://twitter.com/ACCLimited', title: '@ACCLimited — Official Twitter/X' },
      { url: 'https://x.com/ACCLimited/status/1935917153208672328', title: 'Ambuja & ACC — 1st in India, 4th globally with SBTi net-zero targets' },
    ]
  },
  {
    name: '@AmbujaCementACL (Twitter/X)',
    url: 'https://twitter.com/AmbujaCementACL',
    platform: 'twitter',
    focus: 'Gagal plant sustainability, Himachal eucalyptus ecosystem posts',
    sentiment: 'brand',
    narrative: 'Sustainability PR — nature + industry coexistence; minimal organic amplification',
    brand: 'brand',
    links: [
      { url: 'https://twitter.com/AmbujaCementACL/status/1920723428614586718', title: '@AmbujaCementACL — Gagal Plant Himachal eucalyptus ecosystem tweet' },
    ]
  },
  {
    name: 'Ambuja Cement (YouTube)',
    url: 'https://www.youtube.com/@AmbujaCementsltd',
    platform: 'youtube',
    focus: 'Festive & brand films — Durga Puja, Engineer\'s Day content',
    sentiment: 'brand',
    narrative: 'Brand affinity content; reach limited to existing subscribers',
    brand: 'brand',
    links: [
      { url: 'https://www.youtube.com/watch?v=dxGhoEmhDQc', title: 'Shoktir Utshob | Durga Puja 2025 | Adani Cement' },
      { url: 'https://www.youtube.com/watch?v=dG7apk3Helg', title: 'Happy Engineer\'s Day | Adani Ambuja Cement' },
    ]
  },
];

// ─── CREATOR TABLE RENDER ───
const CREATORS_PER_PAGE = 12;
let currentPage = 1;
let currentFilter = 'all';

function getPlatformClass(p) {
  if (p === 'youtube') return 'plat-youtube';
  if (p === 'instagram') return 'plat-instagram';
  if (p === 'twitter') return 'plat-twitter';
  if (p === 'reddit') return 'plat-reddit';
  return '';
}
function getPlatformLabel(p) {
  if (p === 'youtube') return 'YouTube';
  if (p === 'instagram') return 'Instagram';
  if (p === 'twitter') return 'Twitter/X';
  if (p === 'reddit') return 'Reddit';
  return p;
}
function getSentimentClass(s) {
  if (s === 'hostile') return 'sent-hostile';
  if (s === 'skeptical') return 'sent-skeptical';
  if (s === 'brand') return 'sent-neutral';
  return 'sent-neutral';
}
function getSentimentLabel(s) {
  if (s === 'hostile') return 'Hostile';
  if (s === 'skeptical') return 'Skeptical';
  if (s === 'neutral') return 'Neutral';
  if (s === 'brand') return 'Brand-owned';
  return s;
}
function getRowClass(s) {
  if (s === 'hostile') return 'ct-hostile';
  if (s === 'skeptical') return 'ct-skeptical';
  if (s === 'brand') return 'ct-brand';
  return 'ct-neutral';
}

function getFilteredCreators() {
  if (currentFilter === 'all') return CREATORS;
  if (['youtube','instagram','twitter','reddit'].includes(currentFilter)) {
    return CREATORS.filter(c => c.platform === currentFilter);
  }
  if (currentFilter === 'brand') return CREATORS.filter(c => c.brand === 'brand');
  return CREATORS.filter(c => c.sentiment === currentFilter);
}

function renderCreatorTable() {
  const tbody = document.getElementById('creator-tbody');
  const pagination = document.getElementById('creator-pagination');
  const showingEl = document.getElementById('ct-showing');
  if (!tbody) return;

  const filtered = getFilteredCreators();
  const totalPages = Math.max(1, Math.ceil(filtered.length / CREATORS_PER_PAGE));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * CREATORS_PER_PAGE;
  const pageItems = filtered.slice(start, start + CREATORS_PER_PAGE);

  tbody.innerHTML = pageItems.map((c, idx) => {
    const globalIdx = start + idx;
    const extraLinks = c.links && c.links.length > 1 ? c.links.slice(1) : [];
    const mainUrl = c.links && c.links[0] ? c.links[0].url : c.url;
    const expandId = `expand-${globalIdx}`;

    return `<tr class="${getRowClass(c.sentiment)}">
      <td>
        <strong><a href="${mainUrl}" target="_blank" rel="noopener" class="creator-link">${c.name} ↗</a></strong>
        ${extraLinks.length > 0 ? `
          <br><button class="expand-links-btn" onclick="toggleLinks('${expandId}', this)">+ ${extraLinks.length} more link${extraLinks.length > 1 ? 's' : ''}</button>
          <div class="extra-links" id="${expandId}">
            <span class="extra-link-label">Related Content Links</span>
            ${extraLinks.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="extra-link-item">↗ ${l.title}</a>`).join('')}
          </div>` : ''}
      </td>
      <td><span class="plat-pill ${getPlatformClass(c.platform)}">${getPlatformLabel(c.platform)}</span></td>
      <td>${c.focus}</td>
      <td><span class="sent-badge ${getSentimentClass(c.sentiment)}">${getSentimentLabel(c.sentiment)}</span></td>
      <td>${c.narrative}</td>
      <td><span class="${c.brand === 'brand' ? 'brand-present' : 'brand-absent'}">${c.brand === 'brand' ? 'Brand-owned' : 'Absent'}</span></td>
    </tr>`;
  }).join('');

  if (showingEl) showingEl.textContent = `Showing ${start + 1}–${Math.min(start + CREATORS_PER_PAGE, filtered.length)} of ${filtered.length}`;

  // Pagination
  if (pagination) {
    let html = '';
    html += `<button class="cpg-btn" onclick="goPage(${currentPage-1})" ${currentPage<=1?'disabled':''}>← Prev</button>`;
    for (let p = 1; p <= totalPages; p++) {
      html += `<button class="cpg-btn ${p===currentPage?'active':''}" onclick="goPage(${p})">${p}</button>`;
    }
    html += `<button class="cpg-btn" onclick="goPage(${currentPage+1})" ${currentPage>=totalPages?'disabled':''}>Next →</button>`;
    html += `<span class="cpg-info">Page ${currentPage} of ${totalPages}</span>`;
    pagination.innerHTML = html;
  }
}

function goPage(p) {
  const filtered = getFilteredCreators();
  const totalPages = Math.max(1, Math.ceil(filtered.length / CREATORS_PER_PAGE));
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  renderCreatorTable();
  document.getElementById('creator-main-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleLinks(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
  btn.textContent = el.classList.contains('open') ? '− Collapse links' : `+ ${el.querySelectorAll('a').length} more link${el.querySelectorAll('a').length > 1 ? 's' : ''}`;
}

// Init filter buttons
document.addEventListener('DOMContentLoaded', function() {
  const countEl = document.getElementById('ct-count');
  if (countEl) countEl.textContent = CREATORS.length + ' creators tracked';

  const filterBtns = document.querySelectorAll('.cf-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      currentPage = 1;
      renderCreatorTable();
    });
  });

  renderCreatorTable();
});
