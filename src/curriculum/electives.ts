import { L, book, web, yt } from './links';
import { doIt, read, watch, type Lesson } from './types';

// Weeks 25–36: growth marketing, AI and tech strategy, data, sales, negotiation, entrepreneurship, finance for growth.
export const electives: Lesson[] = [
  {
    week: 25,
    brief: {
      watch: 'Darden Marketing Analytics modules 1–3',
      read: 'Hacking Growth (Ellis & Brown)',
      do: 'Map your company\'s acquisition-to-retention funnel',
      deliverable: 'A funnel map with the biggest drop-off',
    },
    why:
      'Growth is a system, not a campaign. Modern growth teams treat acquisition, activation, retention, referral and revenue as one measurable funnel, find where it leaks most and fix that first. It is one of the most in-demand skills in any company.',
    objectives: [
      'Define a North Star metric and a growth funnel (AARRR)',
      'Measure brand and customer metrics, including customer lifetime value (CLV)',
      'Find the biggest leak in a funnel with data',
      'Explain the "aha moment" and why activation matters',
    ],
    sessions: [
      { title: 'Session 1 · Brand metrics', tasks: [watch('Coursera: Marketing Analytics (Darden, Rajkumar Venkatesan): module 1 "Leveraging User Generated Content" and module 2 "Metrics for Measuring Brand Assets" (part)', 120, L.cMktAnalytics)] },
      { title: 'Session 2 · Customer lifetime value', tasks: [watch('Marketing Analytics: finish module 2, then module 3 "Customer Lifetime Value"', 120, L.cMktAnalytics)] },
      { title: 'Session 3 · Hacking Growth', tasks: [read('Hacking Growth (Sean Ellis & Morgan Brown): Part I, the growth hacking method, North Star and growth teams', 120, book('Hacking Growth Ellis Brown'))] },
      { title: 'Session 4 · Funnel data', tasks: [read('Hacking Growth: the chapters on acquisition, activation and retention', 60), doIt('Gather real or estimated numbers for each funnel stage at your company', 60)] },
      { title: 'Session 5 · Funnel map', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'Growth funnel map',
      steps: [
        'Choose a North Star metric that reflects value delivered to customers (e.g. weekly active teams, orders per month).',
        'Map the funnel: Acquisition → Activation → Retention → Referral → Revenue, with a number and a conversion % for each step.',
        'Calculate CLV roughly: average margin per customer per year × expected years retained.',
        'Find the biggest drop-off, and the step where a 10% improvement would add the most revenue.',
        'Write 3 hypotheses for why customers drop off there.',
      ],
      output: 'Upload the funnel map plus hypotheses.',
    },
    discuss: 'What is your company\'s "aha moment", the point where customers first get real value? How fast do new customers reach it?',
    check: ['What does AARRR stand for?', 'What makes a good North Star metric?', 'How do you calculate a simple CLV?'],
    terms: [
      { term: 'North Star metric', def: 'The single metric that best captures the value customers get from your product.' },
      { term: 'AARRR', def: 'The "pirate metrics" funnel: Acquisition, Activation, Retention, Referral, Revenue.' },
      { term: 'Activation', def: 'The moment a new user first experiences the product\'s core value.' },
      { term: 'CLV / LTV', def: 'Customer lifetime value: total profit expected from a customer over the relationship.' },
    ],
    cards: [
      { front: 'AARRR', back: 'Acquisition, Activation, Retention, Referral, Revenue' },
      { front: 'Simple CLV', back: 'Annual margin per customer × expected years retained (discount for precision)' },
      { front: 'Good North Star metric', back: 'Reflects customer value delivered, leads revenue, and the whole team can influence it' },
    ],
  },
  {
    week: 26,
    brief: {
      watch: 'Darden Marketing Analytics module 4 "Marketing Experiments"; Wharton Customer Analytics (selected)',
      read: 'Lean Analytics (Croll & Yoskovitz)',
      do: 'Design 3 growth experiments for your biggest drop-off',
      deliverable: 'An experiment plan',
    },
    why:
      'Opinions are cheap; experiments are evidence. A/B tests and structured experiments let you learn what actually moves customers and stop arguing in meetings. This is where your week-8 statistics pays off.',
    objectives: [
      'Design a valid A/B test: hypothesis, metric, sample size, duration',
      'Prioritise experiments with ICE scoring',
      'Choose the One Metric That Matters for your stage',
      'Avoid common experiment mistakes (peeking, too-small samples)',
    ],
    sessions: [
      { title: 'Session 1 · Experiments', tasks: [watch('Marketing Analytics: module 4 "Marketing Experiments"', 120, L.cMktAnalytics)] },
      { title: 'Session 2 · Customer analytics', tasks: [watch('Coursera: Customer Analytics (Wharton): modules 1–2 "Introduction" and "Descriptive Analytics"', 120, L.cCustAnalytics)] },
      { title: 'Session 3 · Lean Analytics', tasks: [read('Lean Analytics (Alistair Croll & Benjamin Yoskovitz): the chapters on the One Metric That Matters and the stages of growth', 120, book('Lean Analytics Croll Yoskovitz'))] },
      { title: 'Session 4 · Sample sizes', tasks: [doIt('Use a free A/B test sample size calculator; work out how many users each test needs', 30, web('A/B test sample size calculator')), read('Hacking Growth: the chapter on experimentation and the ICE framework', 60), doIt('Brainstorm 10 experiment ideas for your week-25 drop-off', 30)] },
      { title: 'Session 5 · Plan', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'Experiment plan',
      steps: [
        'Score your 10 ideas on Impact, Confidence and Ease (1–10 each). Pick the top 3.',
        'For each: a hypothesis ("If we X, then Y will increase by Z%, because …"), a primary metric and a guardrail metric.',
        'Sample size and duration from the calculator; state the minimum detectable effect.',
        'Decision rule written in advance: what result means ship, iterate or kill.',
      ],
      output: 'Upload the experiment plan.',
    },
    discuss: 'What is an experiment your company should have run before a big decision, but did not?',
    check: ['Why should you not stop a test the moment it looks significant?', 'What is a guardrail metric?', 'What does ICE stand for?'],
    terms: [
      { term: 'A/B test', def: 'Randomly showing two versions to comparable groups and comparing outcomes.' },
      { term: 'Minimum detectable effect', def: 'The smallest improvement your test is designed to reliably detect.' },
      { term: 'Guardrail metric', def: 'A metric you watch to make sure a "win" is not harming something else.' },
      { term: 'OMTM', def: 'One Metric That Matters: the single number to focus on right now.' },
    ],
    cards: [
      { front: 'ICE scoring', back: 'Impact, Confidence, Ease (1–10 each), to prioritise experiments' },
      { front: 'Peeking problem', back: 'Checking results repeatedly and stopping early inflates false positives' },
      { front: 'Hypothesis template', back: 'If we [change], then [metric] will [move] by [amount], because [reason]' },
    ],
  },
  {
    week: 27,
    brief: {
      watch: 'Google Analytics certification (Skillshop, free)',
      read: 'Monetizing Innovation (Ramanujam & Tacke)',
      do: 'Run a willingness-to-pay survey with 20 people',
      deliverable: 'A pricing recommendation',
    },
    why:
      'Pricing is the fastest lever on profit: a 1% price improvement often beats a 1% cost cut or volume gain. Yet most companies price by gut or cost-plus. This week you learn to discover what customers will pay and design offers around it.',
    objectives: [
      'Run a willingness-to-pay study (Van Westendorp)',
      'Design good-better-best packages and choose a pricing model',
      'Use web analytics to see how customers behave',
      'Make a data-backed pricing recommendation',
    ],
    sessions: [
      { title: 'Session 1 · Monetizing Innovation', tasks: [read('Monetizing Innovation (Madhavan Ramanujam & Georg Tacke): Part 1, why products fail to monetise and willingness-to-pay conversations', 120, book('Monetizing Innovation Ramanujam'))] },
      { title: 'Session 2 · Packaging and models', tasks: [read('Monetizing Innovation: chapters on segmentation, configuration and pricing models', 90), read('OpenStax Marketing: chapter 12 "Pricing Products and Services" (review)', 30, L.osMarketing)] },
      { title: 'Session 3 · Web analytics', tasks: [watch('Google Skillshop: Google Analytics certification course (free), first modules', 120, L.skillshop)] },
      { title: 'Session 4 · Survey', tasks: [doIt('Build a Van Westendorp survey (4 questions: too cheap, a bargain, getting expensive, too expensive) in Google Forms and send it to 20+ target customers', 60, web('Van Westendorp price sensitivity meter explained')), watch('Google Analytics course: continue', 60, L.skillshop)] },
      { title: 'Session 5 · Recommendation', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'Pricing recommendation',
      steps: [
        'Plot the four Van Westendorp curves in Excel; read off the acceptable price range.',
        'Segment the answers: do different customer types have different willingness to pay?',
        'Design a good-better-best line-up with prices, and what goes in each tier (and what does not).',
        'Model revenue at your recommended prices against today\'s. State the main risk and how you would test it (link to week 26).',
      ],
      output: 'Upload the analysis plus a 1-page recommendation.',
    },
    discuss: 'What is the cleverest pricing you have seen recently (a tier, a bundle, a model)? Why does it work?',
    check: ['Name the four Van Westendorp questions.', 'Why does good-better-best work?', 'Why is cost-plus pricing risky?'],
    terms: [
      { term: 'Willingness to pay (WTP)', def: 'The maximum price a customer would pay for a product.' },
      { term: 'Van Westendorp', def: 'A survey method using four price questions to find an acceptable price range.' },
      { term: 'Good-better-best', def: 'Offering three tiers so customers self-select by value.' },
      { term: 'Price anchoring', def: 'A reference price that shapes how others are perceived.' },
    ],
    cards: [
      { front: 'Van Westendorp: the four questions', back: 'At what price is it too cheap, a bargain, getting expensive, too expensive?' },
      { front: 'Monetizing Innovation core idea', back: 'Design the product around the price: talk willingness to pay before building' },
    ],
  },
  {
    week: 28,
    brief: {
      watch: 'AI For Everyone (Andrew Ng), all 4 modules',
      read: 'Power and Prediction (Agrawal, Gans, Goldfarb)',
      do: 'Map where AI changes your company\'s 10 biggest decisions',
      deliverable: 'An AI opportunity map',
    },
    why:
      'AI is changing what work gets done and who does it. You do not need to code, but you do need to understand what AI can and cannot do, and to see it as a technology that makes prediction cheap. That lens shows where the real business value is.',
    objectives: [
      'Explain machine learning, deep learning and generative AI in plain English',
      'Spot good and bad AI use cases',
      'Use the "AI as prediction" lens to find opportunities',
      'Distinguish point, application and system solutions',
    ],
    sessions: [
      { title: 'Session 1 · What is AI?', tasks: [watch('Coursera: AI For Everyone (DeepLearning.AI, Andrew Ng): module 1 "What is AI?"', 120, L.cAI)] },
      { title: 'Session 2 · AI projects', tasks: [watch('AI For Everyone: modules 2–3 "Building AI Projects" and "Building AI In Your Company"', 120, L.cAI)] },
      { title: 'Session 3 · Society and limits', tasks: [watch('AI For Everyone: module 4 "AI and Society"', 90, L.cAI), doIt('Try Elements of AI chapter 1 for a deeper, free view (optional)', 30, L.elementsAI)] },
      { title: 'Session 4 · Power and Prediction', tasks: [read('Power and Prediction (Ajay Agrawal, Joshua Gans, Avi Goldfarb): the chapters on AI as prediction and point vs system solutions', 120, book('Power and Prediction Agrawal Gans Goldfarb'))] },
      { title: 'Session 5 · Opportunity map', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'AI opportunity map',
      steps: [
        'List the 10 most valuable recurring decisions in your company (e.g. pricing, credit approval, hiring screen, inventory orders, support routing).',
        'For each: what is being predicted? What data exists? What does a wrong prediction cost?',
        'Classify each opportunity as a point solution (one task), an application solution (redesigns a workflow) or a system solution (changes how the business works).',
        'Plot them on a 2×2 of value against feasibility. Pick the top 2 and explain why.',
      ],
      output: 'Upload the map.',
    },
    discuss: 'Which job in your company will change most because of AI in the next 3 years? Better or worse for the people in it?',
    check: ['What is supervised learning?', 'Why do Agrawal et al. call AI a "prediction technology"?', 'Point vs system solution: what is the difference?'],
    terms: [
      { term: 'Machine learning', def: 'Software that learns patterns from data instead of following hand-written rules.' },
      { term: 'Supervised learning', def: 'Learning from labelled examples (input → correct output).' },
      { term: 'Generative AI', def: 'Models that create new text, images or code from patterns in training data.' },
      { term: 'System solution', def: 'Redesigning a whole system of decisions around cheap prediction, where the biggest value lies.' },
    ],
    cards: [
      { front: 'AI as economics (Agrawal et al.)', back: 'AI makes prediction cheap; value comes from redesigning decisions around it' },
      { front: 'Point / application / system solutions', back: 'Improve one task / redesign a workflow / rethink the whole system' },
      { front: 'Andrew Ng\'s rule of thumb', back: 'If a typical person can do a mental task in about a second, it can probably be automated with AI' },
    ],
  },
  {
    week: 29,
    brief: {
      watch: 'Generative AI for Everyone (Andrew Ng)',
      read: 'Competing in the Age of AI (Iansiti & Lakhani)',
      do: 'Compare your company with an AI-native competitor',
      deliverable: 'A 2-page competitive memo',
    },
    why:
      'AI-native firms are built differently: data-driven decisions, software-run processes and learning loops that make them better as they scale. Understanding this operating model shows where traditional firms are exposed and how they can respond.',
    objectives: [
      'Explain how generative AI works and where it creates value',
      'Describe the AI-native operating model ("AI factory")',
      'Compare scale, scope and learning effects of digital vs traditional firms',
      'Use generative AI tools productively in your own work',
    ],
    sessions: [
      { title: 'Session 1 · GenAI basics', tasks: [watch('Coursera: Generative AI for Everyone (Andrew Ng): modules 1–2', 120, L.cGenAI)] },
      { title: 'Session 2 · GenAI in business', tasks: [watch('Generative AI for Everyone: module 3 "Generative AI in Business and Society"', 90, L.cGenAI), doIt('Use an AI assistant to draft, critique and improve one real work document; note what it did well and badly', 30)] },
      { title: 'Session 3 · Competing in the Age of AI', tasks: [read('Competing in the Age of AI (Marco Iansiti & Karim Lakhani): chapters on the AI factory and rethinking the firm', 120, book('Competing in the Age of AI Iansiti Lakhani'))] },
      { title: 'Session 4 · Research', tasks: [read('Competing in the Age of AI: chapters on strategic collisions and the new rules', 60), doIt('Research an AI-native competitor or adjacent player in your industry', 60)] },
      { title: 'Session 5 · Memo', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'AI-native competitor memo',
      steps: [
        'Pick your company and an AI-native or digital-native rival.',
        'Compare: how decisions get made, where data comes from, how fast processes scale, how they learn.',
        'Where does the rival\'s cost or quality curve beat yours as volume grows?',
        'Recommend 3 moves your company should make in the next 12 months.',
      ],
      output: 'Upload the 2-page memo.',
    },
    discuss: 'Share one task where generative AI genuinely saved you time this week, and one where it failed.',
    check: ['What is the "AI factory"?', 'Why do digital operating models scale differently?', 'Name two risks of generative AI in business.'],
    terms: [
      { term: 'AI factory', def: 'Iansiti & Lakhani: a data pipeline, algorithms and experimentation platform that drive decisions at scale.' },
      { term: 'Learning effects', def: 'A product getting better as more people use it and generate data.' },
      { term: 'Hallucination', def: 'When a generative AI model produces confident but false output.' },
    ],
    cards: [
      { front: 'AI factory components', back: 'Data pipeline, algorithm development, experimentation platform, software infrastructure' },
      { front: 'Why AI-native firms scale differently', back: 'Software and data remove human bottlenecks; scale, scope and learning compound' },
    ],
  },
  {
    week: 30,
    brief: {
      watch: 'Talks by Geoffrey Parker and Marshall Van Alstyne on platform strategy',
      read: 'Platform Revolution (Parker, Van Alstyne, Choudary)',
      do: 'Build an AI adoption business case',
      deliverable: 'A business case you could take to your boss',
    },
    why:
      'Platforms (Uber, Airbnb, App Store) win by connecting users rather than owning assets, and network effects make them hard to beat. This week ties the AI and platform ideas into one practical business case, the kind of document that gets things funded.',
    objectives: [
      'Explain pipeline vs platform business models',
      'Explain direct and indirect network effects',
      'Build a business case: costs, benefits, risks, rollout',
      'Use your finance skills (NPV) on a technology investment',
    ],
    sessions: [
      { title: 'Session 1 · Platforms', tasks: [read('Platform Revolution: the opening chapters on platforms and network effects', 120, book('Platform Revolution Parker Van Alstyne Choudary'))] },
      { title: 'Session 2 · Platform strategy', tasks: [watch('Geoffrey Parker or Marshall Van Alstyne talk on platform strategy', 60, yt('Marshall Van Alstyne platform revolution talk')), read('Platform Revolution: chapters on platform launch and monetisation', 60)] },
      { title: 'Session 3 · Business case structure', tasks: [doIt('Pick one opportunity from your week-28 map and gather cost estimates (tools, people, time)', 60), doIt('Draft the benefits model: time saved, revenue gained, error reduction', 60)] },
      { title: 'Session 4 · Build the case', tasks: [doIt('Build the 3-year NPV with best, base and worst scenarios (reuse your week-4 model)', 120)] },
      { title: 'Session 5 · Write it up', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'AI adoption business case',
      steps: [
        'Problem and opportunity (half a page), with a baseline metric.',
        'Solution options: build, buy or partner, and why you recommend one.',
        'Financials: costs, benefits and a 3-year NPV with scenarios.',
        'Risks: data, accuracy, people, regulation, with mitigations.',
        'Rollout: a pilot scope, success criteria and a 90-day plan.',
      ],
      output: 'Upload a 3-page business case.',
    },
    discuss: 'Is your company a pipeline, a platform or both? Could it become more of a platform?',
    check: ['Pipeline vs platform: the key difference?', 'Direct vs indirect network effects?', 'What belongs in a pilot\'s success criteria?'],
    terms: [
      { term: 'Platform', def: 'A business that creates value by enabling interactions between producers and consumers.' },
      { term: 'Network effect', def: 'When a product becomes more valuable as more people use it.' },
      { term: 'Indirect network effect', def: 'More users on one side attract more on the other (e.g. riders and drivers).' },
    ],
    cards: [
      { front: 'Pipeline vs platform', back: 'Pipelines create and push value linearly; platforms enable value exchange between users' },
      { front: 'Direct vs indirect network effects', back: 'Direct: same-side users add value (phone network). Indirect: cross-side (buyers ↔ sellers)' },
    ],
  },
  {
    week: 31,
    brief: {
      watch: 'Kaggle Learn: Intro to SQL and Pandas (free)',
      read: 'Storytelling with Data (Knaflic)',
      do: 'Answer a real business question with data',
      deliverable: 'A 1-page analysis plus a chart',
    },
    why:
      'Being able to pull and shape data yourself, and present it so people act, is a superpower for any manager. SQL is the universal language for getting data; good charts are how insight turns into decisions.',
    objectives: [
      'Write basic SQL queries (SELECT, WHERE, GROUP BY, JOIN)',
      'Clean and summarise data with Pandas or Excel PivotTables',
      'Choose the right chart and remove clutter',
      'Present an analysis with a clear "so what"',
    ],
    sessions: [
      { title: 'Session 1 · SQL', tasks: [doIt('Kaggle Learn: Intro to SQL, lessons 1–3 (free, in the browser)', 120, L.kaggleSQL)] },
      { title: 'Session 2 · More SQL', tasks: [doIt('Kaggle Learn: Intro to SQL, lessons 4–6 (GROUP BY, ORDER BY, JOIN)', 120, L.kaggleSQL)] },
      { title: 'Session 3 · Storytelling with data', tasks: [read('Storytelling with Data (Cole Nussbaumer Knaflic): the chapters on context, choosing a visual, decluttering and focusing attention', 120, book('Storytelling with Data Knaflic'))] },
      { title: 'Session 4 · Analysis', tasks: [doIt('Pick a question and dataset (work data, or Kaggle Datasets). Pull and summarise it with SQL, Pandas or an Excel PivotTable.', 120, L.kaggleData, 'Prefer no code? Use Excel PivotTables, or Kaggle\'s Pandas course as an optional extra.')] },
      { title: 'Session 5 · One page', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'One-page data story',
      steps: [
        'Write the business question and who will act on the answer.',
        'Show your query or pivot logic (an appendix is fine).',
        'Make ONE chart that answers the question. Remove the gridlines and legend clutter, and title it with the finding (not "Sales by region").',
        'Add 3 bullets: what it shows, why it matters, what to do.',
      ],
      output: 'Upload the 1-page analysis.',
    },
    discuss: 'Share your chart. Can the group state your finding in 5 seconds without your explanation?',
    check: ['What does GROUP BY do?', 'What is a JOIN?', 'Why title a chart with the finding?'],
    terms: [
      { term: 'SQL', def: 'Structured Query Language: the standard language for querying databases.' },
      { term: 'JOIN', def: 'Combining rows from two tables using a shared key.' },
      { term: 'PivotTable', def: 'An Excel tool for summarising data by groups without formulas.' },
      { term: 'Declutter', def: 'Removing chart elements that do not help the reader understand the point.' },
    ],
    cards: [
      { front: 'Basic SQL order', back: 'SELECT … FROM … WHERE … GROUP BY … ORDER BY' },
      { front: 'Knaflic: chart title rule', back: 'State the takeaway in the title, e.g. "North region drove 70% of growth"' },
    ],
  },
  {
    week: 32,
    brief: {
      watch: 'HubSpot Academy: Inbound Sales certification (free)',
      read: 'The Challenger Sale; SPIN Selling',
      do: 'Shadow 2 sales calls or role-play; write a discovery script',
      deliverable: 'A sales playbook for one offer',
    },
    why:
      'Everyone sells: ideas to bosses, budgets to finance, products to customers. Modern B2B selling is about diagnosing problems and teaching customers something new, not pushing features. These skills make you more persuasive in every role.',
    objectives: [
      'Run a discovery conversation with SPIN questions',
      'Explain the Challenger approach: teach, tailor, take control',
      'Qualify opportunities and manage a pipeline',
      'Write a practical sales playbook',
    ],
    sessions: [
      { title: 'Session 1 · Inbound sales', tasks: [watch('HubSpot Academy: Inbound Sales certification, the first half (free)', 120, L.hubspot)] },
      { title: 'Session 2 · Finish and certify', tasks: [watch('HubSpot Inbound Sales: the second half, then take the exam', 120, L.hubspot)] },
      { title: 'Session 3 · Challenger and SPIN', tasks: [read('The Challenger Sale (Dixon & Adamson): the chapters on the five seller profiles and teaching for differentiation', 70, book('The Challenger Sale Dixon Adamson')), read('SPIN Selling (Neil Rackham): the chapters on the four question types', 50, book('SPIN Selling Rackham'))] },
      { title: 'Session 4 · Observe', tasks: [doIt('Shadow 2 sales or customer calls at work, or role-play a discovery call with your study group', 120)] },
      { title: 'Session 5 · Playbook', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'Sales playbook',
      steps: [
        'Ideal customer profile: the company type, the role you sell to and the trigger events that create need.',
        'Discovery script: 3 Situation, 3 Problem, 3 Implication and 2 Need-payoff questions.',
        'A "commercial teaching" insight: one thing customers do not know that reframes their problem.',
        'Qualification checklist (budget, authority, need, timing) and the pipeline stages with exit criteria.',
        'The top 3 objections and your responses.',
      ],
      output: 'Upload the playbook.',
    },
    discuss: 'Describe the best salesperson who ever sold to you. What did they do differently?',
    check: ['What do the letters in SPIN stand for?', 'What are the three Challenger behaviours?', 'What is BANT?'],
    terms: [
      { term: 'Discovery', def: 'The early sales conversation that uncovers the customer\'s situation and problems.' },
      { term: 'Pipeline', def: 'All open sales opportunities, organised by stage.' },
      { term: 'Qualification', def: 'Deciding whether an opportunity is worth pursuing (e.g. BANT: budget, authority, need, timing).' },
      { term: 'Commercial teaching', def: 'Challenger: leading with an insight that reframes how the customer sees their business.' },
    ],
    cards: [
      { front: 'SPIN', back: 'Situation, Problem, Implication, Need-payoff questions' },
      { front: 'Challenger behaviours', back: 'Teach, tailor, take control' },
      { front: 'BANT', back: 'Budget, Authority, Need, Timing' },
    ],
  },
  {
    week: 33,
    brief: {
      watch: 'Michigan Successful Negotiation (Coursera)',
      read: 'Getting to Yes (Fisher & Ury); Influence (Cialdini)',
      do: '2 role plays plus 1 real negotiation',
      deliverable: 'Prep sheets plus a debrief',
    },
    why:
      'Negotiation shows up everywhere: salaries, suppliers, partnerships, even deadlines with colleagues. Preparation and a few principles (interests over positions, knowing your walk-away) consistently produce better outcomes for both sides.',
    objectives: [
      'Prepare with BATNA, reservation price and target',
      'Negotiate on interests, not positions',
      'Create value with options before claiming it',
      'Use and recognise the six principles of influence ethically',
    ],
    sessions: [
      { title: 'Session 1 · Prepare', tasks: [watch('Coursera: Successful Negotiation (Michigan, George Siedel): modules 1–2 "Welcome" and "Prepare"', 120, L.cNegotiation)] },
      { title: 'Session 2 · Negotiate and close', tasks: [watch('Successful Negotiation: modules 3–4 "Negotiate" and "Close"', 120, L.cNegotiation)] },
      { title: 'Session 3 · Principles', tasks: [read('Getting to Yes (Fisher & Ury): the whole book is short; focus on the four principles and BATNA', 90, book('Getting to Yes Fisher Ury')), read('Influence (Robert Cialdini): skim the chapters on the principles', 30, book('Influence Cialdini'))] },
      { title: 'Session 4 · Practise', tasks: [watch('Successful Negotiation: module 6, the practice negotiations', 60, L.cNegotiation), doIt('Run 2 role plays with your study group (e.g. a salary negotiation and a supplier contract)', 60)] },
      { title: 'Session 5 · Real negotiation', tasks: [doIt('Prepare and run one real negotiation (a rate, a budget, a bill, a deadline), then complete the debrief below', 120)] },
    ],
    exercise: {
      title: 'Negotiation prep sheet and debrief',
      steps: [
        'Before: your interests, their likely interests, your BATNA, your reservation price, your target and your opening.',
        'List 3 options that could create value for both sides.',
        'After: the outcome against your target and reservation price. What worked? What would you change?',
        'Which influence principles did you see used (by either side)?',
      ],
      output: 'Upload the prep sheets plus debrief.',
    },
    discuss: 'Share your real negotiation result. Did knowing your BATNA change how you behaved?',
    check: ['What is a BATNA?', 'What is the ZOPA?', 'Name Cialdini\'s principles of influence.', 'Positions vs interests: give an example.'],
    terms: [
      { term: 'BATNA', def: 'Best Alternative To a Negotiated Agreement: what you do if there is no deal.' },
      { term: 'Reservation price', def: 'Your walk-away point.' },
      { term: 'ZOPA', def: 'Zone of possible agreement: the overlap between both sides\' reservation prices.' },
      { term: 'Anchoring', def: 'The first number on the table strongly influences the final outcome.' },
    ],
    cards: [
      { front: 'Getting to Yes: four principles', back: 'Separate people from the problem; focus on interests not positions; invent options for mutual gain; use objective criteria' },
      { front: 'BATNA', back: 'Best Alternative To a Negotiated Agreement' },
      { front: 'Cialdini\'s principles', back: 'Reciprocity, commitment/consistency, social proof, authority, liking, scarcity (plus unity)' },
    ],
  },
  {
    week: 34,
    brief: {
      watch: 'YC Startup School (free)',
      read: 'The Mom Test (Fitzpatrick); Paul Graham, "Do Things That Don\'t Scale"',
      do: '10 customer interviews on one problem',
      deliverable: 'An idea brief',
    },
    why:
      'This keeps your startup option open. The number one reason startups fail is building something nobody wants. Learning to talk to customers without fooling yourself is the core entrepreneurial skill, and it is just as useful for launching anything inside a company.',
    objectives: [
      'Run customer interviews that produce real evidence (not compliments)',
      'Spot good startup problems and test them cheaply',
      'Explain product-market fit',
      'Write a concise idea brief',
    ],
    sessions: [
      { title: 'Session 1 · Startup School', tasks: [watch('YC Startup School: the first lessons on ideas and talking to users (free account)', 120, L.ycSchool)] },
      { title: 'Session 2 · The Mom Test', tasks: [read('The Mom Test (Rob Fitzpatrick): the whole book is short; read it all', 120, book('The Mom Test Fitzpatrick'))] },
      { title: 'Session 3 · Essays and prep', tasks: [read('Paul Graham, "Do Things That Don\'t Scale"', 30, L.pgScale), read('Browse the YC Library on product-market fit', 30, L.ycLibrary), doIt('Pick a problem you have noticed; write 8 Mom Test interview questions and list 15 people to ask', 60)] },
      { title: 'Session 4 · Interviews', tasks: [doIt('Run 5 interviews (20 min each, plus notes)', 120)] },
      { title: 'Session 5 · Interviews and brief', tasks: [doIt('Run 5 more interviews', 80), doIt('Write the idea brief (below)', 40)] },
    ],
    exercise: {
      title: 'Idea brief',
      steps: [
        'The problem, in the customer\'s words (quote them).',
        'Evidence: how many of the 10 have the problem, how they solve it today and what they spend (time or money).',
        'The riskiest assumption still untested.',
        'Next test: the cheapest experiment to test it in 2 weeks.',
      ],
      output: 'Upload the 1-page brief.',
    },
    discuss: 'What is the most surprising thing a customer told you? Did it kill or strengthen the idea?',
    check: ['What are the Mom Test\'s three rules?', 'Why are compliments useless data?', 'What does "do things that don\'t scale" mean in practice?'],
    terms: [
      { term: 'Product-market fit', def: 'When a product clearly satisfies strong demand in a market; customers pull it from you.' },
      { term: 'Customer discovery', def: 'Systematically interviewing customers to validate a problem before building a solution.' },
      { term: 'Riskiest assumption', def: 'The belief that would kill the idea if wrong; test it first.' },
    ],
    cards: [
      { front: 'Mom Test rules', back: 'Talk about their life, not your idea; ask about specifics in the past; talk less, listen more' },
      { front: '"Do things that don\'t scale" (Paul Graham)', back: 'Early on, recruit users manually and delight them personally; scale comes later' },
    ],
  },
  {
    week: 35,
    brief: {
      watch: 'Damodaran Valuation online sessions 20 and 25; YC Library on fundraising',
      read: 'Venture Deals (Feld & Mendelson)',
      do: 'LTV / CAC / payback model',
      deliverable: 'A unit-economics model',
    },
    why:
      'Growth only creates value if each customer is profitable over time. Unit economics tells you whether to step on the accelerator, and venture terms decide who owns what. Both matter whether you run a business unit or start a company.',
    objectives: [
      'Calculate CAC, LTV, LTV/CAC and payback period',
      'Explain pre-money, post-money, dilution and the option pool',
      'Read the key terms of a term sheet (valuation, liquidation preference)',
      'Value a young or private company in broad terms',
    ],
    sessions: [
      { title: 'Session 1 · Venture Deals', tasks: [read('Venture Deals (Brad Feld & Jason Mendelson): the chapters on the players, economic terms and control terms', 120, book('Venture Deals Feld Mendelson'))] },
      { title: 'Session 2 · Valuing young companies', tasks: [watch('Damodaran, Valuation online: session 20 "Private Company Valuation"', 20, L.dVal), read('Venture Deals: chapters on the term sheet and negotiation', 60), read('YC Library: articles on fundraising and SAFEs', 40, L.ycLibrary)] },
      { title: 'Session 3 · Unit economics', tasks: [read('Search and read a recent explainer on SaaS unit economics (LTV, CAC, payback)', 40, web('SaaS unit economics LTV CAC payback explained')), doIt('Start the model (below)', 80)] },
      { title: 'Session 4 · Cap table', tasks: [doIt('Build a simple cap table: founders → seed → Series A, with an option pool', 120)] },
      { title: 'Session 5 · Finish', tasks: [doIt('Finish the model, add sensitivities, and write 5 conclusions', 100), watch('Damodaran, Valuation online: session 25 "Closing Thoughts"', 20, L.dVal)] },
    ],
    exercise: {
      title: 'Unit economics plus cap table',
      steps: [
        'CAC = sales and marketing spend ÷ new customers. Use real or estimated numbers for your company or your week-34 idea.',
        'LTV = (average revenue per customer × gross margin) ÷ churn rate.',
        'Calculate LTV/CAC and the CAC payback in months. Compare with the common rules of thumb (LTV/CAC above 3; payback under 12–18 months), and note they vary by business.',
        'Cap table: model ownership after a seed round and a Series A, with a 10% option pool.',
        'Write 5 conclusions: is growth worth funding, and what is the most important lever?',
      ],
      output: 'Upload the model.',
    },
    discuss: 'Pick a well-known loss-making growth company. Do its unit economics justify the losses?',
    check: ['Formula for CAC?', 'Formula for LTV using churn?', 'Pre-money vs post-money?', 'What is a 1× liquidation preference?'],
    terms: [
      { term: 'CAC', def: 'Customer acquisition cost: what it costs to win one new customer.' },
      { term: 'Churn', def: 'The share of customers lost in a period.' },
      { term: 'Pre-money valuation', def: 'Company value before new investment; post-money = pre-money + new money.' },
      { term: 'Dilution', def: 'The reduction in existing owners\' percentage when new shares are issued.' },
      { term: 'Liquidation preference', def: 'Investors get their money back (e.g. 1×) before others in a sale.' },
    ],
    cards: [
      { front: 'LTV (simple)', back: '(ARPU × gross margin) ÷ churn rate' },
      { front: 'LTV/CAC rule of thumb', back: 'Above 3 is healthy (it varies by business)' },
      { front: 'Post-money valuation', back: 'Pre-money valuation + new investment' },
      { front: 'Investor ownership after a round', back: 'Investment ÷ post-money valuation' },
    ],
  },
  {
    week: 36,
    brief: {
      watch: 'None: review week',
      read: 'Reread your notes from weeks 25–35',
      do: 'Choose your capstone route (career or startup)',
      deliverable: 'A 1-page capstone proposal',
    },
    why:
      'Time to consolidate the electives and choose your capstone, the 12-week project where you apply everything to one real opportunity.',
    objectives: ['Consolidate the elective skills', 'Choose a capstone opportunity with real stakes', 'Write a tight proposal'],
    sessions: [
      { title: 'Session 1 · Catch up', tasks: [doIt('Finish any outstanding elective deliverables', 120)] },
      { title: 'Session 2 · Review', tasks: [doIt('Clear your flashcards; reread your takeaways from weeks 25–35', 120)] },
      {
        title: 'Session 3 · Generate options',
        tasks: [doIt('List 5 capstone candidates: growth or AI initiatives at work (career route) or new venture ideas (startup route), including your week-34 idea', 60), doIt('Score each on impact, access to data and customers, and your excitement', 60)],
      },
      { title: 'Session 4 · Validate', tasks: [doIt('Talk to 2–3 people (your manager, potential customers) about your top choice', 120)] },
      { title: 'Session 5 · Proposal', tasks: [doIt('Complete the exercise below', 120)] },
    ],
    exercise: {
      title: 'Capstone proposal',
      steps: [
        'Route: career (an initiative inside your organisation) or startup (a new venture).',
        'The opportunity in one sentence, and why now.',
        'Who the customer or stakeholder is, and how you will reach them.',
        'What success looks like by week 48 (e.g. a funded pilot, an investor-ready deck, a board approval).',
        'The 3 biggest unknowns you must resolve.',
      ],
      output: 'Upload the 1-page proposal. Share it with your study group for a sense check.',
    },
    discuss: 'Post your capstone in one sentence. What would make it a "hell yes" project for you?',
    check: ['Can you explain your capstone, and why it matters, in 30 seconds?'],
    terms: [],
    cards: [],
  },
];
