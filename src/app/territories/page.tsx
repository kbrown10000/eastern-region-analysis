'use client';

import Link from 'next/link';

// Type definitions
interface KeyAccount {
  name: string;
  revenue: number;
  gp: number;
  problem?: boolean;
  target?: boolean;
}

interface Territory {
  id: string;
  name: string;
  aka: string;
  geography: string[];
  seller: string;
  sellerRole: string;
  sellerStatus: 'star' | 'coaching' | 'vacant' | 'partner';
  revenue2025: number;
  gpPercent: number;
  pipeline: number;
  pipelineEGP: number;
  closedWonQ4: number;
  closedWonEGPQ4: number;
  winRate: number;
  deals: number;
  character: string;
  color: string;
  status: 'healthy' | 'warning' | 'critical' | 'greenfield';
  keyAccounts: KeyAccount[];
  opportunities: string[];
  risks: string[];
}

// LIVE DATA from Sales MCP + Memory (Feb 2026)
const territories: Territory[] = [
  {
    id: 'genetown',
    name: 'Genetown',
    aka: 'Boston / Cambridge',
    geography: ['Boston', 'Cambridge', 'Waltham', 'Watertown'],
    seller: 'Lisa Fry',
    sellerRole: 'EVP East',
    sellerStatus: 'star',
    revenue2025: 1.35,
    gpPercent: 43.1,
    pipeline: 3.50,
    pipelineEGP: 1.51,
    closedWonQ4: 0.81,
    closedWonEGPQ4: 0.35,
    winRate: 48.0,
    deals: 42,
    character: '18 accounts, biotech startup hub',
    color: 'green',
    status: 'healthy',
    keyAccounts: [
      { name: 'Takeda Pharmaceuticals', revenue: 0.70, gp: 14.5 },
      { name: 'Alnylam Pharmaceuticals', revenue: 0.11, gp: 71.5 },
      { name: 'Harmony Biosciences', revenue: 0.13, gp: 81.6 },
      { name: 'Moderna', revenue: 0.04, gp: 92.8 },
    ],
    opportunities: [
      'Vertex, Sarepta, Biogen as targets',
      'Blueprint, Bluebird, Beam - emerging biotechs',
      'AI Governance for drug discovery startups',
    ],
    risks: [
      'Takeda at 14.5% GP needs margin fix',
      'Heavy competition from local consulting firms',
    ],
  },
  {
    id: 'nj-pharma',
    name: 'NJ Pharma',
    aka: 'New Jersey',
    geography: ['New Brunswick', 'Bridgewater', 'Kenilworth', 'Princeton'],
    seller: 'Scott Pallardy',
    sellerRole: 'Account Manager',
    sellerStatus: 'star',
    revenue2025: 2.02,
    gpPercent: 40.7,
    pipeline: 4.20,
    pipelineEGP: 1.71,
    closedWonQ4: 0.95,
    closedWonEGPQ4: 0.39,
    winRate: 45.0,
    deals: 28,
    character: 'Big pharma concentration, solid margins',
    color: 'green',
    status: 'healthy',
    keyAccounts: [
      { name: 'Bausch Health', revenue: 0.74, gp: 29.4 },
      { name: 'J&J', revenue: 0.41, gp: 32.4 },
      { name: 'Regeneron Pharmaceuticals', revenue: 0.44, gp: 63.0 },
      { name: 'Integra LifeSciences', revenue: 0.27, gp: 37.0 },
    ],
    opportunities: [
      'Merck, BMS, Novo Nordisk as targets',
      'Organon, Insmed, PTC - mid-tier pharma',
      'Compliance automation for big pharma',
    ],
    risks: [
      'Bausch at 29.4% GP needs improvement',
      'J&J declining (-13.5% YoY)',
      'Competitor lock-in at Merck',
    ],
  },
  {
    id: 'mid-atlantic',
    name: 'Mid-Atlantic',
    aka: 'DC / Philadelphia',
    geography: ['Philadelphia', 'Washington DC', 'Baltimore', 'Wilmington'],
    seller: 'Avani Macwan',
    sellerRole: 'Account Manager',
    sellerStatus: 'star',
    revenue2025: 2.20,
    gpPercent: 45.2,
    pipeline: 4.85,
    pipelineEGP: 2.19,
    closedWonQ4: 1.10,
    closedWonEGPQ4: 0.50,
    winRate: 52.0,
    deals: 24,
    character: 'Anchored by Abbott, strong margins',
    color: 'green',
    status: 'healthy',
    keyAccounts: [
      { name: 'Abbott Laboratories', revenue: 1.94, gp: 47.1 },
      { name: 'Spectranetics', revenue: 0.24, gp: 26.4 },
    ],
    opportunities: [
      'AstraZeneca, GSK as targets',
      'Merck KGaA, Emergent BioSolutions',
      'Catalent Baltimore - CDMO services',
    ],
    risks: [
      'Heavy reliance on Abbott (88% of territory)',
      'Spectranetics at 26.4% GP declining',
    ],
  },
  {
    id: 'research-triangle',
    name: 'Research Triangle',
    aka: 'Raleigh-Durham / NC',
    geography: ['Raleigh', 'Durham', 'Research Triangle Park', 'Chapel Hill'],
    seller: 'Partner Channel',
    sellerRole: 'Via Alliances',
    sellerStatus: 'partner',
    revenue2025: 0,
    gpPercent: 0,
    pipeline: 0,
    pipelineEGP: 0,
    closedWonQ4: 0,
    closedWonEGPQ4: 0,
    winRate: 0,
    deals: 0,
    character: 'GREENFIELD - Zero pipeline',
    color: 'blue',
    status: 'greenfield',
    keyAccounts: [
      { name: 'IQVIA', revenue: 0, gp: 0, target: true },
      { name: 'Fujifilm Diosynth', revenue: 0, gp: 0, target: true },
      { name: 'PPD (Thermo Fisher)', revenue: 0, gp: 0, target: true },
      { name: 'Samsung Biologics', revenue: 0, gp: 0, target: true },
    ],
    opportunities: [
      'CDMO corridor (Fujifilm Diosynth, Catalent, Samsung)',
      'CRO hub (IQVIA, PPD, Syneos Health)',
      'Academic partnerships (Duke, UNC)',
      'Biomanufacturing quality consulting',
    ],
    risks: [
      'Zero current presence',
      'Need dedicated seller or partner investment',
      'Established local consulting firms',
    ],
  },
];

