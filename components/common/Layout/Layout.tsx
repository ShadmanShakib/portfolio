import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Layout({ children }: any) {
  return (
    <div style={{ backgroundColor: "#23252F" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
