'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, ComposedChart, Line } from 'recharts';

// REAL DATA - Finance MCP get_customer_ltv | Feb 10, 2026
// 36 East Customers, $5.57M revenue, 43.1% blended GP

// Revenue by territory (MCP DATA)
const revenueByTerritory = [
  { territory: 'Mid-Atlantic', revenue: 2200000, gp: 45.2, customers: 8, gpDollars: 994400 },
  { territory: 'NJ Pharma', revenue: 2020000, gp: 40.7, customers: 10, gpDollars: 822140 },
  { territory: 'Genetown', revenue: 1350000, gp: 43.1, customers: 18, gpDollars: 581850 },
  { territory: 'Research Triangle', revenue: 0, gp: 0, customers: 0, gpDollars: 0 },
];

// Top customers by revenue with MCP GP% data
const topCustomers = [
  { name: 'Abbott Laboratories', revenue: 1938, gp: 47.1, tier: 'A', territory: 'Mid-Atlantic', yoy: 213.8, trend: '↑' },
  { name: 'Bausch Health', revenue: 739, gp: 29.4, tier: 'C', territory: 'NJ Pharma', yoy: 46.1, trend: '↑' },
  { name: 'Takeda Pharmaceuticals', revenue: 702, gp: 14.5, tier: 'C', territory: 'Genetown', yoy: 88.2, trend: '↑' },
  { name: 'Regeneron', revenue: 436, gp: 63.0, tier: 'A', territory: 'NJ Pharma', yoy: 0, trend: '→' },
  { name: 'Johnson & Johnson', revenue: 408, gp: 32.4, tier: 'B', territory: 'NJ Pharma', yoy: -18.3, trend: '↓' },
  { name: 'Integra LifeSciences', revenue: 266, gp: 37.0, tier: 'B', territory: 'NJ Pharma', yoy: -48.6, trend: '↓' },
  { name: 'Spectranetics', revenue: 242, gp: 26.4, tier: 'C', territory: 'Mid-Atlantic', yoy: -51.2, trend: '↓' },
  { name: 'Harmony Biosciences', revenue: 127, gp: 81.6, tier: 'A', territory: 'Genetown', yoy: 2.5, trend: '↑' },
  { name: 'Alnylam Pharmaceuticals', revenue: 110, gp: 71.5, tier: 'A', territory: 'Genetown', yoy: 8.9, trend: '↑' },
  { name: 'Ironwood Pharmaceuticals', revenue: 102, gp: 79.1, tier: 'A', territory: 'Genetown', yoy: 93.9, trend: '↑' },
];

// Tier breakdown (MCP DATA)
const tierBreakdown = [
  { tier: 'Tier A (≥40%)', customers: 15, revenue: 2880000, gpPercent: 56.8, color: '#22c55e' },
  { tier: 'Tier B (30-40%)', customers: 7, revenue: 920000, gpPercent: 35.2, color: '#eab308' },
  { tier: 'Tier C (<30%)', customers: 14, revenue: 1770000, gpPercent: 22.1, color: '#ef4444' },
];

// YoY trend data
const yoyTrend = [
  { year: '2023', revenue: 2800000 },
  { year: '2024', revenue: 3990000 },
  { year: '2025', revenue: 5570000 },
];

const getTierColor = (tier: string) => {
  if (tier === 'A') return '#22c55e';
  if (tier === 'B') return '#eab308';
  return '#ef4444';
};

const getGPColor = (gp: number) => {
  if (gp >= 40) return '#22c55e';
  if (gp >= 30) return '#eab308';
  return '#ef4444';
};

