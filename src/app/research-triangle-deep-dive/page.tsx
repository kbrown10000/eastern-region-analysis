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
          <StatCard title="2025 Revenue" value="$0" trend="Greenfield territory" color="amber" />
          <StatCard title="GP%" value="—" trend="No accounts yet" color="slate" />
          <StatCard title="Active Accounts" value="0" trend="Zero penetration" color="amber" />
          <StatCard title="Open Pipeline" value="$1.1M" trend="Initial opportunities" color="emerald" />
        </div>

        {/* Greenfield Banner */}
        <section className="bg-amber-900/20 rounded-xl p-8 mb-8 border border-amber-700/50">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌱</span>
            <div>
              <h2 className="text-2xl font-bold text-amber-400 mb-2">Greenfield Territory — Zero Revenue Today</h2>
              <p className="text-slate-300">
                Research Triangle is the <span className="text-amber-400 font-semibold">largest untapped opportunity</span> in the East region.
                Despite being America's CDMO capital with 150+ life sciences companies, USDM has zero accounts here.
                The $1.1M pipeline represents initial prospecting activity — this territory needs dedicated investment.
              </p>
            </div>
          </div>
        </section>

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

        {/* Target Accounts */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Priority Targets</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Company</th>
                  <th className="py-3 text-slate-400 font-medium">Type</th>
                  <th className="py-3 text-slate-400 font-medium">Revenue (Est.)</th>
                  <th className="py-3 text-slate-400 font-medium">USDM Services</th>
                  <th className="py-3 text-slate-400 font-medium">Signal</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">IQVIA</td>
                  <td className="py-3">CRO</td>
                  <td className="py-3">$15B+</td>
                  <td className="py-3">Platform Val, AI Clinical Tools</td>
                  <td className="py-3 text-emerald-400">AI trial tools investment</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Fujifilm Diosynth</td>
                  <td className="py-3">CDMO</td>
                  <td className="py-3">$2B+ (parent)</td>
                  <td className="py-3">Manufacturing QA, Process Val</td>
                  <td className="py-3 text-emerald-400">Holly Springs $2B expansion</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">PPD (Thermo Fisher)</td>
                  <td className="py-3">CRO</td>
                  <td className="py-3">$6B+ (division)</td>
                  <td className="py-3">Clinical Systems, CSV</td>
                  <td className="py-3 text-emerald-400">Decentralized trials</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Syneos Health</td>
                  <td className="py-3">CRO</td>
                  <td className="py-3">$5B+</td>
                  <td className="py-3">CSV, QMS</td>
                  <td className="py-3 text-amber-400">Post-restructure</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Samsung Biologics</td>
                  <td className="py-3">CDMO</td>
                  <td className="py-3">$2B+</td>
                  <td className="py-3">Manufacturing QA, Tech Transfer</td>
                  <td className="py-3 text-emerald-400">US expansion</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Catalent</td>
                  <td className="py-3">CDMO</td>
                  <td className="py-3">$4B+</td>
                  <td className="py-3">Cell Therapy Mfg QA</td>
                  <td className="py-3 text-emerald-400">Gene therapy capacity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Entry Plan */}
        <section className="bg-emerald-900/30 rounded-xl p-8 mb-8 border border-emerald-700">
          <h2 className="text-2xl font-bold text-white mb-4">Market Entry Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 rounded-lg p-5">
              <div className="text-emerald-400 font-bold text-lg mb-2">Phase 1: Q1-Q2</div>
              <h3 className="text-white font-semibold mb-2">Land First Accounts</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Target IQVIA + Fujifilm Diosynth</li>
                <li>• Leverage existing Fujifilm relationship (CA site)</li>
                <li>• Manufacturing QA assessment as entry point</li>
                <li>• Attend RTP biotech networking events</li>
              </ul>
            </div>
            <div className="bg-slate-900/40 rounded-lg p-5">
              <div className="text-emerald-400 font-bold text-lg mb-2">Phase 2: Q3-Q4</div>
              <h3 className="text-white font-semibold mb-2">Build Presence</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Expand to PPD and Syneos</li>
                <li>• Place 2-3 consultants on-site</li>
                <li>• Build referral network via Duke/UNC</li>
                <li>• Convert assessments to managed services</li>
              </ul>
            </div>
            <div className="bg-slate-900/40 rounded-lg p-5">
              <div className="text-emerald-400 font-bold text-lg mb-2">Year 2: 2027</div>
              <h3 className="text-white font-semibold mb-2">Scale Operations</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 5+ active accounts</li>
                <li>• $1M+ annual revenue</li>
                <li>• Dedicated seller assignment</li>
                <li>• CDMO specialization practice</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex gap-4 flex-wrap">
            <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-sm">$1.1M Early Pipeline</span>
            <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-sm">$1M+ Year 1 Target</span>
            <span className="bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-sm">CDMO Expansion Wave</span>
          </div>
        </section>

        {/* Investment Ask */}
        <section className="bg-blue-900/20 rounded-xl p-8 border border-blue-700/30">
          <h2 className="text-2xl font-bold text-white mb-4">Investment Required</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-blue-400 font-semibold mb-3">What We Need</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• <strong>Dedicated seller time</strong> — 25% of existing AM or partner channel</li>
                <li>• <strong>Travel budget</strong> — Monthly RTP presence for networking + client meetings</li>
                <li>• <strong>Manufacturing QA SME</strong> — CDMO-focused technical resources</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-3">Expected Return</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• <strong>Year 1:</strong> $1M+ revenue at 50%+ GP</li>
                <li>• <strong>Year 2:</strong> $2M+ revenue, self-funding territory</li>
                <li>• <strong>Year 3:</strong> Dedicated territory requiring full-time seller</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, color = 'emerald' }: { title: string; value: string; trend: string; color?: string }) {
  const colorMap: Record<string, string> = {
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    slate: 'text-slate-500',
  };
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
      <p className={`${colorMap[color] || 'text-emerald-400'} text-sm mt-1`}>{trend}</p>
    </div>
  );
}
