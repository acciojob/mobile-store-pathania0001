import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./context";

const AdminPanel = () => {
  const { products, deleteProduct } = useProducts();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>

      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ flex: 1 }}>
          <Link
            to="/admin/add"
            data-testid="add-product"
            style={{ display: "inline-block", margin: "10px 0" }}
          >
            ➕ Add Product
          </Link>

          <ul>
            {products.map((product) => (
              <li key={product.id} style={{ marginBottom: "10px" }}>
                <strong>{product.title}</strong> - ${product.price}
                <div>
                  <Link
                    to={`/admin/edit/${product.id}`}
                    data-testid={`edit-${product.id}`}
                    style={{ marginRight: "10px" }}
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    data-testid={`delete-${product.id}`}
                    onClick={() => deleteProduct(product.id)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
