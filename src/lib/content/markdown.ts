import fs from "node:fs";
import path from "node:path";
import type { ImpactMetric, ImpactStory, MarkdownBlock, StoryImage } from "./types";

const contentDirectory = path.join(process.cwd(), "content", "impact-stories");

type FrontmatterValue = string | boolean | string[] | Record<string, string>[];

function stripQuotes(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseScalar(value: string): string | boolean | string[] | Record<string, string>[] {
  const clean = stripQuotes(value);
  if (clean === "true") return true;
  if (clean === "false") return false;
  if (clean.startsWith("[") || clean.startsWith("{")) {
    return JSON.parse(clean) as string[] | Record<string, string>[];
  }
  return clean;
}

function parseFrontmatter(frontmatter: string) {
  const lines = frontmatter.split(/\r?\n/);
  const data: Record<string, FrontmatterValue> = {};
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyMatch) {
      index += 1;
      continue;
    }

    const [, key, inlineValue] = keyMatch;

    if (inlineValue) {
      data[key] = parseScalar(inlineValue);
      index += 1;
      continue;
    }

    const items: Array<string | Record<string, string>> = [];
    index += 1;

    while (index < lines.length && lines[index].startsWith("  -")) {
      const itemLine = lines[index].replace(/^  -\s*/, "");
      const objectMatch = itemLine.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

      if (!objectMatch) {
        items.push(stripQuotes(itemLine));
        index += 1;
        continue;
      }

      const item: Record<string, string> = {
        [objectMatch[1]]: stripQuotes(objectMatch[2]),
      };
      index += 1;

      while (index < lines.length && lines[index].startsWith("    ")) {
        const nestedMatch = lines[index].trim().match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (nestedMatch) {
          item[nestedMatch[1]] = stripQuotes(nestedMatch[2]);
        }
        index += 1;
      }

      items.push(item);
    }

    data[key] = items as string[] | Record<string, string>[];
  }

  return data;
}

function asString(value: FrontmatterValue | undefined, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asBoolean(value: FrontmatterValue | undefined) {
  return typeof value === "boolean" ? value : false;
}

function asStringArray(value: FrontmatterValue | undefined) {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value
    : [];
}

function asMetricArray(value: FrontmatterValue | undefined): ImpactMetric[] {
  return Array.isArray(value)
    ? value
        .filter((item): item is Record<string, string> => typeof item === "object")
        .map((item) => ({ label: item.label ?? "", value: item.value ?? "" }))
        .filter((item) => item.label && item.value)
    : [];
}

function asImageArray(value: FrontmatterValue | undefined): StoryImage[] {
  return Array.isArray(value)
    ? value
        .map((item) => {
          if (typeof item === "string" && item.trim()) {
            return { src: item.trim(), alt: "An Nur project photo" };
          }
          if (typeof item === "object" && item !== null) {
            const src = item.src ?? "";
            const alt = item.alt || "An Nur project photo";
            return { src, alt };
          }
          return null;
        })
        .filter((item): item is StoryImage => Boolean(item && item.src))
    : [];
}

export function getImpactStoryDirectory() {
  return contentDirectory;
}

export function getImpactStoryFiles() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .sort();
}

export function parseImpactStoryFile(fileName: string): ImpactStory {
  const filePath = path.join(contentDirectory, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Impact story "${fileName}" is missing frontmatter.`);
  }

  const frontmatter = parseFrontmatter(match[1]);
  const slug = asString(frontmatter.slug, fileName.replace(/\.mdx?$/, ""));

  const category = asString(frontmatter.category, "Social Welfare");
  const relatedProgram = asString(
    frontmatter.relatedProgram,
    category.toLowerCase().includes("agri") ? "agriculture" :
    category.toLowerCase().includes("educ") ? "education" :
    category.toLowerCase().includes("board") || category.toLowerCase().includes("orphan") ? "orphan-care" :
    category.toLowerCase().includes("live") ? "livestock" :
    category.toLowerCase().includes("water") ? "boreholes-water" :
    category.toLowerCase().includes("women") ? "economic-empowerment" : "community-welfare"
  );

  return {
    title: asString(frontmatter.title, "Untitled Story"),
    slug,
    excerpt: asString(frontmatter.excerpt),
    body: match[2].trim(),
    featuredImage: asString(frontmatter.featuredImage, "/editorial/farmer-hero.png"),
    imageAlt: asString(frontmatter.imageAlt, asString(frontmatter.title, "An Nur impact story")),
    galleryImages: asImageArray(frontmatter.galleryImages),
    category,
    relatedProgram,
    location: asString(frontmatter.location, "Central Region, Malawi"),
    beneficiaryName: asString(frontmatter.beneficiaryName, "Community Members"),
    impactMetrics: asMetricArray(frontmatter.impactMetrics),
    beforeSummary: asString(frontmatter.beforeSummary),
    afterSummary: asString(frontmatter.afterSummary),
    publishedDate: asString(frontmatter.publishedDate, new Date().toISOString().slice(0, 10)),
    updatedDate: asString(frontmatter.updatedDate),
    featured: asBoolean(frontmatter.featured),
    status: asString(frontmatter.status, "published") === "draft" ? "draft" : "published",
    seoTitle: asString(frontmatter.seoTitle, asString(frontmatter.title)),
    seoDescription: asString(frontmatter.seoDescription, asString(frontmatter.excerpt)),
    openGraphImage: asString(frontmatter.openGraphImage, asString(frontmatter.featuredImage, "/editorial/farmer-hero.png")),
    tags: asStringArray(frontmatter.tags),
  };
}

export function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  return markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("## ")) {
        return { type: "heading", text: block.replace(/^##\s*/, "") };
      }
      if (block.startsWith("> ")) {
        return { type: "quote", text: block.replace(/^>\s*/, "") };
      }
      return { type: "paragraph", text: block.replace(/\n/g, " ") };
    });
}
