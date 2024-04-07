import { LiaCommentAlt } from "react-icons/lia";
import StatueBadge, { Statue } from "@/components/ui/statue";
import styles from "./tableRow.module.scss";
export interface TableRowProps {
  title: string;
}

export default function TableRow({ title }: TableRowProps) {
  return (
    <div className={styles["tableRow"]}>
      <div className={styles["tableRow--left"]}>
        <StatueBadge statue={Statue.Open} />
        <div>
          <h3 className={styles["tableRow_title"]}>{title}</h3>
          <h4 className={styles["tableRow_description"]}>#28694 opened 4 hours ago by Fun117</h4>
        </div>
      </div>
    </div>
  );
}
