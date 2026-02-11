'use client';

import Link from 'next/link';

// Boston/Genetown accounts from Finance MCP get_customer_ltv (Feb 2026)
// Filtered for accounts with Boston, Cambridge, MA addresses or known Genetown companies
const genetownAccounts = [
  { name: 'Takeda Pharmaceuticals', ltv: 1220000, rev2025: 702000, rev2024: 373000, rev2023: 145000, gp: 14.5, yoy: 88.2, tier: 'Enterprise', trend: 'up' },
  { name: 'Harmony Biosciences', ltv: 400000, rev2025: 127000, rev2024: 124000, rev2023: 149000, gp: 81.6, yoy: 2.5, tier: 'Strategic', trend: 'stable' },
  { name: 'Alnylam Pharmaceuticals', ltv: 251000, rev2025: 110000, rev2024: 101000, rev2023: 40000, gp: 71.5, yoy: 8.9, tier: 'Strategic', trend: 'up' },
  { name: 'Astellas Gene Therapies', ltv: 261000, rev2025: 93000, rev2024: 83000, rev2023: 85000, gp: 40.2, yoy: 12.3, tier: 'Strategic', trend: 'up' },
  { name: 'Ironwood Pharmaceuticals', ltv: 199000, rev2025: 102000, rev2024: 53000, rev2023: 44000, gp: 79.1, yoy: 93.9, tier: 'Strategic', trend: 'up' },
  { name: 'Moderna', ltv: 74000, rev2025: 37000, rev2024: 37000, rev2023: 0, gp: 92.8, yoy: 0.5, tier: 'Strategic', trend: 'stable' },
  { name: 'Intellia Therapeutics', ltv: 127000, rev2025: 37000, rev2024: 37000, rev2023: 53000, gp: 96.6, yoy: -0.1, tier: 'Standard', trend: 'stable' },
  { name: 'Alexion Pharmaceuticals', ltv: 99000, rev2025: 34000, rev2024: 33500, rev2023: 31500, gp: 100, yoy: 1.4, tier: 'Standard', trend: 'stable' },
  { name: 'Disc Medicine', ltv: 53700, rev2025: 16600, rev2024: 29100, rev2023: 8000, gp: 88.5, yoy: -42.7, tier: 'SMB', trend: 'down' },
  { name: 'Bioatla', ltv: 35500, rev2025: 8000, rev2024: 20700, rev2023: 6800, gp: 87.4, yoy: -61.4, tier: 'SMB', trend: 'down' },
  { name: 'Karuna Therapeutics', ltv: 47800, rev2025: 1200, rev2024: 26000, rev2023: 20500, gp: 94.1, yoy: -95.3, tier: 'SMB', trend: 'down' },
  { name: 'Lyra Therapeutics', ltv: 28600, rev2025: 9000, rev2024: 9000, rev2023: 10600, gp: 95.5, yoy: 0, tier: 'SMB', trend: 'stable' },
  { name: 'Ipsen Pharma', ltv: 10000, rev2025: 0, rev2024: 2400, rev2023: 7500, gp: 96.7, yoy: -100, tier: 'SMB', trend: 'down' },
  { name: 'C4 Therapeutics', ltv: 42500, rev2025: 0, rev2024: 0, rev2023: 42500, gp: 52.0, yoy: -100, tier: 'SMB', trend: 'churned' },
  { name: 'Landmark Bio', ltv: 40500, rev2025: 0, rev2024: 0, rev2023: 40500, gp: 40.0, yoy: -100, tier: 'SMB', trend: 'churned' },
  { name: 'Kyverna Therapeutics', ltv: 23000, rev2025: 16900, rev2024: 6100, rev2023: 0, gp: 99.6, yoy: 175.6, tier: 'SMB', trend: 'up' },
  { name: 'Encoded Therapeutics', ltv: 30000, rev2025: 0, rev2024: 0, rev2023: 30000, gp: 63.2, yoy: -100, tier: 'SMB', trend: 'churned' },
  { name: 'Amylyx Pharmaceuticals', ltv: 8100, rev2025: 0, rev2024: 1100, rev2023: 7000, gp: 95.1, yoy: -100, tier: 'SMB', trend: 'churned' },
];

