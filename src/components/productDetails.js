import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "./context";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/">
          <button
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Other Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
