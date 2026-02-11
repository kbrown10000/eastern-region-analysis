'use client';

import Link from 'next/link';

// Current customers - from Finance MCP
const currentCustomers = [
  { name: 'Takeda Pharmaceuticals', revenue: 702000, gp: 14.5, tier: 'Enterprise', status: 'Fix', notes: 'Largest account, margin recovery needed' },
  { name: 'Harmony Biosciences', revenue: 127000, gp: 81.6, tier: 'Growth', status: 'Star', notes: 'Managed services, expand SOX' },
  { name: 'Alnylam Pharmaceuticals', revenue: 110000, gp: 71.5, tier: 'Growth', status: 'Star', notes: 'RNAi leader, mfg QA' },
  { name: 'Astellas Pharma U.S.', revenue: 111000, gp: 100, tier: 'Growth', status: 'Star', notes: 'New in 2025, 100% GP' },
  { name: 'Ironwood Pharmaceuticals', revenue: 102000, gp: 79.1, tier: 'Growth', status: 'Star', notes: 'GI franchise, +94% YoY' },
  { name: 'Astellas Gene Therapies', revenue: 93000, gp: 40.2, tier: 'Growth', status: 'Grow', notes: 'Gene therapy QA' },
  { name: 'Moderna', revenue: 37000, gp: 92.8, tier: 'Standard', status: 'Expand', notes: 'Massive expansion potential' },
  { name: 'Intellia Therapeutics', revenue: 37000, gp: 96.6, tier: 'Growth', status: 'Star', notes: 'CRISPR leader' },
  { name: 'Alexion Pharmaceuticals', revenue: 34000, gp: 100, tier: 'Standard', status: 'Star', notes: 'Rare disease' },
];

// Major Boston biotechs - NOT current customers (prospective)
const majorBiotechs = [
  { name: 'Vertex Pharmaceuticals', hq: 'Boston', size: '$8.9B revenue', focus: 'Gene editing, CF, pain', funding: 'Public (VRTX)', priority: 'critical', wedge: 'Casgevy manufacturing QA, CRISPR validation' },
  { name: 'Biogen', hq: 'Cambridge', size: '$9.8B revenue', focus: 'Neurodegeneration, MS', funding: 'Public (BIIB)', priority: 'critical', wedge: 'AI drug discovery validation, Leqembi manufacturing' },
  { name: 'Sarepta Therapeutics', hq: 'Cambridge', size: '$1.8B revenue', focus: 'Gene therapy (DMD)', funding: 'Public (SRPT)', priority: 'critical', wedge: 'Elevidys manufacturing QA, gene therapy compliance' },
  { name: 'Regeneron (Boston hub)', hq: 'Cambridge', size: '$13B revenue', focus: 'Biologics, mAbs', funding: 'Public (REGN)', priority: 'high', wedge: 'Manufacturing validation, AI governance' },
  { name: 'Blueprint Medicines', hq: 'Cambridge', size: '$500M+ revenue', focus: 'Precision kinase inhibitors', funding: 'Public (BPMC)', priority: 'high', wedge: 'Mast cell therapies, cloud assurance' },
  { name: 'Bluebird Bio', hq: 'Somerville', size: '$100M revenue', focus: 'Gene therapy (SCD, TDT)', funding: 'Public (BLUE)', priority: 'high', wedge: 'Lyfgenia manufacturing, cell therapy QA' },
  { name: 'CRISPR Therapeutics', hq: 'Cambridge', size: '$100M revenue', focus: 'Gene editing', funding: 'Public (CRSP)', priority: 'high', wedge: 'Casgevy (with Vertex), ex-vivo manufacturing' },
  { name: 'Editas Medicine', hq: 'Cambridge', size: 'Pre-revenue', focus: 'In vivo CRISPR', funding: 'Public (EDIT)', priority: 'medium', wedge: 'EDIT-101 clinical trials, GMP validation' },
];

