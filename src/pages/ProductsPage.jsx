import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* header */}
      <Header />

      {/* main */}
      <main className="bg-secondary-subtle">
        <div className="container py-5">
          <h1 className="text-uppercase mb-5">products</h1>
          <div className="row g-5">
            {products.map((item) => {
              return (
                <div key={item.id} className="col-4">
                  <div className="card p-5 h-100">
                    <img
                      className="card-img-top img-fluid max-width pb-5"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="card-body mt-3">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text badge text-bg-success">
                        <i class="bi bi-currency-euro"></i>
                        {item.price}
                      </p>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text badge text-bg-info text-uppercase">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}
