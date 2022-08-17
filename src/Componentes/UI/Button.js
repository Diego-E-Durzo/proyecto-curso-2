import React from "react";
import '../styles/ui.css'

const Button = (props) => {
  return (
    <button
      className="button-def"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
