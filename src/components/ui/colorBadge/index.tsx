import { CSSProperties } from "react";
import styles from "./colorBadge.module.scss";

/**
 * ColorBadge component displays a colored badge with a given style.
 */
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
