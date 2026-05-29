import "./ContenidoMain.css";
export default function ContenidoMain() {
  return (
    <>
      <main className="main-content">
        <section className="container container-features">
          <div className="card-feature">
            <i className="fa-solid fa-truck"></i>
            <div className="feature-content">
              <span>Envío gratuito</span>
              <p>En pedido superior a $150</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-wallet" />
            <div className="feature-content">
              <span>Contrareembolso</span>
              <p>100% garantía de devolución de dinero</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-gift" />
            <div className="feature-content">
              <span>Tarjeta regalo especial</span>
              <p>Ofrece bonos especiales con regalo</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-headset" />
            <div className="feature-content">
              <span>Servicio al cliente 24/7</span>
              <p>LLámenos 24/7 al 123-456-7890</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
