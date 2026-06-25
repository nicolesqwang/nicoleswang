export type Hobby = {
  slug: string;
  title: string;
  bg: string;
  accent: string;
  since: string;
  blurb: string;
  notable: string;
  tools: string[];
};

export const HOBBIES: Hobby[] = [
  {
    slug: "oil-painting",
    title: "Oil Painting",
    bg: "#F0D6DB",
    accent: "#E3AEB8",
    since: "Since 2021",
    blurb:
      "I picked up a brush during a slow summer and never really put it down. Most of what I paint is small and impressionistic: fruit, flowers, whatever's sitting on the table that week.",
    notable:
      "Still very much a hobbyist. Current goal is finishing a full series instead of starting a new canvas every time I get distracted.",
    tools: ["Oil paint", "Canvas panels", "Palette knife", "Linseed oil"],
  },
  {
    slug: "digital-painting",
    title: "Digital Painting",
    bg: "#CBDDDF",
    accent: "#8FB6C2",
    since: "Since 2020",
    blurb:
      "Digital lets me undo, which is exactly why I like it. I mostly sketch portraits and moody lighting studies when I want to draw without committing to a single mistake.",
    notable: "Working on getting faster. Most pieces still take me embarrassingly long.",
    tools: ["Procreate", "iPad", "Apple Pencil", "Photoshop"],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    bg: "#D9CFEF",
    accent: "#B8A8E0",
    since: "Since 2019",
    blurb:
      "I edit recap videos, trip montages, anything with a beat I can cut to. It's the hobby that sneaks into my actual work the most.",
    notable:
      "Cut a few videos that got passed around more than expected. Nothing viral, just nice to hear back from people.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
  },
  {
    slug: "photography",
    title: "Photography",
    bg: "#D7C59F",
    accent: "#BFA478",
    since: "Since 2018",
    blurb:
      "Mostly film, mostly people. I like the forced patience of not knowing how a shot turned out until weeks later.",
    notable: "Slowly building toward shooting a friend's event start to finish on film.",
    tools: ["35mm film camera", "Digital mirrorless", "Lightroom"],
  },
  {
    slug: "dance",
    title: "Dance",
    bg: "#E3AEB8",
    accent: "#C9788A",
    since: "Since 2017",
    blurb:
      "Grew up doing fan dance and have stuck with different forms of performance dance since. It's the most reliably joyful hour of my week.",
    notable: "Performed in a handful of showcases. Always down to learn a new style.",
    tools: ["Fan dance", "K-pop choreo", "Freestyle"],
  },
  {
    slug: "crochet",
    title: "Crochet",
    bg: "#F1F0C8",
    accent: "#D8C76A",
    since: "Since 2022",
    blurb:
      "Started with a scarf that took four months. Now mostly small things: granny squares, little stuffed animals, gifts for friends.",
    notable: "Goal this year is finishing an actual sweater instead of abandoning it at the sleeves.",
    tools: ["Crochet hook", "Yarn", "Stitch markers"],
  },
  {
    slug: "new-eats",
    title: "Trying New Eats",
    bg: "#ECE9BE",
    accent: "#D8C27A",
    since: "Always",
    blurb:
      "Always hunting for the next must-try restaurant or hole-in-the-wall spot. Ramen, dumplings, whatever has a line out the door, I'm probably already on the waitlist.",
    notable: "Keeping a running list of spots to try next. It never gets shorter.",
    tools: ["Yelp & Google Maps lists", "Waitlist apps", "An appetite for risk"],
  },
  {
    slug: "travel",
    title: "Travel",
    bg: "#C3C7A6",
    accent: "#8E9568",
    since: "Ongoing",
    blurb:
      "Always planning the next trip before finishing the photos from the last one. Drawn to anywhere with good light and good food.",
    notable: "Working through a loose list of national parks and night markets.",
    tools: ["Film camera", "A notebook that never gets enough use", "Google Maps lists"],
  },
];
