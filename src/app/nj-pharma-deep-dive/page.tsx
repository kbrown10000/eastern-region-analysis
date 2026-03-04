'use client';

import Link from 'next/link';

export default function NJPharmaDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/account-assignments" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">← Back to East Command Center</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">NJ Pharma Corridor Deep Dive</h1>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">💊 Big Pharma</span>
        </div>
        <p className="text-blue-400 text-xl mb-4">New Brunswick → Princeton — The Pharma Capital of America</p>
        <p className="text-slate-500 text-xs mb-8">📊 Sales MCP v32.2.0 | Last updated: Mar 4, 2026</p>

        {/* Territory Opportunity Banner */}
        <div className="bg-blue-900/40 rounded-xl p-6 mb-8 border-2 border-blue-500/50">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💊</span>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-400 mb-2">Territory Status: $3M Pipeline, Strong Coverage</h2>
              <p className="text-slate-300 mb-3">
                NJ Pharma Corridor is <span className="text-blue-400 font-bold">well-covered</span> with Scott Pallardy and Vega Finucan. 
                Focus: <span className="text-white font-bold">expand existing accounts</span> and <span className="text-white font-bold">land Big Pharma HQs</span> (J&J, Merck, BMS).
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#accounts" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
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
          <StatCard title="2025 Revenue" value="$2.02M" trend="+19.8% YoY" />
          <StatCard title="Blended GP%" value="40.7%" trend="Target: 50%" />
          <StatCard title="Open Pipeline" value="$3.0M" trend="MCP verified" highlight />
          <StatCard title="Active Accounts" value="10" trend="Big Pharma anchors" />
          <StatCard title="Coverage" value="2 reps" trend="Pallardy + Finucan" />
        </div>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Why NJ Pharma Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">The Opportunity</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">300+ pharma companies</strong> along I-95/I-287 corridor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Big Pharma HQs</strong> — J&J, Merck, BMS, Novo Nordisk US</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Manufacturing hubs</strong> — Large-scale GMP facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Rutgers ecosystem</strong> — Pharma research and talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">NYC proximity</strong> — HQ decision-makers commute</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">USDM Service Fit</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Manufacturing Excellence</strong> — GMP, process validation, batch records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Digital Transformation</strong> — Legacy system modernization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">AI/ML Validation</strong> — Pharma 4.0, predictive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Cloud Assurance</strong> — AWS/Azure GxP migrations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-blue-900/20 rounded-xl p-8 mb-8 border border-blue-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">👥 Territory Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Scott Pallardy</h3>
              <p className="text-blue-400 text-sm mb-3">Sr. Account Executive</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Pipeline</p>
                  <p className="text-white font-bold">$2.0M</p>
                </div>
                <div>
                  <p className="text-slate-400">Deals</p>
                  <p className="text-white font-bold">4</p>
                </div>
                <div>
                  <p className="text-slate-400">EGP</p>
                  <p className="text-emerald-400 font-bold">$869K</p>
                </div>
                <div>
                  <p className="text-slate-400">Focus</p>
                  <p className="text-white">PTC, argenx</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Vega Finucan</h3>
              <p className="text-blue-400 text-sm mb-3">Account Executive</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Pipeline</p>
                  <p className="text-white font-bold">$1.0M</p>
                </div>
                <div>
                  <p className="text-slate-400">Deals</p>
                  <p className="text-white font-bold">4</p>
                </div>
                <div>
                  <p className="text-slate-400">EGP</p>
                  <p className="text-emerald-400 font-bold">$450K</p>
                </div>
                <div>
                  <p className="text-slate-400">Focus</p>
                  <p className="text-white">Abbott, Regeneron</p>
                </div>
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
                  <th className="py-3 text-slate-400 font-medium">Stage</th>
                  <th className="py-3 text-slate-400 font-medium">Owner</th>
                  <th className="py-3 text-slate-400 font-medium">Play</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">PTC Inc.</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$825K</td>
                  <td className="py-3 text-right">$450K</td>
                  <td className="py-3 text-right text-emerald-400">96.5%</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded">Negotiation</span></td>
                  <td className="py-3 text-sm">Pallardy</td>
                  <td className="py-3 text-sm text-slate-400">Expand managed services</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">argenx (BV + US)</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$1.15M</td>
                  <td className="py-3 text-right">$320K</td>
                  <td className="py-3 text-right text-emerald-400">65%</td>
                  <td className="py-3"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">Discovery</span></td>
                  <td className="py-3 text-sm">Pallardy</td>
                  <td className="py-3 text-sm text-slate-400">Multi-entity expansion</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Abbott Laboratories</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$605K</td>
                  <td className="py-3 text-right">$280K</td>
                  <td className="py-3 text-right text-emerald-400">64.3%</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded">Proposal</span></td>
                  <td className="py-3 text-sm">Finucan</td>
                  <td className="py-3 text-sm text-slate-400">Cloud + AI governance</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Regeneron Pharmaceuticals</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$270K</td>
                  <td className="py-3 text-right">$180K</td>
                  <td className="py-3 text-right text-yellow-400">45%</td>
                  <td className="py-3"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">Qualification</span></td>
                  <td className="py-3 text-sm">Finucan</td>
                  <td className="py-3 text-sm text-slate-400">Manufacturing QA</td>
                </tr>
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Bausch Health</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">$463K</td>
                  <td className="py-3 text-right">$150K</td>
                  <td className="py-3 text-right text-red-400">29%</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded">Proposal</span></td>
                  <td className="py-3 text-sm">Pallardy</td>
                  <td className="py-3 text-sm text-red-400">⚠️ Margin fix needed</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-blue-700">
                  <td className="py-3 font-bold text-white">TOTAL</td>
                  <td className="py-3 text-right font-bold text-white">$3.0M+</td>
                  <td className="py-3 text-right font-bold text-white">$2.02M</td>
                  <td className="py-3 text-right font-bold text-yellow-400">40.7%</td>
                  <td className="py-3"></td>
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
          <p className="text-slate-400 mb-6">Big Pharma HQs in the NJ corridor — massive opportunity</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TargetCard 
              name="Johnson & Johnson" 
              size="$95B revenue"
              location="New Brunswick, NJ"
              focus="Pharma, MedTech, Consumer" 
              signal="Kenvue spinoff, digital transformation" 
              priority="critical"
            />
            <TargetCard 
              name="Merck & Co." 
              size="$60B revenue"
              location="Rahway, NJ"
              focus="Oncology, Vaccines" 
              signal="Keytruda expansion, AI investments" 
              priority="critical"
            />
            <TargetCard 
              name="Bristol-Myers Squibb" 
              size="$45B revenue"
              location="Princeton, NJ"
              focus="Oncology, Immunology" 
              signal="Cell therapy manufacturing" 
              priority="high"
            />
            <TargetCard 
              name="Novo Nordisk US" 
              size="$25B+ revenue"
              location="Plainsboro, NJ"
              focus="Diabetes, Obesity (Ozempic)" 
              signal="Massive manufacturing expansion" 
              priority="high"
            />
            <TargetCard 
              name="Hikma Pharmaceuticals" 
              size="$2.5B revenue"
              location="Eatontown, NJ"
              focus="Generics, Injectables" 
              signal="US expansion, manufacturing scale" 
              priority="medium"
            />
            <TargetCard 
              name="Organon" 
              size="$6B revenue"
              location="Jersey City, NJ"
              focus="Women's Health, Biosimilars" 
              signal="Spinoff from Merck, building IT" 
              priority="medium"
            />
          </div>
        </section>

        {/* 2026 Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-2">🎯 #1: Close $3M Pipeline</h3>
              <p className="text-slate-300 text-sm mb-3">PTC, argenx, Abbott all in late stages. Focus on closing Q1-Q2.</p>
              <p className="text-white font-medium text-sm">Target: $2M closed by June</p>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-5 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-2">💊 #2: Land Big Pharma HQ</h3>
              <p className="text-slate-300 text-sm mb-3">J&J, Merck, or BMS would be transformational. Use existing contacts.</p>
              <p className="text-white font-medium text-sm">Target: 1 new logo $500K+</p>
            </div>
            <div className="bg-yellow-900/20 rounded-lg p-5 border border-yellow-700/30">
              <h3 className="text-yellow-400 font-semibold mb-2">⚠️ #3: Bausch Margin Fix</h3>
              <p className="text-slate-300 text-sm mb-3">29% GP is below threshold. Convert to managed services model.</p>
              <p className="text-white font-medium text-sm">Target: 29% → 45% GP</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-5 border border-purple-700/30">
              <h3 className="text-purple-400 font-semibold mb-2">📈 #4: argenx Expansion</h3>
              <p className="text-slate-300 text-sm mb-3">$1.15M pipeline across 2 entities. Multi-threaded approach.</p>
              <p className="text-white font-medium text-sm">Target: $500K closed</p>
            </div>
          </div>
        </section>

        {/* Competitive Intel */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">⚔️ Competitive Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Competitors in NJ</h3>
              <div className="space-y-3">
                <CompetitorCard 
                  name="Veeva" 
                  strength="Vault platform dominance" 
                  weakness="Expensive, inflexible"
                />
                <CompetitorCard 
                  name="IQVIA" 
                  strength="Clinical data + consulting" 
                  weakness="Less technical depth"
                />
                <CompetitorCard 
                  name="Deloitte Life Sciences" 
                  strength="Big 4 credibility" 
                  weakness="High cost, slow"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">USDM Differentiators</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Manufacturing expertise</strong> — Deep GMP/CSV knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Speed to value</strong> — Faster than Big 4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">AI governance</strong> — Differentiated offering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Managed services</strong> — Long-term partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/account-assignments" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-blue-400 font-medium">📊 East Command Center</p>
              <p className="text-slate-400 text-sm">Full region overview</p>
            </Link>
            <Link href="/genetown-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">🧬 Genetown</p>
              <p className="text-slate-400 text-sm">Boston biotech</p>
            </Link>
            <Link href="/mid-atlantic-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-purple-400 font-medium">🏛️ Mid-Atlantic</p>
              <p className="text-slate-400 text-sm">DC/MD/VA/PA</p>
            </Link>
            <Link href="/seller-performance" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-blue-400 font-medium">📈 Seller Performance</p>
              <p className="text-slate-400 text-sm">Individual metrics</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, highlight = false }: { title: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-6 border ${highlight ? 'bg-blue-900/30 border-blue-700/50' : 'bg-slate-800/50 border-slate-700'}`}>
      <div className="text-slate-400 text-sm font-semibold mb-2">{title}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className={`text-sm ${highlight ? 'text-blue-300' : 'text-emerald-400'}`}>{trend}</div>
    </div>
  );
}

function TargetCard({ name, size, location, focus, signal, priority }: { name: string; size: string; location: string; focus: string; signal: string; priority: 'critical' | 'high' | 'medium' }) {
  const priorityStyles = {
    critical: 'border-red-500/50 bg-red-900/20',
    high: 'border-yellow-500/50 bg-yellow-900/20',
    medium: 'border-blue-500/50 bg-blue-900/20',
  };
  const priorityLabels = {
    critical: 'CRITICAL',
    high: 'HIGH',
    medium: 'MEDIUM',
  };
  
  return (
    <div className={`rounded-lg p-5 border ${priorityStyles[priority]}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded ${
          priority === 'critical' ? 'bg-red-600 text-white' :
          priority === 'high' ? 'bg-yellow-600 text-white' :
          'bg-blue-600 text-white'
        }`}>{priorityLabels[priority]}</span>
      </div>
      <p className="text-blue-400 text-sm mb-1">{size}</p>
      <p className="text-slate-400 text-xs mb-2">📍 {location}</p>
      <p className="text-slate-300 text-sm mb-2"><strong>Focus:</strong> {focus}</p>
      <p className="text-emerald-400 text-xs">🎯 {signal}</p>
    </div>
  );
}

function CompetitorCard({ name, strength, weakness }: { name: string; strength: string; weakness: string }) {
  return (
    <div className="bg-slate-700/50 rounded-lg p-4">
      <h4 className="font-semibold text-white mb-2">{name}</h4>
      <p className="text-sm text-emerald-400 mb-1">✓ {strength}</p>
      <p className="text-sm text-red-400">✗ {weakness}</p>
    </div>
  );
}
