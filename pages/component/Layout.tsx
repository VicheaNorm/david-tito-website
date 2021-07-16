import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
// import NewFooter from "./NewFooter";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