// High-growth startups with recent funding
const hotStartups = [
  { name: 'Kriya Therapeutics', hq: 'Cambridge/Redwood City', funding: '$270M total', stage: 'Series B', focus: 'Gene therapy platform', lastRound: '2025', wedge: 'GMP manufacturing validation' },
  { name: 'Senti Biosciences', hq: 'Cambridge', funding: '$230M total', stage: 'Series C ($105M)', focus: 'Gene circuit therapies', lastRound: '2025', wedge: 'Cell therapy QA, AI-designed circuits' },
  { name: 'AIRNA Biosciences', hq: 'Cambridge', funding: '$155M', stage: 'Series B', focus: 'RNA editing (ADAR)', lastRound: '2025', wedge: 'RNA therapeutics validation' },
  { name: 'Dyne Therapeutics', hq: 'Waltham', funding: '$400M+ raised', stage: 'Public (DYN)', focus: 'Muscle diseases', lastRound: 'Dormant customer', wedge: 'Gene therapy manufacturing - REACTIVATE' },
  { name: 'Generation Bio', hq: 'Cambridge', funding: '$500M+ raised', stage: 'Public (GBIO)', focus: 'Non-viral gene therapy', lastRound: '2024', wedge: 'Novel delivery systems validation' },
  { name: 'Beam Therapeutics', hq: 'Cambridge', funding: '$700M+ raised', stage: 'Public (BEAM)', focus: 'Base editing', lastRound: '2024', wedge: 'CRISPR alternative, precision editing QA' },
  { name: 'Prime Medicine', hq: 'Cambridge', funding: '$315M Series B', stage: 'Public (PRME)', focus: 'Prime editing', lastRound: '2024', wedge: 'Platform validation, GMP readiness' },
  { name: 'Tessera Therapeutics', hq: 'Cambridge', funding: '$350M+', stage: 'Private', focus: 'Gene writing', lastRound: '2023', wedge: 'Novel gene editing platform validation' },
  { name: 'eGenesis', hq: 'Cambridge', funding: '$300M+', stage: 'Private', focus: 'Xenotransplantation', lastRound: '2024', wedge: 'Organ manufacturing QA, FDA pathway' },
  { name: 'Verve Therapeutics', hq: 'Boston', funding: '$400M+', stage: 'Public (VERV)', focus: 'Cardiovascular gene editing', lastRound: '2024', wedge: 'In vivo gene editing validation' },
];

// AI/ML drug discovery - hot segment
const aiDrugDiscovery = [
  { name: 'Tempus', hq: 'Boston office', funding: '$1.3B+', focus: 'AI precision medicine', wedge: 'AI validation, data governance' },
  { name: 'Schrödinger', hq: 'Cambridge office', funding: 'Public (SDGR)', focus: 'Computational drug discovery', wedge: 'AI/ML model validation' },
  { name: 'Valo Health', hq: 'Boston', funding: '$700M+', focus: 'AI-powered drug dev', wedge: 'Opal platform validation, AI governance' },
  { name: 'Insilico Medicine', hq: 'Cambridge office', funding: '$400M+', focus: 'AI drug discovery', wedge: 'AI model validation, GxP AI' },
  { name: 'Q-State Biosciences', hq: 'Cambridge', funding: '$50M+', focus: 'AI + human cell models', wedge: 'ML platform validation' },
  { name: 'Converge Bio', hq: 'Boston', funding: '$25M Series A (2026)', focus: 'AI drug discovery', wedge: 'Platform validation, AI governance' },
];

// CDMOs and manufacturing (big opportunity)
const cdmoManufacturing = [
  { name: 'Resilience', hq: 'Watertown', funding: '$800M+', focus: 'Biomanufacturing CDMO', wedge: 'Manufacturing QA, CSV, cloud assurance' },
  { name: 'Catalent (Boston)', hq: 'Burlington', funding: 'Public (CTLT)', focus: 'Cell & gene therapy mfg', wedge: 'GMP validation, batch record systems' },
  { name: 'Thermo Fisher (Waltham)', hq: 'Waltham', funding: 'Public (TMO)', focus: 'Pharma services', wedge: 'Lab systems validation' },
];

