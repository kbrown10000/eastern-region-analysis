'use client';

import Link from 'next/link';

// ==================== 2026 BOSTON BIOTECH MARKET DATA ====================

// Market Overview Stats
const marketStats = {
  vcFunding2025: 6.85, // $B
  vcDeals2025: 197,
  vcJan2026: 1.0, // $B
  pipelineGrowth: 13.9, // %
  usPipelineShare: 15.7, // %
  labVacancy: 27.8, // %
  bostonVsCambridge: 71, // % funding to Boston proper (not Cambridge)
};

// Commercial Stage Leaders
const commercialStage = [
  { 
    company: 'Vertex Pharmaceuticals',
    marketCap: '$120B+',
    focus: 'Pain, Cystic Fibrosis, Gene Editing',
    outlook: 'Launching Suzetrigine (non-opioid pain med) and scaling Casgevy (CRISPR). $10B+ cash for acquisitions.',
    catalyst: 'Suzetrigine launch, Casgevy manufacturing ramp',
    usdmFit: 'HIGH - Cloud validation, AI governance, gene therapy QA',
  },
  {
    company: 'Biogen',
    marketCap: '$25B',
    focus: 'Neurology (MS, Alzheimer\'s)',
    outlook: 'Full EU approval for Leqembi. Restructuring creating consulting opportunities.',
    catalyst: 'Leqembi label expansion, cost cuts driving outsourcing',
    usdmFit: 'HIGH - Restructuring = managed services opportunity',
  },
  {
    company: 'Moderna',
    marketCap: '$15B',
    focus: 'mRNA Vaccines & Therapeutics',
    outlook: 'Blackstone investment to advance pipeline. Diversifying beyond COVID-19.',
    catalyst: 'Non-COVID mRNA pipeline readouts, manufacturing efficiency',
    usdmFit: 'MEDIUM - Scale player, competitive bidding',
  },
  {
    company: 'Alnylam Pharmaceuticals',
    marketCap: '$30B',
    focus: 'RNAi Therapies for Rare Diseases',
    outlook: 'FDA approval for Amvuttra. Leader in RNA interference.',
    catalyst: 'Pipeline expansion, ATTR market growth',
    usdmFit: 'HIGH - Complex manufacturing, GxP needs',
  },
  {
    company: 'Sarepta Therapeutics',
    marketCap: '$12B',
    focus: 'Gene Therapy for DMD',
    outlook: 'Elevidys commercial ramp ($250M+ quarterly). Global rollout in progress.',
    catalyst: 'Long-term efficacy data, manufacturing scale',
    usdmFit: 'HIGH - Gene therapy QA expertise needed',
  },
  {
    company: 'Blueprint Medicines',
    marketCap: 'Acquired by Sanofi',
    focus: 'Precision Cancer & Rare Disease',
    outlook: 'Sanofi acquisition validates precision medicine approach.',
    catalyst: 'Integration with Sanofi, pipeline acceleration',
    usdmFit: 'MEDIUM - Now part of Big Pharma',
  },
  {
    company: 'Karuna (Bristol Myers)',
    marketCap: 'Acquired',
    focus: 'Schizophrenia (KarXT)',
    outlook: 'First new class of schizophrenia drug in decades. Multi-billion potential by 2026.',
    catalyst: 'KarXT commercial launch, market adoption',
    usdmFit: 'MEDIUM - BMS integration path',
  },
  {
    company: 'Agios Pharmaceuticals',
    marketCap: '$3B',
    focus: 'Rare Disease (PKD)',
    outlook: 'Transitioning to commercial leader. Phase 3 readouts in Thalassemia.',
    catalyst: 'Thalassemia data (2026)',
    usdmFit: 'HIGH - Scale-up consulting',
  },
];

