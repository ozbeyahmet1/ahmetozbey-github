/*
  PURPOSE: This file is the Background component that renders a background with animation using Framer Motion.
*/
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { BackgroundProperties } from "@/helpers/interfaces/common";
import styles from "./background.module.scss";
export interface BackgroundProps {
  backgroundStyle: BackgroundProperties;
}

export default function Background({ backgroundStyle }: BackgroundProps) {
  const motionDivProps: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1 }
  };
  return (
    <AnimatePresence>
      <motion.div {...motionDivProps}>
        <div className={styles.background} style={backgroundStyle}></div>
      </motion.div>
    </AnimatePresence>
  );
}

