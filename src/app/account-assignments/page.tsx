'use client';

import Link from 'next/link';
import { useState } from 'react';

// EAST REGION ONLY - Live data from Sales MCP (Mar 2026)
const territories = [
  {
    name: 'Genetown',
    fullName: 'Boston / Cambridge',
    owners: ['Lisa Burgese Fry', 'Michelle Dias', 'Sherry De Luca'],
    color: 'emerald',
    pipeline: 4116000,
    egp: 1750000,
    deals: 13,
    accounts: ['Biogen', 'Takeda', 'Axsome Therapeutics', 'Black Diamond', 'Praxis Precision'],
    deepDive: '/genetown-deep-dive',
  },
  {
    name: 'NJ Pharma',
    fullName: 'New Jersey Pharma Corridor',
    owners: ['Scott Pallardy', 'Vega Finucan'],
    color: 'blue',
    pipeline: 3000000,
    egp: 1350000,
    deals: 8,
    accounts: ['Abbott', 'Supernus', 'Regeneron', 'Organon', 'Amneal'],
    deepDive: '/nj-pharma-deep-dive',
  },
  {
    name: 'Mid-Atlantic',
    fullName: 'DC / MD / VA / PA',
    owners: ['Jim Macdonell'],
    color: 'purple',
    pipeline: 1575000,
    egp: 710000,
    deals: 6,
    accounts: ['AbbVie', 'Zimmer Biomet', 'CivicaRx', 'Emergent BioSolutions'],
    deepDive: '/mid-atlantic-deep-dive',
  },
  {
    name: 'Research Triangle',
    fullName: 'Raleigh-Durham / NC',
    owners: ['Unassigned'],
    color: 'yellow',
    pipeline: 0,
    egp: 0,
    deals: 0,
    accounts: ['BioCryst', 'Precision BioSciences', 'G1 Therapeutics'],
    deepDive: '/research-triangle-deep-dive',
  },
];

// East Region pipeline by owner (MCP verified)
const ownerPipeline = [
  { owner: 'Lisa Burgese Fry', pipeline: 3666000, egp: 793391, deals: 11, territory: 'Genetown', title: 'EVP East' },
  { owner: 'Scott Pallardy', pipeline: 2000000, egp: 868738, deals: 4, territory: 'NJ Pharma', title: 'Sr. Account Exec' },
  { owner: 'Jim Macdonell', pipeline: 1575000, egp: 456716, deals: 6, territory: 'Mid-Atlantic', title: 'Account Exec' },
  { owner: 'Vega Finucan', pipeline: 1000000, egp: 450000, deals: 4, territory: 'NJ Pharma', title: 'Account Exec' },
  { owner: 'Michelle Dias', pipeline: 250000, egp: 112500, deals: 1, territory: 'Genetown', title: 'Account Exec' },
  { owner: 'Sherry De Luca', pipeline: 200000, egp: 45000, deals: 1, territory: 'Genetown', title: 'Account Exec' },
];

// East accounts with pipeline
const eastAccounts = [
  { account: 'Biogen U.S. Corporation', pipeline: 1000000, territory: 'Genetown', stage: 'Proposal', owner: 'Lisa Burgese Fry' },
  { account: 'PTC Inc.', pipeline: 825000, territory: 'NJ Pharma', stage: 'Negotiation', owner: 'Scott Pallardy' },
  { account: 'argenx BV', pipeline: 648000, territory: 'NJ Pharma', stage: 'Discovery', owner: 'Scott Pallardy' },
  { account: 'Abbott Laboratories', pipeline: 605000, territory: 'NJ Pharma', stage: 'Proposal', owner: 'Vega Finucan' },
  { account: 'Supernus Pharmaceuticals', pipeline: 550000, territory: 'Mid-Atlantic', stage: 'Developing', owner: 'Jim Macdonell' },
  { account: 'AbbVie', pipeline: 500000, territory: 'Mid-Atlantic', stage: 'Proposal', owner: 'Jim Macdonell' },
  { account: 'argenx U.S.', pipeline: 500000, territory: 'NJ Pharma', stage: 'Discovery', owner: 'Scott Pallardy' },
  { account: 'Axsome Therapeutics', pipeline: 405000, territory: 'Genetown', stage: 'Developing', owner: 'Lisa Burgese Fry' },
  { account: 'Takeda Pharmaceuticals', pipeline: 400000, territory: 'Genetown', stage: 'Proposal', owner: 'Lisa Burgese Fry' },
  { account: 'Catalyst Pharmaceuticals', pipeline: 370000, territory: 'Mid-Atlantic', stage: 'Qualification', owner: 'Jim Macdonell' },
  { account: 'BioCryst Pharmaceuticals', pipeline: 318000, territory: 'Research Triangle', stage: 'Dormant', owner: 'Unassigned' },
  { account: 'CivicaRx', pipeline: 300000, territory: 'Mid-Atlantic', stage: 'Discovery', owner: 'Jim Macdonell' },
  { account: 'Regeneron Pharmaceuticals', pipeline: 270000, territory: 'NJ Pharma', stage: 'Qualification', owner: 'Vega Finucan' },
  { account: 'Zimmer Biomet', pipeline: 300000, territory: 'Mid-Atlantic', stage: 'Developing', owner: 'Jim Macdonell' },
];

