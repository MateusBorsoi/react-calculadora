import React from "react";
import "./Button.css";

const Button = (props) => {
  const { operation, double, triple, click, label } = props;

  let classes = "button";
  classes += operation ? " operation" : " ";
  classes += double ? " double" : " ";
  classes += triple ? " triple" : " ";

  const handleClick = () => {
    if (click) {
      click(label);
    }
  };

  return (
    <button onClick={handleClick} className={classes}>
      {props.label}
    </button>
  );
};

export default Button;
