import * as React from "react";
import styles from "./emptyTable.module.scss";
export default function EmptyTable() {
  return (
    <div className={styles["emptyTable"]}>
      <h1>No data found</h1>
    </div>
  );
}
