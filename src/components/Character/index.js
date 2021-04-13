import React from "react";
import "./styles.css";

const Character = (props) => {
  return (
    <div className="x">
      <p>{props.name}</p>
    </div>
  );
};

export default Character;
