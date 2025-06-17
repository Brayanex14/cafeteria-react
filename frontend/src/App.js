import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MyNavbar from "./Componentes/MyNavbar/MyNavbar";
import Header from "./Componentes/Header/Header";
import Carrusel from "./Componentes/Carrusel/Carrusel";
import ContenidoMain from "./Componentes/ContenidoMain/ContenidoMain";
import Footer from "./Componentes/Footer/Footer";
import Productos from "./Componentes/Productos/Productos";
import Reservas from "./Componentes/Reservas/Reservas";
import Nosotros from "./Componentes/Nosotros/Nosotros";
import Login from "./Componentes/Login/Login";
import Compras from "./Componentes/Compras/Compras";

// Wrapper para poder usar hooks como useLocation fuera del Router
function Layout({ carrito2, agregarAlCarrito2 }) {
  const location = useLocation();
  const hideFooterOn = ["/login"]; // rutas donde no quieres el footer

  return (
    <>
      <Header carrito2={carrito2} />
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carrusel />
              <ContenidoMain />
            </>
          }
        />
        <Route
          path="/productos"
          element={<Productos agregarAlCarrito2={agregarAlCarrito2} />}
        />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compras" element={<Compras carrito2={carrito2} />} />
      </Routes>
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  const [carrito2, setCarrito2] = useState([]);
  const agregarAlCarrito2 = (producto) => {
    setCarrito2((prev) => [...prev, producto]); // acumula
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Layout agregarAlCarrito2={agregarAlCarrito2} carrito2={carrito2} />
      </BrowserRouter>
    </div>
  );
}
