'use client';

import Link from 'next/link';

interface AccountScore {
  name: string;
  region: string;
  totalScore: number;
  tier: 'Platinum' | 'Gold' | 'Silver';
  scores: {
    funding: number;
    timing: number;
    gtmFit: number;
    expansion: number;
    competition: number;
  };
  rationale: string[];
  gtmPillars: string[];
  entryPoint: string;
  estimatedDealSize: string;
  estimatedMargin: string;
  urgency: 'Immediate' | 'Q1 2026' | 'Q2 2026' | 'Monitor';
  news: string;
}

const topAccounts: AccountScore[] = [
  {
    name: 'Vertex Pharmaceuticals',
    region: 'Genetown',
    totalScore: 94,
    tier: 'Platinum',
    scores: { funding: 20, timing: 20, gtmFit: 20, expansion: 18, competition: 16 },
    rationale: [
      'Major biotech leader in Boston/Cambridge — flagship Genetown account',
      'CASGEVY (gene therapy) FDA approval — manufacturing compliance needs surge',
      'Expanding into pain, kidney disease, and gene editing — multi-program complexity',
      'Active AI/ML integration in drug discovery pipeline',
      'Large Veeva footprint — multiple expansion paths',
      '$10B+ revenue company — enterprise-scale engagement potential',
    ],
    gtmPillars: ['AI Governance', 'Veeva Managed Services', 'GxP Managed Services', 'Domain AI'],
    entryPoint: 'Gene therapy manufacturing QA / AI governance framework',
    estimatedDealSize: '$500K - $2M',
    estimatedMargin: '45-55%',
    urgency: 'Immediate',
    news: 'CASGEVY launch, gene editing expansion, AI-driven R&D',
  },
  {
    name: 'Sarepta Therapeutics',
    region: 'Genetown',
    totalScore: 92,
    tier: 'Platinum',
    scores: { funding: 20, timing: 18, gtmFit: 20, expansion: 18, competition: 16 },
    rationale: [
      'Gene therapy leader (ELEVIDYS) — complex manufacturing regulatory path',
      'Cambridge MA headquarters — core Genetown territory',
      'Accelerated approval pathway — urgent compliance documentation needs',
      'Expanding manufacturing capacity — GxP systems needed at scale',
      'Active clinical pipeline across multiple gene therapy programs',
      'Growing from specialty to enterprise pharma — operating model transformation',
    ],
    gtmPillars: ['Operating Model', 'CRO Oversight', 'GxP Managed Services', 'Veeva SME'],
    entryPoint: 'Gene therapy manufacturing compliance / operating model assessment',
    estimatedDealSize: '$400K - $1.5M',
    estimatedMargin: '45-52%',
    urgency: 'Immediate',
    news: 'ELEVIDYS commercial launch, manufacturing scale-up',
  },
  {
    name: 'Biogen',
    region: 'Genetown',
    totalScore: 89,
    tier: 'Platinum',
    scores: { funding: 18, timing: 20, gtmFit: 18, expansion: 17, competition: 16 },
    rationale: [
      'Major Genetown biopharma — neurodegeneration and rare disease focus',
      'Lecanemab launch (Alzheimer\'s) — commercial scale-up compliance needs',
      'Biosimilars portfolio expansion — regulatory complexity',
      'AI/ML integration into research — AI governance needs',
      'Large ServiceNow deployment — ProcessX opportunity',
      'Enterprise Veeva customer — managed services expansion',
    ],
    gtmPillars: ['ProcessX', 'AI Governance', 'Veeva Managed Services', 'GxP Managed Services'],
    entryPoint: 'ProcessX ServiceNow pilot / AI governance assessment',
    estimatedDealSize: '$400K - $1.2M',
    estimatedMargin: '45-52%',
    urgency: 'Immediate',
    news: 'Lecanemab launch, biosimilars expansion, AI R&D investments',
  },
  {
    name: 'Merck',
    region: 'NJ Pharma',
    totalScore: 87,
    tier: 'Gold',
    scores: { funding: 18, timing: 18, gtmFit: 17, expansion: 18, competition: 16 },
    rationale: [
      'Largest NJ Pharma corridor company — massive enterprise opportunity',
      'KEYTRUDA lifecycle management — regulatory complexity across indications',
      'Post-COVID vaccine portfolio diversification — compliance documentation',
      'Large ServiceNow and Veeva deployments — ProcessX + Veeva MS fit',
      'AI/ML in drug discovery — governance framework needed',
      'Multi-site global operations — data integration needs',
    ],
    gtmPillars: ['ProcessX', 'Veeva Managed Services', 'AI Governance', 'Data Integration'],
    entryPoint: 'ProcessX pilot / Veeva managed services assessment',
    estimatedDealSize: '$500K - $1.5M',
    estimatedMargin: '42-50%',
    urgency: 'Q1 2026',
    news: 'KEYTRUDA lifecycle mgmt, AI drug discovery investments',
  },
  {
    name: 'BMS (Bristol-Myers Squibb)',
    region: 'NJ Pharma',
    totalScore: 85,
    tier: 'Gold',
    scores: { funding: 16, timing: 18, gtmFit: 18, expansion: 17, competition: 16 },
    rationale: [
      'Major NJ Pharma presence — cell therapy leader (Breyanzi, Abecma)',
      'Cell therapy manufacturing complexity — GxP systems needs',
      'Embedded AI in Veeva platform — AI governance immediate need',
      'Large clinical trial portfolio — CRO oversight fit',
      'Enterprise Veeva customer — managed services opportunity',
      'Active regulatory submissions — compliance documentation surge',
    ],
    gtmPillars: ['Embedded AI Adoption', 'CRO Oversight', 'Veeva Managed Services', 'GxP Managed Services'],
    entryPoint: 'Platform AI assessment / cell therapy manufacturing QA',
    estimatedDealSize: '$400K - $1M',
    estimatedMargin: '45-52%',
    urgency: 'Q1 2026',
    news: 'Cell therapy commercial expansion, platform AI adoption',
  },
  {
    name: 'Beam Therapeutics',
    region: 'Genetown',
    totalScore: 84,
    tier: 'Gold',
    scores: { funding: 15, timing: 18, gtmFit: 18, expansion: 17, competition: 16 },
    rationale: [
      'Base editing pioneer — novel modality, complex regulatory path',
      'Cambridge MA headquarters — core Genetown territory',
      'Clinical-stage programs advancing — GxP infrastructure needs growing',
      'AI/ML integrated into base editing platform — AI governance fit',
      'Recently went public — building compliance infrastructure',
      'Manufacturing scale-up planned — GxP managed services need',
    ],
    gtmPillars: ['AI Governance', 'GxP Managed Services', 'Operating Model', 'CRO Oversight'],
    entryPoint: 'AI governance for base editing platform / GxP systems assessment',
    estimatedDealSize: '$250K - $600K',
    estimatedMargin: '48-55%',
    urgency: 'Q1 2026',
    news: 'Base editing clinical programs advancing, manufacturing scale-up',
  },
  {
    name: 'Novo Nordisk',
    region: 'NJ Pharma',
    totalScore: 82,
    tier: 'Gold',
    scores: { funding: 16, timing: 16, gtmFit: 17, expansion: 17, competition: 16 },
    rationale: [
      'GLP-1 leader (Ozempic/Wegovy) — massive manufacturing expansion',
      'NJ operations presence — NJ Pharma corridor territory',
      'Unprecedented commercial scale-up — compliance systems at capacity',
      'ServiceNow enterprise deployment — ProcessX natural fit',
      'Multi-site manufacturing compliance needs',
      'Rapidly growing headcount — staffing + quality consulting demand',
    ],
    gtmPillars: ['ProcessX', 'GxP Managed Services', 'Data Integration', 'Operating Model'],
    entryPoint: 'ProcessX ServiceNow pilot / manufacturing compliance assessment',
    estimatedDealSize: '$400K - $1M',
    estimatedMargin: '42-50%',
    urgency: 'Q1 2026',
    news: 'GLP-1 manufacturing expansion, NJ site growth',
  },
  {
    name: 'AstraZeneca',
    region: 'Mid-Atlantic',
    totalScore: 80,
    tier: 'Silver',
    scores: { funding: 16, timing: 15, gtmFit: 16, expansion: 17, competition: 16 },
    rationale: [
      'Major Mid-Atlantic pharma presence — Gaithersburg/DC area',
      'Oncology and rare disease focus — complex clinical programs',
      'Active clinical pipeline — CRO oversight and eTMF needs',
      'Large Veeva deployment — managed services opportunity',
      'AI/ML in drug discovery — governance needs',
      'Enterprise scale — multi-year engagement potential',
    ],
    gtmPillars: ['CRO Oversight', 'eTMF 2027', 'Veeva Managed Services', 'AI Governance'],
    entryPoint: 'CRO oversight assessment / eTMF readiness review',
    estimatedDealSize: '$300K - $800K',
    estimatedMargin: '42-50%',
    urgency: 'Q2 2026',
    news: 'Oncology pipeline expansion, Gaithersburg campus growth',
  },
  {
    name: 'IQVIA',
    region: 'Research Triangle',
    totalScore: 79,
    tier: 'Silver',
    scores: { funding: 17, timing: 14, gtmFit: 17, expansion: 16, competition: 15 },
    rationale: [
      'World\'s largest CRO — Durham NC headquarters, Research Triangle anchor',
      'AI/data analytics leader — AI governance natural fit',
      'Technology + service company — Domain AI opportunities',
      'Massive data platform — data integration and governance needs',
      'Greenfield territory — first-mover advantage in Research Triangle',
      'High-profile, may have existing vendor relationships',
    ],
    gtmPillars: ['AI Governance', 'Domain AI', 'Data Integration', 'TPRM'],
    entryPoint: 'AI governance assessment / data platform validation',
    estimatedDealSize: '$300K - $800K',
    estimatedMargin: '45-52%',
    urgency: 'Q2 2026',
    news: 'AI analytics platform expansion, Research Triangle anchor',
  },
  {
    name: 'GSK',
    region: 'Mid-Atlantic',
    totalScore: 75,
    tier: 'Silver',
    scores: { funding: 18, timing: 12, gtmFit: 16, expansion: 15, competition: 14 },
    rationale: [
      'Major Mid-Atlantic pharma — Philadelphia area operations',
      'Vaccines and specialty pharma focus — complex manufacturing',
      'Large enterprise IT footprint — ServiceNow/ProcessX opportunity',
      'Active clinical programs — CRO oversight needs',
      'Veeva customer — managed services potential',
      'Competitive landscape — established vendor relationships to navigate',
    ],
    gtmPillars: ['ProcessX', 'CRO Oversight', 'GxP Managed Services'],
    entryPoint: 'ProcessX pilot / GxP managed services assessment',
    estimatedDealSize: '$300K - $800K',
    estimatedMargin: '40-48%',
    urgency: 'Monitor',
    news: 'Vaccines expansion, specialty pharma growth',
  },
];

