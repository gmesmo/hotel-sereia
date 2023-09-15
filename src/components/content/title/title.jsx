import React from "react";

import styles from "./title.module.css";

const Title = (props) => {
  return (
    <div id={styles.titleWrapper}>
      <h1 id={styles.title}>{props.title}</h1>
    </div>
  );
};

export default Title;
