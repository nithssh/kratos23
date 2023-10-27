export interface EventInfo {
  name: string
  category: 'technical' | 'nontechnical'
  type: 'team' | 'solo'
  online: boolean
  external?: string
  fee: {
    type: 'flat' | 'perHead'
    amount: number
  }
  description: string
  rules: string[]
  prizes: string[]
  organizers: string[]
  teamSize: {
    min: number
    max: number
  }
  maxTeams: number | 'unlimited'
  time?: string
  venue?: string
}

const eventsLiteral: { [key: string]: EventInfo } = {
  code_hunt: {
    name: 'Hunt for Code',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 100,
    },
    description:
      'Unleash your inner explorer and coding genius in our thrilling Treasure Hunt & Coding Challenge event! Navigate through hints and write ingenious code to unlock exciting prizes. Join us for an adventure that combines tech and treasure in one exhilarating journey!',
    rules: [
      'Participating team should mandatorily consist of 2 members. Seeking help from others is considered a violation. Destructive behavior is strictly prohibited.',
      'Use of mobile phones during the coding phase would lead to elimination. Make sure the clue is followed in sequential order.',
      'The participants are requested to obtain the hint only from the disguised member mentioned in the clues.',
      'The first 5 teams to solve the clues and coding phase will be qualified for the next round.',
      'The qualified teams will receive problem statements of a greater difficulty and will be asked to solve any one of them randomly.',
      'The first 3 teams to solve the challenge will be announced as winners.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 2,
      max: 2,
    },
    maxTeams: 15,
    organizers: ['Aadhithya - 9514582641', 'Sujesh - 8072130580'],
  },
  bug_off: {
    name: 'Bug Off',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'perHead',
      amount: 50,
    },
    description:
      'For the first round twenty multiple-choice questions (MCQs) covering debugging and general concepts in Java, C++, and Python.Teams whichare qualified for the second round will receive questions on HackerRank that contain code with errors, and their objective is to correct these errors. The team that successfully fixes most questions will be crowned the winners.',
    rules: [
      'Only the Top 10 teams from Round 1 will progress to Round 2',
      'For Round 2, you have the flexibility to choose between CPP, Python, and Java   to perform debugging tasks.',
      'A Hackerrank account is a must for Round 2.',
      'The judge decision is final.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 1,
      max: 2,
    },
    maxTeams: 20,
    organizers: ['Hafeeludden - 7358275575', 'Praiseline - 9444513978'],
  },
  pair_programming: {
    // Intentional unicode SHY character below
    name: 'Pair Program­ming',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 100,
    },
    description:
      'The event has two rounds: Pattern Programming and HackerRank coding problems. Each team has two members who take turns coding without discussing for a specific amount of time.',
    rules: [
      'Teams consist of two members.',
      'No discussion between team members.',
      'No smartphone or smartwatch usage.',
      'Follow coding time allocation.',
      'Cheating leads to disqualification.',
      'Round 1 elimination.',
      'Highest score wins.',
      'Hackerrank Account ID required.',
      'Each person codes for a specific amount of time.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 2,
      max: 2,
    },
    maxTeams: 15,
    organizers: ['Naveen - 6369520129', 'Pooja - 8610479340'],
  },
  paper_presentation: {
    name: 'Paper Present­ation',
    description:
      'Paper Presentation is a technical event which challenges participants to showcase their thinking, knowledge and presentation skills. The participant teams have to prepare a detailed paper presentation on any of the computer science topics and address it infront of the panel.',
    rules: [
      'Abstract and presentation should be submitted in the following Google Form.',
      'Topics from all Technical Domains are accepted.',
      'Working model must be presented. If not, concept must be presented in detail. ',
      'Each group should present for 8-10 minutes',
      'Paper submitted must be in IEEE Format.',
      'Abstract and Presentation should be submitted prior to the event. ',
      'Presentation should contain 12 to 15 slides. ',
      'Based on the abstract, teams will be selected to present their paper.',
      'Selected teams will be given further details regarding the payment and presentation submission.',
    ],
    organizers: [
      'Hajira - 8870540261',
      'Srimathy - 8778806488',
      'Shrinilamangai - 8015351188',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 1,
      max: 4,
    },
    maxTeams: 8,
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 250,
    },
    external: "https://forms.gle/nAYFXPXTK7mELUJPA"
  },
  design_decode: {
    name: 'Design Decode',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 100,
    },
    description:
      'Participate in a thrilling CSS Design Challenge! Showcase your web design expertise and creativity as you engage in themed design competitions',
    rules: [
      'Teams should consist of up to 2 members.',
      'In the first round, a quiz will be conducted for 10 minutes in Quizizz. The top 10-15 teams will move on to the second round based on it. ',
      'In the second round, each team will receive a website design with some basic code (HTML). Your task is to make it look great by writing the CSS code. You guys can discuss it for 10 minutes.',
      'Second round is for 40 minutes. One team member from each team will start and write the code for 20 minutes, after which you would swap with your team member and would code for the final 20 minutes. ',
      'Make sure to finish your work within the set time limit; late submissions might not be considered. ',
      'Your designs will be judged by juries based on how creative, innovative, accurate, and efficient your CSS code is, as well as how well it follows the given guidelines.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 2,
      max: 2,
    },
    maxTeams: 20,
    organizers: ['Harish - 9345764132', 'Akash - 8248213992'],
  },
  jargon_busters: {
    name: 'Jargon Busters',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'perHead',
      amount: 50,
    },
    description:
      'Teams will receive a topic 30 minutes before the event. They must create a PowerPoint presentation to explain the technical subject without using any technical jargons. The teams performance is evaluated according to their PowerPoint presentation, comprehension of the subject matter, and their capability to effectively explain the topic.',
    rules: [
      'Everyone must bring laptop for the competition',
      'Teams will receive their topics on the spot just before the event.',
      'A time frame of 30 to 40 minutes will be provided to prepare a PowerPoint presentation on the given topic.',
      'Teams will be required to submit the final version of their PowerPoint before the event commences.',
      'Each team will have a 10-minute slot to present their PowerPoint and explain the topic.',
      'Following the presentation, the judges will ask questions to assess the teams understanding of the topic.',
      'Any use of technical terminology will result in disqualification.',
      'The judges decision is final.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 1,
      max: 2,
    },
    maxTeams: 20,
    organizers: ['Tauseef - 8667556475', 'Shyam - 9566594962'],
  },
  qr_quest: {
    name: 'QR Quest',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'perHead',
      amount: 50,
    },
    description:
      'Join the QR Scavenger Hunt! Scan, solve, and conquer thrilling challenges in this modern-day adventure. Embark on a high-tech quest filled with intrigue. Scan QR codes to unlock riddles and unveil hidden mysteries. Strategize, and race against time to solve each clue. Get ready to decode the excitement!',
    rules: [
      'Individual or Team: Up to 2 members can be in a team',
      'Each team will receive a QR code, an image that you can scan with your smartphone.Scanned QRs will contain programming problems to be solved.',
      'Round 1 will have python coding problems.The first round will be for 20 minutes and the top five teams will advance to the final round.',
      'Round 2 will contain both Java and C coding problems as a choice for you to solve.',
      'The first two teams to solve all the questions within the stipulated time will be declared as the winner and runner.',
      'The top two teams will receive prizes.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 1,
      max: 2,
    },
    maxTeams: 15,
    organizers: ['Hari Prasad - 9176697669', 'Lijesh - 6379131341'],
  },
  treasure_hunt: {
    name: 'e-Treasure Hunt',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'perHead',
      amount: 50,
    },
    description:
      'Are you ready for an exhilarating adventure like no other?Join us for : The Great E-Treasure Hunt," an electrifying virtual treasure hunt that will test your wits, teamwork, and tech-savvy skills!',
    rules: [
      'Participants can form teams with a maximum of 2 members or play  individually.',
      'The E-Treasure Hunt will take place for 45 Minutes',
      'Participants will receive a series of online clues and riddles that lead them closer to the ultimate treasure.',
      'The hunt begins with an email sent to all registered participants at This email will contain the first clue.',
      'This treasure hunt is entirely virtual, and participants do not need to visit physical locations. The ultimate treasure is a digital certificate of achievement.',
      'Participants earn points for each clue solved. The participant or team with the most points at the end will be declared the winner. 10 points for each correct clue solved.',
      'Collaboration or sharing of answers among participants is strictly prohibited. Any form of cheating will result in disqualification.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 1,
      max: 2,
    },
    maxTeams: 15,
    organizers: ['Srinivasan - 8525873211', 'Arun - 7598810481'],
  },
  tech_feud: {
    name: 'Tech Feud',
    category: 'technical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 150,
    },
    description:
      'Join us for ‘Technical Feud’ , a high-energy competition where teams face off in a battle of tech knowledge, answering questions to prove who’s the tech-saviest team!',
    rules: [
      'The one to hit the buzzer first gets the chance to answer.',
      'Teams aim to guess all 5 answers for points.',
      'Highest priority answer = 20 points.',
      'Answers with less priority are awarded accordingly',
      'Each team has 2 lives.',
      'If a team loses both the lives, then the opposing team gets a single chance to answer the question and steal their points',
      'Rounds are conducted in a knockout fashion.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 3,
      max: 3,
    },
    maxTeams: 12,
    organizers: ['Ashwin Ram - 9884686271', 'Sanjay - 6379533970'],
  },
  futsal: {
    name: 'Futsal',
    category: 'nontechnical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 250,
    },
    description:
      'Join us for an electrifying evening of Futsal action! Get ready to witness thrilling matches, impressive footwork, and intense competition as teams battle it out on the court. Whether youre a seasoned player or a passionate fan, this event promises an adrenaline-packed experience for all. Dont miss out on the excitement – mark your calendars and come kick it with us!',
    rules: [
      'Length of Game: 4 minutes halves',
      'Teams can call a 1-minute halftime',
      '9 minutes per match (extended up to 10 minutes if required)',
      'Teams comprise of 4 main players (1 goalkeeper) and 2 substitutes.',
      'Conduct of Knockout or League tournament depends on the number of teams.',
      'Rolling substitutes allowed',
      'Play for referee whistle',
      'One step penalty',
      'No offensive language or violent conduct.',
      'Players receiving Yellow card are obliged to a 1-minute ban.',
      'Players receiving Red card should leave the match.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 5,
      max: 5,
    },
    maxTeams: 20,
    organizers: ['Dikshin - 9789855589', 'Neeraj - 9361366212'],
  },
  channel_surfing: {
    name: 'Channel Surfing',
    category: 'nontechnical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 250,
    },
    description:
      'Channel Surfing is about a team imitating popular channels in variety of categories such as sports, news, food etc. The teams must act as directed by the judges, who will continuously change the channel and give instructions such as (reverse, play, pause, fast-forward, slow-motion). According to the act points will be awarded.',
    rules: [
      'A team can consist of only 5 members.',
      'Participants must act out the channel given by the judges and should be able to simultaneously switch to a different channel.',
      'Avoid using sensitive content. The team will be disqualified if the rule is violated.',
      'No time will be allotted for preparation.',
      'Participants are given time duration of 5-6 minutes.',
      'Judges decision is final.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 5,
      max: 5,
    },
    maxTeams: 10,
    organizers: ['Karthikeyen JS - 8838467785', 'Nithya Sri A - 8680917332'],
  },
  title_event: {
    name: 'Title Event - Mr/Ms. Kratos',
    category: 'nontechnical',
    type: 'solo',
    online: false,
    fee: {
      type: 'flat',
      amount: 80,
    },
    description:
      'Title Event is a solo event where each individual will compete for the title of Mr/Ms.Kratos by showcasing their individual talents and spontaneity skills. Participants will be judged on their clarity of thoughts, presentation and personality. Based on how well they answer, the judges will score them and decide who moves on to the next round. According to the performance, points will be awarded. ',
    rules: [
      'It is a SOLO EVENT.',
      'The event will consists of two rounds and the second round will have 2-3 sets.',
      'Every round and set will have an elimination.',
      'The rounds and topics will be decided by the judges, on spot.',
      'Vulgarity of any sort will lead to immediate disqualification.',
      'Judges decision is final.',
      'The winner will be awarded the title of Mr/Ms.Kratos',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 1,
      max: 1,
    },
    maxTeams: 20,
    organizers: ['Jerith Guru – 7358365658', 'S.M.Aditya - 9087582220'],
  },
  cine_quiz: {
    name: 'Cine Quiz',
    category: 'nontechnical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 150,
    },
    description:
      'Calling all movie enthusiasts! Join us for a thrilling evening packed with movie trivia, games, and fun. Whether you’re a casual moviegoer or a dedicated cinephile , this event is your chance to show off your knowledge and passion for film',
    rules: [
      'Each team should contain only 3 members',
      'Judges opinion is final',
      'Total 3 rounds will  conducted',
      'Spot elimination will be done ',
      'Mobile phones and electronic devices are prohibited.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 3,
      max: 3,
    },
    maxTeams: 10,
    organizers: ['Sanjay mathan - 9715118875', 'Thakshinathan M -9487557706'],
  },

  hunger_games: {
    name: 'Hunger Games',
    category: 'nontechnical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 100,
    },
    description:
      'Join us for an epic battle of skill in a thrilling event that echoes the spirit of the Hunger Games! Our Hunger Games-inspired competition features three heart-pounding rounds, each filled with a series of exciting and challenging games. Teams will face off, proving their mettle and determination, with only the best advancing to the final round. In the ultimate showdown, only one team will emerge victorious, claiming the title of our ultimate champions!',
    rules: [
      'This is a team of 2 participants event',
      'Each team has to compete with their co-team in simple games that are anonymous.',
      'There are totally three rounds.',
      'Step by step elimination is done after each round.',
      'Winner is determined at the end of the third round.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 2,
      max: 2,
    },
    maxTeams: 20,
    organizers: ['Srirpiya T - 9789923757', 'Preethi S  - 9789860078'],
  },
  fifa: {
    name: 'Fifa',
    category: 'nontechnical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 100,
    },
    description:
      'Prepare for the ultimate FIFA event! Our electrifying FIFA tournament gathers top teams for exhilarating matches and legendary showdowns. Who will rise as the champions of the pitch?',
    rules: [
      'The tournament features a knockout format for matches.',
      'Top teams are grouped and compete in a round-robin format during the group stage.',
      'Team selection is determined by a coin toss.',
      'Matches will include penalty shootouts to determine a winner and eliminate draws.',
      'Teams must adhere to their allotted time slots; failure to do so may result in the opposing team advancing.',
      'Toxicity is strictly not entertained and will result in elimination of the team.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 2,
      max: 2,
    },
    maxTeams: 16,
    organizers: ['Thansil Mohamed S - 6382443278', 'Sharan M - 7305542590'],
  },
  femscreen: {
    name: 'FemScreen',
    category: 'nontechnical',
    type: 'team',
    online: false,
    fee: {
      type: 'flat',
      amount: 150,
    },
    description:
      'Join us for an empowering event! Watch a short film on womens empowerment, engage in a meaningful discussion, and have fun guessing famous womens names in a charades game. Form teams of three and win prizes for the most correct guesses. Dont miss out!',
    rules: [
      'Form teams of three.',
      'One team member acts out a famous womans name silently.',
      'The other two team members guess the name to score points.',
      'No speaking or using props allowed.',
      'The team with the most correct guesses within the allotted time wins.',
    ],
    prizes: ['TBD', 'TBD', 'TBD'],
    teamSize: {
      min: 3,
      max: 3,
    },
    maxTeams: 15,
    organizers: ['Yemini - 9962701373', 'Deepti - 9445027380'],
  },
}

export const events: Map<string, EventInfo> = new Map(
  Object.entries(eventsLiteral)
)
