import Dropdown from "@/components/ui/dropdown";
import StatueBadge, { Statue } from "@/components/ui/statue";
import { Sort } from "@/datas/sortKeys";
import { IssuePageProps } from "@/helpers/interfaces/pageProps";
import styles from "./tableHead.module.scss";

export interface TableHeadProps {
  sortKeys: Sort[];
}
export default function TableHead({
  data: { assigneesDatas, authorDatas, labelDatas },
  sortKeys,
}: TableHeadProps & IssuePageProps) {
  return (
    <div className={styles["tableHead"]}>
      <div className={styles["tableHead--top"] + " container"}>
        <div className={styles["tableHead_statueWrapper"]}>
          <StatueBadge statue={Statue.Default} />
          <p>Open</p>
        </div>
        <div className={styles["tableHead_statueWrapper"]}>
          <StatueBadge statue={Statue.Default} />
          <p>Closed</p>
        </div>
      </div>
      <div className={styles["tableHead--bottom"]}>
        <div className={styles["tableHead--left"]}>
          <div className={styles["tableHead_statueWrapper"]}>
            <StatueBadge statue={Statue.Open} />
            <p>Open</p>
          </div>
          <div className={styles["tableHead_statueWrapper"]}>
            <StatueBadge statue={Statue.Closed} />
            <p>Closed</p>
          </div>
        </div>
        <div className={styles["tableHead--right"]}>
          {authorDatas && <Dropdown buttonText="author" users={authorDatas} hasInput={true} type="author" />}
          {labelDatas && <Dropdown buttonText="label" labels={labelDatas} hasInput={true} type="label" />}
          {assigneesDatas && (
            <Dropdown buttonText="assignee" assignees={assigneesDatas} hasInput={true} type="assignee" />
          )}
          <Dropdown buttonText="sort" sortKeys={sortKeys} hasInput={false} type="sort" />
        </div>
      </div>
    </div>
  );
}
