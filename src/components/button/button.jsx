import React from "react";

import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.main_link}
      value={props.text}
    >
      {props.Icon}
      {props.text}
    </button>
  );
};

export default Button;
