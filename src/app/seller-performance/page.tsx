'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

// VERIFIED DATA: Sales MCP → get_team_performance + pipeline by owner | Feb 4, 2026
// Filtered to East region opportunity owners

export default function SellerPerformance() {
  const sellers = [
    {
      name: 'Mike Campbell',
      role: 'Account Manager',
      territory: 'NJ Pharma / Mid-Atlantic',
      opportunities: 87,
      wonDeals: 13,
      pipeline: 5.42,
      pipelineEGP: 2.28,
      closedWon: 1.47,
      closedWonEGP: 0.55,
      winRate: 14.9,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Lowest win rate on team (14.9% vs 50% goal)',
        'Highest pipeline volume ($5.42M) but poor conversion',
        'Focus on deal qualification — too many low-quality opps',
        'Owns 39% of East pipeline — critical to region success',
      ],
      churnSignals: 8,
      avgDealSize: 62000,
    },
    {
      name: 'Justin Ott',
      role: 'Senior AM',
      territory: 'NJ Pharma / Genetown',
      opportunities: 61,
      wonDeals: 46,
      pipeline: 4.42,
      pipelineEGP: 1.86,
      closedWon: 5.13,
      closedWonEGP: 1.89,
      winRate: 74.8,
      status: 'star',
      statusIcon: '⭐',
      coachingNeeds: [
        'Top performer — 74.8% win rate, best on team',
        'Document and share best practices',
        'Strong qualification and closing skills',
        'Mentor for other team members',
      ],
      churnSignals: 2,
      avgDealSize: 72000,
    },
    {
      name: 'Lisa Burgese Fry',
      role: 'EVP East',
      territory: 'East (All)',
      opportunities: 5,
      wonDeals: 3,
      pipeline: 0.46,
      pipelineEGP: 0.19,
      closedWon: 1.14,
      closedWonEGP: 0.47,
      winRate: 60.0,
      status: 'ok',
      statusIcon: '✅',
      coachingNeeds: [
        'Leadership role — driving regional strategy',
        'Focus on strategic executive relationships',
        'Mentor and coach for AM team',
      ],
      churnSignals: 1,
      avgDealSize: 92000,
    },
    {
      name: 'Scott Pallardy',
      role: 'Account Manager',
      territory: 'Genetown / NJ Pharma',
      opportunities: 6,
      wonDeals: 2,
      pipeline: 0.72,
      pipelineEGP: 0.36,
      closedWon: 0.85,
      closedWonEGP: 0.36,
      winRate: 33.3,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Win rate needs improvement (33% vs 50% goal)',
        'Good pipeline EGP ratio — quality opps',
        'Focus on closing existing opportunities',
        'Review qualification criteria',
      ],
      churnSignals: 4,
      avgDealSize: 120000,
    },
    {
      name: 'Avani Macwan',
      role: 'Account Manager',
      territory: 'Mid-Atlantic / NJ Pharma',
      opportunities: 6,
      wonDeals: 1,
      pipeline: 0.61,
      pipelineEGP: 0.26,
      closedWon: 0.32,
      closedWonEGP: 0.12,
      winRate: 16.7,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Low win rate — needs urgent attention',
        'Pipeline not converting to deals',
        'Opportunity scoring needed',
        'Weekly deal reviews required',
      ],
      churnSignals: 5,
      avgDealSize: 101000,
    },
    {
      name: 'Josh Ertmer',
      role: 'Staffing AM',
      territory: 'National (East focus)',
      opportunities: 4,
      wonDeals: 3,
      pipeline: 0.60,
      pipelineEGP: 0.15,
      closedWon: 0.45,
      closedWonEGP: 0.12,
      winRate: 75.0,
      status: 'star',
      statusIcon: '⭐',
      coachingNeeds: [
        'Strong conversion rate on East deals',
        'Lower EGP margin — staffing focus',
        'Cross-sell managed services to improve margin',
      ],
      churnSignals: 1,
      avgDealSize: 150000,
    },
    {
      name: 'Vega Finucan',
      role: 'Account Manager',
      territory: 'Genetown',
      opportunities: 5,
      wonDeals: 2,
      pipeline: 0.55,
      pipelineEGP: 0.28,
      closedWon: 0.38,
      closedWonEGP: 0.19,
      winRate: 40.0,
      status: 'ok',
      statusIcon: '✅',
      coachingNeeds: [
        'At target win rate',
        'Good EGP ratio on pipeline',
        'Continue building Genetown relationships',
      ],
      churnSignals: 2,
      avgDealSize: 110000,
    },
    {
      name: 'Kim Guihen',
      role: 'Account Manager',
      territory: 'Mid-Atlantic',
      opportunities: 3,
      wonDeals: 1,
      pipeline: 0.50,
      pipelineEGP: 0.25,
      closedWon: 0.22,
      closedWonEGP: 0.11,
      winRate: 33.3,
      status: 'ok',
      statusIcon: '✅',
      coachingNeeds: [
        'Small pipeline but focused territory',
        'Growing Mid-Atlantic presence',
        'Focus on Abbott expansion opportunities',
      ],
      churnSignals: 2,
      avgDealSize: 167000,
    },
  ];

  const formatCurrency = (value: number) => {
    if (value >= 1) return `$${value.toFixed(2)}M`;
    return `$${(value * 1000).toFixed(0)}K`;
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'star': return 'bg-green-900/30 border-green-700';
      case 'ok': return 'bg-blue-900/30 border-blue-700';
      case 'coaching': return 'bg-red-900/30 border-red-700';
      default: return 'bg-slate-800/50 border-slate-700';
    }
  };

  const getWinRateColor = (rate: number) => {
    if (rate >= 50) return 'text-green-400';
    if (rate >= 35) return 'text-yellow-400';
    return 'text-red-400';
  };

  const pipelineDistribution = sellers.map(s => ({
    name: s.name.split(' ')[0],
    value: s.pipeline,
    color: s.status === 'star' ? '#22c55e' : s.status === 'ok' ? '#3b82f6' : '#ef4444',
  }));

  const performanceComparison = sellers.slice(0, 6).map(s => ({
    name: s.name.split(' ')[0],
    'Win Rate': s.winRate,
    'Pipeline ($M)': s.pipeline,
  }));

  const totalPipeline = sellers.reduce((sum, s) => sum + s.pipeline, 0);
  const totalWon = sellers.reduce((sum, s) => sum + s.closedWon, 0);
  const totalEGP = sellers.reduce((sum, s) => sum + s.closedWonEGP, 0);
  const avgWinRate = sellers.reduce((sum, s) => sum + s.winRate, 0) / sellers.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Seller Performance</h1>
            <p className="text-slate-400 text-lg">Eastern Region sales team analysis with coaching recommendations</p>
          </div>
          <span className="text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded border border-green-700/50">
            Sales MCP | Feb 4, 2026
          </span>
        </div>

        {/* Data Source */}
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-blue-400">Sales MCP</span> → <code className="text-slate-500">get_team_performance</code>, <code className="text-slate-500">pipeline_by_owner</code> |
          <span className="text-slate-500"> {sellers.length} East opportunity owners</span>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">East Pipeline</div>
            <div className="text-3xl font-bold text-cyan-400">${totalPipeline.toFixed(1)}M</div>
            <div className="text-slate-500 text-sm mt-1">{sellers.reduce((sum, s) => sum + s.opportunities, 0)} opportunities</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Closed Won</div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(totalWon)}</div>
            <div className="text-slate-500 text-sm mt-1">{formatCurrency(totalEGP)} EGP</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Avg Win Rate</div>
            <div className={`text-3xl font-bold ${getWinRateColor(avgWinRate)}`}>{avgWinRate.toFixed(1)}%</div>
            <div className="text-slate-500 text-sm mt-1">Target: 50%</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Team Size</div>
            <div className="text-3xl font-bold text-white">{sellers.length}</div>
            <div className="text-slate-500 text-sm mt-1">East opp owners</div>
          </div>
        </div>

        {/* Concentration Warning */}
        <div className="bg-amber-900/20 rounded-xl p-4 border border-amber-700/30 mb-8">
          <p className="text-amber-200 text-sm">
            <span className="font-semibold">Concentration Risk:</span> Top 2 sellers (Mike Campbell + Justin Ott) own 70% of East Pipeline ($9.84M of $14.05M).
            Mike has 87 opps but 14.9% win rate — needs coaching on qualification. Justin has 74.8% win rate — the model to follow.
          </p>
        </div>

        {/* Leaderboard Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Seller Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                  <th className="py-3 px-4 text-slate-300">Seller</th>
                  <th className="py-3 px-4 text-slate-300">Territory</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Won</th>
                  <th className="py-3 px-4 text-slate-300 text-right">EGP</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                  <th className="py-3 px-4 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {sellers.sort((a, b) => b.closedWon - a.closedWon).map((seller, i) => (
                  <tr key={i} className={`border-b border-slate-800 ${getStatusColor(seller.status)} hover:bg-slate-700/30 transition`}>
                    <td className="py-3 px-4">
                      <div className="text-white font-medium">{seller.name}</div>
                      <div className="text-xs text-slate-400">{seller.role}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{seller.territory}</td>
                    <td className="py-3 px-4 text-cyan-400 text-right font-medium">{formatCurrency(seller.pipeline)}</td>
                    <td className="py-3 px-4 text-green-400 text-right font-medium">{formatCurrency(seller.closedWon)}</td>
                    <td className="py-3 px-4 text-green-300 text-right text-xs">{formatCurrency(seller.closedWonEGP)}</td>
                    <td className={`py-3 px-4 text-right font-bold text-lg ${getWinRateColor(seller.winRate)}`}>
                      {seller.winRate.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-lg">{seller.statusIcon}</span>
                      <span className={`text-xs ml-2 ${seller.status === 'star' ? 'text-green-400' : seller.status === 'ok' ? 'text-blue-400' : 'text-red-400'}`}>
                        {seller.status === 'star' ? 'STAR' : seller.status === 'ok' ? 'On Track' : 'COACHING'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coaching Priorities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-6">Coaching Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sellers.filter(s => s.status === 'coaching').slice(0, 3).map((seller, i) => (
              <div key={i} className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-white font-bold text-lg">{seller.name}</div>
                    <div className="text-red-400 text-sm">{seller.territory} | {seller.winRate.toFixed(1)}% Win Rate</div>
                  </div>
                  <span className="text-2xl">{seller.statusIcon}</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2">
                  {seller.coachingNeeds.map((need, idx) => (
                    <li key={idx}>• {need}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-red-700/30 flex justify-between text-xs">
                  <span className="text-slate-400">Churn Signals: <span className="text-red-400 font-bold">{seller.churnSignals}</span></span>
                  <span className="text-slate-400">Pipeline: <span className="text-cyan-400">{formatCurrency(seller.pipeline)}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Star Performers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Star Performers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sellers.filter(s => s.status === 'star').map((seller, i) => (
              <div key={i} className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-white font-bold text-lg">{seller.name}</div>
                    <div className="text-green-400 text-sm">{seller.role} | {seller.territory}</div>
                  </div>
                  <span className="text-2xl">{seller.statusIcon}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-slate-400">Pipeline</div>
                    <div className="text-cyan-400 font-semibold">{formatCurrency(seller.pipeline)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Won</div>
                    <div className="text-green-400 font-semibold">{formatCurrency(seller.closedWon)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Win Rate</div>
                    <div className="text-green-400 font-bold text-xl">{seller.winRate.toFixed(1)}%</div>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {seller.coachingNeeds.slice(0, 2).map((need, idx) => (
                    <li key={idx}>• {need}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Pipeline Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pipelineDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${Number(value).toFixed(1)}M`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pipelineDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => value !== undefined ? `$${Number(value).toFixed(2)}M` : ''} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Win Rate vs Pipeline (Top 6)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceComparison}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="Win Rate" fill="#22c55e" />
                <Bar dataKey="Pipeline ($M)" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 flex-wrap">
          <Link href="/sales-momentum" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all">
            Sales Momentum →
          </Link>
          <Link href="/churn-signals" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all">
            Churn Signals →
          </Link>
          <Link href="/dashboard" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            Financial Dashboard →
          </Link>
        </div>
      </main>
    </div>
  );
}
