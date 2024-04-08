import * as React from "react";
import styles from "./emptyTable.module.scss";

/**
 * Renders an empty table component with a message indicating no data found.
 */
export default function EmptyTable() {
  return (
    <div className={styles["emptyTable"]}>
      <h1>No data found</h1>
    </div>
  );
}
