import { book } from './links';

export interface Book {
  id: string;
  block: number;
  weeks: string;
  kind: 'Non-fiction' | 'Fiction';
  title: string;
  author: string;
  pitch: string;
  pairsWith?: string;
}

// About 45 minutes of reading a week fits 4 books a year: one per 12-week block.
export const BOOKS: Book[] = [
  { id: 'b01', block: 1, weeks: 'Weeks 1–12', kind: 'Non-fiction', title: 'Thinking in Bets', author: 'Annie Duke', pitch: 'A former poker champion on deciding well under uncertainty: separate the quality of a decision from its outcome.', pairsWith: 'Weeks 8–10: statistics and decisions' },
  { id: 'b03', block: 2, weeks: 'Weeks 13–24', kind: 'Non-fiction', title: 'Good to Great', author: 'Jim Collins', pitch: 'Why a few good companies made the leap to greatness: Level 5 leaders, the hedgehog concept, the flywheel.', pairsWith: 'Weeks 19–21: strategy' },
  { id: 'b02', block: 3, weeks: 'Weeks 25–36', kind: 'Fiction', title: 'Project Hail Mary', author: 'Andy Weir', pitch: 'A science teacher wakes up alone on a spaceship with no memory and has to save Earth. Funny, clever, impossible to put down.' },
  { id: 'b04', block: 4, weeks: 'Weeks 37–48', kind: 'Fiction', title: 'The Thursday Murder Club', author: 'Richard Osman', pitch: 'Four pensioners in a retirement village solve murders for fun. Warm, witty, very British.' },
];

