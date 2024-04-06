/**
 * PURPOSE: Card component that displays repository name, avatar, and description.
 */

import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import { Repository } from "@/helpers/interfaces/repository";
import useWindowSize, { ScreenSize } from "@/hooks/useWindowSize";
import styles from "./card.module.scss";

/**
 * Props for the Card component.
 */
interface CardProps {
  repositoryProps: Repository | Array<Repository>; // The repository or an array of repositories to be displayed in the card.
  index: number; // The index of the card in the list.
}

/**
 * Card component.
 * Renders a card with repository information.
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
export default function Card({ index, repositoryProps }: CardProps): JSX.Element {
  const screenSize = useWindowSize();
  const isMobileScreen = screenSize === ScreenSize.Mobile;

  const cardMotionProps: AnimationProps = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: index * 0.3 + 0.1, delay: 0.2 },
  };

  /**
   * Renders the repository information for a single repository.
   * @param {Repository} repository - The repository to be rendered.
   * @returns {JSX.Element | null} The rendered repository information or null if the repository is undefined.
   */
  const renderSingleRepo = (repository: Repository): JSX.Element | null =>
    repository ? (
      <>
        <Image className={styles["card_image"]} src={repository.owner.avatar_url} width={80} height={80} alt="" />
        <p className={styles["card_title"]}>{repository.full_name}</p>
        <p className={styles["card_description"]}>{repository.description}</p>
      </>
    ) : null;

  /**
   * Renders the repository information for multiple repositories.
   * @param {Array<Repository>} repositories - The array of repositories to be rendered.
   * @returns {JSX.Element} The rendered repository information.
   */
  const renderMultipleRepos = (repositories: Repository[]): JSX.Element => (
    <div className={styles["card_grid"]}>
      {repositories.slice(0, repositories.length).map((repository, i) => (
        <Image key={i} src={repository.owner.avatar_url} width={60} height={60} alt="" />
      ))}
    </div>
  );

  return (
    <motion.div className={styles["card"]} {...cardMotionProps}>
      {Array.isArray(repositoryProps)
        ? renderMultipleRepos(isMobileScreen ? repositoryProps : repositoryProps)
        : renderSingleRepo(repositoryProps)}
    </motion.div>
  );
}
