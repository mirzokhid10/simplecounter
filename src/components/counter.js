import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./counter.css";

const Counter = () => {
  const [changecolor, setChangeColor] = useState("#das54d");

  const handleClick = () => {
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor(randomColor);
  };

  return (
    <>
      <div className="app w-100 h-100" style={{ background: changecolor }}>
        <h1>background color is {changecolor}</h1>
        <button
          style={{ border: "2px solid black", padding: "5px 15px" }}
          onClick={handleClick}
        >
          click me
        </button>
      </div>
    </>
  );
};
export default Counter;
