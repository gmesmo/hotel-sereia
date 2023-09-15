import Line from "../../line";
import styles from "./inicio.module.css";

// 3rd party
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const Inicio = () => {
  return (
    <>
      <section className={styles.inicio}>
        Se ficar no litoral gaúcho já é incrível, imagine o prazer de estar
        hospedado a beira mar, cercado de belezas naturais, diversão e muito
        conforto! O Hotel Sereia oferece uma estrutura completa de lazer para
        você aproveitar ao máximo suas férias! Arroio do Sal, uma tranquila
        cidade no litoral do Rio Grande do Sul, possui toda a estrutura para que
        você desfrute suas férias. Aqui está localizado o Hotel Sereia que
        oferece apartamentos com TV e frigobar de frente para o mar. O Hotel
        também possui salão de jogos, de leitura, sauna e piscina.
      </section>
      <Line />
      <section className={styles.split}>
        <div className={styles.atracoes}>
          <h2>Venha Aproveitar!</h2>
          <ul>
            <li>Belezas naturais</li>
            <li>Delicioso café da manhã</li>
            <li>Tempo de qualidade com aqueles que se ama</li>
            <li>Ambiente familiar</li>
            <li>
              Comodidade e tranquilidade em nosso belíssimo Litoral Gaúcho
            </li>
            <li>Salas de estar com Tv</li>
            <li>Sala de leitura com redes para descanso</li>
            <li>Espaço com churrasqueira e jogos</li>
            <li>Área verde para vôlei e futebol, espaço infantil</li>
            <li>Pátio interno com bar, piscina aquecida adulto e infantil</li>
            <li>Sauna</li>
          </ul>
        </div>
        <div className={styles.slideshow}>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    </>
  );
};

export default Inicio;
