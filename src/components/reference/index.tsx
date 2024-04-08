import * as React from "react";
import styles from "./reference.module.scss";

/*
  Maintain consistency between interface and component naming:
  For instance, use 'ReferenceProps' for the interface and 'Reference' for the component.
*/

export interface ReferenceProps {
  name: string;
}

/*
  When creating a new component, follow this template:
  export default function componentName(props: ComponentProps) {
     Component content goes here
  }
*/
export default function Reference() {
  return (
    /*
      Adhere to BEM (Block Element Modifier) naming conventions for classnames.

      Example of BEM naming convention:
      - Block: reference
      - Element: description, top
      - Modifier: --large, --active
      */
    <div className={styles["reference"]}>
      <div className={styles["reference_description"]}></div>
      <div className={styles["reference--top"]}></div>
    </div>
  );
}
