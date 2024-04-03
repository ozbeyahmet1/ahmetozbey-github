
import { AnimationProps, motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";
import styles from "./homepage.module.scss";
export default function HomepageView() {
  const headerMotionProps: AnimationProps = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 1 }
  };
  return (
    <div className={styles.homepage}>
      <div className={styles["homepage_container"] + " container"}>
        <motion.h1
          className={styles["homepage_header"]}
          {...headerMotionProps}
        >
          Accurate results with intelligent search.
        </motion.h1>
        <h3 className={styles["homepage_subHeader"]}>
          <BsLightningFill color="yellow" /> Accurate results with intelligent search.
        </h3>
        <h5 className={styles["homepage_description"]}>
          Sensei intelligence search analyzes images,videos, audio and tagging it for you automatically{" "}
        </h5>
      </div>
    </div>
  );
}