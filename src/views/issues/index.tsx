import { motion } from "framer-motion";
import { useState } from "react";
import Table from "@/components/table/index";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Issue } from "@/helpers/interfaces/api";
import { IssuePageProps } from "@/helpers/interfaces/pageProps";
import styles from "./issuesView.module.scss";

export default function IssuePageView({ data }: IssuePageProps) {
  const [search, setSearch] = useState<string>("");
  const filteredData: Issue[] | null =
    data?.issueDatas?.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    }) ?? null;
  const { assigneesDatas, labelDatas } = data;
  const updatedData = { assigneesDatas, labelDatas, issueDatas: filteredData };

  // Use the filteredData in the Table component

  return (
    <div className={styles["issuePageView"]}>
      <div className={styles["issuePageView_container"]}>
        <motion.div initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
          <Table data={search ? updatedData : data} />
        </motion.div>
      </div>
    </div>
  );
}