// Extra reading, only if you have spare time. Not part of the 5 hours.
export const BONUS: Omit<Book, 'block' | 'weeks'>[] = [
  { id: 'b05', kind: 'Non-fiction', title: 'The Psychology of Money', author: 'Morgan Housel', pitch: 'Short stories about how people actually think about money: behaviour beats spreadsheets.' },
  { id: 'b07', kind: 'Non-fiction', title: 'Alchemy', author: 'Rory Sutherland', pitch: 'Ogilvy\'s vice-chairman on why the best marketing ideas often look irrational. Very funny.' },
  { id: 'b09', kind: 'Non-fiction', title: 'Made to Stick', author: 'Chip Heath & Dan Heath', pitch: 'Why some ideas survive and others die, and six principles that make messages memorable.' },
  { id: 'b11', kind: 'Non-fiction', title: 'Contagious: Why Things Catch On', author: 'Jonah Berger', pitch: 'A Wharton professor on why products, ideas and videos spread.' },
  { id: 'x07', kind: 'Non-fiction', title: 'Shoe Dog', author: 'Phil Knight', pitch: 'Nike\'s founder tells the chaotic, cash-strapped early years. Reads like a novel.' },
  { id: 'b06', kind: 'Fiction', title: 'Six of Crows', author: 'Leigh Bardugo', pitch: 'Six outcasts attempt an impossible heist in a fantasy city.' },
  { id: 'b08', kind: 'Fiction', title: 'The Silent Patient', author: 'Alex Michaelides', pitch: 'A painter shoots her husband, then never speaks again. A twisty psychological thriller.' },
  { id: 'b10', kind: 'Fiction', title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', pitch: 'Earth is demolished for a hyperspace bypass. The funniest sci-fi ever written.' },
  { id: 'b12', kind: 'Fiction', title: 'Recursion', author: 'Blake Crouch', pitch: 'A detective and a neuroscientist chase a technology that rewrites memory.' },
  { id: 'x01', kind: 'Fiction', title: 'Legends & Lattes', author: 'Travis Baldree', pitch: 'A retired orc warrior opens a coffee shop. Cosy, feel-good fantasy.' },
  { id: 'x02', kind: 'Fiction', title: 'All Systems Red', author: 'Martha Wells', pitch: 'A security robot that would rather watch TV than protect humans. Short and sarcastic.' },
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

// One 30-minute challenge every two weeks, rotating Speak → Write → Brain → Explore.
const LIST: [string, string, string?][] = [
  ['Explain it in 2 minutes', 'Record yourself explaining the five parts of a business to a 12-year-old. Note one thing to improve.'],
  ['Your first LinkedIn post', 'Write 150 words on one surprising thing you\'ve learned so far. Post it, or keep it as a draft.'],
  ['Chess puzzles', 'Do 30 minutes of Lichess puzzles. Notice how you think before you move.', 'https://lichess.org/training'],
  ['Store walk', 'Visit a shop you use and observe its layout, pricing and queues. Write 5 observations.'],
  ['The 60-second pitch', 'Pitch your company or your job in 60 seconds. Record 3 takes and keep the best.'],
  ['Kill the jargon', 'Rewrite one jargon-heavy paragraph from work in plain English, at half the length.'],
  ['Fermi estimate', 'Estimate how many coffees are sold in London each day. Write your steps and assumptions.'],
  ['A business podcast', 'Listen to part of a "How I Built This" episode. Note the one decision that made the company.', 'https://www.npr.org/podcasts/510313/how-i-built-this'],
  ['Teach-back', 'Explain NPV to a friend without jargon, then ask them to explain it back.'],
  ['Book review', 'Write 150 words on your current book: the one idea worth keeping.'],
  ['Connections streak', 'Play NYT Connections on five days this fortnight. Pattern-spotting is an analysis skill.', 'https://www.nytimes.com/games/connections'],
  ['Halfway celebration', 'You\'re halfway! Do something fun, then write a short note to your week-1 self.'],
  ['Visit Toastmasters', 'Find a local club and go as a guest. It\'s usually free for a first visit.', 'https://www.toastmasters.org/find-a-club'],
  ['Cold email', 'Write to someone you admire with one specific, easy-to-answer question. Send it.'],
  ['Memory palace', 'Use the method of loci to memorise Porter\'s five forces. Test yourself tomorrow.', 'https://www.youtube.com/results?search_query=memory+palace+method+of+loci+tutorial'],
  ['A public talk', 'Attend or watch a London Business School event. Write down 3 ideas.', 'https://www.london.edu/events'],
  ['Present a chart', 'Present any chart from your work in 2 minutes: the finding first, then the evidence.'],
  ['Opinion piece', 'Write 200 words on how AI will change your industry. Take a clear position.'],
  ['A strategy board game', 'Play a game with friends, then name the winning strategy.'],
  ['Meetup', 'Attend a meetup in your field and ask 3 people what problem they\'re working on.', 'https://www.meetup.com'],
  ['Mock negotiation', 'Role-play a salary negotiation with someone from your group. Swap roles.'],
  ['Write your bio', 'Write your professional bio in 1 line, 50 words and 150 words.'],
  ['Logic puzzles', 'Do 3 logic puzzles from Puzzle Baron and time yourself.', 'https://www.puzzlebaron.com'],
  ['Graduation night', 'You did it. Celebrate, and tell someone what you learned in 3 sentences.'],
];

export const ACTIVITIES: Activity[] = LIST.map(([title, how, url], i) => ({ week: i * 2 + 1, type: T[i % 4], title, how, url }));

/** Each challenge covers two weeks. */
export const activityForWeek = (week: number) => ACTIVITIES[Math.min(23, Math.floor((week - 1) / 2))];

export const BRAIN_GYM = [
  { name: 'Lichess puzzles', what: 'Calculation and patience', url: 'https://lichess.org/training' },
  { name: 'NYT Connections', what: 'Pattern-spotting', url: 'https://www.nytimes.com/games/connections' },
  { name: 'Wordle', what: 'Deduction', url: 'https://www.nytimes.com/games/wordle' },
  { name: 'NYT Strands', what: 'Theme-spotting word search', url: 'https://www.nytimes.com/games/strands' },
  { name: 'Minute Cryptic', what: 'One cryptic clue a day', url: 'https://www.minutecryptic.com' },
  { name: 'Your flashcards', what: 'Spaced repetition', url: '#/flashcards' },
];
