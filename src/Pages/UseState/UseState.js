import React from "react";
import { useParams } from "react-router-dom";
import { getUseState } from "./UseStateData";
const UseState = () => {
    let params = useParams();
    let usestate = getUseState(parseInt(params.usestateId, 10));
//   console.log(usestate);
  return <section style={{paddingTop: "30px", marginLeft: "40px"}}>{usestate.element}</section>;
};

export default UseState;
