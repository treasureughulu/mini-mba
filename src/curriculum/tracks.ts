import { L } from './links';
import { doIt, watch, type Lesson } from './types';

// Elective tracks. Each block replaces a run of weeks; every option fits the same weeks.
const finance: Lesson[] = [
  {
    week: 25,
    module: 'Finance 5: how markets work',
    brief: { watch: 'Damodaran, Foundations: bonds and equity; Financial Markets (Yale, Robert Shiller): selected lectures', read: 'None', do: 'Compare a bond with a share', deliverable: 'A one-page comparison' },
    why: 'This track builds on weeks 12–15. First, how investors price the two biggest asset types.',
    objectives: ['Explain how bonds and shares are priced', 'Explain why markets can misprice assets'],
    sessions: [
      { title: 'Session 1 · Pricing assets', tasks: [watch('Damodaran, Foundations of Finance: "Valuing Contractual Claims (Bonds)" and "Valuing Residual Claims (Equity)"', 40, L.dFound), watch('Coursera: Financial Markets (Yale, Robert Shiller): lectures on stocks and bonds', 80, L.cShiller)] },
      { title: 'Session 2 · Compare', tasks: [watch('Financial Markets: lectures on behavioural finance', 80, L.cShiller), doIt('Exercise: bond vs share', 40)] },
    ],
    exercise: { title: 'Bond vs share', steps: ['Pick a UK gilt and a FTSE company\'s share.', 'Note the expected return and main risk of each.', 'Say which suits a 2-year goal and which a 20-year goal, and why.'], output: 'Upload one page.' },
    discuss: 'Why might a market misprice a popular company?',
    check: ['Why do bond prices fall when rates rise?'],
    terms: [{ term: 'Bond', def: 'A loan to a government or company that pays fixed interest.' }],
    cards: [{ front: 'When interest rates rise, bond prices…', back: 'Fall' }],
  },
  {
    week: 26,
    module: 'Finance 6: better valuation inputs',
    brief: { watch: 'Damodaran, Valuation: sessions 3–6 and 8', read: 'None', do: 'Improve your week-15 DCF', deliverable: 'An improved DCF' },
    why: 'Valuation is only as good as its inputs. This week upgrades the simple DCF you built in week 15.',
    objectives: ['Choose better risk and growth inputs', 'Test how inputs change a valuation'],
    sessions: [
      { title: 'Session 1 · Risk inputs', tasks: [watch('Damodaran, Valuation: sessions 3–6', 80, L.dVal), doIt('Update the discount rate in your DCF', 40)] },
      { title: 'Session 2 · Growth', tasks: [watch('Damodaran, Valuation: session 8 "Estimating Growth"', 20, L.dVal), doIt('Exercise: sensitivity table', 100)] },
    ],
    exercise: { title: 'Improved DCF', steps: ['Open your week-15 DCF.', 'Update WACC and growth, and write why.', 'Build a table of value at different WACC and growth rates.'], output: 'Upload the model.' },
    discuss: 'Which input moved your valuation most?',
    check: ['Why does growth only add value if returns beat the cost of capital?'],
    terms: [{ term: 'Sensitivity analysis', def: 'Testing how a result changes as an input changes.' }],
    cards: [{ front: 'Growth adds value only when…', back: 'Returns on new investment exceed the cost of capital' }],
  },
  {
    week: 27,
    module: 'Finance 7: deals and private companies',
    brief: { watch: 'Damodaran, Valuation: sessions 10, 12 and 20', read: 'None', do: 'Assess a real acquisition', deliverable: 'A one-page deal note' },
    why: 'Most companies aren\'t listed, and many acquisitions destroy value. This week shows why.',
    objectives: ['Value a private company in broad terms', 'Explain synergy and control'],
    sessions: [
      { title: 'Session 1 · Deals', tasks: [watch('Damodaran, Valuation: sessions 10 "Value Enhancement" and 12 "Acquisition Ornaments"', 50, L.dVal), watch('Damodaran, Valuation: session 20 "Private Company Valuation"', 25, L.dVal), doIt('Choose a recent acquisition and find the price paid', 45)] },
      { title: 'Session 2 · Assess it', tasks: [doIt('Exercise: deal note', 120)] },
    ],
    exercise: { title: 'Deal note', steps: ['Note the price and the reasons given.', 'List the promised synergies.', 'Decide whether the buyer overpaid, and why.'], output: 'Upload one page.' },
    discuss: 'Why do so many acquisitions disappoint?',
    check: ['What is synergy?'],
    terms: [{ term: 'Synergy', def: 'Extra value created by combining two businesses.' }],
    cards: [{ front: 'Synergy', back: 'Value from combining two businesses beyond their separate values' }],
  },
  {
    week: 28,
    module: 'Finance 8: financing and payouts',
    brief: { watch: 'Damodaran, Corporate Finance Online: selected sessions on financing and dividends', read: 'None', do: 'Review a company\'s financing', deliverable: 'A one-page financing note' },
    why: 'Companies choose how to fund themselves and what to return to owners. These choices shape risk and value.',
    objectives: ['Explain the debt trade-off', 'Explain when to return cash to shareholders'],
    sessions: [
      { title: 'Session 1 · Debt', tasks: [watch('Damodaran, Corporate Finance Online: sessions 17, 18 and 23', 50, L.dCF), watch('Damodaran: sessions 24 and 25 on dividends', 35, L.dCF), doIt('Find your company\'s debt and shareholder payouts', 35)] },
      { title: 'Session 2 · Assess', tasks: [doIt('Exercise: financing note', 120)] },
    ],
    exercise: { title: 'Financing note', steps: ['Note your company\'s debt, cash and payouts.', 'Say whether it has too much debt or too little.', 'Say whether it should pay out more, and why.'], output: 'Upload one page.' },
    discuss: 'Should your company pay out more cash or reinvest it?',
    check: ['What is the main benefit and main risk of debt?'],
    terms: [{ term: 'Dividend', def: 'A cash payment from a company to its shareholders.' }],
    cards: [{ front: 'Debt trade-off', back: 'Tax benefit and discipline vs the risk of financial distress' }],
  },
];

