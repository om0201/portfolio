import { Link } from "react-router-dom";

import classes from "./NavItems.module.css";

const NavItems = () => {
  return (
    <ul className={classes.nav__items}>
      <li className={classes.nav__item}>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className={classes.nav__item}>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
};

export default NavItems;
