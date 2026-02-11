'use client';

import Link from 'next/link';

export default function GenetownDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Overview</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">Genetown Ultra Deep Dive</h1>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">🎯 Hiring Priority</span>
        </div>
        <p className="text-emerald-400 text-xl mb-4">Boston / Cambridge — The Global Biotech Capital</p>
        <p className="text-slate-500 text-xs mb-8">📊 Data verified via Finance MCP | Last updated: Feb 11, 2026</p>

        {/* Territory Opportunity Banner */}
        <div className="bg-emerald-900/40 rounded-xl p-6 mb-8 border-2 border-emerald-500/50">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎯</span>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-emerald-400 mb-2">Territory Activation: 800+ Accounts Ready to Work</h2>
              <p className="text-slate-300 mb-3">
                GeneTown has <span className="text-emerald-400 font-bold">800+ orphaned accounts</span> requiring research, prioritization, and activation. 
                The playbook: deep account research → tier prioritization → ABM campaigns → Gong outreach sequences.
                <span className="text-white font-bold"> $1.17M open pipeline</span> needs immediate attention.
              </p>
              <Link href="/genetown-deep-dive/day-one-playbook" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                📋 View Territory Activation Playbook →
              </Link>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <StatCard title="2025 Revenue" value="$1.32M" trend="+42% YoY" />
          <StatCard title="Blended GP%" value="49.8%" trend="Target: 55%" />
          <StatCard title="Active Accounts" value="11" trend="of 1,000+ biotechs" />
          <StatCard title="Pipeline at Risk" value="$1.17M" trend="Needs owner NOW" highlight />
          <StatCard title="Historical LTV" value="$2.9M" trend="Proven relationships" />
        </div>

        {/* Why We're Hiring Here */}
        <section className="bg-emerald-900/30 rounded-xl p-8 mb-8 border-2 border-emerald-500/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👥</span>
            <h2 className="text-2xl font-bold text-white">Why We're Hiring in Boston</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Strategic Case</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">1.8% penetration</strong> of 1,000+ biotechs — massive whitespace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">$15B+ VC funding</strong> in 2025 alone — clients have budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Gene therapy HQ</strong> — Vertex, Sarepta, Bluebird need QA help</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">AI governance demand</strong> — early adopters concentrated here</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Client proximity</strong> — face-to-face selling works here</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Hiring Opportunity</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Deep talent pool</strong> — Harvard, MIT, Broad Institute pipeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Biotech layoffs</strong> — 2023-2024 rightsizing freed up talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Regulatory expertise</strong> — FDA-adjacent professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Remote-hybrid</strong> — Boston talent increasingly flexible</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Talent Landscape */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🎓 Talent Landscape</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Universities & Research</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">Harvard Medical School</strong> — Life sciences leadership</li>
                <li><strong className="text-white">MIT</strong> — Biotech engineering, AI/ML</li>
                <li><strong className="text-white">Broad Institute</strong> — Genomics, data science</li>
                <li><strong className="text-white">Northeastern</strong> — Co-op program pipeline</li>
                <li><strong className="text-white">Boston University</strong> — Bioinformatics</li>
                <li><strong className="text-white">Tufts</strong> — Drug development, biomedical eng</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Competitor Talent Pools</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">Veeva</strong> — Regulatory, quality systems</li>
                <li><strong className="text-white">IQVIA</strong> — Clinical data, analytics</li>
                <li><strong className="text-white">Deloitte Life Sciences</strong> — Cloud, compliance</li>
                <li><strong className="text-white">Cognizant</strong> — CSV, validation</li>
                <li><strong className="text-white">Accenture</strong> — Digital transformation</li>
                <li><strong className="text-white">EY Life Sciences</strong> — Regulatory strategy</li>
              </ul>
              <p className="text-emerald-400 text-xs mt-3">These firms have trained talent we can recruit</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Industry Sources</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">Biotech alumni</strong> — Genentech, Vertex, Moderna</li>
                <li><strong className="text-white">Pharma refugees</strong> — Pfizer, Novartis, Sanofi</li>
                <li><strong className="text-white">CRO experience</strong> — PPD, Parexel, Charles River</li>
                <li><strong className="text-white">CDMO ops</strong> — Catalent, Lonza, Fujifilm</li>
                <li><strong className="text-white">FDA / regulatory</strong> — Ex-agency professionals</li>
              </ul>
              <p className="text-emerald-400 text-xs mt-3">Look for CSV, QA, validation backgrounds</p>
            </div>
          </div>
        </section>

        {/* Roles We Need */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Priority Roles for Boston</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <RoleCard 
              title="Account Executive"
              level="Senior"
              urgency="critical"
              rationale="Face-to-face selling wins here. Need hunter with biotech Rolodex."
              salary="$150-200K OTE"
            />
            <RoleCard 
              title="Principal Consultant"
              level="Senior"
              urgency="high"
              rationale="Gene therapy QA expertise. Lead Vertex/Sarepta pursuits."
              salary="$180-220K"
            />
            <RoleCard 
              title="AI Governance Lead"
              level="Senior"
              urgency="high"
              rationale="Differentiated offering. Boston biotechs are early AI adopters."
              salary="$200-250K"
            />
            <RoleCard 
              title="CSV Consultants"
              level="Mid-Senior"
              urgency="medium"
              rationale="Delivery capacity for pipeline. Start with 2-3, scale to 8+."
              salary="$120-160K"
            />
          </div>
          <div className="mt-6 bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-semibold">💡 Hiring Math</p>
            <p className="text-slate-300 text-sm mt-1">
              1 AE @ $175K OTE + 3 consultants @ $140K = $595K loaded cost. Target: $2M revenue Year 1 = 3.4x ROI.
              Current: $1.35M with minimal presence. Additive $2M = $3.35M (+148% growth).
            </p>
          </div>
        </section>

        {/* Local Ecosystem */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🌐 Local Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Industry Events</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">BIO Boston</strong> — Annual, must-attend</li>
                <li><strong className="text-white">Biotech Week Boston</strong> — September</li>
                <li><strong className="text-white">MassBio events</strong> — Monthly networking</li>
                <li><strong className="text-white">Cambridge Innovation Center</strong> — Tech meetups</li>
                <li><strong className="text-white">MIT Enterprise Forum</strong> — Startup pitches</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Office Locations</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">Kendall Square</strong> — Biotech epicenter, premium</li>
                <li><strong className="text-white">Seaport</strong> — Growing biotech presence</li>
                <li><strong className="text-white">Alewife</strong> — More affordable, good transit</li>
                <li><strong className="text-white">Burlington/Waltham</strong> — Suburban, pharma HQs</li>
              </ul>
              <p className="text-slate-400 text-xs mt-3">WeWork/Regus options: $500-800/desk/month</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Key Associations</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">MassBio</strong> — 1,700+ member companies</li>
                <li><strong className="text-white">Cambridge Healthtech</strong> — Conference network</li>
                <li><strong className="text-white">ISPE Boston</strong> — Pharma engineering</li>
                <li><strong className="text-white">RAPS Boston</strong> — Regulatory affairs</li>
                <li><strong className="text-white">DIA</strong> — Drug development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Territory Overview */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Territory Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Why Genetown Matters</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>1,000+ biotech companies</strong> in Cambridge/Boston corridor</li>
                <li>• <strong>$15B+ VC funding</strong> in 2025 alone</li>
                <li>• <strong>Harvard/MIT/Broad Institute</strong> talent pipeline</li>
                <li>• <strong>mRNA revolution HQ</strong> — Moderna, BioNTech US</li>
                <li>• <strong>Gene therapy leaders</strong> — Vertex, Sarepta, Bluebird</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">USDM Opportunity</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Managed Services</strong> — 70-100% GP on existing accounts</li>
                <li>• <strong>AI Governance</strong> — High demand for AI validation</li>
                <li>• <strong>Cloud Assurance</strong> — Multi-cloud GxP environments</li>
                <li>• <strong>Cell & Gene Therapy</strong> — Manufacturing QA/QC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Win/Loss Intelligence */}
        <section className="bg-yellow-900/20 rounded-xl p-8 mb-8 border border-yellow-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">⚔️ Win/Loss Reality Check (Salesforce Data)</h2>
          <p className="text-slate-300 mb-6">
            We're not failing to GET meetings — we're <span className="text-yellow-400 font-semibold">losing deals we're already in</span>. 
            Competitor displacement is the issue, not awareness.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-emerald-400 font-bold text-xl">$20.2M</p>
              <p className="text-slate-400 text-sm">Total Won (Top 6 Accounts)</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-red-400 font-bold text-xl">$34.1M</p>
              <p className="text-slate-400 text-sm">Total Lost (Top 6 Accounts)</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-yellow-400 font-bold text-xl">37%</p>
              <p className="text-slate-400 text-sm">Blended Win Rate</p>
            </div>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-2 text-slate-400 font-medium">Account</th>
                  <th className="py-2 text-slate-400 font-medium text-right">Won</th>
                  <th className="py-2 text-slate-400 font-medium text-right">Lost</th>
                  <th className="py-2 text-slate-400 font-medium text-right">Win Rate</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700"><td className="py-2 text-white">Biogen</td><td className="py-2 text-right text-emerald-400">$11.8M</td><td className="py-2 text-right text-red-400">$25.7M</td><td className="py-2 text-right text-red-400">31%</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 text-white">Moderna</td><td className="py-2 text-right text-emerald-400">$102K</td><td className="py-2 text-right text-red-400">$504K</td><td className="py-2 text-right text-red-400">17%</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 text-white">Intellia</td><td className="py-2 text-right text-emerald-400">$285K</td><td className="py-2 text-right text-red-400">$1.26M</td><td className="py-2 text-right text-red-400">18%</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 text-white">Alnylam</td><td className="py-2 text-right text-emerald-400">$479K</td><td className="py-2 text-right text-red-400">$1.59M</td><td className="py-2 text-right text-yellow-400">23%</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 text-white">argenx</td><td className="py-2 text-right text-emerald-400">$4.6M</td><td className="py-2 text-right text-red-400">$1.1M</td><td className="py-2 text-right text-emerald-400">81%</td></tr>
              </tbody>
            </table>
          </div>
          <Link href="/genetown-deep-dive/day-one-playbook" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
            See full win/loss analysis in Day 1 Playbook →
          </Link>
        </section>

        {/* Margin Story */}
        <section className="bg-emerald-900/20 rounded-xl p-8 mb-8 border border-emerald-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">The Genetown Margin Story</h2>
          <p className="text-slate-300 mb-4">
            Genetown is a <span className="text-emerald-400 font-semibold">tale of two models</span>. Managed services accounts deliver
            outstanding 70-100% GP, while Takeda — the territory's largest account — drags the blended margin down with 14.5% GP on T&M staffing.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
              <p className="text-emerald-400 font-semibold mb-2">High-Margin Stars (70%+ GP)</p>
              <p className="text-slate-300 text-sm">Alexion (100%), Intellia (96.6%), Lyra (95.5%), Moderna (92.8%), Disc Medicine (88.5%), Ipsen (88.6%), Bioatla (87.4%), Harmony (81.6%), Ironwood (79.1%)</p>
            </div>
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
              <p className="text-red-400 font-semibold mb-2">Margin Recovery Needed</p>
              <p className="text-slate-300 text-sm">Takeda: $702K at 14.5% GP — largest Genetown account but T&M staffing model. Converting to managed services = +$179K profit.</p>
            </div>
          </div>
        </section>

        {/* Key Accounts */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Active Accounts (Salesforce Verified)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2025 Revenue</th>
                  <th className="py-3 text-slate-400 font-medium text-right">GP%</th>
                  <th className="py-3 text-slate-400 font-medium text-right">Open Pipe</th>
                  <th className="py-3 text-slate-400 font-medium text-right">LTV</th>
                  <th className="py-3 text-slate-400 font-medium">Owner</th>
                  <th className="py-3 text-slate-400 font-medium">Priority Action</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700 bg-red-900/10">
                  <td className="py-3 font-medium text-white">Takeda Pharmaceuticals</td>
                  <td className="py-3 text-right">$702K</td>
                  <td className="py-3 text-right text-red-400">14.5% ⚠️</td>
                  <td className="py-3 text-right">$450K</td>
                  <td className="py-3 text-right">$1.22M</td>
                  <td className="py-3 text-xs text-slate-400">De Luca / Fry</td>
                  <td className="py-3 text-xs"><span className="text-red-400">MARGIN FIX</span> — Convert to managed svcs</td>
                </tr>
                <tr className="border-b border-slate-700 bg-emerald-900/10">
                  <td className="py-3 font-medium text-white">Harmony Biosciences</td>
                  <td className="py-3 text-right">$127K</td>
                  <td className="py-3 text-right text-emerald-400">81.6% ⭐</td>
                  <td className="py-3 text-right">$125K</td>
                  <td className="py-3 text-right">$400K</td>
                  <td className="py-3 text-xs text-yellow-400">ORPHANED</td>
                  <td className="py-3 text-xs"><span className="text-emerald-400">PROTECT</span> — Template account, save NOW</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alnylam Pharmaceuticals</td>
                  <td className="py-3 text-right">$110K</td>
                  <td className="py-3 text-right text-emerald-400">71.5%</td>
                  <td className="py-3 text-right">$205K</td>
                  <td className="py-3 text-right">$251K</td>
                  <td className="py-3 text-xs text-slate-400">Pallardy</td>
                  <td className="py-3 text-xs"><span className="text-yellow-400">23% win rate</span> — Lost $1.59M, audit why</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Ironwood Pharma</td>
                  <td className="py-3 text-right">$102K</td>
                  <td className="py-3 text-right text-emerald-400">79.1%</td>
                  <td className="py-3 text-right">$88K</td>
                  <td className="py-3 text-right">$200K</td>
                  <td className="py-3 text-xs text-yellow-400">ORPHANED</td>
                  <td className="py-3 text-xs"><span className="text-emerald-400">+93.9% YoY</span> — Fastest grower, upsell</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Praxis Precision Medicines</td>
                  <td className="py-3 text-right">$97K</td>
                  <td className="py-3 text-right text-emerald-400">~55%</td>
                  <td className="py-3 text-right">$112K</td>
                  <td className="py-3 text-right">$191K</td>
                  <td className="py-3 text-xs text-slate-400">Fry</td>
                  <td className="py-3 text-xs"><span className="text-emerald-400">CLEAN</span> — Zero losses, pure growth</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Astellas Gene Therapies</td>
                  <td className="py-3 text-right">$93K</td>
                  <td className="py-3 text-right text-emerald-400">40.2%</td>
                  <td className="py-3 text-right">$84K</td>
                  <td className="py-3 text-right">$260K</td>
                  <td className="py-3 text-xs text-yellow-400">ORPHANED</td>
                  <td className="py-3 text-xs">Gene therapy QA expansion</td>
                </tr>
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Moderna</td>
                  <td className="py-3 text-right">$37K</td>
                  <td className="py-3 text-right text-emerald-400">92.8%</td>
                  <td className="py-3 text-right">$387K</td>
                  <td className="py-3 text-right">$102K</td>
                  <td className="py-3 text-xs text-slate-400">Fry</td>
                  <td className="py-3 text-xs"><span className="text-red-400">17% win rate</span> — Lost 8:1, fix pitch</td>
                </tr>
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Intellia Therapeutics</td>
                  <td className="py-3 text-right">$37K</td>
                  <td className="py-3 text-right text-emerald-400">96.6%</td>
                  <td className="py-3 text-right">$211K</td>
                  <td className="py-3 text-right">$285K</td>
                  <td className="py-3 text-xs text-slate-400">Kirikian</td>
                  <td className="py-3 text-xs"><span className="text-red-400">18% win rate</span> — Lost $1.26M, competitor?</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alexion Pharmaceuticals</td>
                  <td className="py-3 text-right">$34K</td>
                  <td className="py-3 text-right text-emerald-400">100%</td>
                  <td className="py-3 text-right">$33K</td>
                  <td className="py-3 text-right">$181K</td>
                  <td className="py-3 text-xs text-yellow-400">ORPHANED</td>
                  <td className="py-3 text-xs">Rare disease pipeline support</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700">
                  <td className="py-3 font-bold text-white">TOTAL (11 active)</td>
                  <td className="py-3 text-right font-bold text-white">$1.32M</td>
                  <td className="py-3 text-right font-bold text-yellow-400">49.8%</td>
                  <td className="py-3 text-right font-bold text-red-400">$1.17M</td>
                  <td className="py-3 text-right font-bold text-white">$2.9M</td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Salesforce + Finance MCP | Feb 11, 2026 | Prepared by David, AI Sales Intelligence Agent</p>
        </section>

        {/* Dormant Giants */}
        <section className="bg-blue-900/20 rounded-xl p-8 mb-8 border border-blue-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">💎 Dormant Giants (Salesforce History)</h2>
          <p className="text-slate-300 mb-6">
            These accounts have massive Salesforce history but no current revenue. Existing relationships = no cold calling.
            <span className="text-blue-400 font-semibold"> Reactivation is faster than new logos.</span>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-2 text-slate-400 font-medium">Account</th>
                  <th className="py-2 text-slate-400 font-medium text-right">Won (Historical)</th>
                  <th className="py-2 text-slate-400 font-medium text-right">Lost</th>
                  <th className="py-2 text-slate-400 font-medium text-right">Open</th>
                  <th className="py-2 text-slate-400 font-medium text-right"># Deals</th>
                  <th className="py-2 text-slate-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700 bg-emerald-900/10">
                  <td className="py-2 font-medium text-white">Biogen 🎯</td>
                  <td className="py-2 text-right text-emerald-400 font-bold">$11.8M</td>
                  <td className="py-2 text-right text-red-400">$25.7M</td>
                  <td className="py-2 text-right text-blue-400">$1.0M</td>
                  <td className="py-2 text-right">90 won / 218 lost</td>
                  <td className="py-2"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded">PRIORITY REACTIVATE</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-medium text-white">Sage Therapeutics</td>
                  <td className="py-2 text-right text-emerald-400">$5.2M</td>
                  <td className="py-2 text-right text-red-400">$1.5M</td>
                  <td className="py-2 text-right">$59K</td>
                  <td className="py-2 text-right">30 won / 16 lost</td>
                  <td className="py-2"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">Winding down?</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-medium text-white">argenx</td>
                  <td className="py-2 text-right text-emerald-400">$4.6M</td>
                  <td className="py-2 text-right text-red-400">$1.1M</td>
                  <td className="py-2 text-right text-blue-400">$1.3M</td>
                  <td className="py-2 text-right">15 won / 11 lost</td>
                  <td className="py-2"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded">ACTIVE — EXPAND</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-medium text-white">Hologic</td>
                  <td className="py-2 text-right text-emerald-400">$2.4M</td>
                  <td className="py-2 text-right text-red-400">$4.0M</td>
                  <td className="py-2 text-right">$290K</td>
                  <td className="py-2 text-right">21 won / 34 lost</td>
                  <td className="py-2"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">Active, losing share</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-medium text-white">Sarepta Therapeutics</td>
                  <td className="py-2 text-right text-emerald-400">$265K</td>
                  <td className="py-2 text-right text-red-400">$1.1M</td>
                  <td className="py-2 text-right text-slate-500">$0</td>
                  <td className="py-2 text-right">4 won / 15 lost</td>
                  <td className="py-2"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded">DORMANT</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-medium text-white">Blueprint Medicines</td>
                  <td className="py-2 text-right text-emerald-400">$892K</td>
                  <td className="py-2 text-right text-red-400">$1.6M</td>
                  <td className="py-2 text-right">$162K</td>
                  <td className="py-2 text-right">13 won / 22 lost</td>
                  <td className="py-2"><span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-0.5 rounded">Active, underweight</span></td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-medium text-white">Dyne Therapeutics</td>
                  <td className="py-2 text-right text-emerald-400">$149K</td>
                  <td className="py-2 text-right text-red-400">$1.35M</td>
                  <td className="py-2 text-right text-slate-500">$0</td>
                  <td className="py-2 text-right">1 won / 9 lost</td>
                  <td className="py-2"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded">DORMANT</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-semibold">💰 Reactivation Math</p>
            <p className="text-slate-300 text-sm mt-1">
              Biogen alone: $11.8M historical wins + $1M open = massive reactivation target.
              If we close just the $1M open pipe + add 2 new deals = <span className="text-white font-bold">$1.5M+ in 12 months</span>.
            </p>
          </div>
        </section>

        {/* Target Accounts */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Target Accounts (New Logos)</h2>
          <p className="text-slate-400 mb-6">High-priority prospects for new Boston AE. Ordered by strategic fit and likelihood to close.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TargetCard 
              name="Vertex Pharmaceuticals" 
              size="$8.7B revenue"
              focus="Gene editing (CRISPR/Cas9)" 
              signal="Casgevy launch, manufacturing scale" 
              priority="critical"
            />
            <TargetCard 
              name="Sarepta Therapeutics" 
              size="$1.8B revenue"
              focus="Gene therapy (DMD)" 
              signal="Elevidys commercial launch" 
              priority="critical"
            />
            <TargetCard 
              name="Biogen" 
              size="$9.8B revenue"
              focus="Neurodegeneration" 
              signal="AI drug discovery investments, Leqembi launch" 
              priority="high"
            />
            <TargetCard 
              name="Blueprint Medicines" 
              size="$500M+ revenue"
              focus="Precision kinase inhibitors" 
              signal="Growing fast, mast cell focus" 
              priority="high"
            />
            <TargetCard 
              name="Bluebird Bio" 
              size="$100M revenue"
              focus="Gene therapy (SCD, TDT)" 
              signal="Manufacturing scale-up, Lyfgenia" 
              priority="high"
            />
            <TargetCard 
              name="Beam Therapeutics" 
              size="Pre-revenue"
              focus="Base editing" 
              signal="$300M Series D, clinical trials starting" 
              priority="medium"
            />
            <TargetCard 
              name="Prime Medicine" 
              size="Pre-revenue"
              focus="Prime editing (CRISPR+)" 
              signal="$315M raised, platform validation" 
              priority="medium"
            />
            <TargetCard 
              name="CRISPR Therapeutics" 
              size="$100M revenue"
              focus="Gene editing (with Vertex)" 
              signal="Casgevy approval, pipeline expansion" 
              priority="high"
            />
            <TargetCard 
              name="Editas Medicine" 
              size="Pre-revenue"
              focus="CRISPR in vivo" 
              signal="EDIT-101 trials, new CEO" 
              priority="medium"
            />
          </div>
        </section>

        {/* Competitive Intelligence */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">⚔️ Competitive Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Direct Competitors in Boston</h3>
              <div className="space-y-3">
                <CompetitorCard 
                  name="Veeva" 
                  strength="Vault platform, regulatory docs" 
                  weakness="Expensive, rigid"
                  strategy="Position as Veeva implementation + AI layer"
                />
                <CompetitorCard 
                  name="Cognizant Life Sciences" 
                  strength="Scale, CSV capacity" 
                  weakness="Generic, offshore-heavy"
                  strategy="Compete on quality, gene therapy expertise"
                />
                <CompetitorCard 
                  name="Deloitte Life Sciences" 
                  strength="Brand, cloud practice" 
                  weakness="Very expensive, junior staff"
                  strategy="Win on value, senior talent"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Local Boutiques</h3>
              <div className="space-y-3">
                <CompetitorCard 
                  name="NSF International" 
                  strength="Quality systems, auditing" 
                  weakness="Less tech-focused"
                  strategy="Partner or differentiate on cloud/AI"
                />
                <CompetitorCard 
                  name="Lachman Consulting" 
                  strength="Regulatory, CMC" 
                  weakness="Niche, capacity limits"
                  strategy="Complement with validation services"
                />
                <CompetitorCard 
                  name="Compliance Solutions" 
                  strength="Boston presence, relationships" 
                  weakness="Smaller scale"
                  strategy="Compete on managed services model"
                />
              </div>
            </div>
          </div>
          <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-semibold">🏆 Our Differentiation</p>
            <p className="text-slate-300 text-sm mt-1">
              <strong>AI Governance:</strong> No one else has this. Boston biotechs are early AI adopters — we lead here. 
              <strong> Managed Services:</strong> 70-100% GP model vs T&M commodity pricing. 
              <strong> Gene Therapy QA:</strong> Deep ATMP expertise from West coast work.
            </p>
          </div>
        </section>

        {/* 2026 Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">2026 Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-900/30 rounded-lg p-5 border-2 border-red-500/50">
              <h3 className="text-red-400 font-semibold mb-2">🚨 #1: Save the Pipeline</h3>
              <p className="text-slate-300 text-sm mb-3">$1.17M in orphaned deals with no owner. These die in 2 weeks without intervention.</p>
              <p className="text-white font-medium text-sm">Day 1 action required</p>
            </div>
            <div className="bg-yellow-900/20 rounded-lg p-5 border border-yellow-700/30">
              <h3 className="text-yellow-400 font-semibold mb-2">🔧 #2: Takeda Margin Fix</h3>
              <p className="text-slate-300 text-sm mb-3">$702K at 14.5% GP = strategic liability. Convert to managed services.</p>
              <p className="text-white font-medium text-sm">Target: +$100K GP</p>
            </div>
            <div className="bg-emerald-900/20 rounded-lg p-5 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-2">🔄 #3: Biogen Reactivation</h3>
              <p className="text-slate-300 text-sm mb-3">$11.8M historical + $1M open. Someone else is winning $25.7M we lost.</p>
              <p className="text-white font-medium text-sm">Target: $1.5M Year 1</p>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-5 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-2">🎯 #4: Win Rate Recovery</h3>
              <p className="text-slate-300 text-sm mb-3">37% blended win rate at top accounts. We're in deals but losing them.</p>
              <p className="text-white font-medium text-sm">Target: 37% → 50%</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/genetown-deep-dive/day-one-playbook" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              📋 View Complete Day 1 Playbook →
            </Link>
          </div>
        </section>

        {/* 90-Day Hiring Plan */}
        <section className="bg-emerald-900/30 rounded-xl p-8 mb-8 border-2 border-emerald-500/50">
          <h2 className="text-2xl font-bold text-white mb-6">📅 90-Day Hiring Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">Days 1-30</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Post Account Executive role on LinkedIn, BioSpace</li>
                <li>• Reach out to Veeva/Cognizant/Deloitte alumni</li>
                <li>• Attend MassBio networking event</li>
                <li>• Set up WeWork desk in Kendall Square</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">Days 31-60</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• AE onboard, start relationship building</li>
                <li>• Post Principal Consultant role</li>
                <li>• Target Vertex, Sarepta, Biogen for intros</li>
                <li>• Establish Takeda margin recovery plan</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-emerald-400 font-semibold mb-3">Days 61-90</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• First new logo pipeline ($500K+)</li>
                <li>• Consultant #1 onboard</li>
                <li>• Moderna expansion meeting</li>
                <li>• Q2 hiring plan for 2 more consultants</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/margin-analysis" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Margin Analysis</p>
              <p className="text-slate-400 text-sm">Full customer profitability</p>
            </Link>
            <Link href="/targets" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Target Accounts</p>
              <p className="text-slate-400 text-sm">All Eastern prospects</p>
            </Link>
            <Link href="/seller-performance" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Seller Performance</p>
              <p className="text-slate-400 text-sm">Team capacity</p>
            </Link>
            <Link href="/ltv" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Customer LTV</p>
              <p className="text-slate-400 text-sm">Lifetime value trends</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, highlight }: { title: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
      <p className="text-emerald-400 text-xs mt-1">{trend}</p>
    </div>
  );
}

function RoleCard({ title, level, urgency, rationale, salary }: { 
  title: string; 
  level: string; 
  urgency: 'critical' | 'high' | 'medium'; 
  rationale: string;
  salary: string;
}) {
  const urgencyStyles = {
    critical: 'bg-red-900/30 border-red-500/50 text-red-400',
    high: 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400',
    medium: 'bg-blue-900/30 border-blue-500/50 text-blue-400',
  };
  return (
    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-white">{title}</h4>
        <span className={`text-xs px-2 py-0.5 rounded ${urgencyStyles[urgency]}`}>
          {urgency}
        </span>
      </div>
      <p className="text-slate-400 text-xs mb-2">{level} • {salary}</p>
      <p className="text-slate-300 text-sm">{rationale}</p>
    </div>
  );
}

function TargetCard({ name, size, focus, signal, priority }: { 
  name: string; 
  size: string;
  focus: string; 
  signal: string;
  priority: 'critical' | 'high' | 'medium';
}) {
  const priorityStyles = {
    critical: 'border-red-500/30 bg-red-900/10',
    high: 'border-yellow-500/30 bg-yellow-900/10',
    medium: 'border-slate-600 bg-slate-700/50',
  };
  const badgeStyles = {
    critical: 'bg-red-900/30 text-red-400 border-red-700/30',
    high: 'bg-yellow-900/30 text-yellow-400 border-yellow-700/30',
    medium: 'bg-slate-700 text-slate-400 border-slate-600',
  };
  return (
    <div className={`rounded-lg p-4 border ${priorityStyles[priority]}`}>
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-semibold text-white">{name}</h4>
        <span className={`text-xs px-2 py-0.5 rounded border ${badgeStyles[priority]}`}>{priority}</span>
      </div>
      <p className="text-slate-500 text-xs mb-2">{size}</p>
      <p className="text-slate-400 text-sm">{focus}</p>
      <p className="text-emerald-400 text-xs mt-2">{signal}</p>
    </div>
  );
}

function CompetitorCard({ name, strength, weakness, strategy }: {
  name: string;
  strength: string;
  weakness: string;
  strategy: string;
}) {
  return (
    <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50">
      <p className="font-semibold text-white text-sm">{name}</p>
      <p className="text-slate-400 text-xs mt-1">
        <span className="text-emerald-400">+</span> {strength}
      </p>
      <p className="text-slate-400 text-xs">
        <span className="text-red-400">-</span> {weakness}
      </p>
      <p className="text-blue-400 text-xs mt-1">→ {strategy}</p>
    </div>
  );
}
