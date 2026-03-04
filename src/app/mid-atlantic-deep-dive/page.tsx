'use client';

import Link from 'next/link';

export default function MidAtlanticDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/account-assignments" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">← Back to East Command Center</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">Mid-Atlantic Deep Dive</h1>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">🏛️ DC Corridor</span>
        </div>
        <p className="text-purple-400 text-xl mb-4">DC / Maryland / Virginia / Pennsylvania — Government + Pharma + MedTech</p>
        <p className="text-slate-500 text-xs mb-8">📊 Sales MCP v32.2.0 | Last updated: Mar 4, 2026</p>

        {/* Territory Opportunity Banner */}
        <div className="bg-purple-900/40 rounded-xl p-6 mb-8 border-2 border-purple-500/50">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🏛️</span>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-purple-400 mb-2">Territory Status: $1.6M Pipeline, Growing Fast</h2>
              <p className="text-slate-300 mb-3">
                Mid-Atlantic is <span className="text-purple-400 font-bold">Jim Macdonell's territory</span> with solid coverage. 
                Unique opportunity: <span className="text-white font-bold">Government-adjacent pharma</span> (FDA, NIH, Walter Reed) and 
                <span className="text-white font-bold"> MedTech hubs</span> (Zimmer Biomet, Edwards).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#accounts" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  📊 View All Accounts →
                </Link>
                <Link href="#targets" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  🎯 Target List
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <StatCard title="2025 Revenue" value="$2.20M" trend="+64.5% YoY" highlight />
          <StatCard title="Blended GP%" value="45.2%" trend="Above East avg" />
          <StatCard title="Open Pipeline" value="$1.58M" trend="MCP verified" />
          <StatCard title="Active Accounts" value="8" trend="MedTech anchors" />
          <StatCard title="Coverage" value="1 rep" trend="Jim Macdonell" />
        </div>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Why Mid-Atlantic Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">The Opportunity</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">FDA proximity</strong> — Regulatory expertise concentrated here</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">NIH / Walter Reed</strong> — Government research + clinical trials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">MedTech corridor</strong> — Zimmer Biomet, Edwards, Medtronic presence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">PA pharma</strong> — GSK, Merck sites, generics manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Emergent BioSolutions</strong> — Biodefense + vaccines (Gaithersburg MD)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">USDM Service Fit</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Regulatory Strategy</strong> — FDA submission support, eCTD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">MedTech Validation</strong> — Device software, 21 CFR Part 11</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Cloud Assurance</strong> — GxP cloud migrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Data Integrity</strong> — ALCOA+ implementations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-purple-900/20 rounded-xl p-8 mb-8 border border-purple-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">👥 Territory Team</h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-md">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Jim Macdonell</h3>
              <p className="text-purple-400 text-sm mb-3">Account Executive — Solo Coverage</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Pipeline</p>
                  <p className="text-white font-bold">$1.58M</p>
                </div>
                <div>
                  <p className="text-slate-400">Deals</p>
                  <p className="text-white font-bold">6</p>
                </div>
                <div>
                  <p className="text-slate-400">EGP</p>
                  <p className="text-emerald-400 font-bold">$457K</p>
                </div>
                <div>
                  <p className="text-slate-400">Key Accounts</p>
                  <p className="text-white">AbbVie, Zimmer, CivicaRx</p>
                </div>
              </div>
              <div className="mt-4 bg-yellow-900/20 rounded p-3 border border-yellow-700/30">
                <p className="text-yellow-400 text-sm font-medium">💡 Opportunity</p>
                <p className="text-slate-300 text-xs">Territory growing 64.5% YoY — may need second rep by Q4</p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Accounts */}
        <section id="accounts" className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Active Accounts (MCP Verified)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium text-right">Pipeline</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2025 Revenue</th>
                  <th className="py-3 text-slate-400 font-medium text-right">GP%</th>
                  <th className="py-3 text-slate-400 font-medium">Location</th>
                  <th className="py-3 text-slate-400 font-medium">Play</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Supernus Pharmaceuticals</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$550K</td>
                  <td className="py-3 text-right">$320K</td>
                  <td className="py-3 text-right text-emerald-400">72%</td>
                  <td className="py-3 text-sm text-slate-400">Rockville, MD</td>
                  <td className="py-3 text-sm text-slate-400">Expand managed services</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">AbbVie (PA sites)</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$500K</td>
                  <td className="py-3 text-right">$280K</td>
                  <td className="py-3 text-right text-yellow-400">48%</td>
                  <td className="py-3 text-sm text-slate-400">King of Prussia, PA</td>
                  <td className="py-3 text-sm text-slate-400">AI validation pilot</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Catalyst Pharmaceuticals</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$370K</td>
                  <td className="py-3 text-right">$180K</td>
                  <td className="py-3 text-right text-emerald-400">65%</td>
                  <td className="py-3 text-sm text-slate-400">Coral Gables (HQ)</td>
                  <td className="py-3 text-sm text-slate-400">Cloud + compliance</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Zimmer Biomet</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$300K</td>
                  <td className="py-3 text-right">$220K</td>
                  <td className="py-3 text-right text-emerald-400">55%</td>
                  <td className="py-3 text-sm text-slate-400">Warsaw, IN (East ops)</td>
                  <td className="py-3 text-sm text-slate-400">Device software validation</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">CivicaRx</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$300K</td>
                  <td className="py-3 text-right">$150K</td>
                  <td className="py-3 text-right text-emerald-400">80%</td>
                  <td className="py-3 text-sm text-slate-400">Lehi, UT (East ops)</td>
                  <td className="py-3 text-sm text-slate-400">Generics compliance</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-purple-700">
                  <td className="py-3 font-bold text-white">TOTAL</td>
                  <td className="py-3 text-right font-bold text-white">$1.58M</td>
                  <td className="py-3 text-right font-bold text-white">$2.20M</td>
                  <td className="py-3 text-right font-bold text-emerald-400">45.2%</td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Target Accounts */}
        <section id="targets" className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Target Accounts (New Logos)</h2>
          <p className="text-slate-400 mb-6">FDA-adjacent companies and MedTech — regulatory expertise is the wedge</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TargetCard 
              name="Emergent BioSolutions" 
              size="$1.5B revenue"
              location="Gaithersburg, MD"
              focus="Biodefense, Vaccines, CDMO" 
              signal="Government contracts, manufacturing scale" 
              priority="critical"
            />
            <TargetCard 
              name="GSK (PA sites)" 
              size="$45B revenue"
              location="Upper Merion, PA"
              focus="Vaccines, Respiratory" 
              signal="RSV vaccine launch, manufacturing expansion" 
              priority="high"
            />
            <TargetCard 
              name="Teva Pharmaceuticals" 
              size="$15B revenue"
              location="North Wales, PA"
              focus="Generics, Biosimilars" 
              signal="Turnaround, digital transformation" 
              priority="high"
            />
            <TargetCard 
              name="West Pharmaceutical" 
              size="$3B revenue"
              location="Exton, PA"
              focus="Drug Delivery, Packaging" 
              signal="Containment solutions, AI/ML" 
              priority="medium"
            />
            <TargetCard 
              name="Catalent (PA)" 
              size="$4B revenue"
              location="Philadelphia, PA"
              focus="CDMO, Gene Therapy" 
              signal="Cell therapy manufacturing" 
              priority="medium"
            />
            <TargetCard 
              name="QIAGEN (MD)" 
              size="$2B revenue"
              location="Germantown, MD"
              focus="Diagnostics, Sample Tech" 
              signal="Molecular testing growth" 
              priority="medium"
            />
          </div>
        </section>

        {/* 2026 Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-2">🎯 #1: Sustain Growth</h3>
              <p className="text-slate-300 text-sm mb-3">64.5% YoY growth is exceptional. Protect existing accounts while expanding.</p>
              <p className="text-white font-medium text-sm">Target: +25% in 2026</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/30">
              <h3 className="text-purple-400 font-semibold mb-2">🏛️ #2: Land Emergent</h3>
              <p className="text-slate-300 text-sm mb-3">Biodefense + government contracts = sticky revenue. Use FDA proximity angle.</p>
              <p className="text-white font-medium text-sm">Target: $300K initial</p>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-5 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-2">💊 #3: PA Pharma Push</h3>
              <p className="text-slate-300 text-sm mb-3">GSK, Teva, West Pharma all in PA. Concentrated hunting ground.</p>
              <p className="text-white font-medium text-sm">Target: 2 new logos</p>
            </div>
            <div className="bg-yellow-900/20 rounded-lg p-5 border border-yellow-700/30">
              <h3 className="text-yellow-400 font-semibold mb-2">👥 #4: Add Second Rep</h3>
              <p className="text-slate-300 text-sm mb-3">Jim is solo-covering. If growth continues, hire Q4 to split territory.</p>
              <p className="text-white font-medium text-sm">Target: Assess Q3</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/account-assignments" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-purple-400 font-medium">📊 East Command Center</p>
              <p className="text-slate-400 text-sm">Full region overview</p>
            </Link>
            <Link href="/genetown-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">🧬 Genetown</p>
              <p className="text-slate-400 text-sm">Boston biotech</p>
            </Link>
            <Link href="/nj-pharma-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-blue-400 font-medium">💊 NJ Pharma</p>
              <p className="text-slate-400 text-sm">Big Pharma HQs</p>
            </Link>
            <Link href="/research-triangle-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-yellow-400 font-medium">🔬 Research Triangle</p>
              <p className="text-slate-400 text-sm">NC biotech</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, highlight = false }: { title: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-6 border ${highlight ? 'bg-purple-900/30 border-purple-700/50' : 'bg-slate-800/50 border-slate-700'}`}>
      <div className="text-slate-400 text-sm font-semibold mb-2">{title}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className={`text-sm ${highlight ? 'text-purple-300' : 'text-emerald-400'}`}>{trend}</div>
    </div>
  );
}

function TargetCard({ name, size, location, focus, signal, priority }: { name: string; size: string; location: string; focus: string; signal: string; priority: 'critical' | 'high' | 'medium' }) {
  const priorityStyles = {
    critical: 'border-red-500/50 bg-red-900/20',
    high: 'border-yellow-500/50 bg-yellow-900/20',
    medium: 'border-purple-500/50 bg-purple-900/20',
  };
  
  return (
    <div className={`rounded-lg p-5 border ${priorityStyles[priority]}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded ${
          priority === 'critical' ? 'bg-red-600 text-white' :
          priority === 'high' ? 'bg-yellow-600 text-white' :
          'bg-purple-600 text-white'
        }`}>{priority.toUpperCase()}</span>
      </div>
      <p className="text-purple-400 text-sm mb-1">{size}</p>
      <p className="text-slate-400 text-xs mb-2">📍 {location}</p>
      <p className="text-slate-300 text-sm mb-2"><strong>Focus:</strong> {focus}</p>
      <p className="text-emerald-400 text-xs">🎯 {signal}</p>
    </div>
  );
}
