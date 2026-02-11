'use client';

import Link from 'next/link';
import { useState } from 'react';

// ==================== 13 BIGGEST BIOTECH COMPANIES IN BOSTON ====================
// Source: WeWillCure, Built In Boston, MassBio, company filings

type Company = {
  name: string;
  hq: string;
  employees: string;
  marketCap: string;
  focus: string;
  pipeline: string;
  recentNews: string;
  usdmFit: 'HIGH' | 'MEDIUM' | 'LOW';
  usdmRationale: string;
  tier: 'commercial' | 'phase3' | 'phase2' | 'platform' | 'emerging';
  website?: string;
};

const companies: Company[] = [
  // TIER 1: Commercial Giants
  {
    name: 'Vertex Pharmaceuticals',
    hq: 'Boston (Seaport)',
    employees: '5,000+',
    marketCap: '$120B+',
    focus: 'Cystic Fibrosis, Pain, Gene Editing',
    pipeline: 'Suzetrigine (pain) launching, Casgevy (CRISPR) scaling, $10B+ cash for acquisitions',
    recentNews: 'UK approval for Casgevy, acquired Alpine Immune Sciences, Suzetrigine FDA approval expected Q1 2026',
    usdmFit: 'HIGH',
    usdmRationale: 'Gene therapy QA, cloud validation, acquisition integration consulting',
    tier: 'commercial',
  },
  {
    name: 'Biogen',
    hq: 'Cambridge',
    employees: '7,500+',
    marketCap: '$25B',
    focus: 'Neurology (MS, Alzheimer\'s, ALS)',
    pipeline: 'Leqembi (Alzheimer\'s) full EU approval, BIIB080 (tau), gene therapy programs',
    recentNews: 'Major restructuring 2025-2026, cost cuts driving outsourcing, acquired immune disorder program',
    usdmFit: 'HIGH',
    usdmRationale: 'Restructuring = managed services opportunity, validation outsourcing',
    tier: 'commercial',
  },
  {
    name: 'Moderna',
    hq: 'Cambridge (Kendall Square)',
    employees: '4,500+',
    marketCap: '$15B',
    focus: 'mRNA Vaccines & Therapeutics',
    pipeline: 'Diversifying beyond COVID — flu, RSV, cancer vaccines, rare disease programs',
    recentNews: 'Blackstone investment to advance pipeline, manufacturing efficiency focus',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Large scale player with established vendor relationships, competitive bidding',
    tier: 'commercial',
  },
  {
    name: 'Alnylam Pharmaceuticals',
    hq: 'Cambridge',
    employees: '2,500+',
    marketCap: '$30B',
    focus: 'RNAi Therapeutics for Rare Diseases',
    pipeline: 'Amvuttra (ATTR), Onpattro, expanding into cardiometabolic diseases',
    recentNews: 'FDA approval for Amvuttra, HELIOS-B trial success, leader in RNA interference',
    usdmFit: 'HIGH',
    usdmRationale: 'Complex RNA manufacturing, GxP needs, quality systems',
    tier: 'commercial',
  },
  {
    name: 'Sarepta Therapeutics',
    hq: 'Cambridge',
    employees: '2,200+',
    marketCap: '$12B',
    focus: 'Gene Therapy for DMD',
    pipeline: 'Elevidys (gene therapy) $250M+ quarterly, global rollout, next-gen programs',
    recentNews: 'Expanded FDA approval, commercial ramp accelerating, long-term efficacy data pending',
    usdmFit: 'HIGH',
    usdmRationale: 'Gene therapy QA expertise critical, manufacturing scale challenges',
    tier: 'commercial',
  },
  {
    name: 'Ginkgo Bioworks',
    hq: 'Boston (Seaport)',
    employees: '1,000+',
    marketCap: '$3B',
    focus: 'Synthetic Biology Platform',
    pipeline: 'Cell programming platform for pharma, agriculture, industrial bio',
    recentNews: 'Biosecurity division growth, government contracts, platform partnerships',
    usdmFit: 'HIGH',
    usdmRationale: 'Novel platform = novel QA needs, biosecurity compliance',
    tier: 'commercial',
  },
  {
    name: 'Agios Pharmaceuticals',
    hq: 'Cambridge',
    employees: '500+',
    marketCap: '$3B',
    focus: 'Rare Disease (PKD, Thalassemia)',
    pipeline: 'Pyrukynd (PKD) commercial, Phase 3 in Thalassemia expected 2026',
    recentNews: 'Transitioning to commercial leader, thalassemia data critical',
    usdmFit: 'HIGH',
    usdmRationale: 'Scale-up consulting, commercial launch support',
    tier: 'commercial',
  },

  // TIER 2: Phase 3 Contenders
  {
    name: 'Intellia Therapeutics',
    hq: 'Cambridge',
    employees: '800+',
    marketCap: '$4B',
    focus: 'In-vivo CRISPR Gene Editing',
    pipeline: 'NTLA-2001 (ATTR) — first-ever permanent fix if successful, pivotal trials 2026',
    recentNews: 'Critical 18 months ahead, breakthrough therapy designation',
    usdmFit: 'HIGH',
    usdmRationale: 'CRISPR pioneer needs deep validation expertise',
    tier: 'phase3',
  },
  {
    name: 'Beam Therapeutics',
    hq: 'Cambridge',
    employees: '600+',
    marketCap: '$2B',
    focus: 'Base Editing (next-gen CRISPR)',
    pipeline: 'BEAM-101 (SCD) late-stage, BEAM-201 (leukemia) expanding',
    recentNews: 'Moving to late-stage trials, represents next generation after first CRISPR wave',
    usdmFit: 'HIGH',
    usdmRationale: 'Novel modality = premium QA rates, cell/gene expertise',
    tier: 'phase3',
  },
  {
    name: 'Karuna Therapeutics (BMS)',
    hq: 'Boston/Somerville',
    employees: 'Integrated',
    marketCap: 'Acquired',
    focus: 'Schizophrenia (KarXT)',
    pipeline: 'KarXT — first new class of schizophrenia drug in decades, multi-billion potential',
    recentNews: 'Acquired by BMS, commercial launch underway',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Now BMS integration path, reduced autonomy',
    tier: 'phase3',
  },
  {
    name: 'Karyopharm Therapeutics',
    hq: 'Newton',
    employees: '350+',
    marketCap: '$500M',
    focus: 'Oncology (Selinexor)',
    pipeline: 'Phase 3 SENTRY (myelofibrosis) March 2026, endometrial cancer mid-2026',
    recentNews: 'Enrollment completed, pivotal data imminent',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Commercial prep services, regulatory support',
    tier: 'phase3',
  },
  {
    name: 'Wave Life Sciences',
    hq: 'Cambridge',
    employees: '400+',
    marketCap: '$1B',
    focus: 'RNA Therapeutics (DMD, HD)',
    pipeline: 'WVE-N531 (DMD) — seeking accelerated FDA approval 2026',
    recentNews: 'Positive trial results, fast-track designation',
    usdmFit: 'HIGH',
    usdmRationale: 'RNA/gene therapy manufacturing expertise',
    tier: 'phase3',
  },
  {
    name: 'Apellis Pharmaceuticals',
    hq: 'Waltham',
    employees: '900+',
    marketCap: '$6B',
    focus: 'Complement Therapies',
    pipeline: 'Syfovre (GA) label expansion, systemic rare disease Phase 3s',
    recentNews: 'Geographic Atrophy market leader, expanding indications',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Manufacturing QA, commercial expansion',
    tier: 'phase3',
  },

  // TIER 3: Phase 2 Innovators
  {
    name: 'Prime Medicine',
    hq: 'Cambridge',
    employees: '250+',
    marketCap: '$800M',
    focus: 'Prime Editing (Search & Replace)',
    pipeline: 'First human data 2025-2026, liver and blood disorders',
    recentNews: 'First-in-human data validates next decade, flagship gene editing',
    usdmFit: 'HIGH',
    usdmRationale: 'Novel modality QA needs, early relationship building',
    tier: 'phase2',
  },
  {
    name: 'Generate:Biomedicines',
    hq: 'Somerville',
    employees: '200+',
    marketCap: 'Private ($1.5B raised)',
    focus: 'AI-Designed Proteins',
    pipeline: 'AI-validated clinical data expected 2026, multiple programs',
    recentNews: 'Flagship Pioneering company, generative AI for drug design',
    usdmFit: 'HIGH',
    usdmRationale: 'AI governance + validation — major differentiator',
    tier: 'phase2',
  },
  {
    name: 'Editas Medicine',
    hq: 'Cambridge',
    employees: '350+',
    marketCap: '$400M',
    focus: 'CRISPR Gene Editing',
    pipeline: 'EDIT-401 (cholesterol) human trials mid-2026, data EOY 2026',
    recentNews: 'Pivoting after setbacks, new focus on in-vivo programs',
    usdmFit: 'HIGH',
    usdmRationale: 'Gene editing pioneer needs validation support',
    tier: 'phase2',
  },
  {
    name: 'Life Biosciences',
    hq: 'Cambridge',
    employees: '100+',
    marketCap: 'Private',
    focus: 'Cellular Rejuvenation',
    pipeline: 'ER-100 (optic neuropathies) Phase 1 early 2026 — anti-aging gene therapy',
    recentNews: 'FDA clearance for first-in-human, David Sinclair research',
    usdmFit: 'HIGH',
    usdmRationale: 'Novel gene therapy QA, early-stage relationship',
    tier: 'phase2',
  },
  {
    name: 'Tessera Therapeutics',
    hq: 'Cambridge',
    employees: '262',
    marketCap: 'Private ($500M+ raised)',
    focus: 'Gene Writing',
    pipeline: 'Novel gene writing platform, multiple early programs',
    recentNews: 'Mission to "write the code of life", platform advancement',
    usdmFit: 'HIGH',
    usdmRationale: 'Novel modality, early validation framework needs',
    tier: 'phase2',
  },

  // TIER 4: Platform Companies
  {
    name: 'Benchling',
    hq: 'San Francisco/Boston',
    employees: '700+',
    marketCap: 'Private ($6B valuation)',
    focus: 'R&D Cloud Platform',
    pipeline: 'SaaS platform used by 1000+ biotech companies',
    recentNews: 'Industry standard for biotech R&D data management',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Partner opportunity — Benchling + USDM validation services',
    tier: 'platform',
  },
  {
    name: 'Tempus',
    hq: 'Chicago/Boston',
    employees: '2,500+',
    marketCap: '$6B (IPO 2024)',
    focus: 'AI + Precision Medicine',
    pipeline: '8M+ de-identified records, 350+ petabytes, AI matching',
    recentNews: 'Leading AI-driven precision medicine, clinical partnerships',
    usdmFit: 'MEDIUM',
    usdmRationale: 'AI governance consulting, data validation',
    tier: 'platform',
  },
  {
    name: 'Valo Health',
    hq: 'Boston',
    employees: '400+',
    marketCap: 'Private',
    focus: 'AI Drug Discovery',
    pipeline: 'Opal Computational Platform, integrated drug development',
    recentNews: 'AI-first drug discovery, reducing cost and time',
    usdmFit: 'HIGH',
    usdmRationale: 'AI governance gap, model validation needs',
    tier: 'platform',
  },
  {
    name: 'Schrödinger',
    hq: 'New York/Cambridge',
    employees: '900+',
    marketCap: '$2B',
    focus: 'Computational Drug Discovery',
    pipeline: 'Molecular simulation platform + internal pipeline',
    recentNews: 'Industry-leading computational chemistry',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Computational validation, GxP consulting',
    tier: 'platform',
  },

  // TIER 5: Emerging/Specialty
  {
    name: 'eGenesis',
    hq: 'Cambridge',
    employees: '97',
    marketCap: 'Private ($300M+ raised)',
    focus: 'Xenotransplantation',
    pipeline: 'Gene-edited pig organs for human transplant',
    recentNews: 'First successful xenotransplants, solving organ crisis',
    usdmFit: 'HIGH',
    usdmRationale: 'Novel regulatory path, unique QA needs',
    tier: 'emerging',
  },
  {
    name: 'Verve Therapeutics',
    hq: 'Boston',
    employees: '284',
    marketCap: '$800M',
    focus: 'Gene Editing for Heart Disease',
    pipeline: 'VERVE-101 (PCSK9) — one-time treatment for cholesterol',
    recentNews: 'First in-vivo gene editing for heart disease',
    usdmFit: 'HIGH',
    usdmRationale: 'CRISPR expertise, cardiovascular validation',
    tier: 'emerging',
  },
  {
    name: 'Praxis Precision Medicines',
    hq: 'Boston',
    employees: '160',
    marketCap: '$200M',
    focus: 'Genetic Neuroscience',
    pipeline: 'Neuronal imbalance disorders, rare epilepsies',
    recentNews: 'Era of genetic neuroscience, precision CNS treatments',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Emerging company, regulatory support',
    tier: 'emerging',
  },
  {
    name: 'Click Therapeutics',
    hq: 'New York/Boston',
    employees: '200+',
    marketCap: 'Private',
    focus: 'Digital Therapeutics',
    pipeline: 'FDA-regulated prescription software treatments',
    recentNews: 'Leading Digital Therapeutics innovator',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Software validation, FDA SaMD expertise',
    tier: 'emerging',
  },
  {
    name: 'SOPHiA GENETICS',
    hq: 'Switzerland/Boston',
    employees: '500+',
    marketCap: '$300M',
    focus: 'Data-Driven Medicine Platform',
    pipeline: 'SOPHiA DDM Platform — multimodal clinical data analysis',
    recentNews: 'Democratizing data-driven medicine',
    usdmFit: 'MEDIUM',
    usdmRationale: 'Cloud validation, AI governance',
    tier: 'platform',
  },
];