// Emerging therapeutic areas
const emergingTherapeutics = [
  { name: 'Praxis Precision Medicines', hq: 'Boston', funding: '$400M+', stage: 'Clinical', focus: 'Neurological disorders', wedge: 'Gene editing neurotherapies' },
  { name: 'Pretzel Therapeutics', hq: 'Boston', funding: '$70M+', stage: 'Early', focus: 'Mitochondrial diseases', wedge: 'Rare disease QA' },
  { name: 'Arkuda Therapeutics', hq: 'Watertown', funding: '$80M+', stage: 'Early', focus: 'Neurodegeneration', wedge: 'Progranulin therapeutics' },
  { name: 'Ardelyx', hq: 'Waltham', funding: 'Public (ARDX)', stage: 'Commercial', focus: 'GI/Renal disorders', wedge: 'Commercial manufacturing QA' },
  { name: 'Click Therapeutics', hq: 'Boston office', funding: '$250M+', stage: 'Clinical', focus: 'Digital therapeutics', wedge: 'SaMD validation, FDA 21 CFR Part 11' },
  { name: 'Treeline Biosciences', hq: 'Watertown', funding: '$200M+', stage: 'Clinical', focus: 'Precision oncology', wedge: 'Clinical trial systems' },
];

const totalProspects = majorBiotechs.length + hotStartups.length + aiDrugDiscovery.length + cdmoManufacturing.length + emergingTherapeutics.length;

export default function TargetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Boston Target Accounts</h1>
        <p className="text-emerald-400 text-xl mb-8">Comprehensive Account List — Current + Prospective</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <StatCard title="Current Customers" value="9" trend="Active revenue" />
          <StatCard title="Major Biotechs" value="8" trend="$30B+ combined" highlight />
          <StatCard title="Hot Startups" value="10" trend="$2B+ funding" />
          <StatCard title="AI/Drug Discovery" value="6" trend="Emerging segment" />
          <StatCard title="Total Prospects" value={totalProspects.toString()} trend="New logo targets" />
        </div>

        {/* Current Customers */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">✅ Current Customers (9 accounts, $1.35M)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-2 text-slate-400">Account</th>
                  <th className="py-2 text-slate-400 text-right">2025 Revenue</th>
                  <th className="py-2 text-slate-400 text-right">GP%</th>
                  <th className="py-2 text-slate-400">Tier</th>
                  <th className="py-2 text-slate-400">Status</th>
                  <th className="py-2 text-slate-400">Expansion Play</th>
                </tr>
              </thead>
              <tbody>
                {currentCustomers.map((c) => (
                  <tr key={c.name} className="border-b border-slate-700">
                    <td className="py-2 font-medium text-white">{c.name}</td>
                    <td className="py-2 text-right text-slate-300">${(c.revenue / 1000).toFixed(0)}K</td>
                    <td className={`py-2 text-right ${c.gp >= 50 ? 'text-emerald-400' : 'text-red-400'}`}>{c.gp}%</td>
                    <td className="py-2 text-slate-400">{c.tier}</td>
                    <td className="py-2">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="py-2 text-slate-400 text-xs">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Major Biotechs */}
        <section className="bg-red-900/20 rounded-xl p-6 mb-8 border border-red-500/30">
          <h2 className="text-xl font-bold text-white mb-2">🎯 Major Biotechs — High Priority New Logos</h2>
          <p className="text-slate-400 text-sm mb-4">Large established companies with budget. These are the "whale" accounts.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {majorBiotechs.map((b) => (
              <TargetCard key={b.name} {...b} />
            ))}
          </div>
        </section>

        {/* Hot Startups */}
        <section className="bg-emerald-900/20 rounded-xl p-6 mb-8 border border-emerald-500/30">
          <h2 className="text-xl font-bold text-white mb-2">🚀 Hot Startups with Recent Funding</h2>
          <p className="text-slate-400 text-sm mb-4">Well-funded companies with fresh capital. Moving fast, need quality support.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {hotStartups.map((s) => (
              <StartupCard key={s.name} {...s} />
            ))}
          </div>
        </section>

        {/* AI Drug Discovery */}
        <section className="bg-blue-900/20 rounded-xl p-6 mb-8 border border-blue-500/30">
          <h2 className="text-xl font-bold text-white mb-2">🤖 AI Drug Discovery — Emerging Segment</h2>
          <p className="text-slate-400 text-sm mb-4">AI governance is our unique differentiator. These companies NEED help validating AI/ML systems.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {aiDrugDiscovery.map((a) => (
              <AICard key={a.name} {...a} />
            ))}
          </div>
        </section>

        {/* CDMO Manufacturing */}
        <section className="bg-purple-900/20 rounded-xl p-6 mb-8 border border-purple-500/30">
          <h2 className="text-xl font-bold text-white mb-2">🏭 CDMO / Manufacturing</h2>
          <p className="text-slate-400 text-sm mb-4">Manufacturing expansion = CSV and cloud assurance opportunities.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {cdmoManufacturing.map((c) => (
              <CDMOCard key={c.name} {...c} />
            ))}
          </div>
        </section>

        {/* Emerging Therapeutics */}
        <section className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-2">💊 Emerging Therapeutic Companies</h2>
          <p className="text-slate-400 text-sm mb-4">Diverse therapeutic areas with clinical programs.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {emergingTherapeutics.map((e) => (
              <EmergingCard key={e.name} {...e} />
            ))}
          </div>
        </section>

        {/* Summary Stats */}
        <section className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/50">
          <h2 className="text-xl font-bold text-white mb-4">📊 Target Summary</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">{totalProspects + 9}</p>
              <p className="text-slate-400 text-sm">Total Accounts</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$50B+</p>
              <p className="text-slate-400 text-sm">Combined Market Cap</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">$5B+</p>
              <p className="text-slate-400 text-sm">VC Funding (startups)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">3</p>
              <p className="text-slate-400 text-sm">Critical Priority Targets</p>
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
  };
  return <span className={`text-xs px-2 py-0.5 rounded border ${styles[status] || ''}`}>{status}</span>;
}

function TargetCard({ name, hq, size, focus, priority, wedge }: { name: string; hq: string; size: string; focus: string; priority: string; wedge: string }) {
  const priorityStyles: Record<string, string> = {
    critical: 'border-red-500/50',
    high: 'border-yellow-500/50',
    medium: 'border-slate-600',
  };
  return (
    <div className={`bg-slate-800/50 rounded-lg p-4 border ${priorityStyles[priority]}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded ${priority === 'critical' ? 'bg-red-900/30 text-red-400' : priority === 'high' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-slate-700 text-slate-400'}`}>{priority}</span>
      </div>
      <p className="text-slate-500 text-xs">{hq} • {size}</p>
      <p className="text-slate-400 text-sm mt-1">{focus}</p>
      <p className="text-emerald-400 text-xs mt-2">→ {wedge}</p>
    </div>
  );
}

function StartupCard({ name, hq, funding, stage, focus, wedge }: { name: string; hq: string; funding: string; stage: string; focus: string; lastRound: string; wedge: string }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-700/30">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded">{stage}</span>
      </div>
      <p className="text-slate-500 text-xs">{hq} • {funding}</p>
      <p className="text-slate-400 text-sm mt-1">{focus}</p>
      <p className="text-emerald-400 text-xs mt-2">→ {wedge}</p>
    </div>
  );
}