const getStatusColor = (status: 'healthy' | 'warning' | 'critical' | 'greenfield') => {
  switch(status) {
    case 'healthy': return 'from-green-900/50 to-green-800/30 border-green-700/50';
    case 'warning': return 'from-yellow-900/50 to-yellow-800/30 border-yellow-700/50';
    case 'critical': return 'from-red-900/50 to-red-800/30 border-red-700/50';
    case 'greenfield': return 'from-blue-900/50 to-blue-800/30 border-blue-700/50';
  }
};

const getStatusBadge = (status: 'healthy' | 'warning' | 'critical' | 'greenfield') => {
  switch(status) {
    case 'healthy': return <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">HEALTHY</span>;
    case 'warning': return <span className="bg-yellow-600 text-white px-2 py-0.5 rounded text-xs font-bold">UNDERPENETRATED</span>;
    case 'critical': return <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold">MARGIN CRISIS</span>;
    case 'greenfield': return <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">GREENFIELD</span>;
  }
};

const getSellerBadge = (status: 'star' | 'coaching' | 'vacant' | 'partner') => {
  switch(status) {
    case 'star': return <span className="text-green-400">⭐</span>;
    case 'coaching': return <span className="text-red-400">🎯</span>;
    case 'vacant': return <span className="text-yellow-400">⚠️</span>;
    case 'partner': return <span className="text-blue-400">🤝</span>;
  }
};

const formatCurrency = (value: number) => {
  if (value >= 1) return `$${value.toFixed(2)}M`;
  if (value > 0) return `$${(value * 1000).toFixed(0)}K`;
  return '$0';
};

