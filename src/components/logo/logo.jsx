import React from "react";

import styles from "./logo.module.css";
import logo from "/img/logo.png";

const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <a
          onClick={() => {
            alert("OK!");
          }}
        >
          <img src={logo} />
        </a>
      </div>
      <div className={styles.backRibbon}></div>
    </>
  );
};

export default Logo;
