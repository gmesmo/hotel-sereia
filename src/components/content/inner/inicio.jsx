import Line from "../../line";
import styles from "./inicio.module.css";

import Button from "../../button/button";

import { ImWhatsapp } from "@react-icons/all-files/im/ImWhatsapp";
import { BsPhoneFill } from "@react-icons/all-files/bs/BsPhoneFill";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

// 3rd party
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef44",
  color: "#000000",
  position: "absolute",
  width: "100%",
  textAlign: "center",
  fontWeight: "bold",
  fontFamily: "var(--ff-text)",
  letterSpacing: ".05rem",
};

const divStyle = {
  position: "relative",
  display: "flex",
  alignItems: "last baseline",
  justifyContent: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "500px",
  padding: "1rem",
};

const slideImages = [
  {
    url: "http://hotelsereia.com.br/assets/img/mais_fotos/patio_piscina.jpg",
    caption: "Patio Piscina",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-1.jpg",
    caption: "Slide 2",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-2.jpg",
    caption: "Slide 3",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-3.jpg",
    caption: "Slide 4",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-4.jpg",
    caption: "Slide 5",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-5.jpg",
    caption: "Slide 6",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-6.jpg",
    caption: "Slide 7",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-7.jpg",
    caption: "Slide 8",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-8.jpg",
    caption: "Slide 9",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-9.jpg",
    caption: "Slide 10",
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
                    width: "100%",
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>
      <Line />
      <section>
        <h2>Encontre-nos através do menu Social ou contatos abaixo</h2>
        <div className={styles.buttonWrapper}>
          <Button Icon={<ImWhatsapp />} text={"WhatsApp"} />
          <Button Icon={<BsPhoneFill />} text={"Celular"} />
          <Button Icon={<FaMapMarkerAlt />} text={"Localização"} />
        </div>
      </section>
      <Line />
    </>
  );
};

export default Inicio;
