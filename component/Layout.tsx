import React from "react";
import Footer from "./footer";
import NewNavbar from "./NewNavbar";
import ScrollTop from "./ScrollTop";

const Layout = ({ children }) => {
  return (
    <div className="">
      <NewNavbar />
      <ScrollTop />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