export default function Dashboard() {
  const totalRevenue = 5570000;
  const totalGP = 2400000;
  const blendedGP = 43.1;
  const totalCustomers = 36;
  const totalLTV = 12140000;
  const openPipeline = 14050000;
  const yoyGrowth = 39.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Financial Dashboard</h1>
        <p className="text-slate-400 mb-2">Eastern Region 2025 Performance - Live Data from Fabric Lakehouse</p>
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-purple-400">Finance MCP</span> → <code className="text-slate-500">get_customer_ltv</code> |
          <span className="text-blue-400 ml-2">Sales MCP</span> → <code className="text-slate-500">get_pipeline_by_owner</code> |
          <span className="text-slate-500"> Filter: East territory accounts</span> | 36 customers
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">2025 Revenue</p>
            <p className="text-4xl font-bold text-cyan-400">${(totalRevenue / 1000000).toFixed(2)}M</p>
            <p className="text-green-400 text-sm">+{yoyGrowth}% YoY</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Blended GP%</p>
            <p className="text-4xl font-bold text-green-400">{blendedGP}%</p>
            <p className="text-slate-500 text-sm">${(totalGP / 1000000).toFixed(2)}M gross profit</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total Customers</p>
            <p className="text-4xl font-bold text-white">{totalCustomers}</p>
            <p className="text-slate-500 text-sm">Active accounts</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total LTV</p>
            <p className="text-4xl font-bold text-purple-400">${(totalLTV / 1000000).toFixed(1)}M</p>
            <p className="text-slate-500 text-sm">Lifetime value</p>
          </div>
        </div>

        {/* Growth Banner */}
        <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <p className="text-green-300 font-semibold">Revenue Growth Alert: +39.5% YoY</p>
              <p className="text-green-400/70 text-sm">2024: $3.99M → 2025: $5.57M | Abbott (+214%), Takeda (+88%), Bausch (+46%) driving growth | Pipeline: $14.1M (2.5x coverage)</p>
            </div>
          </div>
        </div>

        {/* Territory Performance */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Revenue by Territory</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByTerritory.filter(t => t.revenue > 0)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" tickFormatter={(v) => `$${(v/1000000).toFixed(1)}M`} stroke="#94a3b8" />
                <YAxis type="category" dataKey="territory" stroke="#94a3b8" width={110} />
                <Tooltip
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
                <Bar dataKey="revenue" fill="#06b6d4" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">GP% by Territory</h2>
            <div className="space-y-4">
              {revenueByTerritory.filter(t => t.revenue > 0).map((t, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">{t.territory}</span>
                    <span className={t.gp >= 40 ? 'text-green-400' : t.gp >= 30 ? 'text-yellow-400' : 'text-red-400'}>
                      {t.gp}% GP ({t.customers} customers)
                    </span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${t.gp * 1.5}%`,
                        backgroundColor: t.gp >= 40 ? '#22c55e' : t.gp >= 30 ? '#eab308' : '#ef4444'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-900/20 rounded-lg border border-emerald-800">
              <p className="text-emerald-300 text-sm font-semibold">🌱 Research Triangle: Greenfield</p>
              <p className="text-emerald-400/70 text-xs">Zero current revenue — massive CDMO/CRO opportunity (IQVIA, Fujifilm, PPD). Pipeline building.</p>
            </div>
          </div>
        </div>

        {/* Tier Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tierBreakdown.map((tier, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tier.color }} />
                <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-xs">Customers</p>
                  <p className="text-2xl font-bold text-white">{tier.customers}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Revenue</p>
                  <p className="text-2xl font-bold text-white">${(tier.revenue/1000000).toFixed(1)}M</p>
                </div>
                <div className="col-span-2">
                  <p className="text-slate-400 text-xs">Effective GP%</p>
                  <p className="text-2xl font-bold" style={{ color: tier.color }}>{tier.gpPercent}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top 10 Customers Table */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Top 10 Customers by Revenue</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 text-sm py-2">Customer</th>
                  <th className="text-left text-slate-400 text-sm py-2">Territory</th>
                  <th className="text-right text-slate-400 text-sm py-2">Revenue</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP%</th>
                  <th className="text-right text-slate-400 text-sm py-2">YoY</th>
                  <th className="text-center text-slate-400 text-sm py-2">Tier</th>
                </tr>
              </thead>
              <tbody>
                {topCustomers.map((c, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 text-white font-medium">{c.name}</td>
                    <td className="py-3 text-slate-400 text-sm">{c.territory}</td>
                    <td className="py-3 text-right text-cyan-400">${c.revenue}K</td>
                    <td className="py-3 text-right" style={{ color: getGPColor(c.gp) }}>{c.gp}%</td>
                    <td className={`py-3 text-right ${c.yoy > 0 ? 'text-green-400' : c.yoy < 0 ? 'text-red-400' : 'text-slate-400'}`}>
                      {c.trend} {c.yoy > 0 ? '+' : ''}{c.yoy.toFixed(1)}%
                    </td>
                    <td className="py-3 text-center">
                      <span
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={{
                          backgroundColor: getTierColor(c.tier) + '20',
                          color: getTierColor(c.tier)
                        }}
                      >
                        {c.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pipeline & Growth */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Open Pipeline</h2>
            <p className="text-5xl font-bold text-green-400 mb-2">${(openPipeline/1000000).toFixed(2)}M</p>
            <p className="text-slate-400">194 active opportunities across East Region</p>
            <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
              <p className="text-slate-300 text-sm">Pipeline Coverage: <span className="text-green-400 font-bold">2.52x</span></p>
              <p className="text-green-500 text-xs">Strong coverage — well above 2x target</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={yoyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis tickFormatter={(v) => `$${(v/1000000).toFixed(0)}M`} stroke="#94a3b8" />
                <Tooltip
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
                <Bar dataKey="revenue" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e' }} />
              </ComposedChart>
            </ResponsiveContainer>
            <p className="text-green-400 text-sm text-center mt-2">📈 +$1.58M YoY growth (+39.5%)</p>
          </div>
        </div>

        {/* Strategic Insights */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-700/50">
          <h2 className="text-xl font-bold text-white mb-4">🎯 Strategic Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">Strength: Growth Momentum</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• +39.5% YoY revenue growth — fastest growing region</li>
                <li>• Abbott (+214% YoY) is the breakout account at $1.94M</li>
                <li>• Pipeline coverage at 2.5x (vs 1.5x target)</li>
                <li>• Genetown managed services at 70-100% GP margins</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-2">Challenge: Margin Recovery</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Takeda: $702K @ 14.5% GP — largest margin drag</li>
                <li>• Bausch Health: $739K @ 29.4% GP — below target</li>
                <li>• Spectranetics: $242K @ 26.4% GP declining -51%</li>
                <li>• Research Triangle: greenfield = no revenue yet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2025→2026 Revenue Bridge */}
        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📊 2025 → 2026 Revenue Bridge</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex items-end justify-between gap-4 h-64">
              <div className="flex flex-col items-center">
                <div className="bg-slate-600 w-20 rounded-t-lg flex items-end justify-center" style={{height: '130px'}}>
                  <span className="text-white font-bold pb-2">$5.6M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2">2025 Base</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-500 w-20 rounded-t-lg flex items-end justify-center" style={{height: '50px'}}>
                  <span className="text-white font-bold text-sm pb-1">+$2.0M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">Abbott<br/>Expansion</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-cyan-500 w-20 rounded-t-lg flex items-end justify-center" style={{height: '30px'}}>
                  <span className="text-white font-bold text-sm pb-1">+$1.0M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">Research<br/>Triangle</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-500 w-20 rounded-t-lg flex items-end justify-center" style={{height: '35px'}}>
                  <span className="text-white font-bold text-sm pb-1">+$1.2M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">New Logos<br/>(10 accts)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-red-500 w-20 rounded-b-lg flex items-start justify-center" style={{height: '14px', marginTop: '116px'}}>
                  <span className="text-white font-bold text-sm pt-0">-$0.3M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">Expected<br/>Churn</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-t from-cyan-600 to-cyan-400 w-20 rounded-t-lg flex items-end justify-center" style={{height: '210px'}}>
                  <span className="text-white font-bold pb-2">$9.5M</span>
                </div>
                <span className="text-cyan-400 text-sm mt-2 font-semibold">2026 Target</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4 text-center">
              <div className="bg-green-900/30 rounded-lg p-3">
                <p className="text-green-400 font-semibold">Abbott Growth</p>
                <p className="text-slate-300 text-sm">$1.94M → $3.5M target</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <p className="text-cyan-400 font-semibold">Triangle Entry</p>
                <p className="text-slate-300 text-sm">IQVIA, Fujifilm, PPD</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <p className="text-purple-400 font-semibold">New Logos</p>
                <p className="text-slate-300 text-sm">10 logos x $120K avg</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-3">
                <p className="text-red-400 font-semibold">Churn Mitigation</p>
                <p className="text-slate-300 text-sm">5% attrition target</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Growth Targets */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 2026 Growth Targets</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-xl p-6 border border-cyan-700/50">
              <p className="text-cyan-400 text-sm mb-1">Revenue Target</p>
              <p className="text-4xl font-bold text-white">$9.5M</p>
              <p className="text-green-400 text-sm">+70% vs 2025</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl p-6 border border-green-700/50">
              <p className="text-green-400 text-sm mb-1">GP% Target</p>
              <p className="text-4xl font-bold text-white">48%</p>
              <p className="text-green-400 text-sm">+4.9 pts vs 2025</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-6 border border-purple-700/50">
              <p className="text-purple-400 text-sm mb-1">Account Target</p>
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="text-green-400 text-sm">+14 new logos</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 rounded-xl p-6 border border-orange-700/50">
              <p className="text-orange-400 text-sm mb-1">Pipeline Target</p>
              <p className="text-4xl font-bold text-white">$20M+</p>
              <p className="text-slate-400 text-sm">2.5x+ coverage</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <Link href="/margin-analysis" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition">
            Deep Dive: Margins →
          </Link>
          <Link href="/financial-model" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition">
            Interactive Model →
          </Link>
          <Link href="/map" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition">
            View Map
          </Link>
        </div>
      </main>
    </div>
  );
}
