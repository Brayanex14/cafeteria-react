import React from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import "./Productos.css";
import coffe1 from "../Imagenes/cafe-irish.jpg";
import coffe2 from "../Imagenes/cafe-ingles.jpg";
import coffe3 from "../Imagenes/cafe-australiano.jpg";
import coffe4 from "../Imagenes/cafe-helado.jpg";
import coffe5 from "../Imagenes/cafe-liqueurs.jpg";
import coffe6 from "../Imagenes/cafe-capuchino.jpg";
import coffe7 from "../Imagenes/cafe-late.jpg";
import coffe8 from "../Imagenes/cafe-tradicional.jpg";
import cake1 from "../Imagenes/postre-tiramisu.jpg";
import cake2 from "../Imagenes/postre-chocolate.jpg";
import cake3 from "../Imagenes/postre-piedelimon.jpg";
import cake4 from "../Imagenes/postre-dona.jpg";
import cake5 from "../Imagenes/postre-bizcocho.jpg";
const Products = ({ agregarAlCarrito2 }) => {
  // Datos de los productos
  const products = [
    {
      id: 1,
      name: "Cafe Irish",
      image: coffe1,
      discount: "-13%",
      stars: 3,
      price: 14.99,
      oldPrice: 18.99,
    },
    {
      id: 2,
      name: "Cafe Inglés",
      image: coffe2,
      discount: "-22%",
      stars: 4,
      price: 15.99,
      oldPrice: 10.99,
    },
    {
      id: 3,
      name: "Cafe Australiano",
      image: coffe3,
      stars: 2,
      price: 8.99,
    },
    {
      id: 4,
      name: "Cafe Helado",
      image: coffe4,
      stars: 5,
      price: 14.99,
    },
    {
      id: 5,
      name: "Cafe Liqueurs",
      image: coffe5,
      stars: 3,
      price: 15.99,
      discount: "10%",
      oldPrice: 16.99,
    },
    {
      id: 6,
      name: "Cafe Capuchino",
      image: coffe6,
      stars: 5,
      price: 19.99,
    },
    {
      id: 7,
      name: "Cafe Late",
      image: coffe7, // Cambia por la imagen correcta
      stars: 4,
      price: 25.99,
      discount: "20%",
      oldPrice: 22.99,
    },
    {
      id: 8,
      name: "Cafe Tradicional",
      image: coffe8,
      stars: 5,
      price: 15.99,
    },
    {
      id: 9,
      name: "Postre Tiramisu",
      image: cake1,
      stars: 4,
      price: 18.99,
    },
    {
      id: 10,
      name: "Postre Chocolate",
      image: cake2,
      stars: 5,
      price: 21.49,
      discount: "10%",
      oldPrice: 23.49,
    },
    {
      id: 11,
      name: "Postre Pie de Limon",
      image: cake3,
      stars: 4,
      price: 23.99,
    },
    {
      id: 12,
      name: "Postre Dona",
      image: cake4,
      stars: 3,
      price: 10.99,
      discount: "15%",
      oldPrice: 13.49,
    },
    {
      id: 13,
      name: "Postre Bizcocho",
      image: cake5,
      stars: 0,
      price: 11.49,
    },
  ];

  // Función para renderizar estrellas
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={i <= count ? "fa-solid fa-star" : "fa-regular fa-star"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="productos-container">
      <Tabs
        defaultActiveKey="prod"
        id="justify-tab-example"
        className="custom-tabs mb-3"
      >
        <Tab eventKey="prod" title="Productos" className="tab-content">
          <Container>
            <Row xs={1} sm={2} md={4} lg={4} className="custom-row g-4">
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[0].id}>
                  <div className="container-img">
                    <img src={products[0].image} alt={products[0].name} />
                    {products[0].discount && (
                      <span className="discount">{products[0].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[0].stars)}
                    </div>
                    <h3>{products[0].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[0].name,
                          price: products[0].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[0].price}
                      {products[0].oldPrice && (
                        <span>Bs{products[0].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[0].id}>
                  <div className="container-img">
                    <img src={products[1].image} alt={products[1].name} />
                    {products[1].discount && (
                      <span className="discount">{products[1].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[1].stars)}
                    </div>
                    <h3>{products[1].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[1].name,
                          price: products[1].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[1].price}
                      {products[1].oldPrice && (
                        <span>Bs{products[1].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[2].id}>
                  <div className="container-img">
                    <img src={products[2].image} alt={products[2].name} />
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[2].stars)}
                    </div>
                    <h3>{products[2].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[2].name,
                          price: products[2].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">Bs{products[2].price}</p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[3].id}>
                  <div className="container-img">
                    <img src={products[3].image} alt={products[3].name} />
                    {/*products[0].discount && (
                      <span className="discount">{products[0].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[3].stars)}
                    </div>
                    <h3>{products[3].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[3].name,
                          price: products[3].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[3].price}
                      {/*products[0].oldPrice && (
                        <span>Bs{products[0].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4} lg={4} className="custom-row g-4">
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[4].id}>
                  <div className="container-img">
                    <img src={products[4].image} alt={products[4].name} />
                    {products[4].discount && (
                      <span className="discount">{products[4].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[4].stars)}
                    </div>
                    <h3>{products[4].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[4].name,
                          price: products[4].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[4].price}
                      {products[4].oldPrice && (
                        <span>Bs{products[4].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[5].id}>
                  <div className="container-img">
                    <img src={products[5].image} alt={products[5].name} />
                    {/*products[0].discount && (
                      <span className="discount">{products[0].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[5].stars)}
                    </div>
                    <h3>{products[5].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[5].name,
                          price: products[5].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[5].price}
                      {/*products[0].oldPrice && (
                        <span>Bs{products[0].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[6].id}>
                  <div className="container-img">
                    <img src={products[6].image} alt={products[6].name} />
                    {products[6].discount && (
                      <span className="discount">{products[6].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[6].stars)}
                    </div>
                    <h3>{products[6].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[6].name,
                          price: products[6].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[6].price}
                      {products[6].oldPrice && (
                        <span>Bs{products[6].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[7].id}>
                  <div className="container-img">
                    <img src={products[7].image} alt={products[7].name} />
                    {/*products[0].discount && (
                      <span className="discount">{products[0].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[7].stars)}
                    </div>
                    <h3>{products[7].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[7].name,
                          price: products[7].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[7].price}
                      {/*products[0].oldPrice && (
                        <span>Bs{products[0].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4} lg={4} className="custom-row g-4">
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[4].id}>
                  <div className="container-img">
                    <img src={products[8].image} alt={products[8].name} />
                    {/*products[4].discount && (
                      <span className="discount">{products[4].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[8].stars)}
                    </div>
                    <h3>{products[8].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[8].name,
                          price: products[8].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[8].price}
                      {/*products[8].oldPrice && (
                        <span>Bs{products[4].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[9].id}>
                  <div className="container-img">
                    <img src={products[9].image} alt={products[9].name} />
                    {products[9].discount && (
                      <span className="discount">{products[9].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[9].stars)}
                    </div>
                    <h3>{products[9].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[9].name,
                          price: products[9].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[9].price}
                      {products[9].oldPrice && (
                        <span>Bs{products[9].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[10].id}>
                  <div className="container-img">
                    <img src={products[10].image} alt={products[10].name} />
                    {/*products[6].discount && (
                      <span className="discount">{products[6].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[10].stars)}
                    </div>
                    <h3>{products[10].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[10].name,
                          price: products[10].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[10].price}
                      {/*products[10].oldPrice && (
                        <span>Bs{products[10].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[11].id}>
                  <div className="container-img">
                    <img src={products[11].image} alt={products[11].name} />
                    {products[11].discount && (
                      <span className="discount">{products[11].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[11].stars)}
                    </div>
                    <h3>{products[11].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[11].name,
                          price: products[11].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[11].price}
                      {products[11].oldPrice && (
                        <span>Bs{products[11].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Destacados">
          <Container>
            <Row xs={1} sm={2} md={4} lg={4} className="custom-row g-4">
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[3].id}>
                  <div className="container-img">
                    <img src={products[3].image} alt={products[3].name} />
                    {/*products[0].discount && (
                      <span className="discount">{products[0].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[3].stars)}
                    </div>
                    <h3>{products[3].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[3].name,
                          price: products[3].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[3].price}
                      {/*products[0].oldPrice && (
                        <span>Bs{products[0].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[5].id}>
                  <div className="container-img">
                    <img src={products[5].image} alt={products[5].name} />
                    {/*products[1].discount && (
                      <span className="discount">{products[1].discount}</span>
                    )*/}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[5].stars)}
                    </div>
                    <h3>{products[5].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[5].name,
                          price: products[5].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[5].price}
                      {/*products[1].oldPrice && (
                        <span>Bs{products[1].oldPrice}</span>
                      )*/}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[7].id}>
                  <div className="container-img">
                    <img src={products[7].image} alt={products[7].name} />
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[7].stars)}
                    </div>
                    <h3>{products[7].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[7].name,
                          price: products[7].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">Bs{products[7].price}</p>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="card-product" key={products[9].id}>
                  <div className="container-img">
                    <img src={products[9].image} alt={products[9].name} />
                    {products[9].discount && (
                      <span className="discount">{products[9].discount}</span>
                    )}
                    <div className="button-group">
                      <span>
                        <i className="fa-regular fa-eye" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart" />
                      </span>
                      <span>
                        <i className="fa-solid fa-code-compare" />
                      </span>
                    </div>
                  </div>
                  <div className="content-card-product">
                    <div className="stars">
                      {renderStars(products[9].stars)}
                    </div>
                    <h3>{products[9].name}</h3>
                    <span
                      className="add-cart"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        agregarAlCarrito2({
                          name: products[9].name,
                          price: products[9].price,
                        });
                      }}
                    >
                      <i className="fa-solid fa-basket-shopping" />
                    </span>
                    <p className="price">
                      Bs{products[9].price}
                      {products[9].oldPrice && (
                        <span>Bs{products[9].oldPrice}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="longer-tab" title="Recientes">
          <Row xs={1} sm={2} md={4} lg={4} className="custom-row g-4">
            <Col className="d-flex justify-content-center">
              <div className="card-product" key={products[12].id}>
                <div className="container-img">
                  <img src={products[12].image} alt={products[12].name} />
                  {/*products[0].discount && (
                    <span className="discount">{products[0].discount}</span>
                  )*/}
                  <div className="button-group">
                    <span>
                      <i className="fa-regular fa-eye" />
                    </span>
                    <span>
                      <i className="fa-regular fa-heart" />
                    </span>
                    <span>
                      <i className="fa-solid fa-code-compare" />
                    </span>
                  </div>
                </div>
                <div className="content-card-product">
                  <div className="stars">{renderStars(products[12].stars)}</div>
                  <h3>{products[12].name}</h3>
                  <span
                    className="add-cart"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      agregarAlCarrito2({
                        name: products[12].name,
                        price: products[12].price,
                      });
                    }}
                  >
                    <i className="fa-solid fa-basket-shopping" />
                  </span>
                  <p className="price">
                    Bs{products[12].price}
                    {/*products[0].oldPrice && (
                      <span>Bs{products[0].oldPrice}</span>
                    )*/}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div className="card-product" key={products[0].id}>
                <div className="container-img">
                  <img src={products[1].image} alt={products[1].name} />
                  {products[1].discount && (
                    <span className="discount">{products[1].discount}</span>
                  )}
                  <div className="button-group">
                    <span>
                      <i className="fa-regular fa-eye" />
                    </span>
                    <span>
                      <i className="fa-regular fa-heart" />
                    </span>
                    <span>
                      <i className="fa-solid fa-code-compare" />
                    </span>
                  </div>
                </div>
                <div className="content-card-product">
                  <div className="stars">{renderStars(products[1].stars)}</div>
                  <h3>{products[1].name}</h3>
                  <span
                    className="add-cart"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      agregarAlCarrito2({
                        name: products[1].name,
                        price: products[1].price,
                      });
                    }}
                  >
                    <i className="fa-solid fa-basket-shopping" />
                  </span>
                  <p className="price">
                    Bs{products[1].price}
                    {products[1].oldPrice && (
                      <span>Bs{products[1].oldPrice}</span>
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div className="card-product" key={products[2].id}>
                <div className="container-img">
                  <img src={products[2].image} alt={products[2].name} />
                  <div className="button-group">
                    <span>
                      <i className="fa-regular fa-eye" />
                    </span>
                    <span>
                      <i className="fa-regular fa-heart" />
                    </span>
                    <span>
                      <i className="fa-solid fa-code-compare" />
                    </span>
                  </div>
                </div>
                <div className="content-card-product">
                  <div className="stars">{renderStars(products[2].stars)}</div>
                  <h3>{products[2].name}</h3>
                  <span
                    className="add-cart"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      agregarAlCarrito2({
                        name: products[2].name,
                        price: products[2].price,
                      });
                    }}
                  >
                    <i className="fa-solid fa-basket-shopping" />
                  </span>
                  <p className="price">Bs{products[2].price}</p>
                </div>
              </div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div className="card-product" key={products[3].id}>
                <div className="container-img">
                  <img src={products[3].image} alt={products[3].name} />
                  {/*products[0].discount && (
                      <span className="discount">{products[0].discount}</span>
                    )*/}
                  <div className="button-group">
                    <span>
                      <i className="fa-regular fa-eye" />
                    </span>
                    <span>
                      <i className="fa-regular fa-heart" />
                    </span>
                    <span>
                      <i className="fa-solid fa-code-compare" />
                    </span>
                  </div>
                </div>
                <div className="content-card-product">
                  <div className="stars">{renderStars(products[3].stars)}</div>
                  <h3>{products[3].name}</h3>
                  <span
                    className="add-cart"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      agregarAlCarrito2({
                        name: products[3].name,
                        price: products[3].price,
                      });
                    }}
                  >
                    <i className="fa-solid fa-basket-shopping" />
                  </span>
                  <p className="price">
                    Bs{products[3].price}
                    {/*products[0].oldPrice && (
                        <span>Bs{products[0].oldPrice}</span>
                      )*/}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Products;
