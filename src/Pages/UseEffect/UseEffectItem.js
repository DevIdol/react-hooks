import { NavLink, Outlet } from "react-router-dom";
import { getUseEffects } from "./UseEffectData";
const UseEffectItem = () => {
  const useeffects = getUseEffects();
  return (
    <section style={{ display: "flex", marginTop: "10px" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <ul>
          {useeffects.map((data) => {
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
                to={`/UseEffect/${data.id}`}
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

export default UseEffectItem;
