/*
  PURPOSE: This file is the Background component that renders a background with animation using Framer Motion.
*/
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { BackgroundProperties } from "@/helpers/interfaces/common";
import styles from "./background.module.scss";
export interface BackgroundProps {
  background: BackgroundProperties;
}

export default function Background({ background }: BackgroundProps) {
  const motionDivProps: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.8 },
  };
  return (
    <AnimatePresence>
      <motion.div {...motionDivProps}>
        <div className={styles.background} style={background.style}></div>
      </motion.div>
    </AnimatePresence>
  );
}
