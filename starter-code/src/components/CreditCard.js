import React from "react";

export default function CreditCard(props) {
  const cardStyle = {
    backgroundColor: props.bgColor,
    borderRadius: "10px",
    color: `${props.color}`,
  };
  const cardFlag = {
    Visa: "./img/visa.png",
    "Master Card": "./img/master-card.svg",
  };
  return (
    <div style={cardStyle} className="card">
      <div className="cardFlag">
        <img src={cardFlag[props.type.toString()]} alt="card flag" />
      </div>
      <h4>•••• •••• •••• {props.number.slice(12)}</h4>
      <div>
        <p>
          Expires{" "}
          {props.expirationMonth.toString().length < 2
            ? "0" + props.expirationMonth
            : props.expirationMonth}
          /{props.expirationYear.toString().slice(2)} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
