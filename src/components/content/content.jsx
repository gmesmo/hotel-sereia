import React from "react";

import styles from "./content.module.css";
import Title from "./title/title";
import Inner from "./inner/inner";

const Content = (props) => {
  const title = props.page;

  return (
    <div className={styles.content}>
      <Title title={title} />
      <Inner key={title} page={title} />
    </div>
  );
};

export default Content;
