'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * VISUAL SUMMARY PAGE
 * 
 * Infographics summarizing the Eastern Region Growth Strategy
 * Generated using Nano Banana Pro (Gemini 3 Pro Image)
 * 
 * Last Updated: 2026-02-04
 */

const infographics = [
  {
    id: 1,
    title: 'Territory Engine',
    subtitle: 'The 4 Territories of the Eastern Region',
    filename: '01-territory-engine.png',
    description: 'Each territory operates like a piston in the regional engine. NJ Pharma is highest revenue, Genetown has 18 accounts, Mid-Atlantic anchored by Abbott, Research Triangle is greenfield.',
    linkedPage: '/territories',
    keyMetrics: ['NJ Pharma: $2.02M rev', 'Mid-Atlantic: $2.20M rev', 'Genetown: 18 accounts', 'Research Triangle: Greenfield'],
  },
  {
    id: 2,
    title: 'Partner Channel Gap',
    subtitle: 'USDM vs Industry Benchmarks',
    filename: '02-partner-gap.png',
    description: 'Partner-sourced revenue at USDM is 1.1% vs 28% industry average. Top performers get 58% from partners. Partner deals offer 40% higher value and 53% better close rates.',
    linkedPage: '/partner-overview',
    keyMetrics: ['USDM: 1.1%', 'Industry: 28%', 'Top Performers: 58%', 'Gap: 27 points'],
  },
  {
    id: 3,
    title: 'Team Performance',
    subtitle: 'Eastern Region Seller Capacity',
    filename: '03-seller-variance.png',
    description: 'Eastern Region led by EVP Lisa Fry. 36 accounts across 4 territories. Revenue $5.57M with 43.1% GP. $14.05M pipeline. Research Triangle greenfield needs dedicated coverage.',
    linkedPage: '/team-capacity',
    keyMetrics: ['EVP: Lisa Fry', 'Accounts: 36', 'Revenue: $5.57M', 'Pipeline: $14.05M'],
  },
  {
    id: 4,
    title: 'Pipeline Strength',
    subtitle: '$14.05M Pipeline Across 4 Territories',
    filename: '04-pipeline-crisis.png',
    description: 'Eastern pipeline at $14.05M. Coverage ratio needs improvement. Research Triangle is greenfield with zero current pipeline. NJ Pharma and Mid-Atlantic carry strongest pipeline activity.',
    linkedPage: '/critique/deep-analysis',
    keyMetrics: ['Pipeline: $14.05M', 'Accounts: 36', 'Greenfield: Research Triangle', 'GP: 43.1%'],
  },
  {
    id: 5,
    title: 'Margin Analysis',
    subtitle: 'East Region GP at 43.1%',
    filename: '05-margin-problem.png',
    description: 'Eastern region blended GP is 43.1%. Abbott is top account at $1.94M. Takeda at 14.5% GP and Bausch at 29.4% GP need margin improvement. High-margin accounts include Alexion (100%), Intellia (96.6%), Moderna (92.8%).',
    linkedPage: '/margin-analysis',
    keyMetrics: ['Blended GP: 43.1%', 'Abbott: $1.94M / 47.1%', 'Takeda: 14.5% GP', 'Top GP: Alexion 100%'],
  },
  {
    id: 6,
    title: 'GTM Prioritization',
    subtitle: 'Eastern Region Focus Areas',
    filename: '06-gtm-focus.png',
    description: 'Key GTM focus: CSV for SaaS, AI Governance, Manufacturing QA, Staffing & CBA, Data Integrity. Target territories: Genetown biotech startups, NJ big pharma, Research Triangle CDMO.',
    linkedPage: '/gtm-strategy',
    keyMetrics: ['Genetown: Biotech startups', 'NJ: Big Pharma', 'Research Triangle: CDMO', 'Mid-Atlantic: Govt/Pharma'],
  },
  {
    id: 7,
    title: 'Growth Trajectory',
    subtitle: 'Revenue Up 39.5% YoY',
    filename: '07-turnaround-reality.png',
    description: 'East region revenue grew 39.5% YoY ($3.99M to $5.57M). Abbott alone grew 213.8%. 36 accounts vs greenfield in Research Triangle. Expansion into NC is the next growth lever.',
    linkedPage: '/critique/deep-analysis',
    keyMetrics: ['Revenue: +39.5% YoY', 'Abbott: +213.8%', 'Accounts: 36', 'Pipeline: $14.05M'],
  },
  {
    id: 8,
    title: 'Territory Expansion ROI',
    subtitle: 'Research Triangle & Genetown Growth',
    filename: '08-investment-roi.png',
    description: 'The opportunity: Research Triangle is greenfield with IQVIA, Fujifilm Diosynth, PPD, Samsung Biologics as targets. Genetown has 18 accounts but targets like Vertex, Biogen, Sarepta remain unpenetrated.',
    linkedPage: '/partner-east',
    keyMetrics: ['Research Triangle: 6 targets', 'Genetown targets: 6', 'NJ targets: 6', 'Mid-Atlantic targets: 5'],
  },
];

export default function VisualSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Visual Summary</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back</Link>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl text-lg">
          Key concepts from the Eastern Region Growth Strategy visualized for clarity.
        </p>
        <p className="text-slate-400 mb-12 max-w-3xl text-sm">
          Generated with Nano Banana Pro (Gemini 3 Pro Image) • Click any infographic for detailed analysis
        </p>

        {/* Infographics Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {infographics.map((info) => (
            <div key={info.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all group">
              {/* Image */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <Image
                  src={`/infographics/${info.filename}`}
                  alt={info.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Link 
                    href={info.linkedPage}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold text-white">{info.id}. {info.title}</h2>
                    <p className="text-indigo-400 text-sm">{info.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">{info.description}</p>
                
                {/* Key Metrics */}
                <div className="flex flex-wrap gap-2">
                  {info.keyMetrics.map((metric, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <section className="mt-12 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">📥 Download All Infographics</h2>
          <p className="text-slate-400 mb-4">
            Use these visuals in presentations, reports, and strategic discussions.
          </p>
          <div className="flex flex-wrap gap-3">
            {infographics.map((info) => (
              <a
                key={info.id}
                href={`/infographics/${info.filename}`}
                download
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm text-slate-300 transition-colors"
              >
                {info.id}. {info.title}
              </a>
            ))}
          </div>
        </section>

        {/* Generation Info */}
        <section className="mt-8 text-center text-slate-500 text-sm">
          <p>Generated: 2026-02-04 • Tool: Nano Banana Pro (Gemini 3 Pro Image) • Resolution: 2K</p>
          <p>Data Sources: Sales MCP, Labor MCP, Finance MCP, Industry Research</p>
        </section>
      </main>
    </div>
  );
}


