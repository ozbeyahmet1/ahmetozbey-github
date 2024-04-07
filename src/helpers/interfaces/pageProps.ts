import { ParsedUrlQuery } from "querystring";
import { GetServerSidePropsContext, PreviewData } from "next";
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
  favoriteRepositories: Array<Repository>;
}

export interface IssuePageProps {
  data: {
    issueDatas: Array<Issue> | null;
    labelDatas: Array<Label> | null;
    authorDatas: Array<User> | null;
    assigneesDatas: Array<Assignee> | null;
  };
}
