export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  draft?: boolean;
  title: string;
  pull_request?: PullRequest;
  user: User;
  labels: Array<Label>;
  state: string;
  locked: boolean;
  assignee: null;
  assignees: Array<string>;
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: string | null;
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at?: Date | null;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    id: number;
    avatar_url: string;
  };
  description: string;
  issues_url: string;
}

export type Assignee = Pick<
  User,
  | "login"
  | "id"
  | "node_id"
  | "avatar_url"
  | "gravatar_id"
  | "url"
  | "html_url"
  | "followers_url"
  | "following_url"
  | "gists_url"
  | "starred_url"
  | "subscriptions_url"
  | "organizations_url"
  | "repos_url"
  | "events_url"
  | "received_events_url"
  | "type"
  | "site_admin"
>;
