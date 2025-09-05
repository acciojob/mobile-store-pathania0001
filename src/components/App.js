import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./productDetails";
import ProductList from "./productLists";
import AdminPanel from "./adminPannel";
import AddEditProduct from "./addEditProduct";
import "../styles/App.css"
import Layout from "./layout";
const App = () => {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/add" element={<AddEditProduct type="add" />} />
        <Route path="/admin/edit/:id" element={<AddEditProduct type="edit" />} />
      </Routes>
    </Router>
  );
};

export default App;
