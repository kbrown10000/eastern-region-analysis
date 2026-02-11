'use client';

import Link from 'next/link';

// Hot Boston/Cambridge biotech targets for new logo acquisition
// Research from web search: Fierce Biotech Fundraising Tracker, Built In Boston, BioSpace Genetown
const targetAccounts = [
  {
    name: 'Vertex Pharmaceuticals',
    size: '$8.7B revenue',
    focus: 'Gene editing (CRISPR/Cas9)',
    location: 'Boston, MA',
    funding: 'Public (VRTX)',
    signal: 'Casgevy launch, manufacturing scale-up, CMS payment models',
    priority: 'critical' as const,
    wedge: 'Gene therapy QA, AI governance for drug discovery',
    employees: '5,000+',
    news: 'First CRISPR therapy approved (Casgevy). Ramping manufacturing globally.',
  },
  {
    name: 'Sarepta Therapeutics',
    size: '$1.8B revenue',
    focus: 'Gene therapy (DMD)',
    location: 'Cambridge, MA',
    funding: 'Public (SRPT)',
    signal: 'Elevidys commercial launch, AAV manufacturing expansion',
    priority: 'critical' as const,
    wedge: 'ATMP compliance, manufacturing QA/QC',
    employees: '3,500+',
    news: 'Elevidys generating $250M+ quarterly. New gene therapy pipeline.',
  },
  {
    name: 'Biogen',
    size: '$9.8B revenue',
    focus: 'Neurodegeneration, AI drug discovery',
    location: 'Cambridge, MA',
    funding: 'Public (BIIB)',
    signal: 'Leqembi launch, AI drug discovery investments, cost cuts',
    priority: 'high' as const,
    wedge: 'AI governance, data integrity, cloud compliance',
    employees: '7,000+',
    news: 'Heavy AI investment. Restructuring creating consulting opportunities.',
  },
  {
    name: 'AIRNA',
    size: 'Series B',
    focus: 'RNA editing therapeutics',
    location: 'Cambridge, MA',
    funding: '$155M Series B (Apr 2025)',
    signal: 'Oversubscribed round led by Venrock, Forbion Growth',
    priority: 'high' as const,
    wedge: 'GxP compliance for RNA editing platform',
    employees: '50-100',
    news: 'Hot new modality. Building clinical capabilities.',
  },
  {
    name: 'Blueprint Medicines',
    size: '$500M+ revenue',
    focus: 'Precision kinase inhibitors',
    location: 'Cambridge, MA',
    funding: 'Public (BPMC)',
    signal: 'Ayvakit success, mast cell disease leadership',
    priority: 'high' as const,
    wedge: 'Manufacturing QA, cloud assurance',
    employees: '700+',
    news: 'Growing fast. Expanding pipeline beyond oncology.',
  },
  {
    name: 'Bluebird Bio (Genetix)',
    size: '$100M revenue',
    focus: 'Gene therapy (SCD, TDT)',
    location: 'Cambridge, MA',
    funding: 'Acquired late 2025',
    signal: 'Manufacturing scale-up, Lyfgenia commercial push',
    priority: 'high' as const,
    wedge: 'Gene therapy manufacturing QA',
    employees: '400+',
    news: 'Acquired by Genetix Biotherapeutics. New leadership, new focus.',
  },
  {
    name: 'Kriya Therapeutics',
    size: 'Series B',
    focus: 'Gene therapy manufacturing',
    location: 'Cambridge, MA (JLABS)',
    funding: '$151M Series B',
    signal: 'J&J Innovation portfolio, manufacturing focus',
    priority: 'high' as const,
    wedge: 'Manufacturing validation, AI for gene therapy',
    employees: '100+',
    news: 'Manufacturing-first gene therapy. Heavy QA needs.',
  },
  {
    name: 'Beam Therapeutics',
    size: 'Pre-revenue',
    focus: 'Base editing',
    location: 'Cambridge, MA',
    funding: 'Public (BEAM)',
    signal: 'Clinical trials starting, platform validation',
    priority: 'medium' as const,
    wedge: 'Novel modality QA, manufacturing validation',
    employees: '400+',
    news: 'Next-gen CRISPR. Multiple programs in clinic.',
  },
  {
    name: 'Prime Medicine',
    size: 'Pre-revenue',
    focus: 'Prime editing (CRISPR+)',
    location: 'Cambridge, MA',
    funding: 'Public (PRME)',
    signal: '$315M raised, platform validation',
    priority: 'medium' as const,
    wedge: 'Cutting-edge editing platform QA',
    employees: '200+',
    news: 'David Liu spinout. Next frontier in editing.',
  },
  {
    name: 'CRISPR Therapeutics',
    size: '$100M revenue',
    focus: 'Gene editing (with Vertex)',
    location: 'Cambridge, MA',
    funding: 'Public (CRSP)',
    signal: 'Casgevy approval, pipeline expansion',
    priority: 'high' as const,
    wedge: 'Manufacturing QC, clinical trial systems',
    employees: '600+',
    news: 'Casgevy royalties ramping. Expanding beyond sickle cell.',
  },
  {
    name: 'Editas Medicine',
    size: 'Pre-revenue',
    focus: 'CRISPR in vivo',
    location: 'Cambridge, MA',
    funding: 'Public (EDIT)',
    signal: 'EDIT-101 trials, new CEO, strategic reset',
    priority: 'medium' as const,
    wedge: 'Clinical trial systems, manufacturing QA',
    employees: '300+',
    news: 'New leadership. Pivoting strategy.',
  },
  {
    name: 'Actithera',
    size: 'Series A',
    focus: 'Fibroblast-targeting oncology',
    location: 'Cambridge, MA (Norway)',
    funding: '$75.5M Series A (Jul 2025)',
    signal: 'First clinical trials starting',
    priority: 'medium' as const,
    wedge: 'GxP compliance, clinical systems',
    employees: '30-50',
    news: 'Fresh funding. Building clinical infrastructure.',
  },
  {
    name: 'Senti Biosciences',
    size: 'Series C',
    focus: 'Gene circuit therapeutics',
    location: 'South San Francisco / Boston',
    funding: '$105M Series C (Northpond)',
    signal: 'Next-gen cell therapy with gene circuits',
    priority: 'medium' as const,
    wedge: 'Novel modality QA, manufacturing validation',
    employees: '100+',
    news: 'Programmable cell therapy. Unique QA challenges.',
  },
  {
    name: 'Vedanta Biosciences',
    size: 'Clinical stage',
    focus: 'Oral microbiome therapies',
    location: 'Cambridge, MA',
    funding: '$106.5M (AXA IM, AMR Action Fund)',
    signal: 'C. diff treatment, oral formulation',
    priority: 'medium' as const,
    wedge: 'Novel modality validation, manufacturing QA',
    employees: '75+',
    news: 'Microbiome leader. Unique manufacturing.',
  },
];

