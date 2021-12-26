import { BrowserRouter as Router, Link } from "react-router-dom";

import classes from "./NavItems.module.css";

const NavItems = () => {
  return (
    <Router>
      <ul className={classes.nav__items}>
        <li className={classes.nav__item}>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className={classes.nav__item}>
          <Link to="/resume">Resume</Link>
        </li>
        <li className={classes.nav__item}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </Router>
  );
};

export default NavItems;
