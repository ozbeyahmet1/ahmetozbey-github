import * as React from "react";
import styles from "./404.module.scss";

export default function ErrorPage() {
  return (
    <div className={styles["errorPage"]}>
      <div>Ooops...</div>
    </div>
  );
}
