import { Assignee, Issue, Label, Repository } from "../interfaces/api";
import { SearchPageProps, SearchPageResult } from "../interfaces/pageProps";

/**
 * Fetches repositories by their names.
 * @param names - An array of repository names.
 * @returns A promise that resolves to an array of repositories.
 */
export async function fetchRepositoriesByNames(names: string[]): Promise<Repository[]> {
  const fetchPromises = names.map(async (name) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${name}`, {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      return response.json() as Promise<Repository>;
    } catch (error) {
      console.error(`Failed to fetch repository with ID ${name}:`, error);
      return null;
    }
  });

  const repositories = await Promise.all(fetchPromises);
  return repositories.filter((repository) => repository !== null) as Repository[];
}

/**
 * Fetches issues by their path.
 * @param path - The path of the issues.
 * @returns A promise that resolves to an array of issues or null if the fetch fails.
 */
export async function fetchIssuesByPath(path: string): Promise<Array<Issue> | null> {
  try {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<Array<Issue>>;
  } catch (error) {
    console.error(`Failed to fetch repository with name ${path}:`, error);
    return null;
  }
}

/**
 * Fetches labels by their path.
 * @param path - The path of the labels.
 * @returns A promise that resolves to an array of labels or an empty array if the fetch fails.
 */
export async function fetchLabelsByPath(path: string): Promise<Label[]> {
  try {
    const response = await fetch(`https://api.github.com/repos/${path}/labels?per_page=100`, {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<Label[]>;
  } catch (error) {
    console.error(`Failed to fetch labels with path ${path}:`, error);
    return [];
  }
}

/**
 * Fetches assignees by their path.
 * @param path - The path of the assignees.
 * @returns A promise that resolves to an array of assignees or an empty array if the fetch fails.
 */
export async function fetchAssigneesByPath(path: string): Promise<Assignee[]> {
  try {
    const response = await fetch(`https://api.github.com/repos/${path}/assignees`, {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<Assignee[]>;
  } catch (error) {
    console.error(`Failed to fetch assignees with path ${path}:`, error);
    return [];
  }
}

/**
 * Fetches issues by query.
 * @param query - The query string.
 * @returns A promise that resolves to an array of issues or null if the fetch fails.
 */
export async function fetchSearchPageResultsByQuery(query: string): Promise<SearchPageResult | null> {
  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<SearchPageResult>;
  } catch (error) {
    console.error(`Failed to fetch issues with query ${query}:`, error);
    return null;
  }
}