const scoringCriteria = [
  { name: 'Funding & Runway', weight: '20%', description: 'Recent funding, runway, ability to invest in services' },
  { name: 'Timing Signals', weight: '20%', description: 'New leadership, clinical milestones, regulatory deadlines, IPO prep' },
  { name: 'GTM Fit', weight: '20%', description: 'Alignment with USDM service pillars and delivery capabilities' },
  { name: 'Expansion Potential', weight: '20%', description: 'Multi-year engagement potential, cross-sell opportunities' },
  { name: 'Competitive Position', weight: '20%', description: 'Incumbent advantage, relationship access, win probability' },
];

const tierColors = {
  Platinum: { bg: 'bg-gradient-to-br from-slate-300 to-slate-400', text: 'text-slate-900', border: 'border-slate-300' },
  Gold: { bg: 'bg-gradient-to-br from-yellow-500 to-amber-600', text: 'text-slate-900', border: 'border-yellow-500' },
  Silver: { bg: 'bg-gradient-to-br from-slate-400 to-slate-500', text: 'text-slate-900', border: 'border-slate-400' },
};

const urgencyColors = {
  'Immediate': 'bg-red-500 text-white',
  'Q1 2026': 'bg-orange-500 text-white',
  'Q2 2026': 'bg-yellow-500 text-slate-900',
  'Monitor': 'bg-slate-500 text-white',
};

