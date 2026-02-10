const fs = require('fs');

const raw = fs.readFileSync('C:\\Users\\kbrow\\.claude\\projects\\C--Users-kbrow--openclaw-workspace-eastern-region-analysis\\c16a6f61-de0c-4759-a40f-ade7b682d718\\tool-results\\toolu_01EJurrbPh58wYbYhdkEZdyr.txt', 'utf8');

let accounts;
try {
  const parsed = JSON.parse(raw);
  if (parsed.result && parsed.result.content) {
    const inner = JSON.parse(parsed.result.content[0].text);
    accounts = inner.accounts;
  } else if (parsed.accounts) {
    accounts = parsed.accounts;
  }
} catch(e) {
  console.error('Parse error:', e.message);
  process.exit(1);
}

if (!accounts) {
  console.log('Could not parse accounts');
  process.exit(1);
}

console.log('Total accounts in system:', accounts.length);

// Known East companies mapping
const eastMap = {
  // Genetown (Boston/Cambridge, MA)
  'moderna': 'Genetown', 'vertex': 'Genetown', 'biogen': 'Genetown', 'sarepta': 'Genetown',
  'alnylam': 'Genetown', 'blueprint medicine': 'Genetown', 'bluebird': 'Genetown',
  'beam therapeutics': 'Genetown', 'intellia': 'Genetown', 'editas': 'Genetown',
  'voyager': 'Genetown', 'agios': 'Genetown', 'rhythm': 'Genetown',
  'translate bio': 'Genetown', 'forma': 'Genetown', 'obsidian': 'Genetown',
  'constellation': 'Genetown', 'entrada': 'Genetown', 'disc medicine': 'Genetown',
  'kala pharma': 'Genetown', 'ironwood': 'Genetown', 'syros': 'Genetown',
  'ptc therapeutics': 'Genetown', 'passage bio': 'Genetown', 'lyra therapeutics': 'Genetown',
  'verax': 'Genetown', 'synlogic': 'Genetown', 'rapid micro': 'Genetown',
  'takeda': 'Genetown', 'alexion': 'Genetown', 'ipsen': 'Genetown',
  'astellas gene': 'Genetown', 'idexx': 'Genetown',
  'corning': 'Genetown', 'thermo fisher': 'Genetown', 'waters': 'Genetown',
  'repligen': 'Genetown', 'agilent': 'Genetown', 'bioatla': 'Genetown',
  'corcept': 'Genetown', 'harmony biosciences': 'Genetown',
  'avanir': 'Genetown', 'caribou': 'Genetown',

  // NJ Pharma Corridor
  'johnson & johnson': 'NJ Pharma', 'j&j': 'NJ Pharma', 'janssen': 'NJ Pharma',
  'merck & co': 'NJ Pharma', 'merck sharp': 'NJ Pharma',
  'bristol-myers': 'NJ Pharma', 'bristol myers': 'NJ Pharma', 'bms': 'NJ Pharma',
  'novo nordisk': 'NJ Pharma', 'organon': 'NJ Pharma',
  'becton': 'NJ Pharma', 'bd ': 'NJ Pharma',
  'integra': 'NJ Pharma', 'bausch': 'NJ Pharma', 'teva': 'NJ Pharma',
  'amneal': 'NJ Pharma', 'hikma': 'NJ Pharma', 'insmed': 'NJ Pharma',
  'certara': 'NJ Pharma', 'pacira': 'NJ Pharma',
  'regeneron': 'NJ Pharma', 'pfizer': 'NJ Pharma', 'boehringer': 'NJ Pharma',
  'sanofi': 'NJ Pharma', 'colgate': 'NJ Pharma',
  'viatris': 'NJ Pharma', 'perrigo': 'NJ Pharma',
  'direct biologics': 'NJ Pharma',
  'aveo': 'NJ Pharma',

  // Research Triangle (NC)
  'iqvia': 'Research Triangle', 'fujifilm': 'Research Triangle', 'ppd': 'Research Triangle',
  'syneos': 'Research Triangle', 'argenta': 'Research Triangle', 'kbi': 'Research Triangle',
  'liquidia': 'Research Triangle', 'g1 therapeutics': 'Research Triangle',
  'teleflex': 'Research Triangle', 'rho': 'Research Triangle',

  // Mid-Atlantic (DC/Philly/Baltimore/DE)
  'astrazeneca': 'Mid-Atlantic', 'gsk': 'Mid-Atlantic', 'glaxo': 'Mid-Atlantic',
  'merck kgaa': 'Mid-Atlantic', 'emd ': 'Mid-Atlantic', 'emergent': 'Mid-Atlantic',
  'catalent': 'Mid-Atlantic', 'livanova': 'Mid-Atlantic', 'wuxi': 'Mid-Atlantic',
  'charles river': 'Mid-Atlantic', 'spark': 'Mid-Atlantic',
  'daiichi': 'Mid-Atlantic', 'incyte': 'Mid-Atlantic', 'jazz pharma': 'Mid-Atlantic',
  'csl': 'Mid-Atlantic', 'abbott': 'Mid-Atlantic',
  'west pharmaceutical': 'Mid-Atlantic', 'adaptimmune': 'Mid-Atlantic',
  'endo pharma': 'Mid-Atlantic', 'mallinckrodt': 'Mid-Atlantic',
  'siemens health': 'Mid-Atlantic', 'zimvie': 'Mid-Atlantic',
  'spectranetics': 'Mid-Atlantic',
};

