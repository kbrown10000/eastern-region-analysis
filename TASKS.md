# TASKS.md - Eastern Region Content Update Plan

## MCP Bridge Configuration
- **Endpoint**: http://localhost:3000
- **Sales**: `/api/mcp/sales/execute`
- **Labor**: `/api/mcp/labor/execute`
- **Finance**: `/api/mcp/finance/execute`

---

## Phase 1: Data Discovery & Validation

### 1.1 Sales MCP Discovery
- [ ] Query `get_pipeline_summary` with region filter for East
- [ ] Query `get_pipeline_by_region` to get East breakdown
- [ ] Query `get_closed_won_summary` for East 2025 bookings
- [ ] Query `get_win_loss_analysis` for East win rates
- [ ] Query `get_pipeline_by_owner` to identify East sellers

### 1.2 Finance MCP Discovery
- [ ] Query `analyze_customer_profitability` filtered to East accounts
- [ ] Query `get_customer_ltv` for East customer lifetime values
- [ ] Query `get_ar_aging` for East AR health
- [ ] Query `analyze_financial_performance` for East revenue/GP

### 1.3 Labor MCP Discovery  
- [ ] Query `list_executives` to find Lisa Fry (EVP East)
- [ ] Query `get_executive_scorecard` for Lisa Fry
- [ ] Query `get_gold_department_metrics` for delivery capacity
- [ ] Query `get_gold_utilization_summary` for East resources

---

## Phase 2: Home Page Updates (`src/app/page.tsx`)

### 2.1 Hero Metrics (4 cards)
- [ ] Update "2025 Revenue" with real East revenue from Finance MCP
- [ ] Update "Blended GP%" with real East GP margin from Finance MCP
- [ ] Update "East Customers" count from customer profitability data
- [ ] Update "Open Pipeline" from Sales MCP `get_pipeline_summary`

### 2.2 Territory Cards
- [ ] Genetown: Update revenue, GP%, pipeline from filtered data
- [ ] NJ Pharma: Update revenue, GP%, pipeline from filtered data
- [ ] Research Triangle: Update revenue, GP%, pipeline from filtered data
- [ ] Mid-Atlantic: Update revenue, GP%, pipeline from filtered data

---

## Phase 3: Executive Summary Updates (`src/app/executive-summary/page.tsx`)

### 3.1 KPI Cards
- [ ] Update 2025 Revenue with Finance MCP data
- [ ] Update Win Rate with Sales MCP `get_win_loss_analysis`
- [ ] Update Blended GP with Finance MCP data
- [ ] Update Open Pipeline with Sales MCP data

### 3.2 Territory Performance Table
- [ ] Pull real data for each East territory:
  - Genetown (Boston/Cambridge)
  - NJ Pharma Corridor
  - Research Triangle
  - Mid-Atlantic
- [ ] Calculate YoY growth from Finance MCP

### 3.3 Strategic Priorities
- [ ] Validate/update based on real performance data

---

## Phase 4: Territory Deep Dives

### 4.1 Genetown (`src/app/genetown-deep-dive/page.tsx`)
- [ ] Update revenue, GP%, accounts, pipeline stats
- [ ] Update key accounts table with real customer data
- [ ] Update target accounts based on opportunity data
- [ ] Validate competitive landscape info

### 4.2 NJ Pharma (`src/app/nj-pharma-deep-dive/page.tsx`)
- [ ] Update revenue, GP%, accounts, pipeline stats
- [ ] Update key accounts table (J&J, Merck, BMS, Novo, Organon)
- [ ] Validate margin improvement priorities

### 4.3 Research Triangle (`src/app/research-triangle-deep-dive/page.tsx`)
- [ ] Update revenue, GP%, accounts, pipeline stats
- [ ] Update CDMO/CRO customer data (IQVIA, Fujifilm, PPD, Syneos)
- [ ] Validate growth trajectory claims

### 4.4 Mid-Atlantic (`src/app/mid-atlantic-deep-dive/page.tsx`)
- [ ] Update revenue, GP%, accounts, pipeline stats
- [ ] Update key accounts (AstraZeneca, GSK, Merck KGaA, Emergent, Catalent)

