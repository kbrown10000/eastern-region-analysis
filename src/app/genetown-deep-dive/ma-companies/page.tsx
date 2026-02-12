'use client';

import Link from 'next/link';
import { useState } from 'react';

// Comprehensive MA Life Sciences Companies Database
const companies = [
  // === TIER 1: ACTIVE REVENUE (Salesforce Verified) ===
  { name: 'Takeda Pharmaceuticals', location: 'Cambridge', tier: 'active', revenue2025: 702000, gp: 14.5, ltv: 1220000, pipeline: 450000, status: 'margin-fix', focus: 'Pharma - Oncology, GI, Neuroscience', employees: '49,000+', marketCap: '$47B' },
  { name: 'Harmony Biosciences', location: 'Various', tier: 'active', revenue2025: 127000, gp: 81.6, ltv: 400000, pipeline: 125000, status: 'star', focus: 'Neurology - Narcolepsy', employees: '500+', marketCap: '$5B' },
  { name: 'Alnylam Pharmaceuticals', location: 'Cambridge', tier: 'active', revenue2025: 110000, gp: 71.5, ltv: 251000, pipeline: 205000, status: 'grow', focus: 'RNAi Therapeutics', employees: '2,400+', marketCap: '$30B' },
  { name: 'Ironwood Pharmaceuticals', location: 'Boston', tier: 'active', revenue2025: 102000, gp: 79.1, ltv: 200000, pipeline: 88000, status: 'star', focus: 'GI - Linaclotide', employees: '200+', marketCap: '$1.5B' },
  { name: 'Praxis Precision Medicines', location: 'Boston', tier: 'active', revenue2025: 97000, gp: 55, ltv: 191000, pipeline: 112000, status: 'clean', focus: 'Neuropsychiatry', employees: '150+', marketCap: '$1B' },
  { name: 'Astellas Gene Therapies', location: 'Cambridge', tier: 'active', revenue2025: 93000, gp: 40.2, ltv: 260000, pipeline: 84000, status: 'grow', focus: 'Gene Therapy', employees: '400+', marketCap: 'Subsidiary' },
  { name: 'Moderna', location: 'Cambridge', tier: 'active', revenue2025: 37000, gp: 92.8, ltv: 102000, pipeline: 387000, status: 'expand', focus: 'mRNA Therapeutics', employees: '5,000+', marketCap: '$15B' },
  { name: 'Intellia Therapeutics', location: 'Cambridge', tier: 'active', revenue2025: 37000, gp: 96.6, ltv: 285000, pipeline: 211000, status: 'competitive', focus: 'CRISPR Gene Editing', employees: '600+', marketCap: '$1.5B' },
  { name: 'Alexion Pharmaceuticals', location: 'Boston', tier: 'active', revenue2025: 34000, gp: 100, ltv: 181000, pipeline: 33000, status: 'star', focus: 'Rare Disease', employees: '3,500+', marketCap: 'AstraZeneca' },
  { name: 'Formation Bio', location: 'Cambridge', tier: 'active', revenue2025: 30000, gp: 27.9, ltv: 140000, pipeline: 145000, status: 'margin-fix', focus: 'AI Drug Development', employees: '200+', marketCap: '$2B' },
  { name: 'Ipsen Pharma', location: 'Cambridge', tier: 'active', revenue2025: 26000, gp: 88.6, ltv: 100000, pipeline: 0, status: 'grow', focus: 'Oncology, Neuroscience', employees: '5,700+', marketCap: '$10B' },
  
  // === TIER 2: DORMANT WITH SALESFORCE HISTORY ===
  { name: 'Biogen', location: 'Cambridge', tier: 'dormant', revenue2025: 0, gp: 0, ltv: 11800000, pipeline: 1000000, status: 'reactivate', focus: 'Neurodegeneration - Alzheimer\'s, MS', employees: '7,500+', marketCap: '$21B', wonDeals: 90, lostDeals: 218 },
  { name: 'Sage Therapeutics', location: 'Cambridge', tier: 'dormant', revenue2025: 0, gp: 0, ltv: 5200000, pipeline: 59000, status: 'monitor', focus: 'CNS - Depression', employees: '600+', marketCap: '$500M', wonDeals: 30, lostDeals: 16 },
  { name: 'argenx', location: 'Boston', tier: 'active', revenue2025: 0, gp: 0, ltv: 4600000, pipeline: 1300000, status: 'expand', focus: 'Autoimmune - Myasthenia Gravis', employees: '1,500+', marketCap: '$35B', wonDeals: 15, lostDeals: 11 },
  { name: 'Hologic', location: 'Marlborough', tier: 'active', revenue2025: 0, gp: 0, ltv: 2400000, pipeline: 290000, status: 'losing-share', focus: 'Women\'s Health Diagnostics', employees: '7,000+', marketCap: '$20B', wonDeals: 21, lostDeals: 34 },
  { name: 'Blueprint Medicines', location: 'Cambridge', tier: 'active', revenue2025: 0, gp: 0, ltv: 892000, pipeline: 162000, status: 'grow', focus: 'Kinase Inhibitors - Mast Cell', employees: '800+', marketCap: '$5B', wonDeals: 13, lostDeals: 22 },
  { name: 'Sarepta Therapeutics', location: 'Cambridge', tier: 'dormant', revenue2025: 0, gp: 0, ltv: 265000, pipeline: 0, status: 'reactivate', focus: 'Gene Therapy - DMD', employees: '3,000+', marketCap: '$7B', wonDeals: 4, lostDeals: 15 },
  { name: 'Dyne Therapeutics', location: 'Waltham', tier: 'dormant', revenue2025: 0, gp: 0, ltv: 149000, pipeline: 0, status: 'reactivate', focus: 'Muscle Disease Gene Therapy', employees: '300+', marketCap: '$2B', wonDeals: 1, lostDeals: 9 },
  { name: 'C4 Therapeutics', location: 'Watertown', tier: 'dormant', revenue2025: 0, gp: 0, ltv: 114000, pipeline: 0, status: 'reactivate', focus: 'Protein Degradation', employees: '200+', marketCap: '$300M', wonDeals: 3, lostDeals: 8 },
  
  // === TIER 3: HOT NEW LOGOS (Research 2026) ===
  { name: 'Vertex Pharmaceuticals', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Gene Editing - Casgevy, CF', employees: '5,000+', marketCap: '$130B', priority: 'critical' },
  { name: 'Kailera Therapeutics', location: 'Waltham', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'GLP-1 Obesity Therapeutics', employees: '100+', marketCap: 'Private', priority: 'high' },
  { name: 'ElevateBio', location: 'Waltham', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Cell & Gene Therapy Platform', employees: '800+', marketCap: 'Private ($1.7B raised)', priority: 'high' },
  { name: 'Beam Therapeutics', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Base Editing', employees: '500+', marketCap: '$1.5B', priority: 'high' },
  { name: 'Prime Medicine', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Prime Editing (CRISPR+)', employees: '250+', marketCap: '$800M', priority: 'medium' },
  { name: 'CRISPR Therapeutics', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Gene Editing - with Vertex', employees: '700+', marketCap: '$3B', priority: 'high' },
  { name: 'Editas Medicine', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'CRISPR In Vivo', employees: '350+', marketCap: '$400M', priority: 'medium' },
  { name: 'Bluebird Bio', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Gene Therapy - Sickle Cell, TDT', employees: '800+', marketCap: '$200M', priority: 'high' },
  { name: 'Ginkgo Bioworks', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Synthetic Biology Platform', employees: '1,000+', marketCap: '$2B', priority: 'medium' },
  { name: 'Delix Therapeutics', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Neuroplastogens - Depression', employees: '80+', marketCap: 'Private ($200M raised)', priority: 'medium' },
  { name: 'Cellarity', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Cell-behavior Drug Discovery', employees: '150+', marketCap: 'Private ($270M raised)', priority: 'medium' },
  { name: 'Ascidian Therapeutics', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'RNA Exon Editing', employees: '80+', marketCap: 'Private ($100M raised)', priority: 'medium' },
  { name: 'Alterome Therapeutics', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Precision Oncology', employees: '60+', marketCap: 'Private ($232M raised)', priority: 'medium' },
  { name: 'Akouos (Eli Lilly)', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Gene Therapy - Hearing Loss', employees: '100+', marketCap: 'Acquired ($610M)', priority: 'medium' },
  { name: 'Life Biosciences', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Age-related Disease', employees: '100+', marketCap: 'Private ($150M raised)', priority: 'low' },
  { name: 'Incendia Therapeutics', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Tumor Microenvironment', employees: '50+', marketCap: 'Private', priority: 'low' },
  { name: 'Kriya Therapeutics', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Gene Therapy Platform', employees: '200+', marketCap: 'Private ($151M Series B)', priority: 'medium' },
  { name: 'Senti Biosciences', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Gene Circuit Therapeutics', employees: '150+', marketCap: 'Private ($105M Series C)', priority: 'medium' },
  { name: 'Kernal Bio', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Cell Therapy', employees: '50+', marketCap: 'YC-backed', priority: 'low' },
  
  // === ADDITIONAL MAJOR MA BIOTECHS ===
  { name: 'Regeneron (MA ops)', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Antibody Therapeutics', employees: '12,000+', marketCap: '$90B', priority: 'critical' },
  { name: 'Novartis (Cambridge hub)', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Pharma - Gene Therapy', employees: '100,000+', marketCap: '$200B', priority: 'high' },
  { name: 'Sanofi (Cambridge hub)', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Pharma - Immunology', employees: '91,000+', marketCap: '$130B', priority: 'high' },
  { name: 'Pfizer (Cambridge hub)', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Pharma - mRNA, Oncology', employees: '88,000+', marketCap: '$150B', priority: 'high' },
  { name: 'AbbVie (Cambridge R&D)', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Immunology, Oncology', employees: '50,000+', marketCap: '$300B', priority: 'high' },
  { name: 'Bristol-Myers Squibb (Cambridge)', location: 'Cambridge', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Oncology, Immunology', employees: '32,000+', marketCap: '$100B', priority: 'high' },
  { name: 'Merck (Boston hub)', location: 'Boston', tier: 'new-logo', revenue2025: 0, gp: 0, ltv: 0, pipeline: 0, status: 'target', focus: 'Pharma - Oncology', employees: '69,000+', marketCap: '$250B', priority: 'high' },
];

export default function MACompanies() {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'ltv' | 'pipeline' | 'revenue'>('ltv');

  const filteredCompanies = companies
    .filter(c => {
      if (filter === 'all') return true;
      if (filter === 'active') return c.tier === 'active';
      if (filter === 'dormant') return c.tier === 'dormant';
      if (filter === 'new-logo') return c.tier === 'new-logo';
      if (filter === 'pipeline') return c.pipeline > 0;
      return true;
    })
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.focus.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'ltv') return b.ltv - a.ltv;
      if (sortBy === 'pipeline') return b.pipeline - a.pipeline;
      if (sortBy === 'revenue') return b.revenue2025 - a.revenue2025;
      return 0;
    });

  const totals = {
    active: companies.filter(c => c.tier === 'active').length,
    dormant: companies.filter(c => c.tier === 'dormant').length,
    newLogo: companies.filter(c => c.tier === 'new-logo').length,
    withPipeline: companies.filter(c => c.pipeline > 0).length,
    totalLTV: companies.reduce((sum, c) => sum + c.ltv, 0),
    totalPipeline: companies.reduce((sum, c) => sum + c.pipeline, 0),
    totalRevenue: companies.reduce((sum, c) => sum + c.revenue2025, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">MA Life Sciences Companies</h1>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">📊 Complete Database</span>
        </div>
        <p className="text-emerald-400 text-xl mb-4">All Massachusetts Life Sciences — Customers, Pipeline & Targets</p>
        <p className="text-slate-500 text-xs mb-8">📊 Salesforce + Finance MCP + Research | Last updated: Feb 11, 2026</p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-bold text-2xl">{totals.active}</p>
            <p className="text-slate-400 text-xs">Active Revenue</p>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
            <p className="text-blue-400 font-bold text-2xl">{totals.dormant}</p>
            <p className="text-slate-400 text-xs">Dormant w/ History</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-700/30">
            <p className="text-purple-400 font-bold text-2xl">{totals.newLogo}</p>
            <p className="text-slate-400 text-xs">New Logo Targets</p>
          </div>
          <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-700/30">
            <p className="text-yellow-400 font-bold text-2xl">{totals.withPipeline}</p>
            <p className="text-slate-400 text-xs">With Open Pipeline</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-white font-bold text-2xl">${(totals.totalLTV / 1000000).toFixed(1)}M</p>
            <p className="text-slate-400 text-xs">Total LTV</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-white font-bold text-2xl">${(totals.totalPipeline / 1000000).toFixed(1)}M</p>
            <p className="text-slate-400 text-xs">Open Pipeline</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-white font-bold text-2xl">${(totals.totalRevenue / 1000000).toFixed(2)}M</p>
            <p className="text-slate-400 text-xs">2025 Revenue</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search companies or focus areas..."
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2">
            {[
              { key: 'all', label: 'All', color: 'slate' },
              { key: 'active', label: 'Active Revenue', color: 'emerald' },
              { key: 'dormant', label: 'Dormant', color: 'blue' },
              { key: 'new-logo', label: 'New Logos', color: 'purple' },
              { key: 'pipeline', label: 'Has Pipeline', color: 'yellow' },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filter === f.key
                    ? `bg-${f.color}-600 text-white`
                    : `bg-slate-800 text-slate-400 hover:bg-slate-700`
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <select
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          >
            <option value="ltv">Sort by LTV</option>
            <option value="pipeline">Sort by Pipeline</option>
            <option value="revenue">Sort by 2025 Revenue</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        {/* Results count */}
        <p className="text-slate-400 text-sm mb-4">Showing {filteredCompanies.length} of {companies.length} companies</p>

        {/* Company Table */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80">
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Company</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Location</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-right">2025 Rev</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-right">GP%</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-right">LTV</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Status</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-sm">Focus Area</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {filteredCompanies.map((company, i) => (
                  <tr key={i} className={`border-b border-slate-700/50 hover:bg-slate-700/30 ${
                    company.tier === 'active' ? 'bg-emerald-900/5' : 
                    company.tier === 'dormant' ? 'bg-blue-900/5' : 
                    'bg-purple-900/5'
                  }`}>
                    <td className="py-3 px-4">
                      <div className="font-medium text-white">{company.name}</div>
                      <div className="text-xs text-slate-500">{company.employees} • {company.marketCap}</div>
                    </td>
                    <td className="py-3 px-4 text-sm">{company.location}</td>
                    <td className="py-3 px-4 text-right text-sm">
                      {company.revenue2025 > 0 ? `$${(company.revenue2025 / 1000).toFixed(0)}K` : '-'}
                    </td>
                    <td className="py-3 px-4 text-right text-sm">
                      {company.gp > 0 ? (
                        <span className={company.gp >= 70 ? 'text-emerald-400' : company.gp >= 40 ? 'text-yellow-400' : 'text-red-400'}>
                          {company.gp}%
                        </span>
                      ) : '-'}
                    </td>
                    <td className="py-3 px-4 text-right text-sm">
                      {company.ltv > 0 ? (
                        <span className="text-emerald-400 font-medium">${(company.ltv / 1000000).toFixed(1)}M</span>
                      ) : '-'}
                    </td>
                    <td className="py-3 px-4 text-right text-sm">
                      {company.pipeline > 0 ? (
                        <span className="text-blue-400">${(company.pipeline / 1000).toFixed(0)}K</span>
                      ) : '-'}
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={company.status} />
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-400 max-w-xs truncate">{company.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ABM Strategy Section */}
        <section className="mt-12 bg-purple-900/20 rounded-xl p-8 border border-purple-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 ABM Campaign Strategy by Tier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Tier 1: Active Revenue</h3>
              <p className="text-slate-300 text-sm mb-3">11 accounts generating $1.32M</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>→ Personalized 1:1 executive outreach</li>
                <li>→ Expansion proposals (AI governance, Cloud)</li>
                <li>→ Quarterly business reviews</li>
                <li>→ Case study co-creation</li>
              </ul>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-3">Tier 2: Dormant + Pipeline</h3>
              <p className="text-slate-300 text-sm mb-3">8+ accounts with $27M+ historical value</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>→ "Re-engagement" campaign sequences</li>
                <li>→ Gong research for champion contacts</li>
                <li>→ Competitive displacement messaging</li>
                <li>→ Event-based touchpoints</li>
              </ul>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-700/30">
              <h3 className="text-purple-400 font-semibold mb-3">Tier 3: New Logos</h3>
              <p className="text-slate-300 text-sm mb-3">25+ high-value targets</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>→ Intent-based targeting (ZoomInfo, 6sense)</li>
                <li>→ Thought leadership content</li>
                <li>→ MassBio event sponsorship</li>
                <li>→ Gene therapy QA wedge messaging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mt-8 bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/genetown-deep-dive/day-one-playbook" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">📋 Activation Playbook</p>
              <p className="text-slate-400 text-sm">Research & ABM guide</p>
            </Link>
            <Link href="/genetown-deep-dive/dormant-msas" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Dormant MSAs</p>
              <p className="text-slate-400 text-sm">24 accounts with contracts</p>
            </Link>
            <Link href="/genetown-deep-dive/company-profiles" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">🏢 Company Profiles</p>
              <p className="text-slate-400 text-sm">Detailed target profiles</p>
            </Link>
            <Link href="/genetown-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Overview</p>
              <p className="text-slate-400 text-sm">Territory summary</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'star': 'bg-emerald-900/30 text-emerald-400 border-emerald-700/30',
    'grow': 'bg-blue-900/30 text-blue-400 border-blue-700/30',
    'expand': 'bg-purple-900/30 text-purple-400 border-purple-700/30',
    'margin-fix': 'bg-red-900/30 text-red-400 border-red-700/30',
    'reactivate': 'bg-yellow-900/30 text-yellow-400 border-yellow-700/30',
    'target': 'bg-purple-900/30 text-purple-400 border-purple-700/30',
    'clean': 'bg-emerald-900/30 text-emerald-400 border-emerald-700/30',
    'competitive': 'bg-yellow-900/30 text-yellow-400 border-yellow-700/30',
    'monitor': 'bg-slate-700/50 text-slate-400 border-slate-600/30',
    'losing-share': 'bg-red-900/30 text-red-400 border-red-700/30',
  };
  
  const labels: Record<string, string> = {
    'star': '⭐ Star',
    'grow': '📈 Grow',
    'expand': '🚀 Expand',
    'margin-fix': '⚠️ Margin Fix',
    'reactivate': '🔄 Reactivate',
    'target': '🎯 Target',
    'clean': '✅ Clean',
    'competitive': '⚔️ Competitive',
    'monitor': '👁️ Monitor',
    'losing-share': '📉 Losing Share',
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded border ${styles[status] || 'bg-slate-700 text-slate-400'}`}>
      {labels[status] || status}
    </span>
  );
}
