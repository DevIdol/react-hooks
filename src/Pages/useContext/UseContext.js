import React from "react";
import { useParams } from "react-router-dom";
import { getUseContext } from "./UseContextData";

const UseContext = () => {
  const params = useParams();
  const usecontext = getUseContext(parseInt(params.usecontextId));
  return <div>{usecontext.element}</div>;
};

export default UseContext;
