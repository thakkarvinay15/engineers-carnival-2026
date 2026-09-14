export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Competitions", href: "/competitions" },
  { label: "Schedule", href: "/schedule" },
  { label: "Awards", href: "/prizes" },
  { label: "About", href: "/about" },
  { label: "Rules", href: "/rules" },
  { label: "Contact", href: "/contact" },
] as const;

export const COMPETITIONS = [
  {
    number: "01",
    name: "TRAITOR",
    slug: "traitor",
    tag: "LIMITED ENTRIES",
  },
  {
    number: "02",
    name: "ROBO FIGHT",
    slug: "robo-fight",
    tag: "LIMITED ENTRIES",
  },
  {
    number: "03",
    name: "BATTLE ROYALE",
    slug: "battle-royale",
    tag: null,
  },
  {
    number: "04",
    name: "COOK-OFF",
    slug: "cook-off",
    tag: "LIMITED ENTRIES",
  },
  {
    number: "05",
    name: "CLUECHASE",
    slug: "cluechase",
    tag: "LIMITED ENTRIES",
  },
  {
    number: "06",
    name: "CODECRAFT",
    slug: "codecraft",
    tag: null,
  },
  {
    number: "07",
    name: "FRAME & FOCUS",
    slug: "frame-and-focus",
    tag: null,
  },
  {
    number: "08",
    name: "PIXEL PLAY",
    slug: "pixel-play",
    tag: null,
  },
] as const;

export type Competition = (typeof COMPETITIONS)[number];

export const REGISTRATION_LINKS = {
  traitor: [
    {
      label: "Register for Traitor",
      href: "https://forms.gle/M8FLUrERw1M7gjQg6",
    },
  ],

  "robo-fight": [
    {
      label: "Register for Robo Fight",
      href: "https://forms.gle/mpcJMuJQByAA9TPH9",
    },
  ],

  "battle-royale": [
    {
      label: "VALORANT Registration",
      href: "https://forms.gle/rmzMT9Vk3wduoy9N9",
    },
    {
      label: "BGMI Registration",
      href: "https://forms.gle/GvHKh6QdqRzCLjxk6",
    },
  ],

  "cook-off": [
    {
      label: "Register for Cook-Off",
      href: "https://forms.gle/ocw9pVx7nX4YGERy7",
    },
  ],

  cluechase: [
    {
      label: "Register for ClueChase",
      href: "https://forms.gle/jKqzJQCvxkCqe4gi8",
    },
  ],

  codecraft: [
    {
      label: "Register for CodeCraft",
      href: "https://forms.gle/Pzt6Ga9RXnDtr8Q77",
    },
  ],

  "frame-and-focus": [
    {
      label: "Register for Frame & Focus",
      href: "https://forms.gle/WDTN4MVm3M7m5eYu6",
    },
  ],

  "pixel-play": [
    {
      label: "Register for Pixel Play",
      href: "https://forms.gle/PqaFtuNk7tYZVTWs7",
    },
  ],
} as const;

export type RegistrationLink = {
  label: string;
  href: string;
};

export const EVENT_STRIP = [
  "08 COMPETITIONS",
  "01 FULL DAY",
  "PIT CAMPUS",
  "CREATIVITY + SKILL",
] as const;

export function getCompetitionBySlug(
  slug: string
): Competition | undefined {
  return COMPETITIONS.find((comp) => comp.slug === slug);
}

export function getRegistrationLinks(
  slug: string
): readonly RegistrationLink[] {
  return REGISTRATION_LINKS[
    slug as keyof typeof REGISTRATION_LINKS
  ] ?? [];
}