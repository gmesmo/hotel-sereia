import React from "react";

import styles from "./content.module.css";
import Title from "./title/title";
import Inner from "./inner/inner";

const Content = (props) => {
  const title = props.page;

  return (
    <div className={styles.content}>
      <Title title={title} />
      <Inner />
    </div>
  );
};

export default Content;
