import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getUseCallbacks } from "./UseCallbackData";
const UseCallbackItem = () => {
  const usecallbacks = getUseCallbacks();
  return (
    <div style={{ display: "flex", marginTop: "10px" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
        <ul>
          {usecallbacks.map((data) => (
            <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 20px",
                fontWeight: "300",
                fontSize: "18px",
                color: isActive ? "red" : "",
                textDecoration: isActive ? "" : "none",
              };
            }} to={`/UseCallback/${data.id}`} key={data.id}>
              {data.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default UseCallbackItem;
