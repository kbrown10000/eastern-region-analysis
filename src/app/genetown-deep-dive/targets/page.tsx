'use client';

import Link from 'next/link';

// COMPLETE list from Finance MCP - 18 active accounts with 2025 revenue
const activeCustomers = [
  { name: 'Takeda Pharmaceuticals U.S.A.', ltv: 1220000, revenue2025: 702000, revenue2024: 373000, revenue2023: 143000, gp: 14.5, status: 'Fix' },
  { name: 'Harmony Biosciences', ltv: 400000, revenue2025: 127000, revenue2024: 124000, revenue2023: 148000, gp: 81.6, status: 'Star' },
  { name: 'Astellas Pharma U.S.', ltv: 111000, revenue2025: 111000, revenue2024: 0, revenue2023: 0, gp: 100, status: 'Star' },
  { name: 'Alnylam Pharmaceuticals', ltv: 251000, revenue2025: 110000, revenue2024: 101000, revenue2023: 40000, gp: 71.5, status: 'Star' },
  { name: 'Ironwood Pharmaceuticals', ltv: 200000, revenue2025: 102000, revenue2024: 53000, revenue2023: 45000, gp: 79.1, status: 'Star' },
  { name: 'Praxis Precision Medicines', ltv: 97000, revenue2025: 97000, revenue2024: 0, revenue2023: 0, gp: 68.8, status: 'Grow' },
  { name: 'Astellas Gene Therapies', ltv: 261000, revenue2025: 93000, revenue2024: 83000, revenue2023: 85000, gp: 40.2, status: 'Grow' },
  { name: 'Schrödinger', ltv: 112000, revenue2025: 38000, revenue2024: 37000, revenue2023: 37000, gp: 97.8, status: 'Star' },
  { name: 'Moderna', ltv: 74000, revenue2025: 37000, revenue2024: 37000, revenue2023: 0, gp: 92.8, status: 'Expand' },
  { name: 'Intellia Therapeutics', ltv: 127000, revenue2025: 37000, revenue2024: 37000, revenue2023: 53000, gp: 96.6, status: 'Star' },
  { name: 'Alexion Pharmaceuticals', ltv: 99000, revenue2025: 34000, revenue2024: 33000, revenue2023: 32000, gp: 100, status: 'Star' },
  { name: 'Iveric Bio (Astellas)', ltv: 534000, revenue2025: 31000, revenue2024: 135000, revenue2023: 367000, gp: 83, status: 'Watch' },
  { name: 'Ardelyx', ltv: 125000, revenue2025: 31000, revenue2024: 66000, revenue2023: 28000, gp: 62.4, status: 'Grow' },
  { name: 'Ipsen Pharma', ltv: 100000, revenue2025: 26000, revenue2024: 26000, revenue2023: 48000, gp: 88.6, status: 'Star' },
  { name: 'Genmab A/S', ltv: 72000, revenue2025: 19000, revenue2024: 27000, revenue2023: 27000, gp: -306, status: 'Fix' },
  { name: 'Disc Medicine', ltv: 54000, revenue2025: 17000, revenue2024: 29000, revenue2023: 8000, gp: 88.5, status: 'Star' },
  { name: 'Lyra Therapeutics', ltv: 29000, revenue2025: 9000, revenue2024: 9000, revenue2023: 11000, gp: 95.5, status: 'Star' },
  { name: 'Bioatla', ltv: 36000, revenue2025: 8000, revenue2024: 21000, revenue2023: 7000, gp: 87.4, status: 'Watch' },
];

