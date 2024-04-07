export interface Sort {
  id: number;
  name: string;
}
export const sortKeys: Array<Sort> = [
  {
    id: 1,
    name: "Newest",
  },
  {
    id: 2,
    name: "Oldest",
  },
  {
    id: 3,
    name: "Most commented",
  },
  {
    id: 4,
    name: "Least commented",
  },
  {
    id: 5,
    name: "Recently updated",
  },
  {
    id: 6,
    name: "Least recently updated",
  },
  {
    id: 7,
    name: "Best Match",
  },
];