// Phase 3 Companies - The "Finish Line" Contenders
const phase3Companies = [
  {
    company: 'Karyopharm Therapeutics',
    focus: 'Oncology (Selinexor)',
    readout: 'March 2026',
    catalyst: 'Phase 3 SENTRY trial for myelofibrosis; mid-2026 for endometrial cancer',
    usdmFit: 'MEDIUM - Commercial prep services',
  },
  {
    company: 'Cerevance',
    focus: 'Parkinson\'s Disease',
    readout: 'H1 2026',
    catalyst: 'Phase 3 ARISE trial of Solengepras',
    usdmFit: 'MEDIUM - Regulatory support',
  },
  {
    company: 'Wave Life Sciences',
    focus: 'DMD (RNA therapies)',
    readout: '2026 Approval Seek',
    catalyst: 'Accelerated FDA approval for WVE-N531 after positive data',
    usdmFit: 'HIGH - Gene therapy/RNA manufacturing',
  },
  {
    company: 'Viking Therapeutics',
    focus: 'Obesity (GLP-1/GIP)',
    readout: 'Late-stage 2026',
    catalyst: 'Primary competitor to Eli Lilly/Novo Nordisk. Massive upside.',
    usdmFit: 'HIGH - Commercial-scale validation',
  },
  {
    company: 'Apellis Pharmaceuticals',
    focus: 'Complement Therapies',
    readout: '2026',
    catalyst: 'Syfovre label expansion for Geographic Atrophy; systemic rare disease Phase 3s',
    usdmFit: 'MEDIUM - Manufacturing QA',
  },
  {
    company: 'Intellia Therapeutics',
    focus: 'In-vivo CRISPR',
    readout: 'Next 18 months critical',
    catalyst: 'NTLA-2001 pivotal trials - first permanent ATTR amyloidosis fix if successful',
    usdmFit: 'HIGH - Gene editing QA/validation',
  },
  {
    company: 'Beam Therapeutics',
    focus: 'Base Editing (Sickle Cell)',
    readout: '2026',
    catalyst: 'Next-gen CRISPR moving to late-stage',
    usdmFit: 'HIGH - Cell/gene therapy expertise',
  },
];

// Phase 2 Companies - High-Alpha Innovators
const phase2Companies = [
  {
    company: 'Prime Medicine',
    location: 'Cambridge',
    focus: 'Search & Replace Gene Editing',
    outlook: 'First human data in 2025-2026 validates next decade of growth',
    likelihood: 'HIGH',
    usdmFit: 'HIGH - Novel modality QA',
  },
  {
    company: 'Generate:Biomedicines',
    location: 'Somerville',
    focus: 'AI-Designed Proteins',
    outlook: 'Flagship Pioneering company. AI-validated clinical data expected 2026.',
    likelihood: 'HIGH',
    usdmFit: 'HIGH - AI governance + validation',
  },
  {
    company: 'Third Harmonic Bio',
    location: 'Cambridge',
    focus: 'Mast-Cell Inflammatory Disease',
    outlook: 'Pure play on specific pathway Big Pharma wants',
    likelihood: 'MEDIUM',
    usdmFit: 'MEDIUM - Acquisition target',
  },
  {
    company: 'Alkeus Pharmaceuticals',
    location: 'Boston',
    focus: 'Stargardt Disease (Blindness)',
    outlook: 'Phase 2/3 sweet spot with Breakthrough Therapy designation',
    likelihood: 'HIGH',
    usdmFit: 'MEDIUM - Regulatory support',
  },
  {
    company: 'Editas Medicine',
    location: 'Cambridge',
    focus: 'CRISPR Gene Editing',
    outlook: 'EDIT-401 (cholesterol) human trials mid-2026, initial data by EOY 2026',
    likelihood: 'MEDIUM',
    usdmFit: 'HIGH - Gene editing expertise',
  },
  {
    company: 'Amylyx Pharmaceuticals',
    location: 'Cambridge',
    focus: 'Wolfram Syndrome',
    outlook: 'Positive interim Phase 2 data for AMX0035',
    likelihood: 'MEDIUM',
    usdmFit: 'MEDIUM - Scale-up consulting',
  },
  {
    company: 'Life Biosciences',
    location: 'Cambridge',
    focus: 'Anti-Aging Gene Therapy',
    outlook: 'FDA clearance for Phase 1 in early 2026 (ER-100 for optic neuropathies)',
    likelihood: 'HIGH',
    usdmFit: 'HIGH - Novel gene therapy QA',
  },
];

