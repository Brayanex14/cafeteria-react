import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../Imagenes/banner.jpg";
import slide2 from "../Imagenes/banner2.jpg";
import "./Carrusel.css";
function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={slide1}
          alt="Primer slide"
          className="d-block w-100"
          style={{
            height: "500px",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
        />
        <Carousel.Caption>
          <h3>Café 100% natural</h3>
          <p>Disfruta de nuestros más exquisitos cafés</p>
          <a href="#" className="bt-carrusel">
            Comprar ahora
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide2}
          alt="Primer slide"
          className="d-block w-100"
          style={{
            height: "500px",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
        />
        <Carousel.Caption>
          <h3>Lugar acogedor</h3>
          <p>Disfruta de nuestros espacios mas comodos</p>
          <a href="#" className="bt-carrusel">
            Visitanos
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
