import React from "react";
import Contador from "../pruebas/contador.jsx"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Contador />
    </div>
  );
};

export default Home;
