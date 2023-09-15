import React from "react";
import Button from "../button/button";

import styles from "./navigation.module.css";

const Navigation = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();

    // console.log(e.target.value);
    // alert(e.target.value);
  };

  return (
    <nav className={styles.header}>
      <Button onClick={onClickHandler} text={"Acomodações"} />
      <Button onClick={onClickHandler} text={"Como chegar"} />
      <Button onClick={onClickHandler} text={"Mais Fotos"} />
    </nav>
  );
};

export default Navigation;
