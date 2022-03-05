import React, { useEffect, useState } from "react";

const UseEffectThree = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount(count + 1);
        },1000)
        return () => clearTimeout(timer);
    },[count])
  return <section>
      <h1>Count: {count}</h1>
  </section>;
};

export default UseEffectThree;
