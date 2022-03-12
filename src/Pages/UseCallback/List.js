import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating Items");
  }, [getItems]);
  return (
    <div>
      {items.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
    </div>
  );
};

export default List;
