import React, { useState } from "react";

const UseStateTwo = () => {
  const [car, setCar] = useState({
    brand: "Tesla",
    model: "Model-3",
    year: 2020,
    color: "White",
  });
  const changeModel = () => {
    setCar((preState) => {
      return { ...preState, model: "Model-X" };
    });
  };
  const changeYear = () => {
    setCar((preState) => {
      return { ...preState, year: 2022 };
    });
  };
  const changeColor = () => {
    setCar((preState) => {
      return { ...preState, color: "Red" };
    });
  };
  return (
    <section>
      <h1 style={{ paddingBottom: "10px" }}>
        My Car is {car.brand} {car.model} {car.year}. It's {car.color} color.
      </h1>
      <button style={{ padding: "4px 8px" }} onClick={changeModel}>
        Change Model
      </button>
      <button style={{ padding: "4px 8px", margin: "0px 10px" }} onClick={changeYear}>
        Change Year
      </button>
      <button style={{ padding: "4px 8px" }} onClick={changeColor}>
        Change Color
      </button>
    </section>
  );
};

export default UseStateTwo;
