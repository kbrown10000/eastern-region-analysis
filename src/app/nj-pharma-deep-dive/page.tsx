'use client';

import Link from 'next/link';

export default function NJPharmaDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">NJ Pharma Corridor</h1>
        <p className="text-emerald-400 text-xl mb-8">New Brunswick → Princeton — Big Pharma Headquarters</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="2025 Revenue" value="$2.02M" trend="+19.8% YoY" />
          <StatCard title="GP%" value="40.7%" trend="Mixed: 29-86% range" />
          <StatCard title="Active Accounts" value="10" trend="Big Pharma anchors" />
          <StatCard title="Open Pipeline" value="$5.0M" trend="2.5x coverage" />
        </div>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Territory Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why NJ Matters</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>300+ pharma companies</strong> along I-95/I-287 corridor</li>
                <li>• <strong>Big Pharma HQs</strong> — J&J, Merck, BMS, Novo Nordisk</li>
                <li>• <strong>Manufacturing hubs</strong> — Large-scale production facilities</li>
                <li>• <strong>Regeneron & Bausch</strong> — Major USDM anchor accounts</li>
                <li>• <strong>Talent pool</strong> — Deep pharma experience</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">USDM Opportunity</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Manufacturing Excellence</strong> — GMP, process validation</li>
                <li>• <strong>Digital Transformation</strong> — Legacy system modernization</li>
                <li>• <strong>AI/ML Validation</strong> — Pharma 4.0 initiatives</li>
                <li>• <strong>Managed Services</strong> — Long-term support contracts</li>
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
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Bausch Health</td>
                  <td className="py-3 text-right">$739K</td>
                  <td className="py-3 text-right text-yellow-400">29.4%</td>
                  <td className="py-3 text-right text-emerald-400">+46.1%</td>
                  <td className="py-3 text-right">$1.30M</td>
                  <td className="py-3"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded border border-yellow-700/30">Watch</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Regeneron Pharmaceuticals</td>
                  <td className="py-3 text-right">$436K</td>
                  <td className="py-3 text-right text-emerald-400">63.0%</td>
                  <td className="py-3 text-right text-emerald-400">New logo</td>
                  <td className="py-3 text-right">$436K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Johnson & Johnson</td>
                  <td className="py-3 text-right">$408K</td>
                  <td className="py-3 text-right text-yellow-400">32.4%</td>
                  <td className="py-3 text-right text-red-400">-18.3%</td>
                  <td className="py-3 text-right">$1.53M</td>
                  <td className="py-3"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded border border-red-700/30">At Risk</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Integra LifeSciences</td>
                  <td className="py-3 text-right">$266K</td>
                  <td className="py-3 text-right text-yellow-400">37.0%</td>
                  <td className="py-3 text-right text-red-400">-48.6%</td>
                  <td className="py-3 text-right">$1.29M</td>
                  <td className="py-3"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded border border-red-700/30">At Risk</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Direct Biologics</td>
                  <td className="py-3 text-right">$83K</td>
                  <td className="py-3 text-right text-emerald-400">56.3%</td>
                  <td className="py-3 text-right text-red-400">-9.7%</td>
                  <td className="py-3 text-right">$186K</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-700/30">Grow</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Boehringer Ingelheim</td>
                  <td className="py-3 text-right">$44K</td>
                  <td className="py-3 text-right text-emerald-400">53.1%</td>
                  <td className="py-3 text-right text-slate-400">Flat</td>
                  <td className="py-3 text-right">$132K</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-700/30">Grow</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Provention Bio (Sanofi)</td>
                  <td className="py-3 text-right">$24K</td>
                  <td className="py-3 text-right text-emerald-400">86.3%</td>
                  <td className="py-3 text-right text-red-400">-20.9%</td>
                  <td className="py-3 text-right">$99K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">J&J Medical Inc.</td>
                  <td className="py-3 text-right">$24K</td>
                  <td className="py-3 text-right text-emerald-400">46.0%</td>
                  <td className="py-3 text-right text-emerald-400">New</td>
                  <td className="py-3 text-right">$24K</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-700/30">Grow</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700">
                  <td className="py-3 font-bold text-white">TOTAL (10 accounts)</td>
                  <td className="py-3 text-right font-bold text-white">$2.02M</td>
                  <td className="py-3 text-right font-bold text-emerald-400">40.7%</td>
                  <td className="py-3 text-right font-bold text-emerald-400">+19.8%</td>
                  <td className="py-3 text-right font-bold text-white">$5.01M</td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Finance MCP get_customer_ltv | Feb 2026</p>
        </section>

        {/* Key Risks */}
        <section className="bg-red-900/20 rounded-xl p-8 mb-8 border border-red-700/30">
          <h2 className="text-2xl font-bold text-white mb-4">Key Risks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-red-400 font-semibold mb-2">J&J Decline (-18.3% YoY)</h3>
              <p className="text-slate-300 text-sm">Revenue dropped from $500K to $408K. Declining engagement across divisions. 32.4% GP needs improvement. Risk of further erosion if not addressed.</p>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-2">Integra Decline (-48.6% YoY)</h3>
              <p className="text-slate-300 text-sm">Revenue cut in half from $517K to $266K. Major contraction signal — needs immediate save review and stabilization plan.</p>
            </div>
          </div>
        </section>

        {/* Expansion Opportunities */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">Regeneron Expansion</h3>
              <p className="text-slate-300 text-sm mb-3">New logo at 63% GP and $436K in Year 1. Massive potential — Regeneron has $13B+ revenue and growing pipeline.</p>
              <p className="text-white font-medium">Target: $436K → $800K+</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">J&J + Integra Save</h3>
              <p className="text-slate-300 text-sm mb-3">Combined $674K declining. Run save reviews, re-engage executive sponsors, create stabilization plans.</p>
              <p className="text-white font-medium">Target: Stabilize at $600K+</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-blue-400 font-semibold mb-3">Bausch Margin Lift</h3>
              <p className="text-slate-300 text-sm mb-3">$739K revenue at 29.4% GP. Largest NJ account — shift mix to managed services for margin improvement.</p>
              <p className="text-white font-medium">Target: 29% → 40% GP = +$78K</p>
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
