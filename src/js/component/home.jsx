import React from "react";
import Header from "./header.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
