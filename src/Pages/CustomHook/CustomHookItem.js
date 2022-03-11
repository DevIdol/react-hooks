import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getCustomHooks } from "./CustomHookData";

const CustomHookItem = () => {
  const customhooks = getCustomHooks();
  return (
    <div style={{ display: "flex", marginTop: "10px" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <ul>
          {customhooks.map((data) => (
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
              to={`/CustomHook/${data.id}`}
              key={data.id}
            >
              {data.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default CustomHookItem;
