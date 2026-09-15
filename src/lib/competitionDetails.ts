export type DetailBlock = {
  heading: string;
  items?: string[];
  paragraphs?: string[];
};

export const COMPETITION_DETAILS: Record<
  string,
  { intro: string; blocks: DetailBlock[] }
> = {
  "pixel-play": {
    intro: "Graphic Design Challenge · Individual · 40 minutes",
    blocks: [
      {
        heading: "Format",
        items: [
          "Individual competition.",
          "40-minute poster-making challenge.",
          "Topic/details are revealed on the spot.",
          "The design must be created during the competition.",
        ],
      },
      {
        heading: "Software Allowed",
        items: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Figma",
          "Canva",
          "CorelDRAW",
        ],
      },
      {
        heading: "Internet & Assets",
        items: [
          "Internet is allowed.",
          "Online resources and assets may be used, including Pinterest for inspiration.",
          "Stock images, icons, fonts and previously downloaded assets are allowed.",
          "Previously downloaded assets must not constitute an almost-complete design.",
          "Templates and participants’ previously created work are not allowed.",
        ],
      },
      {
        heading: "AI",
        items: [
          "AI use is strictly prohibited. Direct disqualification applies.",
        ],
      },
      {
        heading: "Submission & Judging",
        items: [
          "Final submission format: PNG.",
          "Source file is not required as a submission, but the working process/source may be checked.",
          "Exporting/uploading is outside the 40-minute timer.",
          "Judging considers creativity, theme adherence, quality, impact and time taken.",
          "Weightage will not be disclosed.",
        ],
      },
    ],
  },

  cluechase: {
    intro: "Treasure Hunt · Teams of up to 4 · Approximately 1 hour",
    blocks: [
      {
        heading: "Eligibility",
        items: [
          "PIT students only.",
          "Outsiders are not allowed.",
        ],
      },
      {
        heading: "Team & Registration",
        items: [
          "Maximum 4 students per team.",
          "Limited entries; first come, first served.",
          "Registration closes once available spots are filled.",
          "The exact maximum number of teams will not be publicly disclosed.",
        ],
      },
      {
        heading: "Qualifying Round",
        items: [
          "A qualifying round takes place before the actual treasure hunt.",
          "The qualifying format/questions will be announced at the appropriate time and will not be disclosed beforehand.",
        ],
      },
      {
        heading: "Main Treasure Hunt",
        items: [
          "Approximate duration: 1 hour.",
          "The actual route will not be disclosed beforehand.",
          "Participants must follow organizer instructions.",
          "The team that successfully completes the treasure hunt first will be the winner.",
        ],
      },
      {
        heading: "Conduct",
        items: [
          "No cheating, abuse or disrespectful behaviour.",
          "Respect participants, volunteers and property.",
          "Follow safety instructions and maintain sportsmanlike conduct.",
        ],
      },
    ],
  },

  "frame-and-focus": {
    intro: "Photography + Videography · Mobile camera only",
    blocks: [
      {
        heading: "Photography",
        items: [
          "Individual competition.",
          "Mobile camera only; DSLR/mirrorless cameras and external lenses are not allowed.",
          "Theme is revealed on the spot.",
          "Shoot, edit if required and submit within 1 hour.",
          "Editing is allowed; any editing app/software may be used.",
          "Lightroom, Photoshop and presets are allowed.",
          "AI use is not allowed.",
          "Submission may be in any image format.",
          "Number of photographs depends on the theme and will be announced accordingly.",
        ],
      },
      {
        heading: "Videography + Editing",
        items: [
          "Individual competition.",
          "Mobile camera only; DSLR/mirrorless cameras are not allowed.",
          "Theme is revealed on the spot.",
          "2 hours to shoot, edit and submit.",
          "Video format/aspect ratio is not restricted.",
          "External microphones, stock/downloaded music and existing fonts/assets are allowed.",
          "Any editing software may be used. Templates are allowed, although avoiding them is recommended.",
          "AI editing is not allowed.",
          "Previously recorded clips are not allowed; all footage must be shot during the competition.",
          "Maximum video duration depends on the theme and will be announced on the spot.",
        ],
      },
    ],
  },

  "cook-off": {
    intro: "Maggi Innovation Challenge · Duo · 60 minutes",
    blocks: [
      {
        heading: "Eligibility",
        items: [
          "Only 1st and 2nd year students can participate.",
          "Both members must belong to Biotechnology, Food Technology or Dairy Technology and meet the eligibility requirements.",
        ],
      },
      {
        heading: "Format",
        items: [
          "2 participants per team.",
          "Total time: 60 minutes, including preparation, cooking, plating and cleanup.",
          "Each duo receives 1 Maggi packet from the organizers and the entire packet must be used.",
          "Create your own variation of Maggi.",
        ],
      },
      {
        heading: "Ingredients & Equipment",
        items: [
          "Fresh, properly sealed/packaged shop-bought ingredients such as dairy products, condiments, vegetables and herbs may be brought.",
          "Any other ingredient requires prior organizer approval.",
          "Basic cooking equipment is provided.",
          "Special/additional equipment requires prior approval.",
        ],
      },
      {
        heading: "Preparation & Judging",
        items: [
          "The dish must be prepared during the competition; no pre-prepared food/components are allowed.",
          "Commercial ready-made ingredients such as permitted sauces/condiments may be used.",
          "Workstations must be left clean and orderly.",
          "Judging considers taste, creativity/originality, presentation, execution, use of ingredients, time management and overall concept.",
          "Weightage will not be disclosed.",
        ],
      },
      {
        heading: "Safety",
        items: [
          "Follow all safety instructions.",
          "Unsafe or irresponsible behaviour may result in penalty or disqualification.",
          "Jury’s decision is final.",
        ],
      },
    ],
  },

  "robo-fight": {
    intro: "Sumo Robot Fight · Teams of 2–3 · 3-minute matches",
    blocks: [
      {
        heading: "Team",
        items: [
          "2–3 participants per team.",
        ],
      },
      {
        heading: "Robot Specifications",
        items: [
          "Maximum weight: 800 g.",
          "Weight tolerance: 5%.",
          "Maximum dimensions: 20 × 20 cm.",
          "Dimension tolerance: 5%.",
        ],
      },
      {
        heading: "Match",
        items: [
          "Continuous 3-minute match between two robots.",
          "Objective: force the opponent outside the designated area.",
          "A robot is eliminated if it crosses the arena boundary or does not move continuously for 10 seconds.",
          "If neither crosses the boundary after 3 minutes, the robot that touched the border line more times is eliminated.",
        ],
      },
      {
        heading: "Control & Power",
        items: [
          "Wired or wireless control is allowed.",
          "Wired control requires a wire at least 1 metre long.",
          "No power restrictions.",
          "Participants arrange their own power requirements; organizers do not provide electricity, plug points or other equipment.",
        ],
      },
      {
        heading: "Inspection",
        items: [
          "Both robots undergo inspection before their match.",
          "Weight and dimensions will be checked.",
          "Arena design/dimensions will be announced during the competition.",
          "No restrictions on mechanisms; creative designs are encouraged.",
        ],
      },
    ],
  },

  "battle-royale": {
    intro: "BGMI + VALORANT · Online Qualifiers · Two Sub-Categories",
    blocks: [
      {
        heading: "BGMI — Team & Schedule",
        items: [
          "Team-based competition with 4 members per team.",
          "Online knockout rounds take place between 16-17 September; exact dates will be communicated beforehand.",
          "Finale: 18 September, on campus.",
          "Teams are divided into groups of 25 based on registrations.",
          "Each group plays 1 maps.",
          "Finale will consist of 2 maps only",
          "20 teams qualify for the finale.",
        ],
      },
      {
        heading: "BGMI — Scoring",
        items: [
          "Placement points: #1 - 10, #2 - 8, #3 - 7, #4 - 6, #5 - 5, #6 - 4, #7 - 3, #8 - 2, #9 - 1.",
          "1 point per kill in the regular tournament.",
          "In the first finale map (Rondo), each kill gives 2 points; remaining finale maps use 1 point per kill.",
          "Qualification is based on total score. Tie-breakers: Chicken Dinner, then Kills.",
          "Points table is updated after every match.",
        ],
      },
      {
        heading: "BGMI — Rooms & Devices",
        items: [
          "Knockouts use normal custom rooms; finale uses advanced custom rooms.",
          "A specific 10-minute joining window is provided before each game.",
          "Only mobile phones: Android or iPhone. Tablets/iPads are not allowed.",
          "Disconnects do not restart the match; remaining connected players continue.",
        ],
      },
      {
        heading: "VALORANT — Format",
        items: [
          "5 players per team.",
          "Online knockout competition between 16–17 September; exact dates communicated beforehand.",
          "Minimum 10 teams are required.",
          "Final is either BO3 or BO5 depending on available time.",
          "Map ban/selection and toss are handled through mapban.gg.",
        ],
      },
      {
        heading: "VALORANT — Conduct",
        items: [
          "Network issues may put a game on hold for a maximum of 5 minutes; no repeated timeout is provided.",
          "No hacks, unauthorized modifications, cheating or glitch exploitation.",
          "Follow game rules and policies.",
          "Offensive language, symbols and disrespectful behaviour are prohibited.",
          "Teams are responsible for their own network connectivity.",
        ],
      },
    ],
  },

  codecraft: {
    intro: "Vibe Coding + Debugging · Draw a chit to determine your category",
    blocks: [
      {
        heading: "Format",
        items: [
          "Individual competition.",
          "Participants draw a chit to determine whether they compete in Vibe Coding or Debugging.",
          "Each category has a 1-hour time limit.",
        ],
      },
      {
        heading: "Vibe Coding",
        items: [
          "Actual challenge is revealed on the spot.",
          "Build the required project from scratch.",
          "Systems are provided by organizers; participants do not need to bring their own laptops.",
          "AI and internet are allowed.",
          "Personal accounts on AI/development platforms cannot be used during the competition.",
          "Pre-built projects, templates and previously created work are not allowed.",
          "Submit a GitHub repository link; the repository will be checked.",
          "Final project must be live/deployed using Vercel or another suitable free hosting platform.",
          "Exact technology restrictions, allowed AI tools, libraries, external-code rules, judging criteria and detailed submission procedure will be announced by organizers.",
        ],
      },
      {
        heading: "Debugging",
        items: [
          "15 debugging questions across C, C++, Python and Java.",
          "2 marks per correct answer; 30 marks total; no negative marking.",
          "Internet, AI, Google/search engines and online documentation are not allowed.",
          "Participants may use the compiler/interpreter available on their system to test solutions.",
          "Questions may be solved in any order, but answers must be written in proper question order.",
          "Handwritten answer sheet with manual evaluation.",
          "Tie-breaker will be determined by the jury/organizers.",
        ],
      },
    ],
  },

  traitor: {
    intro: "Traitors-style social deduction · Individual · Approximately 2 hours",
    blocks: [
      {
        heading: "Basic Format",
        items: [
          "PIT students only.",
          "Individual competition with limited entries; first come, first served.",
          "Reality-show-inspired social deduction with tasks, discussions, accusations, voting and eliminations.",
          "One overall winner; jury decides the winner.",
        ],
      },
      {
        heading: "Game Structure",
        items: [
          "Participants receive secret roles: Traitors or Innocents.",
          "Multiple tasks/challenges and eliminations through different game mechanisms.",
          "Circle of Shak discussion/voting phase with public voting.",
          "Voting is mandatory for surviving participants.",
          "Eliminated players leave the game and their own role is revealed.",
          "Eliminated players may not reveal the identity of other players/roles.",
        ],
      },
      {
        heading: "Discussion & Conduct",
        items: [
          "Players may discuss, accuse, defend themselves, form alliances and lie about their role.",
          "Private discussions are not allowed.",
          "Shouting is prohibited; arguments and defenses must be calm and formal.",
          "Foul language, physical fights or misconduct result in immediate disqualification.",
          "Follow Host/Jury instructions.",
        ],
      },
      {
        heading: "After Elimination",
        items: [
          "Reveal your own role when instructed.",
          "Immediately leave the room/play area.",
          "Do not communicate or text remaining players.",
          "Do not stand near windows/areas to communicate with active players.",
          "Do not re-enter the play area until the game concludes.",
        ],
      },
      {
        heading: "Jury",
        items: [
          "Jury/Host controls the game.",
          "Jury’s decision is final and binding.",
        ],
      },
    ],
  },
};
