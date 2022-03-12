import React, { useEffect, useState } from "react";

const CustomHookOne = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);

  return (
    <div style={{ padding: "30px" }}>
      <ol>
      {data && data.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ol>
    </div>
  );
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default CustomHookOne;