const tierLabels: Record<string, { label: string; color: string; description: string }> = {
  commercial: { label: '🏆 Commercial Giants', color: 'emerald', description: 'Profitable with marketed products' },
  phase3: { label: '🏁 Phase 3 Contenders', color: 'blue', description: 'Pivotal trials, potential approval 2026' },
  phase2: { label: '🚀 Phase 2 Innovators', color: 'purple', description: 'High-alpha, acquisition targets' },
  platform: { label: '🔧 Platform Companies', color: 'yellow', description: 'Enabling technologies' },
  emerging: { label: '✨ Emerging Specialty', color: 'pink', description: 'Novel approaches, high potential' },
};

export default function CompanyProfilesPage() {
  const [filterTier, setFilterTier] = useState<string>('all');
  const [filterFit, setFilterFit] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companies.filter(c => {
    if (filterTier !== 'all' && c.tier !== filterTier) return false;
    if (filterFit !== 'all' && c.usdmFit !== filterFit) return false;
    if (searchTerm && !c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !c.focus.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const highFitCount = companies.filter(c => c.usdmFit === 'HIGH').length;
  const totalEmployees = companies.reduce((sum, c) => {
    const num = parseInt(c.employees.replace(/[^0-9]/g, '')) || 0;
    return sum + num;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Boston Biotech Company Profiles</h1>
        <p className="text-emerald-400 text-xl mb-2">The 25+ Biggest & Most Promising Companies</p>
        <p className="text-slate-400 mb-8">Comprehensive profiles with USDM fit scores, pipeline status, and recent news</p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <StatCard title="Companies Profiled" value={companies.length.toString()} />
          <StatCard title="HIGH USDM Fit" value={highFitCount.toString()} highlight />
          <StatCard title="Combined Employees" value={`${Math.round(totalEmployees / 1000)}K+`} />
          <StatCard title="Commercial Stage" value={companies.filter(c => c.tier === 'commercial').length.toString()} />
          <StatCard title="Phase 2/3" value={companies.filter(c => c.tier === 'phase2' || c.tier === 'phase3').length.toString()} />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <label className="text-slate-400 text-sm block mb-1">Stage</label>
            <select
              value={filterTier}
              onChange={(e) => setFilterTier(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            >
              <option value="all">All Stages</option>
              <option value="commercial">Commercial Giants</option>
              <option value="phase3">Phase 3</option>
              <option value="phase2">Phase 2</option>
              <option value="platform">Platform</option>
              <option value="emerging">Emerging</option>
            </select>
          </div>
          <div>
            <label className="text-slate-400 text-sm block mb-1">USDM Fit</label>
            <select
              value={filterFit}
              onChange={(e) => setFilterFit(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            >
              <option value="all">All</option>
              <option value="HIGH">HIGH Only</option>
              <option value="MEDIUM">MEDIUM Only</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="text-slate-400 text-sm block mb-1">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search company or focus area..."
              className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-500"
            />
          </div>
        </div>

        {/* Results count */}
        <p className="text-slate-400 text-sm mb-6">
          Showing {filteredCompanies.length} of {companies.length} companies
        </p>

        {/* Company Cards by Tier */}
        {['commercial', 'phase3', 'phase2', 'platform', 'emerging'].map(tier => {
          const tierCompanies = filteredCompanies.filter(c => c.tier === tier);
          if (tierCompanies.length === 0) return null;
          const tierInfo = tierLabels[tier];

          return (
            <section key={tier} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">{tierInfo.label}</h2>
                <span className="text-slate-500 text-sm">— {tierInfo.description}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {tierCompanies.map((company, i) => (
                  <CompanyCard key={i} company={company} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Key Sources */}
        <section className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700">
          <h2 className="text-lg font-bold text-white mb-4">📚 Sources</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-400">
            <div>
              <p className="font-medium text-slate-300 mb-2">Company Research</p>
              <ul className="space-y-1">
                <li>• WeWillCure: 13 Biggest Biotech Companies in Boston</li>
                <li>• Built In Boston: Top Biotech Companies 2026</li>
                <li>• MassBio: 2025 Industry Snapshot</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-slate-300 mb-2">Market Data</p>
              <ul className="space-y-1">
                <li>• Company SEC filings and press releases</li>
                <li>• ClinicalTrials.gov pipeline data</li>
                <li>• Fierce Biotech funding tracker</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4">Updated February 2026. Market caps and employee counts are estimates.</p>
        </section>
      </div>
    </div>
  );
}

function CompanyCard({ company }: { company: Company }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-white text-lg">{company.name}</h3>
          <p className="text-slate-400 text-sm">{company.hq}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded font-medium ${
          company.usdmFit === 'HIGH' ? 'bg-emerald-900/50 text-emerald-400' :
          company.usdmFit === 'MEDIUM' ? 'bg-yellow-900/50 text-yellow-400' :
          'bg-slate-700 text-slate-400'
        }`}>
          {company.usdmFit} FIT
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">{company.employees} employees</span>
        <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">{company.marketCap}</span>
      </div>

      <p className="text-emerald-400 text-sm font-medium mb-2">{company.focus}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-slate-400 text-sm hover:text-white transition-colors"
      >
        {expanded ? '▼ Less details' : '▶ More details'}
      </button>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-700 space-y-3">
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1">Pipeline</p>
            <p className="text-slate-300 text-sm">{company.pipeline}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1">Recent News</p>
            <p className="text-slate-300 text-sm">{company.recentNews}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1">USDM Opportunity</p>
            <p className="text-emerald-400 text-sm">{company.usdmRationale}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, highlight }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-xs">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
    </div>
  );
}
