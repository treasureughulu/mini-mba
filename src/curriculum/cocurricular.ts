import { book } from './links';

export interface Book {
  id: string;
  month: number;
  kind: 'Non-fiction' | 'Fiction';
  title: string;
  author: string;
  pitch: string;
  pairsWith?: string;
}

// One book a month, alternating light non-fiction and fun fiction. Months are 4 programme weeks.
export const BOOKS: Book[] = [
  { id: 'b01', month: 1, kind: 'Non-fiction', title: 'Thinking in Bets', author: 'Annie Duke', pitch: 'A former poker champion on deciding well under uncertainty: separate the quality of a decision from its outcome.', pairsWith: 'Weeks 7–8: Data & Decisions' },
  { id: 'b02', month: 2, kind: 'Fiction', title: 'Project Hail Mary', author: 'Andy Weir', pitch: 'A science teacher wakes up alone on a spaceship with no memory and has to save Earth. Funny, clever, impossible to put down.' },
  { id: 'b03', month: 3, kind: 'Non-fiction', title: 'Good to Great', author: 'Jim Collins', pitch: 'Why a few good companies made the leap to greatness: Level 5 leaders, the hedgehog concept, the flywheel.', pairsWith: 'Weeks 13–15: Strategy' },
  { id: 'b04', month: 4, kind: 'Fiction', title: 'The Thursday Murder Club', author: 'Richard Osman', pitch: 'Four pensioners in a retirement village solve murders for fun. Warm, witty, very British.' },
  { id: 'b05', month: 5, kind: 'Non-fiction', title: 'The Psychology of Money', author: 'Morgan Housel', pitch: 'Short stories about how people actually think about money: behaviour beats spreadsheets.', pairsWith: 'Personal finance plus your finance modules' },
  { id: 'b06', month: 6, kind: 'Fiction', title: 'Six of Crows', author: 'Leigh Bardugo', pitch: 'Six outcasts attempt an impossible heist in a fantasy city. Ocean\'s Eleven with magic.' },
  { id: 'b07', month: 7, kind: 'Non-fiction', title: 'Alchemy', author: 'Rory Sutherland', pitch: 'Ogilvy\'s vice-chairman on why the most effective marketing ideas often look irrational. Very funny.', pairsWith: 'Weeks 25–27: Growth Marketing and Pricing' },
  { id: 'b08', month: 8, kind: 'Fiction', title: 'The Silent Patient', author: 'Alex Michaelides', pitch: 'A painter shoots her husband, then never speaks again. A psychotherapist sets out to find out why. A twisty psychological thriller.' },
  { id: 'b09', month: 9, kind: 'Non-fiction', title: 'Made to Stick', author: 'Chip Heath & Dan Heath', pitch: 'Why some ideas survive and others die, and the six principles (SUCCESs) that make messages memorable.', pairsWith: 'Weeks 32–33: Sales and Negotiation' },
  { id: 'b10', month: 10, kind: 'Fiction', title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', pitch: 'Earth is demolished for a hyperspace bypass, and things get stranger from there. The funniest sci-fi ever written.' },
  { id: 'b11', month: 11, kind: 'Non-fiction', title: 'Contagious: Why Things Catch On', author: 'Jonah Berger', pitch: 'A Wharton professor on why products, ideas and videos spread: the STEPPS framework.', pairsWith: 'Capstone go-to-market (weeks 44–45)' },
  { id: 'b12', month: 12, kind: 'Fiction', title: 'Recursion', author: 'Blake Crouch', pitch: 'A detective and a neuroscientist chase a technology that lets people relive memories, and rewrite reality. A sci-fi thriller.' },
];

// For when you finish early or want to swap.
export const BONUS: Omit<Book, 'month'>[] = [
  { id: 'x01', kind: 'Fiction', title: 'Legends & Lattes', author: 'Travis Baldree', pitch: 'A retired orc warrior opens a coffee shop. Cosy, feel-good fantasy (and secretly a small-business story).' },
  { id: 'x02', kind: 'Fiction', title: 'All Systems Red', author: 'Martha Wells', pitch: 'A security robot that would rather binge-watch TV than protect humans. Short, sarcastic, brilliant.' },
  { id: 'x03', kind: 'Fiction', title: 'Dark Matter', author: 'Blake Crouch', pitch: '"Are you happy with your life?" A physicist is kidnapped into an alternate version of it.' },
  { id: 'x04', kind: 'Fiction', title: 'Remarkably Bright Creatures', author: 'Shelby Van Pelt', pitch: 'A widow and a very clever octopus solve a family mystery. Funny and touching.' },
  { id: 'x05', kind: 'Non-fiction', title: 'Atomic Habits', author: 'James Clear', pitch: 'Tiny changes, remarkable results: a practical guide to building the habit that gets you through 48 weeks.' },
  { id: 'x06', kind: 'Non-fiction', title: 'Talk Like TED', author: 'Carmine Gallo', pitch: 'What the best TED speakers do differently, for your speaking challenges.' },
  { id: 'x07', kind: 'Non-fiction', title: 'Shoe Dog', author: 'Phil Knight', pitch: 'Nike\'s founder tells the chaotic, cash-strapped early years. A business memoir that reads like a novel.' },
];

export const bookLink = (b: { title: string; author: string }) => book(`${b.title} ${b.author}`);

export type ActivityType = 'Speak' | 'Write' | 'Brain' | 'Explore';
export interface Activity {
  week: number;
  type: ActivityType;
  title: string;
  how: string;
  url?: string;
}

const T: ActivityType[] = ['Speak', 'Write', 'Brain', 'Explore'];

// A 30–45 minute challenge each week, rotating Speak → Write → Brain → Explore.
const LIST: [string, string, string?][] = [
  ['Explain it in 2 minutes', 'Record yourself on your phone explaining "the five parts of every business" to a 12-year-old. Watch it back once and note one thing to improve.'],
  ['Your first LinkedIn post', 'Write 150–250 words on one surprising thing you learned about reading accounts this week. Post it, or save it as a draft.'],
  ['Chess puzzles', 'Do 15 minutes of Lichess puzzles (free, no account needed). Notice how you calculate before you move: that is decision-making practice.', 'https://lichess.org/training'],
  ['Store walk', 'Visit a shop you use and observe it like a consultant: layout, pricing, queues, staff. Write 5 observations about its strategy.'],
  ['The 60-second pitch', 'Pitch your company (or your job) in 60 seconds: problem, solution, why it wins. Record 3 takes; keep the best.'],
  ['Kill the jargon', 'Take a jargon-heavy email or report at work and rewrite one paragraph in plain English, half the length.'],
  ['Fermi estimate', 'Estimate how many coffees are sold in London each day. Break it into steps, write your assumptions, then compare with any figure you can find.'],
  ['A business podcast', 'Listen to an episode of "How I Built This" or "Acquired" about a company you like. Note the one decision that made the company.', 'https://www.npr.org/podcasts/510313/how-i-built-this'],
  ['Teach-back', 'Explain NPV to a friend or family member without jargon. Ask them to explain it back to you.'],
  ['The one-page memo', 'Write a one-page memo recommending one small change at work: problem, recommendation, three reasons, next step.'],
  ['NYT Connections streak', 'Play Connections (or Wordle) every day this week. Pattern-spotting is a core analysis skill.', 'https://www.nytimes.com/games/connections'],
  ['Midterm treat', 'Do something fun and off-screen to mark the midpoint of the core: a gallery, a walk, a game night. Rest is part of the programme.'],
  ['Visit a Toastmasters club', 'Find a local club and attend as a guest (free). Volunteer for a "Table Topics" impromptu answer if you dare.', 'https://www.toastmasters.org/find-a-club'],
  ['Book review', 'Write a 200-word review of your current co-curricular book: the one idea worth stealing and who should read it.'],
  ['A strategy board game', 'Play Catan, Ticket to Ride or Monopoly Deal with friends. Afterwards, name the winning strategy and why it worked.'],
  ['LBS public event', 'Attend (or watch online) one free London Business School or LSE public talk. Write down 3 ideas.', 'https://www.london.edu/events'],
  ['Story, not slides', 'Tell a 3-minute true story from your career with a clear beginning, tension and lesson. Practise it on someone.'],
  ['Cold email', 'Write a cold email to someone you admire asking one specific, easy-to-answer question. Send it.'],
  ['Memory palace', 'Learn the "method of loci" and use it to memorise Porter\'s five forces plus the 4Ps. Test yourself tomorrow.', 'https://www.youtube.com/results?search_query=memory+palace+method+of+loci+tutorial'],
  ['Documentary night', 'Watch a business documentary (e.g. on Netflix: "Inside Bill\'s Brain" or "The Social Dilemma"). Note one strategic lesson.'],
  ['Give feedback well', 'Give one colleague specific, kind, useful feedback using situation, behaviour, impact. Notice how it lands.'],
  ['Newsletter issue', 'Write a short "issue 1" of a newsletter about what you are learning: 3 ideas, 1 link, 1 question for readers.'],
  ['Mental maths for business', 'Practise percentages and compounding in your head for 15 minutes (e.g. 7% growth for 10 years ≈ doubling; the rule of 72).'],
  ['Halfway celebration', 'You are halfway through the programme! Celebrate properly, then write a one-paragraph letter to your week-1 self.'],
  ['Impromptu speaking', 'Use a random topic generator; give yourself 30 seconds to think and talk for 90 seconds. Do 5 rounds.', 'https://www.google.com/search?q=random+impromptu+speech+topic+generator'],
  ['A short story', 'Write a 500-word short story, any genre, just for fun. Bonus: set it in a company.'],
  ['Codenames or Wavelength', 'Play a word or association game with friends. Communication under constraints is the skill.'],
  ['Learn something random', 'Spend 45 minutes learning a totally unrelated skill: a few phrases in a new language (Duolingo), a magic trick, a recipe.', 'https://www.duolingo.com'],
  ['Present a chart', 'Take your week-31-style chart (or any chart at work) and present it in 2 minutes: the finding first, then the evidence.'],
  ['Op-ed', 'Write a 400-word opinion piece on how AI will change your industry. Take a clear position.'],
  ['Logic puzzles', 'Do 3 logic puzzles (Sudoku, KenKen or a Puzzle Baron grid). Time yourself.', 'https://www.puzzle-baron.com'],
  ['Meetup', 'Attend a meetup in your field (Meetup.com or Eventbrite). Talk to 3 new people and ask what problem they are working on.', 'https://www.meetup.com'],
  ['Mock negotiation', 'Role-play a salary negotiation with someone from your study group. Swap roles.'],
  ['Explain a concept in a thread', 'Write a 6–8 point "thread" (on LinkedIn or as a note) explaining one concept from this programme simply.'],
  ['Brain teaser bingo', 'Try 5 classic consulting-style brain teasers or estimation questions. Write your structure before your answer.'],
  ['Museum trip', 'Visit the Science Museum, V&A or the Design Museum (most are free). Find one idea you could apply to a product or brand.'],
  ['Toast or tribute', 'Prepare and give a 2-minute toast or tribute at a dinner or team meeting. Practise once beforehand.'],
  ['Customer letter', 'Write a letter from your capstone\'s customer describing their problem in their own voice.'],
  ['Speed reading test', 'Measure your reading speed, then try a pacing technique for 15 minutes. Re-measure. (Comprehension matters more than speed.)'],
  ['Shadow a different team', 'Spend an hour with a team at work you rarely see. Ask what frustrates them most.'],
  ['Podcast-style chat', 'Record a 10-minute conversation with a friend about something you have learned. Listen back for clarity.'],
  ['Write your bio', 'Write three versions of your professional bio: 1 line, 50 words, 150 words.'],
  ['Chess game', 'Play one full game against a friend or a Lichess bot. Review your worst move.', 'https://lichess.org'],
  ['Volunteer an hour', 'Offer your new skills for an hour: help a charity, a small business or a friend\'s side project with a quick analysis.'],
  ['Practice pitch', 'Deliver your capstone pitch to someone who knows nothing about it. Note every question they ask.'],
  ['Thank-you notes', 'Write three genuine thank-you notes to people who helped you during the programme.'],
  ['Puzzle hunt', 'Do an escape room (in person or online) with friends. Notice how the team divided the work.'],
  ['Graduation night', 'You did it. Celebrate, and tell someone what you learned this year in 3 sentences.'],
];

export const ACTIVITIES: Activity[] = LIST.map(([title, how, url], i) => ({ week: i + 1, type: T[i % 4], title, how, url }));

export const BRAIN_GYM = [
  { name: 'Lichess puzzles', what: 'Calculation and patience', url: 'https://lichess.org/training' },
  { name: 'NYT Connections', what: 'Pattern-spotting', url: 'https://www.nytimes.com/games/connections' },
  { name: 'Wordle', what: 'Deduction', url: 'https://www.nytimes.com/games/wordle' },
  { name: 'NYT Strands', what: 'Theme-spotting word search', url: 'https://www.nytimes.com/games/strands' },
  { name: 'Minute Cryptic', what: 'One cryptic clue a day', url: 'https://www.minutecryptic.com' },
  { name: 'Your flashcards', what: 'Spaced repetition', url: '#/flashcards' },
];
