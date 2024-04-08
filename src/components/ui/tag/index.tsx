import Link from "next/link";
import * as React from "react";
import styles from "./tag.module.scss";
export interface TagProps {
  icon?: React.ReactNode;
  text: string;
}

export default function Tag({ icon, text }: TagProps) {
  const issueUrl = "/repos/" + text + "/issues";
  return (
    <Link href={issueUrl} className={styles["tag"]}>
      <p>{text}</p>
      {icon}
    </Link>
  );
}
