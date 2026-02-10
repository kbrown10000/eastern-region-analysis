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
          <StatCard title="2025 Revenue" value="$1.35M" trend="+39.4% YoY" />
          <StatCard title="GP%" value="43.1%" trend="High-margin managed svcs" />
          <StatCard title="Active Accounts" value="18" trend="Dense biotech cluster" />
          <StatCard title="Open Pipeline" value="$3.8M" trend="2.8x coverage" />
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
                <li>• <strong>Managed Services</strong> — 70-100% GP on existing accounts</li>
                <li>• <strong>AI Governance</strong> — High demand for AI validation</li>
                <li>• <strong>Cloud Assurance</strong> — Multi-cloud GxP environments</li>
                <li>• <strong>Cell & Gene Therapy</strong> — Manufacturing QA/QC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Margin Story */}
        <section className="bg-emerald-900/20 rounded-xl p-8 mb-8 border border-emerald-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">The Genetown Margin Story</h2>
          <p className="text-slate-300 mb-4">
            Genetown is a <span className="text-emerald-400 font-semibold">tale of two models</span>. Managed services accounts deliver
            outstanding 70-100% GP, while Takeda — the territory's largest account — drags the blended margin down with 14.5% GP on T&M staffing.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
              <p className="text-emerald-400 font-semibold mb-2">High-Margin Stars (70%+ GP)</p>
              <p className="text-slate-300 text-sm">Alexion (100%), Intellia (96.6%), Lyra (95.5%), Moderna (92.8%), Disc Medicine (88.5%), Ipsen (88.6%), Bioatla (87.4%), Harmony (81.6%), Ironwood (79.1%)</p>
            </div>
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
              <p className="text-red-400 font-semibold mb-2">Margin Recovery Needed</p>
              <p className="text-slate-300 text-sm">Takeda: $702K at 14.5% GP — largest Genetown account but T&M staffing model. Converting to managed services = +$179K profit.</p>
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
                  <th className="py-3 text-slate-400 font-medium">Tier</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700 bg-red-900/10">
                  <td className="py-3 font-medium text-white">Takeda Pharmaceuticals</td>
                  <td className="py-3 text-right">$702K</td>
                  <td className="py-3 text-right text-red-400">14.5%</td>
                  <td className="py-3 text-right text-emerald-400">+88.2%</td>
                  <td className="py-3 text-right">$1.22M</td>
                  <td className="py-3"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded border border-red-700/30">Fix</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Harmony Biosciences</td>
                  <td className="py-3 text-right">$127K</td>
                  <td className="py-3 text-right text-emerald-400">81.6%</td>
                  <td className="py-3 text-right text-emerald-400">+2.5%</td>
                  <td className="py-3 text-right">$400K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alnylam Pharmaceuticals</td>
                  <td className="py-3 text-right">$110K</td>
                  <td className="py-3 text-right text-emerald-400">71.5%</td>
                  <td className="py-3 text-right text-emerald-400">+8.9%</td>
                  <td className="py-3 text-right">$251K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Ironwood Pharma</td>
                  <td className="py-3 text-right">$102K</td>
                  <td className="py-3 text-right text-emerald-400">79.1%</td>
                  <td className="py-3 text-right text-emerald-400">+93.9%</td>
                  <td className="py-3 text-right">$199K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Astellas Gene Therapies</td>
                  <td className="py-3 text-right">$93K</td>
                  <td className="py-3 text-right text-emerald-400">40.2%</td>
                  <td className="py-3 text-right text-emerald-400">+12.3%</td>
                  <td className="py-3 text-right">$261K</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-700/30">Grow</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Moderna</td>
                  <td className="py-3 text-right">$37K</td>
                  <td className="py-3 text-right text-emerald-400">92.8%</td>
                  <td className="py-3 text-right text-emerald-400">+0.5%</td>
                  <td className="py-3 text-right">$74K</td>
                  <td className="py-3"><span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded border border-purple-700/30">Expand</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Intellia Therapeutics</td>
                  <td className="py-3 text-right">$37K</td>
                  <td className="py-3 text-right text-emerald-400">96.6%</td>
                  <td className="py-3 text-right text-slate-400">-0.1%</td>
                  <td className="py-3 text-right">$127K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alexion Pharmaceuticals</td>
                  <td className="py-3 text-right">$34K</td>
                  <td className="py-3 text-right text-emerald-400">100%</td>
                  <td className="py-3 text-right text-emerald-400">+1.4%</td>
                  <td className="py-3 text-right">$99K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700">
                  <td className="py-3 font-bold text-white">TOTAL (18 accounts)</td>
                  <td className="py-3 text-right font-bold text-white">$1.35M</td>
                  <td className="py-3 text-right font-bold text-emerald-400">43.1%</td>
                  <td className="py-3 text-right font-bold text-emerald-400">+39.4%</td>
                  <td className="py-3 text-right font-bold text-white">$3.12M</td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Finance MCP get_customer_ltv | Feb 2026</p>
        </section>

        {/* Target Accounts */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Target Accounts (New Logos)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <TargetCard name="Vertex Pharmaceuticals" focus="Gene editing (CRISPR/Cas9)" signal="$8.7B revenue, Casgevy launch" />
            <TargetCard name="Sarepta Therapeutics" focus="Gene therapy (DMD)" signal="Elevidys commercial launch" />
            <TargetCard name="Biogen" focus="Neurodegeneration" signal="AI drug discovery investments" />
            <TargetCard name="Blueprint Medicines" focus="Precision kinase inhibitors" signal="$500M+ revenue, growing" />
            <TargetCard name="Bluebird Bio" focus="Gene therapy (SCD, TDT)" signal="Manufacturing scale-up" />
            <TargetCard name="Beam Therapeutics" focus="Base editing" signal="$300M Series D, clinical trials" />
          </div>
        </section>

        {/* 2026 Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 rounded-lg p-6 border border-red-700/30">
              <h3 className="text-red-400 font-semibold mb-3">Takeda Margin Recovery</h3>
              <p className="text-slate-300 text-sm mb-3">Largest account at $702K but 14.5% GP. Shift from T&M staffing to managed services model.</p>
              <p className="text-white font-medium">Target: 14.5% → 40% GP = +$179K</p>
            </div>
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Expand Moderna Footprint</h3>
              <p className="text-slate-300 text-sm mb-3">92.8% GP but only $37K revenue. Massive expansion opportunity — AI governance, mRNA manufacturing QA.</p>
              <p className="text-white font-medium">Target: $37K → $200K+</p>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-3">New Logo Acquisition</h3>
              <p className="text-slate-300 text-sm mb-3">18 of 1,000+ Genetown biotechs. Vertex, Sarepta, Biogen all unaddressed. Gene therapy QA is the wedge.</p>
              <p className="text-white font-medium">Target: 5+ new logos in 2026</p>
            </div>
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
                <li>• Managed services model</li>
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
      <p className="text-emerald-400 text-xs mt-2">{signal}</p>
    </div>
  );
}
