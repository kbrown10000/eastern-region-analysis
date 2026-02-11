'use client';

import Link from 'next/link';

// Recent funding rounds in Boston biotech (from Fierce Biotech Fundraising Tracker 2025-2026)
const recentFunding = [
  { company: 'AIRNA', amount: 155, round: 'Series B', date: 'Apr 2025', lead: 'Venrock, Forbion Growth', focus: 'RNA editing' },
  { company: 'Kriya Therapeutics', amount: 151, round: 'Series B', date: '2025', lead: 'J&J Innovation (JLABS)', focus: 'Gene therapy manufacturing' },
  { company: 'Senti Biosciences', amount: 105, round: 'Series C', date: '2025', lead: 'Northpond Ventures', focus: 'Gene circuit therapeutics' },
  { company: 'Vedanta Biosciences', amount: 106.5, round: 'Venture', date: '2025', lead: 'AXA IM Alts, AMR Action Fund', focus: 'Oral microbiome therapies' },
  { company: 'Actithera', amount: 75.5, round: 'Series A', date: 'Jul 2025', lead: 'M Ventures, Hadean', focus: 'FAP-targeting oncology' },
  { company: 'QuantX Bio', amount: 85, round: 'Series B', date: 'Feb 2026', lead: 'Undisclosed', focus: 'Quantum bio' },
  { company: 'Angitia', amount: 130, round: 'Venture', date: 'Feb 2026', lead: 'Undisclosed', focus: 'Gene therapy' },
];

// Key M&A and strategic events
const strategicEvents = [
  { event: 'Bluebird Bio acquired by Genetix Biotherapeutics', date: 'Late 2025', impact: 'Gene therapy consolidation continues' },
  { event: 'Vertex + Bluebird CMS payment models', date: '2025', impact: 'Novel reimbursement for gene therapy' },
  { event: 'Casgevy (Vertex/CRISPR) FDA approval', date: 'Dec 2023', impact: 'First CRISPR therapy, manufacturing ramp' },
  { event: 'Elevidys (Sarepta) commercial launch', date: '2024', impact: 'Gene therapy for DMD, $250M+ quarterly' },
  { event: 'Biogen restructuring', date: '2025-2026', impact: 'Cost cuts creating consulting opportunities' },
];

// Competitive landscape
const competitors = [
  { 
    name: 'Veeva Systems', 
    strength: 'Vault platform dominance, regulatory docs',
    weakness: 'Expensive, rigid, limited AI capabilities',
    opportunity: 'Position USDM as Veeva implementation partner + AI layer',
    share: 'Large',
  },
  { 
    name: 'Cognizant Life Sciences', 
    strength: 'Scale, CSV capacity, offshore model',
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
  { 
    name: 'NSF International', 
    strength: 'Quality systems, auditing expertise',
    weakness: 'Less technology-focused',
    opportunity: 'Partner on quality + differentiate on cloud/AI',
    share: 'Small',
  },
  { 
    name: 'Lachman Consulting', 
    strength: 'Deep regulatory/CMC expertise',
    weakness: 'Niche, capacity constraints',
    opportunity: 'Complement with validation services',
    share: 'Small',
  },
];

// Industry trends
const trends = [
  { trend: 'Gene Therapy Manufacturing', impact: 'High', description: 'ATMP compliance gaps driving QA demand. Manufacturing scale-up is bottleneck.' },
  { trend: 'AI/ML in Drug Discovery', impact: 'High', description: 'Rapid adoption creating governance vacuum. Model validation and 21 CFR Part 11 compliance needed.' },
  { trend: 'Cloud GxP', impact: 'High', description: 'Multi-cloud adoption accelerating. AWS, Azure, GCP all competing for life sciences workloads.' },
  { trend: 'Cell Therapy Commercial', impact: 'Medium', description: 'CAR-T therapies scaling. Supply chain and manufacturing QA challenges.' },
  { trend: 'Biotech Restructuring', impact: 'Medium', description: '2023-2024 layoffs freeing talent. Lean operations = more consulting opportunities.' },
  { trend: 'FDA Modernization', impact: 'Medium', description: 'CDER and CBER updating guidance. Real-world evidence and digital endpoints gaining traction.' },
];

export default function MarketIntelPage() {
  const totalFunding = recentFunding.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Genetown Market Intelligence</h1>
        <p className="text-emerald-400 text-xl mb-8">Funding Rounds • M&A • Competitive Landscape • Trends</p>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Recent Funding" value={`$${(totalFunding / 1000).toFixed(1)}B`} subtitle={`${recentFunding.length} rounds tracked`} highlight />
          <StatCard title="M&A Events" value={strategicEvents.length.toString()} subtitle="Strategic moves" />
          <StatCard title="Competitors" value={competitors.length.toString()} subtitle="Key players" />
          <StatCard title="Market Trends" value={trends.filter(t => t.impact === 'High').length.toString()} subtitle="High-impact trends" />
        </div>

        {/* Recent Funding */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">💰 Recent Funding Rounds ($50M+)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Company</th>
                  <th className="py-3 text-slate-400 font-medium">Amount</th>
                  <th className="py-3 text-slate-400 font-medium">Round</th>
                  <th className="py-3 text-slate-400 font-medium">Date</th>
                  <th className="py-3 text-slate-400 font-medium">Lead Investors</th>
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
                    <td className="py-3 text-slate-400">{funding.lead}</td>
                    <td className="py-3">{funding.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4">Source: Fierce Biotech Fundraising Tracker 2025-2026, Crunchbase</p>
        </section>

        {/* Strategic Events */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">🎯 Strategic Events & M&A</h2>
          <div className="space-y-4">
            {strategicEvents.map((event, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex-shrink-0 w-24 text-slate-400 text-sm">{event.date}</div>
                <div>
                  <p className="text-white font-medium">{event.event}</p>
                  <p className="text-emerald-400 text-sm mt-1">{event.impact}</p>
                </div>
              </div>
            ))}
          </div>
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
                    comp.share === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-slate-700 text-slate-400'
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

        {/* Industry Trends */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">📈 Industry Trends</h2>
          <div className="space-y-4">
            {trends.map((trend, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex-shrink-0">
                  <span className={`text-xs px-2 py-1 rounded font-medium ${
                    trend.impact === 'High' ? 'bg-red-900/50 text-red-400' :
                    'bg-yellow-900/50 text-yellow-400'
                  }`}>{trend.impact}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{trend.trend}</p>
                  <p className="text-slate-400 text-sm mt-1">{trend.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, highlight }: { title: string; value: string; subtitle: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
      <p className="text-slate-500 text-xs mt-1">{subtitle}</p>
    </div>
  );
}