const eastAccounts = [];
for (const acct of accounts) {
  const nameLower = acct.account_name.toLowerCase();
  let territory = null;
  for (const [key, terr] of Object.entries(eastMap)) {
    if (nameLower.includes(key)) {
      territory = terr;
      break;
    }
  }
  if (territory) {
    eastAccounts.push({
      name: acct.account_name,
      territory,
      ltv: acct.lifetime_value_raw || 0,
      rev2025: acct.revenue_2025_raw || 0,
      rev2024: acct.revenue_2024_raw || 0,
      rev2023: acct.revenue_2023_raw || 0,
      gp: acct.gross_profit_pct_raw || 0,
      yoy: acct.yoy_growth_pct_raw || 0,
      qoq: acct.qoq_growth_pct_raw || 0,
    });
  }
}

eastAccounts.sort((a, b) => b.rev2025 - a.rev2025);

const totalRev2025 = eastAccounts.reduce((s, a) => s + a.rev2025, 0);
const totalRev2024 = eastAccounts.reduce((s, a) => s + a.rev2024, 0);
const totalLTV = eastAccounts.reduce((s, a) => s + a.ltv, 0);
const weightedGP = totalRev2025 > 0 ? eastAccounts.reduce((s, a) => s + a.rev2025 * a.gp, 0) / totalRev2025 : 0;
const yoyGrowth = totalRev2024 > 0 ? ((totalRev2025 - totalRev2024) / totalRev2024 * 100) : 0;

const territories = {};
for (const a of eastAccounts) {
  if (!territories[a.territory]) territories[a.territory] = { rev2025: 0, rev2024: 0, ltv: 0, count: 0, gpWeighted: 0 };
  const t = territories[a.territory];
  t.rev2025 += a.rev2025;
  t.rev2024 += a.rev2024;
  t.ltv += a.ltv;
  t.count++;
  t.gpWeighted += a.rev2025 * a.gp;
}
for (const [k, v] of Object.entries(territories)) {
  v.avgGP = v.rev2025 > 0 ? (v.gpWeighted / v.rev2025) : 0;
  v.yoy = v.rev2024 > 0 ? ((v.rev2025 - v.rev2024) / v.rev2024 * 100) : 0;
}

console.log('\n=== EAST REGION SUMMARY ===');
console.log('Total East Accounts:', eastAccounts.length);
console.log('Total Revenue 2025: $' + (totalRev2025/1e6).toFixed(2) + 'M');
console.log('Total Revenue 2024: $' + (totalRev2024/1e6).toFixed(2) + 'M');
console.log('YoY Growth:', yoyGrowth.toFixed(1) + '%');
console.log('Total LTV: $' + (totalLTV/1e6).toFixed(2) + 'M');
console.log('Weighted Avg GP%:', weightedGP.toFixed(1) + '%');

console.log('\n=== TERRITORY BREAKDOWN ===');
const terrOrder = ['Genetown', 'NJ Pharma', 'Research Triangle', 'Mid-Atlantic'];
for (const k of terrOrder) {
  const v = territories[k];
  if (v) {
    console.log(k + ': ' + v.count + ' accts | $' + (v.rev2025/1e6).toFixed(2) + 'M rev | ' + v.avgGP.toFixed(1) + '% GP | ' + (v.yoy >= 0 ? '+' : '') + v.yoy.toFixed(1) + '% YoY | $' + (v.ltv/1e6).toFixed(2) + 'M LTV');
  }
}

console.log('\n=== TOP 25 EAST ACCOUNTS ===');
for (const a of eastAccounts.slice(0, 25)) {
  console.log(a.name + ' | ' + a.territory + ' | $' + (a.rev2025/1e3).toFixed(0) + 'K rev | ' + a.gp + '% GP | ' + (a.yoy >= 0 ? '+' : '') + a.yoy + '% YoY | LTV $' + (a.ltv/1e6).toFixed(2) + 'M');
}

console.log('\n=== ACCOUNTS BY TERRITORY ===');
for (const terr of terrOrder) {
  console.log('\n--- ' + terr + ' ---');
  const terrAccounts = eastAccounts.filter(a => a.territory === terr);
  for (const a of terrAccounts) {
    console.log('  ' + a.name + ' | $' + (a.rev2025/1e3).toFixed(0) + 'K | ' + a.gp + '% GP | ' + (a.yoy >= 0 ? '+' : '') + a.yoy + '% YoY');
  }
}

// Save full data as JSON
const output = {
  summary: {
    totalAccounts: eastAccounts.length,
    totalAccountsInSystem: accounts.length,
    totalRev2025,
    totalRev2024,
    yoyGrowth,
    totalLTV,
    weightedGP,
  },
  territories,
  eastAccounts,
};
fs.writeFileSync('data/east-mcp-extracted.json', JSON.stringify(output, null, 2));
console.log('\nSaved full data to data/east-mcp-extracted.json');
