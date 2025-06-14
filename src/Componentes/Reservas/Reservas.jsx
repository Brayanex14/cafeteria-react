import React from "react";
import "./Reservas.css";
import { Form, Row, Col, Button } from "react-bootstrap";

const Reservas = () => {
  return (
    <div className="reservas-container">
      <h2 className="text-center mb-4">Reserva tu mesa</h2>
      <Form className="reservas-form">
        <Row xs={1} sm={3} md={3} lg={3} className="mb-3">
          <Form.Group as={Col} controlId="formNombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control
              className="caja-form"
              type="text"
              placeholder="Nombre(s)"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formApellido">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              className="caja-form"
              type="text"
              placeholder="Apellidos"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formTelefonoCel">
            <Form.Label>Teléfono / Celular</Form.Label>
            <Form.Control
              className="caja-form"
              type="tel"
              placeholder="Ej: 789 456 89"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            className="caja-form"
            type="email"
            placeholder="tucorreo@ejemplo.com"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control className="caja-form" type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formHora">
            <Form.Label>Hora</Form.Label>
            <Form.Control className="caja-form" type="time" />
          </Form.Group>

          <Form.Group as={Col} controlId="formPersonas">
            <Form.Label>Personas</Form.Label>
            <Form.Select className="caja-form" defaultValue="1">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num}>{num}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formNotas">
          <Form.Label>Notas adicionales</Form.Label>
          <Form.Control
            className="caja-form"
            as="textarea"
            rows={3}
            placeholder="Notas, Preferencias..."
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Confirmar reserva
        </Button>
      </Form>
    </div>
  );
};

export default Reservas;
