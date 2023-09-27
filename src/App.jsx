import { useEffect, useState } from "react";
import Content from "./components/content/content";
import Logo from "./components/logo/logo";
import Navigation from "./components/navigation/navigation";

function App() {
  const [currentPage, setCurrentPage] = useState("Início");

  const onNavClick = (e) => {
    setCurrentPage(e.target.value);
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <>
      <Navigation onClick={onNavClick} page={currentPage} />
      <Logo />
      <Content page={currentPage} />
    </>
  );
}

export default App;
