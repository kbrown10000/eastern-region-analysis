'use client';

import Link from 'next/link';

export default function GenetownDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Overview</Link>
        
        <h1 className="text-4xl font-bold text-white mb-2">Genetown</h1>
        <p className="text-emerald-400 text-xl mb-8">Boston / Cambridge — The Global Biotech Capital</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="2025 Revenue" value="$12.4M" trend="+15% YoY" />
          <StatCard title="GP%" value="58.2%" trend="Above target" />
          <StatCard title="Active Accounts" value="85" trend="+12 new logos" />
          <StatCard title="Open Pipeline" value="$8.5M" trend="1.4x coverage" />
        </div>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Territory Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why Genetown Matters</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>1,000+ biotech companies</strong> in Cambridge/Boston corridor</li>
                <li>• <strong>$15B+ VC funding</strong> in 2025 alone</li>
                <li>• <strong>Harvard/MIT/Broad Institute</strong> talent pipeline</li>
                <li>• <strong>mRNA revolution HQ</strong> — Moderna, BioNTech US</li>
                <li>• <strong>Gene therapy leaders</strong> — Vertex, Sarepta, Bluebird</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">USDM Opportunity</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>AI Governance</strong> — High demand for AI validation</li>
                <li>• <strong>Cloud Assurance</strong> — Multi-cloud GxP environments</li>
                <li>• <strong>Cell & Gene Therapy</strong> — Manufacturing QA/QC</li>
                <li>• <strong>Regulatory Strategy</strong> — FDA pre-submission support</li>
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
                  <td className="py-3 font-medium text-white">Moderna</td>
                  <td className="py-3">$2.8M</td>
                  <td className="py-3 text-emerald-400">62%</td>
                  <td className="py-3">CA, CSV, AI Governance</td>
                  <td className="py-3">Expand AI validation</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Vertex Pharmaceuticals</td>
                  <td className="py-3">$1.9M</td>
                  <td className="py-3 text-emerald-400">55%</td>
                  <td className="py-3">Cloud Assurance, QMS</td>
                  <td className="py-3">Gene editing programs</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Biogen</td>
                  <td className="py-3">$1.5M</td>
                  <td className="py-3 text-emerald-400">48%</td>
                  <td className="py-3">Managed Services</td>
                  <td className="py-3">AI drug discovery</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Sarepta Therapeutics</td>
                  <td className="py-3">$1.2M</td>
                  <td className="py-3 text-emerald-400">58%</td>
                  <td className="py-3">Gene Therapy QA</td>
                  <td className="py-3">Manufacturing scale-up</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alnylam</td>
                  <td className="py-3">$890K</td>
                  <td className="py-3 text-emerald-400">61%</td>
                  <td className="py-3">RNAi validation</td>
                  <td className="py-3">New pipeline programs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Target Accounts */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Target Accounts (New Logos)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <TargetCard name="Beam Therapeutics" focus="Base editing" signal="$300M Series D" />
            <TargetCard name="Intellia Therapeutics" focus="In vivo CRISPR" signal="Partnered with Regeneron" />
            <TargetCard name="Editas Medicine" focus="Gene editing" signal="New CEO, restructuring" />
            <TargetCard name="Karuna Therapeutics" focus="CNS" signal="Acquired by BMS" />
            <TargetCard name="Prime Medicine" focus="Prime editing" signal="Clinical trials starting" />
            <TargetCard name="Graphite Bio" focus="Gene therapy" signal="Pivoting to new programs" />
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Competitive Landscape</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-2">Strong Position</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• AI Governance (unique)</li>
                <li>• Gene therapy QA expertise</li>
                <li>• Regulatory strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Contested</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Cloud Assurance (vs Deloitte)</li>
                <li>• CSV (vs Cognizant)</li>
                <li>• Staff aug (vs local firms)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-2">Watch Out</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Veeva expanding services</li>
                <li>• Big 4 AI practices growing</li>
                <li>• Boutique Boston firms</li>
              </ul>
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

function TargetCard({ name, focus, signal }: { name: string; focus: string; signal: string }) {
  return (
    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
      <h4 className="font-semibold text-white">{name}</h4>
      <p className="text-slate-400 text-sm">{focus}</p>
      <p className="text-emerald-400 text-xs mt-2">📡 {signal}</p>
    </div>
  );
}
