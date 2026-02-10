'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Line } from 'recharts';

// REAL MCP DATA - Finance MCP get_customer_ltv | Feb 10, 2026
// 36 East Customers, $5.57M revenue, 43.1% blended GP

// Problem customers - low margin East accounts
const problemCustomers = [
  { name: 'Takeda Pharmaceuticals', revenue: 702000, gp: 14.5, gpDollars: 101790, hours: 5100, trend: '+88%', territory: 'Genetown' },
  { name: 'Spectranetics', revenue: 242000, gp: 26.4, gpDollars: 63888, hours: 1800, trend: '-51%', territory: 'Mid-Atlantic' },
  { name: 'Formation Bio', revenue: 30000, gp: 27.9, gpDollars: 8370, hours: 220, trend: '+75%', territory: 'Genetown' },
  { name: 'Bausch Health', revenue: 739000, gp: 29.4, gpDollars: 217266, hours: 5400, trend: '+46%', territory: 'NJ Pharma' },
  { name: 'Johnson & Johnson', revenue: 408000, gp: 32.4, gpDollars: 132192, hours: 3000, trend: '-18%', territory: 'NJ Pharma' },
  { name: 'Integra LifeSciences', revenue: 266000, gp: 37.0, gpDollars: 98420, hours: 1900, trend: '-49%', territory: 'NJ Pharma' },
];

// High-margin stars (Tier A examples)
const starCustomers = [
  { name: 'Alexion Pharmaceuticals', revenue: 34000, gp: 100.0, gpDollars: 34000, hours: 180, trend: '+1%', territory: 'Genetown' },
  { name: 'Intellia Therapeutics', revenue: 37000, gp: 96.6, gpDollars: 35742, hours: 200, trend: '0%', territory: 'Genetown' },
  { name: 'Moderna', revenue: 37000, gp: 92.8, gpDollars: 34336, hours: 200, trend: '+1%', territory: 'Genetown' },
  { name: 'Ipsen Pharma', revenue: 26000, gp: 88.6, gpDollars: 23036, hours: 140, trend: 'New', territory: 'Genetown' },
  { name: 'Harmony Biosciences', revenue: 127000, gp: 81.6, gpDollars: 103632, hours: 700, trend: '+3%', territory: 'Genetown' },
  { name: 'Ironwood Pharmaceuticals', revenue: 102000, gp: 79.1, gpDollars: 80682, hours: 550, trend: '+94%', territory: 'Genetown' },
  { name: 'Alnylam Pharmaceuticals', revenue: 110000, gp: 71.5, gpDollars: 78650, hours: 600, trend: '+9%', territory: 'Genetown' },
  { name: 'Regeneron', revenue: 436000, gp: 63.0, gpDollars: 274680, hours: 2400, trend: 'New', territory: 'NJ Pharma' },
];

// Territory comparison - REAL MCP DATA
const territoryComparison = [
  { territory: 'Mid-Atlantic', revenue: 2200000, gp: 45.2, customers: 8 },
  { territory: 'Genetown', revenue: 1350000, gp: 43.1, customers: 18 },
  { territory: 'NJ Pharma', revenue: 2020000, gp: 40.7, customers: 10 },
];

// Tier analysis
const tierData = [
  { tier: 'Tier A (≥40%)', customers: 15, revenue: 2880000, gpDollars: 1635840, effectiveGP: 56.8, color: '#22c55e' },
  { tier: 'Tier B (30-40%)', customers: 7, revenue: 920000, gpDollars: 323840, effectiveGP: 35.2, color: '#eab308' },
  { tier: 'Tier C (<30%)', customers: 14, revenue: 1770000, gpDollars: 391170, effectiveGP: 22.1, color: '#ef4444' },
];

const getGPColor = (gp: number) => {
  if (gp >= 40) return '#22c55e';
  if (gp >= 30) return '#eab308';
  return '#ef4444';
};

