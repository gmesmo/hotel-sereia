import { useState } from "react";
import Acomodacoes from "./acomodacoes";

import styles from "./inner.module.css";

const Inner = () => {
  //   const [currentPage, setCurrentPage] = useState(() => <Acomodacoes />);

  return (
    <section id={styles.Inner}>
      {/* {currentPage} */}
      <h3>Testing</h3>
    </section>
  );
};

export default Inner;
