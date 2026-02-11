'use client';

import Link from 'next/link';

export default function DayOnePlaybook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">Territory Activation Playbook</h1>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">🎯 PRIORITY</span>
        </div>
        <p className="text-emerald-400 text-xl mb-4">Boston Account Manager — Territory Research & Activation Guide</p>
        <p className="text-slate-500 text-xs mb-8">📊 Salesforce data verified Feb 11, 2026 | Prepared by David, AI Sales Intelligence Agent</p>

        {/* Territory Overview Banner */}
        <div className="bg-emerald-900/40 rounded-xl p-6 mb-8 border-2 border-emerald-500/50">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h2 className="text-xl font-bold text-emerald-400 mb-2">Territory Activation Opportunity</h2>
              <p className="text-slate-300 mb-3">
                GeneTown has <span className="text-white font-bold">~800+ orphaned accounts</span> ready for activation. 
                These aren't cold prospects — they have <span className="text-emerald-400 font-bold">existing Salesforce history and relationships</span>. 
                The playbook: deep account research → tier prioritization → ABM campaigns → Gong outreach sequences.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold text-2xl">$1.17M</p>
                  <p className="text-slate-400 text-sm">Open pipeline to close</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold text-2xl">11</p>
                  <p className="text-slate-400 text-sm">Active revenue accounts</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-blue-400 font-bold text-2xl">24+</p>
                  <p className="text-slate-400 text-sm">Dormant with existing MSAs</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-purple-400 font-bold text-2xl">800+</p>
                  <p className="text-slate-400 text-sm">Total accounts to research</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Week 1 Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Week 1: Research & Prioritization</h2>
          <div className="space-y-4">
            <PriorityItem 
              number={1}
              title="Deep Account Research — Pull Salesforce History"
              urgency="critical"
              description="800+ accounts have existing SF data. Export all accounts, analyze win/loss patterns, identify accounts with recent activity or high historical value."
              action="Salesforce export → sort by LTV + recent activity → create tiered target list"
            />
            <PriorityItem 
              number={2}
              title="Triage Open Pipeline ($1.17M)"
              urgency="critical"
              description="Prioritize by close date and deal size. Research each opportunity in Gong for call history and stakeholder context before outreach."
              action="Pipeline review → Gong research → prioritize top 10 → build outreach sequences"
            />
            <PriorityItem 
              number={3}
              title="Tier Account Prioritization"
              urgency="high"
              description="Segment accounts: Tier 1 (active revenue + high LTV), Tier 2 (dormant with MSAs), Tier 3 (new logos with intent signals). Different playbooks for each."
              action="Create account tiers in Salesforce → tag for ABM campaigns → assign outreach cadences"
            />
            <PriorityItem 
              number={4}
              title="Gong Intelligence Review"
              urgency="high"
              description="Review call recordings for top 20 accounts. Understand relationship history, key stakeholders, past objections, and competitor mentions."
              action="Gong search by account → document key contacts → note competitive intel"
            />
          </div>
        </section>

        {/* Week 2-4 */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Weeks 2-4: ABM Activation & Outreach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-700/30">
              <h3 className="text-purple-400 font-semibold mb-3">🎯 ABM Campaign Execution</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong className="text-white">Tier 1 (Active Revenue)</strong>: Personalized 1:1 outreach, executive meetings, expansion proposals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong className="text-white">Tier 2 (Dormant MSAs)</strong>: "We miss you" campaigns, reactivation offers, case study sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong className="text-white">Tier 3 (New Logos)</strong>: Intent-based targeting, thought leadership content, event invites</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-3">📞 Gong Outreach Sequences</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong className="text-white">Biogen</strong>: $11.8M won historically, $1M open. Research Gong for champion contacts, build multi-threaded sequence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong className="text-white">Moderna</strong>: $387K pipeline. Review lost deal calls in Gong — understand objections before outreach.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong className="text-white">Sarepta/Blueprint</strong>: Dormant with history. Use Gong to find last contacts, restart conversations.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Win/Loss Intelligence */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">⚔️ Win/Loss Intelligence (Salesforce)</h2>
          <p className="text-slate-400 mb-6">We're not failing to GET meetings — we're losing deals we're already in. Competitor displacement is the issue.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="py-3 text-slate-400 font-medium">Account</th>
                  <th className="py-3 text-slate-400 font-medium text-right">Won</th>
                  <th className="py-3 text-slate-400 font-medium text-right">Lost</th>
                  <th className="py-3 text-slate-400 font-medium text-right">Open</th>
                  <th className="py-3 text-slate-400 font-medium text-right">Win Rate</th>
                  <th className="py-3 text-slate-400 font-medium">Diagnosis</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700 bg-red-900/10">
                  <td className="py-3 font-medium text-white">Biogen</td>
                  <td className="py-3 text-right text-emerald-400">$11.8M</td>
                  <td className="py-3 text-right text-red-400">$25.7M</td>
                  <td className="py-3 text-right">$1.0M</td>
                  <td className="py-3 text-right text-red-400">31%</td>
                  <td className="py-3 text-sm text-slate-400">Someone else winning our deals. Who?</td>
                </tr>
                <tr className="border-b border-slate-700 bg-red-900/10">
                  <td className="py-3 font-medium text-white">Moderna</td>
                  <td className="py-3 text-right text-emerald-400">$102K</td>
                  <td className="py-3 text-right text-red-400">$504K</td>
                  <td className="py-3 text-right">$387K</td>
                  <td className="py-3 text-right text-red-400">17%</td>
                  <td className="py-3 text-sm text-slate-400">8:1 loss ratio. Pricing? Scope? Competitor?</td>
                </tr>
                <tr className="border-b border-slate-700 bg-red-900/10">
                  <td className="py-3 font-medium text-white">Intellia</td>
                  <td className="py-3 text-right text-emerald-400">$285K</td>
                  <td className="py-3 text-right text-red-400">$1.26M</td>
                  <td className="py-3 text-right">$211K</td>
                  <td className="py-3 text-right text-red-400">18%</td>
                  <td className="py-3 text-sm text-slate-400">Lost Medidata CA + Box support recently</td>
                </tr>
                <tr className="border-b border-slate-700 bg-yellow-900/10">
                  <td className="py-3 font-medium text-white">Alnylam</td>
                  <td className="py-3 text-right text-emerald-400">$479K</td>
                  <td className="py-3 text-right text-red-400">$1.59M</td>
                  <td className="py-3 text-right">$205K</td>
                  <td className="py-3 text-right text-yellow-400">23%</td>
                  <td className="py-3 text-sm text-slate-400">Lost 2.4x what we've won</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">argenx</td>
                  <td className="py-3 text-right text-emerald-400">$4.6M</td>
                  <td className="py-3 text-right text-red-400">$1.1M</td>
                  <td className="py-3 text-right">$1.3M</td>
                  <td className="py-3 text-right text-emerald-400">81%</td>
                  <td className="py-3 text-sm text-slate-400">✅ Model account — replicate this</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 font-medium text-white">Hologic</td>
                  <td className="py-3 text-right text-emerald-400">$2.4M</td>
                  <td className="py-3 text-right text-red-400">$4.0M</td>
                  <td className="py-3 text-right">$290K</td>
                  <td className="py-3 text-right text-yellow-400">37%</td>
                  <td className="py-3 text-sm text-slate-400">Active but losing share</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-yellow-900/20 rounded-lg p-4 border border-yellow-700/30">
            <p className="text-yellow-400 font-semibold">🎯 Key Insight</p>
            <p className="text-slate-300 text-sm mt-1">
              Across top 6 accounts: <strong className="text-white">$20.2M won vs $34.1M lost</strong> = 37% win rate. 
              We're in the deals but losing them. Week 2 priority: Interview delivery leads and lost-deal contacts to understand WHY.
            </p>
          </div>
        </section>

        {/* Biogen Deep Dive */}
        <section className="bg-emerald-900/30 rounded-xl p-8 mb-8 border-2 border-emerald-500/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-bold text-white">Biogen: Priority Reactivation Target</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-emerald-400 font-bold text-2xl">$11.8M</p>
              <p className="text-slate-400 text-sm">Historical Won</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-red-400 font-bold text-2xl">$25.7M</p>
              <p className="text-slate-400 text-sm">Lost to Competitors</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-blue-400 font-bold text-2xl">$1.0M</p>
              <p className="text-slate-400 text-sm">Open Pipeline</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-yellow-400 font-bold text-2xl">90 / 218</p>
              <p className="text-slate-400 text-sm">Deals Won / Lost</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Opportunity</h3>
              <p className="text-slate-300 text-sm mb-3">
                Biogen ($9.8B revenue) has <span className="text-white font-bold">deep USDM history</span> — 90 won deals totaling $11.8M. 
                But we've lost 218 deals totaling $25.7M. Competitive intelligence needed: who's winning and why?
              </p>
              <p className="text-slate-300 text-sm">
                Current status: <span className="text-emerald-400 font-semibold">$1M open pipeline ready to work</span>. 
                Gong research will reveal stakeholder history and entry points.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Research & Activation Play</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">1.</span>
                  <span><strong>Salesforce</strong>: Pull 218 lost deals — categorize by loss reason, identify patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">2.</span>
                  <span><strong>Gong</strong>: Review call history from 90 won deals — find champions still at company</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">3.</span>
                  <span><strong>Competitive Intel</strong>: Identify who's winning the $25.7M we're losing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">4.</span>
                  <span><strong>ABM</strong>: AI governance + Leqembi launch = fresh messaging angle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">5.</span>
                  <span><strong>Outreach</strong>: Multi-threaded sequence to $1M open pipeline contacts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Takeda Margin Optimization */}
        <section className="bg-yellow-900/20 rounded-xl p-8 mb-8 border border-yellow-700/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📊</span>
            <h2 className="text-2xl font-bold text-white">Takeda: Margin Optimization Opportunity</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Current State</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong className="text-white">$702K revenue</strong> at <strong className="text-yellow-400">14.5% GP</strong></p>
                <p>This generates ~$102K gross profit — the same as a $125K account at 80% GP.</p>
                <p>Likely staffing-dominant engagement. Opportunity to transition to managed services model.</p>
                <p className="text-slate-400">Largest territory account — worth optimizing.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Research & Optimization Play</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">1.</span>
                  <span><strong>Research</strong>: Map all active consultants and current engagements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">2.</span>
                  <span><strong>Gong</strong>: Review account calls for expansion signals and stakeholder map</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">3.</span>
                  <span><strong>Identify</strong>: Projects convertible to managed services model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">4.</span>
                  <span><strong>ABM</strong>: Position AI governance + Cloud as value-add services</span>
                </li>
              </ul>
              <div className="mt-4 bg-emerald-900/30 rounded-lg p-3 border border-emerald-700/30">
                <p className="text-emerald-400 text-sm font-semibold">Target Impact</p>
                <p className="text-slate-300 text-sm">Shift 30% to managed services @ 50% GP = <strong className="text-white">+$70K additional gross profit</strong> on same revenue</p>
              </div>
            </div>
          </div>
        </section>

        {/* 30-60-90 Plan */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">📅 30-60-90 Day Milestones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-700/30">
              <h3 className="text-purple-400 font-semibold mb-3">Day 30: Research Complete</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ 800+ accounts researched & tiered</li>
                <li>✓ Gong history reviewed for top 20</li>
                <li>✓ $1.17M pipeline prioritized</li>
                <li>✓ Competitive intel documented</li>
                <li>✓ ABM campaign targets identified</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Success Metric</p>
                <p className="text-white font-semibold">Tiered target list ready</p>
              </div>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-3">Day 60: Outreach Active</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ ABM campaigns live for all tiers</li>
                <li>✓ Gong sequences running on Tier 1</li>
                <li>✓ Biogen multi-threaded outreach</li>
                <li>✓ 3+ dormant accounts re-engaged</li>
                <li>✓ New logo meetings scheduled (5+)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Success Metric</p>
                <p className="text-white font-semibold">$500K new pipeline created</p>
              </div>
            </div>
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Day 90: Pipeline Built</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ First new logo closed</li>
                <li>✓ Biogen re-engaged ($200K+ opp)</li>
                <li>✓ Takeda expansion proposal live</li>
                <li>✓ $2M+ total qualified pipeline</li>
                <li>✓ Q2 forecast committed</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Success Metric</p>
                <p className="text-white font-semibold">$300K new bookings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Targets */}
        <section className="bg-emerald-900/30 rounded-xl p-8 mb-8 border-2 border-emerald-500/50">
          <h2 className="text-2xl font-bold text-white mb-4">💰 12-Month Revenue Target</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm">Base (Protected)</p>
              <p className="text-2xl font-bold text-white">$1.32M</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm">Expansion</p>
              <p className="text-2xl font-bold text-emerald-400">+$400K</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm">Reactivation</p>
              <p className="text-2xl font-bold text-blue-400">+$300K</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm">New Logos</p>
              <p className="text-2xl font-bold text-purple-400">+$380K</p>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <p className="text-slate-400 text-sm mb-2">12-Month Target Range</p>
            <p className="text-4xl font-bold text-white">$2.0M – $2.4M</p>
            <p className="text-emerald-400 text-sm mt-2">at 55%+ blended GP (up from 49.8%)</p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/genetown-deep-dive" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Genetown Overview</p>
              <p className="text-slate-400 text-sm">Full territory analysis</p>
            </Link>
            <Link href="/genetown-deep-dive/dormant-msas" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Dormant MSAs</p>
              <p className="text-slate-400 text-sm">24 accounts with contracts</p>
            </Link>
            <Link href="/genetown-deep-dive/services-mix" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Services Mix</p>
              <p className="text-slate-400 text-sm">Revenue by service line</p>
            </Link>
            <Link href="/genetown-deep-dive/targets" className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
              <p className="text-emerald-400 font-medium">Target Accounts</p>
              <p className="text-slate-400 text-sm">New logo prospects</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function PriorityItem({ number, title, urgency, description, action }: {
  number: number;
  title: string;
  urgency: 'critical' | 'high' | 'medium';
  description: string;
  action: string;
}) {
  const urgencyStyles = {
    critical: 'bg-red-900/30 border-red-500/50 text-red-400',
    high: 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400',
    medium: 'bg-blue-900/30 border-blue-500/50 text-blue-400',
  };
  
  return (
    <div className={`rounded-lg p-5 border ${urgencyStyles[urgency]}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-white">{title}</h3>
            <span className={`text-xs px-2 py-0.5 rounded ${urgencyStyles[urgency]}`}>{urgency}</span>
          </div>
          <p className="text-slate-300 text-sm mb-2">{description}</p>
          <p className="text-emerald-400 text-sm font-medium">→ {action}</p>
        </div>
      </div>
    </div>
  );
}
