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
