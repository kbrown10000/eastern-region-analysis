'use client';

import Link from 'next/link';

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">

      <main className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Home</Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Executive Summary</h1>
        <p className="text-emerald-400 mb-4">Eastern Region | EVP: Lisa Fry | February 2026</p>
        <p className="text-slate-500 text-xs mb-8">📊 Data verified via Finance MCP | Last updated: Feb 11, 2026</p>
        
        <div className="mb-8 flex flex-wrap gap-3 text-xs">
          <span className="bg-emerald-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-emerald-700/50">
            <span className="text-emerald-400 font-semibold">Pipeline</span> = open opp amount
          </span>
          <span className="bg-purple-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-purple-700/50">
            <span className="text-purple-400 font-semibold">Bookings</span> = won opp amount
          </span>
          <span className="bg-blue-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-blue-700/50">
            <span className="text-blue-400 font-semibold">Revenue</span> = GAAP (billed)
          </span>
          <span className="bg-green-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-green-700/50">
            <span className="text-green-400 font-semibold">EGP</span> = est. gross profit
          </span>
        </div>
        
        {/* Key KPIs At-a-Glance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6">Key KPIs At-a-Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 rounded-xl p-6 border border-emerald-700">
              <div className="text-emerald-300 text-sm font-semibold mb-2">2025 Revenue</div>
              <div className="text-4xl font-bold text-white mb-1">$5.57M</div>
              <div className="text-emerald-200 text-sm">+39.5% YoY</div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/50 to-teal-800/50 rounded-xl p-6 border border-teal-700">
              <div className="text-teal-300 text-sm font-semibold mb-2">Win Rate</div>
              <div className="text-4xl font-bold text-white mb-1">41.6%</div>
              <div className="text-teal-200 text-sm">Company avg (Sales MCP down)</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-xl p-6 border border-green-700">
              <div className="text-green-300 text-sm font-semibold mb-2">Blended GP</div>
              <div className="text-4xl font-bold text-white mb-1">43.1%</div>
              <div className="text-green-200 text-sm">$2.4M gross profit</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-xl p-6 border border-blue-700">
              <div className="text-blue-300 text-sm font-semibold mb-2">Open Pipeline</div>
              <div className="text-4xl font-bold text-white mb-1">$14.1M</div>
              <div className="text-blue-200 text-sm">2.5x coverage</div>
            </div>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Strategic Overview</h2>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
              <p className="text-slate-300 leading-relaxed">
                The Eastern United States represents the <span className="text-emerald-400 font-semibold">largest life sciences market globally</span>,
                anchored by Boston's "Genetown" biotech cluster, the NJ Pharma Corridor, and the rapidly growing Research Triangle.
                The East region is the <span className="text-emerald-400 font-semibold">fastest-growing region at +39.5% YoY</span> with 43.1% blended GP —
                9 points above the West region — driven by high-value managed services and strategic pharma relationships.
              </p>
            </div>
          </section>

          {/* Key Findings */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Key Findings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-800/50">
                <h3 className="text-emerald-400 font-bold mb-3">✅ Strength: Explosive Growth</h3>
                <p className="text-slate-300">East is growing <span className="font-bold">+39.5% YoY</span> — fastest of any region.
                  Abbott ($1.94M, +214% YoY) and Regeneron ($436K, new logo) leading the surge.</p>
              </div>

              <div className="bg-teal-900/30 rounded-xl p-6 border border-teal-800/50">
                <h3 className="text-teal-400 font-bold mb-3">🚀 Strength: High-Margin Managed Services</h3>
                <p className="text-slate-300">Genetown accounts averaging <span className="font-bold">70-100% GP</span> on managed services.
                  Harmony Bio (81.6%), Alnylam (71.5%), Ironwood (79.1%) — model customers.</p>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-800/50">
                <h3 className="text-yellow-400 font-bold mb-3">⚠️ Watch: Takeda Margin</h3>
                <p className="text-slate-300">Largest Genetown account at <span className="font-bold">$702K but only 14.5% GP</span> —
                  needs managed services transition. Bausch Health at 29.4% GP also needs attention.</p>
              </div>

              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-800/50">
                <h3 className="text-blue-400 font-bold mb-3">📊 Opportunity: Pipeline Strength</h3>
                <p className="text-slate-300"><span className="font-bold">$14.1M pipeline at 2.5x coverage</span> — strongest coverage ratio company-wide.
                  Research Triangle is greenfield with massive CDMO/CRO opportunity.</p>
              </div>
            </div>
          </section>

          {/* Territory Breakdown */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Territory Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="py-3 text-slate-400 font-medium">Territory</th>
                    <th className="py-3 text-slate-400 font-medium">2025 Revenue</th>
                    <th className="py-3 text-slate-400 font-medium">GP%</th>
                    <th className="py-3 text-slate-400 font-medium">YoY Growth</th>
                    <th className="py-3 text-slate-400 font-medium">Accounts</th>
                    <th className="py-3 text-slate-400 font-medium">Pipeline</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-3 font-medium text-white">Mid-Atlantic</td>
                    <td className="py-3">$2.20M</td>
                    <td className="py-3 text-emerald-400">45.2%</td>
                    <td className="py-3 text-emerald-400">+64.5% 🚀</td>
                    <td className="py-3">8</td>
                    <td className="py-3">$4.2M</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 font-medium text-white">NJ Pharma Corridor</td>
                    <td className="py-3">$2.02M</td>
                    <td className="py-3 text-emerald-400">40.7%</td>
                    <td className="py-3 text-emerald-400">+19.8%</td>
                    <td className="py-3">10</td>
                    <td className="py-3">$5.0M</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 font-medium text-white">Genetown (Boston)</td>
                    <td className="py-3">$1.35M</td>
                    <td className="py-3 text-emerald-400">43.1%</td>
                    <td className="py-3 text-emerald-400">+39.4%</td>
                    <td className="py-3">18</td>
                    <td className="py-3">$3.8M</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 font-medium text-white">Research Triangle</td>
                    <td className="py-3 text-slate-500">Greenfield</td>
                    <td className="py-3 text-slate-500">—</td>
                    <td className="py-3 text-emerald-400">New 🌱</td>
                    <td className="py-3">0</td>
                    <td className="py-3">$1.1M</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-emerald-700">
                    <td className="py-3 font-bold text-white">TOTAL EAST</td>
                    <td className="py-3 font-bold text-white">$5.57M</td>
                    <td className="py-3 font-bold text-emerald-400">43.1%</td>
                    <td className="py-3 font-bold text-emerald-400">+39.5%</td>
                    <td className="py-3 font-bold text-white">36</td>
                    <td className="py-3 font-bold text-white">$14.1M</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          {/* Strategic Priorities */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">2026 Strategic Priorities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">Takeda Margin Recovery</h3>
                <p className="text-slate-400 text-sm">Largest Genetown account at $702K but 14.5% GP. Shift from T&M staffing to managed services model.</p>
                <p className="text-emerald-400 font-medium mt-3">Target: 14.5% → 40% GP = +$179K profit</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="text-lg font-bold text-white mb-2">Research Triangle Entry</h3>
                <p className="text-slate-400 text-sm">Greenfield territory — zero revenue today. Target IQVIA, Fujifilm Diosynth, PPD in the CDMO/CRO capital.</p>
                <p className="text-emerald-400 font-medium mt-3">Target: $1M+ Year 1 revenue</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-white mb-2">Abbott Expansion</h3>
                <p className="text-slate-400 text-sm">Top account grew +214% YoY to $1.94M. Expand manufacturing QA footprint across Abbott divisions.</p>
                <p className="text-emerald-400 font-medium mt-3">Target: $2.5M+ in 2026</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Explore the Strategy</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/genetown-deep-dive" className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-center transition-colors">
                <div className="text-2xl mb-2">🧬</div>
                <div className="text-white font-medium">Genetown</div>
              </Link>
              <Link href="/nj-pharma-deep-dive" className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-center transition-colors">
                <div className="text-2xl mb-2">💊</div>
                <div className="text-white font-medium">NJ Pharma</div>
              </Link>
              <Link href="/research-triangle-deep-dive" className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-center transition-colors">
                <div className="text-2xl mb-2">🔬</div>
                <div className="text-white font-medium">Research Triangle</div>
              </Link>
              <Link href="/mid-atlantic-deep-dive" className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 text-center transition-colors">
                <div className="text-2xl mb-2">🏛️</div>
                <div className="text-white font-medium">Mid-Atlantic</div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>USDM Life Sciences | Eastern Region Strategy 2026</p>
          <p className="text-sm mt-2">EVP: Lisa Fry | Data: Fabric Lakehouse MCPs</p>
        </div>
      </footer>
    </div>
  );
}

