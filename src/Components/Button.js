import React from "react";

const Button = ({ children, clickHandler }) => {
  return (
    <button className="button" onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
