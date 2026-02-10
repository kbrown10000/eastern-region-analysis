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
          <StatCard title="2025 Revenue" value="$6.2M" trend="+5% YoY" />
          <StatCard title="GP%" value="45.8%" trend="Room to improve" />
          <StatCard title="Active Accounts" value="42" trend="High concentration" />
          <StatCard title="Open Pipeline" value="$4.8M" trend="0.9x coverage" />
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
                <li>• <strong>R&D centers</strong> — Established innovation centers</li>
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
          <h2 className="text-2xl font-bold text-white mb-6">Key Accounts</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium">2025 Revenue</th>
                  <th className="py-3 text-slate-400 font-medium">GP%</th>
                  <th className="py-3 text-slate-400 font-medium">Services</th>
                  <th className="py-3 text-slate-400 font-medium">Opportunity</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Johnson & Johnson</td>
                  <td className="py-3">$1.8M</td>
                  <td className="py-3 text-emerald-400">52%</td>
                  <td className="py-3">CSV, Cloud, Managed</td>
                  <td className="py-3">AI validation expansion</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Merck & Co.</td>
                  <td className="py-3">$1.4M</td>
                  <td className="py-3 text-emerald-400">48%</td>
                  <td className="py-3">QMS, Process Val</td>
                  <td className="py-3">Manufacturing 4.0</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Bristol-Myers Squibb</td>
                  <td className="py-3">$1.1M</td>
                  <td className="py-3 text-yellow-400">38%</td>
                  <td className="py-3">Staff Aug, CSV</td>
                  <td className="py-3">Shift to managed svcs</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Novo Nordisk</td>
                  <td className="py-3">$980K</td>
                  <td className="py-3 text-emerald-400">55%</td>
                  <td className="py-3">Cloud Assurance</td>
                  <td className="py-3">Obesity drug scale-up</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Organon</td>
                  <td className="py-3">$620K</td>
                  <td className="py-3 text-emerald-400">50%</td>
                  <td className="py-3">CSV, QA</td>
                  <td className="py-3">Post-spinoff growth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expansion Opportunities */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">🎯 Margin Improvement</h3>
              <p className="text-slate-300 text-sm mb-3">BMS at 38% GP — needs attention. Shift from staff aug to managed services.</p>
              <p className="text-white font-medium">Target: 45% → 52% blended GP</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">🏭 Manufacturing Focus</h3>
              <p className="text-slate-300 text-sm mb-3">Novo's obesity drug manufacturing expansion creates major opportunity.</p>
              <p className="text-white font-medium">Target: $500K incremental</p>
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
