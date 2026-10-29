// Verified free sources. Video links that may move are YouTube searches (yt) rather than fixed URLs.
const D = 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/';

export const L = {
  // Aswath Damodaran (NYU Stern) — free online classes, each session 12–20 min
  dAcct: 'https://www.youtube.com/playlist?list=PLUkh9m2BorqmKaLrNBjKtFDhpdFdi8f7C',
  dAcctSite: D + 'webcastacctg.htm',
  dFound: 'https://www.youtube.com/playlist?list=PLUkh9m2BorqndWimijiJ-VCAXjJUrzJQU',
  dFoundSite: D + 'webcastfoundationsonline.htm',
  dCF: 'https://www.youtube.com/playlist?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_',
  dCFSite: D + 'webcastcfonline.htm',
  dVal: 'https://www.youtube.com/playlist?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9',
  dValSite: D + 'webcastvalonline.htm',
  dStats: 'https://www.youtube.com/playlist?list=PLUkh9m2BorqmXcRzWFbzcjMd7fYErVexF',
  dStatsSite: D + 'webcaststatistics.htm',
  dCLC: 'https://www.youtube.com/playlist?list=PLUkh9m2BorqlpbJBd26UEawPHk0k9y04_',
  dData: D + 'datacurrent.html',
  dBlog: 'https://aswathdamodaran.blogspot.com',

  // Free courses and textbooks
  khanFinance: 'https://www.khanacademy.org/economics-finance-domain/core-finance',
  khanStats: 'https://www.khanacademy.org/math/statistics-probability',
  osAcct: 'https://openstax.org/details/books/principles-financial-accounting',
  osMgrAcct: 'https://openstax.org/details/books/principles-managerial-accounting',
  osMarketing: 'https://openstax.org/details/books/principles-marketing',
  osMgmt: 'https://openstax.org/details/books/principles-management',
  osOB: 'https://openstax.org/details/books/organizational-behavior',
  osStats: 'https://openstax.org/details/books/introductory-business-statistics-2e',
  osBiz: 'https://openstax.org/details/books/introduction-business-2e',
  mruMicro: 'https://learn.mru.org/courses/principles-of-microeconomics',
  mruMacro: 'https://learn.mru.org/courses/principles-of-macroeconomics',
  mit1401: 'https://ocw.mit.edu/14-01F18',
  saylor: 'https://learn.saylor.org',
  boe: 'https://www.bankofengland.co.uk/knowledgebank',
  ons: 'https://www.ons.gov.uk',
  companiesHouse: 'https://find-and-update.company-information.service.gov.uk',
  elementsAI: 'https://course.elementsofai.com',
  kaggleSQL: 'https://www.kaggle.com/learn/intro-to-sql',
  kagglePandas: 'https://www.kaggle.com/learn/pandas',
  kaggleViz: 'https://www.kaggle.com/learn/data-visualization',
  kaggleData: 'https://www.kaggle.com/datasets',
  hubspot: 'https://academy.hubspot.com',
  skillshop: 'https://skillshop.withgoogle.com',
  ycSchool: 'https://www.startupschool.org',
  ycLibrary: 'https://www.ycombinator.com/library',
  pgEssays: 'https://paulgraham.com/articles.html',
  pgScale: 'https://paulgraham.com/ds.html',
  statquest: 'https://www.youtube.com/@statquest',
  lbsThink: 'https://www.london.edu/think',
  hbrFiveForces: 'https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy',
  hbrWhatIsStrategy: 'https://hbr.org/1996/11/what-is-strategy',
  hbsCases: 'https://hbsp.harvard.edu',

  // Coursera Plus (paid subscription)
  cExcel: 'https://www.coursera.org/learn/excel-essentials',
  cAcct: 'https://www.coursera.org/learn/wharton-accounting',
  cFin: 'https://www.coursera.org/learn/wharton-finance',
  cStats: 'https://www.coursera.org/learn/stanford-statistics',
  cExcelData: 'https://www.coursera.org/learn/analytics-excel',
  cMicro: 'https://www.coursera.org/learn/microeconomics-part1',
  cShiller: 'https://www.coursera.org/learn/financial-markets-global',
  cStrategy: 'https://www.coursera.org/learn/uva-darden-foundations-business-strategy',
  cMarketing: 'https://www.coursera.org/learn/wharton-marketing',
  cOps: 'https://www.coursera.org/learn/wharton-operations',
  cInfluence: 'https://www.coursera.org/learn/influencing-people',
  cTeams: 'https://www.coursera.org/learn/leading-teams',
  cMktAnalytics: 'https://www.coursera.org/learn/uva-darden-market-analytics',
  cCustAnalytics: 'https://www.coursera.org/learn/wharton-customer-analytics',
  cAI: 'https://www.coursera.org/learn/ai-for-everyone',
  cGenAI: 'https://www.coursera.org/learn/generative-ai-for-everyone',
  cNegotiation: 'https://www.coursera.org/learn/negotiation-skills',

  // LinkedIn Learning (paid, or free with many UK library cards)
  liStrategic: 'https://www.linkedin.com/learning/strategic-thinking',
  liFinance: 'https://www.linkedin.com/learning/finance-foundations-2018',
};

export const li = (q: string) => `https://www.linkedin.com/learning/search?keywords=${encodeURIComponent(q)}`;

export const yt = (q: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
export const web = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
export const book = (q: string) => `https://openlibrary.org/search?q=${encodeURIComponent(q)}`;
