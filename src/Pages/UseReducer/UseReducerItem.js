import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getUseReducers } from "./UseReducerData";

const UseReducerItem = () => {
  const usereducers = getUseReducers();
  return (
    <section style={{ display: "flex", marginTop: "10px" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <ul>
          {usereducers.map((data) => {
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
                to={`/UseReducer/${data.id}`}
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

export default UseReducerItem;
