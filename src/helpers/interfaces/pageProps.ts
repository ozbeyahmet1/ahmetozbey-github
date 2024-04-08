import { Assignee, Issue, Label, Repository, User } from "./api";

export interface HomepageProps {
  data: Array<Repository>;
  ui: HomepageUI;
}

export interface HomepageUI {
  header: string;
  subHeader: string;
  description: string;
  popularSearchs: Array<string>;
}

export interface IssuePageProps {
  data: {
    issueDatas: Array<Issue> | null;
    labelDatas: Array<Label> | null;
    authorDatas: Array<User> | null;
    assigneesDatas: Array<Assignee> | null;
  };
}
