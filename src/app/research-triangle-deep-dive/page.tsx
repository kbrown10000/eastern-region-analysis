'use client';

import Link from 'next/link';

export default function ResearchTriangleDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/account-assignments" className="text-yellow-400 hover:text-yellow-300 mb-8 inline-block">← Back to East Command Center</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">Research Triangle Deep Dive</h1>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full border border-red-500/30">🚨 GREENFIELD</span>
        </div>
        <p className="text-yellow-400 text-xl mb-4">Raleigh-Durham / NC — The Third-Largest Biotech Hub in the US</p>
        <p className="text-slate-500 text-xs mb-8">📊 Sales MCP v32.2.0 | Last updated: Mar 4, 2026</p>

        {/* GREENFIELD ALERT */}
        <div className="bg-red-900/40 rounded-xl p-6 mb-8 border-2 border-red-500/50">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🚨</span>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-red-400 mb-2">GREENFIELD TERRITORY — $0 Pipeline, No Coverage</h2>
              <p className="text-slate-300 mb-3">
                Research Triangle is the <span className="text-white font-bold">3rd largest biotech hub in the US</span> with 
                <span className="text-white font-bold"> 200+ life sciences companies</span>, yet USDM has 
                <span className="text-red-400 font-bold"> ZERO presence</span>. This is a massive whitespace opportunity.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-2xl">$0</p>
                  <p className="text-slate-400 text-sm">Current Pipeline</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-2xl">0</p>
                  <p className="text-slate-400 text-sm">Active Accounts</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-yellow-400 font-bold text-2xl">200+</p>
                  <p className="text-slate-400 text-sm">Target Companies</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold text-2xl">$5M+</p>
                  <p className="text-slate-400 text-sm">Addressable Market</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <StatCard title="Market Size" value="$85B+" trend="NC life sciences" highlight />
          <StatCard title="Companies" value="200+" trend="Biotech + Pharma" />
          <StatCard title="Growth Rate" value="+15%" trend="Fastest growing region" />
          <StatCard title="Major Anchors" value="15+" trend="$1B+ companies" />
          <StatCard title="Talent Pool" value="Duke + UNC" trend="Research universities" />
        </div>

        {/* Why RTP Matters */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Why Research Triangle Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">The Opportunity</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">200+ life sciences companies</strong> in RTP and surrounding area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Duke + UNC + NC State</strong> — World-class research and talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">$1B+ anchors</strong> — Biogen (RTP site), Novo Nordisk, IQVIA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Gene therapy hub</strong> — Precision BioSciences, Asklepios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Lower cost</strong> — 30-40% cheaper than Boston/NJ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Growing fast</strong> — 15%+ YoY growth, companies relocating from CA</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Why We're Not There</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No dedicated coverage — territory unassigned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>BioCryst (dormant) — only historical presence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No local relationships or brand awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Competitors (Veeva, IQVIA) well-established</span>
                </li>
              </ul>
              <div className="mt-4 bg-emerald-900/20 rounded p-3 border border-emerald-700/30">
                <p className="text-emerald-400 text-sm font-medium">💡 The Fix</p>
                <p className="text-slate-300 text-xs">Hire NC-based AE or assign to East team with travel budget. Start with gene therapy wedge (our strength).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dormant Account */}
        <section className="bg-yellow-900/20 rounded-xl p-8 mb-8 border border-yellow-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">⚠️ Dormant Account: BioCryst</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Historical Relationship</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <strong>Location:</strong> Durham, NC</li>
                <li>• <strong>Historical LTV:</strong> $318K</li>
                <li>• <strong>Last Activity:</strong> 2024</li>
                <li>• <strong>Status:</strong> Dormant — no current engagement</li>
                <li>• <strong>Focus:</strong> Rare disease (Orladeyo for HAE)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Reactivation Play</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Research Gong for previous champion contacts</li>
                <li>• Lead with AI governance — they're investing in data science</li>
                <li>• Manufacturing QA for Orladeyo scale-up</li>
                <li>• Use as anchor to build NC presence</li>
              </ul>
              <button className="mt-4 text-sm bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded">
                Assign Owner →
              </button>
            </div>
          </div>
        </section>

        {/* Target Accounts */}
        <section id="targets" className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Priority Target Accounts</h2>
          <p className="text-slate-400 mb-6">Top prospects in Research Triangle — gene therapy and rare disease focus</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TargetCard 
              name="Biogen (RTP Site)" 
              size="1,500+ employees"
              location="RTP, Durham NC"
              focus="Neurodegeneration R&D" 
              signal="Major R&D hub, gene therapy programs" 
              priority="critical"
            />
            <TargetCard 
              name="Novo Nordisk (Clayton)" 
              size="3,000+ employees"
              location="Clayton, NC"
              focus="Diabetes, Obesity Manufacturing" 
              signal="Massive expansion, Ozempic/Wegovy production" 
              priority="critical"
            />
            <TargetCard 
              name="Precision BioSciences" 
              size="300+ employees"
              location="Durham, NC"
              focus="Gene Editing (ARCUS)" 
              signal="Clinical trials, manufacturing scale" 
              priority="high"
            />
            <TargetCard 
              name="G1 Therapeutics" 
              size="200+ employees"
              location="RTP, NC"
              focus="Oncology (Cosela)" 
              signal="Commercial launch, manufacturing" 
              priority="high"
            />
            <TargetCard 
              name="Asklepios BioPharmaceutical" 
              size="250+ employees"
              location="RTP, NC"
              focus="Gene Therapy (AAV)" 
              signal="Bayer partnership, clinical programs" 
              priority="high"
            />
            <TargetCard 
              name="Liquidia Technologies" 
              size="150+ employees"
              location="Morrisville, NC"
              focus="Rare Disease (PAH)" 
              signal="YUTREPIA launch, manufacturing" 
              priority="medium"
            />
            <TargetCard 
              name="Aerie Pharmaceuticals" 
              size="400+ employees"
              location="Durham, NC"
              focus="Ophthalmology" 
              signal="Glaucoma drugs, commercial scale" 
              priority="medium"
            />
            <TargetCard 
              name="Chiesi USA" 
              size="500+ employees"
              location="Cary, NC"
              focus="Rare Disease, Respiratory" 
              signal="Expanding US presence" 
              priority="medium"
            />
            <TargetCard 
              name="Parion Sciences" 
              size="100+ employees"
              location="Durham, NC"
              focus="Respiratory (Cystic Fibrosis)" 
              signal="Vertex partnership, development" 
              priority="medium"
            />
          </div>
        </section>

        {/* Market Entry Strategy */}
        <section className="bg-yellow-900/20 rounded-xl p-8 mb-8 border border-yellow-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">📋 Market Entry Strategy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Phase 1: Foundation (Q1-Q2)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Assign territory owner (hire or reallocate)</li>
                <li>✓ Reactivate BioCryst relationship</li>
                <li>✓ Attend NCBiotech events for networking</li>
                <li>✓ Build initial target list (top 20)</li>
                <li>✓ Establish Duke/UNC connections</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Target</p>
                <p className="text-white font-semibold">3 qualified opportunities</p>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Phase 2: Traction (Q3-Q4)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Land first new logo (Precision Bio or G1)</li>
                <li>✓ Develop gene therapy QA case study</li>
                <li>✓ Expand pipeline to $500K+</li>
                <li>✓ Build referral network</li>
                <li>✓ Consider local office/WeWork</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Target</p>
                <p className="text-white font-semibold">$500K pipeline, 1 closed</p>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Phase 3: Scale (2027)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Land Biogen or Novo Nordisk</li>
                <li>✓ $1M+ revenue run rate</li>
                <li>✓ Hire local delivery consultants</li>
                <li>✓ Expand to adjacent NC markets</li>
                <li>✓ Become recognized RTP player</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Target</p>
                <p className="text-white font-semibold">$1M+ revenue</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Ecosystem */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🌐 Local Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Industry Events</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">NCBiotech Conference</strong> — Annual, must-attend</li>
                <li><strong className="text-white">BIO North Carolina</strong> — Industry association</li>
                <li><strong className="text-white">NC Life Sciences Summit</strong> — Leadership forum</li>
                <li><strong className="text-white">ISPE Carolina Chapter</strong> — Manufacturing</li>
                <li><strong className="text-white">Duke/UNC Industry Days</strong> — Recruiting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Research Partners</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">Duke University</strong> — Medical research</li>
                <li><strong className="text-white">UNC Chapel Hill</strong> — Pharma sciences</li>
                <li><strong className="text-white">NC State</strong> — Engineering, biotech</li>
                <li><strong className="text-white">RTI International</strong> — Contract research</li>
                <li><strong className="text-white">NIEHS (NIH)</strong> — Environmental health</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Office Options</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><strong className="text-white">RTP (Research Triangle Park)</strong> — Core campus</li>
                <li><strong className="text-white">Durham (Downtown)</strong> — Growing tech scene</li>
                <li><strong className="text-white">Raleigh</strong> — State capital, transit hub</li>
                <li><strong className="text-white">Chapel Hill</strong> — Near UNC</li>
              </ul>
              <p className="text-slate-400 text-xs mt-3">WeWork RTP: $400-600/desk/month</p>
            </div>
          </div>
        </section>

        {/* ROI Case */}
        <section className="bg-emerald-900/30 rounded-xl p-8 mb-8 border-2 border-emerald-500/50">
          <h2 className="text-2xl font-bold text-white mb-4">💰 Investment ROI Case</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Year 1 Investment</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>1 AE (NC-based):</strong> $180K OTE</li>
                <li>• <strong>Travel budget:</strong> $30K</li>
                <li>• <strong>Events/marketing:</strong> $20K</li>
                <li>• <strong>WeWork desk:</strong> $7K</li>
                <li className="border-t border-slate-700 pt-2"><strong className="text-white">Total:</strong> $237K</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Year 1 Return Target</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Revenue target:</strong> $400K</li>
                <li>• <strong>GP @ 55%:</strong> $220K</li>
                <li>• <strong>Pipeline built:</strong> $1M+</li>
                <li className="border-t border-slate-700 pt-2"><strong className="text-white">Year 1 ROI:</strong> Near break-even</li>
                <li><strong className="text-emerald-400">Year 2+ ROI:</strong> 3-5x as territory matures</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-emerald-400 font-semibold">Comparable: Genetown was $0 → $1.35M in 3 years</p>
            <p className="text-slate-300 text-sm">Research Triangle has similar potential with less competition</p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/account-assignments" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-yellow-400 font-medium">📊 East Command Center</p>
              <p className="text-slate-400 text-sm">Full region overview</p>
            </Link>
            <Link href="/genetown-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">🧬 Genetown</p>
              <p className="text-slate-400 text-sm">Boston biotech model</p>
            </Link>
            <Link href="/nj-pharma-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-blue-400 font-medium">💊 NJ Pharma</p>
              <p className="text-slate-400 text-sm">Big Pharma HQs</p>
            </Link>
            <Link href="/mid-atlantic-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-purple-400 font-medium">🏛️ Mid-Atlantic</p>
              <p className="text-slate-400 text-sm">DC/MD/VA/PA</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, highlight = false }: { title: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-6 border ${highlight ? 'bg-yellow-900/30 border-yellow-700/50' : 'bg-slate-800/50 border-slate-700'}`}>
      <div className="text-slate-400 text-sm font-semibold mb-2">{title}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className={`text-sm ${highlight ? 'text-yellow-300' : 'text-emerald-400'}`}>{trend}</div>
    </div>
  );
}

function TargetCard({ name, size, location, focus, signal, priority }: { name: string; size: string; location: string; focus: string; signal: string; priority: 'critical' | 'high' | 'medium' }) {
  const priorityStyles = {
    critical: 'border-red-500/50 bg-red-900/20',
    high: 'border-yellow-500/50 bg-yellow-900/20',
    medium: 'border-slate-500/50 bg-slate-800/50',
  };
  
  return (
    <div className={`rounded-lg p-5 border ${priorityStyles[priority]}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded ${
          priority === 'critical' ? 'bg-red-600 text-white' :
          priority === 'high' ? 'bg-yellow-600 text-white' :
          'bg-slate-600 text-white'
        }`}>{priority.toUpperCase()}</span>
      </div>
      <p className="text-yellow-400 text-sm mb-1">{size}</p>
      <p className="text-slate-400 text-xs mb-2">📍 {location}</p>
      <p className="text-slate-300 text-sm mb-2"><strong>Focus:</strong> {focus}</p>
      <p className="text-emerald-400 text-xs">🎯 {signal}</p>
    </div>
  );
}
