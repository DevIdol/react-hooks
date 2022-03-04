import React from "react";
import { NavLink } from "react-router-dom";
import { getNavItems } from "./NavItems";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navitems = getNavItems();
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>React-Hooks</h1>
        <nav>
          <ul>
            {navitems.map((item) => {
              return (
                <NavLink className={styles.item} to={`/${item.name}`} key={item.id}>
                  {item.name}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