// Calculate totals
const totals = genetownAccounts.reduce((acc, a) => ({
  ltv: acc.ltv + a.ltv,
  rev2025: acc.rev2025 + a.rev2025,
  rev2024: acc.rev2024 + a.rev2024,
  rev2023: acc.rev2023 + a.rev2023,
}), { ltv: 0, rev2025: 0, rev2024: 0, rev2023: 0 });

const weightedGP = genetownAccounts.reduce((sum, a) => sum + (a.gp * a.rev2025), 0) / totals.rev2025;
const yoyGrowth = ((totals.rev2025 - totals.rev2024) / totals.rev2024 * 100);

export default function AccountHistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Genetown Account History</h1>
        <p className="text-emerald-400 text-xl mb-8">3-Year Revenue & GP Analysis | Finance MCP Data</p>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <StatCard title="Total LTV" value={`$${(totals.ltv / 1000000).toFixed(2)}M`} subtitle="Lifetime value" />
          <StatCard title="2025 Revenue" value={`$${(totals.rev2025 / 1000).toFixed(0)}K`} subtitle="YTD" highlight />
          <StatCard title="2024 Revenue" value={`$${(totals.rev2024 / 1000).toFixed(0)}K`} subtitle="Full year" />
          <StatCard title="2023 Revenue" value={`$${(totals.rev2023 / 1000).toFixed(0)}K`} subtitle="Full year" />
          <StatCard title="YoY Growth" value={`+${yoyGrowth.toFixed(1)}%`} subtitle="2024 → 2025" highlight />
        </div>

        {/* Margin Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-700/50">
            <h3 className="text-lg font-semibold text-emerald-400 mb-3">🏆 High-Margin Stars (70%+ GP)</h3>
            <p className="text-slate-300 mb-4">Managed services model delivers outstanding profitability</p>
            <div className="space-y-2">
              {genetownAccounts.filter(a => a.gp >= 70 && a.rev2025 > 0).sort((a, b) => b.gp - a.gp).slice(0, 8).map(a => (
                <div key={a.name} className="flex justify-between text-sm">
                  <span className="text-white">{a.name}</span>
                  <span className="text-emerald-400 font-mono">{a.gp.toFixed(1)}% GP</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Margin Recovery Needed</h3>
            <p className="text-slate-300 mb-4">T&M staffing drags blended margin down</p>
            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Takeda Pharmaceuticals</span>
                  <span className="text-red-400 font-mono">14.5% GP</span>
                </div>
                <p className="text-slate-400 text-sm">$702K revenue but commodity T&M staffing model. Converting to managed services = +$179K additional profit.</p>
                <div className="mt-2 flex gap-2">
                  <span className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">Priority Fix</span>
                  <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded">AI Governance Upsell</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Account Table */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">Complete Account History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium">Tier</th>
                  <th className="py-3 text-slate-400 font-medium text-right">LTV</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2025</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2024</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2023</th>
                  <th className="py-3 text-slate-400 font-medium text-right">GP%</th>
                  <th className="py-3 text-slate-400 font-medium text-right">YoY</th>
                  <th className="py-3 text-slate-400 font-medium text-center">Trend</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {genetownAccounts.sort((a, b) => b.rev2025 - a.rev2025).map(account => (
                  <tr key={account.name} className="border-b border-slate-700 hover:bg-slate-700/30">
                    <td className="py-3 font-medium text-white">{account.name}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        account.tier === 'Enterprise' ? 'bg-purple-900/30 text-purple-400 border border-purple-700/30' :
                        account.tier === 'Strategic' ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' :
                        'bg-slate-700 text-slate-400 border border-slate-600'
                      }`}>{account.tier}</span>
                    </td>
                    <td className="py-3 text-right font-mono">${(account.ltv / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right font-mono">${(account.rev2025 / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right font-mono text-slate-400">${(account.rev2024 / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right font-mono text-slate-500">${(account.rev2023 / 1000).toFixed(0)}K</td>
                    <td className={`py-3 text-right font-mono ${account.gp >= 70 ? 'text-emerald-400' : account.gp < 30 ? 'text-red-400' : 'text-yellow-400'}`}>
                      {account.gp.toFixed(1)}%
                    </td>
                    <td className={`py-3 text-right font-mono ${account.yoy >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {account.yoy >= 0 ? '+' : ''}{account.yoy.toFixed(1)}%
                    </td>
                    <td className="py-3 text-center">
                      {account.trend === 'up' && <span className="text-emerald-400">📈</span>}
                      {account.trend === 'stable' && <span className="text-yellow-400">➡️</span>}
                      {account.trend === 'down' && <span className="text-red-400">📉</span>}
                      {account.trend === 'churned' && <span className="text-slate-500">⚠️</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700 bg-emerald-900/20">
                  <td className="py-3 font-bold text-white">TOTAL ({genetownAccounts.length} accounts)</td>
                  <td className="py-3"></td>
                  <td className="py-3 text-right font-bold text-white font-mono">${(totals.ltv / 1000000).toFixed(2)}M</td>
                  <td className="py-3 text-right font-bold text-emerald-400 font-mono">${(totals.rev2025 / 1000).toFixed(0)}K</td>
                  <td className="py-3 text-right font-bold text-white font-mono">${(totals.rev2024 / 1000).toFixed(0)}K</td>
                  <td className="py-3 text-right font-bold text-slate-400 font-mono">${(totals.rev2023 / 1000).toFixed(0)}K</td>
                  <td className="py-3 text-right font-bold text-emerald-400 font-mono">{weightedGP.toFixed(1)}%</td>
                  <td className="py-3 text-right font-bold text-emerald-400 font-mono">+{yoyGrowth.toFixed(1)}%</td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4">Source: Finance MCP get_customer_ltv | Generated Feb 2026 | Filtered for Boston/Cambridge accounts</p>
        </section>

        {/* Year-over-Year Chart Placeholder */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Revenue Trend Analysis</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm">2023</p>
              <p className="text-2xl font-bold text-slate-300">${(totals.rev2023 / 1000).toFixed(0)}K</p>
              <p className="text-slate-500 text-xs">Base year</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm">2024</p>
              <p className="text-2xl font-bold text-white">${(totals.rev2024 / 1000).toFixed(0)}K</p>
              <p className="text-emerald-400 text-xs">+{((totals.rev2024 - totals.rev2023) / totals.rev2023 * 100).toFixed(1)}% YoY</p>
            </div>
            <div className="bg-emerald-900/30 rounded-lg p-4 text-center border border-emerald-700/50">
              <p className="text-emerald-400 text-sm">2025 YTD</p>
              <p className="text-2xl font-bold text-emerald-400">${(totals.rev2025 / 1000).toFixed(0)}K</p>
              <p className="text-emerald-300 text-xs">+{yoyGrowth.toFixed(1)}% YoY</p>
            </div>
          </div>
          <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-semibold">💡 Growth Insight</p>
            <p className="text-slate-300 text-sm mt-1">
              Genetown has grown from ${(totals.rev2023 / 1000000).toFixed(2)}M → ${(totals.rev2025 / 1000000).toFixed(2)}M in 2 years (+{((totals.rev2025 - totals.rev2023) / totals.rev2023 * 100).toFixed(0)}%). 
              Takeda accounts for {((702000 / totals.rev2025) * 100).toFixed(0)}% of territory revenue but drags blended GP from ~70% to {weightedGP.toFixed(0)}%.
            </p>
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
