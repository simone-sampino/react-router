import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetailsPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="card col-6 mx-auto d-flex align-items-center shadow p-5 my-5 h-100">
          <img
            className="card-img-top img-fluid max-width"
            src={products.image}
            alt={products.title}
          />
          <div className="card-body mt-3">
            <h3 className="card-title">{products.title}</h3>
            <span className="card-text badge text-bg-info text-uppercase p-2 my-3">
              {products.category}
            </span>
            <div className="card-text">{products.description}</div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <span className="card-text badge text-bg-success fs-4">
                <i className="bi bi-currency-euro"></i>
                {products?.price?.toFixed(2)}
              </span>
              <button type="button" className="btn btn-primary">
                <i class="bi bi-cart3"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
