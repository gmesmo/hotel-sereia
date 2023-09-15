import React from "react";

import styles from "./content.module.css";
import Title from "./title/title";

const Content = () => {
  return (
    <div className={styles.content}>
      <Title title={"Hotel Sereia"} />
    </div>
  );
};

export default Content;
