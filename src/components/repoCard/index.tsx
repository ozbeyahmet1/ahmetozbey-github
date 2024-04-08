/**
 * PURPOSE: A card component for displaying a repository.
 */
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Repository } from "@/helpers/interfaces/api";
import styles from "./repoCard.module.scss";

export default function RepoCard({ description, full_name, owner }: Repository) {
  return (
    <div className={styles["repoCard"]}>
      <Image src={owner.avatar_url} width={70} height={70} alt="" />
      <div className={styles["repoCard--right"]}>
        <Link href={"/repos/" + full_name + "/issues"} className={styles["repoCard_name"]}>
          {full_name}
        </Link>
        <p className={styles["repoCard_description"]}>{description}</p>
      </div>
    </div>
  );
}