export default function TargetsPage() {
  const criticalTargets = targetAccounts.filter(t => t.priority === 'critical');
  const highTargets = targetAccounts.filter(t => t.priority === 'high');
  const mediumTargets = targetAccounts.filter(t => t.priority === 'medium');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown Overview</Link>

        <h1 className="text-4xl font-bold text-white mb-2">Genetown Target Accounts</h1>
        <p className="text-emerald-400 text-xl mb-8">Hot New Logos for Boston AE | Web Research + MCP Analysis</p>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Target Accounts" value={targetAccounts.length.toString()} subtitle="Hot prospects" highlight />
          <StatCard title="🔴 Critical" value={criticalTargets.length.toString()} subtitle="Must-win accounts" />
          <StatCard title="🟡 High" value={highTargets.length.toString()} subtitle="Strong fit" />
          <StatCard title="🟢 Medium" value={mediumTargets.length.toString()} subtitle="Emerging opportunities" />
        </div>

        {/* Market Context */}
        <section className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">🧬 Boston Biotech Market 2026</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-2">Gene Therapy Boom</h3>
              <p className="text-slate-300 text-sm">
                Casgevy & Elevidys approvals triggered manufacturing build-out. ATMP compliance is critical pain point.
              </p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-2">Funding Recovery</h3>
              <p className="text-slate-300 text-sm">
                Series B+ rounds resuming ($50M+ deals). Companies building clinical infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-2">AI Integration</h3>
              <p className="text-slate-300 text-sm">
                Drug discovery AI creating governance gaps. Early movers need QA frameworks.
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4">Sources: Fierce Biotech Fundraising Tracker 2026, BioSpace Genetown, Built In Boston</p>
        </section>

        {/* Critical Priority Targets */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🔴 Critical Priority — Must-Win Accounts
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {criticalTargets.map(target => (
              <TargetCard key={target.name} target={target} />
            ))}
          </div>
        </section>

        {/* High Priority Targets */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🟡 High Priority — Strong Strategic Fit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highTargets.map(target => (
              <TargetCard key={target.name} target={target} />
            ))}
          </div>
        </section>

        {/* Medium Priority Targets */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🟢 Medium Priority — Emerging Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediumTargets.map(target => (
              <TargetCard key={target.name} target={target} />
            ))}
          </div>
        </section>

        {/* Sales Playbook */}
        <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">📋 Sales Playbook</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-3">Opening Wedges</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Gene therapy QA:</strong> ATMP manufacturing compliance</li>
                <li>• <strong>AI governance:</strong> ML model validation frameworks</li>
                <li>• <strong>Cloud assurance:</strong> GxP multi-cloud environments</li>
                <li>• <strong>Data integrity:</strong> ALCOA+ compliance programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-3">Key Events</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>BIO Boston:</strong> Annual must-attend</li>
                <li>• <strong>Biotech Week Boston:</strong> September 2026</li>
                <li>• <strong>MassBio events:</strong> Monthly networking</li>
                <li>• <strong>ISPE Boston:</strong> Manufacturing focus</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-3">Competitive Intel</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Veeva:</strong> Vault incumbent, expensive</li>
                <li>• <strong>Cognizant:</strong> Scale but generic</li>
                <li>• <strong>Deloitte:</strong> Brand but junior staff</li>
                <li>• <strong>USDM edge:</strong> AI governance + gene therapy expertise</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TargetCard({ target }: { target: typeof targetAccounts[0] }) {
  const priorityStyles = {
    critical: 'border-red-500/50 bg-red-900/20',
    high: 'border-yellow-500/50 bg-yellow-900/20',
    medium: 'border-slate-600 bg-slate-700/30',
  };

  return (
    <div className={`rounded-lg p-5 border ${priorityStyles[target.priority]}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-white text-lg">{target.name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded ${
          target.priority === 'critical' ? 'bg-red-900/50 text-red-400' :
          target.priority === 'high' ? 'bg-yellow-900/50 text-yellow-400' :
          'bg-slate-700 text-slate-400'
        }`}>{target.priority}</span>
      </div>
      <p className="text-slate-400 text-sm mb-2">{target.size} • {target.employees}</p>
      <p className="text-slate-300 text-sm mb-3">{target.focus}</p>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-start gap-2">
          <span className="text-emerald-400 font-medium w-16">Funding:</span>
          <span className="text-slate-300">{target.funding}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-emerald-400 font-medium w-16">Signal:</span>
          <span className="text-slate-300">{target.signal}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-emerald-400 font-medium w-16">Wedge:</span>
          <span className="text-slate-300">{target.wedge}</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-700">
        <p className="text-slate-400 text-xs italic">{target.news}</p>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, highlight }: { title: string; value: string; subtitle: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 border ${highlight ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
      <p className="text-slate-500 text-xs mt-1">{subtitle}</p>
    </div>
  );
}
