import { L, book } from './links';
import { doIt, read, watch, type Lesson } from './types';

// Weeks 1–11: business basics, Excel, accounting, statistics, first checkpoint.
// Rule for every week: 4 hours maximum, one main resource, one short applied task.
export const core1: Lesson[] = [
  {
    week: 1,
    module: 'How a business works',
    brief: {
      watch: 'Damodaran, Foundations of Finance: sessions 1–3',
      read: 'The Personal MBA: "Value Creation" and "Finance" chapters (selected)',
      do: 'Map how one company makes money; set 3 goals',
      deliverable: 'A 1-page business map plus 3 goals',
    },
    why: 'Every business creates value, finds customers, sells, delivers and manages its money. This map gives every later week somewhere to fit.',
    objectives: ['Explain the five parts of a business', 'Describe a company as cash moving in and out', 'Set three measurable goals for the programme'],
    sessions: [
      {
        title: 'Session 1 · The big picture',
        tasks: [
          watch('Damodaran, Foundations of Finance: "Introduction" and "The Structure of a Business"', 35, L.dFound, 'Free. Damodaran is an NYU Stern professor known for making finance simple.'),
          read('The Personal MBA (Josh Kaufman): chapter "Value Creation", first 40 pages', 75, book('The Personal MBA Kaufman')),
        ],
      },
      {
        title: 'Session 2 · Money and your goals',
        tasks: [
          watch('Damodaran, Foundations of Finance: "Cash Flows"', 20, L.dFound),
          read('The Personal MBA: chapter "Finance", first 20 pages', 40),
          doIt('Exercise: business map and 3 goals (steps below)', 60),
          doIt('Send your 360° survey to 5 colleagues (step 3 below)', 10),
        ],
      },
    ],
    exercise: {
      title: 'Business map and goals',
      steps: [
        'Pick a company you know well, ideally your employer.',
        'Answer in one line each: what value it creates, how customers find it, how it sells, how it delivers, and where the money comes from.',
        'Create a Google or Microsoft Form asking "What should I keep, start and stop doing?". Send it to 5 colleagues and save the answers for week 23.',
        'Write 3 measurable goals, such as "read any company\'s accounts by week 7".',
      ],
      output: 'Upload your 1-page map and goals.',
    },
    discuss: 'Which of the five parts is your company best at, and which is weakest?',
    check: ['Name the five parts of a business.', 'Why can a profitable company still run out of cash?'],
    terms: [
      { term: 'Revenue', def: 'Money earned from sales, before costs.' },
      { term: 'Profit', def: 'What is left from revenue after costs.' },
      { term: 'Cash flow', def: 'Actual money moving in or out of a business.' },
    ],
    cards: [
      { front: 'The five parts of a business', back: 'Value creation, marketing, sales, value delivery, finance' },
      { front: 'Profit vs cash flow', back: 'Profit is an accounting result; cash flow is real money moving, and the timing can differ' },
    ],
  },
  {
    week: 2,
    module: 'Excel foundations 1',
    brief: { watch: 'Excel Skills for Business: Essentials, module 1', read: 'None', do: 'Practise along with the lessons', deliverable: 'A tidy practice workbook' },
    why: 'Almost every exercise from here on uses a spreadsheet. Two weeks now will save time for the next 46.',
    objectives: ['Move around Excel confidently', 'Enter and organise data cleanly', 'Write your first formulas'],
    sessions: [
      { title: 'Session 1 · Excel basics', tasks: [watch('Coursera: Excel Skills for Business: Essentials (Macquarie), module 1, first half', 120, L.cExcel, 'Already use Excel most days? Skim this and take the week as catch-up time.')] },
      { title: 'Session 2 · Finish and practise', tasks: [watch('Excel Essentials: module 1, second half', 90, L.cExcel), doIt('Exercise: build a simple monthly budget (steps below)', 30)] },
    ],
    exercise: {
      title: 'Monthly budget',
      steps: ['List 8 income and spending items across 3 months.', 'Add totals using formulas, not typed numbers.', 'Format it so someone else could read it.'],
      output: 'Keep the workbook; no upload needed.',
    },
    discuss: 'Which Excel task do you most want to get faster at?',
    check: ['Why should totals be formulas rather than typed numbers?'],
    terms: [{ term: 'Formula', def: 'A calculation in a cell, starting with =.' }],
    cards: [{ front: 'What does every Excel formula start with?', back: 'An equals sign (=)' }],
  },
  {
    week: 3,
    module: 'Excel foundations 2',
    brief: { watch: 'Excel Skills for Business: Essentials, module 2', read: 'None', do: 'Add calculations to your budget', deliverable: 'An updated budget workbook' },
    why: 'SUM, IF and cell references are what you will use in every financial model in this programme.',
    objectives: ['Use common functions', 'Explain relative and absolute references', 'Copy formulas safely'],
    sessions: [
      { title: 'Session 1 · Calculations', tasks: [watch('Excel Essentials: module 2 "Excel Calculations", first half', 120, L.cExcel)] },
      { title: 'Session 2 · Finish and apply', tasks: [watch('Excel Essentials: module 2, second half', 90, L.cExcel), doIt('Exercise: add % of total and a savings rate to your budget', 30)] },
    ],
    exercise: {
      title: 'Budget calculations',
      steps: ['Add each item as a % of total income, using an absolute reference.', 'Add a savings rate.', 'Copy the formula across all 3 months and check it still works.'],
      output: 'Keep the workbook; no upload needed.',
    },
    discuss: 'What is one spreadsheet task at work you could now automate?',
    check: ['What does $A$1 do differently from A1?'],
    terms: [{ term: 'Absolute reference', def: 'A cell reference with $ signs that stays fixed when copied.' }],
    cards: [{ front: 'What does $A$1 mean in Excel?', back: 'An absolute reference: it does not change when the formula is copied' }],
  },
  {
    week: 4,
    module: 'Accounting 1: the balance sheet',
    brief: { watch: 'Financial Accounting (Wharton), week 1', read: 'None', do: 'Find a real company\'s balance sheet', deliverable: 'Balance sheet notes' },
    why: 'Accounting is the language of business. The balance sheet shows what a company owns, what it owes and what is left for its owners.',
    objectives: ['Use Assets = Liabilities + Equity', 'Read a real balance sheet'],
    sessions: [
      { title: 'Session 1 · Assets, liabilities, equity', tasks: [watch('Coursera: Financial Accounting (Wharton, Brian Bushee): "Introduction and Balance Sheet", first half', 110, L.cAcct, 'Do the required videos and quizzes. Leave optional practice for later.')] },
      { title: 'Session 2 · Apply it', tasks: [watch('Wharton Accounting: "Introduction and Balance Sheet", second half', 100, L.cAcct), doIt('Exercise: read a real balance sheet (steps below)', 30)] },
    ],
    exercise: {
      title: 'Read a real balance sheet',
      steps: ['Download the latest annual report of a listed company you know (Tesco, Unilever, Next…). Use this company until week 7.', 'Find total assets, total liabilities and total equity.', 'Check the equation balances.'],
      output: 'Upload a short note with the three numbers.',
    },
    discuss: 'What is the biggest asset on your company\'s balance sheet? Does that surprise you?',
    check: ['State the accounting equation.', 'Name one asset and one liability of a supermarket.'],
    terms: [
      { term: 'Asset', def: 'Something the company owns that has value.' },
      { term: 'Liability', def: 'Something the company owes.' },
      { term: 'Equity', def: 'Assets minus liabilities: the owners\' share.' },
    ],
    cards: [{ front: 'The accounting equation', back: 'Assets = Liabilities + Equity' }],
  },
  {
    week: 5,
    module: 'Accounting 2: the income statement',
    brief: { watch: 'Financial Accounting (Wharton), week 2', read: 'None', do: 'Summarise your company\'s income statement', deliverable: 'Income statement notes' },
    why: 'The income statement shows whether a company made a profit over a period. Accrual accounting explains why that isn\'t the same as money in the bank.',
    objectives: ['Explain accrual accounting', 'Tell gross profit from operating profit and net profit'],
    sessions: [
      { title: 'Session 1 · Accruals', tasks: [watch('Wharton Accounting: "Accrual Accounting and the Income Statement", first half', 110, L.cAcct)] },
      { title: 'Session 2 · Apply it', tasks: [watch('Wharton Accounting: second half', 100, L.cAcct), doIt('Exercise: summarise your company\'s income statement', 30)] },
    ],
    exercise: {
      title: 'Income statement summary',
      steps: ['Note revenue, gross profit, operating profit and net profit for two years.', 'Calculate revenue growth as a %.', 'Write one sentence on what changed.'],
      output: 'Upload your notes.',
    },
    discuss: 'What surprised you most in your company\'s income statement?',
    check: ['A customer pays in March for work done in April. When is the revenue recorded?', 'What is the difference between gross and operating profit?'],
    terms: [
      { term: 'Accrual accounting', def: 'Recording revenue when earned and costs when incurred, not when cash moves.' },
      { term: 'Gross profit', def: 'Revenue minus the direct cost of what was sold.' },
      { term: 'Operating profit', def: 'Gross profit minus running costs such as salaries and rent.' },
    ],
    cards: [
      { front: 'Accrual accounting', back: 'Record revenue when earned and costs when incurred' },
      { front: 'Gross profit', back: 'Revenue minus cost of goods sold' },
    ],
  },
  {
    week: 6,
    module: 'Accounting 3: cash flow',
    brief: { watch: 'Financial Accounting (Wharton), week 3', read: 'None', do: 'Read your company\'s cash flow statement', deliverable: 'Cash flow notes' },
    why: 'Companies rarely die from a lack of profit. They die from running out of cash. This week shows you where the money really went.',
    objectives: ['Read the three sections of a cash flow statement', 'Explain why cash flow differs from profit'],
    sessions: [
      { title: 'Session 1 · Cash flows', tasks: [watch('Wharton Accounting: "Cash Flows", first half', 110, L.cAcct)] },
      { title: 'Session 2 · Apply it', tasks: [watch('Wharton Accounting: "Cash Flows", second half', 100, L.cAcct), doIt('Exercise: follow your company\'s cash', 30)] },
    ],
    exercise: {
      title: 'Follow the cash',
      steps: ['Note operating, investing and financing cash flow.', 'Compare operating cash flow with net profit.', 'Write one sentence: where did the cash go?'],
      output: 'Upload your notes.',
    },
    discuss: 'Is your company funding itself, or relying on borrowing?',
    check: ['Why can operating cash flow be higher than profit?', 'What does negative investing cash flow usually mean?'],
    terms: [
      { term: 'Operating cash flow', def: 'Cash generated by the core business.' },
      { term: 'Free cash flow', def: 'Operating cash flow minus capital spending.' },
    ],
    cards: [
      { front: 'Three parts of a cash flow statement', back: 'Operating, investing, financing' },
      { front: 'Free cash flow', back: 'Operating cash flow minus capital expenditure' },
    ],
  },
  {
    week: 7,
    module: 'Accounting 4: ratios',
    brief: { watch: 'Financial Accounting (Wharton), week 4', read: 'None', do: 'Compare your company with one competitor', deliverable: 'A ratio spreadsheet plus 3 findings' },
    why: 'Ratios let you compare companies of any size in minutes. This week pulls the three statements together.',
    objectives: ['Calculate margin, ROE and current ratio', 'Compare two companies and draw a conclusion'],
    sessions: [
      { title: 'Session 1 · Ratios', tasks: [watch('Wharton Accounting: "Ratio Analysis". Take the final exam only if you want the certificate.', 120, L.cAcct)] },
      { title: 'Session 2 · Compare', tasks: [doIt('Exercise: ratio comparison (steps below)', 120)] },
    ],
    exercise: {
      title: 'Ratio comparison',
      steps: ['Find revenue, net profit, equity, current assets and current liabilities for your company and one competitor.', 'Use formulas to calculate net margin, ROE and current ratio.', 'Write 3 findings, each with a number.'],
      output: 'Upload the spreadsheet.',
    },
    discuss: 'Post your most surprising ratio. What could explain it?',
    check: ['What does a current ratio below 1 suggest?', 'Two firms have the same margin but different ROE. Why might that be?'],
    terms: [
      { term: 'ROE', def: 'Net profit ÷ equity: profit earned on the owners\' money.' },
      { term: 'Current ratio', def: 'Current assets ÷ current liabilities: can short-term bills be paid?' },
    ],
    cards: [
      { front: 'ROE formula', back: 'Net profit ÷ shareholders\' equity' },
      { front: 'Current ratio formula', back: 'Current assets ÷ current liabilities' },
    ],
  },
  {
    week: 8,
    module: 'Statistics 1: describing data',
    brief: { watch: 'Introduction to Statistics (Stanford), modules 1–3', read: 'None', do: 'Summarise a small dataset', deliverable: 'A short data summary' },
    why: 'Statistics tells you how far to trust a number. It comes before finance here because risk and return are built on these ideas.',
    objectives: ['Use mean, median and standard deviation', 'Spot sampling bias', 'Explain basic probability'],
    sessions: [
      { title: 'Session 1 · Describing data', tasks: [watch('Coursera: Introduction to Statistics (Stanford): modules 1–2', 130, L.cStats)] },
      { title: 'Session 2 · Probability', tasks: [watch('Stanford Statistics: module 3', 70, L.cStats), doIt('Exercise: summarise 20 real numbers', 40)] },
    ],
    exercise: {
      title: 'Summarise real data',
      steps: ['Collect 20 numbers, such as your bank spending or the prices of a product.', 'Use Excel to find the mean, median and standard deviation.', 'Write one sentence on which summary is most useful and why.'],
      output: 'Keep your notes; no upload needed.',
    },
    discuss: 'Share a statistic you\'ve seen at work. Could its sample be biased?',
    check: ['When is the median better than the mean?', 'What does standard deviation tell you?'],
    terms: [
      { term: 'Median', def: 'The middle value. It resists outliers.' },
      { term: 'Standard deviation', def: 'How spread out values are around the average.' },
      { term: 'Sampling bias', def: 'When the data you collected doesn\'t represent the whole group.' },
    ],
    cards: [{ front: 'When to use the median', back: 'When data is skewed or has outliers, such as salaries' }],
  },
  {
    week: 9,
    module: 'Statistics 2: regression',
    brief: { watch: 'Introduction to Statistics (Stanford), modules 4–6', read: 'None', do: 'Find a relationship in data', deliverable: 'A scatter chart with one finding' },
    why: 'Regression shows how one thing moves with another. You will need it for risk in week 14 and for growth experiments later.',
    objectives: ['Explain normal distributions and sampling', 'Read a simple regression', 'Separate correlation from causation'],
    sessions: [
      { title: 'Session 1 · Distributions', tasks: [watch('Stanford Statistics: modules 4–5', 120, L.cStats)] },
      { title: 'Session 2 · Regression', tasks: [watch('Stanford Statistics: module 6 "Regression"', 60, L.cStats), doIt('Exercise: scatter chart and trendline', 60)] },
    ],
    exercise: {
      title: 'Scatter chart',
      steps: ['Use two related sets of numbers, such as monthly ad spend and sales, or temperature and energy use.', 'Make an Excel scatter chart and add a trendline with R².', 'Write one sentence: what is the relationship, and could something else explain it?'],
      output: 'Upload the chart.',
    },
    discuss: 'Name a correlation you\'ve seen claimed that may not be causal.',
    check: ['What does an R² of 0.3 mean?', 'Give an example where correlation isn\'t causation.'],
    terms: [
      { term: 'Regression', def: 'Estimating how an outcome changes as another factor changes.' },
      { term: 'R²', def: 'The share of the variation that the model explains.' },
    ],
    cards: [
      { front: 'R² = 0.3 means', back: 'The model explains 30% of the variation' },
      { front: 'Correlation vs causation', back: 'Two things moving together doesn\'t prove one causes the other' },
    ],
  },
  {
    week: 10,
    module: 'Statistics 3: confidence and decisions',
    brief: { watch: 'Introduction to Statistics (Stanford), modules 7–8', read: 'None', do: 'Build a decision tree for a real choice', deliverable: 'A decision tree with expected values' },
    why: 'Now you can judge whether a result is real, and compare uncertain options using expected value. Managers do this constantly.',
    objectives: ['Explain confidence intervals and p-values simply', 'Calculate expected value', 'Use a decision tree'],
    sessions: [
      { title: 'Session 1 · Inference', tasks: [watch('Stanford Statistics: modules 7–8', 120, L.cStats)] },
      { title: 'Session 2 · Decide', tasks: [doIt('Exercise: decision tree (steps below)', 120)] },
    ],
    exercise: {
      title: 'Decision tree',
      steps: ['Pick a real decision with an uncertain outcome.', 'Draw the options, the possible outcomes and their values.', 'Give each outcome a probability and calculate each option\'s expected value in Excel.', 'Note whether you\'d still choose it, given the worst case.'],
      output: 'Upload the tree (a photo is fine).',
    },
    discuss: 'Share a decision where expected value and your gut disagree.',
    check: ['What is a 95% confidence interval in plain words?', 'How do you calculate expected value?'],
    terms: [
      { term: 'p-value', def: 'How surprising a result would be if there were truly no effect.' },
      { term: 'Expected value', def: 'The probability-weighted average outcome.' },
    ],
    cards: [{ front: 'Expected value', back: 'Sum of (probability × value) across all outcomes' }],
  },
  {
    week: 11,
    module: 'Checkpoint 1',
    brief: { watch: 'None', read: 'Your notes from weeks 1–10', do: 'Catch up, then sit a 90-minute mini exam', deliverable: 'A marked mini exam' },
    why: 'No new material. Use this week to catch up, then prove you can read a company\'s accounts without help.',
    objectives: ['Close any gaps', 'Use accounting and statistics on a new company'],
    sessions: [
      { title: 'Session 1 · Catch up', tasks: [doIt('Finish anything unfinished and clear your flashcards', 150)] },
      { title: 'Session 2 · Mini exam', tasks: [doIt('Mini exam (steps below), 90 minutes', 90)] },
    ],
    exercise: {
      title: 'Mini exam',
      steps: ['Choose a listed company you haven\'t studied.', 'Summarise its three statements and calculate 3 ratios.', 'Write a short view on its financial health.', 'Score yourself out of 10: accuracy 5, reasoning 3, clarity 2.'],
      output: 'Upload your answers and enter your score.',
    },
    discuss: 'What was your weakest area, and how will you fix it?',
    check: ['Which week would you least want to redo unaided?'],
    terms: [],
    cards: [],
  },
];
