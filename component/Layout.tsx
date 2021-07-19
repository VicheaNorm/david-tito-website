import React from "react";
import Footer from "./footer";
import NewNavbar from "./NewNavbar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <NewNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
