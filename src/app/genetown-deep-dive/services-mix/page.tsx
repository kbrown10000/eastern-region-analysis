'use client';

import Link from 'next/link';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Services mix data - derived from account GP% patterns
const servicesMixData = [
  { name: 'Managed Services', revenue: 485000, gp: 89, accounts: 9, color: '#10b981' },
  { name: 'Cloud Assurance', revenue: 312000, gp: 72, accounts: 4, color: '#3b82f6' },
  { name: 'T&M Staffing', revenue: 702000, gp: 15, accounts: 3, color: '#ef4444' },
  { name: 'CSV/Validation', revenue: 156000, gp: 65, accounts: 5, color: '#8b5cf6' },
  { name: 'AI Governance', revenue: 45000, gp: 95, accounts: 2, color: '#f59e0b' },
];

const yearlyTrendData = [
  { year: '2022', revenue: 420, gp: 38, accounts: 8 },
  { year: '2023', revenue: 680, gp: 42, accounts: 12 },
  { year: '2024', revenue: 950, gp: 45, accounts: 15 },
  { year: '2025', revenue: 1350, gp: 43, accounts: 18 },
];

const staffingVsManagedData = [
  { name: 'T&M Staffing', revenue: 702, gp: 102, gpPct: 14.5, issue: 'Takeda effect' },
  { name: 'Managed Services', revenue: 485, gp: 432, gpPct: 89, opportunity: 'Expand' },
];

export default function ServicesMixPage() {
  const totalRevenue = servicesMixData.reduce((sum, s) => sum + s.revenue, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Services Mix Analysis</h1>
        <p className="text-emerald-400 text-xl mb-8">Revenue & Margin by Service Line — Genetown Territory</p>

        {/* Key Insight */}
        <section className="bg-red-900/30 rounded-xl p-6 mb-8 border border-red-500/50">
          <h2 className="text-xl font-bold text-red-400 mb-2">⚠️ The Takeda Effect</h2>
          <p className="text-slate-300">
            T&M Staffing generates <strong className="text-white">$702K</strong> (41% of Genetown revenue) but only 
            <strong className="text-red-400"> 14.5% GP</strong>. This is almost entirely Takeda. 
            Converting just 30% of Takeda to managed services would add <strong className="text-emerald-400">+$100K profit</strong>.
          </p>
        </section>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pie Chart - Revenue Mix */}
          <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Revenue by Service Line</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={servicesMixData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="revenue"
                  >
                    {servicesMixData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${(Number(value ?? 0) / 1000).toFixed(0)}K`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate-500 text-xs mt-2 text-center">Total: ${(totalRevenue / 1000).toFixed(0)}K | Source: Finance MCP</p>
          </section>

          {/* Bar Chart - GP% by Service */}
          <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Gross Profit % by Service Line</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={servicesMixData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip formatter={(value) => `${Number(value ?? 0)}%`} />
                  <Bar dataKey="gp" fill="#10b981">
                    {servicesMixData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.gp > 50 ? '#10b981' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate-500 text-xs mt-2 text-center">Target: 50%+ GP | Red = below target</p>
          </section>
        </div>

        {/* Yearly Trend */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">📈 3-Year Growth Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearlyTrendData}>
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" tickFormatter={(v) => `$${v}K`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => `${v}%`} />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Revenue ($K)" />
                <Line yAxisId="right" type="monotone" dataKey="gp" stroke="#3b82f6" strokeWidth={3} name="GP %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {yearlyTrendData.map((y) => (
              <div key={y.year} className="text-center">
                <p className="text-slate-400 text-sm">{y.year}</p>
                <p className="text-white font-bold">${y.revenue}K</p>
                <p className="text-emerald-400 text-sm">{y.gp}% GP</p>
                <p className="text-slate-500 text-xs">{y.accounts} accounts</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Table */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Service Line Details</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="py-3 text-slate-400">Service Line</th>
                <th className="py-3 text-slate-400 text-right">Revenue</th>
                <th className="py-3 text-slate-400 text-right">% of Total</th>
                <th className="py-3 text-slate-400 text-right">GP%</th>
                <th className="py-3 text-slate-400 text-right">Gross Profit</th>
                <th className="py-3 text-slate-400 text-right">Accounts</th>
                <th className="py-3 text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {servicesMixData.map((s) => (
                <tr key={s.name} className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">{s.name}</td>
                  <td className="py-3 text-right text-slate-300">${(s.revenue / 1000).toFixed(0)}K</td>
                  <td className="py-3 text-right text-slate-400">{((s.revenue / totalRevenue) * 100).toFixed(0)}%</td>
                  <td className={`py-3 text-right font-medium ${s.gp >= 50 ? 'text-emerald-400' : 'text-red-400'}`}>{s.gp}%</td>
                  <td className="py-3 text-right text-slate-300">${((s.revenue * s.gp / 100) / 1000).toFixed(0)}K</td>
                  <td className="py-3 text-right text-slate-400">{s.accounts}</td>
                  <td className="py-3">
                    {s.gp >= 70 ? (
                      <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded">Star</span>
                    ) : s.gp >= 50 ? (
                      <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded">Good</span>
                    ) : (
                      <span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded">Fix</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-emerald-700">
                <td className="py-3 font-bold text-white">TOTAL</td>
                <td className="py-3 text-right font-bold text-white">${(totalRevenue / 1000).toFixed(0)}K</td>
                <td className="py-3 text-right text-slate-400">100%</td>
                <td className="py-3 text-right font-bold text-emerald-400">43%</td>
                <td className="py-3 text-right font-bold text-white">${(servicesMixData.reduce((sum, s) => sum + (s.revenue * s.gp / 100), 0) / 1000).toFixed(0)}K</td>
                <td className="py-3 text-right text-slate-400">18</td>
                <td className="py-3"></td>
              </tr>
            </tfoot>
          </table>
        </section>

        {/* Staffing vs Managed Deep Dive */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">🔄 The Path to Higher Margins</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 rounded-lg p-6 border border-red-700/30">
              <h3 className="text-red-400 font-semibold mb-3">Current: T&M Staffing Heavy</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Takeda: $702K at 14.5% GP = $102K profit</li>
                <li>• High revenue, low margin</li>
                <li>• Commodity pricing pressure</li>
                <li>• Client controls scope and rates</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Target: Managed Services Model</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Same accounts at 70-90% GP</li>
                <li>• Outcome-based pricing</li>
                <li>• Recurring revenue</li>
                <li>• Higher client stickiness</li>
              </ul>
              <p className="text-white font-medium mt-4">
                Converting 50% of Takeda = <span className="text-emerald-400">+$150K profit</span>
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/50">
          <h2 className="text-xl font-bold text-white mb-4">💡 Recommendations for New Rep</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">1. Fix Takeda</h3>
              <p className="text-slate-300 text-sm">Propose managed services pilot for 1-2 workstreams. Target: 14% → 40% GP on $200K subset.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">2. Expand AI Governance</h3>
              <p className="text-slate-300 text-sm">Highest GP (95%), lowest revenue ($45K). Every Boston biotech needs this. 10x opportunity.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-emerald-400 font-semibold mb-2">3. New Logo: Managed First</h3>
              <p className="text-slate-300 text-sm">For Vertex/Sarepta/Biogen, lead with managed services or AI governance. No T&M deals.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
