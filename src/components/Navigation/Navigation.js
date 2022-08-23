import { NavLink } from "react-router-dom";

import logo from "../../image/logo.png";
import searchIcon from "../../image/searchIcon.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
        to="/"
      >
        <div>
          <img src={logo} alt="" className={styles.logo} />
        </div>
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/movies"
      >
        <div>
          <img src={searchIcon} alt="" className={styles.logo} />
        </div>
      </NavLink>
    </header>
  );
};

export default Navigation;