export default function AccountRationale() {
  const platinumAccounts = topAccounts.filter(a => a.tier === 'Platinum');
  const goldAccounts = topAccounts.filter(a => a.tier === 'Gold');
  const silverAccounts = topAccounts.filter(a => a.tier === 'Silver');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">💎 Account Value & Rationale</h1>
          <p className="text-xl text-slate-400">Strategic prioritization of Eastern Region targets</p>
        </div>

        {/* Scoring Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Scoring Methodology</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">Each account is scored 0-100 based on five weighted criteria:</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {scoringCriteria.map((criteria, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">{criteria.name}</span>
                    <span className="text-cyan-400 font-bold">{criteria.weight}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{criteria.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColors.Platinum.bg} ${tierColors.Platinum.text}`}>Platinum</span>
                <span className="text-slate-400 text-sm">90-100</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColors.Gold.bg} ${tierColors.Gold.text}`}>Gold</span>
                <span className="text-slate-400 text-sm">80-89</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColors.Silver.bg} ${tierColors.Silver.text}`}>Silver</span>
                <span className="text-slate-400 text-sm">70-79</span>
              </div>
            </div>
          </div>
        </section>

        {/* Platinum Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors.Platinum.bg} ${tierColors.Platinum.text}`}>Platinum</span>
            Highest Value Accounts
          </h2>
          <div className="space-y-6">
            {platinumAccounts.map((account, idx) => (
              <AccountCard key={idx} account={account} />
            ))}
          </div>
        </section>

        {/* Gold Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors.Gold.bg} ${tierColors.Gold.text}`}>Gold</span>
            High Value Accounts
          </h2>
          <div className="space-y-6">
            {goldAccounts.map((account, idx) => (
              <AccountCard key={idx} account={account} />
            ))}
          </div>
        </section>

        {/* Silver Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors.Silver.bg} ${tierColors.Silver.text}`}>Silver</span>
            Developing Opportunities
          </h2>
          <div className="space-y-6">
            {silverAccounts.map((account, idx) => (
              <AccountCard key={idx} account={account} />
            ))}
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-semibold">Account</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Score</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Urgency</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Est. Deal Size</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Est. Margin</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Entry Point</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {topAccounts.map((account, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-medium text-white">{account.name}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${tierColors[account.tier].bg} ${tierColors[account.tier].text}`}>
                        {account.totalScore}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${urgencyColors[account.urgency]}`}>
                        {account.urgency}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-green-400">{account.estimatedDealSize}</td>
                    <td className="py-3 px-4 text-cyan-400">{account.estimatedMargin}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{account.entryPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/gtm-strategy" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View GTM Strategy →
          </Link>
          <Link href="/targets" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← All Targets
          </Link>
        </div>
      </main>
    </div>
  );
}

function AccountCard({ account }: { account: AccountScore }) {
  const tierStyle = tierColors[account.tier];
  
  return (
    <div className={`bg-slate-800/50 rounded-xl border ${tierStyle.border}/30 overflow-hidden`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white">{account.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierStyle.bg} ${tierStyle.text}`}>
                {account.totalScore}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${urgencyColors[account.urgency]}`}>
                {account.urgency}
              </span>
            </div>
            <p className="text-slate-400">{account.region}</p>
          </div>
          <div className="text-right">
            <p className="text-green-400 font-bold">{account.estimatedDealSize}</p>
            <p className="text-slate-400 text-sm">{account.estimatedMargin} GP</p>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {Object.entries(account.scores).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xs text-slate-500 capitalize mb-1">{key}</div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 rounded-full" 
                  style={{ width: `${value * 5}%` }}
                />
              </div>
              <div className="text-xs text-slate-400 mt-1">{value}/20</div>
            </div>
          ))}
        </div>

        {/* News Banner */}
        <div className="bg-slate-700/50 rounded-lg px-4 py-2 mb-4">
          <span className="text-cyan-400 text-sm font-medium">📰 </span>
          <span className="text-slate-300 text-sm">{account.news}</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rationale */}
          <div>
            <h4 className="text-slate-400 text-sm font-semibold mb-2">Why This Account</h4>
            <ul className="space-y-1">
              {account.rationale.map((reason, idx) => (
                <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GTM & Entry */}
          <div>
            <h4 className="text-slate-400 text-sm font-semibold mb-2">GTM Alignment</h4>
            <div className="flex flex-wrap gap-1 mb-4">
              {account.gtmPillars.map((pillar, idx) => (
                <span key={idx} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">
                  {pillar}
                </span>
              ))}
            </div>
            
            <h4 className="text-slate-400 text-sm font-semibold mb-2">Recommended Entry Point</h4>
            <p className="text-white text-sm bg-cyan-900/30 border border-cyan-700/30 rounded-lg px-3 py-2">
              {account.entryPoint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

