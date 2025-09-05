import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        color: "#111827",
      }}
    >
      <header
        style={{
          backgroundColor: "#ffffff", 
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <nav
          style={{
            maxWidth: "80rem", 
            margin: "0 auto",
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            padding: "1rem",
            color: "#2563eb", 
            fontWeight: 500,
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/admin">Admin Panel</Link>
        </nav>
      </header>

      <main
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