function AICard({ name, hq, funding, focus, wedge }: { name: string; hq: string; funding: string; focus: string; wedge: string }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-700/30">
      <h3 className="font-semibold text-white text-sm">{name}</h3>
      <p className="text-slate-500 text-xs">{hq}</p>
      <p className="text-blue-400 text-xs">{funding}</p>
      <p className="text-slate-400 text-xs mt-1">{focus}</p>
      <p className="text-emerald-400 text-xs mt-1">→ {wedge}</p>
    </div>
  );
}

function CDMOCard({ name, hq, funding, focus, wedge }: { name: string; hq: string; funding: string; focus: string; wedge: string }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-3 border border-purple-700/30">
      <h3 className="font-semibold text-white text-sm">{name}</h3>
      <p className="text-slate-500 text-xs">{hq} • {funding}</p>
      <p className="text-slate-400 text-xs mt-1">{focus}</p>
      <p className="text-emerald-400 text-xs mt-1">→ {wedge}</p>
    </div>
  );
}

function EmergingCard({ name, hq, funding, stage, focus, wedge }: { name: string; hq: string; funding: string; stage: string; focus: string; wedge: string }) {
  return (
    <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600">
      <h3 className="font-semibold text-white text-sm">{name}</h3>
      <p className="text-slate-500 text-xs">{hq} • {stage}</p>
      <p className="text-slate-400 text-xs">{funding}</p>
      <p className="text-slate-400 text-xs mt-1">{focus}</p>
      <p className="text-emerald-400 text-xs mt-1">→ {wedge}</p>
    </div>
  );
}
