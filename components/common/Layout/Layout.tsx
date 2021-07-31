import React from "react";
import { Header, Footer } from "@components/common";

function Layout({ children }: any): JSX.Element {
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <div className="max-w-screen-xl mx-auto">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
