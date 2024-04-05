import Dropdown from "@/components/ui/dropdown";
import StatueBadge, { Statue } from "@/components/ui/statue";
import { labels } from "@/datas/labels.sample";
import { sortKeys } from "@/datas/sortKeys";
import { users } from "@/datas/user.sample";
import styles from "./tableHead.module.scss";

export default function TableHead() {
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
          <Dropdown buttonText="author" data={users} hasInput={true} type="author" />
          <Dropdown buttonText="label" data={labels} hasInput={true} type="label" />
          <Dropdown buttonText="assignee" data={users} hasInput={true} type="assignee" />
          <Dropdown buttonText="sort" data={sortKeys} hasInput={false} type="sort" />
        </div>
      </div>
    </div>
  );
}
