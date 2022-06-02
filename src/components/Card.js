import React from "react";

export default function Card(props) {
  return (
    <div className="Card--full">
      <img src={`./images/${props.img}`} className="Card--img" />
      <div className="card--stats">
        <img src="./images/red-star.png" className="Card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})• </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.tittle}</p>
      <p>
        <span className="bold">From {props.price}$</span> / person
      </p>
    </div>
  );
}
