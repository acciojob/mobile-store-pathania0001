import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    title: "iPhone 14",
    description: "Latest Apple iPhone",
    price: 999,
    image: "https://i.ibb.co/fdx3qcL8/pexels-jessbaileydesign-788946.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    description: "Latest Samsung flagship",
    price: 899,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/f2507/gallery/levant-galaxy-z-fold7-f966-sm-f966bzkhmea-thumb-547546781?$216_216_PNG$",
  },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
