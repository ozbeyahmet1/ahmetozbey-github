import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";

import Table from "@/components/table/index";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { exampleIssues } from "@/datas/issues.sample";
import styles from "./issuesView.module.scss";

export default function IssuePageView() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className={styles["issuePageView"]}>
      <div className={styles["issuePageView_container"]}>
        <div className={styles["issuePageView--top"]}>
          <Input
            className={styles["issuePageView_input"]}
            value={search}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            error={false}
            name="search"
            placeholder="Search by Repository, Project and Contributors"
          />
          <Button className={styles["issuePageView_searchButton"]}>
            <p>Add to Favorites</p>
            <IoIosStarOutline size={22} />
          </Button>
        </div>
        <Table issues={exampleIssues} />
      </div>
    </div>
  );
}