import React from "react";
import Jumbotrons from "./jumbotrons.jsx";
import Cards from "./cards.jsx";

function Bodys() {
  const cardData = [
    {
      imgs: "f1",
      altx: "veremos",
      nombre: "Max",
      cargo: "Oficinista",
      notas:
        "vulnerabilities on 4GeeksAcademy/maxCaballero-landingPage-xxx's default branc",
    },
    {
      imgs: "f1",
      altx: "veremos",
      nombre: "Max",
      cargo: "Oficinista",
      notas:
        "vulnerabilities on 4GeeksAcademy/maxCaballero-landingPage-xxx's default branc",
    },
    {
      imgs: "f1",
      altx: "veremos",
      nombre: "Max",
      cargo: "Oficinista",
      notas:
        "vulnerabilities on 4GeeksAcademy/maxCaballero-landingPage-xxx's default branc",
    }
  ];

  return (
    <div>
      <Jumbotrons />
      {cardData.map((card, index) => (
        <Cards key={index} {...card} />
      ))}
    </div>
  );
}
export default Bodys;
