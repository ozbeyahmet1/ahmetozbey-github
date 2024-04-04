import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHistory } from "react-icons/md";
import styles from "./searchBar.module.scss";
import Input from "../ui/input";
import Tag from "../ui/tag";

export default function SearchBar() {
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
          <MdOutlineHistory color="white" size={20} />
          <p>Recent Searches</p>
        </div>
        <div className={styles["searchBar_tags"]}>
          <Tag icon={<CiSearch size={20} color="white" />} text="React" />
        </div>
      </div>
    </div>
  );
}
