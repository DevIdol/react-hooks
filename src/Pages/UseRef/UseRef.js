import React from "react";
import { useParams } from "react-router-dom";
import { getUseRef } from "./UseRefData";

const UseRef = () => {
  const params = useParams();
  const useref = getUseRef(parseInt(params.userefId));
  return <div>{useref.element}</div>;
};

export default UseRef;
