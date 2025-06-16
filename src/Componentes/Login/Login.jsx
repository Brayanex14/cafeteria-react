import React from "react";
import { Figure, Form, Button } from "react-bootstrap";
import "./Login.css";
import log1 from "../Imagenes/log-in.png";
const Login = () => {
  return (
    <div className="login-content">
      <Figure className="hero-figure">
        <Figure.Image
          src={log1}
          alt="Cafetería Baristas"
          className="image-login"
        />
        <Figure.Caption className="figure-caption d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-4">
            <h1>Inicio de Sesion</h1>
            <span>No tienes cuenta? </span> <a href="">Registrate</a>
          </div>

          <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label className="label-left">
                Nombre de Usuario
              </Form.Label>
              <Form.Control type="user" placeholder="Ingrese su nombre de usuario" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label-left">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="ingrese su contraseña"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="label-left check"
                type="checkbox"
                label="Recordar mi contraseña"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-200">
              Iniciar Sesion
            </Button>
          </Form>
        </Figure.Caption>
      </Figure>
    </div>
  );
};
export default Login;
