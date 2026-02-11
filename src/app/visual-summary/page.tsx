'use client';

import Link from 'next/link';

/**
 * VISUAL SUMMARY PAGE
 * 
 * Key concepts from the Eastern Region Growth Strategy
 * 
 * Last Updated: 2026-02-10
 */

const infographics = [
  {
    id: 1,
    title: 'The Four Eastern Corridors',
    subtitle: 'Genetown → NJ → Triangle → Mid-Atlantic',
    icon: '🗺️',
    description: 'Four distinct biotech powerhouses, each with unique characteristics. Genetown leads in innovation, NJ in scale, Research Triangle in growth, Mid-Atlantic in regulatory access.',
    linkedPage: '/territories',
    keyMetrics: ['Genetown: 1,000+ companies', 'NJ: Big Pharma HQs', 'Triangle: 24% growth', 'Mid-Atlantic: FDA adjacent'],
    color: 'emerald',
  },
  {
    id: 2,
    title: 'Eastern Market Dominance',
    subtitle: '$240B+ Combined Market Size',
    icon: '📊',
    description: 'The East captures more NIH funding, VC investment, and lab space than any other US region. Boston alone has $7.9B in VC and 62M sq ft of lab space.',
    linkedPage: '/market-analysis',
    keyMetrics: ['$13.8B VC (2024)', '$10.6B NIH funding', '123M sq ft labs', '1,650+ companies'],
    color: 'teal',
  },
  {
    id: 3,
    title: 'USDM East Performance',
    subtitle: '$24.8M Revenue | 51.5% GP',
    icon: '💰',
    description: 'Eastern region delivers strong margins — 15 points above West. Genetown leads at 58% GP. Lisa Fry as EVP oversees 185 active accounts across four territories.',
    linkedPage: '/executive-summary',
    keyMetrics: ['Revenue: $24.8M', 'GP: 51.5%', 'Accounts: 185', 'EVP: Lisa Fry'],
    color: 'green',
  },
  {
    id: 4,
    title: 'Territory Performance',
    subtitle: 'Genetown Leads, Triangle Grows Fastest',
    icon: '📈',
    description: 'Genetown: $12.4M revenue, 58% GP. NJ Corridor: $6.2M, needs margin work. Research Triangle: +22% YoY growth. Mid-Atlantic: Stable with regulatory focus.',
    linkedPage: '/territories',
    keyMetrics: ['Genetown: $12.4M', 'NJ: $6.2M', 'Triangle: +22%', 'Mid-Atlantic: $2.4M'],
    color: 'purple',
  },
  {
    id: 5,
    title: 'Boston/Cambridge Deep Dive',
    subtitle: 'The Global Biotech Capital',
    icon: '🧬',
    description: 'Home to Moderna, Vertex, Biogen, Sarepta. Kendall Square is the epicenter. AI drug discovery and gene therapy are the hot sectors. USDM has 85 accounts here.',
    linkedPage: '/genetown-deep-dive',
    keyMetrics: ['85 accounts', '$8.5M pipeline', 'Top: Moderna, Vertex', 'Focus: AI Governance'],
    color: 'emerald',
  },
  {
    id: 6,
    title: 'NJ Pharma Corridor',
    subtitle: 'Big Pharma Headquarters',
    icon: '💊',
    description: 'J&J, Merck, BMS, Novo Nordisk all headquartered here. Massive manufacturing footprint. Margin improvement opportunity — shift from staff aug to managed services.',
    linkedPage: '/nj-pharma-deep-dive',
    keyMetrics: ['42 accounts', '$4.8M pipeline', 'GP: 45.8%', 'Target: 52% GP'],
    color: 'blue',
  },
  {
    id: 7,
    title: 'Research Triangle Boom',
    subtitle: 'CDMO Capital | 24% Growth',
    icon: '🔬',
    description: 'Fastest-growing territory. Fujifilm $2B expansion, IQVIA headquarters, PPD/Thermo Fisher. The cell therapy manufacturing wave is creating massive opportunity.',
    linkedPage: '/research-triangle-deep-dive',
    keyMetrics: ['28 accounts', '+22% YoY', 'Fujifilm expansion', 'CDMO focus'],
    color: 'purple',
  },
  {
    id: 8,
    title: 'Strategic Priorities 2026',
    subtitle: 'Three Pillars for Growth',
    icon: '🎯',
    description: '1) Boston new logos (+$3M target) 2) CDMO expansion in Triangle (+$1.5M) 3) NJ margin lift (45%→52% GP). Partner channel development across all territories.',
    linkedPage: '/gtm-strategy',
    keyMetrics: ['Boston: +$3M', 'Triangle: +$1.5M', 'NJ: +7% GP', 'Partners: 10% target'],
    color: 'teal',
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-700', text: 'text-emerald-400', icon: 'bg-emerald-500' },
  teal: { bg: 'bg-teal-900/30', border: 'border-teal-700', text: 'text-teal-400', icon: 'bg-teal-500' },
  green: { bg: 'bg-green-900/30', border: 'border-green-700', text: 'text-green-400', icon: 'bg-green-500' },
  purple: { bg: 'bg-purple-900/30', border: 'border-purple-700', text: 'text-purple-400', icon: 'bg-purple-500' },
  blue: { bg: 'bg-blue-900/30', border: 'border-blue-700', text: 'text-blue-400', icon: 'bg-blue-500' },
};

export default function VisualSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Visual Summary</h1>
          <Link href="/" className="text-emerald-400 hover:text-emerald-300">← Back</Link>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl text-lg">
          Key concepts from the Eastern Region Growth Strategy at a glance.
        </p>
        <p className="text-slate-400 mb-12 max-w-3xl text-sm">
          EVP: Lisa Fry • 185 Accounts • $24.8M Revenue • 51.5% GP
        </p>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-emerald-900/30 border border-emerald-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-emerald-400">$24.8M</p>
            <p className="text-slate-400 text-sm">2025 Revenue</p>
          </div>
          <div className="bg-teal-900/30 border border-teal-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-teal-400">51.5%</p>
            <p className="text-slate-400 text-sm">Blended GP</p>
          </div>
          <div className="bg-purple-900/30 border border-purple-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-purple-400">185</p>
            <p className="text-slate-400 text-sm">Active Accounts</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-blue-400">$18.2M</p>
            <p className="text-slate-400 text-sm">Pipeline</p>
          </div>
        </div>

        {/* Infographics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {infographics.map((info) => {
            const colors = colorClasses[info.color];
            return (
              <Link 
                key={info.id} 
                href={info.linkedPage}
                className={`${colors.bg} rounded-xl overflow-hidden border ${colors.border} hover:bg-opacity-50 transition-all group`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{info.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">{info.id}. {info.title}</h2>
                        <span className={`${colors.text} group-hover:translate-x-1 transition-transform`}>→</span>
                      </div>
                      <p className={`${colors.text} text-sm`}>{info.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
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
              </Link>
            );
          })}
        </div>

        {/* Territory Quick Links */}
        <div className="mt-12 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">🗺️ Territory Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/genetown-deep-dive" className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-4 hover:bg-emerald-900/50 transition-colors">
              <span className="text-2xl">🧬</span>
              <p className="font-semibold text-white mt-2">Genetown</p>
              <p className="text-emerald-400 text-sm">$12.4M • 58% GP</p>
            </Link>
            <Link href="/nj-pharma-deep-dive" className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 hover:bg-blue-900/50 transition-colors">
              <span className="text-2xl">💊</span>
              <p className="font-semibold text-white mt-2">NJ Pharma</p>
              <p className="text-blue-400 text-sm">$6.2M • 45.8% GP</p>
            </Link>
            <Link href="/research-triangle-deep-dive" className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 hover:bg-purple-900/50 transition-colors">
              <span className="text-2xl">🔬</span>
              <p className="font-semibold text-white mt-2">Research Triangle</p>
              <p className="text-purple-400 text-sm">$3.8M • +22% 🚀</p>
            </Link>
            <Link href="/mid-atlantic-deep-dive" className="bg-teal-900/30 border border-teal-700 rounded-lg p-4 hover:bg-teal-900/50 transition-colors">
              <span className="text-2xl">🏛️</span>
              <p className="font-semibold text-white mt-2">Mid-Atlantic</p>
              <p className="text-teal-400 text-sm">$2.4M • 48.5% GP</p>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/executive-summary" 
            className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            View Full Executive Summary →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>USDM Life Sciences | Eastern Region Strategy 2026</p>
          <p className="text-sm mt-2">EVP: Lisa Fry | Data: Fabric Lakehouse MCPs</p>
        </div>
      </footer>
    </div>
  );
}
