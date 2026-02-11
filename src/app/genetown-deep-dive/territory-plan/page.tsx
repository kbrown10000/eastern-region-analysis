'use client';

import Link from 'next/link';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, 
  ResponsiveContainer, LineChart, Line, RadarChart, Radar, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, ComposedChart
} from 'recharts';

// ============================================================================
// DATA FROM MCP - All sourced from existing pages
// ============================================================================

// Active customers (18 accounts, $1.62M revenue)
const activeCustomers = [
  { name: 'Takeda', revenue: 702000, gp: 14.5, status: 'Fix', category: 'T&M' },
  { name: 'Harmony Bio', revenue: 127000, gp: 81.6, status: 'Star', category: 'Managed' },
  { name: 'Astellas Pharma', revenue: 111000, gp: 100, status: 'Star', category: 'Managed' },
  { name: 'Alnylam', revenue: 110000, gp: 71.5, status: 'Star', category: 'Managed' },
  { name: 'Ironwood', revenue: 102000, gp: 79.1, status: 'Star', category: 'Managed' },
  { name: 'Praxis', revenue: 97000, gp: 68.8, status: 'Grow', category: 'Cloud' },
  { name: 'Astellas Gene', revenue: 93000, gp: 40.2, status: 'Grow', category: 'Mixed' },
  { name: 'Schrödinger', revenue: 38000, gp: 97.8, status: 'Star', category: 'AI' },
  { name: 'Moderna', revenue: 37000, gp: 92.8, status: 'Expand', category: 'Cloud' },
  { name: 'Intellia', revenue: 37000, gp: 96.6, status: 'Star', category: 'Managed' },
  { name: 'Alexion', revenue: 34000, gp: 100, status: 'Star', category: 'Managed' },
  { name: 'Others (7)', revenue: 132000, gp: 65, status: 'Mixed', category: 'Mixed' },
];

// Dormant MSAs (24 accounts, $4.2M historical LTV)
const dormantHighPriority = [
  { name: 'Accumulus Synergy', ltv: 649000, lastYear: 2023, gp: 56.9, score: 85, opportunity: 'Cloud platform' },
  { name: 'Dyne Therapeutics', ltv: 149000, lastYear: 2024, gp: 47.7, score: 90, opportunity: 'Gene therapy QA' },
  { name: 'Genmab US', ltv: 223000, lastYear: 2024, gp: 56.9, score: 85, opportunity: 'BLA support' },
  { name: 'Precision Bio', ltv: 151000, lastYear: 2023, gp: 71.2, score: 75, opportunity: 'Clinical trials' },
  { name: 'Horizon (Amgen)', ltv: 194000, lastYear: 2024, gp: 70.1, score: 70, opportunity: 'Integration' },
];

// New logo targets (19 companies)
const newLogoTargets = [
  { name: 'Vertex', size: '$8.9B', priority: 'Critical', wedge: 'Casgevy mfg QA' },
  { name: 'Biogen', size: '$9.8B', priority: 'Critical', wedge: 'AI drug discovery' },
  { name: 'Sarepta', size: '$1.8B', priority: 'Critical', wedge: 'Elevidys mfg QA' },
  { name: 'Regeneron', size: '$13B', priority: 'High', wedge: 'Mfg validation' },
  { name: 'Blueprint', size: '$500M', priority: 'High', wedge: 'Kinase program' },
  { name: 'CRISPR Tx', size: '$100M', priority: 'High', wedge: 'Gene editing QA' },
];

// Services mix data
const servicesMix = [
  { name: 'Managed Services', revenue: 485, gp: 89, color: '#10b981' },
  { name: 'Cloud Assurance', revenue: 312, gp: 72, color: '#3b82f6' },
  { name: 'T&M Staffing', revenue: 702, gp: 15, color: '#ef4444' },
  { name: 'CSV/Validation', revenue: 156, gp: 65, color: '#8b5cf6' },
  { name: 'AI Governance', revenue: 45, gp: 95, color: '#f59e0b' },
];

// 3-year projection
const financialProjection = [
  { year: '2025 (Actual)', revenue: 1620, gp: 43, newLogos: 0, accounts: 18 },
  { year: '2026 (Y1)', revenue: 2400, gp: 52, newLogos: 3, accounts: 28 },
  { year: '2027 (Y2)', revenue: 3600, gp: 58, newLogos: 5, accounts: 38 },
  { year: '2028 (Y3)', revenue: 5000, gp: 62, newLogos: 8, accounts: 48 },
];