---

## Phase 5: Financial Pages

### 5.1 Dashboard (`src/app/dashboard/page.tsx`)
- [ ] Update all charts with real East financial data
- [ ] Pull from Finance MCP `analyze_financial_performance`

### 5.2 Financial Model (`src/app/financial-model/page.tsx`)
- [ ] Update `baseline2025` object with real East data:
  - EastRevenue
  - EastGP
  - gpMargin
  - totalPipeline
  - winRate
  - avgDealSize

### 5.3 Margin Analysis (`src/app/margin-analysis/page.tsx`)
- [ ] Update customer profitability data from Finance MCP
- [ ] Identify real East problem accounts (low GP%)
- [ ] Update margin distribution charts

### 5.4 LTV Page (`src/app/ltv/page.tsx`)
- [ ] Update customer LTV data from Finance MCP `get_customer_ltv`
- [ ] Filter to East accounts

---

## Phase 6: Sales & Pipeline Pages

### 6.1 Sales Momentum (`src/app/sales-momentum/page.tsx`)
- [ ] Update EastTotalOpps, EastTotalPipeline
- [ ] Update seller data for East territory
- [ ] Update concentration metrics

### 6.2 Seller Performance (`src/app/seller-performance/page.tsx`)
- [ ] Pull East sellers from Sales MCP
- [ ] Update win rates, deal sizes, velocity

### 6.3 Targets (`src/app/targets/page.tsx`)
- [ ] Update target accounts for East territories
- [ ] Filter biotech-targets.json to East companies

### 6.4 Churn Signals (`src/app/churn-signals/page.tsx`)
- [ ] Pull at-risk East accounts from Finance MCP `analyze_customer_churn`

---

## Phase 7: Data Files Updates

### 7.1 Customer Data
- [ ] Update `data/east-customers.json` with real East customer data
- [ ] Add proper revenue, GP%, growth metrics

### 7.2 Territory Data
- [ ] Update `data/territory-analysis.json` for East territories
- [ ] Map accounts to correct East territories (Genetown, NJ, Triangle, Mid-Atlantic)

### 7.3 Pipeline Data
- [ ] Create/update pipeline owner data for East sellers
- [ ] Update win rate matrix for East

---

## Phase 8: Validation & QA

### 8.1 Data Validation
- [ ] Cross-check totals (sum of territories = East total)
- [ ] Validate GP% calculations
- [ ] Verify customer counts match

### 8.2 Build & Test
- [ ] Run `npm run build` to verify no TypeScript errors
- [ ] Test all territory deep-dive pages load
- [ ] Verify charts render with new data

### 8.3 Deploy
- [ ] Commit changes: `git add -A && git commit -m "Update with real East MCP data"`
- [ ] Push to trigger Vercel deploy: `git push`
- [ ] Verify production site loads correctly

---

## MCP Query Examples

### Get East Pipeline
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "get_pipeline_by_region",
    "arguments": { "region": "East" }
  },
  "id": 1
}
```

### Get Customer Profitability
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "analyze_customer_profitability",
    "arguments": {}
  },
  "id": 1
}
```

### Get Lisa Fry Scorecard
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "get_executive_scorecard",
    "arguments": { "executive_name": "Lisa Fry" }
  },
  "id": 1
}
```

---

## Territory Mapping

| Territory | States/Cities | Key Accounts |
|-----------|---------------|--------------|
| **Genetown** | Boston, Cambridge, MA | Moderna, Vertex, Biogen, Sarepta, Alnylam |
| **NJ Pharma** | NJ corridor, NY metro | J&J, Merck, BMS, Novo Nordisk, Organon |
| **Research Triangle** | Raleigh-Durham, NC | IQVIA, Fujifilm Diosynth, PPD, Syneos |
| **Mid-Atlantic** | DC, Philly, Baltimore | AstraZeneca, GSK, Merck KGaA, Emergent, Catalent |

---

## Notes
- Region filter in Sales MCP: Look for `region = "East"` or territory assignments
- Account territories may need manual mapping based on city/state
- Finance MCP returns company-wide data - filter by account list
- Some tools may return 400 errors - check schema compatibility first
