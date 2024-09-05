import React from "react";
import Headers from "./headers.jsx";
import Bodys from "./bodys.jsx";
import Footers from "./footers.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Headers />
      <Bodys />
      <Footers />
    </div>
  );
};

export default Home;
