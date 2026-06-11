import { getImpactStories } from "./getImpactStories";

export function getFeaturedImpactStories(limit = 3) {
  return getImpactStories()
    .filter((story) => story.featured)
    .slice(0, limit);
}
