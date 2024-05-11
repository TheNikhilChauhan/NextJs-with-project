import React from "react";
import Navbar from "../component/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
