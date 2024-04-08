import { Assignee, Issue, Label, Repository, User } from "./api";

export interface HomepageProps {
  data: Array<Repository>;
  ui: HomepageUI;
}

export interface HomepageUI {
  header: string;
  subHeader: string;
  description: string;
  selectedRepositories: Array<string>;
  popularSearchs: Array<string>;
}

export interface IssuePageProps {
  data: {
    issueDatas: Array<Issue> | null;
    labelDatas: Array<Label> | null;
    assigneesDatas: Array<Assignee> | null;
  };
}

export interface SearchPageProps {
  searchPageResult: SearchPageResult;
}

export interface SearchPageResult {
  incomplete_results: boolean;
  items: Array<Repository>;
  total_count: number;
}