const operations: Lesson[] = [
  {
    week: 29,
    module: 'Operations 2: flow and lean',
    brief: { watch: 'Introduction to Operations Management (Wharton), module 2', read: 'None', do: 'Find waste in one process', deliverable: 'A waste list with one fix' },
    why: 'Lean thinking removes delays and rework. It builds on the process map you made in week 22.',
    objectives: ['Spot waste in a process', 'Explain lean operations'],
    sessions: [
      { title: 'Session 1 · Flow', tasks: [watch('Coursera: Introduction to Operations Management (Wharton): module 2, first half', 120, L.cOps)] },
      { title: 'Session 2 · Lean', tasks: [watch('Wharton Operations: module 2, key remaining lessons', 80, L.cOps), doIt('Exercise: waste list', 40)] },
    ],
    exercise: { title: 'Waste list', steps: ['Use your week-22 process.', 'Mark waiting, rework and unnecessary steps.', 'Propose one fix and estimate the time saved.'], output: 'Upload one page.' },
    discuss: 'Where does work wait the longest in your team?',
    check: ['Name three types of waste.'],
    terms: [{ term: 'Lean', def: 'Delivering value with as little waste as possible.' }],
    cards: [{ front: 'Lean goal', back: 'Deliver value with minimal waste' }],
  },
  {
    week: 30,
    module: 'Operations 3: waiting and Little\'s Law',
    brief: { watch: 'Introduction to Operations Management (Wharton), module 3', read: 'None', do: 'Apply Little\'s Law to real work', deliverable: 'A short calculation' },
    why: 'Queues appear everywhere, from checkouts to email. Little\'s Law connects work in progress with how long things take.',
    objectives: ['Use Little\'s Law', 'Explain why too much work in progress slows delivery'],
    sessions: [
      { title: 'Session 1 · Little\'s Law', tasks: [watch('Wharton Operations: module 3 "Little\'s Law", first half', 110, L.cOps)] },
      { title: 'Session 2 · Apply', tasks: [watch('Wharton Operations: module 3, second half', 70, L.cOps), doIt('Exercise: calculate flow time', 60)] },
    ],
    exercise: { title: 'Flow time', steps: ['Count the open items in a real queue.', 'Estimate how many finish each week.', 'Calculate the average wait: items ÷ weekly throughput.'], output: 'Upload your calculation.' },
    discuss: 'What happens if your team takes on less at once?',
    check: ['State Little\'s Law.'],
    terms: [{ term: 'Work in progress', def: 'Items started but not finished.' }],
    cards: [{ front: 'Little\'s Law', back: 'Inventory = throughput × flow time' }],
  },
  {
    week: 31,
    module: 'Operations 4: quality',
    brief: { watch: 'Introduction to Operations Management (Wharton), module 4', read: 'None', do: 'Find the root cause of one problem', deliverable: 'A root-cause note' },
    why: 'Fixing the cause of a mistake is cheaper than fixing the same mistake repeatedly.',
    objectives: ['Explain quality basics', 'Use the 5 Whys'],
    sessions: [
      { title: 'Session 1 · Quality', tasks: [watch('Wharton Operations: module 4 "Quality", first half', 110, L.cOps)] },
      { title: 'Session 2 · Root cause', tasks: [watch('Wharton Operations: module 4, second half', 70, L.cOps), doIt('Exercise: 5 Whys', 60)] },
    ],
    exercise: { title: '5 Whys', steps: ['Pick a problem that keeps returning.', 'Ask "why?" five times.', 'Propose a fix for the root cause.', 'Choose one number to track.'], output: 'Upload one page.' },
    discuss: 'Did you reach a root cause or just a symptom?',
    check: ['Why is preventing errors cheaper than fixing them?'],
    terms: [{ term: '5 Whys', def: 'Asking "why?" repeatedly to reach a root cause.' }],
    cards: [{ front: '5 Whys', back: 'Keep asking why until you reach the root cause' }],
  },
];

