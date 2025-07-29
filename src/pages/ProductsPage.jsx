import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* <Header /> */}

      {/* main */}
      <main className="bg-secondary-subtle">
        <div className="container py-5">
          <h1 className="text-uppercase mb-5">products</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
            {products.map((item) => {
              return (
                <div key={item.id} className="col">
                  <div className="card d-flex align-items-center shadow p-5 h-100">
                    <Link to={`/products/${item.id}`}>
                      <img
                        className="card-img-top img-fluid max-width"
                        src={item.image}
                        alt={item.title}
                      />
                    </Link>
                    <div className="card-body mt-3">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-decoration-none text-reset"
                      >
                        <h3 className="card-title">{item.title}</h3>
                      </Link>
                      <span className="card-text badge text-bg-info text-uppercase p-2 my-3">
                        {item.category}
                      </span>
                      <div className="d-flex justify-content-between align-items-center mt-5">
                        <span className="card-text badge text-bg-success fs-4">
                          <i className="bi bi-currency-euro"></i>
                          {item.price.toFixed(2)}
                        </span>
                        <Link
                          type="button"
                          className="btn btn-primary"
                          to={`/products/${item.id}`}
                        >
                          Show details
                        </Link>
                      </div>
                      {/* <span className="card-text">{item.description}</span> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}
