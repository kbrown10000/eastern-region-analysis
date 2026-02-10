'use client';

import Link from 'next/link';

export default function MidAtlanticDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Mid-Atlantic</h1>
        <p className="text-emerald-400 text-xl mb-8">DC / Philadelphia / Baltimore — The Regulatory Corridor</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="2025 Revenue" value="$2.20M" trend="+64.5% YoY 🚀" />
          <StatCard title="GP%" value="45.2%" trend="Strongest in region" />
          <StatCard title="Active Accounts" value="8" trend="Abbott dominates" />
          <StatCard title="Open Pipeline" value="$4.2M" trend="1.9x coverage" />
        </div>

        {/* Abbott Story */}
        <section className="bg-emerald-900/20 rounded-xl p-8 mb-8 border border-emerald-700/50">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🚀</span>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">The Abbott Explosion: +214% YoY</h2>
              <p className="text-slate-300">
                Abbott Laboratories grew from <span className="text-white font-semibold">$618K to $1.94M</span> in a single year — making it the
                <span className="text-emerald-400 font-semibold"> #1 East account</span> and driving 88% of Mid-Atlantic revenue.
                At 47.1% GP, Abbott represents the ideal growth model: high-volume AND high-margin.
              </p>
            </div>
          </div>
        </section>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Territory Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why Mid-Atlantic Matters</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>FDA/NIH Adjacency</strong> — Regulatory insight advantage</li>
                <li>• <strong>Abbott #1 Account</strong> — $1.94M anchor, +214% growth</li>
                <li>• <strong>Med Device Corridor</strong> — Spectranetics, LivaNova, ZimVie</li>
                <li>• <strong>Penn/Hopkins/NIH</strong> — Academic medical centers</li>
                <li>• <strong>Fastest-growing territory</strong> — +64.5% YoY</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">USDM Opportunity</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Abbott Expansion</strong> — Multi-division QA footprint</li>
                <li>• <strong>Regulatory Strategy</strong> — FDA pre-submission, CMC</li>
                <li>• <strong>Medical Device QA</strong> — Design controls, 510(k)</li>
                <li>• <strong>Manufacturing QA</strong> — GMP process validation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Accounts */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Key Accounts (MCP Verified)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2025 Revenue</th>
                  <th className="py-3 text-slate-400 font-medium text-right">GP%</th>
                  <th className="py-3 text-slate-400 font-medium text-right">YoY</th>
                  <th className="py-3 text-slate-400 font-medium text-right">LTV</th>
                  <th className="py-3 text-slate-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700 bg-emerald-900/10">
                  <td className="py-3 font-medium text-white">Abbott Laboratories</td>
                  <td className="py-3 text-right font-semibold">$1.94M</td>
                  <td className="py-3 text-right text-emerald-400">47.1%</td>
                  <td className="py-3 text-right text-emerald-400">+214% 🚀</td>
                  <td className="py-3 text-right">$2.56M</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Spectranetics</td>
                  <td className="py-3 text-right">$242K</td>
                  <td className="py-3 text-right text-yellow-400">26.4%</td>
                  <td className="py-3 text-right text-red-400">-51.2%</td>
                  <td className="py-3 text-right">$807K</td>
                  <td className="py-3"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded border border-red-700/30">At Risk</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">AstraZeneca UK</td>
                  <td className="py-3 text-right">$16K</td>
                  <td className="py-3 text-right text-emerald-400">93.8%</td>
                  <td className="py-3 text-right text-emerald-400">+6.5%</td>
                  <td className="py-3 text-right">$46K</td>
                  <td className="py-3"><span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded border border-purple-700/30">Expand</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Mallinckrodt</td>
                  <td className="py-3 text-right">$7.8K</td>
                  <td className="py-3 text-right text-emerald-400">59.3%</td>
                  <td className="py-3 text-right text-red-400">-40.3%</td>
                  <td className="py-3 text-right">$29K</td>
                  <td className="py-3"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded border border-yellow-700/30">Watch</span></td>
                </tr>
                <tr className="border-b border-slate-700 bg-red-900/5">
                  <td className="py-3 font-medium text-slate-500">LivaNova (credit)</td>
                  <td className="py-3 text-right text-red-400">-$6K</td>
                  <td className="py-3 text-right text-slate-500">63% hist.</td>
                  <td className="py-3 text-right text-red-400">-103%</td>
                  <td className="py-3 text-right">$320K</td>
                  <td className="py-3"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded border border-red-700/30">Churned</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700">
                  <td className="py-3 font-bold text-white">TOTAL (8 accounts)</td>
                  <td className="py-3 text-right font-bold text-white">$2.20M</td>
                  <td className="py-3 text-right font-bold text-emerald-400">45.2%</td>
                  <td className="py-3 text-right font-bold text-emerald-400">+64.5%</td>
                  <td className="py-3 text-right font-bold text-white">$4.02M</td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Finance MCP get_customer_ltv | Feb 2026</p>
        </section>

        {/* Concentration Risk */}
        <section className="bg-amber-900/20 rounded-xl p-8 mb-8 border border-amber-700/30">
          <h2 className="text-2xl font-bold text-white mb-4">Concentration Risk</h2>
          <p className="text-slate-300 mb-4">
            Abbott represents <span className="text-amber-400 font-semibold">88% of Mid-Atlantic revenue</span>.
            While Abbott is growing explosively, this concentration creates risk. If Abbott contracts or churns,
            the entire territory collapses. Diversification is critical.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-amber-400">88%</div>
              <div className="text-slate-400 text-sm">Abbott share</div>
            </div>
            <div className="bg-slate-900/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-slate-400">11%</div>
              <div className="text-slate-400 text-sm">Spectranetics share</div>
            </div>
            <div className="bg-slate-900/40 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-slate-500">1%</div>
              <div className="text-slate-400 text-sm">All others</div>
            </div>
          </div>
        </section>

        {/* Strategic Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">Abbott $2.5M+ Target</h3>
              <p className="text-slate-300 text-sm">Expand manufacturing QA footprint across Abbott divisions. Already at $1.94M — push to $2.5M+.</p>
              <p className="text-white font-medium mt-3">+$560K incremental</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Spectranetics Save</h3>
              <p className="text-slate-300 text-sm">Revenue halved from $496K to $242K at 26.4% GP. Needs immediate save review + exec re-engagement.</p>
              <p className="text-white font-medium mt-3">Stabilize at $200K+</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-blue-400 font-semibold mb-3">Diversify Beyond Abbott</h3>
              <p className="text-slate-300 text-sm">Target AstraZeneca expansion (93.8% GP), GSK Philly, and new med device logos to reduce concentration risk.</p>
              <p className="text-white font-medium mt-3">3+ new logos in 2026</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend }: { title: string; value: string; trend: string }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
      <p className="text-emerald-400 text-sm mt-1">{trend}</p>
    </div>
  );
}
