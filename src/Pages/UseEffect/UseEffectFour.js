import React, { useEffect, useState } from "react";

const UseEffectFour = () => {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);
  //   console.log("Rendering")
  useEffect(() => {
    //   console.log(resourceType)
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
//   console.log(items);
  return (
    <section>
      <button
        style={{ padding: "2px 8px" }}
        onClick={() => setResourceType("users")}
      >
        User
      </button>
      <button
        style={{ padding: "2px 8px" }}
        onClick={() => setResourceType("posts")}
      >
        Post
      </button>
      <button
        style={{ padding: "2px 8px" }}
        onClick={() => setResourceType("comments")}
      >
        Comment
      </button>
      <h2 style={{ padding: "20px" }}>{resourceType}</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ol>
    </section>
  );
};

export default UseEffectFour;
