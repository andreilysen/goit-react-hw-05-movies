import { NavLink } from "react-router-dom";
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
        Home
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Navigation;
