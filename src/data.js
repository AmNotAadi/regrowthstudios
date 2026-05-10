export const metrics = [
  { value: "1.8M+", number: 1.8, suffix: "M+", label: "Views on One Reel", platform: "Instagram" },
  { value: "3", number: 3, suffix: "", label: "Creator Channels", platform: "YouTube" },
  { value: "30+", number: 30, suffix: "+", label: "Monthly Assets Available", platform: "Content" },
  { value: "0 -> 100+", number: 100, prefix: "0 -> ", suffix: "+", label: "Organic Followers", platform: "Organic" },
];

export const caseStudies = [
  {
    slug: "buch-media",
    client: "Buch Media Productions",
    category: "Creator post-production",
    platforms: ["YouTube"],
    result: "Post-production workflows for multiple ASMR channels.",
    metrics: ["3 creator channels", "Long-form workflows", "Retention edits"],
    challenge:
      "An England-based production company needed dependable editing workflows across multiple creator channels without losing each channel's tone.",
    strategy:
      "We created repeatable post-production standards for pacing, audio cleanup, visual continuity, and creator-specific delivery expectations.",
    execution:
      "Workflows supported EmilyBlackASMR, DaintyWilderASMR, and CarynBeaumontASMR with consistent quality control.",
    results:
      "The production process became smoother, more reliable, and easier to scale across a portfolio of ASMR creators.",
  },
  {
    slug: "povofaadi",
    client: "POVOfAadi",
    category: "Organic page build",
    platforms: ["Instagram"],
    result: "Built a POV-style Instagram channel around fun moments and luxury lifestyle, with one Reel reaching 1.8M+ views.",
    metrics: ["1.8M+ on one Reel", "2-week breakout", "New account"],
    challenge:
      "POVOfAadi started as a new Instagram page built around POV-style clips, fun moments, and luxury lifestyle content without an established audience.",
    strategy:
      "We shaped the page around scroll-stopping POV scenarios, aspirational lifestyle cues, stronger opening seconds, and formats that felt native to Instagram Reels.",
    execution:
      "Regrowth refined the content direction, editing rhythm, captions, and posting consistency for a new account launched roughly four weeks before the breakout.",
    results:
      "One Instagram Reel reached 1.8M+ views in roughly two weeks, while other videos continued to validate the POV and luxury-lifestyle direction.",
  },
];

export const plans = [
  {
    name: "Launch",
    price: "$500",
    period: "/month",
    description: "For businesses getting started with consistent short-form content.",
    features: [
      "10 short-form videos/month",
      "Hooks + prompts",
      "Professional editing",
      "Captions",
      "Client-provided footage",
      "1-2 revisions",
    ],
  },
  {
    name: "Momentum",
    price: "$800",
    period: "/month",
    description: "Most popular for teams ready to publish with a sharper content rhythm.",
    featured: true,
    features: [
      "20 short-form videos/month",
      "Advanced editing",
      "Content calendar",
      "Posting included",
      "Light scripting",
      "Retention-focused structure",
    ],
  },
  {
    name: "Dominate",
    price: "$1200",
    period: "/month",
    description: "For businesses serious about scale and full content management.",
    features: [
      "30 short-form videos/month",
      "Full scripting",
      "Full management",
      "Advanced editing",
      "Strategy support",
      "Priority delivery",
    ],
  },
];
