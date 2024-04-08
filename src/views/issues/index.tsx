import { useState } from "react";
import Table from "@/components/table/index";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { IssuePageProps } from "@/helpers/interfaces/pageProps";
import styles from "./issuesView.module.scss";

export default function IssuePageView({ data }: IssuePageProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <div className={styles["issuePageView"]}>
      <div className={styles["issuePageView_container"]}>
        <div className={styles["issuePageView--top"]}>
          <Input
            className={styles["issuePageView_input"]}
            value={search}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            name="search"
            placeholder="Search by Repository, Project and Contributors"
          />
          <Button className={styles["issuePageView_searchButton"]}>
            <p>Search</p>
          </Button>
        </div>
        <Table data={data} />
        <Pagination currentPage={5} totalPages={45} />
      </div>
    </div>
  );
}
