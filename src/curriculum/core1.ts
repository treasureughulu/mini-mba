import { L, book, web, yt } from './links';
import { doIt, read, watch, type Lesson } from './types';

// Weeks 1–12: foundations, accounting, finance, data, economics, midterm.
export const core1: Lesson[] = [
  {
    week: 1,
    brief: {
      watch: 'Damodaran Foundations of Finance 1–3; Excel Essentials modules 1–2',
      read: 'The Personal MBA, chapters 1–5',
      do: 'Set up your canvas; run a 360° survey; map how one company makes money',
      deliverable: 'A 1-page "why I am doing this" plus 3 goals',
    },
    why:
      'Every business, from a corner café to Apple, does five things: creates something valuable, gets attention, sells it, delivers it and keeps enough money to carry on. This week gives you that map so every later module has somewhere to fit, and starts the spreadsheet skills you will use every week.',
    objectives: [
      'Explain the five parts of every business (value creation, marketing, sales, value delivery, finance)',
      'Describe a company as a set of cash flows in and out',
      'Navigate Excel confidently: cells, formulas, references, basic functions',
      'Set a clear personal "why" and three measurable goals for the programme',
    ],
    sessions: [
      {
        title: 'Session 1 · Set up and orient',
        tasks: [
          doIt('Set your start date, explore every page of this canvas, and bookmark it', 20),
          read('LBS MBA programme structure: see what you are modelling', 20, 'https://www.london.edu/masters-degrees/mba/programme-structure'),
          read('The Personal MBA (Josh Kaufman): Introduction and chapter 1, "Value Creation"', 70, book('The Personal MBA Kaufman'), 'Buy this one: it is the backbone of week 1 and a reference all year.'),
        ],
      },
      {
        title: 'Session 2 · How a business works',
        tasks: [
          read('The Personal MBA: chapters 2–3, "Marketing" and "Sales"', 70),
          watch('Damodaran, Foundations of Finance: session 1 "Introduction" and session 2 "The Structure of a Business"', 35, L.dFound, 'Free, about 15 minutes each. Damodaran is an NYU Stern professor famous for making finance intuitive.'),
        ],
      },
      {
        title: 'Session 3 · Money in, money out',
        tasks: [
          read('The Personal MBA: chapters 4–5, "Value Delivery" and "Finance"', 70),
          watch('Damodaran, Foundations of Finance: session 3 "Cash Flows"', 20, L.dFound),
          doIt('Write down, in your own words, the five parts of a business with one example each from a company you know', 20),
        ],
      },
      {
        title: 'Session 4 · Excel foundations',
        tasks: [
          watch('Coursera: Excel Skills for Business: Essentials (Macquarie), module 1 "Critical Core of Excel"', 120, L.cExcel, 'If you already use Excel daily, skim this and skip to module 2.'),
        ],
      },
      {
        title: 'Session 5 · Calculations and your goals',
        tasks: [
          watch('Excel Essentials: module 2 "Excel Calculations"', 90, L.cExcel),
          doIt('Send a 360° survey to 5 colleagues (see the exercise below)', 20),
          doIt('Write your deliverable: why you are doing this, plus 3 goals', 40),
        ],
      },
    ],
    exercise: {
      title: 'Business model map plus your 360° baseline',
      steps: [
        'Pick one company you know well (your employer is ideal).',
        'On one page, answer: What value does it create, and for whom? How do customers find it? How does it sell? How does it deliver? Where does the money come from, and what are the biggest costs?',
        'Create a free Google Form or Microsoft Form with three questions: "What should I keep doing?", "What should I start doing?", "What should I stop doing?". Send it to 5 colleagues and keep the answers for week 21.',
        'Write a 1-page "why": what you want this programme to change in your career within 12 months, plus 3 specific, measurable goals (for example, "build a DCF model unaided by week 6").',
      ],
      output: 'Upload your 1-page "why" plus goals and the business model map on this week\'s page.',
    },
    discuss: 'Share the company you mapped. Which of the five parts is its real advantage, and which is its weakest?',
    check: [
      'Name the five parts of every business in order.',
      'What is the difference between marketing and sales?',
      'Why can a profitable company still run out of cash?',
      'In Excel, what is the difference between a relative reference (A1) and an absolute reference ($A$1)?',
    ],
    terms: [
      { term: 'Value proposition', def: 'The specific benefit a customer gets, and why they should choose you over alternatives.' },
      { term: 'Revenue', def: 'Money earned from selling goods or services, before any costs are taken off.' },
      { term: 'Profit', def: 'What is left from revenue after paying the costs. Different "levels" of profit exist (gross, operating, net).' },
      { term: 'Cash flow', def: 'Actual money moving in or out of the business in a period. Not the same as profit.' },
      { term: 'Absolute reference', def: 'An Excel cell reference with $ signs ($B$2) that does not change when you copy a formula.' },
    ],
    cards: [
      { front: 'The five parts of every business (Personal MBA)', back: 'Value creation, marketing, sales, value delivery, finance' },
      { front: 'Marketing vs sales', back: 'Marketing gets attention and creates demand; sales turns an interested prospect into a paying customer' },
      { front: 'Profit vs cash flow', back: 'Profit is an accounting measure of earnings; cash flow is real money in and out. Timing differences (credit, stock, investment) separate them.' },
      { front: 'What does $A$1 mean in Excel?', back: 'An absolute reference: it stays fixed when the formula is copied' },
    ],
    deeper: [{ title: 'Damodaran: The Corporate Life Cycle (free class)', url: L.dCLC }],
  },
  {
    week: 2,
    brief: {
      watch: 'Wharton Financial Accounting weeks 1–2; Damodaran Accounting sessions 1–3A',
      read: 'Financial Intelligence: the income statement and balance sheet sections',
      do: 'Read a real annual report and summarise its three statements',
      deliverable: 'The three statements summarised on 1 page',
    },
    why:
      'Accounting is the language of business. Every investor, board and finance director talks in income statements and balance sheets. Once you can read them, you can judge any company\'s health in minutes, and you will follow every finance conversation at work.',
    objectives: [
      'Explain what the income statement, balance sheet and cash flow statement each show',
      'Apply the accounting equation: Assets = Liabilities + Equity',
      'Explain accrual accounting: why revenue is recorded when earned, not when paid',
      'Find and read the three statements in a real annual report',
    ],
    sessions: [
      {
        title: 'Session 1 · The balance sheet',
        tasks: [
          watch('Coursera: Introduction to Financial Accounting (Wharton, Brian Bushee): Week 1 "Introduction and Balance Sheet"', 120, L.cAcct, 'One of the best-rated business courses online. Do the practice problems; they are where it sticks.'),
        ],
      },
      {
        title: 'Session 2 · Accruals and the income statement',
        tasks: [
          watch('Wharton Financial Accounting: first half of Week 2 "Accrual Accounting and the Income Statement"', 120, L.cAcct),
        ],
      },
      {
        title: 'Session 3 · Damodaran\'s practical view',
        tasks: [
          watch('Damodaran, Accounting class: session 1 "Financial Statements: An Overview", session 2 "Income Statements" and 2A "Illustrations"', 55, L.dAcct, 'Free. He shows how investors actually use these numbers.'),
          watch('Damodaran: session 3 "Balance Sheets" and 3A "Illustrations"', 35, L.dAcct),
          read('Financial Intelligence (Berman & Knight): the income statement section', 30, book('Financial Intelligence Berman Knight')),
        ],
      },
      {
        title: 'Session 4 · Finish Week 2 and read',
        tasks: [
          watch('Wharton Financial Accounting: finish Week 2 and the quiz', 60, L.cAcct),
          read('Financial Intelligence: the balance sheet section', 60),
        ],
      },
      {
        title: 'Session 5 · A real annual report',
        tasks: [
          doIt('Download the latest annual report of a listed company you know well (e.g. Tesco, Unilever, Sainsbury\'s, Next). Search "[company] annual report" and use the investor relations page.', 15, web('Tesco plc annual report')),
          doIt('Complete the exercise below', 105),
        ],
      },
    ],
    exercise: {
      title: 'One-page financial summary of a real company',
      steps: [
        'Find the "consolidated income statement", "consolidated balance sheet" (sometimes "statement of financial position") and "cash flow statement" in the report.',
        'Income statement: write down revenue, gross profit, operating profit and profit after tax for the last two years. Calculate the % growth in revenue.',
        'Balance sheet: write down total assets, total liabilities and total equity. Check that assets = liabilities + equity.',
        'Cash flow: write down cash from operating activities, investing activities and financing activities.',
        'Write 3 sentences: Is the company growing? Is it profitable? Where is its cash going?',
      ],
      output: 'A 1-page summary (Word, PDF or a spreadsheet tab) uploaded to this week.',
    },
    discuss: 'Which company did you pick, and what surprised you most in its accounts?',
    check: [
      'State the accounting equation.',
      'A customer pays in March for a service you deliver in April. When is revenue recorded under accrual accounting?',
      'What is the difference between gross profit and operating profit?',
      'Name one item that is an asset and one that is a liability for a supermarket.',
    ],
    terms: [
      { term: 'Income statement (P&L)', def: 'Revenue minus costs over a period (e.g. a year) = profit.' },
      { term: 'Balance sheet', def: 'A snapshot at one date of what the company owns (assets), owes (liabilities) and the owners\' stake (equity).' },
      { term: 'Accrual accounting', def: 'Recording revenue when it is earned and costs when they are incurred, regardless of when cash moves.' },
      { term: 'Equity', def: 'Assets minus liabilities: the owners\' claim on the business.' },
      { term: 'Depreciation', def: 'Spreading the cost of a long-lived asset (like a machine) over the years it is used.' },
    ],
    cards: [
      { front: 'The accounting equation', back: 'Assets = Liabilities + Equity' },
      { front: 'Accrual accounting in one line', back: 'Record revenue when earned and expenses when incurred, not when cash moves' },
      { front: 'Gross profit', back: 'Revenue minus cost of goods sold (the direct cost of what was sold)' },
      { front: 'Operating profit', back: 'Gross profit minus operating expenses (salaries, rent, marketing, depreciation); also called EBIT' },
    ],
    deeper: [{ title: 'OpenStax: Principles of Accounting Vol. 1, chapters 2–3 (free textbook)', url: L.osAcct }],
  },
  {
    week: 3,
    brief: {
      watch: 'Wharton Financial Accounting weeks 3–4; Damodaran Accounting sessions 4–6A',
      read: 'Financial Intelligence: the cash flow and ratios sections',
      do: 'Ratio analysis of your company against one competitor',
      deliverable: 'A ratio spreadsheet plus 5 findings',
    },
    why:
      '"Cash is king": companies rarely die from a lack of profit, they die from running out of cash. Ratios then let you compare companies of any size on an equal footing. Together they are how analysts, lenders and acquirers size up a business in an afternoon.',
    objectives: [
      'Read a cash flow statement and explain why it differs from profit',
      'Calculate and interpret key ratios: margins, ROE, current ratio, debt-to-equity, asset turnover',
      'Benchmark a company against a peer and draw conclusions',
      'Build a clean, formula-driven comparison spreadsheet',
    ],
    sessions: [
      {
        title: 'Session 1 · Cash flows',
        tasks: [watch('Wharton Financial Accounting: Week 3 "Cash Flows"', 120, L.cAcct)],
      },
      {
        title: 'Session 2 · Damodaran on cash and comparability',
        tasks: [
          watch('Damodaran, Accounting: session 4 "Cashflow Statements" plus 4A', 35, L.dAcct),
          watch('Damodaran: session 5 "Accounting Inconsistencies" plus 5A', 35, L.dAcct),
          read('Financial Intelligence: the cash flow section ("Cash Is King")', 50),
        ],
      },
      {
        title: 'Session 3 · Ratios',
        tasks: [
          watch('Wharton Financial Accounting: Week 4 "Ratio Analysis", then the final exam', 90, L.cAcct),
          watch('Damodaran: session 6 "Financial Ratios" plus 6A', 30, L.dAcct),
        ],
      },
      {
        title: 'Session 4 · Build the comparison',
        tasks: [
          read('Financial Intelligence: the ratios section', 40),
          doIt('Pick a direct competitor of your week-2 company and download its annual report', 15),
          doIt('Build the ratio spreadsheet (steps below)', 65),
        ],
      },
      {
        title: 'Session 5 · Findings',
        tasks: [
          doIt('Finish the spreadsheet and write 5 findings', 90),
          doIt('Make flashcards for any ratio you had to look up twice', 15),
        ],
      },
    ],
    exercise: {
      title: 'Ratio comparison: your company vs a competitor',
      steps: [
        'Make a sheet with an "Inputs" area: revenue, gross profit, operating profit, net profit, total assets, current assets, current liabilities, total debt, equity, operating cash flow (two years, both companies).',
        'In a "Ratios" area, use formulas (never typed numbers) for: gross margin, operating margin, net margin, ROE (net profit ÷ equity), asset turnover (revenue ÷ assets), current ratio, debt-to-equity, cash conversion (operating cash flow ÷ net profit).',
        'Format percentages as %, and add a "Which is better?" column.',
        'Write 5 findings, each one sentence with a number, e.g. "Tesco converts 1.6× its profit into cash vs 1.1× for Sainsbury\'s."',
      ],
      output: 'Upload the spreadsheet plus findings.',
    },
    discuss: 'Post your most surprising ratio. What business reason could explain it?',
    check: [
      'Why can operating cash flow be higher than net profit?',
      'What does a current ratio below 1 suggest?',
      'Two companies have the same net margin but very different ROE. What could explain it?',
      'What does negative investing cash flow usually mean?',
    ],
    terms: [
      { term: 'Operating cash flow', def: 'Cash generated by the core business in a period, after paying suppliers, staff and taxes.' },
      { term: 'ROE (return on equity)', def: 'Net profit ÷ shareholders\' equity: profit generated per pound the owners have invested.' },
      { term: 'Current ratio', def: 'Current assets ÷ current liabilities: can short-term bills be paid?' },
      { term: 'Working capital', def: 'Current assets minus current liabilities: the cash tied up in running day-to-day operations.' },
      { term: 'Free cash flow', def: 'Operating cash flow minus capital expenditure: cash left for owners and lenders.' },
    ],
    cards: [
      { front: 'ROE formula', back: 'Net profit ÷ shareholders\' equity' },
      { front: 'Current ratio formula and meaning', back: 'Current assets ÷ current liabilities. Below 1 can signal short-term cash pressure.' },
      { front: 'Free cash flow', back: 'Operating cash flow minus capital expenditure' },
      { front: 'The three sections of a cash flow statement', back: 'Operating, investing, financing' },
    ],
    deeper: [{ title: 'OpenStax Principles of Accounting Vol. 1: chapter 16, Statement of Cash Flows', url: L.osAcct }],
  },
  {
    week: 4,
    brief: {
      watch: 'Wharton Introduction to Corporate Finance modules 1–3; Damodaran Foundations 6',
      read: 'Principles of Corporate Finance: present value and NPV chapters',
      do: 'Build an NPV/IRR model for a new product launch',
      deliverable: 'A project NPV model',
    },
    why:
      'A pound today is worth more than a pound next year. That single idea, the time value of money, drives every investment decision: whether to launch a product, buy a company or lease an office. NPV is the tool every finance team uses to say yes or no.',
    objectives: [
      'Calculate present and future values by hand and in Excel',
      'Explain why money has a time value (opportunity cost, risk, inflation)',
      'Build an NPV and IRR analysis for a project',
      'Explain why NPV is preferred to payback period',
    ],
    sessions: [
      {
        title: 'Session 1 · Time value of money',
        tasks: [
          watch('Damodaran, Foundations of Finance: session 6 "The Time Value of Money"', 20, L.dFound),
          watch('Coursera: Introduction to Corporate Finance (Wharton, Michael Roberts): module 1 "Time Value of Money"', 100, L.cFin),
        ],
      },
      {
        title: 'Session 2 · Interest rates',
        tasks: [
          watch('Wharton Corporate Finance: module 2 "Interest Rates"', 90, L.cFin),
          watch('Damodaran, Foundations: session 11 "Interest Rates"', 20, L.dFound),
        ],
      },
      {
        title: 'Session 3 · Discounted cash flow',
        tasks: [
          watch('Wharton Corporate Finance: module 3 "Discounted Cash Flow Analysis"', 90, L.cFin),
          doIt('Practise in Excel: =PV, =FV, =NPV, =IRR on the course examples', 30),
        ],
      },
      {
        title: 'Session 4 · Read and model',
        tasks: [
          read('Principles of Corporate Finance (Brealey, Myers, Allen): the opening chapters on present value and NPV', 60, book('Principles of Corporate Finance Brealey Myers'), 'Borrow from a library or buy an older edition second-hand; the core ideas have not changed.'),
          doIt('Start the NPV model (steps below)', 60),
        ],
      },
      {
        title: 'Session 5 · Finish the model',
        tasks: [doIt('Finish the model, sensitivity table and one-paragraph recommendation', 120)],
      },
    ],
    exercise: {
      title: 'NPV model: should we launch this product?',
      steps: [
        'Choose a realistic product launch, e.g. a new subscription tier for a company you know.',
        'Inputs tab: upfront cost, year-1 units, price, unit cost, annual growth, fixed costs, a 5-year life and a discount rate (use 10% for now; next week you will learn how to estimate it).',
        'Model tab: one column per year (0–5). Rows for revenue, variable costs, fixed costs, cash flow.',
        'Calculate NPV with =NPV(rate, years 1–5) + year-0 cash flow, and IRR with =IRR(years 0–5).',
        'Add a sensitivity table: NPV at prices −10%, 0%, +10% against discount rates of 8%, 10% and 12% (Data → What-If Analysis → Data Table).',
        'Write a one-paragraph go/no-go recommendation.',
      ],
      output: 'Upload the model.',
    },
    discuss: 'Which assumption swung your NPV the most? How would you test it in real life before committing?',
    check: [
      'What is £1,000 received in 3 years worth today at 8%?',
      'Why is NPV better than payback period for decisions?',
      'What does an IRR of 15% mean?',
      'If the discount rate goes up, what happens to NPV, and why?',
    ],
    terms: [
      { term: 'Present value (PV)', def: 'What a future amount is worth today, after discounting for time and risk.' },
      { term: 'Discount rate', def: 'The return you require for waiting and taking risk; used to convert future cash to today\'s value.' },
      { term: 'NPV (net present value)', def: 'Present value of all future cash flows minus the upfront cost. Positive means the project creates value.' },
      { term: 'IRR (internal rate of return)', def: 'The discount rate at which NPV equals zero: the project\'s effective annual return.' },
      { term: 'Payback period', def: 'How long until cumulative cash flow recovers the upfront cost. It ignores time value and later cash.' },
    ],
    cards: [
      { front: 'PV formula', back: 'PV = FV ÷ (1 + r)^n' },
      { front: 'NPV decision rule', back: 'Accept projects with NPV > 0, since they create value above the required return' },
      { front: 'IRR', back: 'The discount rate that makes NPV = 0' },
      { front: 'Excel NPV gotcha', back: '=NPV() assumes the first cash flow is one year away, so add the year-0 cash flow separately' },
    ],
    deeper: [{ title: 'LinkedIn Learning: Finance Foundations (Stice)', url: L.liFinance }],
  },
  {
    week: 5,
    brief: {
      watch: 'Wharton Corporate Finance module 4; Damodaran Corporate Finance sessions 1 and 4–13',
      read: 'Brealey Myers: the risk, return and cost of capital chapters',
      do: 'HBS case: Marriott Corporation: The Cost of Capital',
      deliverable: 'A WACC calculation plus a 1-page memo',
    },
    why:
      'Investors demand more return for more risk. The cost of capital is the minimum return a business must earn to keep its investors happy, and it is the discount rate in every valuation. Get it wrong and good projects get rejected while bad ones get funded.',
    objectives: [
      'Explain the risk–return trade-off and diversification',
      'Estimate the cost of equity using CAPM (risk-free rate, beta, equity risk premium)',
      'Estimate the cost of debt and combine both into WACC',
      'Apply different hurdle rates to divisions with different risk',
    ],
    sessions: [
      {
        title: 'Session 1 · Return on investment and risk',
        tasks: [
          watch('Wharton Corporate Finance: module 4 "Return on Investment"', 90, L.cFin),
          watch('Damodaran, Corporate Finance online: session 1 "What is corporate finance?"', 15, L.dCF),
          watch('Damodaran, Foundations: sessions 4–5 "What is risk?" and "Measuring Risk"', 30, L.dFound),
        ],
      },
      {
        title: 'Session 2 · Hurdle rates I',
        tasks: [
          watch('Damodaran, Corporate Finance online: sessions 4–8 (defining risk, risk-free rates, equity risk premium, regression betas)', 75, L.dCF, 'Each is 12–15 minutes. Pause and take notes; this is the heart of finance.'),
          read('Brealey Myers: the chapters on risk and return and on the CAPM', 45),
        ],
      },
      {
        title: 'Session 3 · Hurdle rates II',
        tasks: [
          watch('Damodaran, Corporate Finance online: sessions 9–13 (beta fundamentals, bottom-up betas, cost of debt, weights and cost of capital)', 75, L.dCF),
          doIt('Calculate the WACC for your week-2 company using Damodaran\'s free industry beta data', 45, L.dData, 'Use the UK 10-year gilt yield as the risk-free rate.'),
        ],
      },
      {
        title: 'Session 4 · The Marriott case',
        tasks: [
          doIt('Buy and read the HBS case "Marriott Corporation: The Cost of Capital" (about £9)', 60, L.hbsCases),
          doIt('Work out a cost of capital for each of Marriott\'s three divisions (lodging, contract services, restaurants)', 60),
        ],
      },
      {
        title: 'Session 5 · Memo',
        tasks: [doIt('Write the 1-page memo: why should Marriott use different hurdle rates for each division?', 90)],
      },
    ],
    exercise: {
      title: 'Marriott: one cost of capital or three?',
      steps: [
        'Read the case and note the data on debt, betas and comparable companies.',
        'For each division: unlever comparable betas, relever at the division\'s target debt ratio, then cost of equity = risk-free + beta × equity risk premium.',
        'Cost of debt = risk-free + the division\'s credit spread; then after-tax cost of debt = cost of debt × (1 − tax rate).',
        'WACC = E/V × cost of equity + D/V × after-tax cost of debt.',
        'Memo: recommend division-specific rates, and explain what goes wrong if one company-wide rate is used.',
      ],
      output: 'Upload the WACC spreadsheet and the 1-page memo.',
    },
    discuss: 'Why might a manager prefer a single company-wide hurdle rate, even though it is wrong?',
    check: [
      'In CAPM, what does a beta of 1.5 mean?',
      'Why is debt usually cheaper than equity?',
      'Why do we use the after-tax cost of debt?',
      'Which risks does diversification remove, and which can it not remove?',
    ],
    terms: [
      { term: 'Risk-free rate', def: 'The return on a near-riskless investment, usually a government bond (UK gilts).' },
      { term: 'Beta', def: 'How much a stock moves relative to the whole market. 1 = moves with the market; above 1 = more volatile.' },
      { term: 'Equity risk premium', def: 'The extra return investors demand for holding shares instead of risk-free bonds (often 4–6%).' },
      { term: 'CAPM', def: 'Cost of equity = risk-free rate + beta × equity risk premium.' },
      { term: 'WACC', def: 'Weighted average cost of capital: the blended required return of equity and debt investors.' },
    ],
    cards: [
      { front: 'CAPM formula', back: 'Cost of equity = Rf + β × (equity risk premium)' },
      { front: 'WACC formula', back: 'E/V × Re + D/V × Rd × (1 − tax rate)' },
      { front: 'Systematic vs idiosyncratic risk', back: 'Systematic (market-wide) cannot be diversified away; idiosyncratic (company-specific) can' },
      { front: 'Why divisional hurdle rates?', back: 'Divisions have different risk. One rate over-invests in risky divisions and under-invests in safe ones.' },
    ],
  },
  {
    week: 6,
    brief: {
      watch: 'Damodaran Valuation online sessions 1–2, 7–9 and 14–15',
      read: 'The Little Book of Valuation (Damodaran)',
      do: 'Build a DCF of your week-2 company',
      deliverable: 'A full DCF plus a 1-page buy/hold/sell call',
    },
    why:
      'Valuation ties together everything so far: accounting gives the numbers, time value gives the method, and cost of capital gives the discount rate. Being able to value a business is the core skill behind M&A, investing, fundraising and big strategic bets.',
    objectives: [
      'Explain intrinsic (DCF) vs relative (multiples) valuation',
      'Forecast free cash flows and estimate a terminal value',
      'Build a simple DCF and test it with sensitivities',
      'Cross-check a DCF with P/E and EV/EBITDA multiples',
    ],
    sessions: [
      {
        title: 'Session 1 · Valuation foundations',
        tasks: [
          watch('Damodaran, Valuation online: sessions 1 "Introduction to valuation" and 2 "Intrinsic Value: Foundations"', 40, L.dVal),
          read('The Little Book of Valuation: the opening chapters and intrinsic valuation', 80, book('The Little Book of Valuation Damodaran')),
        ],
      },
      {
        title: 'Session 2 · Cash flows, growth, terminal value',
        tasks: [
          watch('Damodaran, Valuation online: sessions 7 "Estimating Cash Flows", 8 "Estimating Growth" and 9 "Terminal Value"', 60, L.dVal),
          read('The Little Book of Valuation: the chapters on relative valuation', 60),
        ],
      },
      {
        title: 'Session 3 · Multiples',
        tasks: [
          watch('Damodaran, Valuation online: sessions 14 "Relative Valuation: First Principles" and 15 "PE Ratios"', 40, L.dVal),
          doIt('Start the DCF (steps 1–3 below)', 80),
        ],
      },
      {
        title: 'Session 4 · Finish the DCF',
        tasks: [doIt('Steps 4–6 below: terminal value, equity value per share, sensitivities', 120)],
      },
      {
        title: 'Session 5 · The call',
        tasks: [
          doIt('Compare your value with the current share price and with peer P/E multiples', 40),
          doIt('Write the 1-page buy/hold/sell call', 60),
          read('Damodaran\'s blog: read one recent valuation post to see how a pro writes it up', 20, L.dBlog),
        ],
      },
    ],
    exercise: {
      title: 'DCF valuation of a real company',
      steps: [
        'Base year: revenue, operating margin, tax rate, reinvestment (capex − depreciation + change in working capital) from the annual report.',
        'Forecast 5 years: revenue growth, margin and reinvestment as % of revenue. Write down why for each assumption.',
        'Free cash flow to the firm = EBIT × (1 − tax) − reinvestment. Discount at your week-5 WACC.',
        'Terminal value = FCF in year 6 ÷ (WACC − long-term growth). Keep growth at or below 2–3%.',
        'Enterprise value − net debt = equity value; ÷ shares outstanding = value per share.',
        'Sensitivity table: value per share across WACC ±1% and terminal growth ±0.5%.',
      ],
      output: 'Upload the DCF plus your 1-page call.',
    },
    discuss: 'Post your value per share against the market price. Which single assumption would you most want to research further?',
    check: [
      'Why must terminal growth be below the WACC, and realistically below long-run GDP growth?',
      'Enterprise value vs equity value: what is the bridge between them?',
      'When is a P/E multiple misleading?',
      'What share of a typical DCF value comes from the terminal value?',
    ],
    terms: [
      { term: 'Intrinsic value', def: 'Value based on a business\'s own cash flows, growth and risk (a DCF).' },
      { term: 'Terminal value', def: 'The value of all cash flows beyond the forecast period, often 60–80% of a DCF.' },
      { term: 'Enterprise value (EV)', def: 'Value of the whole business to all investors: equity plus net debt.' },
      { term: 'EBITDA', def: 'Earnings before interest, tax, depreciation and amortisation: a rough proxy for operating cash profit.' },
      { term: 'P/E ratio', def: 'Share price ÷ earnings per share: how many years of current profit the market is paying for.' },
    ],
    cards: [
      { front: 'Free cash flow to the firm (FCFF)', back: 'EBIT × (1 − tax) − (capex − depreciation) − change in working capital' },
      { front: 'Gordon growth terminal value', back: 'TV = FCF(n+1) ÷ (WACC − g)' },
      { front: 'EV to equity bridge', back: 'Equity value = enterprise value − net debt (debt minus cash)' },
      { front: 'Intrinsic vs relative valuation', back: 'Intrinsic values cash flows (DCF); relative prices the company off similar companies (multiples)' },
    ],
    deeper: [{ title: 'Damodaran, Valuation online: all 25 sessions', url: L.dValSite }],
  },
  {
    week: 7,
    brief: {
      watch: 'Stanford Introduction to Statistics modules 1–5; Damodaran Statistics 1–4A',
      read: 'Naked Statistics (Wheelan)',
      do: 'Build a decision tree for a real choice you face',
      deliverable: 'A decision tree plus its expected value',
    },
    why:
      'Managers make decisions with incomplete information every day. Statistics tells you how much to trust a number, whether a pattern is real or noise, and how to think in probabilities instead of hunches. It is the foundation for the data and AI work later in the programme.',
    objectives: [
      'Describe data with mean, median, standard deviation and distributions',
      'Explain sampling, bias and why sample size matters',
      'Use probability and expected value to compare options',
      'Recognise the central limit theorem and why it matters',
    ],
    sessions: [
      {
        title: 'Session 1 · Describing data',
        tasks: [
          watch('Coursera: Introduction to Statistics (Stanford, Guenther Walther): modules 1–2', 120, L.cStats),
        ],
      },
      {
        title: 'Session 2 · Probability',
        tasks: [
          watch('Stanford Statistics: modules 3–4 (probability, normal and binomial)', 90, L.cStats),
          watch('Damodaran, Statistics class: session 1 "Statistics 101: What and Why?"', 15, L.dStats),
          watch('StatQuest (Josh Starmer): search "StatQuest standard deviation" if anything is fuzzy', 15, yt('StatQuest standard deviation')),
        ],
      },
      {
        title: 'Session 3 · Sampling distributions',
        tasks: [
          watch('Stanford Statistics: module 5 "Sampling Distributions and the Central Limit Theorem"', 60, L.cStats),
          watch('Damodaran, Statistics: sessions 2–4A (sampling, descriptives, distributions)', 60, L.dStats),
        ],
      },
      {
        title: 'Session 4 · Read',
        tasks: [read('Naked Statistics (Charles Wheelan): chapters on descriptive statistics, probability and the central limit theorem', 120, book('Naked Statistics Wheelan'))],
      },
      {
        title: 'Session 5 · Decision tree',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Decision tree for a real decision',
      steps: [
        'Pick a real decision with uncertainty, at work or personally (e.g. which supplier to choose, whether to run a campaign, a job offer).',
        'Draw the tree: decision nodes (squares), chance nodes (circles), outcomes with values in £ or a 1–10 score.',
        'Assign probabilities to each chance branch. Be explicit about where each number comes from.',
        'Calculate the expected value of each option (Σ probability × value). Do it in Excel so you can change inputs.',
        'Write: which option wins on expected value, and would you still choose it given the risk of the worst outcome?',
      ],
      output: 'Upload the tree (photo of a drawing is fine) and the spreadsheet.',
    },
    discuss: 'Share a decision where expected value and your gut disagree. Which do you trust, and why?',
    check: [
      'When is the median a better summary than the mean?',
      'What does a standard deviation tell you?',
      'In plain words, what does the central limit theorem say?',
      'A survey of 50 people found 60% like a product. Why should you be cautious?',
    ],
    terms: [
      { term: 'Mean / median', def: 'Mean is the average; median is the middle value. The median resists outliers.' },
      { term: 'Standard deviation', def: 'How spread out values are around the mean.' },
      { term: 'Sampling bias', def: 'When the people or data you measured are not representative of the whole group.' },
      { term: 'Expected value', def: 'The probability-weighted average outcome: Σ (probability × value).' },
      { term: 'Central limit theorem', def: 'Averages of large samples are roughly normally distributed, whatever the shape of the underlying data.' },
    ],
    cards: [
      { front: 'Expected value formula', back: 'Σ (probability of outcome × value of outcome)' },
      { front: 'When to prefer the median', back: 'When data is skewed or has outliers (e.g. salaries, house prices)' },
      { front: 'Central limit theorem', back: 'Means of large samples are approximately normal, so we can estimate uncertainty' },
      { front: 'About 95% of a normal distribution lies within…', back: '±2 standard deviations of the mean' },
    ],
    deeper: [{ title: 'Khan Academy: Statistics and probability (free)', url: L.khanStats }],
  },
  {
    week: 8,
    brief: {
      watch: 'Stanford Statistics modules 6–8; Duke Mastering Data Analysis in Excel: Linear Regression',
      read: 'How to Measure Anything (Hubbard)',
      do: 'Run a regression on a real dataset and make a recommendation',
      deliverable: 'Regression output plus recommendations',
    },
    why:
      'Regression is the workhorse of business analytics: what drives sales, which customers churn, how price affects demand. Confidence intervals and significance tests tell you whether a result is real. Hubbard then shows that anything that matters can be measured well enough to decide.',
    objectives: [
      'Run and interpret a linear regression in Excel (coefficients, R², p-values)',
      'Explain confidence intervals and statistical significance in plain English',
      'Distinguish correlation from causation',
      'Reduce uncertainty on a business question with a quick estimate',
    ],
    sessions: [
      {
        title: 'Session 1 · Regression',
        tasks: [watch('Stanford Statistics: module 6 "Regression"', 60, L.cStats), watch('Damodaran, Statistics: sessions 5–5B "Data Relationships"', 50, L.dStats)],
      },
      {
        title: 'Session 2 · Inference',
        tasks: [watch('Stanford Statistics: modules 7–8 (confidence intervals, tests of significance)', 120, L.cStats)],
      },
      {
        title: 'Session 3 · Regression in Excel',
        tasks: [
          watch('Coursera: Mastering Data Analysis in Excel (Duke): "Excel Essentials for Beginners" (skim) and "Linear Regression"', 120, L.cExcelData, 'Enable Excel\'s Analysis ToolPak: File → Options → Add-ins.'),
        ],
      },
      {
        title: 'Session 4 · Measurement mindset',
        tasks: [read('How to Measure Anything (Douglas Hubbard): the opening chapters on the "measurement problem" and calibrated estimates', 120, book('How to Measure Anything Hubbard'))],
      },
      {
        title: 'Session 5 · Your regression',
        tasks: [
          doIt('Pick a dataset from Kaggle Datasets (e.g. search "retail sales", "advertising" or "house prices")', 20, L.kaggleData),
          doIt('Complete the exercise below', 100),
        ],
      },
    ],
    exercise: {
      title: 'What drives the number?',
      steps: [
        'Choose an outcome (e.g. sales) and 2–3 possible drivers (e.g. ad spend, price, season) from your dataset.',
        'Make a scatter chart of each driver against the outcome. Add a trendline.',
        'Run Data → Data Analysis → Regression. Record each coefficient, its p-value and R².',
        'Interpret in plain English: "Each extra £1,000 of TV spend is associated with £X more sales (p = …)."',
        'List one reason the relationship might not be causal, and how you would test causality (hint: an experiment).',
      ],
      output: 'Upload the workbook plus a 1-page recommendation.',
    },
    discuss: 'Post a correlation you see claimed at work or in the news that might not be causal.',
    check: [
      'What does an R² of 0.3 mean?',
      'A coefficient has a p-value of 0.4. What should you conclude?',
      'Give an example where correlation is not causation.',
      'What is a 95% confidence interval, in plain words?',
    ],
    terms: [
      { term: 'Regression', def: 'A method that estimates how an outcome changes as one or more drivers change.' },
      { term: 'Coefficient', def: 'The estimated change in the outcome for a one-unit change in a driver.' },
      { term: 'R²', def: 'The share of variation in the outcome explained by the model (0 to 1).' },
      { term: 'p-value', def: 'How surprising the result would be if there were truly no effect. Small (< 0.05) suggests a real effect.' },
      { term: 'Confounder', def: 'A hidden factor that drives both variables, creating a misleading correlation.' },
    ],
    cards: [
      { front: 'R² = 0.3 means…', back: 'The model explains 30% of the variation in the outcome' },
      { front: 'p-value < 0.05 (rule of thumb)', back: 'The effect is unlikely to be pure chance; "statistically significant"' },
      { front: 'Correlation vs causation', back: 'Things moving together does not mean one causes the other; check for confounders or run an experiment' },
      { front: 'Hubbard\'s key claim', back: 'If something matters, it shows up in observable ways, so it can be measured enough to reduce uncertainty' },
    ],
  },
  {
    week: 9,
    brief: {
      watch: 'Penn Microeconomics: The Power of Markets, modules 1–4; MRU micro: elasticity',
      read: 'MRU micro notes; Pindyck & Rubinfeld (optional)',
      do: 'Demand, elasticity and pricing analysis for your market',
      deliverable: 'A 1-page pricing memo',
    },
    why:
      'Economics explains why prices are what they are, why some markets are brutal and others comfortable, and how customers react when you change price. It is the logic underneath strategy and marketing.',
    objectives: [
      'Draw and use supply and demand to explain price changes',
      'Calculate and interpret price elasticity of demand',
      'Explain opportunity cost, marginal thinking and sunk costs',
      'Apply elasticity to a real pricing decision',
    ],
    sessions: [
      {
        title: 'Session 1 · Scarcity and trade',
        tasks: [watch('Coursera: Microeconomics: The Power of Markets (Penn, Rebecca Stein): modules 1–2 "Scarcity" and "Specialization & Trade"', 120, L.cMicro)],
      },
      {
        title: 'Session 2 · Supply and demand',
        tasks: [watch('Penn Microeconomics: module 3 "Supply and Demand"', 100, L.cMicro), watch('MRU, Principles of Microeconomics: "Supply, Demand, and Equilibrium" section (free)', 20, L.mruMicro)],
      },
      {
        title: 'Session 3 · Elasticity and efficiency',
        tasks: [watch('Penn Microeconomics: module 4 "Elasticities, Market Surplus, Efficiency, and Equity"', 100, L.cMicro), watch('MRU: "Elasticity and Its Applications" (free)', 20, L.mruMicro)],
      },
      {
        title: 'Session 4 · Costs and decisions',
        tasks: [
          watch('MRU: "Costs and Profit Maximization Under Competition" (free)', 40, L.mruMicro),
          watch('MIT 14.01 (Jonathan Gruber): lecture 1 "Introduction and Supply & Demand" (free)', 50, L.mit1401),
          doIt('Write down one sunk-cost trap you have seen at work', 10),
        ],
      },
      {
        title: 'Session 5 · Pricing memo',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Pricing memo: what happens if we raise prices by 10%?',
      steps: [
        'Pick a product in your market (your company\'s, or one you buy).',
        'List the factors that make demand more or less elastic: substitutes, necessity vs luxury, share of budget, switching costs, time horizon.',
        'Estimate elasticity as a range (e.g. −0.5 to −1.5). Explain your reasoning, or find a published estimate.',
        'Model revenue and profit at the current price and +10% for each elasticity, using unit cost.',
        'Write a 1-page memo with a recommendation and the main risk.',
      ],
      output: 'Upload the memo plus the small model.',
    },
    discuss: 'Name a product whose price went up but you kept buying it. What made your demand inelastic?',
    check: [
      'If demand is elastic (−2), does a price rise increase or decrease revenue?',
      'What shifts the demand curve, as opposed to a movement along it?',
      'What is a sunk cost and why should it be ignored?',
      'Define opportunity cost with a work example.',
    ],
    terms: [
      { term: 'Price elasticity of demand', def: '% change in quantity demanded ÷ % change in price.' },
      { term: 'Opportunity cost', def: 'The value of the best alternative you give up.' },
      { term: 'Marginal cost', def: 'The cost of producing one more unit.' },
      { term: 'Sunk cost', def: 'Money already spent that cannot be recovered. Irrelevant to future decisions.' },
      { term: 'Equilibrium', def: 'The price at which quantity supplied equals quantity demanded.' },
    ],
    cards: [
      { front: 'Elasticity formula', back: '% change in quantity ÷ % change in price' },
      { front: 'Elastic demand plus a price rise', back: 'Revenue falls (quantity drops proportionally more than price rises)' },
      { front: 'Sunk cost rule', back: 'Ignore costs already incurred; decide on future costs and benefits only' },
      { front: 'Drivers of elasticity', back: 'Substitutes, necessity vs luxury, share of budget, switching costs, time horizon' },
    ],
  },
  {
    week: 10,
    brief: {
      watch: 'MRU: Monopoly, Price Discrimination; MIT 14.01 oligopoly and game theory lectures',
      read: 'The Art of Strategy (Dixit & Nalebuff)',
      do: 'Map the market structure of your industry',
      deliverable: 'A 1-page industry economics memo',
    },
    why:
      'Why do some industries earn fat profits while others barely survive? Market structure (how many competitors, how differentiated, how hard to enter) decides it. Game theory explains how rivals react to each other\'s moves on price, capacity and launches.',
    objectives: [
      'Compare perfect competition, monopolistic competition, oligopoly and monopoly',
      'Explain price discrimination and where you see it',
      'Use simple game theory (prisoner\'s dilemma, Nash equilibrium) to predict rival behaviour',
      'Classify your own industry and explain its profitability',
    ],
    sessions: [
      {
        title: 'Session 1 · Competition and monopoly',
        tasks: [watch('MRU micro: "Competition and the Invisible Hand" and "Monopoly"', 60, L.mruMicro), watch('MRU micro: "Price Discrimination"', 40, L.mruMicro), doIt('List 3 examples of price discrimination you have paid', 20)],
      },
      {
        title: 'Session 2 · Oligopoly and games',
        tasks: [watch('MIT 14.01 (Gruber): the oligopoly lecture(s) (free)', 100, L.mit1401, 'Find them in the lecture list on the course page.'), doIt('Sketch a 2×2 prisoner\'s dilemma for two rival firms deciding whether to cut prices', 20)],
      },
      {
        title: 'Session 3 · Strategic thinking',
        tasks: [read('The Art of Strategy (Dixit & Nalebuff): the opening chapters on games, backward reasoning and the prisoner\'s dilemma', 120, book('The Art of Strategy Dixit Nalebuff'))],
      },
      {
        title: 'Session 4 · Your industry\'s structure',
        tasks: [
          doIt('Research your industry: the top 5 players and their rough market shares (trade press, annual reports, Statista summaries, the ONS)', 60, L.ons),
          read('The Art of Strategy: chapters on commitment and credibility', 60),
        ],
      },
      {
        title: 'Session 5 · Memo',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Industry economics memo',
      steps: [
        'Classify your industry: number of firms, product differentiation, barriers to entry, pricing power.',
        'Estimate concentration: the combined share of the top 4 firms.',
        'Describe one real competitive "game", e.g. a price war, a capacity race or a launch response, and what the equilibrium was.',
        'Explain in 3 bullets why profits in this industry are high, average or low.',
      ],
      output: 'Upload the 1-page memo.',
    },
    discuss: 'Which industry looks like a prisoner\'s dilemma right now? Why don\'t the players cooperate?',
    check: [
      'Why does a monopoly charge more and produce less than a competitive market?',
      'What is a Nash equilibrium?',
      'Give two conditions needed for price discrimination to work.',
      'Why are airline and supermarket profits typically thin?',
    ],
    terms: [
      { term: 'Oligopoly', def: 'A market dominated by a few large firms that watch and react to each other.' },
      { term: 'Barriers to entry', def: 'Things that make it hard for new firms to enter: scale, regulation, brands, patents, network effects.' },
      { term: 'Price discrimination', def: 'Charging different customers different prices for the same product (e.g. peak/off-peak, student prices).' },
      { term: 'Nash equilibrium', def: 'A situation where no player can do better by changing their strategy alone.' },
      { term: 'Prisoner\'s dilemma', def: 'A game where individually rational choices lead to a worse outcome for everyone.' },
    ],
    cards: [
      { front: 'Four market structures', back: 'Perfect competition, monopolistic competition, oligopoly, monopoly' },
      { front: 'Nash equilibrium', back: 'No player gains by unilaterally changing strategy' },
      { front: 'Conditions for price discrimination', back: 'Market power, ability to segment customers, prevention of resale' },
      { front: 'Prisoner\'s dilemma in business', back: 'Rivals both cut prices (individually rational) and both end up less profitable' },
    ],
  },
  {
    week: 11,
    brief: {
      watch: 'Yale Financial Markets (Shiller) selected modules; MRU macro: GDP, inflation, monetary policy',
      read: 'Bank of England Knowledge Bank explainers',
      do: 'Analyse how rates, inflation and FX affect your sector',
      deliverable: 'A 1-page macro-risk memo',
    },
    why:
      'Interest rates, inflation, exchange rates and recessions hit every company, often harder than anything management does. You do not need to forecast them. You need to understand the channels so you can spot exposure and plan for it.',
    objectives: [
      'Explain GDP, inflation, unemployment and the business cycle',
      'Explain how the Bank of England uses interest rates to target inflation',
      'Trace how rates, inflation and FX affect a company\'s costs, demand and valuation',
      'Explain bubbles and crises, and why they happen',
    ],
    sessions: [
      {
        title: 'Session 1 · The big numbers',
        tasks: [watch('MRU, Principles of Macroeconomics: "GDP" and "Inflation and Quantity Theory of Money" (free)', 90, L.mruMacro), read('Bank of England Knowledge Bank: "What is inflation?"', 20, L.boe)],
      },
      {
        title: 'Session 2 · Cycles and policy',
        tasks: [watch('MRU macro: "Business Fluctuations" and "Monetary Policy and the Federal Reserve"', 80, L.mruMacro, 'The examples are American; the Bank of England works the same way.'), read('Bank of England Knowledge Bank: how interest rates work and how they affect you', 30, L.boe)],
      },
      {
        title: 'Session 3 · Financial markets',
        tasks: [watch('Coursera: Financial Markets (Yale, Robert Shiller): module 1 highlights (markets, insurance, CAPM) and module 4 (recessions, bubbles, the mortgage crisis)', 120, L.cShiller, 'This is a long course; watch the lectures in these two modules and skip the rest for now.')],
      },
      {
        title: 'Session 4 · Exchange rates',
        tasks: [watch('Damodaran, Foundations: sessions 10–12 "Inflation", "Interest Rates" and "Exchange Rates"', 50, L.dFound), doIt('Look up the current Bank Rate, CPI inflation and £/$ and £/€ rates', 20, L.boe), doIt('Start your memo (below)', 50)],
      },
      {
        title: 'Session 5 · Memo',
        tasks: [doIt('Finish the macro-risk memo', 120)],
      },
    ],
    exercise: {
      title: 'Macro-risk memo for your sector',
      steps: [
        'Pick your company or sector.',
        'For each of interest rates, inflation, FX and a recession, write: the transmission channel (costs, demand, debt cost, valuation) and the direction (helps / hurts).',
        'Rate each exposure High / Medium / Low with one sentence of evidence (e.g. "imports 40% of stock in US$").',
        'Recommend two practical actions (e.g. fixed-rate debt, currency hedging, pricing clauses).',
      ],
      output: 'Upload the 1-page memo.',
    },
    discuss: 'How did the 2022–23 inflation spike show up in your company or household? What did people get wrong?',
    check: [
      'What is the Bank of England\'s inflation target?',
      'Why do higher interest rates usually lower company valuations?',
      'How does a weaker pound affect a UK importer vs a UK exporter?',
      'What is a recession (the common rule of thumb)?',
    ],
    terms: [
      { term: 'GDP', def: 'The total value of goods and services produced in a country in a period.' },
      { term: 'Inflation (CPI)', def: 'The rate at which the general price level rises.' },
      { term: 'Bank Rate', def: 'The Bank of England\'s main interest rate, which influences all other borrowing costs.' },
      { term: 'Monetary policy', def: 'A central bank adjusting interest rates and money supply to control inflation.' },
      { term: 'Recession', def: 'A significant fall in economic activity; often defined as two consecutive quarters of falling GDP.' },
    ],
    cards: [
      { front: 'Bank of England inflation target', back: '2% CPI' },
      { front: 'Higher rates → valuations?', back: 'Lower: future cash flows are discounted at a higher rate, and borrowing gets costlier' },
      { front: 'Weaker pound: importer vs exporter', back: 'Hurts importers (costs rise); helps exporters (cheaper abroad)' },
      { front: 'Recession rule of thumb', back: 'Two consecutive quarters of falling GDP' },
    ],
  },
  {
    week: 12,
    brief: {
      watch: 'None: review week',
      read: 'Reread your notes and flashcards from weeks 1–11',
      do: 'Midterm: one past case, 2 hours, closed book',
      deliverable: 'A graded midterm',
    },
    why:
      'Spacing and testing are what make learning stick. This week has no new material: you consolidate weeks 1–11, catch up on anything you skipped, and prove to yourself you can use the tools under time pressure.',
    objectives: [
      'Close any gaps from weeks 1–11',
      'Apply accounting, finance, statistics and economics together on one problem',
      'Write a clear recommendation under time pressure',
    ],
    sessions: [
      {
        title: 'Session 1 · Catch up',
        tasks: [doIt('Open every week marked "Behind" or "In progress" and finish the deliverable', 120)],
      },
      {
        title: 'Session 2 · Review',
        tasks: [doIt('Clear your flashcard queue and reread your weekly takeaways', 60), doIt('Rework one exercise from scratch without notes (week 4 or 6 recommended)', 60)],
      },
      {
        title: 'Session 3 · Midterm',
        tasks: [doIt('Sit the midterm (instructions below), 2 hours, closed book except a calculator and Excel', 120)],
      },
      {
        title: 'Session 4 · Mark it',
        tasks: [doIt('Mark it yourself against the rubric, or swap with someone in your study group', 60), doIt('Write a list of the 3 weakest topics', 20)],
      },
      {
        title: 'Session 5 · Fix the gaps',
        tasks: [doIt('Revisit the 3 weakest topics: rewatch the key session and redo one exercise', 120)],
      },
    ],
    exercise: {
      title: 'Midterm exam',
      steps: [
        'Pick a listed company you have NOT studied yet and download its annual report.',
        'Part A (40 min): summarise its three statements and calculate 6 key ratios.',
        'Part B (40 min): estimate its WACC and a rough DCF value with 3 assumptions you justify.',
        'Part C (30 min): describe its market structure and its biggest macro risk.',
        'Part D (10 min): a one-paragraph investment recommendation.',
        'Rubric (out of 10): accuracy 4, quality of reasoning 3, clarity of recommendation 3.',
      ],
      output: 'Upload your answers and enter your score as this week\'s self-score.',
    },
    discuss: 'What was your weakest section, and what is your plan to fix it?',
    check: ['Could you explain each of the 10 key terms from weeks 2–6 to a colleague without notes?', 'Which exercise would you be least confident redoing tomorrow?'],
    terms: [],
    cards: [],
  },
];