// GTM pillar alignment
const gtmPillars = [
  { pillar: 'AI Governance', current: 45, potential: 400, fit: 95 },
  { pillar: 'Cloud Assurance', current: 312, potential: 800, fit: 90 },
  { pillar: 'Gene Therapy QA', current: 200, potential: 600, fit: 88 },
  { pillar: 'Managed Services', current: 485, potential: 1200, fit: 85 },
  { pillar: 'Data Integrity', current: 100, potential: 400, fit: 80 },
];

// 90-day action plan
const ninetyDayPlan = [
  { week: 'Week 1-2', milestone: 'Territory Immersion', actions: ['Review all 42 accounts', 'Shadow delivery calls', 'Meet Boston team'], owner: 'New Rep' },
  { week: 'Week 3-4', milestone: 'Dormant Outreach', actions: ['Contact 8 dormant MSAs', 'Accumulus, Dyne, Genmab focus', 'Reactivation meetings'], owner: 'New Rep + AE' },
  { week: 'Week 5-8', milestone: 'Expansion Plays', actions: ['Moderna upsell', 'Takeda margin fix', 'Praxis expansion'], owner: 'New Rep' },
  { week: 'Week 9-12', milestone: 'New Logo Hunt', actions: ['Vertex intro via delivery', 'Biogen AI governance', 'Sarepta gene therapy QA'], owner: 'New Rep + Partner' },
];

// KPIs
const successKPIs = [
  { metric: 'Pipeline Generated', q1: '$500K', q2: '$1M', q3: '$1.5M', q4: '$2M' },
  { metric: 'Revenue Closed', q1: '$200K', q2: '$400K', q3: '$600K', q4: '$800K' },
  { metric: 'Blended GP%', q1: '48%', q2: '52%', q3: '55%', q4: '58%' },
  { metric: 'Dormant Reactivated', q1: '3', q2: '5', q3: '6', q4: '8' },
  { metric: 'New Logos Won', q1: '1', q2: '2', q3: '3', q4: '5' },
];

// Risk matrix
const risks = [
  { risk: 'Takeda churns or cuts', impact: 'High', likelihood: 'Medium', mitigation: 'Diversify revenue base, convert to managed services' },
  { risk: 'Gene therapy market slowdown', impact: 'Medium', likelihood: 'Low', mitigation: 'Expand AI governance wedge' },
  { risk: 'New rep ramp slower than plan', impact: 'High', likelihood: 'Medium', mitigation: 'Strong onboarding, mentor pairing' },
  { risk: 'Key contacts leave accounts', impact: 'Medium', likelihood: 'Medium', mitigation: 'Multi-thread relationships' },
];

