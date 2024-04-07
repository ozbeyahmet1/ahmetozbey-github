export interface User {
  id: number;
  avatar_url: string;
  url: string;
  login: string;
}

export type dataType = "author" | "label" | "assignee" | "sort";
