import { LiaCommentAlt } from "react-icons/lia";
import StatueBadge, { Statue } from "@/components/ui/statue";
import { Issue } from "@/helpers/interfaces/api";
import styles from "./tableRow.module.scss";

export default function TableRow({ title, number, user: { login } }: Issue) {
  return (
    <div className={styles["tableRow"]}>
      <div className={styles["tableRow--left"]}>
        <StatueBadge statue={Statue.Open} />
        <div>
          <h3 className={styles["tableRow_title"]}>{title}</h3>
          <h4 className={styles["tableRow_description"]}>
            #{number} opened 4 hours ago by {login}
          </h4>
        </div>
      </div>
    </div>
  );
}