// COMPLETE list - 24 dormant accounts (had revenue, $0 in 2025)
const dormantCustomers = [
  { name: 'Accumulus Synergy', ltv: 649000, lastYear: '2023', lastRevenue: 648000, gp: 56.9, opportunity: 'Cloud platform expansion' },
  { name: 'Loxo Oncology (Lilly)', ltv: 556000, lastYear: '2024', lastRevenue: 201000, gp: 30.7, opportunity: 'Lilly integration support' },
  { name: 'Sierra Oncology', ltv: 278000, lastYear: '2023', lastRevenue: 253000, gp: 78.2, opportunity: 'Oncology pipeline' },
  { name: 'embecta Medical', ltv: 233000, lastYear: '2023', lastRevenue: 199000, gp: 49.1, opportunity: 'Diabetes devices' },
  { name: 'Genmab US INC', ltv: 223000, lastYear: '2024', lastRevenue: 207000, gp: 56.9, opportunity: 'BLA submissions' },
  { name: 'Horizon Therapeutics (Amgen)', ltv: 194000, lastYear: '2024', lastRevenue: 114000, gp: 70.1, opportunity: 'Amgen integration' },
  { name: 'Baxalta US (Takeda)', ltv: 185000, lastYear: '2023', lastRevenue: 185000, gp: 32.9, opportunity: 'Takeda umbrella' },
  { name: 'Vial Trials', ltv: 184000, lastYear: '2023', lastRevenue: 181000, gp: 48.4, opportunity: 'Clinical trial systems' },
  { name: 'Oncternal Therapeutics', ltv: 173000, lastYear: '2024', lastRevenue: 173000, gp: 61.7, opportunity: 'Oncology trials' },
  { name: 'Tenaya Therapeutics', ltv: 166000, lastYear: '2024', lastRevenue: 122000, gp: 48, opportunity: 'Gene therapy heart' },
  { name: 'Precision BioSciences', ltv: 151000, lastYear: '2023', lastRevenue: 149000, gp: 71.2, opportunity: 'Gene editing trials' },
  { name: 'Dyne Therapeutics', ltv: 149000, lastYear: '2024', lastRevenue: 149000, gp: 47.7, opportunity: 'Muscle disease mfg' },
  { name: 'AbCellera Biologics', ltv: 147000, lastYear: '2023', lastRevenue: 147000, gp: 54.6, opportunity: 'Antibody platform' },
  { name: 'IAVI', ltv: 138000, lastYear: '2024', lastRevenue: 86000, gp: 42.4, opportunity: 'Vaccine development' },
  { name: 'Turning Point Therapeutics', ltv: 131000, lastYear: '2024', lastRevenue: 34000, gp: 73.2, opportunity: 'Oncology (BMS)' },
  { name: 'Canadian Plasma Resources', ltv: 125000, lastYear: '2023', lastRevenue: 106000, gp: 53.1, opportunity: 'Plasma manufacturing' },
  { name: 'Verily Life Sciences', ltv: 103000, lastYear: '2024', lastRevenue: 39000, gp: 57.7, opportunity: 'AI/ML health' },
  { name: 'Terran Biosciences', ltv: 96000, lastYear: '2024', lastRevenue: 45000, gp: 48.8, opportunity: 'Psychedelic therapeutics' },
  { name: 'Takeda International AG', ltv: 51000, lastYear: '2023', lastRevenue: 51000, gp: 17.4, opportunity: 'Consolidate with US' },
  { name: 'Terran Biosciences Inc', ltv: 38000, lastYear: '2024', lastRevenue: 6000, gp: 98.5, opportunity: 'CNS trials' },
  { name: 'PTC-Codebeamer', ltv: 25000, lastYear: '2023', lastRevenue: 25000, gp: 99.1, opportunity: 'ALM platform' },
  { name: 'Resilience, Inc.', ltv: 7000, lastYear: '2023', lastRevenue: 7000, gp: 100, opportunity: 'CDMO expansion' },
];

