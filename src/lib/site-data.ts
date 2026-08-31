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
  cta?: string;
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
  url: "https://annurmw.com",
};

export const heroStats = [
  { label: "Masjid-Madrassah complexes", value: "15+" },
  { label: "Students enrolled", value: "945+" },
  { label: "Farmers supported", value: "1,228+" },
  { label: "Boarding students supported", value: "58" },
  { label: "Management fees", value: "0%" },
];

export const trustPoints = [
  "Registered non-profit",
  "NGO Board of Malawi recognized",
  "CONGOMA member",
  "100% Zakat distribution",
];

export const aboutData = {
  vision: "To create a self-sustaining, empowered, and thriving Muslim community",
  mission:
    "Fostering independence through structured support rooted in Islamic values. We aim to be the “organizational glue” for the Ummah.",
  philosophy: {
    title: "The Madinah Model",
    subtitle: "Vision, Mission & Philosophy",
    statement:
      "Our programs operate on the principle that the Masjid serves as the community center—a hub for advancement where every project is a pathway from dependence to dignity.",
  },
  values: [
    {
      title: "Integrity",
      description:
        "Operating with complete transparency, accountability, and unwavering trust in every intervention and allocation.",
    },
    {
      title: "Empathy",
      description:
        "Deep listening and understanding of community needs, walking hand-in-hand with the families we serve.",
    },
    {
      title: "Sustainability",
      description:
        "Building long-term self-sufficiency rather than short-term dependency through education, farming, and enterprise.",
    },
    {
      title: "Faith",
      description:
        "Rooted in Islamic principles of compassion, dignity, brotherhood, and stewardship for the Ummah.",
    },
  ],
  modelChapters: [
    { label: "01", title: "Masjid", text: "A trusted community anchor and center of advancement." },
    { label: "02", title: "Imam", text: "Leadership that knows the families and local realities by name." },
    { label: "03", title: "Community Mapping", text: "Listening, observing, and engaging before intervention." },
    { label: "04", title: "Need Assessment", text: "The real barriers are identified with deep local context." },
    { label: "05", title: "Training", text: "Families gain practical knowledge, tools, and confidence." },
    { label: "06", title: "Assets", text: "Support becomes productive and regenerative, not only consumable." },
    { label: "07", title: "Income", text: "Skills, land, and assets create enduring household stability." },
    { label: "08", title: "Self-Reliance", text: "Empowered communities return strength and aid back into the system." },
  ],
};

export const featuredPrograms = [
  {
    slug: "education",
    title: "Education",
    summary:
      "Islamic and secular learning through Madrassahs, scholarships, feeding support and community education.",
    cta: "Explore Education",
    icon: "graduation",
    accent: "#2e7fdc",
  },
  {
    slug: "social-welfare",
    title: "Social Welfare",
    summary:
      "Dignified care and targeted support for vulnerable children, families and communities.",
    cta: "Explore Social Welfare",
    icon: "heart",
    accent: "#3e9c64",
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    summary:
      "Skills, productive assets and livelihood pathways that help families build sustainable income.",
    cta: "Explore Economic Empowerment",
    icon: "spark",
    accent: "#8f63d5",
  },
  {
    slug: "agriculture",
    title: "Agricultural Development",
    summary:
      "Practical farming systems that strengthen food security, productivity and long-term household resilience.",
    cta: "Explore Agriculture",
    icon: "leaf",
    accent: "#3e9c64",
  },
] as const;

