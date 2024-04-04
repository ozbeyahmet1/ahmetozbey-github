import BackgroundDial from "@/components/backgroundDial";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header_inner"]}>
        <div className={styles["header--left"]}>
          <p>cosmos</p>
        </div>
        <div className={styles["header--right"]}>
          <BackgroundDial />
        </div>
      </div>
    </header>
  );
}
