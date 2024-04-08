import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Label as LabelInterface } from "@/helpers/interfaces/api";
import styles from "./label.module.scss";

/**
 * Represents a label component.
 *
 * @param {string} color - The color of the label.
 * @param {string} description - The description of the label.
 * @param {string} name - The name of the label.
 * @returns {JSX.Element} The rendered label component.
 */
export default function Label({ color, name }: LabelInterface) {
  const pathName = usePathname();
  const labelStyle = {
    color: `#${color}`,
    border: `1px solid #${color}`,
    textDecoration: "none",
  };
  return (
    <Link href={`${pathName}?labels=${name}`} style={labelStyle} className={styles["label"]}>
      {name}
    </Link>
  );
}
