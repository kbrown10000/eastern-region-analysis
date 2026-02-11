'use client';

import Link from 'next/link';

export default function MarketAnalysis() {
  const regions = [
    {
      name: 'Boston / Cambridge',
      nickname: 'Genetown',
      emoji: '🧬',
      link: '/genetown-deep-dive',
      companies: '1,000+',
      vcFunding: '$7.9B',
      nihFunding: '$4.8B',
      labSpace: '62M sq ft',
      marketSize: '$95B+',
      growth: '12%',
      strengths: ['mRNA/Gene Therapy', 'AI Drug Discovery', 'Rare Disease'],
      keyPlayers: ['Moderna', 'Vertex', 'Biogen', 'Sarepta', 'Alnylam'],
      opportunities: ['AI Governance', 'Cloud Assurance', 'Manufacturing QA'],
      color: 'emerald',
      description: 'The undisputed global capital of biotech. Home to Moderna, Vertex, and 1,000+ life sciences companies clustered around Kendall Square, Seaport, and Longwood Medical Area.',
    },
    {
      name: 'New Jersey Corridor',
      nickname: 'Pharma Alley',
      emoji: '💊',
      link: '/nj-pharma-deep-dive',
      companies: '300+',
      vcFunding: '$1.2B',
      nihFunding: '$890M',
      labSpace: '28M sq ft',
      marketSize: '$85B+',
      growth: '6%',
      strengths: ['Traditional Pharma', 'Manufacturing', 'Commercial Ops'],
      keyPlayers: ['Johnson & Johnson', 'Merck', 'Bristol-Myers Squibb', 'Novo Nordisk'],
      opportunities: ['Digital Transformation', 'AI/ML Validation', 'Managed Services'],
      color: 'blue',
      description: 'The historic heart of American pharma. Big Pharma headquarters along I-95/I-287 with massive manufacturing and R&D facilities.',
    },
    {
      name: 'Research Triangle',
      nickname: 'CDMO Capital',
      emoji: '🔬',
      link: '/research-triangle-deep-dive',
      companies: '150+',
      vcFunding: '$3.2B',
      nihFunding: '$1.1B',
      labSpace: '15M sq ft',
      marketSize: '$25B+',
      growth: '24%',
      strengths: ['CDMO/Manufacturing', 'Clinical Research', 'Cell Therapy Mfg'],
      keyPlayers: ['IQVIA', 'Fujifilm Diosynth', 'PPD/Thermo Fisher', 'Syneos'],
      opportunities: ['Manufacturing QA', 'Tech Transfer', 'Process Validation'],
      color: 'purple',
      description: 'Fastest-growing biotech hub in the East. The go-to destination for CDMO expansion and clinical operations, anchored by Duke, UNC, and NC State.',
    },
    {
      name: 'Mid-Atlantic',
      nickname: 'Regulatory Corridor',
      emoji: '🏛️',
      link: '/mid-atlantic-deep-dive',
      companies: '200+',
      vcFunding: '$1.5B',
      nihFunding: '$3.8B',
      labSpace: '18M sq ft',
      marketSize: '$35B+',
      growth: '8%',
      strengths: ['Regulatory Strategy', 'Vaccines', 'Medical Devices'],
      keyPlayers: ['AstraZeneca', 'GSK', 'Merck KGaA', 'Catalent'],
      opportunities: ['FDA Pre-submission', 'CMC Strategy', 'Vaccine QA'],
      color: 'teal',
      description: 'Strategic proximity to FDA, NIH, and federal health agencies. Vaccine manufacturing renaissance and medical device innovation hub.',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; accent: string }> = {
    emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-700', text: 'text-emerald-400', accent: 'bg-emerald-500' },
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-700', text: 'text-blue-400', accent: 'bg-blue-500' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-700', text: 'text-purple-400', accent: 'bg-purple-500' },
    teal: { bg: 'bg-teal-900/30', border: 'border-teal-700', text: 'text-teal-400', accent: 'bg-teal-500' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Home</Link>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">📊 Eastern Market Analysis</h1>
          <p className="text-xl text-slate-400 mb-4">Four biotech powerhouses. $240B+ combined market. The engine of global life sciences.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-emerald-900/30 px-3 py-1 rounded-full text-emerald-400 border border-emerald-700">
              1,650+ Companies
            </span>
            <span className="bg-blue-900/30 px-3 py-1 rounded-full text-blue-400 border border-blue-700">
              $13.8B VC Funding (2024)
            </span>
            <span className="bg-purple-900/30 px-3 py-1 rounded-full text-purple-400 border border-purple-700">
              $10.6B NIH Funding
            </span>
            <span className="bg-teal-900/30 px-3 py-1 rounded-full text-teal-400 border border-teal-700">
              123M sq ft Lab Space
            </span>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-emerald-400 mb-3">🎯 Why the East Dominates</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Talent Pipeline</h3>
              <p className="text-sm">Harvard, MIT, Johns Hopkins, Duke, UNC — the East has unmatched academic firepower feeding the biotech workforce.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Capital Access</h3>
              <p className="text-sm">Boston alone captured $7.9B in VC (2024). East Coast investors know biotech — they've funded every mRNA breakthrough.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Regulatory Proximity</h3>
              <p className="text-sm">FDA, NIH, and CMS are all within the Mid-Atlantic corridor. No other region has this strategic advantage.</p>
            </div>
          </div>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {regions.map((region) => {
            const colors = colorClasses[region.color];
            return (
              <Link 
                key={region.name} 
                href={region.link}
                className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:bg-opacity-50 transition-all group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl mr-2">{region.emoji}</span>
                    <h3 className="text-2xl font-bold text-white inline">{region.name}</h3>
                    <p className={`${colors.text} text-sm font-medium`}>{region.nickname}</p>
                  </div>
                  <span className={`${colors.text} group-hover:translate-x-1 transition-transform`}>→</span>
                </div>
                
                <p className="text-slate-400 text-sm mb-4">{region.description}</p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{region.companies}</p>
                    <p className="text-xs text-slate-500">Companies</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${colors.text}`}>{region.vcFunding}</p>
                    <p className="text-xs text-slate-500">VC (2024)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{region.marketSize}</p>
                    <p className="text-xs text-slate-500">Market</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${colors.text}`}>{region.growth}</p>
                    <p className="text-xs text-slate-500">Growth</p>
                  </div>
                </div>

                {/* Key Players */}
                <div className="mb-3">
                  <p className="text-xs text-slate-500 mb-1">Key Players</p>
                  <div className="flex flex-wrap gap-1">
                    {region.keyPlayers.map((player) => (
                      <span key={player} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-0.5 rounded">
                        {player}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                <div className="mb-3">
                  <p className="text-xs text-slate-500 mb-1">Market Strengths</p>
                  <div className="flex flex-wrap gap-1">
                    {region.strengths.map((strength) => (
                      <span key={strength} className={`text-xs ${colors.bg} ${colors.text} px-2 py-0.5 rounded border ${colors.border}`}>
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>

                {/* USDM Opportunities */}
                <div>
                  <p className="text-xs text-slate-500 mb-1">USDM Opportunities</p>
                  <div className="flex flex-wrap gap-1">
                    {region.opportunities.map((opp) => (
                      <span key={opp} className="text-xs bg-white/10 text-white px-2 py-0.5 rounded">
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Regional Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Region</th>
                  <th className="py-3 text-slate-400 font-medium">Companies</th>
                  <th className="py-3 text-slate-400 font-medium">VC Funding</th>
                  <th className="py-3 text-slate-400 font-medium">NIH Funding</th>
                  <th className="py-3 text-slate-400 font-medium">Lab Space</th>
                  <th className="py-3 text-slate-400 font-medium">Growth</th>
                  <th className="py-3 text-slate-400 font-medium">Focus</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-emerald-400">🧬 Genetown</td>
                  <td className="py-3">1,000+</td>
                  <td className="py-3 text-emerald-400 font-bold">$7.9B</td>
                  <td className="py-3">$4.8B</td>
                  <td className="py-3">62M sq ft</td>
                  <td className="py-3">12%</td>
                  <td className="py-3">mRNA, Gene Therapy, AI</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-blue-400">💊 NJ Corridor</td>
                  <td className="py-3">300+</td>
                  <td className="py-3">$1.2B</td>
                  <td className="py-3">$890M</td>
                  <td className="py-3">28M sq ft</td>
                  <td className="py-3">6%</td>
                  <td className="py-3">Big Pharma, Manufacturing</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-purple-400">🔬 Research Triangle</td>
                  <td className="py-3">150+</td>
                  <td className="py-3">$3.2B</td>
                  <td className="py-3">$1.1B</td>
                  <td className="py-3">15M sq ft</td>
                  <td className="py-3 text-purple-400 font-bold">24% 🚀</td>
                  <td className="py-3">CDMO, Clinical Ops</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-teal-400">🏛️ Mid-Atlantic</td>
                  <td className="py-3">200+</td>
                  <td className="py-3">$1.5B</td>
                  <td className="py-3 text-teal-400 font-bold">$3.8B</td>
                  <td className="py-3">18M sq ft</td>
                  <td className="py-3">8%</td>
                  <td className="py-3">Regulatory, Vaccines</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700 font-bold">
                  <td className="py-3 text-white">TOTAL EAST</td>
                  <td className="py-3 text-white">1,650+</td>
                  <td className="py-3 text-emerald-400">$13.8B</td>
                  <td className="py-3 text-white">$10.6B</td>
                  <td className="py-3 text-white">123M sq ft</td>
                  <td className="py-3 text-emerald-400">12% avg</td>
                  <td className="py-3 text-white">Full Spectrum</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Strategic Insights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-emerald-900/20 border border-emerald-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">🚀 Fastest Growing: Research Triangle</h3>
            <p className="text-slate-300 mb-4">
              At 24% growth, the Research Triangle is outpacing every other East Coast hub. The CDMO boom 
              (driven by cell/gene therapy manufacturing demand) is creating massive opportunity.
            </p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Fujifilm Diosynth $2B Holly Springs expansion</li>
              <li>• Samsung Biologics entering the market</li>
              <li>• 30% lower operating costs than Boston</li>
            </ul>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">💰 Highest NIH Funding: Mid-Atlantic</h3>
            <p className="text-slate-300 mb-4">
              Proximity to NIH headquarters gives Mid-Atlantic unique access to $3.8B in federal research 
              funding. Johns Hopkins alone captures more NIH grants than entire states.
            </p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• FDA adjacency for regulatory strategy</li>
              <li>• Vaccine manufacturing renaissance</li>
              <li>• Federal health IT opportunities</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Dominate the East?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            The Eastern region represents the largest, most mature life sciences market in the world. 
            With the right strategy, USDM can capture significant share across all four corridors.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/executive-summary" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors">
              View Executive Summary
            </Link>
            <Link href="/targets" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg border border-slate-600 transition-colors">
              See Target Accounts
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>USDM Life Sciences | Eastern Region Strategy 2026</p>
          <p className="text-sm mt-2">Data: MassBio, NCBIO, BIO, PitchBook, NIH Reporter</p>
        </div>
      </footer>
    </div>
  );
}
