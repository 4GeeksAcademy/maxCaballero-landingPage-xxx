import React from "react";

function Cards(props) {
  return (
    <div className="contenedor-card col-md-10 m-auto bg-success py-2">
      <div className="card" style={{ width: "15rem" }}>
        <img
          src={require(`../../img/${props.imgs}.jpg`)}
          className="card-img-top"
          alt="{props.altx}"
        />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.cargo}</p>
          <p className="card-text">"{props.notas}"</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