export const programs: Program[] = [
  {
    slug: "education",
    title: "Education",
    category: "Education",
    summary:
      "Islamic and secular learning through Madrassahs, scholarships, feeding support and community education.",
    details:
      "Education is the foundation of resilience. Through the Masjid-Madrassah Network, feeding support and scholarship pathways, An Nur strengthens learning environments so that every child has access to both Islamic and secular knowledge — and a clearer route toward opportunity.",
    outcomes: [
      "945+ students enrolled",
      "15+ Masjid-Madrassah complexes supported",
      "Scholarship pathways established",
    ],
    metrics: [
      { label: "Students reached", value: "945+" },
      { label: "Institutions supported", value: "15+" },
      { label: "Programme areas", value: "3" },
    ],
    highlights: [
      "Masjid-Madrassah Network",
      "Madrassa Support & Feeding",
      "Scholarships & Knowledge Transfer",
    ],
    imageAlt: "Children and teachers in a madrassah learning environment",
    imagePosition: "center",
    accent: "#2e7fdc",
    cta: "Explore Education",
  },
  {
    slug: "agriculture",
    title: "Agricultural Development",
    category: "Agricultural Development",
    summary:
      "Practical farming systems that strengthen food security, productivity and long-term household resilience.",
    details:
      "Agriculture is treated as a platform for independence, not only survival. Through Sustainable Agriculture, Farm Field Schools, Demonstration Plots, intercropping techniques, compost and soil health training, and Agricultural Extension Training, An Nur helps families improve productivity, diversify crops, and move toward a reliable food and income base.",
    outcomes: [
      "1,228+ farmers supported",
      "Seasonal resilience improved",
      "Community food security strengthened",
    ],
    metrics: [
      { label: "Farmers supported", value: "1,228+" },
      { label: "Approach", value: "Field-based" },
      { label: "Outcome", value: "Income stability" },
    ],
    highlights: [
      "Sustainable Agriculture",
      "Farm Field Schools",
      "Demonstration Plots & Intercropping",
      "Compost & Soil Health",
      "Agricultural Extension Training",
    ],
    imageAlt: "A farmer working in a green agricultural field",
    imagePosition: "center right",
    accent: "#3e9c64",
    cta: "Explore Agriculture",
  },
  {
    slug: "livestock",
    title: "Livestock Rotation Programme",
    category: "Economic Empowerment",
    summary:
      "A rotating asset model — sometimes called the Walking Bank — that circulates productive livestock through households to build shared community wealth.",
    details:
      "The Livestock Rotation Programme (Walking Bank) moves households from dependence to a growing asset base. Livestock is deployed as a rotating community resource: each participating household receives animals, benefits from their productivity, and passes the asset forward — keeping value circulating inside the community with transparency and accountability.",
    outcomes: [
      "Rotating asset model active",
      "Household productivity increased",
      "Shared community benefit created",
    ],
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
    cta: "Explore Livestock Programme",
  },
  {
    slug: "social-welfare",
    title: "Social Welfare",
    category: "Social Welfare",
    summary:
      "Dignified care and targeted support for vulnerable children, families and communities.",
    details:
      "Social welfare is the humane safety net that surrounds families as they move toward longer-term resilience. It connects our Islamic Center with Boarding Facilities, community mapping, targeted Zakaat distribution, and urgent family support into one accountable, faith-rooted response system.",
    outcomes: [
      "58 boarding students supported",
      "Community mapping conducted",
      "Targeted Zakaat distributed",
    ],
    metrics: [
      { label: "Children supported", value: "58" },
      { label: "Approach", value: "Dignified" },
      { label: "Focus", value: "Protection" },
    ],
    highlights: [
      "Islamic Center with Boarding Facilities",
      "Community Mapping",
      "Targeted Zakaat & Family Support",
    ],
    imageAlt: "A family and child in a caring community environment",
    imagePosition: "center",
    accent: "#3e9c64",
    cta: "Explore Social Welfare",
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    category: "Economic Empowerment",
    summary:
      "Skills, productive assets and livelihood pathways that help families build sustainable income.",
    details:
      "Economic Empowerment is where the An Nur model turns support into lasting motion. The programme connects skills training, women-led opportunity, tailoring and vocational development, and practical livelihood pathways so families can build confidence and earning power.",
    outcomes: [
      "Vocational skills delivered",
      "Women-led income pathways created",
      "Household agency strengthened",
    ],
    metrics: [
      { label: "Focus", value: "Livelihoods" },
      { label: "Model", value: "Skills + assets" },
      { label: "Outcome", value: "Agency" },
    ],
    highlights: [
      "Women's Empowerment",
      "Tailoring & Vocational Skills",
      "Livestock Rotation / Walking Bank",
    ],
    imageAlt: "Community members taking part in skills training",
    imagePosition: "center",
    accent: "#8f63d5",
    cta: "Explore Economic Empowerment",
  },
  {
    slug: "womens-empowerment",
    title: "Women's Empowerment",
    category: "Economic Empowerment",
    summary:
      "Women-led training, skills development, and income pathways that strengthen families and broaden community resilience.",
    details:
      "This programme creates practical routes to earning, leadership, and self-confidence while respecting local culture and strengthening family systems. It is a core part of An Nur's Economic Empowerment work and a direct contributor to household stability.",
    outcomes: [
      "Skills training delivered",
      "Income pathways created",
      "Family stability improved",
    ],
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
    cta: "Explore Women's Empowerment",
  },
  {
    slug: "scholarships",
    title: "Scholarships & Knowledge Transfer",
    category: "Education",
    summary:
      "Targeted scholarships for students with clear potential and genuine need, turning promise into a pathway.",
    details:
      "The scholarship model is strategic rather than generic. It identifies students with strong potential, aligns support with transparent selection, and tracks measurable progress — creating a future leadership pipeline for communities.",
    outcomes: [
      "Targeted support provided",
      "Future leaders identified",
      "Clear accountability maintained",
    ],
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
    cta: "Explore Scholarships",
  },
  {
    slug: "orphan-care",
    title: "Islamic Center with Boarding Facilities",
    category: "Social Welfare",
    summary:
      "A safe, structured, and dignified boarding and learning environment providing shelter, education, and holistic care for vulnerable children.",
    details:
      "The Islamic Center with Boarding Facilities sits at the centre of An Nur's social welfare response, combining practical residential boarding support with comprehensive Islamic & secular education, nutrition, and faith-based nurturing. It is a core part of the Social Welfare programme.",
    outcomes: [
      "58 boarding students supported",
      "Full residential boarding care",
      "Madrassah & secular education",
    ],
    metrics: [
      { label: "Boarding students", value: "58" },
      { label: "Care model", value: "Full Boarding" },
      { label: "Outcome", value: "Empowerment" },
    ],
    highlights: [
      "Comprehensive Islamic & secular schooling",
      "Full residential lodging & nutritious meals",
      "Safe, faith-rooted campus community",
    ],
    imageAlt: "Students in a learning environment at the Islamic Center with Boarding Facilities",
    imagePosition: "center",
    accent: "#3e9c64",
    cta: "Explore Boarding Facilities",
  },
  {
    slug: "community-welfare",
    title: "Community Welfare",
    category: "Social Welfare",
    summary:
      "When urgent needs arise, the welfare programme responds with structured compassion and local accountability.",
    details:
      "Community welfare provides the human safety net around the core programmes. It handles immediate family needs — including Zakaat distribution and emergency response — while remaining aligned with the longer arc of self-sufficiency.",
    outcomes: [
      "Emergency needs met",
      "Local trust maintained",
      "Targeted Zakaat distributed",
    ],
    metrics: [
      { label: "Approach", value: "Relational" },
      { label: "Response", value: "Practical" },
      { label: "Tone", value: "Dignified" },
    ],
    highlights: [
      "Rapid local response",
      "Targeted Zakaat & Family Support",
      "Transparent assistance",
    ],
    imageAlt: "A community gathering showing local welfare support",
    accent: "#d7a84a",
    cta: "Explore Community Welfare",
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
    title: "Islamic Center with Boarding Facilities",
    category: "Protection",
    summary:
      "Our Islamic Center with Boarding Facilities provides comprehensive residential care, Islamic education, and dignity for vulnerable children.",
    details:
      "The care model emphasizes consistency and safety. That consistency is what allows a child to trust, learn, and grow with confidence.",
    before: "Unstable support and vulnerability",
    after: "A safer, more stable care environment",
    metrics: ["58 boarding students supported", "Full Boarding Center", "Stable support"],
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
  { slug: "orphan-care", title: "Islamic Center & Boarding" },
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
    title: "Islamic Center Boarding Support",
    category: "orphan-care",
    summary: "Protection, faith education, and continuity for children in our boarding facilities.",
    imageAlt: "Students supported at the Islamic Center with Boarding Facilities",
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
