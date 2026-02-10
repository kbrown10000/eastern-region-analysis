'use client';

import Link from 'next/link';
import { useState } from 'react';

const companies = [
  // Genetown (Boston/Cambridge)
  { name: "Vertex Pharmaceuticals", region: "Genetown", focus: "Gene Editing (CRISPR/Cas9)", funding: "Public ($8.7B rev)", employees: "10K+", stage: "Commercial", priority: "Strategic" },
  { name: "Sarepta Therapeutics", region: "Genetown", focus: "Gene Therapy (DMD)", funding: "Public ($2B rev)", employees: "4K+", stage: "Commercial", priority: "Strategic" },
  { name: "Biogen", region: "Genetown", focus: "Neurodegeneration", funding: "Public ($9.8B rev)", employees: "7K+", stage: "Commercial", priority: "Strategic" },
  { name: "Blueprint Medicines", region: "Genetown", focus: "Precision Kinase Inhibitors", funding: "Public ($500M+ rev)", employees: "1K+", stage: "Commercial", priority: "High" },
  { name: "Bluebird Bio", region: "Genetown", focus: "Gene Therapy (SCD, TDT)", funding: "Public", employees: "500+", stage: "Commercial", priority: "High" },
  { name: "Beam Therapeutics", region: "Genetown", focus: "Base Editing", funding: "$300M Series D", employees: "400+", stage: "Clinical", priority: "High" },
  { name: "Editas Medicine", region: "Genetown", focus: "CRISPR Gene Editing", funding: "Public", employees: "200+", stage: "Clinical", priority: "High" },
  { name: "Prime Medicine", region: "Genetown", focus: "Prime Editing", funding: "Public", employees: "200+", stage: "Clinical", priority: "High" },
  { name: "Translate Bio (Sanofi)", region: "Genetown", focus: "mRNA Therapeutics", funding: "Sanofi Subsidiary", employees: "150+", stage: "Clinical", priority: "Medium" },
  { name: "Magenta Therapeutics", region: "Genetown", focus: "Stem Cell Therapies", funding: "Public", employees: "100+", stage: "Clinical", priority: "Medium" },
  { name: "ElevateBio", region: "Genetown", focus: "Cell/Gene Therapy CDMO", funding: "$525M", employees: "500+", stage: "Growth", priority: "High" },
  { name: "Fog Pharma", region: "Genetown", focus: "Miniprotein Therapeutics", funding: "$344M", employees: "100+", stage: "Preclinical", priority: "Medium" },
  { name: "Remix Therapeutics", region: "Genetown", focus: "RNA Processing", funding: "$190M", employees: "80+", stage: "Preclinical", priority: "Medium" },
  { name: "Obsidian Therapeutics", region: "Genetown", focus: "Controllable Cell Therapies", funding: "$115M", employees: "60+", stage: "Clinical", priority: "Medium" },

  // NJ Pharma Corridor
  { name: "Merck & Co.", region: "NJ Pharma", focus: "Oncology, Vaccines", funding: "Public ($60B rev)", employees: "69K", stage: "Commercial", priority: "Strategic" },
  { name: "Bristol-Myers Squibb", region: "NJ Pharma", focus: "Oncology, Immunology", funding: "Public ($45B rev)", employees: "34K", stage: "Commercial", priority: "Strategic" },
  { name: "Novo Nordisk (US)", region: "NJ Pharma", focus: "Diabetes, Obesity", funding: "Public ($34B rev)", employees: "5K+ (US)", stage: "Commercial", priority: "Strategic" },
  { name: "Organon", region: "NJ Pharma", focus: "Women's Health", funding: "Public ($6.3B rev)", employees: "10K", stage: "Commercial", priority: "High" },
  { name: "Amneal Pharmaceuticals", region: "NJ Pharma", focus: "Generic/Specialty Pharma", funding: "Public ($2.5B rev)", employees: "7K", stage: "Commercial", priority: "Medium" },
  { name: "Hikma Pharmaceuticals (US)", region: "NJ Pharma", focus: "Injectables, Generics", funding: "Public ($2.6B rev)", employees: "2K+ (US)", stage: "Commercial", priority: "Medium" },
  { name: "Insmed", region: "NJ Pharma", focus: "Rare Disease (Lung)", funding: "Public ($350M rev)", employees: "1K+", stage: "Commercial", priority: "High" },
  { name: "PTC Therapeutics", region: "NJ Pharma", focus: "Rare Disease (Genetic)", funding: "Public ($600M rev)", employees: "1K+", stage: "Commercial", priority: "High" },
  { name: "Corcept Therapeutics (NJ office)", region: "NJ Pharma", focus: "Cortisol Modulation", funding: "Public ($700M rev)", employees: "500+", stage: "Commercial", priority: "Medium" },

  // Research Triangle
  { name: "IQVIA", region: "Research Triangle", focus: "CRO/Data Analytics", funding: "Public ($15B rev)", employees: "88K", stage: "Commercial", priority: "Strategic" },
  { name: "Fujifilm Diosynth (Holly Springs)", region: "Research Triangle", focus: "CDMO", funding: "$2B expansion", employees: "2K+", stage: "Commercial", priority: "Strategic" },
  { name: "PPD (Thermo Fisher)", region: "Research Triangle", focus: "CRO", funding: "Thermo division ($6B+)", employees: "30K+", stage: "Commercial", priority: "Strategic" },
  { name: "Samsung Biologics (US)", region: "Research Triangle", focus: "CDMO", funding: "$2B+ (parent)", employees: "500+ (US)", stage: "Growth", priority: "High" },
  { name: "Syneos Health", region: "Research Triangle", focus: "CRO/CSO", funding: "Private ($5B+)", employees: "25K", stage: "Commercial", priority: "High" },
  { name: "Catalent (RTP)", region: "Research Triangle", focus: "Cell Therapy CDMO", funding: "Public ($4B rev)", employees: "500+ (RTP)", stage: "Commercial", priority: "High" },
  { name: "KBI Biopharma", region: "Research Triangle", focus: "CDMO", funding: "JSR Subsidiary", employees: "1K+", stage: "Commercial", priority: "Medium" },
  { name: "Bioventus", region: "Research Triangle", focus: "Orthobiologics", funding: "Public ($500M rev)", employees: "1K+", stage: "Commercial", priority: "Medium" },
  { name: "G1 Therapeutics", region: "Research Triangle", focus: "Oncology", funding: "Public", employees: "200+", stage: "Commercial", priority: "Medium" },

  // Mid-Atlantic
  { name: "AstraZeneca (Wilmington)", region: "Mid-Atlantic", focus: "Oncology, Respiratory", funding: "Public ($45B rev)", employees: "5K+ (US)", stage: "Commercial", priority: "Strategic" },
  { name: "GSK (Philly)", region: "Mid-Atlantic", focus: "Vaccines, Infectious Disease", funding: "Public ($36B rev)", employees: "10K+ (US)", stage: "Commercial", priority: "Strategic" },
  { name: "Merck KGaA (Maryland)", region: "Mid-Atlantic", focus: "Bioprocessing, Life Science Tools", funding: "Public ($22B rev)", employees: "3K+ (US)", stage: "Commercial", priority: "High" },
  { name: "Catalent (Baltimore)", region: "Mid-Atlantic", focus: "Cell Therapy Manufacturing", funding: "Public ($4B rev)", employees: "2K+ (Baltimore)", stage: "Commercial", priority: "High" },
  { name: "Emergent BioSolutions", region: "Mid-Atlantic", focus: "CDMO, Biodefense", funding: "Public ($1.5B rev)", employees: "2K+", stage: "Commercial", priority: "High" },
  { name: "Supernus Pharmaceuticals", region: "Mid-Atlantic", focus: "CNS", funding: "Public ($700M rev)", employees: "800+", stage: "Commercial", priority: "Medium" },
  { name: "Sucampo (Mallinckrodt)", region: "Mid-Atlantic", focus: "Specialty Pharma", funding: "Public", employees: "2K+", stage: "Commercial", priority: "Medium" },
];