const leadership: Lesson[] = [
  {
    week: 32,
    module: 'Leadership 1: your base of power',
    brief: { watch: 'Influencing People (Michigan), module 1', read: 'None', do: 'Map your network', deliverable: 'A network map' },
    why: 'Careers depend on relationships as well as skill. This track builds on the team work in week 23.',
    objectives: ['Explain sources of power', 'Map your network'],
    sessions: [
      { title: 'Session 1 · Power', tasks: [watch('Coursera: Influencing People (Michigan, Maxim Sytch): module 1, first half', 110, L.cInfluence)] },
      { title: 'Session 2 · Your network', tasks: [watch('Influencing People: module 1, second half', 60, L.cInfluence), doIt('Exercise: network map', 70)] },
    ],
    exercise: { title: 'Network map', steps: ['List 15 people you rely on or learn from.', 'Mark who helps with today\'s job, your growth and your future.', 'Pick 2 gaps and one person to contact for each.'], output: 'Upload it, using initials only.' },
    discuss: 'Where is your network strongest and weakest?',
    check: ['Name two sources of power beyond a job title.'],
    terms: [{ term: 'Influence', def: 'Changing what others think or do without using authority.' }],
    cards: [{ front: 'Power without authority', back: 'Comes from expertise, relationships and the information you hold' }],
  },
  {
    week: 33,
    module: 'Leadership 2: influence without authority',
    brief: { watch: 'Influencing People (Michigan), module 2', read: 'None', do: 'Plan one real influence attempt', deliverable: 'An influence plan' },
    why: 'Much of your work depends on people who don\'t report to you. This week gives you a practical approach.',
    objectives: ['Use influence tactics ethically', 'Plan how to win support'],
    sessions: [
      { title: 'Session 1 · Tactics', tasks: [watch('Influencing People: module 2, first half', 120, L.cInfluence)] },
      { title: 'Session 2 · Apply', tasks: [watch('Influencing People: module 2, key remaining lessons', 80, L.cInfluence), doIt('Exercise: influence plan', 40)] },
    ],
    exercise: { title: 'Influence plan', steps: ['Name one change you want.', 'List the people who matter and what each cares about.', 'Plan your approach, then try the first step.'], output: 'Upload one page.' },
    discuss: 'Who is the most persuasive person you know, and why?',
    check: ['What makes influence ethical rather than manipulative?'],
    terms: [{ term: 'Stakeholder map', def: 'A list of who matters, and what each person cares about.' }],
    cards: [{ front: 'Before asking for support', back: 'Find out what the other person cares about' }],
  },
  {
    week: 34,
    module: 'Leadership 3: team performance',
    brief: { watch: 'Leading Teams (Michigan), modules 2–3', read: 'None', do: 'Improve one team habit', deliverable: 'A team improvement plan' },
    why: 'Good structure and healthy dynamics make good people more effective. This continues from week 23.',
    objectives: ['Structure a team', 'Manage team dynamics'],
    sessions: [
      { title: 'Session 1 · Structure', tasks: [watch('Coursera: Leading Teams (Michigan): module 2', 120, L.cTeams)] },
      { title: 'Session 2 · Dynamics', tasks: [watch('Leading Teams: module 3', 60, L.cTeams), doIt('Exercise: team plan', 60)] },
    ],
    exercise: { title: 'Team plan', steps: ['Pick a team you\'re part of.', 'Name its biggest obstacle.', 'Choose one habit to change and how you\'ll know it worked.'], output: 'Upload one page.' },
    discuss: 'What is one team habit worth changing?',
    check: ['What makes team goals clear?'],
    terms: [{ term: 'Team norms', def: 'Agreed rules for how a team works together.' }],
    cards: [{ front: 'Team norms', back: 'Agreed rules for how a team works together' }],
  },
];

