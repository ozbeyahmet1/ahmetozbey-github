import Link from "next/link";
import * as React from "react";
import styles from "./tag.module.scss";

/**
 * Props for the Tag component.
 */
export interface TagProps {
  /**
   * The icon to be displayed alongside the text.
   */
  icon?: React.ReactNode;
  /**
   * The text to be displayed in the tag.
   */
  text: string;
}

/**
 * A component that represents a tag with optional icon.
 */
export default function Tag({ icon, text }: TagProps) {
  const issueUrl = "/repos/" + text + "/issues";
  return (
    <Link href={issueUrl} className={styles["tag"]}>
      <p>{text}</p>
      {icon}
    </Link>
  );
}
