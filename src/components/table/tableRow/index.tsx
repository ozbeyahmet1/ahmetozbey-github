import Label from "@/components/ui/label";
import StatueBadge, { Statue } from "@/components/ui/statue";
import { Issue } from "@/helpers/interfaces/api";
import styles from "./tableRow.module.scss";

export default function TableRow({ title, number, user: { login }, labels }: Issue) {
  return (
    <div className={styles["tableRow"]}>
      <div className={styles["tableRow--left"]}>
        <StatueBadge statue={Statue.Open} />
        <div>
          <div className={styles["tableRow--top"]}>
            <h3 className={styles["tableRow_title"]}>{title}</h3>
            {labels.map((label) => {
              return <Label key={label.id} {...label} />;
            })}
          </div>
          <h4 className={styles["tableRow_description"]}>
            #{number} opened 4 hours ago by {login}
          </h4>
        </div>
      </div>
    </div>
  );
}
