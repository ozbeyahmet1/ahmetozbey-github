import styles from "./statue.module.scss";

/**
 * Enum representing the possible states of a statue.
 */
export enum Statue {
  Default,
  Open,
  Closed,
  ClosedAsNotPlanned,
}

/**
 * Props for the StatueBadge component.
 */
interface StatueProps {
  statue: Statue;
}

/**
 * Renders a badge representing the given statue state.
 * @param statue - The statue state to render.
 * @returns The JSX element representing the statue badge.
 */
export default function StatueBadge({ statue }: StatueProps) {
  /**
   * Returns the JSX element representing the given statue state.
   * @param params - The statue state.
   * @returns The JSX element representing the statue.
   */
  function name(params: Statue) {
    switch (params) {
      case Statue.Default:
        return (
          <div className={styles["statue"]} style={{ border: "1px solid white" }}>
            <div className={styles["statue_dot"]} style={{ backgroundColor: "white" }}></div>
          </div>
        );
      case Statue.Open:
        return (
          <div className={styles["statue"]} style={{ border: "1px solid green" }}>
            <div className={styles["statue_dot"]} style={{ backgroundColor: "green" }}></div>
          </div>
        );
      case Statue.Closed:
        return (
          <div className={styles["statue"]} style={{ border: "1px solid purple" }}>
            <div className={styles["statue_dot"]} style={{ backgroundColor: "purple" }}></div>
          </div>
        );
      case Statue.ClosedAsNotPlanned:
        return (
          <div className={styles["statue"]} style={{ border: "1px solid grey" }}>
            <div className={styles["statue_dot"]} style={{ backgroundColor: "grey" }}></div>
          </div>
        );
      default:
        return (
          <div className={styles["statue"]} style={{ border: "1px solid white" }}>
            <div className={styles["statue_dot"]} style={{ backgroundColor: "white" }}></div>
          </div>
        );
    }
  }

  return <div>{name(statue)}</div>;
}
