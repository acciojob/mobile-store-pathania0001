import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useProducts } from "./context";

const AdminPanel = () => {
  const { products,deleteProduct } = useProducts();


  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>

      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ flex: 1 }}>
          <Link to="/admin/add" style={{ display: "inline-block", margin: "10px 0" }}>
            ➕ Add Product
          </Link>

          <ul>
            {products.map((product) => (
              <li key={product.id} style={{ marginBottom: "10px" }}>
                <strong>{product.title}</strong> - ${product.price}
                <div>
                  <Link to={`/admin/edit/${product.id}`} style={{ marginRight: "10px" }}>
                    ✏️ Edit
                  </Link>
                  <button onClick={() => deleteProduct(product.id)}>🗑 Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

       
        {/* <div style={{ flex: 1, borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
          <h2>Product Form</h2>
          {isAddPage && <AddEditProduct type="add" />}
          {isEditPage && <AddEditProduct type="edit" id={id} />}
          {!isAddPage && !isEditPage && <p>Select Add or Edit to see the form here.</p>}
        </div> */}
      </div>
    </div>
  );
};

export default AdminPanel;
