import { MenuItem } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { Sort } from "@/datas/sortKeys";
import { dataType } from "@/helpers/interfaces/user";
import styles from "./lineItems.module.scss";

interface AuthorProps {
  imageSrc: string;
  username: string;
}

interface LabelProps {
  color: string;
  name: string;
}
export interface LineItemProps {
  type: dataType;
  authorProps?: AuthorProps;
  labelProps?: LabelProps;
  sortProps?: Sort;
}

export default function LineItem({ type, authorProps, labelProps, sortProps }: LineItemProps) {
  const authorMenuItem = ({ imageSrc, username }: AuthorProps): JSX.Element | null => (
    <MenuItem disableRipple className={styles["lineItemAuthor"]}>
      <Image src={imageSrc} alt="" width={20} height={20} />
      <p>{username}</p>
    </MenuItem>
  );

  const sortMenuItem = ({ id, name }: Sort): JSX.Element | null => (
    <MenuItem disableRipple className={styles["lineItemAuthor"]}>
      <p>{name}</p>
    </MenuItem>
  );

  const labelMenuItem = ({ color, name }: LabelProps) => {
    const tagStyle: React.CSSProperties = {
      backgroundColor: `#${color}`,
      width: 10,
      height: 10,
      borderRadius: "100%"
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
    </div>);
}