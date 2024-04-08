export interface Sort {
  id: number;
  name: string;
  key: string;
}
export const sortKeys: Array<Sort> = [
  {
    id: 1,
    name: "Newest",
    key: "sort=created&direction=desc",
  },
  {
    id: 2,
    name: "Oldest",
    key: "sort=created&direction=asc",
  },
  {
    id: 3,
    name: "Most commented",
    key: "sort=comments&direction=desc",
  },
  {
    id: 4,
    name: "Least commented",
    key: "sort=comments&direction=asc",
  },
  {
    id: 5,
    name: "Recently updated",
    key: "sort=updated&direction=desc",
  },
  {
    id: 6,
    name: "Least recently updated",
    key: "sort=updated&direction=asc",
  },
  {
    id: 7,
    name: "Best Match",
    key: "sort=best_match&direction=desc",
  },
];