// Partner ecosystem
const partners = [
  { name: 'PwC', type: 'Big 4', opportunity: 'Regulatory compliance referrals', status: 'Active' },
  { name: 'Deloitte', type: 'Big 4', opportunity: 'Cloud transformation co-sell', status: 'Developing' },
  { name: 'Veeva', type: 'Tech', opportunity: 'Vault implementation support', status: 'Active' },
  { name: 'AWS', type: 'Cloud', opportunity: 'Life sciences specialization', status: 'Exploring' },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function TerritoryPlanPage() {
  const totalRevenue = activeCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const avgGP = activeCustomers.reduce((sum, c) => sum + c.gp * c.revenue, 0) / totalRevenue;
  const dormantLTV = dormantHighPriority.reduce((sum, d) => sum + d.ltv, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Boston/Genetown 2026 Territory Growth Plan</h1>
          <p className="text-emerald-400 text-2xl mb-2">Board-Ready Business Case for Territory Investment</p>
          <p className="text-slate-400">Version 1.0 | February 2026 | Prepared for EVP East Review</p>
        </div>

        {/* ================================================================== */}
        {/* SECTION 1: EXECUTIVE SUMMARY */}
        {/* ================================================================== */}
        <Section title="1. Executive Summary" icon="📊">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <MetricCard title="Current Revenue" value={`$${(totalRevenue/1000).toFixed(0)}K`} subtitle="18 active accounts" trend="+42% YoY" color="emerald" />
            <MetricCard title="Blended GP%" value={`${avgGP.toFixed(1)}%`} subtitle="Target: 55%" trend="Needs work" color="yellow" />
            <MetricCard title="Dormant LTV" value={`$${(dormantLTV/1000).toFixed(0)}K`} subtitle="5 high-priority" trend="Quick wins" color="blue" />
            <MetricCard title="3-Year Target" value="$5M" subtitle="48 accounts" trend="3x growth" color="emerald" />
          </div>
          
          <div className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/50">
            <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
            <p className="text-slate-300 mb-4">
              Boston/Genetown is the world&apos;s densest biotech cluster with 1,000+ life sciences companies. 
              USDM has $1.6M revenue from 18 accounts — <span className="text-emerald-400 font-semibold">massive whitespace</span>. 
              With dedicated sales coverage, we project <span className="text-white font-semibold">$5M revenue by 2028</span> at 62% GP.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">Immediate Win</p>
                <p className="text-slate-400 text-sm">Reactivate 8 dormant MSAs = +$400K pipeline</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">Margin Fix</p>
                <p className="text-slate-400 text-sm">Convert Takeda T&M to managed = +$150K profit</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">New Logo Hunt</p>
                <p className="text-slate-400 text-sm">Vertex, Biogen, Sarepta = $1M+ potential each</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 2: ACCOUNT PORTFOLIO ANALYSIS */}
        {/* ================================================================== */}
        <Section title="2. Account Portfolio Analysis" icon="🏢">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Revenue by Account */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Revenue by Account (2025)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activeCustomers} layout="vertical">
                    <XAxis type="number" tickFormatter={(v) => `$${v/1000}K`} />
                    <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(value) => `$${(Number(value ?? 0)/1000).toFixed(0)}K`} />
                    <Bar dataKey="revenue" fill="#10b981">
                      {activeCustomers.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.gp < 30 ? '#ef4444' : entry.gp >= 70 ? '#10b981' : '#f59e0b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-slate-500 text-xs mt-2">Color: Green=70%+ GP, Yellow=30-70%, Red=&lt;30%</p>
            </div>

            {/* Account Status Pie */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Account Portfolio Status</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Stars (70%+ GP)', value: 10, color: '#10b981' },
                        { name: 'Grow (50-70% GP)', value: 4, color: '#3b82f6' },
                        { name: 'Fix (<30% GP)', value: 2, color: '#ef4444' },
                        { name: 'Watch', value: 2, color: '#f59e0b' },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
                      outerRadius={90}
                      dataKey="value"
                    >
                      {[
                        { color: '#10b981' },
                        { color: '#3b82f6' },
                        { color: '#ef4444' },
                        { color: '#f59e0b' },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Account Summary Table */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Portfolio Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">Active (18)</h4>
                <p className="text-slate-300 text-sm mb-2">$1.62M revenue | 43% avg GP</p>
                <p className="text-slate-400 text-xs">10 stars, 4 grow, 2 fix, 2 watch</p>
              </div>
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Dormant (24)</h4>
                <p className="text-slate-300 text-sm mb-2">$4.2M historical LTV</p>
                <p className="text-slate-400 text-xs">MSAs exist, no legal needed</p>
              </div>
              <div>
                <h4 className="text-red-400 font-semibold mb-2">New Logo Targets (19)</h4>
                <p className="text-slate-300 text-sm mb-2">$40B+ combined market cap</p>
                <p className="text-slate-400 text-xs">3 critical, 6 high priority</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 3: GTM PILLAR ALIGNMENT */}
        {/* ================================================================== */}
        <Section title="3. GTM Pillar Alignment" icon="🎯">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Service Line Fit (Radar)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={gtmPillars}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="pillar" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Radar name="Market Fit %" dataKey="fit" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Current vs Potential Revenue</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gtmPillars}>
                    <XAxis dataKey="pillar" tick={{ fontSize: 10 }} angle={-20} textAnchor="end" height={60} />
                    <YAxis tickFormatter={(v) => `$${v}K`} />
                    <Tooltip formatter={(value) => `$${Number(value ?? 0)}K`} />
                    <Legend />
                    <Bar dataKey="current" name="Current" fill="#3b82f6" />
                    <Bar dataKey="potential" name="Potential" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 rounded-xl p-6 mt-8 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-white mb-4">Top GTM Plays for Boston</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">AI Governance</p>
                <p className="text-slate-300 text-sm">95% market fit | Only $45K today</p>
                <p className="text-slate-400 text-xs mt-2">→ Tempus, Valo, Schrödinger expansion</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">Gene Therapy QA</p>
                <p className="text-slate-300 text-sm">88% market fit | $200K today</p>
                <p className="text-slate-400 text-xs mt-2">→ Vertex, Sarepta, Bluebird</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">Cloud Assurance</p>
                <p className="text-slate-300 text-sm">90% market fit | $312K today</p>
                <p className="text-slate-400 text-xs mt-2">→ Moderna, Accumulus reactivation</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 4: EXPANSION MATRIX */}
        {/* ================================================================== */}
        <Section title="4. Expansion Matrix" icon="📈">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Service Expansion Opportunities by Account</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="py-3 text-slate-400">Account</th>
                    <th className="py-3 text-slate-400 text-right">Current $</th>
                    <th className="py-3 text-slate-400">Current Services</th>
                    <th className="py-3 text-slate-400">Expansion Opportunity</th>
                    <th className="py-3 text-slate-400 text-right">Upside $</th>
                    <th className="py-3 text-slate-400">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700 bg-emerald-900/10">
                    <td className="py-3 font-medium text-white">Moderna</td>
                    <td className="py-3 text-right">$37K</td>
                    <td className="py-3 text-slate-400">Cloud Assurance</td>
                    <td className="py-3 text-emerald-400">AI Governance + Gene Therapy QA</td>
                    <td className="py-3 text-right text-emerald-400">$200K</td>
                    <td className="py-3"><PriorityBadge priority="high" /></td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-red-900/10">
                    <td className="py-3 font-medium text-white">Takeda</td>
                    <td className="py-3 text-right">$702K</td>
                    <td className="py-3 text-slate-400">T&M Staffing</td>
                    <td className="py-3 text-emerald-400">Convert to Managed Services</td>
                    <td className="py-3 text-right text-emerald-400">+$150K GP</td>
                    <td className="py-3"><PriorityBadge priority="critical" /></td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 font-medium text-white">Praxis</td>
                    <td className="py-3 text-right">$97K</td>
                    <td className="py-3 text-slate-400">CSV</td>
                    <td className="py-3 text-emerald-400">Managed Services + Cloud</td>
                    <td className="py-3 text-right text-emerald-400">$150K</td>
                    <td className="py-3"><PriorityBadge priority="high" /></td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 font-medium text-white">Intellia</td>
                    <td className="py-3 text-right">$37K</td>
                    <td className="py-3 text-slate-400">Managed Services</td>
                    <td className="py-3 text-emerald-400">Gene Therapy QA expansion</td>
                    <td className="py-3 text-right text-emerald-400">$100K</td>
                    <td className="py-3"><PriorityBadge priority="medium" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 5: NEW LOGO STRATEGY */}
        {/* ================================================================== */}
        <Section title="5. New Logo Strategy" icon="🎯">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {newLogoTargets.slice(0, 6).map((t) => (
              <div key={t.name} className={`rounded-xl p-6 border ${t.priority === 'Critical' ? 'bg-red-900/20 border-red-500/50' : 'bg-slate-800/50 border-slate-700'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <PriorityBadge priority={t.priority.toLowerCase()} />
                </div>
                <p className="text-slate-400 text-sm mb-2">{t.size}</p>
                <p className="text-emerald-400 text-sm font-medium">Wedge: {t.wedge}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">New Logo Acquisition Approach</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">1️⃣</div>
                <p className="text-emerald-400 font-semibold">Delivery Intro</p>
                <p className="text-slate-400 text-xs">Leverage existing project contacts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">2️⃣</div>
                <p className="text-emerald-400 font-semibold">Wedge Service</p>
                <p className="text-slate-400 text-xs">Start with specific pain point</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">3️⃣</div>
                <p className="text-emerald-400 font-semibold">Land & Expand</p>
                <p className="text-slate-400 text-xs">Prove value, add services</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">4️⃣</div>
                <p className="text-emerald-400 font-semibold">Strategic Partner</p>
                <p className="text-slate-400 text-xs">Multi-year managed services</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 6: PARTNER STRATEGY */}
        {/* ================================================================== */}
        <Section title="6. Partner Strategy" icon="🤝">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold">{p.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${p.status === 'Active' ? 'bg-emerald-900/30 text-emerald-400' : p.status === 'Developing' ? 'bg-blue-900/30 text-blue-400' : 'bg-slate-700 text-slate-400'}`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-slate-500 text-xs mb-2">{p.type}</p>
                <p className="text-slate-300 text-sm">{p.opportunity}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 7: MARKETING SUPPORT */}
        {/* ================================================================== */}
        <Section title="7. Marketing Support Requirements" icon="📣">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="text-emerald-400 font-bold mb-4">Events</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• BIO Boston (June) — Booth + meetings</li>
                <li>• DIA Annual (April) — Speaking slot</li>
                <li>• Cell & Gene Therapy (Oct) — Sponsorship</li>
                <li>• Local Boston biotech meetups</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="text-emerald-400 font-bold mb-4">Content</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Gene therapy QA whitepaper</li>
                <li>• AI governance framework guide</li>
                <li>• Boston biotech case studies (3x)</li>
                <li>• Thought leadership blogs (monthly)</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="text-emerald-400 font-bold mb-4">Campaigns</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Gene therapy vertical ABM</li>
                <li>• AI governance launch campaign</li>
                <li>• Dormant account reactivation</li>
                <li>• Boston biotech LinkedIn ads</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 8: HIRING & CAPACITY */}
        {/* ================================================================== */}
        <Section title="8. Hiring & Capacity Plan" icon="👥">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Role Definition: Boston Territory Rep</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-3">Profile</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• 5+ years life sciences sales experience</li>
                  <li>• Boston network (pharma/biotech contacts)</li>
                  <li>• Regulatory/QA/validation background preferred</li>
                  <li>• Hunter mentality + farmer skills</li>
                  <li>• Base: $120-140K | OTE: $240-280K</li>
                </ul>
              </div>
              <div>
                <h4 className="text-emerald-400 font-semibold mb-3">Ramp Timeline</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Month 1-2: Onboarding + territory immersion</li>
                  <li>• Month 3-4: Dormant reactivation + expansion</li>
                  <li>• Month 5-6: New logo hunting begins</li>
                  <li>• Month 6: First closed deal expected</li>
                  <li>• Month 12: Full productivity ($600K quota)</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 9: FINANCIAL MODEL */}
        {/* ================================================================== */}
        <Section title="9. Financial Model" icon="💰">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">3-Year Revenue Projection</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialProjection}>
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" tickFormatter={(v) => `$${v/1000}M`} />
                    <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => `${v}%`} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="revenue" name="Revenue ($K)" fill="#10b981" />
                    <Line yAxisId="right" type="monotone" dataKey="gp" name="GP %" stroke="#f59e0b" strokeWidth={3} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Account Growth Trajectory</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={financialProjection}>
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="accounts" name="Total Accounts" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="newLogos" name="New Logos (Cumulative)" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-white mb-4">Investment ROI</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-slate-400 text-sm">Year 1 Investment</p>
                <p className="text-white text-2xl font-bold">$280K</p>
                <p className="text-slate-500 text-xs">Rep + marketing + events</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Year 1 Revenue</p>
                <p className="text-emerald-400 text-2xl font-bold">$2.4M</p>
                <p className="text-slate-500 text-xs">+48% growth</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Year 1 GP</p>
                <p className="text-emerald-400 text-2xl font-bold">$1.25M</p>
                <p className="text-slate-500 text-xs">52% margin</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">ROI</p>
                <p className="text-emerald-400 text-2xl font-bold">4.5x</p>
                <p className="text-slate-500 text-xs">Year 1 payback</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 10: RISK & MITIGATION */}
        {/* ================================================================== */}
        <Section title="10. Risk & Mitigation" icon="⚠️">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400">Risk</th>
                  <th className="py-3 text-slate-400 text-center">Impact</th>
                  <th className="py-3 text-slate-400 text-center">Likelihood</th>
                  <th className="py-3 text-slate-400">Mitigation</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((r) => (
                  <tr key={r.risk} className="border-b border-slate-700">
                    <td className="py-3 text-white">{r.risk}</td>
                    <td className="py-3 text-center">
                      <span className={`text-xs px-2 py-1 rounded ${r.impact === 'High' ? 'bg-red-900/30 text-red-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                        {r.impact}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <span className={`text-xs px-2 py-1 rounded ${r.likelihood === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-emerald-900/30 text-emerald-400'}`}>
                        {r.likelihood}
                      </span>
                    </td>
                    <td className="py-3 text-slate-300">{r.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 11: 90-DAY ACTION PLAN */}
        {/* ================================================================== */}
        <Section title="11. 90-Day Action Plan" icon="📅">
          <div className="space-y-6">
            {ninetyDayPlan.map((phase, idx) => (
              <div key={phase.week} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-emerald-400 text-sm font-medium">{phase.week}</span>
                    <h4 className="text-white font-bold text-lg">{phase.milestone}</h4>
                  </div>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{phase.owner}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.actions.map((action) => (
                    <span key={action} className="text-xs bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full border border-emerald-700/30">
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ================================================================== */}
        {/* SECTION 12: SUCCESS KPIs */}
        {/* ================================================================== */}
        <Section title="12. Success KPIs" icon="📊">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Quarterly Targets — Year 1</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="py-3 text-slate-400">KPI</th>
                    <th className="py-3 text-slate-400 text-center">Q1</th>
                    <th className="py-3 text-slate-400 text-center">Q2</th>
                    <th className="py-3 text-slate-400 text-center">Q3</th>
                    <th className="py-3 text-slate-400 text-center">Q4</th>
                  </tr>
                </thead>
                <tbody>
                  {successKPIs.map((kpi) => (
                    <tr key={kpi.metric} className="border-b border-slate-700">
                      <td className="py-3 text-white font-medium">{kpi.metric}</td>
                      <td className="py-3 text-center text-slate-300">{kpi.q1}</td>
                      <td className="py-3 text-center text-slate-300">{kpi.q2}</td>
                      <td className="py-3 text-center text-slate-300">{kpi.q3}</td>
                      <td className="py-3 text-center text-emerald-400 font-medium">{kpi.q4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/50">
            <h3 className="text-xl font-bold text-white mb-4">The Ask</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-400">1</p>
                <p className="text-white font-medium">Dedicated Boston Rep</p>
                <p className="text-slate-400 text-sm">$140K base + OTE</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-400">$100K</p>
                <p className="text-white font-medium">Marketing Investment</p>
                <p className="text-slate-400 text-sm">Events + content + ABM</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-400">$5M</p>
                <p className="text-white font-medium">2028 Revenue Target</p>
                <p className="text-slate-400 text-sm">3x growth, 62% GP</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            Boston/Genetown Territory Growth Plan | Prepared February 2026 | Data Source: USDM Finance & Sales MCP
          </p>
          <p className="text-slate-500 text-xs mt-2">
            For questions: Contact Lisa Fry, EVP East
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span>{icon}</span> {title}
      </h2>
      {children}
    </section>
  );
}

function MetricCard({ title, value, subtitle, trend, color }: { title: string; value: string; subtitle: string; trend: string; color: string }) {
  const colorClasses = {
    emerald: 'bg-emerald-900/30 border-emerald-500/50 text-emerald-400',
    yellow: 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400',
    blue: 'bg-blue-900/30 border-blue-500/50 text-blue-400',
    red: 'bg-red-900/30 border-red-500/50 text-red-400',
  };
  
  return (
    <div className={`rounded-xl p-6 border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <p className="text-slate-400 text-sm mb-1">{title}</p>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-slate-400 text-xs">{subtitle}</p>
      <p className={`text-xs mt-2 ${colorClasses[color as keyof typeof colorClasses].split(' ').pop()}`}>{trend}</p>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const classes = {
    critical: 'bg-red-900/30 text-red-400 border-red-700/30',
    high: 'bg-orange-900/30 text-orange-400 border-orange-700/30',
    medium: 'bg-blue-900/30 text-blue-400 border-blue-700/30',
  };
  
  return (
    <span className={`text-xs px-2 py-1 rounded border ${classes[priority as keyof typeof classes] || classes.medium}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
}
