import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styles from "./Navbar.module.scss";
import AuthService from "../../utils/AuthService";

const auth = new AuthService();
const Navbar = props => {
  console.log("Auth: ", auth.isAuthenticated());
  const logOut = () => {
    auth.logout();
    props.history.push("/");
  };
  return (
    <Menu className={styles.navbar}>
      <Menu.Item header className={styles.navBrand}>
        <div className={styles.logo}>Neverending Todos</div>
      </Menu.Item>
      <Menu.Menu position="right">
        {!auth.isAuthenticated() && (
          <NavLink to="/registration">
            <Menu.Item>Register</Menu.Item>
          </NavLink>
        )}
        {!auth.isAuthenticated() && (
          <NavLink to="/login">
            <Menu.Item>Login</Menu.Item>
          </NavLink>
        )}

        {auth.isAuthenticated() && (
          <Menu.Item onClick={logOut}>Logout</Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(Navbar);
