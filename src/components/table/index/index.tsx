import { Issue } from "@/helpers/interfaces/issue";
import styles from "./table.module.scss";
import TableHead from "../tableHead";
import TableRow from "../tableRow";
export interface IAppProps {
  issues: Array<Issue>;
}

export default function TableWrapper({ issues }: IAppProps) {
  return (
    <div>
      <TableHead />
      <div className={styles["table_rows"]}>
        {issues.map((issue, index) => {
          return <TableRow key={index} title={issue.title} />;
        })}
      </div>
    </div>
  );
}
