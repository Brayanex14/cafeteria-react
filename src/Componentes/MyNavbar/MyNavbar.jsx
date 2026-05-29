import "./MyNavbar.css";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="Navbar-custom">
      <Container>
        <Navbar.Toggle aria-controls="navbar-toggler" className="me-2" />

        <Navbar.Collapse id="navbar-toggler">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <a>Inicio</a>
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              <a>Nuestros Productos</a>
            </Nav.Link>
            <Nav.Link as={Link} to="/reservas">
              <a>Reservas</a>
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros">
              <a>Nosotros</a>
            </Nav.Link>
          </Nav>

          {/* Bootstrap Search Form */}
          <Form className="d-flex">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Buscar..."
                className="buscar-form me-2"
                aria-label="Buscar"
              />
              <Button className="boton-lupa" variant="outline-light">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
