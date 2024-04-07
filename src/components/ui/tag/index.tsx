import * as React from "react";
import styles from "./tag.module.scss";
export interface TagProps {
  icon?: React.ReactNode;
  text: string;
}

export default function Tag({ icon, text }: TagProps) {
  return (
    <div className={styles["tag"]}>
      <p>{text}</p>
      {icon}
    </div>
  );
}
