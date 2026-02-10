const fs = require("fs");
const dataPath = "C:/Users/kbrow/.claude/projects/C--Users-kbrow--openclaw-workspace-eastern-region-analysis/c16a6f61-de0c-4759-a40f-ade7b682d718/tool-results/toolu_01EJurrbPh58wYbYhdkEZdyr.txt";
const raw = fs.readFileSync(dataPath, "utf8");
const parsed = JSON.parse(raw);
const inner = JSON.parse(parsed.result.content[0].text);
const accounts = inner.accounts;
const summaryData = inner.summary;
console.log("Total accounts in dataset:", accounts.length);

const easternMap = new Map([
  ["moderna", { t: "Genetown", l: "Cambridge, MA" }],
  ["takeda pharmaceuticals u.s.a.", { t: "Genetown", l: "Cambridge, MA" }],
  ["alnylam pharmaceuticals", { t: "Genetown", l: "Cambridge, MA" }],
  ["cerevel therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["ironwood pharmaceuticals", { t: "Genetown", l: "Boston, MA" }],
  ["mersana therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["scholar rock", { t: "Genetown", l: "Cambridge, MA" }],
  ["intellia therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["relay therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["karuna therapeutics", { t: "Genetown", l: "Boston, MA" }],
  ["c4 therapeutics", { t: "Genetown", l: "Watertown, MA" }],
  ["dyne therapeutics", { t: "Genetown", l: "Waltham, MA" }],
  ["stoke therapeutics", { t: "Genetown", l: "Bedford, MA" }],
  ["cogent biosciences", { t: "Genetown", l: "Waltham, MA" }],
  ["disc medicine", { t: "Genetown", l: "Cambridge, MA" }],
  ["seaport therapeutics", { t: "Genetown", l: "Boston, MA" }],
  ["abcuro", { t: "Genetown", l: "Newton, MA" }],
  ["sail biomedicines", { t: "Genetown", l: "Cambridge, MA" }],
  ["cardurion pharmaceuticals", { t: "Genetown", l: "Cambridge, MA" }],
  ["ikena oncology", { t: "Genetown", l: "Boston, MA" }],
  ["pyxis oncology", { t: "Genetown", l: "Cambridge, MA" }],
  ["keros therapeutics", { t: "Genetown", l: "Lexington, MA" }],
  ["lyra therapeutics", { t: "Genetown", l: "Watertown, MA" }],
  ["amylyx pharmaceuticals", { t: "Genetown", l: "Cambridge, MA" }],
  ["landmark bio", { t: "Genetown", l: "Watertown, MA" }],
  ["associates of cape cod", { t: "Genetown", l: "East Falmouth, MA" }],
  ["atea pharmaceuticals", { t: "Genetown", l: "Boston, MA" }],
  ["praxis precision medicine", { t: "Genetown", l: "Cambridge, MA" }],
  ["electra therapeutics", { t: "Genetown", l: "Boston, MA" }],
  ["new england cell therapeutics", { t: "Genetown", l: "MA" }],
  ["black diamond therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["incendia therapeutics", { t: "Genetown", l: "Boston, MA" }],
  ["openbiome", { t: "Genetown", l: "Cambridge, MA" }],
  ["finch therapeutics", { t: "Genetown", l: "Somerville, MA" }],
  ["bicara therapeutics", { t: "Genetown", l: "Boston, MA" }],
  ["anthos therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["leap therapeutics", { t: "Genetown", l: "Cambridge, MA" }],
  ["replimune", { t: "Genetown", l: "Woburn, MA" }],
  ["uniqure", { t: "Genetown", l: "Lexington, MA" }],
  ["hologic", { t: "Genetown", l: "Marlborough, MA" }],
  ["bose corporation", { t: "Genetown", l: "Framingham, MA" }],
  ["puritan medical products", { t: "Genetown", l: "Guilford, ME" }],
  ["alexion pharmaceuticals", { t: "Genetown", l: "New Haven, CT" }],
  ["loxo oncology", { t: "Genetown", l: "Stamford, CT" }],
  ["trevi therapeutics", { t: "Genetown", l: "New Haven, CT" }],
  ["uswm ct", { t: "Genetown", l: "CT" }],
  ["gelesis", { t: "Genetown", l: "Boston, MA" }],
  ["verax biomedical", { t: "Genetown", l: "Marlborough, MA" }],
  ["loftware", { t: "Genetown", l: "Portsmouth, NH" }],
  ["astellas gene therapies", { t: "Genetown", l: "Cambridge, MA" }],
  ["boehringer ingelheim", { t: "Genetown", l: "Ridgefield, CT" }],
  ["ipsen pharma", { t: "Genetown", l: "Cambridge, MA" }],
  ["johnson & johnson", { t: "NJ Pharma", l: "New Brunswick, NJ" }],
  ["integra lifesciences", { t: "NJ Pharma", l: "Princeton, NJ" }],
  ["bausch health", { t: "NJ Pharma", l: "Bridgewater, NJ" }],
  ["provention bio", { t: "NJ Pharma", l: "Red Bank, NJ" }],
  ["genmab", { t: "NJ Pharma", l: "Princeton, NJ" }],
  ["sk life science", { t: "NJ Pharma", l: "Paramus, NJ" }],
  ["embecta", { t: "NJ Pharma", l: "Parsippany, NJ" }],
  ["atlantic health system", { t: "NJ Pharma", l: "Morristown, NJ" }],
  ["amarin pharma", { t: "NJ Pharma", l: "Bridgewater, NJ" }],
  ["alvogen", { t: "NJ Pharma", l: "Pine Brook, NJ" }],
  ["nuvectis pharma", { t: "NJ Pharma", l: "Fort Lee, NJ" }],
  ["bausch & lomb", { t: "NJ Pharma", l: "Bridgewater, NJ" }],
  ["argenx", { t: "NJ Pharma", l: "Branchburg, NJ" }],
  ["regeneron pharmaceuticals", { t: "NY/Eastern", l: "Tarrytown, NY" }],
  ["axsome therapeutics", { t: "NY/Eastern", l: "New York, NY" }],
  ["schrodinger", { t: "NY/Eastern", l: "New York, NY" }],
  ["protara therapeutics", { t: "NY/Eastern", l: "New York, NY" }],
  ["aetion", { t: "NY/Eastern", l: "New York, NY" }],
  ["angiodynamics", { t: "NY/Eastern", l: "Latham, NY" }],
  ["columbia university", { t: "NY/Eastern", l: "New York, NY" }],
  ["estee lauder", { t: "NY/Eastern", l: "New York, NY" }],
  ["carestream health", { t: "NY/Eastern", l: "Rochester, NY" }],
  ["kadmon pharmaceuticals", { t: "NY/Eastern", l: "New York, NY" }],
  ["prestige consumer healthcare", { t: "NY/Eastern", l: "Tarrytown, NY" }],
  ["precision biosciences", { t: "Research Triangle", l: "Durham, NC" }],
  ["biocryst pharmaceuticals", { t: "Research Triangle", l: "Durham, NC" }],
  ["bioagilytix", { t: "Research Triangle", l: "Durham, NC" }],
  ["humacyte", { t: "Research Triangle", l: "Durham, NC" }],
  ["astrazeneca", { t: "Mid-Atlantic", l: "Wilmington, DE" }],
  ["regenxbio", { t: "Mid-Atlantic", l: "Rockville, MD" }],
  ["supernus pharmaceuticals", { t: "Mid-Atlantic", l: "Rockville, MD" }],
  ["senseonics", { t: "Mid-Atlantic", l: "Germantown, MD" }],
  ["medstar health", { t: "Mid-Atlantic", l: "Washington, DC" }],
  ["booz allen hamilton", { t: "Mid-Atlantic", l: "McLean, VA" }],
  ["inovio pharmaceuticals", { t: "Mid-Atlantic", l: "Plymouth Meeting, PA" }],
  ["prelude therapeutics", { t: "Mid-Atlantic", l: "Wilmington, DE" }],
  ["healthverity", { t: "Mid-Atlantic", l: "Philadelphia, PA" }],
  ["georgetown university", { t: "Mid-Atlantic", l: "Washington, DC" }],
  ["westat", { t: "Mid-Atlantic", l: "Rockville, MD" }],
  ["canon virginia", { t: "Mid-Atlantic", l: "Newport News, VA" }],
  ["cartesian therapeutics", { t: "Mid-Atlantic", l: "Gaithersburg, MD" }],
  ["formation bio", { t: "Mid-Atlantic", l: "Philadelphia, PA" }],
  ["champions oncology", { t: "Mid-Atlantic", l: "Rockville, MD" }],
  ["immunome", { t: "Mid-Atlantic", l: "Exton, PA" }],
  ["altimmune", { t: "Mid-Atlantic", l: "Gaithersburg, MD" }],
  ["ocugen", { t: "Mid-Atlantic", l: "Malvern, PA" }],
  ["harmony biosciences", { t: "Mid-Atlantic", l: "Plymouth Meeting, PA" }],
  ["foundation fighting blindness", { t: "Mid-Atlantic", l: "Columbia, MD" }],
  ["international partnership for microbicides", { t: "Mid-Atlantic", l: "Silver Spring, MD" }],
  ["hr pharmaceuticals", { t: "Mid-Atlantic", l: "Bethesda, MD" }],
  ["mallinckrodt", { t: "Mid-Atlantic", l: "Wilmington, DE" }],
  ["american red cross", { t: "Mid-Atlantic", l: "Washington, DC" }],
]);

function findMatch(name) {
  var lower = name.toLowerCase();
  for (var entry of easternMap) {
    if (lower.includes(entry[0])) return { matchKey: entry[0], territory: entry[1].t, location: entry[1].l };
  }
  return null;
}

var eastern = [];
var seen = new Set();
for (var a of accounts) {
  var m = findMatch(a.account_name);
  if (m && !seen.has(a.account_id)) {
    seen.add(a.account_id);
    eastern.push({
      account_name: a.account_name,
      territory: m.territory,
      location: m.location,
      lifetime_value_raw: a.lifetime_value_raw || 0,
      revenue_2025_raw: a.revenue_2025_raw || 0,
      revenue_2024_raw: a.revenue_2024_raw || 0,
      gross_profit_pct_raw: a.gross_profit_pct_raw,
      yoy_growth_pct_raw: a.yoy_growth_pct_raw,
    });
  }
}

var tOrder = ["Genetown", "NJ Pharma", "NY/Eastern", "Research Triangle", "Mid-Atlantic"];
eastern.sort(function(a, b) {
  var d = tOrder.indexOf(a.territory) - tOrder.indexOf(b.territory);
  return d !== 0 ? d : b.revenue_2025_raw - a.revenue_2025_raw;
});

function fm(n) {
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return "$" + (n / 1e3).toFixed(1) + "K";
  return "$" + n.toFixed(2);
}

console.log("");
console.log("=".repeat(152));
console.log("EASTERN US REGION ACCOUNTS - COMPREHENSIVE LTV ANALYSIS");
console.log("=".repeat(152));
console.log(
  "#".padStart(3) + "  " +
  "Account Name".padEnd(53) +
  "Territory".padEnd(18) +
  "Location".padEnd(22) +
  "LTV".padStart(10) +
  "Rev 2025".padStart(11) +
  "Rev 2024".padStart(11) +
  "GP%".padStart(8) +
  "YoY%".padStart(9)
);
console.log("-".repeat(152));

var totR25 = 0, totR24 = 0, totLTV = 0, gpN = 0, gpD = 0, ct = 0, curT = "";

for (var i = 0; i < eastern.length; i++) {
  var a = eastern[i];
  if (a.territory !== curT) {
    if (curT) console.log("");
    console.log("  --- " + a.territory + " ---");
    curT = a.territory;
  }
  ct++;
  totLTV += a.lifetime_value_raw;
  totR25 += a.revenue_2025_raw;
  totR24 += a.revenue_2024_raw;
  if (a.gross_profit_pct_raw !== null && a.revenue_2025_raw > 0) {
    gpN += a.gross_profit_pct_raw * a.revenue_2025_raw;
    gpD += a.revenue_2025_raw;
  }
  var gp = a.gross_profit_pct_raw !== null ? a.gross_profit_pct_raw.toFixed(1) + "%" : "N/A";
  var yoy = a.yoy_growth_pct_raw !== null ? a.yoy_growth_pct_raw.toFixed(1) + "%" : "N/A";
  var name = a.account_name.length > 52 ? a.account_name.substring(0, 49) + "..." : a.account_name;
  console.log(
    String(ct).padStart(3) + "  " +
    name.padEnd(53) +
    a.territory.padEnd(18) +
    a.location.padEnd(22) +
    fm(a.lifetime_value_raw).padStart(10) +
    fm(a.revenue_2025_raw).padStart(11) +
    fm(a.revenue_2024_raw).padStart(11) +
    gp.padStart(8) +
    yoy.padStart(9)
  );
}

console.log("-".repeat(152));
var wGP = gpD > 0 ? gpN / gpD : 0;
var yoyG = totR24 > 0 ? ((totR25 - totR24) / totR24 * 100) : 0;

console.log("");
console.log("=".repeat(80));
console.log("SUMMARY TOTALS");
console.log("=".repeat(80));
console.log("  Eastern Accounts Count:        " + ct);
console.log("  Total Dataset Accounts:        " + accounts.length);
console.log("  Eastern as pct of Total:       " + (ct / accounts.length * 100).toFixed(1) + "%");
console.log("  Total Revenue 2025 (Eastern):  " + fm(totR25));
console.log("  Total Revenue 2024 (Eastern):  " + fm(totR24));
console.log("  YoY Revenue Growth (Eastern):  " + yoyG.toFixed(1) + "%");
console.log("  Total LTV (Eastern):           " + fm(totLTV));
console.log("  Weighted Average GP pct:       " + wGP.toFixed(1) + "%");
console.log("  Total LTV (All Accounts):      " + fm(summaryData.total_ltv_raw));
console.log("  Eastern LTV pct of Total:      " + (totLTV / summaryData.total_ltv_raw * 100).toFixed(1) + "%");

console.log("");
console.log("=".repeat(80));
console.log("BREAKDOWN BY TERRITORY");
console.log("=".repeat(80));

var terr = {};
for (var i = 0; i < eastern.length; i++) {
  var a = eastern[i];
  if (!terr[a.territory]) terr[a.territory] = { count: 0, r25: 0, r24: 0, ltv: 0, gpN: 0, gpD: 0, names: [] };
  var t = terr[a.territory];
  t.count++; t.r25 += a.revenue_2025_raw; t.r24 += a.revenue_2024_raw; t.ltv += a.lifetime_value_raw;
  t.names.push(a.account_name);
  if (a.gross_profit_pct_raw !== null && a.revenue_2025_raw > 0) {
    t.gpN += a.gross_profit_pct_raw * a.revenue_2025_raw;
    t.gpD += a.revenue_2025_raw;
  }
}

for (var ti = 0; ti < tOrder.length; ti++) {
  var tn = tOrder[ti];
  var d = terr[tn];
  if (!d) continue;
  var tgp = d.gpD > 0 ? d.gpN / d.gpD : 0;
  var tyoy = d.r24 > 0 ? ((d.r25 - d.r24) / d.r24 * 100) : 0;
  console.log("");
  console.log("  " + tn);
  console.log("    Accounts:    " + d.count);
  console.log("    Rev 2025:    " + fm(d.r25));
  console.log("    Rev 2024:    " + fm(d.r24));
  console.log("    YoY Growth:  " + tyoy.toFixed(1) + "%");
  console.log("    LTV:         " + fm(d.ltv));
  console.log("    Wt GP pct:   " + tgp.toFixed(1) + "%");
  console.log("    Companies:   " + d.names.join(", "));
}

var jsonOut = {
  eastern_region_summary: {
    total_accounts: ct,
    total_dataset_accounts: accounts.length,
    eastern_pct_of_total: Math.round(ct / accounts.length * 1000) / 10,
    total_revenue_2025: Math.round(totR25 * 100) / 100,
    total_revenue_2024: Math.round(totR24 * 100) / 100,
    yoy_revenue_growth_pct: Math.round(yoyG * 10) / 10,
    total_ltv: Math.round(totLTV * 100) / 100,
    weighted_avg_gp_pct: Math.round(wGP * 10) / 10,
    total_ltv_all_accounts: summaryData.total_ltv_raw,
    eastern_ltv_pct_of_total: Math.round(totLTV / summaryData.total_ltv_raw * 1000) / 10,
  },
  territories: {},
  accounts: [],
};

for (var ti = 0; ti < tOrder.length; ti++) {
  var tn = tOrder[ti];
  var d = terr[tn];
  if (!d) continue;
  var tgp = d.gpD > 0 ? d.gpN / d.gpD : 0;
  var tyoy = d.r24 > 0 ? ((d.r25 - d.r24) / d.r24 * 100) : 0;
  jsonOut.territories[tn] = {
    count: d.count,
    revenue_2025: Math.round(d.r25 * 100) / 100,
    revenue_2024: Math.round(d.r24 * 100) / 100,
    yoy_growth_pct: Math.round(tyoy * 10) / 10,
    ltv: Math.round(d.ltv * 100) / 100,
    weighted_gp_pct: Math.round(tgp * 10) / 10,
  };
}

for (var i = 0; i < eastern.length; i++) {
  var a = eastern[i];
  jsonOut.accounts.push({
    account_name: a.account_name,
    territory: a.territory,
    location: a.location,
    lifetime_value_raw: a.lifetime_value_raw,
    revenue_2025_raw: a.revenue_2025_raw,
    revenue_2024_raw: a.revenue_2024_raw,
    gross_profit_pct_raw: a.gross_profit_pct_raw,
    yoy_growth_pct_raw: a.yoy_growth_pct_raw,
  });
}

console.log("");
console.log("=".repeat(80));
console.log("JSON OUTPUT FOR WEBSITE FILES");
console.log("=".repeat(80));
console.log(JSON.stringify(jsonOut, null, 2));

fs.writeFileSync("data/eastern-ltv-analysis.json", JSON.stringify(jsonOut, null, 2));
console.log("");
console.log("Saved to data/eastern-ltv-analysis.json");
