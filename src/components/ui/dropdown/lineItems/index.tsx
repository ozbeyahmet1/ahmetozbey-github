import { MenuItem } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { Sort } from "@/datas/sortKeys";
import { Label, User } from "@/helpers/interfaces/api";
import styles from "./lineItems.module.scss";

export interface LineItemProps {
  type: "author" | "label" | "assignee" | "sort";
  authorProps?: User;
  labelProps?: Label;
  sortProps?: Sort;
}

export default function LineItem({ type, authorProps, labelProps, sortProps }: LineItemProps) {
  const authorMenuItem = ({ avatar_url, login }: User): JSX.Element | null => (
    <MenuItem disableRipple className={styles["lineItemAuthor"]}>
      <Image src={avatar_url} alt="" width={20} height={20} />
      <p>{login}</p>
    </MenuItem>
  );

  const sortMenuItem = ({ id, name }: Sort): JSX.Element | null => (
    <MenuItem disableRipple className={styles["lineItemAuthor"]}>
      <p>{name}</p>
    </MenuItem>
  );

  const labelMenuItem = ({ color, name }: Label) => {
    const tagStyle: React.CSSProperties = {
      backgroundColor: `#${color}`,
      width: 10,
      height: 10,
      borderRadius: "100%",
    };

    return (
      <MenuItem disableRipple className={styles["lineItemAuthor"]}>
        <span style={tagStyle}></span>
        <p>{name}</p>
      </MenuItem>
    );
  };

  return (
    <div>
      {type === "author" && authorProps && authorMenuItem(authorProps)}
      {type === "label" && labelProps && labelMenuItem(labelProps)}
      {type === "assignee" && authorProps && authorMenuItem(authorProps)}
      {type === "sort" && sortProps && sortMenuItem(sortProps)}
    </div>
  );
}
