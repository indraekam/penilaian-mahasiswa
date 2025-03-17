import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "800px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
