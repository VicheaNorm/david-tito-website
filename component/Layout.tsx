import React from "react";
import Footer from "./footer";
import NewNavbar from "./NewNavbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <NewNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
