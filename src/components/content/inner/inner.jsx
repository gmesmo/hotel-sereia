import { useState } from "react";

import Inicio from "./inicio";
import Acomodacoes from "./acomodacoes";

import styles from "./inner.module.css";

const Inner = (props) => {
  return (
    <section id={styles.Inner}>
      {props.page === "Início" && <Inicio />}
      {props.page === "Acomodações" && <Acomodacoes />}
      <h3></h3>
    </section>
  );
};

export default Inner;