// Macro Trends for 2025-2026
const macroTrends = [
  {
    trend: 'M&A Wave Coming',
    impact: 'HIGH',
    description: 'Biogen, Takeda, Sanofi all face patent cliffs. Must acquire Phase 2/3 companies to survive.',
    implication: 'Target relationship building now → consultant to acquirer post-deal',
  },
  {
    trend: 'Lab Space Correction',
    impact: 'MEDIUM',
    description: '27.8% vacancy in East Cambridge/Seaport. Lower burn rates = more runway for startups.',
    implication: 'Smaller biotechs have longer runways, sustained consulting budgets',
  },
  {
    trend: 'AI Convergence',
    impact: 'HIGH',
    description: 'MIT/Harvard tech + hospitals = AI drug discovery reaching clinical proof-of-concept 2026.',
    implication: 'AI governance services in high demand. Model validation gaps = opportunity.',
  },
  {
    trend: 'CRISPR Commercialization',
    impact: 'HIGH',
    description: 'Casgevy (Vertex/CRISPR) first to market. Wave of CRISPR therapies coming 2026-2027.',
    implication: 'Gene editing QA expertise = premium rates',
  },
  {
    trend: 'Boston > Cambridge',
    impact: 'MEDIUM',
    description: '71% of VC funding now going to Boston proper, not Cambridge. Geographic shift.',
    implication: 'New rep should focus Boston proper, Seaport, not just Kendall Square',
  },
];

// Recent funding rounds (expanded)
const recentFunding = [
  { company: 'AIRNA', amount: 155, round: 'Series B', date: 'Apr 2025', focus: 'RNA editing' },
  { company: 'Kriya Therapeutics', amount: 151, round: 'Series B', date: '2025', focus: 'Gene therapy manufacturing' },
  { company: 'Angitia', amount: 130, round: 'Venture', date: 'Feb 2026', focus: 'Gene therapy' },
  { company: 'Vedanta Biosciences', amount: 106.5, round: 'Venture', date: '2025', focus: 'Oral microbiome therapies' },
  { company: 'Senti Biosciences', amount: 105, round: 'Series C', date: '2025', focus: 'Gene circuit therapeutics' },
  { company: 'QuantX Bio', amount: 85, round: 'Series B', date: 'Feb 2026', focus: 'Quantum bio' },
  { company: 'Actithera', amount: 75.5, round: 'Series A', date: 'Jul 2025', focus: 'FAP-targeting oncology' },
];

// Therapeutic focus areas
const therapeuticAreas = [
  { area: 'Oncology', share: 33, description: 'One-third of all R&D. Immuno-oncology, targeted therapies, cell therapy.' },
  { area: 'CNS/Neurology', share: 18, description: 'Alzheimer\'s, Parkinson\'s, rare neurological disorders.' },
  { area: 'Gene Therapy', share: 15, description: 'CRISPR, base editing, AAV vectors. Manufacturing bottleneck.' },
  { area: 'Rare Disease', share: 12, description: 'Orphan drugs, breakthrough designations, premium pricing.' },
  { area: 'RNA Therapeutics', share: 10, description: 'mRNA vaccines, RNAi, RNA editing. Post-COVID diversification.' },
  { area: 'Immunology', share: 8, description: 'Autoimmune, inflammatory. CAR-T for non-cancer indications.' },
  { area: 'Other', share: 4, description: 'Infectious disease, cardiovascular, metabolic.' },
];

