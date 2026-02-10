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
          <StatCard title="2025 Revenue" value="$2.4M" trend="+3% YoY" />
          <StatCard title="GP%" value="48.5%" trend="Stable" />
          <StatCard title="Active Accounts" value="30" trend="Govt + Pharma mix" />
          <StatCard title="Open Pipeline" value="$2.0M" trend="1.0x coverage" />
        </div>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Territory Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why Mid-Atlantic Matters</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>FDA/NIH Adjacency</strong> — Regulatory insight advantage</li>
                <li>• <strong>Vaccine Hub</strong> — GSK, AstraZeneca manufacturing</li>
                <li>• <strong>Med Device Corridor</strong> — J&J Ethicon, Stryker</li>
                <li>• <strong>Penn/Hopkins/NIH</strong> — Academic medical centers</li>
                <li>• <strong>Federal Health IT</strong> — HHS, VA, CMS proximity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">USDM Opportunity</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Regulatory Strategy</strong> — FDA pre-submission, CMC</li>
                <li>• <strong>Vaccine Manufacturing</strong> — GMP, process validation</li>
                <li>• <strong>Medical Device QA</strong> — Design controls, 510(k)</li>
                <li>• <strong>Federal Compliance</strong> — FedRAMP, FISMA adjacent</li>
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
                  <td className="py-3 font-medium text-white">AstraZeneca (Wilmington)</td>
                  <td className="py-3">$680K</td>
                  <td className="py-3 text-emerald-400">52%</td>
                  <td className="py-3">Manufacturing QA</td>
                  <td className="py-3">Vaccine expansion</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">GSK (Philly)</td>
                  <td className="py-3">$540K</td>
                  <td className="py-3 text-emerald-400">48%</td>
                  <td className="py-3">CSV, Cloud</td>
                  <td className="py-3">Digital transformation</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Merck KGaA (Maryland)</td>
                  <td className="py-3">$420K</td>
                  <td className="py-3 text-emerald-400">50%</td>
                  <td className="py-3">Process Val</td>
                  <td className="py-3">Bioprocessing tools</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Emergent BioSolutions</td>
                  <td className="py-3">$380K</td>
                  <td className="py-3 text-yellow-400">42%</td>
                  <td className="py-3">CDMO support</td>
                  <td className="py-3">Turnaround opportunity</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Catalent (Baltimore)</td>
                  <td className="py-3">$340K</td>
                  <td className="py-3 text-emerald-400">55%</td>
                  <td className="py-3">Manufacturing</td>
                  <td className="py-3">Cell therapy mfg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Strategic Note */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Strategic Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">🏛️ Regulatory Advantage</h3>
              <p className="text-slate-300 text-sm">
                FDA adjacency is underutilized. Clients in this corridor value regulatory insight — 
                position USDM's CMC and regulatory strategy services more aggressively.
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">💉 Vaccine Renaissance</h3>
              <p className="text-slate-300 text-sm">
                mRNA vaccine manufacturing is expanding in the region. GSK and AstraZeneca both investing — 
                opportunity to expand manufacturing QA footprint.
              </p>
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
