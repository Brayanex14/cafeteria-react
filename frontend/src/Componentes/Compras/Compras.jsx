import React from "react";
import "./Compras.css";
import { Form, Row, Col, Button, Tabs, Tab, Container } from "react-bootstrap";

const Compras = ({ carrito2 = [] }) => {
  const total = carrito2.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="compras-content">
      <h2 className="text-center mb-4">Detalles de Pago</h2>
      <Form className="pago-form">
        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ejem: correo@gmail.com"
            className="form-text"
            id="correo-text"
          />
        </Form.Group>

        <Form.Label>Seleccione método de pago:</Form.Label>
        <Tabs
          defaultActiveKey="credito"
          id="justify-tab-example"
          className="tab-container mb-3"
        >
          <Tab
            eventKey="credito"
            title="Tarjeta Débito / Crédito"
            className="tarjeta-boton"
          >
            <Container>
              <Row xs={1} sm={2} md={2} lg={2} className="mb-3">
                <Col>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="Nombres"
                  />
                </Col>
                <Col>
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="Apellidos"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formNumeroTarjeta">
                <Form.Label>Número de tarjeta:</Form.Label>
                <Form.Control
                  className="form-text"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </Form.Group>

              <Row xs={1} sm={2} md={2} lg={2} className="mb-3">
                <Col>
                  <Form.Label>Fecha de expiración:</Form.Label>
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="MM/AA"
                  />
                </Col>
                <Col>
                  <Form.Label>CVC:</Form.Label>
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="123"
                  />
                </Col>
              </Row>

              <div className="resumen-pago p-3 border rounded mb-3 bg-light">
                {carrito2.length === 0 ? (
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <strong>Bs 0</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Descuento</span>
                      <strong>Bs 0</strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span>Total</span>
                      <strong>Bs 0</strong>
                    </div>
                    <Button className="form-text w-100" variant="dark">
                      Pagar Bs 0 →
                    </Button>
                  </div>
                ) : (
                  <div>
                    {carrito2.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between mb-2"
                      >
                        <span>{item.name}</span>
                        <strong>Bs {item.price}</strong>
                      </div>
                    ))}
                    <br />
                    <div className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <strong>Bs {total.toFixed(2)}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Descuento</span>
                      <strong>Bs 0</strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span>Total</span>
                      <strong>Bs {total.toFixed(2)}</strong>
                    </div>
                    <Button className="form-text w-100" variant="dark">
                      Pagar Bs {total.toFixed(2)} →
                    </Button>
                  </div>
                )}
              </div>
            </Container>
          </Tab>
          <Tab
            eventKey="cuenta"
            title="Cuenta Bancaria"
            className="cuenta-boton"
          >
            <Container>
              <Row xs={1} sm={2} md={2} lg={2} className="mb-3">
                <Col>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="Nombres"
                  />
                </Col>
                <Col>
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="Apellidos"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formNumeroTarjeta">
                <Form.Label>Número de cuenta:</Form.Label>
                <Form.Control
                  className="form-text"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </Form.Group>

              <div className="resumen-pago p-3 border rounded mb-3 bg-light">
                {carrito2.length === 0 ? (
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <strong>Bs 0</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Descuento</span>
                      <strong>Bs 0</strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span>Total</span>
                      <strong>Bs 0</strong>
                    </div>
                    <Button className="form-text w-100" variant="dark">
                      Pagar Bs 0 →
                    </Button>
                  </div>
                ) : (
                  <div>
                    {carrito2.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between mb-2"
                      >
                        <span>{item.name}</span>
                        <strong>Bs {item.price}</strong>
                      </div>
                    ))}
                    <br />
                    <div className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <strong>Bs {total.toFixed(2)}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Descuento</span>
                      <strong>Bs 0</strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span>Total</span>
                      <strong>Bs {total.toFixed(2)}</strong>
                    </div>
                    <Button className="form-text w-100" variant="dark">
                      Pagar Bs {total.toFixed(2)} →
                    </Button>
                  </div>
                )}
              </div>
            </Container>
          </Tab>
        </Tabs>
      </Form>
    </div>
  );
};
export default Compras;
