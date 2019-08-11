import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <Menu className={styles.navbar}>
      <Menu.Item header className={styles.navBrand}>
        <div className={styles.logo}>Neverending Todos</div>
      </Menu.Item>
      <Menu.Menu position="right">
        <NavLink to="/registration">
          <Menu.Item>Register</Menu.Item>
        </NavLink>
        <NavLink to="/login">
          <Menu.Item>Login</Menu.Item>
        </NavLink>
        <NavLink to="/logout">
          <Menu.Item>Logout</Menu.Item>
        </NavLink>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