export default function TerritoriesPage() {
  const totalRevenue = territories.reduce((sum, t) => sum + t.revenue2025, 0);
  const totalPipeline = territories.reduce((sum, t) => sum + t.pipeline, 0);
  const avgGP = territories.reduce((sum, t) => sum + t.gpPercent * t.revenue2025, 0) / totalRevenue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Eastern Territories</h1>
            <p className="text-xl text-cyan-400 mt-2">Pistons in the Regional Engine</p>
          </div>
          <span className="text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded border border-green-700/50">
            🔴 LIVE | Sales MCP | Feb 2026
          </span>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl">
          Each territory is a geographic zone grouping accounts by regional biotech ecosystem — 
          city clusters, not states. Like pistons in an engine, they fire in sequence to drive growth.
        </p>
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-blue-400">Sales MCP</span> → <code className="text-slate-500">get_pipeline_by_owner</code>, <code className="text-slate-500">get_team_performance</code> | 
          <span className="text-purple-400 ml-2">Finance MCP</span> → <code className="text-slate-500">analyze_customer_profitability</code> | 
          <span className="text-slate-500"> Filter: </span><code className="text-slate-500">DIM_Account_Min[Sales_Region] = &quot;East&quot;</code>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(totalRevenue)}</div>
            <div className="text-sm text-slate-400">2025 Revenue</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400">{formatCurrency(totalPipeline)}</div>
            <div className="text-sm text-slate-400">Open Pipeline</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-purple-400">{avgGP.toFixed(1)}%</div>
            <div className="text-sm text-slate-400">Blended GP%</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-yellow-400">4</div>
            <div className="text-sm text-slate-400">Territories</div>
          </div>
        </div>

        {/* Territory Comparison Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                <th className="py-3 px-4 text-slate-300">Territory</th>
                <th className="py-3 px-4 text-slate-300">Seller</th>
                <th className="py-3 px-4 text-slate-300 text-right">2025 Rev</th>
                <th className="py-3 px-4 text-slate-300 text-right">GP%</th>
                <th className="py-3 px-4 text-slate-300 text-right">Pipeline</th>
                <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                <th className="py-3 px-4 text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {territories.map((t) => (
                <tr key={t.id} className="border-b border-slate-800 hover:bg-slate-800/30 transition">
                  <td className="py-3 px-4">
                    <div className="text-white font-medium">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.aka}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getSellerBadge(t.sellerStatus)}
                      <div>
                        <div className="text-white">{t.seller}</div>
                        <div className="text-xs text-slate-400">{t.sellerRole}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-cyan-400 text-right font-medium">{formatCurrency(t.revenue2025)}</td>
                  <td className={`py-3 px-4 text-right font-bold ${t.gpPercent >= 50 ? 'text-green-400' : t.gpPercent >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {t.gpPercent.toFixed(1)}%
                  </td>
                  <td className="py-3 px-4 text-green-400 text-right font-medium">{formatCurrency(t.pipeline)}</td>
                  <td className={`py-3 px-4 text-right font-bold ${t.winRate >= 50 ? 'text-green-400' : t.winRate >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {t.winRate > 0 ? `${t.winRate.toFixed(1)}%` : '—'}
                  </td>
                  <td className="py-3 px-4">{getStatusBadge(t.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Territory Deep Dives */}
        <div className="space-y-8">
          {territories.map((t) => (
            <div key={t.id} className={`bg-gradient-to-br ${getStatusColor(t.status)} rounded-xl p-6 border`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left: Territory Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-white">{t.name}</h2>
                    {getStatusBadge(t.status)}
                  </div>
                  <p className="text-slate-300 mb-4">{t.character}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-slate-400">2025 Revenue</div>
                      <div className="text-xl font-bold text-cyan-400">{formatCurrency(t.revenue2025)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">GP Margin</div>
                      <div className={`text-xl font-bold ${t.gpPercent >= 50 ? 'text-green-400' : t.gpPercent >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {t.gpPercent.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Pipeline</div>
                      <div className="text-xl font-bold text-green-400">{formatCurrency(t.pipeline)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Win Rate</div>
                      <div className={`text-xl font-bold ${t.winRate >= 50 ? 'text-green-400' : t.winRate >= 35 ? 'text-yellow-400' : 'text-slate-500'}`}>
                        {t.winRate > 0 ? `${t.winRate.toFixed(1)}%` : '—'}
                      </div>
                    </div>
                  </div>

                  {/* Seller Assignment */}
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3">
                      {getSellerBadge(t.sellerStatus)}
                      <div>
                        <div className="text-white font-medium">{t.seller}</div>
                        <div className="text-xs text-slate-400">{t.sellerRole}</div>
                      </div>
                      {t.closedWonQ4 > 0 && (
                        <div className="ml-auto text-right">
                          <div className="text-green-400 font-semibold">{formatCurrency(t.closedWonQ4)} Q4 Won</div>
                          <div className="text-xs text-green-300">{formatCurrency(t.closedWonEGPQ4)} EGP</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Geography */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {t.geography.map((geo) => (
                      <span key={geo} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs">
                        📍 {geo}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Key Accounts */}
                <div className="lg:w-80">
                  <h3 className="text-lg font-bold text-white mb-3">Key Accounts</h3>
                  <div className="space-y-2">
                    {t.keyAccounts.map((account) => (
                      <div 
                        key={account.name} 
                        className={`flex justify-between items-center p-2 rounded ${
                          account.problem ? 'bg-red-900/30 border border-red-700/30' : 
                          account.target ? 'bg-yellow-900/30 border border-yellow-700/30' : 
                          'bg-slate-800/50'
                        }`}
                      >
                        <div>
                          <div className="text-white text-sm">{account.name}</div>
                          {account.problem && <div className="text-xs text-red-400">⚠️ Low margin</div>}
                          {account.target && <div className="text-xs text-yellow-400">🎯 Target</div>}
                        </div>
                        <div className="text-right">
                          {account.revenue > 0 && (
                            <>
                              <div className="text-cyan-400 text-sm">{formatCurrency(account.revenue)}</div>
                              <div className={`text-xs ${account.gp >= 40 ? 'text-green-400' : account.gp >= 25 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {account.gp.toFixed(0)}% GP
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Opportunities & Risks */}
              <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-700/50">
                <div>
                  <h4 className="text-green-400 font-bold mb-2">💡 Opportunities</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {t.opportunities.map((opp, i) => (
                      <li key={i}>• {opp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-400 font-bold mb-2">⚠️ Risks</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {t.risks.map((risk, i) => (
                      <li key={i}>• {risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Investment Ask */}
        <div className="mt-12 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-xl p-6 border border-cyan-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Territory Investment Priorities</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <div className="text-green-400 font-bold">Genetown</div>
              <div className="text-white text-lg font-semibold">EXPAND</div>
              <div className="text-xs text-slate-300 mt-2">18 accounts, target Vertex/Sarepta/Biogen</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <div className="text-green-400 font-bold">NJ Pharma</div>
              <div className="text-white text-lg font-semibold">GROW</div>
              <div className="text-xs text-slate-300 mt-2">Target Merck, BMS, Novo Nordisk</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <div className="text-green-400 font-bold">Mid-Atlantic</div>
              <div className="text-white text-lg font-semibold">DIVERSIFY</div>
              <div className="text-xs text-slate-300 mt-2">Reduce Abbott dependency, add AZ/GSK</div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
              <div className="text-blue-400 font-bold">Research Triangle</div>
              <div className="text-white text-lg font-semibold">PARTNER</div>
              <div className="text-xs text-slate-300 mt-2">Greenfield: IQVIA, Fujifilm, PPD, Samsung</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mt-12">
          <Link href="/team-capacity" className="bg-cyan-700 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Team Performance
          </Link>
          <Link href="/margin-analysis" className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Margin Analysis
          </Link>
          <Link href="/targets" className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Target Accounts
          </Link>
          <Link href="/financial-model" className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Financial Model
          </Link>
        </div>
      </main>
    </div>
  );
}


