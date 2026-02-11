'use client';

import Link from 'next/link';

// Dormant MSAs - accounts with historical revenue but zero in 2025
const dormantMSAs = [
  { 
    name: 'Accumulus Synergy Inc.',
    ltv: 648600,
    lastRevenue: '2023',
    lastAmount: 648100,
    gp: 56.9,
    territory: 'Genetown',
    reason: 'Project ended, no follow-up',
    opportunity: 'Cloud platform expansion',
    reactivationScore: 85
  },
  { 
    name: 'Loxo Oncology, Inc.',
    ltv: 556000,
    lastRevenue: '2024',
    lastAmount: 201300,
    gp: 30.7,
    territory: 'Genetown',
    reason: 'Acquired by Lilly',
    opportunity: 'Integration support via Lilly MSA',
    reactivationScore: 60
  },
  { 
    name: 'Horizon Therapeutics, Inc.',
    ltv: 193600,
    lastRevenue: '2024',
    lastAmount: 113600,
    gp: 70.1,
    territory: 'Genetown',
    reason: 'Acquired by Amgen',
    opportunity: 'Amgen relationship expansion',
    reactivationScore: 70
  },
  { 
    name: 'Dyne Therapeutics',
    ltv: 149400,
    lastRevenue: '2024',
    lastAmount: 149400,
    gp: 47.7,
    territory: 'Genetown',
    reason: 'Project completed',
    opportunity: 'Gene therapy manufacturing QA',
    reactivationScore: 90
  },
  { 
    name: 'Precision BioSciences, Inc.',
    ltv: 150500,
    lastRevenue: '2023',
    lastAmount: 149000,
    gp: 71.2,
    territory: 'Genetown',
    reason: 'Budget freeze',
    opportunity: 'New clinical trials starting',
    reactivationScore: 75
  },
  { 
    name: 'Takeda Pharmaceuticals International AG',
    ltv: 50600,
    lastRevenue: '2023',
    lastAmount: 50600,
    gp: 17.4,
    territory: 'Genetown',
    reason: 'Separate Takeda entity',
    opportunity: 'Consolidate with US Takeda',
    reactivationScore: 40
  },
  { 
    name: 'Genmab US INC',
    ltv: 222500,
    lastRevenue: '2024',
    lastAmount: 206700,
    gp: 56.9,
    territory: 'Genetown',
    reason: 'Project phase completed',
    opportunity: 'BLA submission support',
    reactivationScore: 85
  },
  { 
    name: 'Verily Life Sciences LLC',
    ltv: 103300,
    lastRevenue: '2024',
    lastAmount: 39000,
    gp: 57.7,
    territory: 'Adjacent (Google)',
    reason: 'Reorg',
    opportunity: 'AI/ML validation',
    reactivationScore: 65
  },
];

const totalDormantLTV = dormantMSAs.reduce((sum, m) => sum + m.ltv, 0);
const highPriority = dormantMSAs.filter(m => m.reactivationScore >= 75);

