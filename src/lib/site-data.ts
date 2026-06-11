export type Program = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  imageAlt: string;
  imagePosition?: string;
  accent: string;
};

export type Story = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  before: string;
  after: string;
  metrics: string[];
  related: string;
  imageAlt: string;
  imagePosition?: string;
};

export type GalleryItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  imageAlt: string;
  imagePosition?: string;
  wide?: boolean;
  tall?: boolean;
};

export type Partner = {
  slug: string;
  name: string;
  summary: string;
  details: string;
  mark: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const site = {
  name: "AN NUR Charity Foundation",
  shortName: "AN NUR",
  tagline: "Beyond charity. Building self-reliant communities.",
  description:
    "An Nur Charity Foundation empowers communities in Malawi through education, agriculture, social welfare, and economic dignity.",
  url: "https://annurcharityfoundation.org",
};

export const heroStats = [
  { label: "Masjid-Madrassah complexes", value: "15+" },
  { label: "Students enrolled", value: "945+" },
  { label: "Farmers supported", value: "1,228+" },
  { label: "Orphans supported", value: "58" },
  { label: "Management fees", value: "0%" },
];

export const trustPoints = [
  "Registered non-profit",
  "NGO Board of Malawi recognized",
  "CONGOMA member",
  "100% Zakat distribution",
];

export const featuredPrograms = [
  {
    slug: "education",
    title: "Education",
    summary:
      "Islamic and secular education through madrassahs and schools.",
    icon: "graduation",
    accent: "#2e7fdc",
  },
  {
    slug: "social-welfare",
    title: "Social Welfare",
    summary:
      "Orphan care, community support, and social well-being.",
    icon: "heart",
    accent: "#3e9c64",
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    summary:
      "Skills training, vocational programs, and entrepreneurship support.",
    icon: "spark",
    accent: "#8f63d5",
  },
  {
    slug: "agriculture",
    title: "Agricultural Development",
    summary:
      "Sustainable farming, training, and food security initiatives.",
    icon: "leaf",
    accent: "#3e9c64",
  },
] as const;

export const programs: Program[] = [
  {
    slug: "education",
    title: "Education & Madrassah Support",
    category: "Knowledge",
    summary:
      "We strengthen madrassahs, support learning environments, and connect students to opportunities that lift households long-term.",
    details:
      "Education is the foundation of resilience. The program strengthens masjid-madrassah complexes, improves learning conditions, and creates a bridge between religious education, school access, and future livelihood options.",
    outcomes: [
      "945+ students enrolled",
      "Madrassah development",
      "Scholarship pathways",
    ],
    metrics: [
      { label: "Students reached", value: "945+" },
      { label: "Institutions supported", value: "15+" },
      { label: "Growth focus", value: "Literacy and faith" },
    ],
    highlights: [
      "Teacher and imam collaboration",
      "Support for books, materials, and classrooms",
      "Scholarship-ready support structure",
    ],
    imageAlt: "Children and teachers in a madrassah learning environment",
    imagePosition: "center",
    accent: "#2e7fdc",
  },
  {
    slug: "agriculture",
    title: "Sustainable Agriculture",
    category: "Food systems",
    summary:
      "From soil to market, we invest in farming systems that improve food security and turn land into a source of dignity.",
    details:
      "Agriculture is treated as a platform for independence, not only survival. The program helps families improve productivity, diversify crops, and move toward a reliable food and income base.",
    outcomes: ["1,228+ farmers supported", "Seasonal resilience", "Community food security"],
    metrics: [
      { label: "Farmers supported", value: "1,228+" },
      { label: "Model shift", value: "Sustainable" },
      { label: "Outcome", value: "Income stability" },
    ],
    highlights: [
      "Practical field training",
      "Market-aware planning",
      "Long-term household resilience",
    ],
    imageAlt: "A farmer working in a green agricultural field",
    imagePosition: "center right",
    accent: "#3e9c64",
  },
  {
    slug: "livestock",
    title: "Livestock Rotation Program",
    category: "Assets",
    summary:
      "Livestock is deployed as a rotating asset that spreads value, grows household assets, and creates a community cycle of benefit.",
    details:
      "The livestock initiative is designed to move households from dependence to a growing asset base. It creates a practical and transparent rotation model that keeps value circulating inside the community.",
    outcomes: ["Rotating asset model", "Household productivity", "Shared community benefit"],
    metrics: [
      { label: "Model", value: "Rotation" },
      { label: "Focus", value: "Asset building" },
      { label: "Benefit", value: "Shared dignity" },
    ],
    highlights: [
      "Transparent asset rotation",
      "Household-level growth",
      "Community ownership model",
    ],
    imageAlt: "A farmer in a field representing livestock and agricultural assets",
    imagePosition: "center",
    accent: "#d7a84a",
  },
  {
    slug: "social-welfare",
    title: "Social Welfare",
    category: "Care systems",
    summary:
      "Social welfare surrounds families with dignified support, orphan care, emergency response, and community-based protection.",
    details:
      "The social welfare pillar protects dignity while families move toward longer-term resilience. It connects orphan care, urgent community needs, local trust, and transparent support into one humane response system.",
    outcomes: ["58 orphans supported", "Community care", "Dignified response"],
    metrics: [
      { label: "Children supported", value: "58" },
      { label: "Approach", value: "Dignified" },
      { label: "Focus", value: "Protection" },
    ],
    highlights: [
      "Orphan care and child protection",
      "Community welfare response",
      "Faith-rooted compassion with accountability",
    ],
    imageAlt: "A family and child in a caring community environment",
    imagePosition: "center",
    accent: "#3e9c64",
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    category: "Livelihoods",
    summary:
      "Skills, training, assets, and income pathways help families move from short-term relief toward household agency.",
    details:
      "Economic empowerment is where the An Nur model turns support into motion. The program connects training, women-led opportunity, asset thinking, and practical livelihood pathways so families can build confidence and earning power.",
    outcomes: ["Skills training", "Income pathways", "Asset thinking"],
    metrics: [
      { label: "Focus", value: "Livelihoods" },
      { label: "Model", value: "Skills + assets" },
      { label: "Outcome", value: "Agency" },
    ],
    highlights: [
      "Vocational and skills development",
      "Women-led livelihood pathways",
      "Practical routes from training to income",
    ],
    imageAlt: "Community members taking part in skills training",
    imagePosition: "center",
    accent: "#8f63d5",
  },
  {
    slug: "womens-empowerment",
    title: "Women's Empowerment",
    category: "Economic dignity",
    summary:
      "Women-led training, skills development, and income pathways help strengthen families and broaden community resilience.",
    details:
      "This program creates practical routes to earning, leadership, and self-confidence while respecting local culture and strengthening family systems.",
    outcomes: ["Skills training", "Income pathways", "Family stability"],
    metrics: [
      { label: "Focus", value: "Women-led" },
      { label: "Outcome", value: "Confidence" },
      { label: "Long-term", value: "Household uplift" },
    ],
    highlights: [
      "Training and mentoring",
      "Micro-enterprise readiness",
      "Community-based dignity",
    ],
    imageAlt: "Women participating in a community empowerment initiative",
    imagePosition: "center",
    accent: "#8f63d5",
  },
  {
    slug: "scholarships",
    title: "Strategic Scholarships",
    category: "Opportunity",
    summary:
      "Scholarships are targeted toward students with clear potential and genuine need, turning promise into a pathway.",
    details:
      "The scholarship model is strategic rather than generic. It identifies students with strong potential and aligns support with transparent selection and measurable progress.",
    outcomes: ["Targeted support", "Future leaders", "Clear accountability"],
    metrics: [
      { label: "Focus", value: "Merit + need" },
      { label: "Outcome", value: "Access" },
      { label: "Vision", value: "Leadership" },
    ],
    highlights: [
      "Need-aware selection",
      "Clear progression tracking",
      "Future leadership pipeline",
    ],
    imageAlt: "A student holding books at a learning center",
    accent: "#2e7fdc",
  },
  {
    slug: "orphan-care",
    title: "Orphan Care",
    category: "Protection",
    summary:
      "We create a safe and stable support structure for children whose lives should not be defined by loss.",
    details:
      "Orphan care sits at the center of the organization's social welfare response, combining practical support with a humane, family-aware, and faith-based care model.",
    outcomes: ["58 orphans supported", "Residential care", "Dignified support"],
    metrics: [
      { label: "Children supported", value: "58" },
      { label: "Care focus", value: "Safety" },
      { label: "Outcome", value: "Belonging" },
    ],
    highlights: [
      "Physical and emotional care",
      "Long-term support structure",
      "Stable family-like environment",
    ],
    imageAlt: "A mother and child in a community care setting",
    imagePosition: "center",
    accent: "#3e9c64",
  },
  {
    slug: "community-welfare",
    title: "Community Welfare",
    category: "Social care",
    summary:
      "When urgent needs appear, the welfare program responds with structured compassion and local accountability.",
    details:
      "Community welfare provides the human safety net around the core programs. It handles immediate needs while still aligning with the longer arc of self-sufficiency.",
    outcomes: ["Emergency response", "Local support", "Community trust"],
    metrics: [
      { label: "Approach", value: "Relational" },
      { label: "Response", value: "Practical" },
      { label: "Tone", value: "Dignified" },
    ],
    highlights: [
      "Rapid local response",
      "Dignified support pathways",
      "Transparent assistance",
    ],
    imageAlt: "A community gathering showing local welfare support",
    accent: "#d7a84a",
  },
];

export const stories: Story[] = [
  {
    slug: "farmer-transformation",
    title: "Farmer Transformation",
    category: "Agriculture",
    summary:
      "A farmer moves from vulnerability to measurable growth when training, support, and asset thinking are combined.",
    details:
      "This story captures the program logic: meet a family where they are, improve the toolset, and keep value circulating within the community. The result is not only more food but more confidence and forward motion.",
    before: "Unstable harvests and limited market access",
    after: "Reliable farming income and household confidence",
    metrics: ["1,228+ farmers supported", "Resilience through agriculture", "Income stability"],
    related: "agriculture",
    imageAlt: "A successful farmer in a field of green crops",
  },
  {
    slug: "student-success",
    title: "Student Success",
    category: "Education",
    summary:
      "Education becomes a long-term asset when students are supported with structure instead of one-off aid.",
    details:
      "The student story is designed to show the value of continuity. The combination of learning support, faith-based context, and long-term planning helps students move from potential into momentum.",
    before: "Limited classroom access and uncertain pathways",
    after: "A clearer route through madrassah and scholarship support",
    metrics: ["945+ students enrolled", "Scholarship pipeline", "Educational continuity"],
    related: "education",
    imageAlt: "Students studying together in a classroom",
  },
  {
    slug: "womens-training",
    title: "Women's Training",
    category: "Empowerment",
    summary:
      "Women's empowerment is treated as a family-strengthening investment, not a side activity.",
    details:
      "The story highlights dignity and agency. Training creates new options, which then ripple through the household and the wider community.",
    before: "Dependence on unstable informal work",
    after: "Skills, income pathways, and household influence",
    metrics: ["Women-led training", "Family uplift", "Micro-enterprise readiness"],
    related: "womens-empowerment",
    imageAlt: "Women in training and community empowerment",
  },
  {
    slug: "livestock-cycle",
    title: "Livestock Cycle",
    category: "Assets",
    summary:
      "Assets can be shared without losing dignity when the system is designed to rotate and multiply value.",
    details:
      "The livestock program is a practical illustration of the organization's philosophy: aid should not end with consumption, it should create movement toward ownership.",
    before: "No productive asset base",
    after: "A rotating, community-benefiting livestock model",
    metrics: ["Rotating asset model", "Shared value", "Accountable structure"],
    related: "livestock",
    imageAlt: "A livestock and farming asset program in action",
  },
  {
    slug: "madrassah-development",
    title: "Madrassah Development",
    category: "Education",
    summary:
      "Madrassah development is central because it sits at the intersection of faith, education, and community trust.",
    details:
      "Strengthening a madrassah is not just an infrastructure project. It is a community investment that shapes identity, learning, and leadership for the next generation.",
    before: "Under-resourced learning environments",
    after: "Better-supported places for learning, worship, and growth",
    metrics: ["15+ complexes", "Faith-rooted education", "Local trust"],
    related: "education",
    imageAlt: "A newly supported madrassah learning environment",
  },
  {
    slug: "orphan-care-story",
    title: "Orphan Care",
    category: "Protection",
    summary:
      "Orphan care is presented as a responsibility to protect dignity, not only a service to provide necessities.",
    details:
      "The care model emphasizes consistency and safety. That consistency is what allows a child to trust, learn, and grow with confidence.",
    before: "Unstable support and vulnerability",
    after: "A safer, more stable care environment",
    metrics: ["58 children supported", "Residential care", "Stable support"],
    related: "orphan-care",
    imageAlt: "A protected care environment for vulnerable children",
  },
];

export const galleryCategories = [
  { slug: "all", title: "All" },
  { slug: "agriculture", title: "Agriculture" },
  { slug: "madrassah", title: "Madrassah" },
  { slug: "masjids", title: "Masjids" },
  { slug: "students", title: "Students" },
  { slug: "women", title: "Women" },
  { slug: "orphan-care", title: "Orphan Care" },
  { slug: "community-events", title: "Community Events" },
  { slug: "livestock", title: "Livestock" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    slug: "harvest-day",
    title: "Harvest Day",
    category: "agriculture",
    summary: "Training, planning, and field support in action.",
    imageAlt: "A farmer harvesting healthy green crops",
    imagePosition: "center right",
    wide: true,
  },
  {
    slug: "learning-circles",
    title: "Learning Circles",
    category: "students",
    summary: "Madrassah learning that keeps culture and opportunity together.",
    imageAlt: "Students studying in a learning circle",
    imagePosition: "center",
    tall: true,
  },
  {
    slug: "women-in-training",
    title: "Women in Training",
    category: "women",
    summary: "Skills, agency, and practical income pathways.",
    imageAlt: "Women participating in training",
  },
  {
    slug: "masjid-complex",
    title: "Masjid Complex",
    category: "masjids",
    summary: "Places of worship that also serve as anchors of community life.",
    imageAlt: "A mosque and community complex",
  },
  {
    slug: "community-gathering",
    title: "Community Gathering",
    category: "community-events",
    summary: "Local planning with local people at the center.",
    imageAlt: "A community meeting outdoors",
    tall: true,
  },
  {
    slug: "livestock-rotation",
    title: "Livestock Rotation",
    category: "livestock",
    summary: "Assets circulate and create shared benefit.",
    imageAlt: "Livestock related community asset program",
  },
  {
    slug: "orphan-care-support",
    title: "Orphan Care Support",
    category: "orphan-care",
    summary: "Protection, dignity, and continuity for vulnerable children.",
    imageAlt: "Children receiving orphan care support",
  },
  {
    slug: "madrassah-development",
    title: "Madrassah Development",
    category: "madrassah",
    summary: "Investment in learning spaces and leadership formation.",
    imageAlt: "A madrassah classroom and students",
    wide: true,
  },
];

export const partners: Partner[] = [
  {
    slug: "iera",
    name: "iERA",
    mark: "i",
    summary: "Partnering around da'wah, education, and community strengthening.",
    details:
      "A values-aligned collaboration around outreach, learning, and holistic community development.",
  },
  {
    slug: "international-open-university",
    name: "International Open University",
    mark: "IO",
    summary: "Linking learning opportunities to long-term leadership development.",
    details:
      "A partnership that strengthens educational access and future leadership pathways.",
  },
  {
    slug: "imam-development-programme",
    name: "Imam Development Programme",
    mark: "ID",
    summary: "Supporting leaders who anchor trust at the heart of communities.",
    details:
      "An initiative centered on leadership, trust, and the role of the masjid in community life.",
  },
  {
    slug: "united-mercy",
    name: "United Mercy",
    mark: "UM",
    summary: "A values-aligned partner in social good and practical uplift.",
    details:
      "A partnership grounded in compassion, service, and practical community transformation.",
  },
];

export const faqs: Faq[] = [
  {
    question: "Do you accept online donations now?",
    answer:
      "Not yet. The site already includes donation CTAs and a modal that says online donations are coming soon, which keeps the future payment integration easy to add.",
  },
  {
    question: "Can this design grow into a CMS later?",
    answer:
      "Yes. The content is already separated into data objects, so moving to Sanity, Payload, Strapi, Contentful, Supabase, or a custom admin panel would be straightforward.",
  },
  {
    question: "What makes the site different from a typical NGO template?",
    answer:
      "It uses premium editorial pacing, strong visual hierarchy, a trust-first narrative, and content structure built around transformation, not generic fundraising.",
  },
  {
    question: "Is the contact and donation flow ready for future gateways?",
    answer:
      "Yes. The UI has clear hooks for Stripe, PayPal, Flutterwave, bank transfer, and a custom gateway without redesigning the layout later.",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((item) => item.slug === slug);
}

export function getStoryBySlug(slug: string) {
  return stories.find((item) => item.slug === slug);
}

export function getGalleryBySlug(slug: string) {
  return galleryItems.find((item) => item.slug === slug);
}

export function getGalleryCategoryBySlug(slug: string) {
  return galleryCategories.find((item) => item.slug === slug);
}

export function getPartnerBySlug(slug: string) {
  return partners.find((item) => item.slug === slug);
}
