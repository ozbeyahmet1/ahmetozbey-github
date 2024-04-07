import { repositories } from "./repositories.sample";

export const HomepageData = {
  header: "Accurate results with intelligent search.",
  subHeader: "Accurate results with intelligent search",
  description: "Sensei intelligence search analyzes images,videos, audio and tagging it for you automatically",
  // This will change with api endpoint list
  selectedRepositories: repositories,
  // This will change with persisted endpoint list
  favoriteRepositories: repositories.slice(0, 3),
};
