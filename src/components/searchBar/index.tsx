import { useRouter } from "next/navigation";
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
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Navigate to the search results page with the search query
    router.push(`/search/issues?q=${search}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  return (
    <div className={styles["searchBar"]}>
      <div className={styles["searchBar--top"]}>
        <CiSearch size={40} color="white" />
        <form onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="Search by Repository, Project and Contributors"
            value={search}
            onChange={handleInputChange}
            className={styles.searchBar_input}
          />
        </form>
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
