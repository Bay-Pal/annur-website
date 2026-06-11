export type ImpactMetric = {
  label: string;
  value: string;
};

export type StoryImage = {
  src: string;
  alt: string;
};

export type ImpactStory = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  featuredImage: string;
  imageAlt: string;
  galleryImages: StoryImage[];
  category: string;
  relatedProgram: string;
  location: string;
  beneficiaryName: string;
  impactMetrics: ImpactMetric[];
  beforeSummary: string;
  afterSummary: string;
  publishedDate: string;
  updatedDate: string;
  featured: boolean;
  status: "draft" | "published";
  seoTitle: string;
  seoDescription: string;
  openGraphImage: string;
  tags: string[];
};

export type MarkdownBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string };