const data: Lesson[] = [
  {
    week: 32,
    module: 'Data 1: regression in Excel',
    brief: { watch: 'Mastering Data Analysis in Excel (Duke), linear regression', read: 'None', do: 'Run a regression on real data', deliverable: 'A regression summary' },
    why: 'You met regression in week 9. Now you\'ll run it properly and explain the result.',
    objectives: ['Run a regression in Excel', 'Explain a result in plain English'],
    sessions: [
      { title: 'Session 1 · Linear regression', tasks: [watch('Coursera: Mastering Data Analysis in Excel (Duke): "Linear Regression", first half', 110, L.cExcelData)] },
      { title: 'Session 2 · Apply', tasks: [watch('Mastering Data Analysis in Excel: "Linear Regression", second half', 70, L.cExcelData), doIt('Exercise: run a regression', 60)] },
    ],
    exercise: { title: 'Regression summary', steps: ['Choose an outcome and 2 possible drivers.', 'Run the regression with Excel\'s Data Analysis tool.', 'Explain one coefficient in plain English.', 'Note why it might not be causal.'], output: 'Upload one page.' },
    discuss: 'What result would change a decision at your company?',
    check: ['What does a coefficient tell you?'],
    terms: [{ term: 'Coefficient', def: 'The estimated change in the outcome for a one-unit change in a driver.' }],
    cards: [{ front: 'Regression coefficient', back: 'The change in the outcome for a one-unit change in a driver' }],
  },
  {
    week: 33,
    module: 'Data 2: understanding customers',
    brief: { watch: 'Customer Analytics (Wharton), modules 1–2', read: 'None', do: 'Summarise customers by group', deliverable: 'A one-page customer summary' },
    why: 'Most companies hold customer data they barely use. This week turns it into a clear picture.',
    objectives: ['Explain descriptive analytics', 'Compare customer groups'],
    sessions: [
      { title: 'Session 1 · Introduction', tasks: [watch('Coursera: Customer Analytics (Wharton): module 1 and the start of module 2', 110, L.cCustAnalytics)] },
      { title: 'Session 2 · Describe', tasks: [watch('Customer Analytics: "Descriptive Analytics", key lessons', 70, L.cCustAnalytics), doIt('Exercise: customer summary', 60)] },
    ],
    exercise: { title: 'Customer summary', steps: ['Use work data or a public dataset.', 'Compare 2–3 customer groups in a PivotTable.', 'Write one recommendation.'], output: 'Upload one page.' },
    discuss: 'Which customer group is worth most to your company?',
    check: ['What is descriptive analytics?'],
    terms: [{ term: 'Descriptive analytics', def: 'Summarising what has already happened.' }],
    cards: [{ front: 'Descriptive vs predictive analytics', back: 'What happened vs what is likely to happen' }],
  },
  {
    week: 34,
    module: 'Data 3: predicting customer behaviour',
    brief: { watch: 'Customer Analytics (Wharton), "Predictive Analytics"', read: 'None', do: 'Propose one prediction project', deliverable: 'A one-page proposal' },
    why: 'Prediction helps you act early, for example before a customer leaves.',
    objectives: ['Explain predictive analytics', 'Scope a useful prediction project'],
    sessions: [
      { title: 'Session 1 · Prediction', tasks: [watch('Customer Analytics: "Predictive Analytics", first half', 120, L.cCustAnalytics)] },
      { title: 'Session 2 · Propose', tasks: [watch('Customer Analytics: "Predictive Analytics", key remaining lessons', 70, L.cCustAnalytics), doIt('Exercise: project proposal', 50)] },
    ],
    exercise: { title: 'Prediction proposal', steps: ['Name what you would predict and the action it would trigger.', 'List the data you would need.', 'Estimate the value of being right.'], output: 'Upload one page.' },
    discuss: 'What would you predict if you had perfect data?',
    check: ['Why does a prediction need an action attached?'],
    terms: [{ term: 'Predictive analytics', def: 'Using past data to estimate what will happen next.' }],
    cards: [{ front: 'A useful prediction', back: 'Changes an action someone will actually take' }],
  },
];

