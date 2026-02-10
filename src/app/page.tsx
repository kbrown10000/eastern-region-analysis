'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Eastern Region
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Growth Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
              USDM Life Sciences Account Growth Plan 2026
            </p>
            <p className="text-sm text-emerald-400 mb-8">Board Presentation | February 2026</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/executive-summary" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105">
                Executive Summary
              </Link>
              <Link href="/gtm-strategy" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                GTM Strategy
              </Link>
              <Link href="/dashboard" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all border border-slate-600">
                Financial Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">2025 East Region Performance</h2>
          <p className="text-slate-500 text-center mb-12 text-sm">Source: Finance MCP + Sales MCP | EVP: Lisa Fry</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricCard 
              title="2025 Revenue" 
              value="$24.8M" 
              trend="up"
              description="+8.2% YoY"
            />
            <MetricCard 
              title="Blended GP%" 
              value="51.5%" 
              trend="up"
              description="$12.8M gross profit"
            />
            <MetricCard 
              title="East Customers" 
              value="185" 
              trend="up"
              description="Active accounts"
            />
            <MetricCard 
              title="Open Pipeline" 
              value="$18.2M" 
              trend="up"
              description="Coverage: 1.2x"
            />
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Eastern Region Overview</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Four powerhouse life sciences corridors driving pharma innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RegionCard 
              region="Genetown"
              location="Boston / Cambridge"
              companies="1,000+"
              funding="$15B+ in 2025"
              focus="Biotech HQ, Gene Therapy, mRNA"
              highlights={["Moderna", "Vertex", "Biogen", "Sarepta"]}
              link="/genetown-deep-dive"
            />
            <RegionCard 
              region="NJ Pharma Corridor"
              location="New Brunswick → Princeton"
              companies="300+"
              funding="Big Pharma HQs"
              focus="Traditional Pharma, Manufacturing"
              highlights={["J&J", "Merck", "Bristol-Myers", "Novo Nordisk"]}
              link="/nj-pharma-deep-dive"
            />
            <RegionCard 
              region="Research Triangle"
              location="Raleigh-Durham, NC"
              companies="150+"
              funding="$3B+ VC in 2025"
              focus="CDMO, Cell Therapy Mfg"
              highlights={["Fujifilm Diosynth", "IQVIA", "PPD"]}
              link="/research-triangle-deep-dive"
            />
            <RegionCard 
              region="Mid-Atlantic"
              location="DC / Philadelphia / Baltimore"
              companies="200+"
              funding="NIH/FDA Adjacency"
              focus="Regulatory, Vaccines, Medical Devices"
              highlights={["AstraZeneca", "GSK", "Merck KGaA"]}
              link="/mid-atlantic-deep-dive"
            />
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Explore the Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NavCard 
              title="Target Accounts"
              description="60+ high-value biotech and pharma targets with expansion potential"
              link="/targets"
              icon="🎯"
            />
            <NavCard 
              title="Margin Analysis"
              description="Customer profitability deep-dive and GP optimization strategies"
              link="/margin-analysis"
              icon="📊"
            />
            <NavCard 
              title="Seller Performance"
              description="Territory coverage, win rates, and capacity planning"
              link="/seller-performance"
              icon="👥"
            />
            <NavCard 
              title="Partner Ecosystem"
              description="Strategic partnerships and channel acceleration"
              link="/partner-ecosystem"
              icon="🤝"
            />
            <NavCard 
              title="Service Expansion"
              description="Cross-sell opportunities: CA → AI, Managed Services"
              link="/service-expansion"
              icon="📈"
            />
            <NavCard 
              title="Churn Signals"
              description="At-risk accounts and retention strategies"
              link="/churn-signals"
              icon="⚠️"
            />
          </div>
        </div>
      </section>

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

function MetricCard({ title, value, trend, description }: { 
  title: string; 
  value: string; 
  trend: 'up' | 'down' | 'neutral';
  description: string;
}) {
  const trendColor = trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-slate-400';
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all">
      <p className="text-slate-400 text-sm uppercase tracking-wide">{title}</p>
      <p className="text-4xl font-bold text-white mt-2">{value}</p>
      <p className={`text-sm mt-2 ${trendColor}`}>
        {trendIcon} {description}
      </p>
    </div>
  );
}

function RegionCard({ region, location, companies, funding, focus, highlights, link }: {
  region: string;
  location: string;
  companies: string;
  funding: string;
  focus: string;
  highlights: string[];
  link: string;
}) {
  return (
    <Link href={link} className="block bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group">
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{region}</h3>
      <p className="text-emerald-400 text-sm mb-3">{location}</p>
      <div className="space-y-2 text-sm">
        <p className="text-slate-400"><span className="text-slate-300">{companies}</span> companies</p>
        <p className="text-slate-400"><span className="text-slate-300">{funding}</span></p>
        <p className="text-slate-400">{focus}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1">
        {highlights.map((h, i) => (
          <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{h}</span>
        ))}
      </div>
    </Link>
  );
}

function NavCard({ title, description, link, icon }: {
  title: string;
  description: string;
  link: string;
  icon: string;
}) {
  return (
    <Link href={link} className="block bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm mt-2">{description}</p>
    </Link>
  );
}
