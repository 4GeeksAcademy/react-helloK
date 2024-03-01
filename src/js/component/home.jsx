import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
