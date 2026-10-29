import { L, book, web, yt } from './links';
import { doIt, read, watch, type Lesson } from './types';

// Weeks 13–24: strategy, marketing, operations, leadership, ethics, integration, final.
export const core2: Lesson[] = [
  {
    week: 13,
    brief: {
      watch: 'Darden Foundations of Business Strategy modules 1–2',
      read: 'Porter, "The Five Competitive Forces That Shape Strategy" (HBR)',
      do: 'HBS case: Cola Wars Continue: Coke and Pepsi',
      deliverable: 'A five forces analysis',
    },
    why:
      'Strategy starts with understanding the arena you compete in. Porter\'s five forces explain why some industries are structurally profitable and others are not, and that matters more to a company\'s results than most management decisions.',
    objectives: [
      'Explain what strategy is (and is not)',
      'Apply Porter\'s five forces to assess industry attractiveness',
      'Link industry structure to profitability',
      'Analyse a classic case and defend a view',
    ],
    sessions: [
      {
        title: 'Session 1 · What is strategy?',
        tasks: [
          watch('Coursera: Foundations of Business Strategy (Darden, Michael Lenox): module 1 "Introduction to Strategic Analysis"', 110, L.cStrategy),
          doIt('Write a one-sentence definition of strategy in your own words', 10),
        ],
      },
      {
        title: 'Session 2 · Industry structure',
        tasks: [watch('Darden Strategy: module 2 "Analyzing Industry Structure"', 110, L.cStrategy), watch('Michael Porter explains the five forces (HBR video, about 13 min)', 15, yt('Michael Porter five competitive forces that shape strategy HBR'))],
      },
      {
        title: 'Session 3 · The classic article',
        tasks: [
          read('Porter, "The Five Competitive Forces That Shape Strategy", HBR 2008', 60, L.hbrFiveForces, 'HBR gives a few free articles a month; a library login often gives full access.'),
          read('OpenStax Principles of Management: the strategy chapter (free), for a simpler recap', 40, L.osMgmt),
        ],
      },
      {
        title: 'Session 4 · Cola Wars',
        tasks: [doIt('Buy and read the HBS case "Cola Wars Continue: Coke and Pepsi" (about £9)', 90, L.hbsCases), doIt('Note why concentrate producers earn far higher margins than bottlers', 30)],
      },
      {
        title: 'Session 5 · Analysis',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Five forces: soft drinks and your own industry',
      steps: [
        'For the soft-drink concentrate business, rate each force (rivalry, threat of entry, buyer power, supplier power, substitutes) as High / Medium / Low with evidence from the case.',
        'Repeat for the bottling business. Explain the profit gap in 3 sentences.',
        'Now do the same five forces for your own industry.',
        'Conclude: is your industry attractive? Which force is most important to watch?',
      ],
      output: 'Upload a 2-page five forces analysis (both industries).',
    },
    discuss: 'Which force is changing fastest in your industry right now, and why?',
    check: ['Name the five forces.', 'Why is "rivalry" not the only force that matters?', 'How do substitutes differ from competitors?', 'Why did concentrate producers out-earn bottlers?'],
    terms: [
      { term: 'Strategy', def: 'An integrated set of choices about where to compete and how to win, given limited resources.' },
      { term: 'Five forces', def: 'Rivalry, threat of new entrants, buyer power, supplier power and threat of substitutes.' },
      { term: 'Industry attractiveness', def: 'How much profit the average firm in an industry can sustainably earn.' },
      { term: 'Substitute', def: 'A different product that meets the same need (e.g. video calls substitute for business travel).' },
    ],
    cards: [
      { front: 'Porter\'s five forces', back: 'Rivalry, new entrants, buyer power, supplier power, substitutes' },
      { front: 'Strategy (one line)', back: 'Integrated choices about where to play and how to win' },
      { front: 'High buyer power example', back: 'Supermarkets buying from small food producers: few buyers, many sellers' },
    ],
  },
  {
    week: 14,
    brief: {
      watch: 'Darden Foundations of Business Strategy modules 3–4',
      read: 'Playing to Win (Lafley & Martin); Porter, "What Is Strategy?"',
      do: 'HBS case: Zara: Fast Fashion',
      deliverable: 'A strategy cascade for your company',
    },
    why:
      'Industry matters, but firms in the same industry earn very different returns. This week is about competitive advantage, cost leadership or differentiation, and the capabilities that make it hard to copy, plus a practical framework for making strategic choices.',
    objectives: [
      'Explain cost leadership vs differentiation',
      'Identify resources and capabilities that create lasting advantage (VRIO)',
      'Apply the Playing to Win cascade of five choices',
      'Explain how Zara\'s operating model creates advantage',
    ],
    sessions: [
      {
        title: 'Session 1 · Capabilities',
        tasks: [watch('Darden Strategy: module 3 "Analyzing Firm Capabilities"', 60, L.cStrategy), read('Porter, "What Is Strategy?", HBR 1996', 60, L.hbrWhatIsStrategy)],
      },
      {
        title: 'Session 2 · Competitive position',
        tasks: [watch('Darden Strategy: module 4 "Determining Competitive Position"', 120, L.cStrategy)],
      },
      {
        title: 'Session 3 · Playing to Win',
        tasks: [read('Playing to Win (A.G. Lafley & Roger Martin): chapters on the strategy choice cascade, where to play and how to win', 120, book('Playing to Win Lafley Martin'))],
      },
      {
        title: 'Session 4 · Zara',
        tasks: [doIt('Buy and read the HBS case "Zara: Fast Fashion" (about £9)', 90, L.hbsCases), doIt('Map Zara\'s activity system: design, sourcing, production, logistics, stores, and how they fit together', 30)],
      },
      {
        title: 'Session 5 · Your cascade',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Strategy cascade for your company',
      steps: [
        'Winning aspiration: what does winning look like, in one sentence?',
        'Where to play: which customers, geographies, channels and products (and which not)?',
        'How to win: cost or differentiation, and why customers would choose you.',
        'Capabilities: the 3–5 activities you must be excellent at. Test each with VRIO (valuable, rare, hard to imitate, organised to capture).',
        'Management systems: what measures and processes reinforce the choices?',
        'Finish with one paragraph on the biggest inconsistency you see in your company\'s current strategy.',
      ],
      output: 'Upload a 1–2 page cascade.',
    },
    discuss: 'Can a company be both lowest-cost and most differentiated? Name one that tries, and say whether it works.',
    check: ['What are Porter\'s generic strategies?', 'What does VRIO stand for?', 'What are the five choices in Playing to Win?', 'Why is Zara hard to copy even though everyone knows how it works?'],
    terms: [
      { term: 'Competitive advantage', def: 'Why a firm earns more than rivals: lower costs, or a premium price for something customers value more.' },
      { term: 'Cost leadership', def: 'Winning by having the lowest costs in the industry.' },
      { term: 'Differentiation', def: 'Winning by offering something customers value and will pay more for.' },
      { term: 'VRIO', def: 'A test for advantage-creating resources: Valuable, Rare, Inimitable, Organised.' },
      { term: 'Activity system', def: 'How a company\'s activities fit and reinforce each other, which makes the whole hard to copy.' },
    ],
    cards: [
      { front: 'Playing to Win: the five choices', back: 'Winning aspiration, where to play, how to win, capabilities, management systems' },
      { front: 'VRIO', back: 'Valuable, Rare, Inimitable, Organised to capture value' },
      { front: 'Porter: operational effectiveness vs strategy', back: 'Doing the same things better is not strategy; strategy is choosing to do different things, or things differently' },
    ],
  },
  {
    week: 15,
    brief: {
      watch: 'LinkedIn Learning: Strategic Thinking (Dorie Clark)',
      read: 'Good Strategy Bad Strategy (Rumelt); Breaking Bad Habits (Vermeulen, LBS)',
      do: 'Write your company\'s strategy kernel',
      deliverable: 'A 2-page strategy memo',
    },
    why:
      'Most "strategies" are goals or slogans. Rumelt shows that good strategy has a kernel: a diagnosis, a guiding policy and coherent actions. Writing one clearly is a career-defining skill and the bridge from analysis to action.',
    objectives: [
      'Spot the hallmarks of bad strategy (fluff, goals posing as strategy, ignoring the challenge)',
      'Write a strategy kernel: diagnosis, guiding policy, coherent actions',
      'Question inherited practices that no longer make sense',
      'Build a habit of strategic thinking in your day-to-day work',
    ],
    sessions: [
      {
        title: 'Session 1 · Good and bad strategy',
        tasks: [read('Good Strategy Bad Strategy (Richard Rumelt): Part I, especially "Bad Strategy" and "The Kernel of Good Strategy"', 120, book('Good Strategy Bad Strategy Rumelt'))],
      },
      {
        title: 'Session 2 · Sources of power',
        tasks: [read('Good Strategy Bad Strategy: selected Part II chapters (leverage, proximate objectives, focus)', 90), watch('Richard Rumelt talk on good and bad strategy', 30, yt('Richard Rumelt good strategy bad strategy talk'))],
      },
      {
        title: 'Session 3 · Strategic thinking habits',
        tasks: [watch('LinkedIn Learning: Strategic Thinking (Dorie Clark), about 1 hour', 60, L.liStrategic), doIt('Block a recurring 1-hour "thinking time" slot in your calendar', 10), read('LBS Think: browse two strategy articles', 50, L.lbsThink)],
      },
      {
        title: 'Session 4 · Breaking bad habits',
        tasks: [read('Breaking Bad Habits (Freek Vermeulen, LBS): the opening chapters on why firms keep doing things that no longer make sense', 90, book('Breaking Bad Habits Vermeulen')), doIt('List 3 "bad habits" in your organisation', 30)],
      },
      {
        title: 'Session 5 · Strategy memo',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Strategy kernel memo',
      steps: [
        'Diagnosis (half a page): what is the critical challenge your company or team faces? Name it simply; use evidence from weeks 13–14.',
        'Guiding policy (a few sentences): the overall approach to overcoming the challenge, and what it rules out.',
        'Coherent actions (3–5): specific, coordinated steps that reinforce each other, with owners and timing.',
        'Test it against Rumelt\'s bad-strategy hallmarks: is any part fluff, or a goal pretending to be a strategy?',
      ],
      output: 'Upload the 2-page memo. This is a strong piece to share with your study group for feedback.',
    },
    discuss: 'Paste a line from a real corporate strategy statement. Is it good strategy or bad strategy, by Rumelt\'s test?',
    check: ['What are the three parts of Rumelt\'s kernel?', 'Why is "grow revenue 20%" not a strategy?', 'What is a proximate objective?'],
    terms: [
      { term: 'Diagnosis', def: 'A clear explanation of the critical challenge you face.' },
      { term: 'Guiding policy', def: 'The overall approach chosen to deal with the challenge.' },
      { term: 'Coherent actions', def: 'Coordinated steps that carry out the guiding policy and reinforce each other.' },
      { term: 'Proximate objective', def: 'A near-term goal close enough to be achievable and clear enough to act on.' },
    ],
    cards: [
      { front: 'Rumelt\'s kernel of good strategy', back: 'Diagnosis, guiding policy, coherent actions' },
      { front: 'Hallmarks of bad strategy', back: 'Fluff, failure to face the challenge, goals mistaken for strategy, bad strategic objectives' },
    ],
  },
  {
    week: 16,
    brief: {
      watch: 'Wharton Introduction to Marketing modules 1–2',
      read: 'OpenStax Principles of Marketing chapters 1, 3 and 5',
      do: 'Analyse a real brand\'s segmentation and positioning',
      deliverable: 'A segmentation plus positioning map',
    },
    why:
      'Marketing is not advertising. It is deciding which customers to serve, what they value and how to be the obvious choice for them. Segmentation and positioning are the strategic core that everything else (product, price, promotion) follows from.',
    objectives: [
      'Explain customer value and customer centricity',
      'Segment a market, choose targets and write a positioning statement',
      'Build a perceptual (positioning) map',
      'Critique a real brand\'s positioning',
    ],
    sessions: [
      {
        title: 'Session 1 · Branding and positioning',
        tasks: [watch('Coursera: Introduction to Marketing (Wharton): module 1 "Branding: Marketing Strategy and Brand Positioning"', 120, L.cMarketing)],
      },
      {
        title: 'Session 2 · Customer centricity',
        tasks: [watch('Wharton Marketing: module 2 "Customer Centricity" (Peter Fader)', 100, L.cMarketing), doIt('Note: which customers are most valuable to your company, and how does it know?', 20)],
      },
      {
        title: 'Session 3 · Read',
        tasks: [read('OpenStax Principles of Marketing (free): chapter 1 "Marketing and Customer Value" and chapter 5 "Market Segmentation, Targeting, and Positioning"', 120, L.osMarketing)],
      },
      {
        title: 'Session 4 · Consumer behaviour',
        tasks: [read('OpenStax Principles of Marketing: chapter 3 "Consumer Markets and Purchasing Behavior"', 60, L.osMarketing), doIt('Pick a brand to analyse (e.g. Dove, Monzo, Gymshark, Oatly) and gather 5 of its ads or webpages', 60)],
      },
      {
        title: 'Session 5 · Map it',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Segmentation and positioning teardown',
      steps: [
        'List the segments in the brand\'s market (demographic, needs-based, behavioural). Which does the brand target?',
        'Write its implied positioning statement: "For [target] who [need], [brand] is the [category] that [benefit] because [reason to believe]."',
        'Draw a perceptual map: two axes customers care about (e.g. price and natural vs clinical); place the brand and 5 competitors.',
        'Find the white space. Write one recommendation.',
      ],
      output: 'Upload the map plus a 1-page teardown.',
    },
    discuss: 'Which brand has the clearest positioning you know? Which has the muddiest?',
    check: ['Segmentation vs targeting vs positioning: what is the difference?', 'What is customer lifetime value?', 'Write the positioning statement template from memory.'],
    terms: [
      { term: 'Segmentation', def: 'Dividing a market into groups with similar needs or behaviour.' },
      { term: 'Targeting', def: 'Choosing which segments to serve.' },
      { term: 'Positioning', def: 'The distinct place you want to occupy in target customers\' minds.' },
      { term: 'Customer centricity', def: 'Organising around the most valuable customers rather than around products.' },
    ],
    cards: [
      { front: 'STP', back: 'Segmentation, Targeting, Positioning' },
      { front: 'Positioning statement template', back: 'For [target] who [need], [brand] is the [category] that [benefit] because [reason to believe]' },
      { front: 'Customer centricity (Fader)', back: 'Not all customers are equal: identify and focus on the most valuable ones' },
    ],
  },
  {
    week: 17,
    brief: {
      watch: 'Wharton Introduction to Marketing modules 3–4',
      read: 'How Brands Grow (Sharp); OpenStax Marketing chapter 12',
      do: 'Pricing plus go-to-market plan for one product',
      deliverable: 'A 1-page go-to-market plan',
    },
    why:
      'Once you know who you serve, you need to reach them, convince them and price well. This week covers communication, pricing and the evidence-based view of how brands actually grow, which often contradicts marketing folklore.',
    objectives: [
      'Design a communications strategy and choose channels',
      'Set prices using value, cost and competition',
      'Explain mental and physical availability (Sharp)',
      'Write a practical go-to-market plan',
    ],
    sessions: [
      {
        title: 'Session 1 · Go-to-market',
        tasks: [watch('Wharton Marketing: module 3 "Go to Market Strategies: Communications Strategy & Fundamentals of Pricing"', 120, L.cMarketing)],
      },
      {
        title: 'Session 2 · Brand communications',
        tasks: [watch('Wharton Marketing: module 4 "Effective Brand Communications and Repositioning Strategies"', 90, L.cMarketing), read('OpenStax Marketing: chapter 12 "Pricing Products and Services"', 30, L.osMarketing)],
      },
      {
        title: 'Session 3 · How brands grow',
        tasks: [read('How Brands Grow (Byron Sharp): the chapters on penetration, loyalty, mental availability and distinctive assets', 120, book('How Brands Grow Byron Sharp'))],
      },
      {
        title: 'Session 4 · Channels',
        tasks: [read('OpenStax Marketing: chapter 16 "Direct, Online, Social Media, and Mobile Marketing"', 60, L.osMarketing), doIt('Pick the product for your plan and collect its competitor prices', 60)],
      },
      {
        title: 'Session 5 · The plan',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'One-page go-to-market plan',
      steps: [
        'Target customer and the problem you solve (from week 16).',
        'Price: a value-based ceiling, a cost floor and a competitor reference. Choose a price and justify it.',
        'Channels: where target customers already are, plus 2–3 channels with a reason for each.',
        'Message: one core message plus 2 distinctive brand assets (colour, sound, character, phrase).',
        'Metrics: what you will measure in month 1, 3 and 6.',
      ],
      output: 'Upload the 1-page plan.',
    },
    discuss: 'Sharp argues that targeting loyal heavy users is a mistake. Agree or disagree, with an example?',
    check: ['What is value-based pricing?', 'Define mental availability and physical availability.', 'What is "double jeopardy" in brand data?'],
    terms: [
      { term: 'Value-based pricing', def: 'Setting price based on the value customers perceive, not just cost.' },
      { term: 'Mental availability', def: 'How easily a brand comes to mind in buying situations.' },
      { term: 'Physical availability', def: 'How easy a brand is to find and buy.' },
      { term: 'Distinctive brand assets', def: 'Colours, logos, sounds or characters that trigger the brand in memory.' },
    ],
    cards: [
      { front: 'Sharp: how brands grow', back: 'Mainly by increasing penetration (more buyers), via mental and physical availability' },
      { front: 'Double jeopardy', back: 'Smaller brands have fewer buyers AND those buyers are slightly less loyal' },
      { front: 'Three price anchors', back: 'Customer value (ceiling), cost (floor), competitor prices (reference)' },
    ],
  },
  {
    week: 18,
    brief: {
      watch: 'Wharton Introduction to Operations Management modules 1–3',
      read: 'The Goal (Goldratt)',
      do: 'HBS case: Toyota Motor Manufacturing, U.S.A.',
      deliverable: 'A process map with the bottleneck marked',
    },
    why:
      'Operations is how value actually gets delivered, and where most costs and customer frustrations live. Learn to see any process (a factory, a hospital, a sales pipeline) as flows with capacity, inventory and a bottleneck that limits everything.',
    objectives: [
      'Map a process and calculate capacity, utilisation and flow rate',
      'Find the bottleneck and explain why it sets the pace of the system',
      'Use Little\'s Law: inventory = throughput × flow time',
      'Explain the Theory of Constraints',
    ],
    sessions: [
      {
        title: 'Session 1 · Process analysis',
        tasks: [watch('Coursera: Introduction to Operations Management (Wharton, Christian Terwiesch): module 1 "Process Analysis"', 120, L.cOps)],
      },
      {
        title: 'Session 2 · Flow and lean',
        tasks: [watch('Wharton Operations: module 2 "Flow Management and Lean Operations" (first half)', 120, L.cOps)],
      },
      {
        title: 'Session 3 · Little\'s Law',
        tasks: [watch('Wharton Operations: finish module 2 plus module 3 "Little\'s Law"', 120, L.cOps)],
      },
      {
        title: 'Session 4 · The Goal',
        tasks: [read('The Goal (Eliyahu Goldratt): a business novel; read the first half, including the "Herbie" hike', 120, book('The Goal Goldratt'))],
      },
      {
        title: 'Session 5 · Toyota',
        tasks: [doIt('Buy and read the HBS case "Toyota Motor Manufacturing, U.S.A., Inc." (about £9)', 60, L.hbsCases), doIt('Complete the exercise below', 60)],
      },
    ],
    exercise: {
      title: 'Process map and bottleneck',
      steps: [
        'Pick a process you know: customer onboarding, order fulfilment, hiring, or month-end close.',
        'Map each step with its owner, processing time and capacity per hour or day.',
        'Find the bottleneck (lowest capacity). Calculate the system\'s maximum throughput.',
        'Use Little\'s Law to estimate how long a new item waits, given the current work in progress.',
        'Propose 2 improvements that target the bottleneck, and say what would happen if you improved a non-bottleneck instead.',
      ],
      output: 'Upload the map (a drawing is fine) plus calculations.',
    },
    discuss: 'Where is the bottleneck in your team\'s work right now? How do you know?',
    check: ['State Little\'s Law.', 'Why does improving a non-bottleneck step not increase output?', 'What is utilisation?', 'What problem was Toyota\'s seat supply causing?'],
    terms: [
      { term: 'Bottleneck', def: 'The step with the lowest capacity; it limits the whole system\'s output.' },
      { term: 'Throughput (flow rate)', def: 'How many units pass through the process per unit of time.' },
      { term: 'Little\'s Law', def: 'Inventory = throughput × flow time.' },
      { term: 'Theory of Constraints', def: 'Identify the constraint, exploit it, subordinate everything else to it, elevate it, repeat.' },
    ],
    cards: [
      { front: 'Little\'s Law', back: 'Inventory (I) = Throughput (R) × Flow time (T)' },
      { front: 'Theory of Constraints: five focusing steps', back: 'Identify, exploit, subordinate, elevate, repeat' },
      { front: 'Utilisation', back: 'Actual output ÷ capacity' },
    ],
  },
  {
    week: 19,
    brief: {
      watch: 'Wharton Operations module 4 "Quality"',
      read: 'The Goal (finish); The Toyota Way (selected)',
      do: 'Map and improve one real process in your work',
      deliverable: 'An improvement plan',
    },
    why:
      'Lean and quality thinking (from Toyota) changed manufacturing and now runs software, healthcare and services. The goal is fewer defects, less waste and faster flow, which means happier customers at lower cost.',
    objectives: [
      'Explain the main types of waste in lean',
      'Use basic quality tools: defect rates, root-cause analysis (5 Whys)',
      'Explain jidoka, just-in-time and continuous improvement',
      'Write a practical improvement plan',
    ],
    sessions: [
      {
        title: 'Session 1 · Quality',
        tasks: [watch('Wharton Operations: module 4 "Quality"', 120, L.cOps)],
      },
      {
        title: 'Session 2 · Finish The Goal',
        tasks: [read('The Goal: finish the book; note the five focusing steps as they emerge', 120)],
      },
      {
        title: 'Session 3 · The Toyota Way',
        tasks: [read('The Toyota Way (Jeffrey Liker): the chapters on the 14 principles, especially flow, pull and "stop to fix problems"', 120, book('The Toyota Way Liker'))],
      },
      {
        title: 'Session 4 · Observe',
        tasks: [doIt('Spend an hour observing a real process at work. Count handoffs, waiting time and rework.', 60), doIt('Run "5 Whys" on one recurring problem', 60)],
      },
      {
        title: 'Session 5 · The plan',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Improvement plan',
      steps: [
        'Current state: the process map with times, handoffs and the error or rework rate.',
        'Identify waste using the lean categories (waiting, overproduction, rework, motion, transport, inventory, over-processing).',
        'Root cause: a 5 Whys on the biggest problem.',
        'Future state: the redesigned process and the expected gain in time or errors.',
        'A 30-day pilot plan: owner, metric and review date.',
      ],
      output: 'Upload a 2-page plan. Consider proposing it at work.',
    },
    discuss: 'Share your 5 Whys. Did you reach a real root cause or just a symptom?',
    check: ['Name 4 of the 7 lean wastes.', 'What is jidoka?', 'What is the difference between push and pull systems?'],
    terms: [
      { term: 'Lean', def: 'A system for delivering value with minimal waste, built on flow and continuous improvement.' },
      { term: 'Just-in-time (JIT)', def: 'Producing only what is needed, when it is needed.' },
      { term: 'Jidoka', def: 'Building in quality by stopping the line when a problem appears.' },
      { term: 'Kaizen', def: 'Continuous, incremental improvement by everyone.' },
      { term: '5 Whys', def: 'Asking "why?" repeatedly to move from symptom to root cause.' },
    ],
    cards: [
      { front: 'Seven lean wastes', back: 'Transport, inventory, motion, waiting, overproduction, over-processing, defects (TIMWOOD)' },
      { front: 'Toyota Production System pillars', back: 'Just-in-time and jidoka' },
      { front: 'Push vs pull', back: 'Push makes to forecast; pull makes in response to actual demand' },
    ],
  },
  {
    week: 20,
    brief: {
      watch: 'Michigan Influencing People (Coursera)',
      read: 'Act Like a Leader, Think Like a Leader (Ibarra, LBS)',
      do: 'HBS case: Heidi Roizen',
      deliverable: 'Your network map',
    },
    why:
      'Careers are built on people: getting things done without formal authority, building networks and growing into bigger roles. LBS professor Herminia Ibarra shows that you change how you think by first changing what you do and who you know.',
    objectives: [
      'Map and assess your professional network',
      'Explain sources of power and influence without authority',
      'Apply Ibarra\'s "outsight" principle to your own growth',
      'Analyse how a successful networker builds relationships',
    ],
    sessions: [
      {
        title: 'Session 1 · Power',
        tasks: [watch('Coursera: Influencing People (Michigan, Maxim Sytch): module 1 "Building Your Base of Power"', 120, L.cInfluence)],
      },
      {
        title: 'Session 2 · Influence',
        tasks: [watch('Influencing People: module 2 "Influencing People Without Relying on Formal Authority"', 120, L.cInfluence)],
      },
      {
        title: 'Session 3 · Act like a leader',
        tasks: [read('Act Like a Leader, Think Like a Leader (Herminia Ibarra): the chapters on redefining your job and networking', 120, book('Act Like a Leader Think Like a Leader Ibarra'))],
      },
      {
        title: 'Session 4 · Heidi Roizen',
        tasks: [doIt('Buy and read the HBS case "Heidi Roizen" (about £9)', 60, L.hbsCases), watch('Influencing People: module 3 "Developing High-Quality Relationships"', 60, L.cInfluence)],
      },
      {
        title: 'Session 5 · Map your network',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Network map',
      steps: [
        'List the 20–30 people you rely on or learn from at work and beyond.',
        'Classify each as operational (getting today\'s job done), personal (growth and support) or strategic (future direction, outside your function).',
        'Note how diverse the network is: functions, seniority, organisations.',
        'Identify 3 gaps and 3 specific people to reach out to in the next month, with what you can offer each.',
      ],
      output: 'Upload the map. Keep the names private; initials are fine.',
    },
    discuss: 'What did Heidi Roizen do that most people do not? Which of those habits will you adopt?',
    check: ['What are Ibarra\'s three types of network?', 'Name two sources of power that do not come from your job title.', 'What is "outsight"?'],
    terms: [
      { term: 'Outsight', def: 'Ibarra: insight that comes from new actions and experiences, not introspection.' },
      { term: 'Operational network', def: 'The people you need to get your current job done.' },
      { term: 'Strategic network', def: 'Relationships that help you see the future and position for it.' },
      { term: 'Reciprocity', def: 'People feel obliged to return favours, which is the foundation of influence.' },
    ],
    cards: [
      { front: 'Ibarra\'s three networks', back: 'Operational, personal, strategic' },
      { front: 'Outsight principle', back: 'Act your way into new thinking; do not think your way into new acting' },
    ],
  },
  {
    week: 21,
    brief: {
      watch: 'Michigan Leading Teams (Coursera); Amy Edmondson TEDx',
      read: 'The Five Dysfunctions of a Team (Lencioni)',
      do: 'Analyse your 360° feedback and build a development plan',
      deliverable: 'A memo on your 360° results',
    },
    why:
      'Most work happens in teams, and most team failures are about trust, conflict and accountability, not skill. This week covers designing and running high-performing teams, and you will act on the 360° feedback you collected in week 1.',
    objectives: [
      'Design a team: size, roles, goals, norms',
      'Explain psychological safety and why it drives performance',
      'Diagnose team problems using Lencioni\'s five dysfunctions',
      'Turn feedback into a concrete development plan',
    ],
    sessions: [
      {
        title: 'Session 1 · Designing teams',
        tasks: [watch('Coursera: Leading Teams (Michigan, Maxim Sytch): module 1 "Designing Your Team for Excellence"', 120, L.cTeams)],
      },
      {
        title: 'Session 2 · Structure and dynamics',
        tasks: [watch('Leading Teams: modules 2–3 "Structuring Your Team" and "Managing Team Dynamics"', 120, L.cTeams)],
      },
      {
        title: 'Session 3 · Psychological safety',
        tasks: [watch('Amy Edmondson, "Building a psychologically safe workplace" (TEDx, about 12 min)', 15, yt('Amy Edmondson building a psychologically safe workplace TEDx')), read('The Five Dysfunctions of a Team (Patrick Lencioni): a short fable; read it all', 105, book('Five Dysfunctions of a Team Lencioni'))],
      },
      {
        title: 'Session 4 · Your 360°',
        tasks: [doIt('Gather your week-1 survey answers. Group the comments into themes.', 60), watch('Leading Teams: module 4 (selected lessons on sustainable performance)', 60, L.cTeams)],
      },
      {
        title: 'Session 5 · Development plan',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: '360° memo and development plan',
      steps: [
        'Summarise the themes: 3 strengths to keep, 2 things to start, 2 to stop.',
        'Pick ONE behaviour to change. Define what "better" looks like, observably.',
        'Plan: 3 actions over 8 weeks, who will give you feedback, and when.',
        'Diagnose a team you are in against Lencioni\'s five dysfunctions. Which layer is weakest?',
      ],
      output: 'Upload the memo (keep it private if you prefer).',
    },
    discuss: 'Share one feedback theme you were surprised by, and the one behaviour you will change.',
    check: ['What is psychological safety?', 'List Lencioni\'s five dysfunctions in order.', 'What is the ideal team size range for most work teams?'],
    terms: [
      { term: 'Psychological safety', def: 'A shared belief that it is safe to speak up, ask questions and admit mistakes.' },
      { term: 'Team norms', def: 'Agreed rules about how the team works together.' },
      { term: 'Accountability', def: 'Holding each other to commitments, peer to peer, not just via the boss.' },
    ],
    cards: [
      { front: 'Lencioni\'s five dysfunctions (bottom to top)', back: 'Absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results' },
      { front: 'Psychological safety (Edmondson)', back: 'Belief that the team is safe for interpersonal risk-taking' },
    ],
  },
  {
    week: 22,
    brief: {
      watch: 'Michael Sandel, "Justice" (Harvard), episodes 1–2',
      read: 'Prosperity (Colin Mayer)',
      do: 'Build a stakeholder map for your company',
      deliverable: 'A 1-page purpose statement',
    },
    why:
      'Businesses face real dilemmas: profit vs people, short vs long term, legal vs right. LBS and most leading schools now teach responsibility as core, not optional. This week gives you frameworks to reason about hard choices and to define purpose credibly.',
    objectives: [
      'Apply major ethical frameworks (consequences, duties, virtues) to business dilemmas',
      'Map stakeholders and their interests',
      'Distinguish shareholder primacy from stakeholder and purpose-led views',
      'Write a credible purpose statement',
    ],
    sessions: [
      {
        title: 'Session 1 · Moral reasoning',
        tasks: [watch('Michael Sandel, "Justice: What\'s the Right Thing to Do?" episodes 1–2 (free)', 110, yt('Justice with Michael Sandel episode 1')), doIt('Note which framework you instinctively use', 10)],
      },
      {
        title: 'Session 2 · Purpose',
        tasks: [read('Prosperity (Colin Mayer, Oxford): the chapters on the purpose of the corporation', 120, book('Prosperity Colin Mayer'))],
      },
      {
        title: 'Session 3 · The debate',
        tasks: [
          read('Milton Friedman, "The Social Responsibility of Business Is to Increase Its Profits" (NYT, 1970). Search for the full text.', 30, web('Friedman 1970 social responsibility of business is to increase its profits full text')),
          read('LBS Think: two articles on responsible business', 40, L.lbsThink),
          read('OpenStax Principles of Management: the ethics chapter (free)', 50, L.osMgmt),
        ],
      },
      {
        title: 'Session 4 · Stakeholders',
        tasks: [doIt('Build a stakeholder map: list stakeholders, their interests, their power and how the company affects them', 120)],
      },
      {
        title: 'Session 5 · Purpose statement',
        tasks: [doIt('Complete the exercise below', 120)],
      },
    ],
    exercise: {
      title: 'Purpose statement and a dilemma',
      steps: [
        'Write a purpose statement for your company: who it serves, the problem it solves and what it will not do for profit.',
        'Test it: does it change any real decision? If not, rewrite it.',
        'Describe one real or plausible ethical dilemma the company faces. Analyse it through consequences, duties and virtues.',
        'Make a recommendation and state what you would say to the stakeholder who loses.',
      ],
      output: 'Upload the 1-page statement plus the dilemma analysis.',
    },
    discuss: 'Friedman vs Mayer: which view do you hold, and has this week shifted it?',
    check: ['Name three ethical frameworks.', 'What is a stakeholder?', 'What is the difference between a purpose and a mission statement?'],
    terms: [
      { term: 'Consequentialism', def: 'Judging actions by their outcomes (e.g. utilitarianism).' },
      { term: 'Deontology', def: 'Judging actions by duties and rules, whatever the outcome.' },
      { term: 'Stakeholder', def: 'Anyone affected by or able to affect the company: customers, staff, suppliers, communities, investors.' },
      { term: 'Shareholder primacy', def: 'The view that a company\'s main duty is to maximise shareholder value.' },
    ],
    cards: [
      { front: 'Three ethical lenses', back: 'Consequences (outcomes), duties (rules/rights), virtues (character)' },
      { front: 'Mayer\'s definition of corporate purpose', back: 'To produce profitable solutions to the problems of people and planet, and not to profit from producing problems' },
    ],
  },
  {
    week: 23,
    brief: {
      watch: 'None: integration week',
      read: 'HBS case: Warren E. Buffett, 2005',
      do: 'Use every core discipline on one case',
      deliverable: 'A 3-page board recommendation',
    },
    why:
      'Real business problems do not arrive labelled "finance" or "strategy". This week you use every tool from the core on one rich case, which is exactly what the LBS capstone exams test.',
    objectives: [
      'Integrate accounting, valuation, strategy and leadership on one problem',
      'Structure a recommendation for a board audience',
      'Defend your assumptions under questioning',
    ],
    sessions: [
      {
        title: 'Session 1 · Read the case',
        tasks: [doIt('Buy and read the case "Warren E. Buffett, 2005" (Darden, via HBS Publishing, about £9)', 120, L.hbsCases)],
      },
      {
        title: 'Session 2 · Valuation',
        tasks: [doIt('Value the acquisition target (PacifiCorp) with a DCF and compare with the offer price', 120)],
      },
      {
        title: 'Session 3 · Strategy and fit',
        tasks: [doIt('Assess strategic fit with Berkshire Hathaway: industry, competitive advantage, risks, management', 120)],
      },
      {
        title: 'Session 4 · Write',
        tasks: [doIt('Draft the 3-page board recommendation', 120)],
      },
      {
        title: 'Session 5 · Defend',
        tasks: [doIt('Present it to your study group or record a 5-minute video; collect 3 tough questions and answer them in writing', 120)],
      },
    ],
    exercise: {
      title: 'Board recommendation',
      steps: [
        'Page 1: recommendation, plus the 3 reasons, in the first paragraph.',
        'Page 2: valuation summary, key assumptions and a sensitivity table.',
        'Page 3: strategic fit, risks and mitigations, and what would change your mind.',
      ],
      output: 'Upload the 3 pages.',
    },
    discuss: 'Would you have done the deal at that price? What is the strongest argument against?',
    check: ['Could you explain your valuation in 60 seconds?', 'What is the single biggest risk, and how is it mitigated?'],
    terms: [],
    cards: [],
  },
  {
    week: 24,
    brief: {
      watch: 'None: review week',
      read: 'Reread your notes from weeks 13–23',
      do: 'Final core exam: an unseen case, 3 hours',
      deliverable: 'A graded final; choose electives',
    },
    why:
      'You have now covered the full LBS-style core. This week consolidates it, tests it under pressure, and sets up the second half of the programme by choosing your electives.',
    objectives: ['Consolidate the core disciplines', 'Perform under time pressure on an unseen case', 'Choose electives that fit your goals'],
    sessions: [
      { title: 'Session 1 · Catch up', tasks: [doIt('Finish any outstanding core deliverables', 120)] },
      { title: 'Session 2 · Review', tasks: [doIt('Clear your flashcards; reread your takeaways from weeks 13–23', 120)] },
      {
        title: 'Session 3 · Final exam',
        tasks: [doIt('Sit the final exam (instructions below), 3 hours', 180, undefined, 'This session runs longer than usual.')],
      },
      { title: 'Session 4 · Mark and reflect', tasks: [doIt('Mark against the rubric, or swap with your study group', 60)] },
      {
        title: 'Session 5 · Choose electives',
        tasks: [doIt('Review the elective weeks (25–35) on the "My electives" page and swap any that do not fit your goals', 60)],
      },
    ],
    exercise: {
      title: 'Final core exam',
      steps: [
        'Choose a company facing a visible strategic choice (a merger, a new market or a turnaround). Use only public information.',
        'Part A (45 min): financial health: statements, ratios, cash.',
        'Part B (45 min): industry and competitive position: five forces, the strategy cascade.',
        'Part C (45 min): the recommended choice, with a rough valuation impact.',
        'Part D (45 min): implementation: operations, people, ethics and risks.',
        'Rubric (out of 10): analysis 4, judgement 3, communication 3.',
      ],
      output: 'Upload your exam and enter your score.',
    },
    discuss: 'What is the one core discipline you will keep practising most deliberately, and why?',
    check: ['Which core module would you rate yourself lowest on, and what is the fix?'],
    terms: [],
    cards: [],
  },
];
