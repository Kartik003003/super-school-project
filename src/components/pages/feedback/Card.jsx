import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <div className="card-slider">
        <img src={props.img} alt="" />
        <p>
          {props.des}
        </p>
        <h2>{props.name}</h2>
        <h4>{props.post}</h4>
      </div>
    </div>
  );
};

export default Card;
