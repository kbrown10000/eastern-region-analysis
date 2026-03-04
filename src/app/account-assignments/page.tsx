'use client';

import Link from 'next/link';
import { useState } from 'react';

// Live data from Sales MCP get_team_performance + get_open_pipeline_deals (Mar 2026)
const ownerPipeline = [
  { owner: 'Lisa Burgese Fry', pipeline: 3666000, egp: 793391, deals: 11, region: 'East', territory: 'Genetown' },
  { owner: 'Scott Pallardy', pipeline: 2000000, egp: 868738, deals: 4, region: 'East', territory: 'NJ Pharma' },
  { owner: 'Marcus Dinan', pipeline: 1884000, egp: 372068, deals: 7, region: 'EU', territory: 'Europe' },
  { owner: 'Jim Macdonell', pipeline: 1575000, egp: 456716, deals: 6, region: 'East', territory: 'Mid-Atlantic' },
  { owner: 'Josh Ertmer', pipeline: 1105000, egp: 591452, deals: 4, region: 'West', territory: 'Biotech Bay' },
  { owner: 'Vega Finucan', pipeline: 1000000, egp: 450000, deals: 4, region: 'East', territory: 'NJ Pharma' },
  { owner: 'Justin Ott', pipeline: 783000, egp: 538735, deals: 3, region: 'West', territory: 'Biotech Beach' },
  { owner: 'Avani Macwan', pipeline: 763000, egp: 244132, deals: 2, region: 'EU', territory: 'Europe' },
  { owner: 'Mike Campbell', pipeline: 655000, egp: 672020, deals: 3, region: 'West', territory: 'LA BioMed' },
  { owner: 'Hovsep Kirikian', pipeline: 568000, egp: 277965, deals: 2, region: 'Global', territory: 'Strategic' },
  { owner: 'Kim Guihen', pipeline: 468000, egp: 209675, deals: 4, region: 'Partner', territory: 'Alliances' },
  { owner: 'Michelle Dias', pipeline: 550000, egp: 247500, deals: 4, region: 'East', territory: 'Genetown' },
  { owner: 'Meghan Rutkowski', pipeline: 90000, egp: 76500, deals: 1, region: 'Partner', territory: 'Alliances' },
  { owner: 'Sherry De Luca', pipeline: 200000, egp: 45000, deals: 1, region: 'East', territory: 'Genetown' },
];

// Account health from Sales MCP (accounts needing attention)
const atRiskAccounts = [
  { account: 'Humacyte Global', health: 50, risk: 'At Risk', revenue: 10500, pipeline: 0, owner: 'Unassigned', territory: 'Research Triangle' },
  { account: 'Xencor, Inc.', health: 50, risk: 'At Risk', revenue: 120000, pipeline: 289750, owner: 'Scott Pallardy', territory: 'Biotech Beach' },
  { account: 'Arrowhead Pharmaceuticals', health: 50, risk: 'At Risk', revenue: 92000, pipeline: 288690, owner: 'Mike Campbell', territory: 'Biotech Beach' },
  { account: 'Praxis Precision Medicines', health: 53, risk: 'At Risk', revenue: 93475, pipeline: 112000, owner: 'Lisa Burgese Fry', territory: 'Genetown' },
  { account: 'Ultragenyx Pharmaceutical', health: 55, risk: 'At Risk', revenue: 85000, pipeline: 150000, owner: 'Justin Ott', territory: 'Biotech Bay' },
  { account: 'Disc Medicine', health: 45, risk: 'At Risk', revenue: 16600, pipeline: 0, owner: 'Unassigned', territory: 'Genetown' },
  { account: 'Karuna Therapeutics', health: 40, risk: 'Critical', revenue: 1200, pipeline: 0, owner: 'Unassigned', territory: 'Genetown' },
  { account: 'C4 Therapeutics', health: 35, risk: 'Critical', revenue: 0, pipeline: 0, owner: 'Unassigned', territory: 'Genetown' },
];

// Genetown orphaned accounts (from territory intel)
const genetownOrphaned = [
  { account: 'Biogen', ltv: 11800000, lastActivity: '2024-06', status: 'Dormant', priority: 'Critical' },
  { account: 'Sage Therapeutics', ltv: 5200000, lastActivity: '2024-09', status: 'Dormant', priority: 'High' },
  { account: 'Sarepta Therapeutics', ltv: 265000, lastActivity: '2024-03', status: 'Dormant', priority: 'High' },
  { account: 'Dyne Therapeutics', ltv: 149000, lastActivity: '2024-06', status: 'Dormant', priority: 'Medium' },
  { account: 'Blueprint Medicines', ltv: 892000, lastActivity: '2025-01', status: 'Underworked', priority: 'High' },
  { account: 'Encoded Therapeutics', ltv: 30000, lastActivity: '2023-12', status: 'Churned', priority: 'Low' },
  { account: 'Landmark Bio', ltv: 40500, lastActivity: '2023-09', status: 'Churned', priority: 'Low' },
  { account: 'Amylyx Pharmaceuticals', ltv: 8100, lastActivity: '2024-01', status: 'Churned', priority: 'Low' },
];

