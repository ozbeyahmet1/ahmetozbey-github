import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Label as LabelInterface } from "@/helpers/interfaces/api";
import styles from "./label.module.scss";

export default function Label({ color, description, name }: LabelInterface) {
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
