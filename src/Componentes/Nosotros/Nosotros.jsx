import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./Nosotros.css";
import banner3 from "../Imagenes/nostros-baner3.jpg";
const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {/* Sección del banner con texto superpuesto */}
      <div className="banner-section">
        <Image src={banner3} fluid className="banner-image" />
        <div className="image-text">
          <h2 className="section-title">QUIENES SOMOS</h2>
          <h1 className="section-subtitle">MISIÓN, VISIÓN Y VALORES</h1>
        </div>
      </div>

      {/* Contenido adicional (ahora SI aparecerá después del banner) */}

      <div className="contenido-adicional">
        <Container>
          {/* Sección Misión */}
          <Row className="justify-content-center mb-5">
            <Col md={12}>
              <Card className="custom-card">
                <Card.Body>
                  <h3 className="section-header">MISIÓN</h3>
                  <p className="section-text">
                    Ofrecer buenos momentos llenos de sabor y exquisito aroma en
                    cada taza que se deguste, placer en cada sorbo y una
                    búsqueda de la mejora constante.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Sección Visión */}
          <Row className="mb-5">
            <Col md={12}>
              <Card className="custom-card">
                <Card.Body>
                  <h3 className="section-header">VISIÓN</h3>
                  <p className="section-text">
                    Conseguir ser punteros aportando valores y cualidades
                    humanas para posicionarnos en el segmento de café de alta
                    calidad a todos los niveles.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Sección Valores */}
          <Row>
            <Col md={12}>
              <h3 className="section-header mb-4">VALORES</h3>

              {/* Valor 1 */}
              <Row className="mb-4">
                <Col md={12}>
                  <Card className="value-card">
                    <Card.Body>
                      <h4 className="value-title">Dedicación</h4>
                      <p className="value-text">
                        Ofrecer una dedicación absoluta con nuestros productos y
                        servicios para que el cliente esté satisfecho y confíe
                        plenamente en nosotros.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Valor 2 */}
              <Row className="mb-4">
                <Col md={12}>
                  <Card className="value-card">
                    <Card.Body>
                      <h4 className="value-title">
                        Preocupación por las materias primas
                      </h4>
                      <p className="value-text">
                        Queremos crear experiencias y que desde la mejor materia
                        prima y la elaboración con mimo se pueda sentir el valor
                        de cada grano de café.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Valor 3 */}
              <Row>
                <Col md={12}>
                  <Card className="value-card">
                    <Card.Body>
                      <h4 className="value-title">Aprendizaje continuo</h4>
                      <p className="value-text">
                        Ganas diarias de aprender con humildad de los nuevos
                        procesos y tecnologías para ser eficientes y satisfacer
                        a nuestros clientes.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Nosotros;