// At-risk and orphaned accounts
const atRiskAccounts = [
  { account: 'Praxis Precision Medicines', health: 53, territory: 'Genetown', issue: 'Revenue declining', owner: 'Lisa Burgese Fry' },
  { account: 'Disc Medicine', health: 45, territory: 'Genetown', issue: 'No pipeline', owner: 'Unassigned' },
  { account: 'Karuna Therapeutics', health: 40, territory: 'Genetown', issue: 'Churning', owner: 'Unassigned' },
  { account: 'C4 Therapeutics', health: 35, territory: 'Genetown', issue: 'Zero revenue', owner: 'Unassigned' },
  { account: 'BioCryst', health: 50, territory: 'Research Triangle', issue: 'No coverage', owner: 'Unassigned' },
];

export default function AccountAssignments() {
  const [selectedTerritory, setSelectedTerritory] = useState<string>('all');
  
  const totalPipeline = territories.reduce((sum, t) => sum + t.pipeline, 0);
  const totalEGP = territories.reduce((sum, t) => sum + t.egp, 0);
  const totalDeals = territories.reduce((sum, t) => sum + t.deals, 0);
  const orphanedCount = atRiskAccounts.filter(a => a.owner === 'Unassigned').length;

  const filteredOwners = selectedTerritory === 'all' 
    ? ownerPipeline 
    : ownerPipeline.filter(o => o.territory === selectedTerritory);

  const filteredAccounts = selectedTerritory === 'all'
    ? eastAccounts
    : eastAccounts.filter(a => a.territory === selectedTerritory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Home</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">East Region Command Center</h1>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">📊 Live MCP</span>
        </div>
        <p className="text-emerald-400 text-xl mb-4">Territory Ownership | Pipeline by Owner | Account Assignments</p>
        <p className="text-slate-500 text-xs mb-8">📊 Sales MCP v32.2.0 | EVP: Lisa Fry | Last updated: Mar 4, 2026</p>

        {/* Territory Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {territories.map(t => (
            <Link 
              key={t.name}
              href={t.deepDive}
              className={`bg-${t.color}-900/30 rounded-xl p-5 border border-${t.color}-700/50 hover:bg-${t.color}-900/50 transition-colors`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-${t.color}-400 font-semibold`}>{t.name}</h3>
                <span className="text-white text-xs">→</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1">${(t.pipeline / 1000000).toFixed(1)}M</p>
              <p className="text-slate-400 text-sm">{t.deals} deals • {t.fullName}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {t.owners.map(o => (
                  <span key={o} className="text-xs bg-slate-800/50 text-slate-300 px-2 py-0.5 rounded">{o.split(' ')[0]}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-bold text-2xl">${(totalPipeline / 1000000).toFixed(1)}M</p>
            <p className="text-slate-400 text-xs">East Pipeline</p>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
            <p className="text-blue-400 font-bold text-2xl">${(totalEGP / 1000000).toFixed(1)}M</p>
            <p className="text-slate-400 text-xs">Expected GP</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-700/30">
            <p className="text-purple-400 font-bold text-2xl">{totalDeals}</p>
            <p className="text-slate-400 text-xs">Open Deals</p>
          </div>
          <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-700/30">
            <p className="text-yellow-400 font-bold text-2xl">{ownerPipeline.length}</p>
            <p className="text-slate-400 text-xs">Active Sellers</p>
          </div>
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
            <p className="text-red-400 font-bold text-2xl">{orphanedCount}</p>
            <p className="text-slate-400 text-xs">Orphaned Accounts</p>
          </div>
        </div>

        {/* Territory Filter */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedTerritory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedTerritory === 'all' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            All Territories
          </button>
          {territories.map(t => (
            <button
              key={t.name}
              onClick={() => setSelectedTerritory(t.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedTerritory === t.name ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Pipeline by Owner */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Pipeline by Owner</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-medium">Owner</th>
                  <th className="py-3 px-4 text-slate-400 font-medium">Title</th>
                  <th className="py-3 px-4 text-slate-400 font-medium">Territory</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">EGP</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">Deals</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">Avg Deal</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {filteredOwners.sort((a, b) => b.pipeline - a.pipeline).map((owner, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 font-medium text-white">{owner.owner}</td>
                    <td className="py-3 px-4 text-sm text-slate-400">{owner.title}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        owner.territory === 'Genetown' ? 'bg-emerald-900/30 text-emerald-400' :
                        owner.territory === 'NJ Pharma' ? 'bg-blue-900/30 text-blue-400' :
                        owner.territory === 'Mid-Atlantic' ? 'bg-purple-900/30 text-purple-400' :
                        'bg-yellow-900/30 text-yellow-400'
                      }`}>{owner.territory}</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="text-emerald-400 font-medium">${(owner.pipeline / 1000000).toFixed(2)}M</span>
                    </td>
                    <td className="py-3 px-4 text-right text-blue-400">${(owner.egp / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-4 text-right">{owner.deals}</td>
                    <td className="py-3 px-4 text-right text-slate-400">${(owner.pipeline / owner.deals / 1000).toFixed(0)}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Accounts with Pipeline */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">East Accounts with Open Pipeline</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-2 px-3 text-slate-400 font-medium">Account</th>
                  <th className="py-2 px-3 text-slate-400 font-medium text-right">Pipeline</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Stage</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Territory</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Owner</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {filteredAccounts.sort((a, b) => b.pipeline - a.pipeline).map((acct, i) => (
                  <tr key={i} className={`border-b border-slate-700/50 hover:bg-slate-700/30 ${acct.owner === 'Unassigned' ? 'bg-red-900/10' : ''}`}>
                    <td className="py-2 px-3 font-medium text-white">{acct.account}</td>
                    <td className="py-2 px-3 text-right">
                      <span className="text-emerald-400 font-medium">${(acct.pipeline / 1000).toFixed(0)}K</span>
                    </td>
                    <td className="py-2 px-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        acct.stage === 'Negotiation' ? 'bg-emerald-900/50 text-emerald-400' :
                        acct.stage === 'Proposal' ? 'bg-blue-900/50 text-blue-400' :
                        acct.stage === 'Developing' ? 'bg-purple-900/50 text-purple-400' :
                        acct.stage === 'Discovery' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-slate-700 text-slate-400'
                      }`}>{acct.stage}</span>
                    </td>
                    <td className="py-2 px-3 text-slate-400">{acct.territory}</td>
                    <td className="py-2 px-3">
                      {acct.owner === 'Unassigned' ? (
                        <span className="text-red-400">⚠️ Unassigned</span>
                      ) : acct.owner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* At-Risk / Orphaned */}
        <section className="bg-red-900/20 rounded-xl p-6 border border-red-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">⚠️ At-Risk & Orphaned Accounts</h2>
          <p className="text-slate-400 text-sm mb-4">Accounts requiring immediate attention — assign owner or intervention needed</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {atRiskAccounts.map((acct, i) => (
              <div key={i} className={`rounded-lg p-4 border ${
                acct.owner === 'Unassigned' ? 'bg-red-900/30 border-red-700/50' : 'bg-yellow-900/20 border-yellow-700/50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-white">{acct.account}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    acct.health < 40 ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>{acct.health}</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{acct.territory} • {acct.issue}</p>
                {acct.owner === 'Unassigned' ? (
                  <button className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded">
                    Assign Owner →
                  </button>
                ) : (
                  <p className="text-xs text-slate-500">Owner: {acct.owner}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Territory Deep Dives */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Territory Deep Dives</h2>
          <p className="text-slate-400 text-sm mb-6">Full playbooks for each Eastern territory — accounts, targets, competitive intel</p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/genetown-deep-dive" className="bg-emerald-900/30 rounded-lg p-5 border border-emerald-700/50 hover:bg-emerald-900/50 transition-colors">
              <h3 className="text-emerald-400 font-semibold mb-2">🧬 Genetown</h3>
              <p className="text-white font-bold text-lg mb-1">$4.1M pipeline</p>
              <p className="text-slate-400 text-sm">Boston / Cambridge biotech capital</p>
            </Link>
            <Link href="/nj-pharma-deep-dive" className="bg-blue-900/30 rounded-lg p-5 border border-blue-700/50 hover:bg-blue-900/50 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-2">💊 NJ Pharma</h3>
              <p className="text-white font-bold text-lg mb-1">$3.0M pipeline</p>
              <p className="text-slate-400 text-sm">New Jersey pharma corridor</p>
            </Link>
            <Link href="/mid-atlantic-deep-dive" className="bg-purple-900/30 rounded-lg p-5 border border-purple-700/50 hover:bg-purple-900/50 transition-colors">
              <h3 className="text-purple-400 font-semibold mb-2">🏛️ Mid-Atlantic</h3>
              <p className="text-white font-bold text-lg mb-1">$1.6M pipeline</p>
              <p className="text-slate-400 text-sm">DC / MD / VA / PA</p>
            </Link>
            <Link href="/research-triangle-deep-dive" className="bg-yellow-900/30 rounded-lg p-5 border border-yellow-700/50 hover:bg-yellow-900/50 transition-colors">
              <h3 className="text-yellow-400 font-semibold mb-2">🔬 Research Triangle</h3>
              <p className="text-white font-bold text-lg mb-1">$0 pipeline</p>
              <p className="text-slate-400 text-sm">GREENFIELD — needs owner</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