export default function Targets() {
  const [regionFilter, setRegionFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companies.filter(c => {
    const matchesRegion = regionFilter === 'All' || c.region === regionFilter;
    const matchesPriority = priorityFilter === 'All' || c.priority === priorityFilter;
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.focus.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesPriority && matchesSearch;
  });

  const priorityColors: Record<string, string> = {
    'Strategic': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
    'High': 'bg-red-500/20 text-red-400 border-red-500/50',
    'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    'Watch': 'bg-slate-500/20 text-slate-400 border-slate-500/50',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Eastern Region Target Companies</h1>
            <p className="text-slate-400">{filteredCompanies.length} companies matching filters</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />

            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Territories</option>
              <option value="Genetown">Genetown (Boston)</option>
              <option value="NJ Pharma">NJ Pharma Corridor</option>
              <option value="Research Triangle">Research Triangle</option>
              <option value="Mid-Atlantic">Mid-Atlantic</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Priorities</option>
              <option value="Strategic">Strategic</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-white">{companies.length}</p>
            <p className="text-slate-400 text-sm">Total Targets</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-purple-400">{companies.filter(c => c.priority === 'Strategic').length}</p>
            <p className="text-slate-400 text-sm">Strategic</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-red-400">{companies.filter(c => c.priority === 'High').length}</p>
            <p className="text-slate-400 text-sm">High Priority</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-cyan-400">4</p>
            <p className="text-slate-400 text-sm">Territories</p>
          </div>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{company.name}</h3>
                <span className={`text-xs px-2 py-1 rounded border ${priorityColors[company.priority]}`}>
                  {company.priority}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Territory:</span>
                  <span className="text-slate-300 text-sm">{company.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Focus:</span>
                  <span className="text-cyan-400 text-sm">{company.focus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Funding:</span>
                  <span className="text-slate-300 text-sm">{company.funding}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Stage:</span>
                  <span className="text-slate-300 text-sm">{company.stage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Size:</span>
                  <span className="text-slate-300 text-sm">{company.employees} employees</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">{company.region}</span>
                <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-400 rounded">{company.stage}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex gap-4">
          <Link href="/executive-summary" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            Executive Summary →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
