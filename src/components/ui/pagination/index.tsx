import * as React from "react";
import styles from "./pagination.module.scss";
import Input from "../input";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(currentPage);
  return (
    <div className={styles["pagination"]}>
      <Input
        type="number"
        value={currentPageNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPageNumber(parseInt(e.target.value))}
        name="page"
        placeholder={currentPage.toString()}
        className={styles["pagination_input"]}
        min={1}
      />
      /<p>{totalPages}</p>
    </div>
  );
}
