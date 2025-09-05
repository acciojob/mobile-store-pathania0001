import React, { useState, useEffect } from "react";
import { useProducts } from "./context";
import { useNavigate, useParams } from "react-router-dom";

const AddEditProduct = ({ type }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  // Pre-fill form when editing
  useEffect(() => {
    if (type === "edit" && id) {
      const existing = products.find((p) => p.id === Number(id));
      if (existing) {
        setProduct(existing);
      }
    }
  }, [id, type, products]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Add or update product
  const handleClick = () => {
    if (!product.title || !product.price || !product.description || !product.image) {
      alert("Please fill all fields");
      return;
    }

    if (type === "add") {
      addProduct(product);
    } else {
      updateProduct(Number(id), product);
    }

    setProduct({ title: "", description: "", image: "", price: "" });
    navigate("/admin");
  };

  // Delete product
  const handleDelete = () => {
    if (id) {
      deleteProduct(Number(id));
      navigate("/admin");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>{type === "add" ? "Add New Product" : "Edit Product"}</h2>

      <input
        type="text"
        name="title"
        placeholder="Enter product title"
        value={product.title}
        onChange={handleChange}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      />

      <textarea
        name="description"
        placeholder="Enter product description"
        value={product.description}
        onChange={handleChange}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      />

      <input
        type="text"
        name="image"
        placeholder="Enter image URL"
        value={product.image}
        onChange={handleChange}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      />

      <input
        type="number"
        name="price"
        placeholder="Enter price"
        value={product.price}
        onChange={handleChange}
        style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleClick}
          style={{ padding: "8px 12px", background: "green", color: "white", border: "none" }}
        >
          {type === "add" ? "Add Product" : "Update Product"}
        </button>
        {type === "edit" && (
          <button
            onClick={handleDelete}
            style={{ padding: "8px 12px", background: "red", color: "white", border: "none" }}
          >
            Delete Product
          </button>
        )}
      </div>
    </div>
  );
};

export default AddEditProduct;
