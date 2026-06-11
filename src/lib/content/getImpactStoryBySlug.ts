import { getImpactStories } from "./getImpactStories";

type Options = {
  includeDrafts?: boolean;
};

export function getImpactStoryBySlug(slug: string, options: Options = {}) {
  return getImpactStories(options).find((story) => story.slug === slug);
}
