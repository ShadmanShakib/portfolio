import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Layout({ children }: any) {
  return (
    <div style={{ backgroundColor: "#23252F" }}>
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