export default function MarginAnalysis() {
  const totalProblemRevenue = problemCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const totalProblemGP = problemCustomers.reduce((sum, c) => sum + c.gpDollars, 0);
  const problemGPPercent = (totalProblemGP / totalProblemRevenue * 100).toFixed(1);

  const totalStarRevenue = starCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const totalStarGP = starCustomers.reduce((sum, c) => sum + c.gpDollars, 0);
  const starGPPercent = (totalStarGP / totalStarRevenue * 100).toFixed(1);

  const potentialGPGain = totalProblemRevenue * 0.40 - totalProblemGP;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Margin Analysis</h1>
        <p className="text-slate-400 mb-2">East Region: 43.1% blended GP — Genetown managed services driving margin excellence</p>
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-purple-400">Finance MCP</span> → <code className="text-slate-500">get_customer_ltv</code> |
          <span className="text-slate-500"> Filter: East territory accounts</span> |
          <span className="text-slate-500"> 36 customers | Feb 2026</span>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
            <p className="text-green-400 text-sm mb-1">East Blended GP</p>
            <p className="text-4xl font-bold text-green-400">43.1%</p>
            <p className="text-slate-500 text-sm mt-1">$2.40M / $5.57M</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Tier A Revenue</p>
            <p className="text-4xl font-bold text-white">$2.88M</p>
            <p className="text-slate-500 text-sm mt-1">52% of East total</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Tier C GP%</p>
            <p className="text-4xl font-bold text-red-400">22.1%</p>
            <p className="text-slate-500 text-sm mt-1">vs 40% target</p>
          </div>
          <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
            <p className="text-green-400 text-sm mb-1">Potential GP Gain</p>
            <p className="text-4xl font-bold text-green-400">${(potentialGPGain / 1000000).toFixed(1)}M</p>
            <p className="text-slate-500 text-sm mt-1">if problems hit 40%</p>
          </div>
        </div>

        {/* Problem Accounts */}
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50 mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">⚠️ Below-Target Accounts (&lt;40% GP)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-red-800/50">
                  <th className="text-left text-slate-400 text-sm py-2">Customer</th>
                  <th className="text-left text-slate-400 text-sm py-2">Territory</th>
                  <th className="text-right text-slate-400 text-sm py-2">Revenue</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP%</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP $</th>
                  <th className="text-right text-slate-400 text-sm py-2">YoY</th>
                </tr>
              </thead>
              <tbody>
                {problemCustomers.map((c, i) => (
                  <tr key={i} className="border-b border-red-800/30">
                    <td className="py-3 text-white font-medium">{c.name}</td>
                    <td className="py-3 text-slate-400 text-sm">{c.territory}</td>
                    <td className="py-3 text-right text-cyan-400">${(c.revenue / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right text-red-400 font-bold">{c.gp}%</td>
                    <td className="py-3 text-right text-slate-300">${(c.gpDollars / 1000).toFixed(0)}K</td>
                    <td className={`py-3 text-right ${c.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{c.trend}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-red-700">
                  <td className="py-3 text-red-400 font-bold">Total</td>
                  <td></td>
                  <td className="py-3 text-right text-cyan-400 font-bold">${(totalProblemRevenue / 1000000).toFixed(2)}M</td>
                  <td className="py-3 text-right text-red-400 font-bold">{problemGPPercent}%</td>
                  <td className="py-3 text-right text-slate-300 font-bold">${(totalProblemGP / 1000).toFixed(0)}K</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Star Accounts */}
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4">⭐ Star Accounts (Tier A - Model Customers)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-green-800/50">
                  <th className="text-left text-slate-400 text-sm py-2">Customer</th>
                  <th className="text-left text-slate-400 text-sm py-2">Territory</th>
                  <th className="text-right text-slate-400 text-sm py-2">Revenue</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP%</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP $</th>
                  <th className="text-right text-slate-400 text-sm py-2">YoY</th>
                </tr>
              </thead>
              <tbody>
                {starCustomers.map((c, i) => (
                  <tr key={i} className="border-b border-green-800/30">
                    <td className="py-3 text-white font-medium">{c.name}</td>
                    <td className="py-3 text-slate-400 text-sm">{c.territory}</td>
                    <td className="py-3 text-right text-cyan-400">${(c.revenue / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right text-green-400 font-bold">{c.gp}%</td>
                    <td className="py-3 text-right text-slate-300">${(c.gpDollars / 1000).toFixed(0)}K</td>
                    <td className={`py-3 text-right ${c.trend.startsWith('+') || c.trend === 'New' ? 'text-green-400' : 'text-slate-400'}`}>{c.trend}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-green-700">
                  <td className="py-3 text-green-400 font-bold">Total</td>
                  <td></td>
                  <td className="py-3 text-right text-cyan-400 font-bold">${(totalStarRevenue / 1000000).toFixed(2)}M</td>
                  <td className="py-3 text-right text-green-400 font-bold">{starGPPercent}%</td>
                  <td className="py-3 text-right text-slate-300 font-bold">${(totalStarGP / 1000).toFixed(0)}K</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Territory Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">GP% by Territory</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={territoryComparison} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" domain={[0, 50]} tickFormatter={(v) => `${v}%`} stroke="#94a3b8" />
                <YAxis type="category" dataKey="territory" stroke="#94a3b8" width={100} />
                <Tooltip
                  formatter={(value) => [`${Number(value || 0)}%`, 'GP%']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
                <Bar
                  dataKey="gp"
                  radius={[0, 4, 4, 0]}
                  label={{ position: 'right', fill: '#fff', formatter: (v) => `${Number(v || 0)}%` }}
                >
                  {territoryComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getGPColor(entry.gp)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Tier Distribution (Revenue)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={tierData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="revenue"
                  label={({ name }) => `${String(name || '').split(' ')[1] || ''}`}
                  labelLine={false}
                >
                  {tierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {tierData.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                  <span className="text-slate-400">{t.tier.split(' ')[1]}: {t.customers}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Math */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📊 The Story: East Margin is Strong</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-slate-400 mb-2">Tier A Revenue</p>
              <p className="text-4xl font-bold text-green-400">$2.88M</p>
              <p className="text-slate-500 text-sm">52% of total at 56.8% GP</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 mb-2">Tier C Revenue</p>
              <p className="text-4xl font-bold text-red-400">$1.77M</p>
              <p className="text-slate-500 text-sm">32% of total at 22.1% GP</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 mb-2">Result</p>
              <p className="text-4xl font-bold text-green-400">43.1%</p>
              <p className="text-slate-500 text-sm">Blended GP margin (9 pts above West)</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <p className="text-cyan-300 font-semibold">The Opportunity:</p>
            <p className="text-slate-300 text-sm mt-1">
              Takeda ($702K @ 14.5% GP) is the largest margin drag. Converting to managed services model
              would add ~$179K in GP annually. Genetown managed services accounts prove 70-100% GP is achievable.
            </p>
          </div>
        </div>

        {/* Takeda Deep Dive */}
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50 mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🔍 Takeda: The Margin Recovery Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-300 mb-4">Largest Genetown account at $702K with only 14.5% GP — the worst margin in East.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• <span className="text-white">Revenue:</span> $702K (+88% YoY growth)</li>
                <li>• <span className="text-white">GP%:</span> 14.5% (target: 40%+)</li>
                <li>• <span className="text-white">Model:</span> Heavy T&M staffing</li>
                <li>• <span className="text-white">Fix:</span> Managed services transition</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-300 mb-4">Genetown managed services benchmarks:</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• <span className="text-green-400">Intellia:</span> $37K @ 96.6% GP</li>
                <li>• <span className="text-green-400">Moderna:</span> $37K @ 92.8% GP</li>
                <li>• <span className="text-green-400">Harmony Bio:</span> $127K @ 81.6% GP</li>
              </ul>
              <p className="text-slate-500 text-sm mt-4">
                If Takeda moved to 40% GP (still below managed services avg), East blended GP would jump to 46.3%.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <Link href="/dashboard" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition">
            ← Dashboard
          </Link>
          <Link href="/genetown-deep-dive" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition">
            Genetown Deep Dive →
          </Link>
        </div>
      </main>
    </div>
  );
}
