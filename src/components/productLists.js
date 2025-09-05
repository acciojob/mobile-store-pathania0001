import React from "react";
import { useProducts } from "./context";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="btn"
            data-testid={`product-${product.id}`}  // ✅ Cypress selector
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#fafafa",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ flex: "1" }}>
              <h3 style={{ margin: "0 0 8px" }}>{product.title}</h3>
              <p style={{ margin: "0 0 8px" }}>{product.description}</p>
              <p style={{ margin: 0 }}>
                <strong>${product.price}</strong>
              </p>
            </div>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "6px",
                marginLeft: "15px",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
