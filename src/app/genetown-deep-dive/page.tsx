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
        <p className="text-emerald-400 text-xl mb-8">Boston / Cambridge — The Global Biotech Capital</p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <StatCard title="2025 Revenue" value="$1.35M" trend="+39.4% YoY" />
          <StatCard title="GP%" value="43.1%" trend="High-margin managed svcs" />
          <StatCard title="Active Accounts" value="18" trend="of 1,000+ biotechs" />
          <StatCard title="Open Pipeline" value="$3.8M" trend="2.8x coverage" />
          <StatCard title="Market Penetration" value="1.8%" trend="Massive upside" highlight />
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
          <h2 className="text-2xl font-bold text-white mb-6">Key Accounts (MCP Verified)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium text-right">2025 Revenue</th>
                  <th className="py-3 text-slate-400 font-medium text-right">GP%</th>
                  <th className="py-3 text-slate-400 font-medium text-right">YoY</th>
                  <th className="py-3 text-slate-400 font-medium text-right">LTV</th>
                  <th className="py-3 text-slate-400 font-medium">Tier</th>
                  <th className="py-3 text-slate-400 font-medium">Expansion Play</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700 bg-red-900/10">
                  <td className="py-3 font-medium text-white">Takeda Pharmaceuticals</td>
                  <td className="py-3 text-right">$702K</td>
                  <td className="py-3 text-right text-red-400">14.5%</td>
                  <td className="py-3 text-right text-emerald-400">+88.2%</td>
                  <td className="py-3 text-right">$1.22M</td>
                  <td className="py-3"><span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded border border-red-700/30">Fix</span></td>
                  <td className="py-3 text-sm text-slate-400">Convert to managed services, AI governance</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Harmony Biosciences</td>
                  <td className="py-3 text-right">$127K</td>
                  <td className="py-3 text-right text-emerald-400">81.6%</td>
                  <td className="py-3 text-right text-emerald-400">+2.5%</td>
                  <td className="py-3 text-right">$400K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                  <td className="py-3 text-sm text-slate-400">Cloud expansion, SOX compliance</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alnylam Pharmaceuticals</td>
                  <td className="py-3 text-right">$110K</td>
                  <td className="py-3 text-right text-emerald-400">71.5%</td>
                  <td className="py-3 text-right text-emerald-400">+8.9%</td>
                  <td className="py-3 text-right">$251K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                  <td className="py-3 text-sm text-slate-400">RNAi manufacturing QA</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Ironwood Pharma</td>
                  <td className="py-3 text-right">$102K</td>
                  <td className="py-3 text-right text-emerald-400">79.1%</td>
                  <td className="py-3 text-right text-emerald-400">+93.9%</td>
                  <td className="py-3 text-right">$199K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                  <td className="py-3 text-sm text-slate-400">GI franchise data integrity</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Astellas Gene Therapies</td>
                  <td className="py-3 text-right">$93K</td>
                  <td className="py-3 text-right text-emerald-400">40.2%</td>
                  <td className="py-3 text-right text-emerald-400">+12.3%</td>
                  <td className="py-3 text-right">$261K</td>
                  <td className="py-3"><span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-700/30">Grow</span></td>
                  <td className="py-3 text-sm text-slate-400">Gene therapy QA, ATMP compliance</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Moderna</td>
                  <td className="py-3 text-right">$37K</td>
                  <td className="py-3 text-right text-emerald-400">92.8%</td>
                  <td className="py-3 text-right text-emerald-400">+0.5%</td>
                  <td className="py-3 text-right">$74K</td>
                  <td className="py-3"><span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded border border-purple-700/30">Expand</span></td>
                  <td className="py-3 text-sm text-slate-400">mRNA platform validation, AI governance</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Intellia Therapeutics</td>
                  <td className="py-3 text-right">$37K</td>
                  <td className="py-3 text-right text-emerald-400">96.6%</td>
                  <td className="py-3 text-right text-slate-400">-0.1%</td>
                  <td className="py-3 text-right">$127K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                  <td className="py-3 text-sm text-slate-400">CRISPR manufacturing QC</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Alexion Pharmaceuticals</td>
                  <td className="py-3 text-right">$34K</td>
                  <td className="py-3 text-right text-emerald-400">100%</td>
                  <td className="py-3 text-right text-emerald-400">+1.4%</td>
                  <td className="py-3 text-right">$99K</td>
                  <td className="py-3"><span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-700/30">Star</span></td>
                  <td className="py-3 text-sm text-slate-400">Rare disease pipeline support</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-emerald-700">
                  <td className="py-3 font-bold text-white">TOTAL (18 accounts)</td>
                  <td className="py-3 text-right font-bold text-white">$1.35M</td>
                  <td className="py-3 text-right font-bold text-emerald-400">43.1%</td>
                  <td className="py-3 text-right font-bold text-emerald-400">+39.4%</td>
                  <td className="py-3 text-right font-bold text-white">$3.12M</td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">Source: Finance MCP get_customer_ltv | Feb 2026</p>
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 rounded-lg p-6 border border-red-700/30">
              <h3 className="text-red-400 font-semibold mb-3">Takeda Margin Recovery</h3>
              <p className="text-slate-300 text-sm mb-3">Largest account at $702K but 14.5% GP. Shift from T&M staffing to managed services model.</p>
              <p className="text-white font-medium">Target: 14.5% → 40% GP = +$179K</p>
            </div>
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Expand Moderna Footprint</h3>
              <p className="text-slate-300 text-sm mb-3">92.8% GP but only $37K revenue. Massive expansion opportunity — AI governance, mRNA manufacturing QA.</p>
              <p className="text-white font-medium">Target: $37K → $200K+</p>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-3">New Logo Acquisition</h3>
              <p className="text-slate-300 text-sm mb-3">18 of 1,000+ Genetown biotechs. Vertex, Sarepta, Biogen all unaddressed. Gene therapy QA is the wedge.</p>
              <p className="text-white font-medium">Target: 5+ new logos in 2026</p>
            </div>
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
