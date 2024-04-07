import { AnimationProps, motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";
import Card from "@/components/card";
import SearchBar from "@/components/searchBar";
import { HomepageData } from "@/datas/homepage.ui";
import styles from "./homepage.module.scss";
export default function HomepageView() {
  const headerMotionProps: AnimationProps = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 1 },
  };
  const { selectedRepositories, description, header, subHeader, favoriteRepositories } = HomepageData;
  return (
    <div className={styles.homepage}>
      <div className={styles["homepage_container"] + " container"}>
        <motion.h1 className={styles["homepage_header"]} {...headerMotionProps}>
          {header}
        </motion.h1>
        <h3 className={styles["homepage_subHeader"]}>
          <BsLightningFill color="yellow" /> {subHeader}
        </h3>
        <h5 className={styles["homepage_description"]}>{description}</h5>
        <div className={styles["grid-container"]}>
          {selectedRepositories.map((repository, index) => (
            <Card key={repository.id} repositoryProps={repository} index={index} />
          ))}
          <Card repositoryProps={favoriteRepositories} index={selectedRepositories.length} />
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