// Major Boston biotechs NOT in our system yet
const newLogoTargets = [
  { name: 'Vertex Pharmaceuticals', hq: 'Boston', size: '$8.9B revenue', focus: 'Gene editing, CF, pain', priority: 'critical', wedge: 'Casgevy manufacturing QA' },
  { name: 'Biogen', hq: 'Cambridge', size: '$9.8B revenue', focus: 'Neurodegeneration, MS', priority: 'critical', wedge: 'AI drug discovery, Leqembi' },
  { name: 'Sarepta Therapeutics', hq: 'Cambridge', size: '$1.8B revenue', focus: 'Gene therapy (DMD)', priority: 'critical', wedge: 'Elevidys manufacturing QA' },
  { name: 'Regeneron (Boston)', hq: 'Cambridge', size: '$13B revenue', focus: 'Biologics', priority: 'high', wedge: 'Manufacturing validation' },
  { name: 'Blueprint Medicines', hq: 'Cambridge', size: '$500M+', focus: 'Kinase inhibitors', priority: 'high', wedge: 'Mast cell program' },
  { name: 'Bluebird Bio', hq: 'Somerville', size: '$100M', focus: 'Gene therapy', priority: 'high', wedge: 'Lyfgenia manufacturing' },
  { name: 'CRISPR Therapeutics', hq: 'Cambridge', size: '$100M', focus: 'Gene editing', priority: 'high', wedge: 'Casgevy (with Vertex)' },
  { name: 'Editas Medicine', hq: 'Cambridge', size: 'Pre-revenue', focus: 'In vivo CRISPR', priority: 'medium', wedge: 'EDIT-101 trials' },
  { name: 'Beam Therapeutics', hq: 'Cambridge', size: 'Clinical', focus: 'Base editing', priority: 'high', wedge: 'Precision editing QA' },
  { name: 'Prime Medicine', hq: 'Cambridge', size: 'Clinical', focus: 'Prime editing', priority: 'medium', wedge: 'Platform validation' },
  { name: 'Generation Bio', hq: 'Cambridge', size: 'Clinical', focus: 'Non-viral gene therapy', priority: 'medium', wedge: 'Delivery systems' },
  { name: 'Tessera Therapeutics', hq: 'Cambridge', size: 'Private', focus: 'Gene writing', priority: 'medium', wedge: 'Novel platform' },
  { name: 'eGenesis', hq: 'Cambridge', size: 'Private', focus: 'Xenotransplantation', priority: 'high', wedge: 'Organ manufacturing' },
  { name: 'Verve Therapeutics', hq: 'Boston', size: 'Clinical', focus: 'CV gene editing', priority: 'medium', wedge: 'In vivo editing' },
  { name: 'Kriya Therapeutics', hq: 'Cambridge', size: '$270M raised', focus: 'Gene therapy', priority: 'high', wedge: 'GMP validation' },
  { name: 'Senti Biosciences', hq: 'Cambridge', size: '$230M raised', focus: 'Gene circuits', priority: 'high', wedge: 'Cell therapy QA' },
  { name: 'AIRNA Biosciences', hq: 'Cambridge', size: '$155M raised', focus: 'RNA editing', priority: 'high', wedge: 'RNA therapeutics' },
  { name: 'Tempus', hq: 'Boston office', size: '$1B+ raised', focus: 'AI precision medicine', priority: 'high', wedge: 'AI governance' },
  { name: 'Valo Health', hq: 'Boston', size: '$700M raised', focus: 'AI drug discovery', priority: 'medium', wedge: 'AI validation' },
];

const total2025Revenue = activeCustomers.reduce((sum, c) => sum + c.revenue2025, 0);
const totalLTV = activeCustomers.reduce((sum, c) => sum + c.ltv, 0) + dormantCustomers.reduce((sum, c) => sum + c.ltv, 0);

