import * as React from "react";
import RepoCard from "@/components/card/repoCard";
import { Repository } from "@/helpers/interfaces/api";
import styles from "./searchResultsPage.module.scss";

interface SearchResultsPageViewProps {
  data: Array<Repository>;
}
export default function SearchResultsPageView({ data }: SearchResultsPageViewProps) {
  return (
    <div className={styles["searchResultsPage"]}>
      <div className={styles["searchResultsPage_container"]}>
        {data.map((repo) => {
          return <RepoCard {...repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}
