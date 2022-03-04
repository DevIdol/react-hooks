import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getUseStates } from "./UseStateData";

const UseStateItem = () => {
  const usestates = getUseStates();
  return (
    <section style={{ display: "flex", marginTop: "10px" }}>
      <nav style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}>
        <ul>
          {usestates.map((data) => {
            return (
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
                }}
                to={`/UseState/${data.id}`}
                key={data.id}
              >
                {data.name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default UseStateItem;
