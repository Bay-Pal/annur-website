import { getImpactStoryFiles, parseImpactStoryFile } from "./markdown";

type Options = {
  includeDrafts?: boolean;
};

export function getImpactStories(options: Options = {}) {
  const stories = getImpactStoryFiles()
    .map((file) => parseImpactStoryFile(file))
    .filter((story) => options.includeDrafts || story.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
    );

  return stories;
}