// Competitive landscape
const competitors = [
  { 
    name: 'Veeva Systems', 
    strength: 'Vault platform dominance, regulatory docs',
    weakness: 'Expensive, rigid, limited AI',
    opportunity: 'USDM as Veeva implementation partner + AI layer',
    share: 'Large',
  },
  { 
    name: 'Cognizant Life Sciences', 
    strength: 'Scale, CSV capacity, offshore',
    weakness: 'Generic approach, quality concerns',
    opportunity: 'Compete on quality, gene therapy expertise',
    share: 'Medium',
  },
  { 
    name: 'Deloitte Life Sciences', 
    strength: 'Brand recognition, cloud practice',
    weakness: 'Very expensive, junior staff on projects',
    opportunity: 'Win on value, senior talent delivery',
    share: 'Medium',
  },
  { 
    name: 'Accenture Life Sciences', 
    strength: 'Digital transformation, global scale',
    weakness: 'Less GxP depth, expensive',
    opportunity: 'Specialized compliance focus',
    share: 'Medium',
  },
];

export default function MarketIntelPage() {
  const totalFunding = recentFunding.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Boston&apos;s Biotech Frontier 2026-2027</h1>
        <p className="text-emerald-400 text-xl mb-2">The World&apos;s Leading Life Sciences Hub</p>
        <p className="text-slate-400 mb-8">Comprehensive market intelligence for territory planning and account prioritization</p>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <StatCard title="2025 VC Funding" value={`$${marketStats.vcFunding2025}B`} subtitle={`${marketStats.vcDeals2025} deals`} highlight />
          <StatCard title="Jan 2026 Alone" value={`$${marketStats.vcJan2026}B`} subtitle="Strong momentum" highlight />
          <StatCard title="Pipeline Growth" value={`+${marketStats.pipelineGrowth}%`} subtitle="vs 10% national avg" />
          <StatCard title="US Pipeline Share" value={`${marketStats.usPipelineShare}%`} subtitle="MA = #1 state" />
          <StatCard title="Lab Vacancy" value={`${marketStats.labVacancy}%`} subtitle="Lower burn rates" />
          <StatCard title="Boston > Cambridge" value={`${marketStats.bostonVsCambridge}%`} subtitle="VC shift to Boston" />
        </div>

        {/* Market Overview */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📊 Market Overview</h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p className="mb-4">
              Greater Boston solidifies its position as the <strong className="text-emerald-400">global epicenter for biotechnology innovation</strong> heading into 2026. 
              After a period of market correction, the financial landscape has regained footing with venture capital funding returning to pre-pandemic levels.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-emerald-400 font-semibold mb-2">Investment Highlights</h3>
                <ul className="text-sm space-y-1">
                  <li>• $6.85B raised across 197 deals in 2025</li>
                  <li>• $1B raised in January 2026 alone — momentum accelerating</li>
                  <li>• 71% of funding now to Boston proper (not Cambridge)</li>
                  <li>• Geographic diversification creating new hubs</li>
                </ul>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-emerald-400 font-semibold mb-2">Pipeline Strength</h3>
                <ul className="text-sm space-y-1">
                  <li>• MA biotech pipeline grew 14% in 2025 (vs 10% national)</li>
                  <li>• Massachusetts now holds 15.7% of entire US drug pipeline</li>
                  <li>• Oncology = ~33% of R&D activity</li>
                  <li>• Cell/gene therapy: region is global leader</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Focus Areas */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">🎯 Therapeutic Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {therapeuticAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                <div className="flex-shrink-0 w-16">
                  <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${area.share}%` }} />
                  </div>
                  <p className="text-emerald-400 text-sm font-mono mt-1">{area.share}%</p>
                </div>
                <div>
                  <p className="text-white font-medium">{area.area}</p>
                  <p className="text-slate-400 text-xs">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commercial Stage Leaders */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-2">🏆 Commercial-Stage Leaders (Market Shakers)</h2>
          <p className="text-slate-400 text-sm mb-6">Transitioning from R&D to fully integrated commercial machines. Growth depends on sales execution and label expansions.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Company</th>
                  <th className="py-3 text-slate-400 font-medium">Market Cap</th>
                  <th className="py-3 text-slate-400 font-medium">Focus</th>
                  <th className="py-3 text-slate-400 font-medium">2026-2027 Catalyst</th>
                  <th className="py-3 text-slate-400 font-medium">USDM Fit</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {commercialStage.map((company, i) => (
                  <tr key={i} className="border-b border-slate-700 hover:bg-slate-700/30">
                    <td className="py-3 font-medium text-white">{company.company}</td>
                    <td className="py-3 font-mono text-emerald-400">{company.marketCap}</td>
                    <td className="py-3">{company.focus}</td>
                    <td className="py-3 text-slate-400 max-w-xs">{company.catalyst}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        company.usdmFit.startsWith('HIGH') ? 'bg-emerald-900/50 text-emerald-400' :
                        'bg-yellow-900/50 text-yellow-400'
                      }`}>{company.usdmFit.split(' - ')[0]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 3 Companies */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-2">🏁 Phase 3: The &quot;Finish Line&quot; Contenders</h2>
          <p className="text-slate-400 text-sm mb-6">Most volatile but high-growth stage. A Phase 3 win usually leads to massive valuation spike or acquisition.</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {phase3Companies.map((company, i) => (
              <div key={i} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{company.company}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-900/50 text-blue-400">{company.readout}</span>
                </div>
                <p className="text-emerald-400 text-sm mb-2">{company.focus}</p>
                <p className="text-slate-400 text-sm">{company.catalyst}</p>
                <div className="mt-3 pt-3 border-t border-slate-600">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    company.usdmFit.startsWith('HIGH') ? 'bg-emerald-900/50 text-emerald-400' :
                    'bg-yellow-900/50 text-yellow-400'
                  }`}>USDM: {company.usdmFit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phase 2 Companies */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-2">🚀 Phase 2: The &quot;High-Alpha&quot; Innovators</h2>
          <p className="text-slate-400 text-sm mb-6">Proving their concept. In the next 24 months, they will either be acquired by Big Pharma or raise massive rounds for Phase 3.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phase2Companies.map((company, i) => (
              <div key={i} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{company.company}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    company.likelihood === 'HIGH' ? 'bg-emerald-900/50 text-emerald-400' :
                    'bg-yellow-900/50 text-yellow-400'
                  }`}>{company.likelihood}</span>
                </div>
                <p className="text-slate-500 text-xs mb-1">{company.location}</p>
                <p className="text-emerald-400 text-sm mb-2">{company.focus}</p>
                <p className="text-slate-400 text-sm">{company.outlook}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Macro Trends */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-2">🌊 Macro Outlook: Why 2025-2026 Matters</h2>
          <p className="text-slate-400 text-sm mb-6">Boston&apos;s Bio-Boom is entering a consolidation phase. Here&apos;s what to expect.</p>
          
          <div className="space-y-4">
            {macroTrends.map((trend, i) => (
              <div key={i} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      trend.impact === 'HIGH' ? 'bg-red-900/50 text-red-400' :
                      'bg-yellow-900/50 text-yellow-400'
                    }`}>{trend.impact}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{trend.trend}</h3>
                    <p className="text-slate-400 text-sm mb-2">{trend.description}</p>
                    <p className="text-emerald-400 text-sm">→ {trend.implication}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Funding */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">💰 Recent Funding Rounds ($75M+)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Company</th>
                  <th className="py-3 text-slate-400 font-medium">Amount</th>
                  <th className="py-3 text-slate-400 font-medium">Round</th>
                  <th className="py-3 text-slate-400 font-medium">Date</th>
                  <th className="py-3 text-slate-400 font-medium">Focus</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {recentFunding.sort((a, b) => b.amount - a.amount).map((funding, i) => (
                  <tr key={i} className="border-b border-slate-700 hover:bg-slate-700/30">
                    <td className="py-3 font-medium text-white">{funding.company}</td>
                    <td className="py-3 font-mono text-emerald-400">${funding.amount}M</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        funding.round === 'Series A' ? 'bg-blue-900/50 text-blue-400' :
                        funding.round === 'Series B' ? 'bg-purple-900/50 text-purple-400' :
                        funding.round === 'Series C' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-slate-700 text-slate-400'
                      }`}>{funding.round}</span>
                    </td>
                    <td className="py-3 text-slate-400">{funding.date}</td>
                    <td className="py-3">{funding.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-emerald-400 text-sm font-medium mt-4">
            Total Tracked: ${(totalFunding / 1000).toFixed(2)}B across {recentFunding.length} rounds
          </p>
        </section>

        {/* Competitive Landscape */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">⚔️ Competitive Landscape</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {competitors.map((comp, i) => (
              <div key={i} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{comp.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    comp.share === 'Large' ? 'bg-red-900/50 text-red-400' :
                    'bg-yellow-900/50 text-yellow-400'
                  }`}>{comp.share} share</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="text-emerald-400">+</span> <span className="text-slate-300">{comp.strength}</span></p>
                  <p><span className="text-red-400">−</span> <span className="text-slate-300">{comp.weakness}</span></p>
                  <p><span className="text-blue-400">→</span> <span className="text-slate-300">{comp.opportunity}</span></p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-emerald-900/30 rounded-lg border border-emerald-700/50">
            <h3 className="text-emerald-400 font-semibold mb-2">🏆 USDM Differentiation</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• <strong>AI Governance:</strong> No competitor has this offering — Boston biotechs are early AI adopters</li>
              <li>• <strong>Gene Therapy QA:</strong> Deep ATMP expertise from West coast work (Genentech, etc.)</li>
              <li>• <strong>Managed Services:</strong> 70-100% GP model vs commodity T&M pricing</li>
              <li>• <strong>Senior Talent:</strong> Delivery by experts, not junior staff</li>
            </ul>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-700/50">
          <h2 className="text-xl font-bold text-white mb-4">📋 Key Takeaways for Territory Planning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-3">Priority Targets (HIGH USDM Fit)</h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>✅ <strong>Vertex</strong> — Cash-rich, acquiring, gene therapy scaling</li>
                <li>✅ <strong>Biogen</strong> — Restructuring = outsourcing opportunity</li>
                <li>✅ <strong>Alnylam</strong> — Complex RNA manufacturing needs</li>
                <li>✅ <strong>Sarepta</strong> — Gene therapy QA expertise</li>
                <li>✅ <strong>Intellia/Beam</strong> — CRISPR pioneers need validation</li>
                <li>✅ <strong>Generate:Bio</strong> — AI governance gap</li>
                <li>✅ <strong>Prime Medicine</strong> — Novel modality QA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-3">Timing Considerations</h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>📅 <strong>Q1 2026:</strong> Karyopharm Phase 3 data (March)</li>
                <li>📅 <strong>H1 2026:</strong> Cerevance Parkinson&apos;s data</li>
                <li>📅 <strong>Mid-2026:</strong> Editas human trials start</li>
                <li>📅 <strong>2026:</strong> Intellia ATTR pivotal trials</li>
                <li>📅 <strong>2026:</strong> Wave seeking accelerated approval</li>
                <li>💡 <strong>Ongoing:</strong> M&A wave from patent cliffs</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Sources: MassBio 2025 Industry Snapshot, Fierce Biotech, EPM Scientific, company press releases. Updated February 2026.
          </p>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, highlight }: { title: string; value: string; subtitle: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-xs">{title}</p>
      <p className={`text-xl font-bold mt-1 ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
      <p className="text-slate-500 text-xs mt-1">{subtitle}</p>
    </div>
  );
}
