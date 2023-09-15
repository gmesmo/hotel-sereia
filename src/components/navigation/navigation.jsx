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
      {props.page != "Início" ? (
        <Button onClick={props.onClick} text={"Início"} />
      ) : (
        ""
      )}
      {props.page != "Acomodações" ? (
        <Button onClick={props.onClick} text={"Acomodações"} />
      ) : (
        ""
      )}
      {props.page != "Como chegar" ? (
        <Button onClick={props.onClick} text={"Como chegar"} />
      ) : (
        ""
      )}
      {props.page != "Mais Fotos" ? (
        <Button onClick={props.onClick} text={"Mais Fotos"} />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
