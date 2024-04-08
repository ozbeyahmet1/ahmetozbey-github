import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import styles from "./searchBar.module.scss";
import Input from "../ui/input";
import Tag from "../ui/tag";
interface SearchBarProps {
  repositories: Array<string>;
}
export default function SearchBar({ repositories }: SearchBarProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <div className={styles["searchBar"]}>
      <div className={styles["searchBar--top"]}>
        <CiSearch size={40} color="white" />
        <Input
          type="text"
          name="repo"
          placeholder="Search by Repository, Project and Contributors"
          error={false}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles["searchBar_input"]}
        />
      </div>
      <div className={styles["searchBar--middle"]}>
        <p>Quick search</p>
        <hr />
      </div>
      <div className={styles["searchBar--bottom"]}>
        <div className={styles["searchBar_recentSearches"]}>
          <IoMdStarOutline color="white" size={20} />
          <p>Popular Searchs</p>
        </div>
        <div className={styles["searchBar_tags"]}>
          {repositories.map((repository) => {
            return <Tag key={repository} icon={<CiSearch size={20} color="white" />} text={repository} />;
          })}

        </div>
      </div>
    </div>
  );
}
