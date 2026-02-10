'use client';

import Link from 'next/link';

export default function ResearchTriangleDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Overview</Link>
        
        <h1 className="text-4xl font-bold text-white mb-2">Research Triangle</h1>
        <p className="text-emerald-400 text-xl mb-8">Raleigh-Durham, NC — The CDMO Capital</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="2025 Revenue" value="$3.8M" trend="+22% YoY 🚀" />
          <StatCard title="GP%" value="54.2%" trend="Strong margins" />
          <StatCard title="Active Accounts" value="28" trend="Growing fast" />
          <StatCard title="Open Pipeline" value="$2.9M" trend="1.3x coverage" />
        </div>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Territory Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why Research Triangle Matters</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>CDMO Hub</strong> — Fujifilm Diosynth, Catalent, Samsung Biologics</li>
                <li>• <strong>CRO Capital</strong> — IQVIA, PPD/Thermo Fisher, Syneos</li>
                <li>• <strong>Duke/UNC</strong> — Research institutions driving innovation</li>
                <li>• <strong>Cell Therapy Mfg</strong> — Growing production capacity</li>
                <li>• <strong>Lower costs</strong> — 30% cheaper than Boston/NJ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">USDM Opportunity</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Manufacturing QA</strong> — CDMO expansion projects</li>
                <li>• <strong>Tech Transfer</strong> — Sponsor → CDMO handoffs</li>
                <li>• <strong>Clinical Systems</strong> — CRO platform validation</li>
                <li>• <strong>AI/ML in Manufacturing</strong> — Process optimization</li>
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
                  <td className="py-3 font-medium text-white">IQVIA</td>
                  <td className="py-3">$1.2M</td>
                  <td className="py-3 text-emerald-400">58%</td>
                  <td className="py-3">Platform Val, Cloud</td>
                  <td className="py-3">AI clinical trial tools</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Fujifilm Diosynth</td>
                  <td className="py-3">$890K</td>
                  <td className="py-3 text-emerald-400">52%</td>
                  <td className="py-3">Manufacturing QA</td>
                  <td className="py-3">Holly Springs expansion</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">PPD (Thermo Fisher)</td>
                  <td className="py-3">$780K</td>
                  <td className="py-3 text-emerald-400">55%</td>
                  <td className="py-3">Clinical systems</td>
                  <td className="py-3">Decentralized trials</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Syneos Health</td>
                  <td className="py-3">$520K</td>
                  <td className="py-3 text-emerald-400">50%</td>
                  <td className="py-3">CSV, QMS</td>
                  <td className="py-3">Post-restructure growth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Growth Thesis */}
        <section className="bg-emerald-900/30 rounded-xl p-8 border border-emerald-700">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 High-Growth Territory</h2>
          <p className="text-slate-300 mb-4">
            Research Triangle is USDM's fastest-growing East territory. The CDMO boom (driven by cell/gene therapy manufacturing demand) 
            is creating massive opportunity. Fujifilm's $2B Holly Springs expansion alone could drive $500K+ incremental.
          </p>
          <div className="flex gap-4 flex-wrap">
            <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-sm">+22% YoY Growth</span>
            <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-sm">54% GP Margins</span>
            <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-sm">CDMO Expansion Wave</span>
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
