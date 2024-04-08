import { MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Sort } from "@/datas/sortKeys";
import { Assignee, Label, User } from "@/helpers/interfaces/api";
import styles from "./lineItems.module.scss";

/**
 * Props for the LineItem component.
 */
export interface LineItemProps {
  type: "label" | "assignee" | "sort";
  labelProps?: Label;
  sortProps?: Sort;
  assigneeProps?: Assignee;
}

/**
 * A dropdown line item component.
 * @param type - The type of the line item.
 * @param labelProps - The label properties.
 * @param sortProps - The sort properties.
 * @param assigneeProps - The assignee properties.
 * @returns The LineItem component.
 */
export default function LineItem({ type, labelProps, sortProps, assigneeProps }: LineItemProps) {
  const { asPath } = useRouter();
  const router = useRouter();
  const { creator } = router.query;
  const { labels } = router.query;
  const { sort } = router.query;
  const { direction } = router.query;

  /**
   * Renders the author menu item.
   * @param avatar_url - The URL of the author's avatar.
   * @param login - The login name of the author.
   * @returns The author menu item.
   */
  const authorMenuItem = ({ avatar_url, login }: User): JSX.Element | null => {
    let url = "";
    if (labels || sort) {
      url = creator ? asPath.replace(creator as string, login) : `${asPath}&creator=${login}`;
    } else {
      url = `${asPath}?creator=${login}`;
    }
    const isSelectedUser = creator?.includes(login);
    const authorClassname = isSelectedUser ? "lineItemAuthor--selected" : "lineItemAuthor";
    return (
      <Link href={url}>
        <MenuItem disableRipple className={styles[`${authorClassname}`]}>
          <Image src={avatar_url} alt="" width={20} height={20} />
          <p>{login} </p>
        </MenuItem>
      </Link>
    );
  };

  /**
   * Renders the sort menu item.
   * @param name - The name of the sort option.
   * @param key - The key of the sort option.
   * @returns The sort menu item.
   */
  const sortMenuItem = ({ name, key }: Sort): JSX.Element | null => {
    let url = "";
    if (creator || labels) {
      url =
        sort && direction
          ? asPath.replace("sort=" + sort.toString() + "&" + "direction=" + direction.toString(), key)
          : `${asPath}&${key}`;
    } else {
      url =
        sort && direction
          ? asPath.replace("sort=" + sort.toString() + "&" + "direction=" + direction.toString(), key)
          : `${asPath}?${key}`;
    }

    const sortClassname =
      "sort=" + sort?.toString() + "&" + "direction=" + direction?.toString() === key
        ? "lineItemAuthor--selected"
        : "lineItemAuthor";
    return (
      <Link href={url}>
        <MenuItem disableRipple className={styles[`${sortClassname}`]}>
          <p>{name}</p>
        </MenuItem>
      </Link>
    );
  };

  /**
   * Renders the label menu item.
   * @param color - The color of the label.
   * @param name - The name of the label.
   * @returns The label menu item.
   */
  const labelMenuItem = ({ color, name }: Label) => {
    const tagStyle: React.CSSProperties = {
      backgroundColor: `#${color}`,
      width: 10,
      height: 10,
      borderRadius: "100%",
    };
    let url = "";

    if (creator || sort) {
      url = labels ? asPath.replace(labels as string, (labels as string) + "," + name) : `${asPath}&labels=${name}`;
    } else {
      url = `${asPath}?labels=${name}`;
    }

    const labelClassname = labels?.includes(name) ? "lineItemAuthor--selected" : "lineItemAuthor";

    return (
      <Link href={url}>
        <MenuItem disableRipple className={styles[`${labelClassname}`]}>
          <span style={tagStyle}></span>
          <p>{name}</p>
        </MenuItem>
      </Link>
    );
  };

  return (
    <div>
      {type === "label" && labelProps && labelMenuItem(labelProps)}
      {type === "assignee" && assigneeProps && authorMenuItem(assigneeProps)}
      {type === "sort" && sortProps && sortMenuItem(sortProps)}
    </div>
  );
}
