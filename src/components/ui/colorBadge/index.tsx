/*
  PURPOSE : A badge component that displays a colored box.
*/
import { CSSProperties } from "react";
import styles from "./colorBadge.module.scss";

export interface ColorBadgeProps {
  style: CSSProperties;
}

export default function ColorBadge({ style }: ColorBadgeProps) {
  return (
    <div className={styles["colorBadge"]}>
      <div style={{ ...style }}></div>
    </div>
  );
}