export interface TrackOption {
  id: string;
  name: string;
  blurb: string;
  /** Empty means this block's default weeks in electives.ts */
  lessons: Lesson[];
}

export interface TrackBlock {
  id: 'A' | 'B' | 'C';
  title: string;
  weeks: number[];
  options: TrackOption[];
}

export const TRACKS: TrackBlock[] = [
  {
    id: 'A',
    title: 'Block A',
    weeks: [25, 26, 27, 28],
    options: [
      { id: 'marketing', name: 'Marketing & Growth', blurb: 'Positioning, go-to-market, funnels and experiments.', lessons: [] },
      { id: 'finance', name: 'Finance & Investing', blurb: 'Markets, deeper valuation, deals and financing.', lessons: finance },
    ],
  },
  {
    id: 'B',
    title: 'Block B',
    weeks: [29, 30, 31],
    options: [
      { id: 'ai', name: 'AI & Technology', blurb: 'What AI can do, trying it at work, and a business case.', lessons: [] },
      { id: 'operations', name: 'Operations', blurb: 'Lean, queues and quality.', lessons: operations },
    ],
  },
  {
    id: 'C',
    title: 'Block C',
    weeks: [32, 33, 34],
    options: [
      { id: 'skills', name: 'Business Skills', blurb: 'Data, sales and negotiation.', lessons: [] },
      { id: 'leadership', name: 'Leadership & Influence', blurb: 'Power, influence and team performance.', lessons: leadership },
      { id: 'data', name: 'Data & Analytics', blurb: 'Regression, customer analytics and prediction.', lessons: data },
    ],
  },
];

export type TrackChoices = Partial<Record<TrackBlock['id'], string>>;

/** The alternative lesson for this week, if the person chose a non-default track. */
export function trackLesson(week: number, choices: TrackChoices | null | undefined): Lesson | undefined {
  const block = TRACKS.find((b) => b.weeks.includes(week));
  const option = block?.options.find((o) => o.id === choices?.[block.id]);
  return option?.lessons.find((l) => l.week === week);
}

