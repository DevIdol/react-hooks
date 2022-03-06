import React, { createContext, useContext, useState } from "react";

const colors = {
  blue: "#03619c",
};
const ColorContext = createContext(colors);

const UseContextThree = () => {
  return (
    <ColorContext.Provider value={colors}>
      <ComponentOne />
    </ColorContext.Provider>
  );
};

const ComponentOne = () => <ComponentTwo />;

const ComponentTwo = () => {
  let colors = useContext(ColorContext);
  return (
    <div>
      <h2 style={{ color: colors.blue, padding: "40px" }}>UseContext</h2>
    </div>
  );
};

export default UseContextThree;
