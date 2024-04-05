import { MenuItem } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { dataType } from "@/helpers/interfaces/user";
import styles from "./lineItems.module.scss";
interface AuthorProps {
  imageSrc: string;
  username: string;
}

export interface LineItemProps {
  type: dataType;
  authorProps?: AuthorProps;
}

export default function LineItem({ type, authorProps }: LineItemProps) {
  const authorMenuItem = ({ imageSrc, username }: AuthorProps): JSX.Element | null => (
    <MenuItem disableRipple className={styles["lineItemAuthor"]}>
      <Image src={imageSrc} alt="" width={20} height={20} />
      <p>{username}</p>
    </MenuItem>
  );

  return <div>{type === "author" && authorProps && authorMenuItem(authorProps)}</div>;
}