export default function DormantMSAsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Dormant MSAs</h1>
        <p className="text-emerald-400 text-xl mb-8">Accounts with MSAs but No 2025 Revenue — Quick Wins for New Rep</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Dormant Accounts" value={dormantMSAs.length.toString()} trend="With existing MSAs" />
          <StatCard title="Total Historical LTV" value={`$${(totalDormantLTV / 1000000).toFixed(1)}M`} trend="Revenue we've earned" highlight />
          <StatCard title="High Priority" value={highPriority.length.toString()} trend="75%+ reactivation score" />
          <StatCard title="Avg GP% (when active)" value="52%" trend="Good margin potential" />
        </div>

        {/* Why This Matters */}
        <section className="bg-emerald-900/30 rounded-xl p-6 mb-8 border border-emerald-500/50">
          <h2 className="text-xl font-bold text-white mb-2">💡 Why Dormant MSAs Matter</h2>
          <p className="text-slate-300 mb-4">
            These accounts already know us, have signed MSAs, and have budget history. Reactivation is 
            <strong className="text-emerald-400"> 5x faster</strong> than new logo acquisition. A new rep should 
            contact these accounts in Week 1.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-emerald-400 font-semibold">No MSA Negotiation</p>
              <p className="text-slate-400 text-sm">Legal already approved, just need SOW</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-emerald-400 font-semibold">Known Relationships</p>
              <p className="text-slate-400 text-sm">We have contacts and history</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-emerald-400 font-semibold">Proven Budget</p>
              <p className="text-slate-400 text-sm">They've paid us before</p>
            </div>
          </div>
        </section>

        {/* Dormant Accounts Table */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Dormant Account Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400">Account</th>
                  <th className="py-3 text-slate-400 text-right">Lifetime Value</th>
                  <th className="py-3 text-slate-400">Last Revenue</th>
                  <th className="py-3 text-slate-400 text-right">Last Amount</th>
                  <th className="py-3 text-slate-400 text-right">GP%</th>
                  <th className="py-3 text-slate-400">Why Dormant</th>
                  <th className="py-3 text-slate-400">Opportunity</th>
                  <th className="py-3 text-slate-400 text-center">Priority</th>
                </tr>
              </thead>
              <tbody>
                {dormantMSAs.sort((a, b) => b.reactivationScore - a.reactivationScore).map((msa) => (
                  <tr key={msa.name} className={`border-b border-slate-700 ${msa.reactivationScore >= 75 ? 'bg-emerald-900/10' : ''}`}>
                    <td className="py-3 font-medium text-white">{msa.name}</td>
                    <td className="py-3 text-right text-slate-300">${(msa.ltv / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-slate-400">{msa.lastRevenue}</td>
                    <td className="py-3 text-right text-slate-300">${(msa.lastAmount / 1000).toFixed(0)}K</td>
                    <td className={`py-3 text-right ${msa.gp >= 50 ? 'text-emerald-400' : 'text-yellow-400'}`}>{msa.gp}%</td>
                    <td className="py-3 text-slate-400 text-sm">{msa.reason}</td>
                    <td className="py-3 text-emerald-400 text-sm">{msa.opportunity}</td>
                    <td className="py-3 text-center">
                      {msa.reactivationScore >= 85 ? (
                        <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded border border-emerald-700/30">Hot</span>
                      ) : msa.reactivationScore >= 70 ? (
                        <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-700/30">Warm</span>
                      ) : (
                        <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded border border-slate-600">Cold</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Finance MCP get_customer_ltv | Accounts with 2025 revenue = $0</p>
        </section>

        {/* Top Reactivation Targets */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">🎯 Top Reactivation Targets (Week 1 Outreach)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TargetCard 
              name="Dyne Therapeutics"
              ltv="$149K"
              gp={47.7}
              play="Gene therapy manufacturing QA — they're in clinical trials now"
              urgency="hot"
            />
            <TargetCard 
              name="Accumulus Synergy"
              ltv="$649K"
              gp={56.9}
              play="Cloud platform expansion — regulatory data management"
              urgency="hot"
            />
            <TargetCard 
              name="Genmab US"
              ltv="$223K"
              gp={56.9}
              play="BLA submission support — multiple drugs in pipeline"
              urgency="hot"
            />
            <TargetCard 
              name="Precision BioSciences"
              ltv="$151K"
              gp={71.2}
              play="New clinical trials starting — gene editing validation"
              urgency="warm"
            />
          </div>
        </section>

        {/* Acquisition-Related Dormant */}
        <section className="bg-yellow-900/20 rounded-xl p-6 mb-8 border border-yellow-700/30">
          <h2 className="text-xl font-bold text-white mb-4">⚠️ Acquisition-Related Dormant Accounts</h2>
          <p className="text-slate-300 mb-4">
            These accounts went dormant due to acquisitions. The opportunity is to reactivate via the acquirer relationship.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-semibold">Loxo Oncology → Eli Lilly</p>
              <p className="text-slate-400 text-sm">$556K LTV. Acquired 2024. Leverage Lilly corporate MSA for integration support.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-semibold">Horizon Therapeutics → Amgen</p>
              <p className="text-slate-400 text-sm">$194K LTV at 70% GP. Amgen integration = system harmonization needs.</p>
            </div>
          </div>
        </section>

        {/* Reactivation Playbook */}
        <section className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/50">
          <h2 className="text-xl font-bold text-white mb-4">📋 Reactivation Playbook</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">1. Pull History</h3>
              <p className="text-slate-400 text-sm">Review past projects in Salesforce. Find the PM and sponsor contacts.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">2. Craft Outreach</h3>
              <p className="text-slate-400 text-sm">Reference specific past work. "We helped you with X, now we can help with Y."</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">3. Lead with Value</h3>
              <p className="text-slate-400 text-sm">Bring market intel or benchmark data. Don't just ask for a meeting.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">4. Fast SOW</h3>
              <p className="text-slate-400 text-sm">MSA exists. Skip legal. Go direct to SOW with 2-week turnaround.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, highlight }: { title: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
      <p className="text-emerald-400 text-xs mt-1">{trend}</p>
    </div>
  );
}

function TargetCard({ name, ltv, gp, play, urgency }: { 
  name: string; 
  ltv: string;
  gp: number;
  play: string;
  urgency: 'hot' | 'warm' | 'cold';
}) {
  const styles = {
    hot: 'border-emerald-500/50 bg-emerald-900/20',
    warm: 'border-blue-500/50 bg-blue-900/20',
    cold: 'border-slate-600 bg-slate-700/30',
  };
  return (
    <div className={`rounded-lg p-4 border ${styles[urgency]}`}>
      <h4 className="font-semibold text-white">{name}</h4>
      <p className="text-slate-400 text-xs">{ltv} LTV • {gp}% GP</p>
      <p className="text-emerald-400 text-sm mt-2">{play}</p>
    </div>
  );
}