export default function TargetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Boston/Genetown Complete Account List</h1>
        <p className="text-emerald-400 text-xl mb-8">All Accounts from MCP + New Logo Targets</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <StatCard title="Active 2025" value="18" trend={`$${(total2025Revenue/1000).toFixed(0)}K revenue`} highlight />
          <StatCard title="Dormant" value="24" trend="$4.2M total LTV" />
          <StatCard title="Total LTV" value={`$${(totalLTV/1000000).toFixed(1)}M`} trend="Historical value" />
          <StatCard title="New Logo Targets" value="19" trend="Prospects" />
          <StatCard title="Grand Total" value="61" trend="All accounts" />
          <StatCard title="High GP Stars" value="10" trend="70%+ margin" />
        </div>

        {/* Active Customers */}
        <section className="bg-emerald-900/20 rounded-xl p-6 mb-8 border border-emerald-500/30">
          <h2 className="text-xl font-bold text-white mb-4">✅ Active Customers — 18 Accounts with 2025 Revenue (${(total2025Revenue/1000).toFixed(0)}K)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-2 text-slate-400">Account</th>
                  <th className="py-2 text-slate-400 text-right">LTV</th>
                  <th className="py-2 text-slate-400 text-right">2025</th>
                  <th className="py-2 text-slate-400 text-right">2024</th>
                  <th className="py-2 text-slate-400 text-right">2023</th>
                  <th className="py-2 text-slate-400 text-right">GP%</th>
                  <th className="py-2 text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeCustomers.map((c) => (
                  <tr key={c.name} className={`border-b border-slate-700 ${c.gp < 30 ? 'bg-red-900/10' : c.gp >= 70 ? 'bg-emerald-900/10' : ''}`}>
                    <td className="py-2 font-medium text-white">{c.name}</td>
                    <td className="py-2 text-right text-slate-400">${(c.ltv / 1000).toFixed(0)}K</td>
                    <td className="py-2 text-right text-white font-medium">${(c.revenue2025 / 1000).toFixed(0)}K</td>
                    <td className="py-2 text-right text-slate-400">${(c.revenue2024 / 1000).toFixed(0)}K</td>
                    <td className="py-2 text-right text-slate-500">${(c.revenue2023 / 1000).toFixed(0)}K</td>
                    <td className={`py-2 text-right font-medium ${c.gp >= 70 ? 'text-emerald-400' : c.gp < 30 ? 'text-red-400' : 'text-yellow-400'}`}>{c.gp}%</td>
                    <td className="py-2"><StatusBadge status={c.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Finance MCP get_customer_ltv | Feb 2026</p>
        </section>

        {/* Dormant Customers */}
        <section className="bg-yellow-900/20 rounded-xl p-6 mb-8 border border-yellow-500/30">
          <h2 className="text-xl font-bold text-white mb-4">💤 Dormant Accounts — 24 with MSAs but $0 in 2025</h2>
          <p className="text-slate-400 text-sm mb-4">These accounts have existing MSAs. Fastest path to revenue for a new rep.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-2 text-slate-400">Account</th>
                  <th className="py-2 text-slate-400 text-right">LTV</th>
                  <th className="py-2 text-slate-400">Last Active</th>
                  <th className="py-2 text-slate-400 text-right">Last Revenue</th>
                  <th className="py-2 text-slate-400 text-right">GP%</th>
                  <th className="py-2 text-slate-400">Reactivation Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {dormantCustomers.map((c) => (
                  <tr key={c.name} className="border-b border-slate-700">
                    <td className="py-2 font-medium text-white">{c.name}</td>
                    <td className="py-2 text-right text-slate-300">${(c.ltv / 1000).toFixed(0)}K</td>
                    <td className="py-2 text-slate-400">{c.lastYear}</td>
                    <td className="py-2 text-right text-slate-400">${(c.lastRevenue / 1000).toFixed(0)}K</td>
                    <td className={`py-2 text-right ${c.gp >= 70 ? 'text-emerald-400' : 'text-slate-400'}`}>{c.gp}%</td>
                    <td className="py-2 text-emerald-400 text-xs">{c.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* New Logo Targets */}
        <section className="bg-red-900/20 rounded-xl p-6 mb-8 border border-red-500/30">
          <h2 className="text-xl font-bold text-white mb-4">🎯 New Logo Targets — 19 Major Boston Biotechs</h2>
          <p className="text-slate-400 text-sm mb-4">Companies NOT in our system. Require net-new MSA.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newLogoTargets.map((t) => (
              <TargetCard key={t.name} {...t} />
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/50">
          <h2 className="text-xl font-bold text-white mb-4">📊 Complete Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-2">Active (18)</h3>
              <p className="text-slate-300 text-sm">Generating revenue now. Focus: margin recovery (Takeda, Genmab) + expansion (Moderna, Praxis)</p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Dormant (24)</h3>
              <p className="text-slate-300 text-sm">$4.2M historical LTV. MSAs exist. Week 1 outreach: Accumulus, Genmab US, Dyne, Precision Bio</p>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-2">New Logos (19)</h3>
              <p className="text-slate-300 text-sm">Net-new targets. Priority: Vertex, Biogen, Sarepta. Wedge: gene therapy QA, AI governance</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, highlight }: { title: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-xs">{title}</p>
      <p className={`text-2xl font-bold ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
      <p className="text-emerald-400 text-xs">{trend}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Star: 'bg-emerald-900/30 text-emerald-400 border-emerald-700/30',
    Fix: 'bg-red-900/30 text-red-400 border-red-700/30',
    Grow: 'bg-blue-900/30 text-blue-400 border-blue-700/30',
    Expand: 'bg-purple-900/30 text-purple-400 border-purple-700/30',
    Watch: 'bg-yellow-900/30 text-yellow-400 border-yellow-700/30',
  };
  return <span className={`text-xs px-2 py-0.5 rounded border ${styles[status] || 'bg-slate-700 text-slate-400'}`}>{status}</span>;
}

function TargetCard({ name, hq, size, focus, priority, wedge }: { name: string; hq: string; size: string; focus: string; priority: string; wedge: string }) {
  const priorityStyles: Record<string, string> = {
    critical: 'border-red-500/50 bg-red-900/20',
    high: 'border-yellow-500/50 bg-yellow-900/10',
    medium: 'border-slate-600 bg-slate-800/50',
  };
  return (
    <div className={`rounded-lg p-3 border ${priorityStyles[priority]}`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-white text-sm">{name}</h3>
        <span className={`text-xs px-1.5 py-0.5 rounded ${priority === 'critical' ? 'bg-red-900/50 text-red-400' : priority === 'high' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-slate-700 text-slate-400'}`}>{priority}</span>
      </div>
      <p className="text-slate-500 text-xs">{hq} • {size}</p>
      <p className="text-slate-400 text-xs">{focus}</p>
      <p className="text-emerald-400 text-xs mt-1">→ {wedge}</p>
    </div>
  );
}