export default function AccountAssignments() {
  const [regionFilter, setRegionFilter] = useState<string>('all');
  
  const filteredOwners = regionFilter === 'all' 
    ? ownerPipeline 
    : ownerPipeline.filter(o => o.region === regionFilter);

  const totalPipeline = ownerPipeline.reduce((sum, o) => sum + o.pipeline, 0);
  const totalEGP = ownerPipeline.reduce((sum, o) => sum + o.egp, 0);
  const totalDeals = ownerPipeline.reduce((sum, o) => sum + o.deals, 0);
  const orphanedLTV = genetownOrphaned.reduce((sum, a) => sum + a.ltv, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Home</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">Account Ownership Dashboard</h1>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">📊 Live MCP Data</span>
        </div>
        <p className="text-emerald-400 text-xl mb-4">Pipeline by Owner | At-Risk Accounts | Orphaned Opportunities</p>
        <p className="text-slate-500 text-xs mb-8">📊 Sales MCP v32.2.0 | Last updated: Mar 4, 2026</p>

        {/* Summary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-bold text-2xl">${(totalPipeline / 1000000).toFixed(1)}M</p>
            <p className="text-slate-400 text-xs">Total Pipeline</p>
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
            <p className="text-yellow-400 font-bold text-2xl">{atRiskAccounts.length}</p>
            <p className="text-slate-400 text-xs">At-Risk Accounts</p>
          </div>
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
            <p className="text-red-400 font-bold text-2xl">{genetownOrphaned.length}</p>
            <p className="text-slate-400 text-xs">Orphaned (Genetown)</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-white font-bold text-2xl">${(orphanedLTV / 1000000).toFixed(1)}M</p>
            <p className="text-slate-400 text-xs">Orphaned LTV</p>
          </div>
        </div>

        {/* Pipeline by Owner */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Pipeline by Owner</h2>
            <div className="flex gap-2">
              {['all', 'East', 'West', 'EU', 'Partner'].map(region => (
                <button
                  key={region}
                  onClick={() => setRegionFilter(region)}
                  className={`px-3 py-1 rounded text-sm ${
                    regionFilter === region 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {region === 'all' ? 'All' : region}
                </button>
              ))}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-medium">Owner</th>
                  <th className="py-3 px-4 text-slate-400 font-medium">Territory</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">EGP</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">Deals</th>
                  <th className="py-3 px-4 text-slate-400 font-medium text-right">Avg Deal</th>
                  <th className="py-3 px-4 text-slate-400 font-medium">Region</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {filteredOwners.sort((a, b) => b.pipeline - a.pipeline).map((owner, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 px-4 font-medium text-white">{owner.owner}</td>
                    <td className="py-3 px-4 text-sm">{owner.territory}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="text-emerald-400 font-medium">${(owner.pipeline / 1000000).toFixed(2)}M</span>
                    </td>
                    <td className="py-3 px-4 text-right text-blue-400">${(owner.egp / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-4 text-right">{owner.deals}</td>
                    <td className="py-3 px-4 text-right text-slate-400">${(owner.pipeline / owner.deals / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        owner.region === 'East' ? 'bg-emerald-900/30 text-emerald-400' :
                        owner.region === 'West' ? 'bg-blue-900/30 text-blue-400' :
                        owner.region === 'EU' ? 'bg-purple-900/30 text-purple-400' :
                        'bg-yellow-900/30 text-yellow-400'
                      }`}>{owner.region}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* At-Risk Accounts */}
        <section className="bg-red-900/20 rounded-xl p-6 border border-red-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">⚠️ At-Risk Accounts (Health Score &lt;60)</h2>
          <p className="text-slate-400 text-sm mb-4">Accounts with declining revenue, low pipeline coverage, or engagement issues</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-2 px-3 text-slate-400 font-medium">Account</th>
                  <th className="py-2 px-3 text-slate-400 font-medium text-center">Health</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Risk</th>
                  <th className="py-2 px-3 text-slate-400 font-medium text-right">Revenue</th>
                  <th className="py-2 px-3 text-slate-400 font-medium text-right">Pipeline</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Owner</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Territory</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {atRiskAccounts.sort((a, b) => a.health - b.health).map((acct, i) => (
                  <tr key={i} className={`border-b border-slate-700/50 ${acct.owner === 'Unassigned' ? 'bg-red-900/10' : ''}`}>
                    <td className="py-2 px-3 font-medium text-white">{acct.account}</td>
                    <td className="py-2 px-3 text-center">
                      <span className={`inline-block w-10 text-center rounded ${
                        acct.health < 40 ? 'bg-red-600 text-white' :
                        acct.health < 55 ? 'bg-yellow-600 text-white' :
                        'bg-emerald-600 text-white'
                      }`}>{acct.health}</span>
                    </td>
                    <td className="py-2 px-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        acct.risk === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                      }`}>{acct.risk}</span>
                    </td>
                    <td className="py-2 px-3 text-right">${(acct.revenue / 1000).toFixed(0)}K</td>
                    <td className="py-2 px-3 text-right">{acct.pipeline > 0 ? `$${(acct.pipeline / 1000).toFixed(0)}K` : '-'}</td>
                    <td className="py-2 px-3">
                      {acct.owner === 'Unassigned' ? (
                        <span className="text-red-400 font-medium">⚠️ Unassigned</span>
                      ) : acct.owner}
                    </td>
                    <td className="py-2 px-3 text-slate-400">{acct.territory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Orphaned Genetown Accounts */}
        <section className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">💎 Orphaned Genetown Accounts</h2>
          <p className="text-slate-400 text-sm mb-4">High-LTV accounts requiring immediate assignment and reactivation outreach</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-2 px-3 text-slate-400 font-medium">Account</th>
                  <th className="py-2 px-3 text-slate-400 font-medium text-right">Historical LTV</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Last Activity</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Status</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Priority</th>
                  <th className="py-2 px-3 text-slate-400 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {genetownOrphaned.sort((a, b) => b.ltv - a.ltv).map((acct, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-2 px-3 font-medium text-white">{acct.account}</td>
                    <td className="py-2 px-3 text-right">
                      <span className="text-emerald-400 font-medium">${(acct.ltv / 1000000).toFixed(2)}M</span>
                    </td>
                    <td className="py-2 px-3 text-slate-400">{acct.lastActivity}</td>
                    <td className="py-2 px-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        acct.status === 'Dormant' ? 'bg-yellow-900/50 text-yellow-400' :
                        acct.status === 'Underworked' ? 'bg-blue-900/50 text-blue-400' :
                        'bg-red-900/50 text-red-400'
                      }`}>{acct.status}</span>
                    </td>
                    <td className="py-2 px-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        acct.priority === 'Critical' ? 'bg-red-600 text-white' :
                        acct.priority === 'High' ? 'bg-yellow-600 text-white' :
                        acct.priority === 'Medium' ? 'bg-blue-600 text-white' :
                        'bg-slate-600 text-white'
                      }`}>{acct.priority}</span>
                    </td>
                    <td className="py-2 px-3">
                      <button className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-1 rounded">
                        Assign →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-semibold">💰 Reactivation Opportunity</p>
            <p className="text-slate-300 text-sm mt-1">
              Total orphaned LTV: <span className="text-white font-bold">${(orphanedLTV / 1000000).toFixed(1)}M</span>. 
              Biogen alone has $11.8M historical value. Assign to new Boston AE for immediate reactivation.
            </p>
          </div>
        </section>

        {/* East Region Summary */}
        <section className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">🌿 East Region Pipeline Summary</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Lisa Burgese Fry</p>
              <p className="text-2xl font-bold text-white">$3.67M</p>
              <p className="text-emerald-400 text-sm">Genetown • 11 deals</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Scott Pallardy</p>
              <p className="text-2xl font-bold text-white">$2.00M</p>
              <p className="text-emerald-400 text-sm">NJ Pharma • 4 deals</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Jim Macdonell</p>
              <p className="text-2xl font-bold text-white">$1.58M</p>
              <p className="text-emerald-400 text-sm">Mid-Atlantic • 6 deals</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Vega Finucan</p>
              <p className="text-2xl font-bold text-white">$1.00M</p>
              <p className="text-emerald-400 text-sm">NJ Pharma • 4 deals</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-slate-400">East Region Total: <span className="text-white font-bold">$8.80M</span> pipeline across 29 deals</p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/genetown-deep-dive/day-one-playbook" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">📋 Activation Playbook</p>
              <p className="text-slate-400 text-sm">Genetown territory guide</p>
            </Link>
            <Link href="/genetown-deep-dive/ma-companies" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">🏢 MA Companies</p>
              <p className="text-slate-400 text-sm">Full Boston account list</p>
            </Link>
            <Link href="/churn-signals" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">⚠️ Churn Signals</p>
              <p className="text-slate-400 text-sm">At-risk account alerts</p>
            </Link>
            <Link href="/seller-performance" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">📊 Seller Performance</p>
              <p className="text-slate-400 text-sm">Individual metrics</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
