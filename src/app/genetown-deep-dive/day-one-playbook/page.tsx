'use client';

import Link from 'next/link';

export default function DayOnePlaybook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/genetown-deep-dive" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Genetown</Link>

        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-white">Day 1 Playbook</h1>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full border border-red-500/30">🚨 URGENT</span>
        </div>
        <p className="text-emerald-400 text-xl mb-4">New Boston Account Manager — Critical First 30 Days</p>
        <p className="text-slate-500 text-xs mb-8">📊 Salesforce data verified Feb 11, 2026 | Prepared by David, AI Sales Intelligence Agent</p>

        {/* Critical Context Banner */}
        <div className="bg-red-900/40 rounded-xl p-6 mb-8 border-2 border-red-500/50">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h2 className="text-xl font-bold text-red-400 mb-2">Critical Context: Jeff Burton Resigned</h2>
              <p className="text-slate-300 mb-3">
                Jeff Burton owned <span className="text-white font-bold">~800+ of 1,000 GeneTown accounts</span>. 
                These accounts are now <span className="text-red-400 font-bold">ORPHANED</span>. You're not starting from scratch — 
                you're inheriting a massive book of unworked accounts with existing relationships.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-2xl">$1.17M</p>
                  <p className="text-slate-400 text-sm">Pipeline at risk (no owner)</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-2xl">11</p>
                  <p className="text-slate-400 text-sm">Active revenue accounts to save</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-2xl">30 days</p>
                  <p className="text-slate-400 text-sm">Competitor poaching window</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Week 1 Priorities */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Week 1: Stop the Bleeding</h2>
          <div className="space-y-4">
            <PriorityItem 
              number={1}
              title="Call Harmony Bio IMMEDIATELY"
              urgency="critical"
              description="81.6% GP star account. Jeff had the relationship. Get face-to-face within 48 hours. This is your template customer — protect it at all costs."
              action="Schedule in-person meeting, confirm delivery team continuity, get testimonial commitment"
            />
            <PriorityItem 
              number={2}
              title="Rescue $1.17M Orphaned Pipeline"
              urgency="critical"
              description="Deals in motion with no owner. These will die within 2 weeks without intervention. Pull Salesforce report, triage by close date, call every active opp."
              action="Salesforce pipeline review → sort by close date → call top 5 today"
            />
            <PriorityItem 
              number={3}
              title="Takeda Stakeholder Mapping"
              urgency="high"
              description="$702K account at 14.5% GP. DO NOT accept new staffing orders at current margins. Map all active engagements and identify managed services conversion opportunities."
              action="Get consultant roster from delivery, identify project leads, schedule executive sponsor meeting"
            />
            <PriorityItem 
              number={4}
              title="Alnylam & Ironwood Check-ins"
              urgency="high"
              description="High-margin accounts ($110K @ 71.5% GP, $102K @ 79.1% GP) that need relationship continuity calls. These are your 'easy wins' to protect."
              action="15-min intro calls with primary contacts, confirm satisfaction, note any concerns"
            />
          </div>
        </section>

        {/* Week 2-4 */}
        <section className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Weeks 2-4: Stabilize & Expand</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Expansion Plays</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Moderna</strong>: $387K open pipeline across 5 deals. 8:1 loss rate historically — understand why and fix the pitch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Intellia</strong>: $211K open pipeline. Lost $1.26M vs won $285K — competitor displacement issue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Alnylam</strong>: $30B company, we have $110K. Dramatic whitespace. Develop Q2 expansion proposal.</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/30">
              <h3 className="text-blue-400 font-semibold mb-3">Dormant Account Reactivation</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong className="text-white">Biogen</strong>: $11.8M won historically, $1M open. MASSIVE dormant. See dedicated playbook.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong className="text-white">Sarepta</strong>: $265K historical, $0 open. Gene therapy leader — AI governance wedge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong className="text-white">Blueprint Medicines</strong>: $892K historical, $162K open. Active but underweight.</span>
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
            <h2 className="text-2xl font-bold text-white">Biogen: The $25M Elephant</h2>
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
              <p className="text-yellow-400 font-bold text-2xl">218</p>
              <p className="text-slate-400 text-sm">Lost Deals (!!)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">What Happened?</h3>
              <p className="text-slate-300 text-sm mb-3">
                Biogen ($9.8B revenue) was a major USDM customer. We've won 90 deals totaling $11.8M historically. 
                But we've LOST 218 deals totaling $25.7M. Someone else is winning this business.
              </p>
              <p className="text-slate-300 text-sm">
                Current status: <span className="text-yellow-400 font-semibold">Dormant with $1M open pipeline</span>. 
                The relationship exists but isn't being worked.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Play</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">1.</span>
                  <span>Pull all 218 lost deal records — categorize by loss reason</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">2.</span>
                  <span>Identify the competitor(s) winning this business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">3.</span>
                  <span>Find your champions from the 90 won deals — are they still there?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">4.</span>
                  <span>AI governance + Leqembi launch = new entry point</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">5.</span>
                  <span>Close the $1M open pipeline as proof of reactivation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Takeda Margin Fix */}
        <section className="bg-red-900/20 rounded-xl p-8 mb-8 border border-red-700/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚠️</span>
            <h2 className="text-2xl font-bold text-white">Takeda: The Margin Crisis</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">The Problem</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong className="text-white">$702K revenue</strong> but only <strong className="text-red-400">14.5% GP</strong></p>
                <p>This generates ~$102K gross profit — the same as a $125K account at 80% GP.</p>
                <p>Almost certainly staffing-dominant engagement where USDM is providing bodies at near-cost.</p>
                <p className="text-red-400 font-semibold">53% of territory revenue in one low-margin account = concentration risk</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">The Fix</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">DO NOT</strong> accept new staffing orders at current margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Map all active consultants/engagements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Identify projects convertible to managed services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Schedule executive sponsor meeting within 2 weeks</span>
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
          <h2 className="text-2xl font-bold text-white mb-6">📅 30-60-90 Day Targets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 rounded-lg p-6 border border-red-700/30">
              <h3 className="text-red-400 font-semibold mb-3">Day 30: Stabilize</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ All 11 active accounts contacted</li>
                <li>✓ $1.17M pipeline triaged & owned</li>
                <li>✓ Harmony Bio relationship secured</li>
                <li>✓ Takeda stakeholder map complete</li>
                <li>✓ Zero churn from transition</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Success Metric</p>
                <p className="text-white font-semibold">$1.32M revenue protected</p>
              </div>
            </div>
            <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-700/30">
              <h3 className="text-yellow-400 font-semibold mb-3">Day 60: Expand</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Biogen reactivation meeting held</li>
                <li>✓ Moderna win-back strategy defined</li>
                <li>✓ Alnylam expansion proposal delivered</li>
                <li>✓ 2 dormant accounts reactivated</li>
                <li>✓ New logo list qualified (5+)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-xs">Success Metric</p>
                <p className="text-white font-semibold">$500K new pipeline created</p>
              </div>
            </div>
            <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-700/30">
              <h3 className="text-emerald-400 font-semibold mb-3">Day 90: Grow</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ First new logo closed</li>
                <li>✓ Takeda margin improvement started</li>
                <li>✓ $2M+ total pipeline</li>
                <li>✓ Biogen re-engaged ($200K+ opp)</li>
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
