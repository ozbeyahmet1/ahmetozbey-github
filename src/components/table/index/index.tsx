import { sortKeys } from "@/datas/sortKeys";
import { IssuePageProps } from "@/helpers/interfaces/pageProps";
import styles from "./table.module.scss";
import EmptyTable from "../emptyTable";
import TableHead from "../tableHead";
import TableRow from "../tableRow";

export default function TableWrapper({ data: { assigneesDatas, issueDatas, labelDatas } }: IssuePageProps) {
  return (
    <div>
      <TableHead data={{ assigneesDatas, issueDatas, labelDatas }} sortKeys={sortKeys} />
      <div className={styles["table_rows"]}>
        {issueDatas && issueDatas.length > 0 ? (
          issueDatas.map((issue, index) => {
            return <TableRow key={index} {...issue} />;
          })
        ) : (
          <EmptyTable />
        )}
      </div>
    </div>
  );
}
